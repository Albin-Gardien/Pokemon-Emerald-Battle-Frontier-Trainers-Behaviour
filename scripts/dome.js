"use strict";

// -----------------------------------------------------------------------------
// Conditional selection probabilities
// -----------------------------------------------------------------------------

function getDomeTrainerSeries() {
    const series = getFacilityChallengeSeries();
    const index = (series - 1) % 256; // GetRandomScaledFrontierTrainerId takes u8.
    const ranges = window.domeData?.trainerRanges ?? [];
    const first = ranges[Math.min(index, 7)] ?? [1, 100];
    const next = ranges[Math.min((index + 1) % 256, 7)] ?? first;
    return { id: `dome_${series}`, start: Math.min(first[0], next[0]), end: Math.max(first[1], next[1]) };
}

function getDomeBrainTrainers() {
    if (battleState.facility !== "dome" || battleState.format !== "singles") { return []; }
    const series = getFacilityChallengeSeries();
    const phase = series === 5 ? "silver" : series >= 10 && series % 5 === 0 ? "gold" : null;
    return (window.domeData?.brainTeams ?? []).filter((trainer) => trainer.brainPhase === phase)
        .map((trainer) => ({ ...trainer, seriesIds: [getDomeTrainerSeries().id] }));
}

function isDomeMonAllowedAtLevel(mon, level) {
    return level !== 50 || !window.domeData?.openLevelOnlySetIds.includes(mon.sourceSetId ?? mon.id);
}

function getDomeMovePoints(moveId, targetSpeciesId, mode) {
    const move = window.domeData.moves[moveId];
    if (!moveId || !move || move.power === 0) { return 0; }
    const target = targetSpeciesId ? window.domeData.species[targetSpeciesId] : null;
    if (targetSpeciesId && !target) { throw new Error(`Unknown Dome species: ${targetSpeciesId}`); }
    // The cartridge reads the FIRST species ability, not the actual chosen ability.
    // Levitate/Ground and Wonder Guard both end up scored as neutral, due to bugs.
    const ability = target?.abilities[0];
    if ((ability === "levitate" && move.type === "ground") || ability === "wonder_guard") {
        return mode === "good" ? 2 : 0;
    }
    let multiplier = 1;
    for (const type of target?.types ?? ["normal"]) {
        multiplier *= window.domeData.typeChart[move.type]?.[type] ?? 1;
    }
    const key = String(multiplier);
    return (mode === "good" ? { 0: 0, 0.25: 0, 0.5: 0, 1: 2, 2: 4, 4: 8 }
        : { 0: 8, 0.25: 4, 0.5: 2, 1: 0, 2: -2, 4: -4 })[key] ?? 0;
}

function getDomePairDistribution(scores) {
    if (scores.every((score) => score === scores[0])) { return null; }
    let branches = [{ scores: [...scores], positions: [0, 1, 2], probability: 1 }];
    // Preserve the cartridge's comparison order and every independent tie coin.
    for (const [i, j] of [[0, 1], [0, 2], [1, 2]]) {
        const next = [];
        for (const branch of branches) {
            const swap = (candidate) => {
                [candidate.scores[i], candidate.scores[j]] = [candidate.scores[j], candidate.scores[i]];
                [candidate.positions[i], candidate.positions[j]] = [candidate.positions[j], candidate.positions[i]];
            };
            if (branch.scores[i] < branch.scores[j]) { swap(branch); }
            if (branch.scores[i] === branch.scores[j]) {
                const other = { scores: [...branch.scores], positions: [...branch.positions],
                    probability: branch.probability / 2 };
                branch.probability /= 2;
                swap(other);
                next.push(other);
            }
            next.push(branch);
        }
        branches = next;
    }
    const probabilities = { 3: 0, 5: 0, 6: 0 };
    for (const branch of branches) {
        const mask = (1 << branch.positions[0]) | (1 << branch.positions[1]);
        probabilities[mask] += branch.probability;
    }
    return probabilities;
}

function calculateDomeSelection(team, playerDuo, isBrain = false) {
    if (team.length !== 3 || playerDuo.length !== 2 ||
        playerDuo.some((id) => !window.domeData?.species[id]) ||
        team.some((mon) => mon.moves.some((id) => id && !window.domeData?.moves[id]))) {
        return { valid: false };
    }
    // ReducePlayerPartyToSelectedMons leaves an empty Normal/Normal third slot.
    const targets = [...playerDuo, ""];
    const score = (mode) => team.map((mon) => mon.moves.reduce((sum, moveId) =>
        sum + targets.reduce((points, id) => points + getDomeMovePoints(moveId, id, mode), 0), 0));
    const goodScores = score("good"), badScores = score("bad");
    const good = getDomePairDistribution(goodScores), bad = getDomePairDistribution(badScores);
    const random = { 3: 1 / 3, 5: 1 / 3, 6: 1 / 3 };
    const first = good ?? bad ?? random, second = bad ?? good ?? random;
    const pairProbabilities = {};
    for (const mask of [3, 5, 6]) { pairProbabilities[mask] = (first[mask] + second[mask]) / 2; }
    // Ordinary trainers: Random()%10 > 5 creates the earlier listed mon first.
    // 26212 of the 65536 u16 values satisfy this test (nominally 40%, not 60%).
    // The Brain uses CreateFrontierBrainPokemon and keeps the list order.
    const forward = isBrain ? 1 : 26212 / 65536;
    const outcomes = [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1]].map((order) => ({
        order, probability: pairProbabilities[(1 << order[0]) | (1 << order[1])] *
            (order[0] < order[1] ? forward : 1 - forward)
    }));
    return { valid: true, goodScores, badScores, pairProbabilities, outcomes };
}

function getDomeBattleStyle(team) {
    const points = Array(16).fill(0);
    for (const mon of team) {
        for (const id of mon.moves) {
            const vector = window.domeData.moves[id]?.stylePoints;
            if (vector) { vector.forEach((value, index) => { points[index] += value; }); }
        }
    }
    return window.domeData.styleThresholds.findIndex((thresholds) =>
        thresholds.every((threshold, index) => points[index] >= threshold));
}

function getDomeStatStyle(team, isBrain = false) {
    // Keep the original scratch-array indexing. The negative-nature tie breaks
    // differ from the simplified stat-order implementation in DomeAssistantWeb.
    const stats = ["hp", "atk", "def", "spe", "spa", "spd"];
    const a = Array(18).fill(0);
    for (const mon of team) {
        const trained = stats.filter((stat) => mon.evs?.[stat] > 0).length;
        if (!isBrain && !trained) { return null; }
        for (let j = 0; j < 6; j++) {
            a[j] = isBrain ? mon.evs?.[stats[j]] ?? 0 :
                mon.evs?.[stats[j]] > 0 ? Math.floor(510 / trained) : 0;
        }
        a[6] += a[0];
        const nature = natureModifiers[mon.nature];
        for (let j = 0; j < 5; j++) {
            const stat = stats[j + 1];
            const modifier = nature?.up === stat ? 110 : nature?.down === stat ? 90 : 100;
            a[j + 7] += Math.floor(a[j + 1] * modifier / 100);
            if (modifier === 90) { a[j + 13]++; }
        }
    }
    const total = a.slice(6, 12).reduce((sum, value) => sum + value, 0);
    if (!total) { return null; }
    for (let k = 0; k < 6; k++) { a[k] = Math.floor(a[6 + k] * 100 / total); }
    let good = 0, bad = 0;
    for (let k = 0; k < 6; k++) {
        if (a[k] > 29) {
            if (good === 2) {
                if (a[6] < a[k]) {
                    if (a[7] < a[k]) {
                        if (a[6] < a[7]) { a[6] = a[7]; a[7] = k; }
                        else { a[7] = k; }
                    } else { a[6] = a[7]; a[7] = k; }
                } else if (a[7] < a[k]) { a[7] = k; }
            } else { a[6 + good] = k; good++; }
        }
        if (a[k] === 0) {
            if (bad === 2) {
                if (a[k + 12] >= 2 || (a[k + 12] === 1 && a[12 + a[8]] === 0 && a[12 + a[9]] === 0)) {
                    a[8] = a[9]; a[9] = k;
                } else if (a[k + 12] === 1 && a[12 + a[8]] === 0) {
                    a[8] = a[9]; a[9] = k;
                } else if (a[k + 12] === 1 && a[12 + a[9]] === 0) { a[9] = k; }
            } else { a[8 + bad] = k; bad++; }
        }
    }
    const offsets = [0, 5, 9, 12, 14];
    if (good === 2) { return offsets[a[6]] + a[7] - a[6] - 1; }
    if (good === 1) { return a[6] + 15; }
    if (bad === 2) { return offsets[a[8]] + a[9] - a[8] - 1 + 21; }
    if (bad === 1) { return a[8] + 36; }
    return 42;
}

function findDomeTeams(mons, speciesIds, setIds = [], filters = {}, isBrain = false) {
    if (speciesIds.length !== 3 || speciesIds.some((id) => !id) || new Set(speciesIds).size !== 3) { return []; }
    const lists = speciesIds.map((speciesId, index) => mons.filter((mon) =>
        mon.speciesId === speciesId && (!setIds[index] || setIds[index] === mon.id)));
    const result = [];
    for (const first of lists[0]) {
        for (const second of lists[1]) {
            if (first.item === second.item) { continue; }
            for (const third of lists[2]) {
                if (first.item === third.item || second.item === third.item) { continue; }
                const team = [first, second, third];
                if (filters.knownMoves?.some((moveId) => !team.some((mon) => mon.moves.includes(moveId)))) { continue; }
                if (filters.battleStyle !== undefined && filters.battleStyle !== "" &&
                    getDomeBattleStyle(team) !== Number(filters.battleStyle)) { continue; }
                if (filters.statStyle !== undefined && filters.statStyle !== "" &&
                    getDomeStatStyle(team, isBrain) !== Number(filters.statStyle)) { continue; }
                result.push(team);
            }
        }
    }
    return result;
}

function getDomeTieWinner(playerSeed, opponentSeed, isBrain = false) {
    // The map script bypasses seed comparison for Tucker: he always wins a draw.
    if (isBrain) { return "opponent"; }
    if (!Number.isInteger(playerSeed) || playerSeed < 1 || playerSeed > 16) { return "unknown"; }
    if (!Number.isInteger(opponentSeed) || opponentSeed < 1 || opponentSeed > 16 || opponentSeed === playerSeed) {
        return "unknown";
    }
    return playerSeed < opponentSeed ? "player" : "opponent";
}

// -----------------------------------------------------------------------------
// Independent player team and trainer-bound opponent information.
// -----------------------------------------------------------------------------

const domeToolState = {
    players: Array.from({ length: 3 }, () => ({ speciesId: "", ability: "" })),
    trainerKey: null, opponents: Array.from({ length: 3 }, () => ({ speciesId: "", setId: "" })),
    battleStyle: "", statStyle: "", knownMoves: [], playerSeed: "", opponentSeed: "", page: 1, contextKey: null
};
const domeKnownMoveSuggestions = { matches: [], activeIndex: -1 };

function getDomeSpeciesList() { return Object.values(window.domeData?.species ?? {}); }

function findDomeSpecies(value, species) {
    const normalize = (text) => normalizeText(text.replaceAll("♀", "f").replaceAll("♂", "m")
        .replaceAll("œ", "oe").replaceAll("Œ", "OE"));
    const key = normalize(value);
    return species.find((mon) => [mon.speciesId, mon.names.fr, mon.names.en]
        .some((name) => normalize(name) === key));
}

function getDomeAbilityName(id) {
    const names = window.appTranslations.abilities[id] ?? window.domeData.abilityNames[id];
    return names?.[currentLang] ?? names?.en ?? id;
}

function getDomeSetLabel(mon) {
    return `${getName(mon)}${mon.setNumber === null || mon.setNumber === undefined ? "" : ` ${mon.setNumber}`}`;
}

function createDomePokemonSequence(mons, getLabel = getDomeSetLabel, separator = " → ") {
    const sequence = document.createElement("span");
    sequence.className = "dome-pokemon-sequence";
    mons.forEach((mon, index) => {
        if (index) {
            const join = document.createElement("span");
            join.className = "dome-pokemon-separator";
            join.textContent = separator;
            sequence.appendChild(join);
        }
        const label = document.createElement("span");
        label.className = "dome-pokemon-label";
        setSpriteTextCell(label, getPokemonSpriteUrl(mon), getLabel(mon), "", "pokemon");
        sequence.appendChild(label);
    });
    return sequence;
}

function createDomeOption(value, text) {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = text;
    return option;
}

function createDomeField(control, key, values, helpKey) {
    const field = document.createElement("div");
    field.className = "dome-field";
    const label = document.createElement("label");
    label.htmlFor = control.id;
    label.textContent = formatFacilityText(key, values);
    if (helpKey) { label.appendChild(createHelpTooltip(translate("ui", helpKey))); }
    field.append(label, control);
    return field;
}

function getDomeOpponentMons() {
    const trainer = getCurrentTrainer();
    return trainer ? getTrainerMonsForLevel(trainer, getSelectedLevel()) : [];
}

function syncDomeTrainerState() {
    const trainer = getCurrentTrainer();
    const context = `${getFacilityChallengeSeries()}/${getSelectedLevel()}/${battleState.format}`;
    const key = `${context}/${trainer?.id ?? ""}`;
    if (key === domeToolState.trainerKey) { return false; }
    if (context !== domeToolState.contextKey) { domeToolState.playerSeed = ""; }
    domeToolState.contextKey = context;
    domeToolState.trainerKey = key;
    domeToolState.opponents = Array.from({ length: 3 }, (_, index) => ({
        speciesId: trainer?.isDomeBrain ? trainer.team[index].speciesId : "",
        setId: trainer?.isDomeBrain ? trainer.team[index].id : ""
    }));
    domeToolState.battleStyle = "";
    domeToolState.statStyle = "";
    domeToolState.knownMoves = [];
    domeKnownMoveSuggestions.matches = [];
    domeKnownMoveSuggestions.activeIndex = -1;
    domeToolState.opponentSeed = "";
    domeToolState.page = 1;
    return true;
}

function getDomePlayerScenarios() {
    return domeToolState.players.every((mon) => mon.speciesId) ? [[0, 1], [0, 2], [1, 2]] : [];
}

function getDomeCandidateTeams(useComments = true) {
    return findDomeTeams(getDomeOpponentMons(), domeToolState.opponents.map((mon) => mon.speciesId),
        domeToolState.opponents.map((mon) => mon.setId),
        useComments ? domeToolState : { knownMoves: domeToolState.knownMoves }, !!getCurrentTrainer()?.isDomeBrain);
}

// Keep the raw trainer pool for editing fields. Only the shared battle source
// is narrowed, so clearing a filter can always restore previously hidden sets.
function filterDomeBattleMons(mons) {
    const slots = domeToolState.opponents.filter((mon) => mon.speciesId);
    if (!slots.length) { return mons; }
    if (slots.length < 3) {
        return mons.filter((mon) => slots.some((slot) => slot.speciesId === mon.speciesId &&
            (!slot.setId || slot.setId === mon.id)));
    }
    const setIds = new Set(getDomeCandidateTeams().flatMap((team) => team.map((mon) => mon.id)));
    return mons.filter((mon) => setIds.has(mon.id));
}

function refreshDomeOpponentInformation() {
    domeToolState.page = 1;
    updateDomeCommentOptions();
    // Prune unavailable battle selections while keeping the remaining sets' PP.
    refreshAfterBattleExclusionChange(PRIMARY_TRAINER_SLOT_INDEX);
    renderDomePredictions();
}

function getDomeKnownMoveCandidates() {
    const complete = domeToolState.opponents.every((mon) => mon.speciesId);
    const mons = complete ? getDomeCandidateTeams().flat() : getDomeOpponentMons().filter((mon) => {
        const slot = domeToolState.opponents.find((slot) => slot.speciesId === mon.speciesId);
        return !slot?.setId || slot.setId === mon.id;
    });
    return [...new Set(mons.flatMap((mon) => mon.moves).filter(Boolean))]
        .filter((id) => !domeToolState.knownMoves.includes(id))
        .sort((a, b) => getMoveName(a).localeCompare(getMoveName(b), currentLang));
}

function populateDomeKnownMoveSuggestions(search) {
    const menu = document.getElementById("dome-known-move-suggestions");
    if (!menu) { return; }
    menu.replaceChildren();
    menu.hidden = true;
    domeKnownMoveSuggestions.matches = [];
    domeKnownMoveSuggestions.activeIndex = -1;
    const key = normalizeText(search);
    if (!getCurrentTrainer() || domeToolState.knownMoves.length >= 3) { return; }
    domeKnownMoveSuggestions.matches = getDomeKnownMoveCandidates().filter((id) =>
        [id, window.moves[id]?.names?.fr, window.moves[id]?.names?.en].filter(Boolean)
            .some((name) => normalizeText(name).includes(key))).slice(0, 12);
    buildSuggestionMenu({ menu, matches: domeKnownMoveSuggestions.matches,
        getLabel: getMoveName, onSelect: addDomeKnownMove });
}

function updateDomeKnownMovesField() {
    const input = document.getElementById("dome-known-move-input");
    if (!input) { return; }
    const menu = document.getElementById("dome-known-move-suggestions");
    renderMultiSelectTags({
        container: document.getElementById("dome-known-move-tags"),
        values: domeToolState.knownMoves, getLabel: getMoveName,
        onRemove: (id) => {
            domeToolState.knownMoves = domeToolState.knownMoves.filter((moveId) => moveId !== id);
            refreshDomeOpponentInformation();
            input.focus();
        }
    });
    updateBattleExclusionInputState({ input, suggestions: menu,
        limitReached: domeToolState.knownMoves.length >= 3,
        placeholder: translate("ui", "domeKnownMovesPlaceholder") });
    if (!getCurrentTrainer()) { input.disabled = true; }
    if (document.activeElement === input && !input.disabled) { populateDomeKnownMoveSuggestions(input.value); }
    else { menu.hidden = true; }
}

function addDomeKnownMove(moveId) {
    if (!getCurrentTrainer() || domeToolState.knownMoves.length >= 3 ||
        !getDomeKnownMoveCandidates().includes(moveId)) { return; }
    domeToolState.knownMoves.push(moveId);
    const input = document.getElementById("dome-known-move-input");
    if (input) { input.value = ""; }
    refreshDomeOpponentInformation();
}

function buildDomeKnownMovesField() {
    const field = document.createElement("div");
    field.className = "dome-field dome-known-moves";
    const label = document.createElement("label");
    label.htmlFor = "dome-known-move-input";
    label.textContent = translate("ui", "domeKnownMovesLabel");
    label.appendChild(createHelpTooltip(translate("ui", "domeKnownMovesHelp")));
    const autocomplete = document.createElement("div");
    autocomplete.className = "autocomplete-field";
    const control = document.createElement("div");
    control.className = "multi-select-field";
    const tags = document.createElement("div");
    tags.id = "dome-known-move-tags";
    tags.className = "multi-select-tags";
    const input = document.createElement("input");
    input.id = "dome-known-move-input";
    input.type = "text";
    input.autocomplete = "off";
    const menu = document.createElement("div");
    menu.id = "dome-known-move-suggestions";
    menu.className = "suggestions-menu";
    menu.hidden = true;
    input.addEventListener("input", () => populateDomeKnownMoveSuggestions(input.value));
    input.addEventListener("focus", () => populateDomeKnownMoveSuggestions(input.value));
    input.addEventListener("blur", () => { setTimeout(() => { menu.hidden = true; }, 100); });
    input.addEventListener("keydown", (event) => {
        if (input.disabled) { return; }
        if (event.key === "ArrowUp" && domeKnownMoveSuggestions.activeIndex < 0) {
            domeKnownMoveSuggestions.activeIndex = 0;
        }
        const handled = handleExcludedSuggestionKeyboard({
            event, menu, matches: domeKnownMoveSuggestions.matches,
            getActiveIndex: () => domeKnownMoveSuggestions.activeIndex,
            setActiveIndex: (index) => { domeKnownMoveSuggestions.activeIndex = index; },
            onSelect: addDomeKnownMove
        });
        if (handled) {
            menu.querySelectorAll(".suggestion-item").forEach((item, index) => {
                item.classList.toggle("active", index === domeKnownMoveSuggestions.activeIndex);
            });
        } else if (event.key === "Enter") {
            event.preventDefault();
            const key = normalizeText(input.value);
            const exact = getDomeKnownMoveCandidates().find((id) =>
                [id, window.moves[id]?.names?.fr, window.moves[id]?.names?.en].filter(Boolean)
                    .some((name) => normalizeText(name) === key));
            if (exact) { addDomeKnownMove(exact); }
        }
    });
    control.append(tags, input);
    autocomplete.append(control, menu);
    field.append(label, autocomplete);
    return field;
}

function updateDomeSpeciesOptions(kind) {
    const slots = kind === "player" ? domeToolState.players : domeToolState.opponents;
    const source = kind === "player" ? getDomeSpeciesList() :
        [...new Map(getDomeOpponentMons().map((mon) => [mon.speciesId, window.domeData.species[mon.speciesId]])).values()];
    slots.forEach((slot, index) => {
        const list = document.getElementById(`dome-${kind}-options-${index}`);
        if (!list) { return; }
        list.replaceChildren();
        source.filter((mon) => mon && !slots.some((other, otherIndex) =>
            otherIndex !== index && other.speciesId === mon.speciesId))
            .forEach((mon) => list.appendChild(createDomeOption(getName(mon), "")));
    });
}

function updateDomeSetOptions(index) {
    const select = document.getElementById(`dome-opponent-set-${index}`);
    if (!select) { return; }
    const slot = domeToolState.opponents[index];
    const mons = getDomeOpponentMons().filter((mon) => mon.speciesId === slot.speciesId);
    select.replaceChildren(createDomeOption("", translate("ui", "domeAllSets")));
    for (const mon of mons) { select.appendChild(createDomeOption(mon.id, getDomeSetLabel(mon))); }
    select.value = slot.setId;
    select.disabled = mons.length < 2 || !!getCurrentTrainer()?.isDomeBrain;
}

function buildDomeSpeciesCard(kind, index) {
    const isPlayer = kind === "player";
    const card = document.createElement("fieldset");
    card.className = "dome-team-card";
    const legend = document.createElement("legend");
    legend.textContent = formatFacilityText("pokemonSlot", { slot: index + 1 });
    const heading = document.createElement("div");
    heading.className = "dome-species-heading";
    const sprite = document.createElement("img");
    sprite.className = "dome-species-sprite";
    sprite.alt = "";
    sprite.loading = "lazy";
    sprite.addEventListener("error", () => { sprite.hidden = true; });
    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.id = `dome-${kind}-species-${index}`;
    input.setAttribute("list", `dome-${kind}-options-${index}`);
    input.disabled = !isPlayer && (!getCurrentTrainer() || !!getCurrentTrainer().isDomeBrain);
    const list = document.createElement("datalist");
    list.id = `dome-${kind}-options-${index}`;
    const wrapper = document.createElement("div");
    wrapper.className = "autocomplete-field dome-input-control";
    const clear = document.createElement("button");
    clear.type = "button";
    clear.id = `dome-${kind}-clear-${index}`;
    clear.className = "search-clear-button";
    clear.textContent = "×";
    clear.title = translate("ui", "clearSearch");
    clear.setAttribute("aria-label", clear.title);
    const field = createDomeField(input, "species");
    field.children[1].replaceWith(wrapper);
    wrapper.append(input, clear, list);
    heading.append(sprite, field);
    const slots = () => isPlayer ? domeToolState.players : domeToolState.opponents;
    const renderValue = () => {
        const slot = slots()[index];
        const mon = window.domeData.species[slot.speciesId];
        input.value = mon ? getName(mon) : "";
        clear.hidden = !input.value || (!isPlayer && !!getCurrentTrainer()?.isDomeBrain);
        sprite.hidden = !mon;
        if (mon) { sprite.src = getPokemonFrontSpriteUrl(mon); }
    };
    const ability = isPlayer ? document.createElement("select") : null;
    if (ability) { ability.id = `dome-player-ability-${index}`; }
    const updateAbility = () => {
        if (!ability) { return; }
        const slot = slots()[index];
        const abilities = window.domeData.species[slot.speciesId]?.abilities ?? [];
        if (!abilities.includes(slot.ability)) { slot.ability = abilities[0] ?? ""; }
        ability.replaceChildren();
        if (!abilities.length) { ability.appendChild(createDomeOption("", "—")); }
        for (const id of abilities) { ability.appendChild(createDomeOption(id, getDomeAbilityName(id))); }
        ability.value = slot.ability;
        ability.disabled = abilities.length < 2;
    };
    const update = () => {
        renderValue();
        updateAbility();
        updateDomeSpeciesOptions(kind);
        if (isPlayer) { domeToolState.page = 1; renderDomePredictions(); }
        else {
            updateDomeSetOptions(index);
            refreshDomeOpponentInformation();
        }
    };
    clear.addEventListener("click", () => {
        slots()[index] = isPlayer ? { speciesId: "", ability: "" } : { speciesId: "", setId: "" };
        input.setCustomValidity("");
        update();
        input.focus();
    });
    input.addEventListener("input", () => {
        input.setCustomValidity("");
        clear.hidden = !input.value;
        if (!input.value.trim()) {
            slots()[index] = isPlayer ? { speciesId: "", ability: "" } : { speciesId: "", setId: "" };
            update();
        }
    });
    input.addEventListener("change", () => {
        const source = isPlayer ? getDomeSpeciesList() : [...new Map(getDomeOpponentMons()
            .map((mon) => [mon.speciesId, window.domeData.species[mon.speciesId]])).values()];
        const mon = input.value.trim() ? findDomeSpecies(input.value, source) : null;
        if (input.value.trim() && (!mon || slots().some((slot, other) => other !== index && slot.speciesId === mon.speciesId))) {
            input.setCustomValidity(translate("ui", "domeInvalidSpecies"));
            input.reportValidity();
            renderValue();
            return;
        }
        const slot = slots()[index];
        if (slot.speciesId !== (mon?.speciesId ?? "")) {
            slot.speciesId = mon?.speciesId ?? "";
            if (!isPlayer) { slot.setId = ""; }
        }
        input.setCustomValidity("");
        update();
    });
    card.append(legend, heading);
    if (isPlayer) {
        ability.addEventListener("change", () => {
            if (window.domeData.species[slots()[index].speciesId]?.abilities.includes(ability.value)) {
                slots()[index].ability = ability.value;
                renderDomePredictions();
            }
        });
        card.appendChild(createDomeField(ability, "ability"));
        updateAbility();
    } else {
        const sets = document.createElement("select");
        sets.id = `dome-opponent-set-${index}`;
        sets.addEventListener("change", () => {
            const valid = getDomeOpponentMons().some((mon) => mon.speciesId === slots()[index].speciesId && mon.id === sets.value);
            slots()[index].setId = valid ? sets.value : "";
            refreshDomeOpponentInformation();
        });
        card.appendChild(createDomeField(sets, "domeKnownSet"));
    }
    renderValue();
    return card;
}

function getDomeStatStyleLabel(id) {
    if (Number(id) === 42) { return translate("ui", "domeStatBalanced"); }
    const stats = ["hp", "atk", "def", "spe", "spa", "spd"];
    const pairs = [];
    for (let first = 0; first < 5; first++) {
        for (let second = first + 1; second < 6; second++) { pairs.push([stats[first], stats[second]]); }
    }
    const negative = Number(id) >= 21;
    const index = Number(id) - (negative ? 21 : 0);
    const selected = index < 15 ? pairs[index] : [stats[index - 15]];
    return formatFacilityText(negative ? "domeStatNeglects" : "domeStatEmphasizes", {
        stats: selected.map((stat) => translate("statLabels", stat)).join(" + ")
    });
}

function updateDomeCommentOptions() {
    const teams = getDomeCandidateTeams(false);
    for (const [field, key, values, label] of [
        ["battleStyle", "domeBattleStyleAny", new Set(teams.map(getDomeBattleStyle)), (id) => translate("ui", `domeStyle${id}`)],
        ["statStyle", "domeStatStyleAny", new Set(teams.map((team) => getDomeStatStyle(team, !!getCurrentTrainer()?.isDomeBrain))), getDomeStatStyleLabel]
    ]) {
        const select = document.getElementById(`dome-${field}`);
        if (!select) { continue; }
        if (domeToolState[field] !== "") { values.add(Number(domeToolState[field])); }
        select.replaceChildren(createDomeOption("", translate("ui", key)));
        [...values].filter((id) => id !== null && id >= 0).sort((a, b) => a - b)
            .forEach((id) => select.appendChild(createDomeOption(id, label(id))));
        select.value = domeToolState[field];
        select.disabled = !teams.length && domeToolState[field] === "";
    }
}

function renderDomeOpponentFields(container) {
    container.replaceChildren();
    const trainer = getCurrentTrainer();
    const status = document.createElement("p");
    status.className = "facility-data-status";
    status.textContent = trainer ? getName(trainer) : translate("ui", "domeChooseTrainer");
    const grid = document.createElement("div");
    grid.className = "dome-team-grid";
    for (let index = 0; index < 3; index++) { grid.appendChild(buildDomeSpeciesCard("opponent", index)); }
    const filters = document.createElement("div");
    filters.className = "dome-comment-filters";
    for (const [field, key] of [["battleStyle", "domeBattleStyle"], ["statStyle", "domeStatStyle"]]) {
        const select = document.createElement("select");
        select.id = `dome-${field}`;
        select.addEventListener("change", () => {
            domeToolState[field] = select.value;
            refreshDomeOpponentInformation();
        });
        filters.appendChild(createDomeField(select, key));
    }
    container.append(status, grid, filters, buildDomeKnownMovesField());
    updateDomeSpeciesOptions("opponent");
    for (let index = 0; index < 3; index++) { updateDomeSetOptions(index); }
    updateDomeCommentOptions();
}

function buildDomePredictionTeam(team, scenarios, ordinal, onlyTeam) {
    const details = document.createElement("details");
    details.className = "dome-result-team";
    details.open = onlyTeam;
    const summary = document.createElement("summary");
    const number = document.createElement("span");
    number.className = "dome-result-number";
    number.textContent = `${ordinal}. `;
    summary.append(number, createDomePokemonSequence(team, getDomeSetLabel, " · "));
    const body = document.createElement("div");
    body.className = "dome-result-body";
    const sets = document.createElement("div");
    sets.className = "dome-set-grid";
    for (const mon of team) {
        const set = document.createElement("div");
        set.className = "dome-set-summary";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "dome-set-link";
        button.appendChild(createDomePokemonSequence([mon]));
        button.title = translate("ui", "domeShowSet");
        button.addEventListener("click", () => {
            const slot = getOpponentSlotIndexForTrainerTable(0);
            selectSingleSetFromTable(mon, slot);
        });
        const heading = document.createElement("div");
        heading.className = "dome-set-heading";
        const metadata = document.createElement("span");
        metadata.className = "dome-set-metadata";
        setSpriteTextCell(metadata, getItemSpriteUrl(mon.item), translateEntity("items", mon.item), "", "item");
        heading.append(button, metadata);
        const moves = document.createElement("div");
        moves.className = "dome-set-moves";
        for (const moveId of mon.moves.filter(Boolean)) {
            const move = document.createElement("span");
            move.className = "dome-move-badge";
            move.textContent = getMoveName(moveId);
            applyTypeColor(move, getMoveType(moveId));
            moves.appendChild(move);
        }
        set.append(heading, moves);
        sets.appendChild(set);
    }
    const results = scenarios.map((pair) => calculateDomeSelection(team,
        pair.map((index) => domeToolState.players[index].speciesId), !!getCurrentTrainer()?.isDomeBrain));
    const table = document.createElement("table");
    table.className = "dome-prediction-table";
    const caption = document.createElement("caption");
    caption.textContent = translate("ui", battleState.format === "doubles" ? "domeDuoOrder" : "domeLeadOrder");
    const head = document.createElement("thead");
    const header = document.createElement("tr");
    const title = document.createElement("th");
    title.scope = "col";
    title.textContent = translate("ui", "domeOpponentOrder");
    header.appendChild(title);
    for (const pair of scenarios) {
        const th = document.createElement("th");
        th.scope = "col";
        th.appendChild(createDomePokemonSequence(pair.map((index) =>
            window.domeData.species[domeToolState.players[index].speciesId]), getName, " + "));
        th.title = translate("ui", "domePlaceholderHelp");
        header.appendChild(th);
    }
    head.appendChild(header);
    const tableBody = document.createElement("tbody");
    for (let index = 0; index < results[0].outcomes.length; index++) {
        const row = document.createElement("tr");
        const label = document.createElement("th");
        label.scope = "row";
        label.appendChild(createDomePokemonSequence(results[0].outcomes[index].order.map((position) => team[position])));
        row.appendChild(label);
        for (const result of results) {
            const cell = document.createElement("td");
            const probability = result.outcomes[index].probability;
            cell.textContent = `${new Intl.NumberFormat(currentLang, { maximumFractionDigits: 2 }).format(probability * 100)} %`;
            cell.classList.toggle("is-zero", probability === 0);
            row.appendChild(cell);
        }
        row.classList.toggle("dome-impossible-order", results.every((result) => result.outcomes[index].probability === 0));
        tableBody.appendChild(row);
    }
    table.append(caption, head, tableBody);
    const scroll = document.createElement("div");
    scroll.className = "dome-table-scroll";
    scroll.tabIndex = 0;
    scroll.setAttribute("role", "region");
    scroll.setAttribute("aria-label", translate("ui", "domeResultsTitle"));
    scroll.appendChild(table);
    body.append(sets, scroll);
    details.append(summary, body);
    return details;
}

function renderDomePredictions() {
    const container = document.getElementById("dome-predictions");
    if (!container) { return; }
    closeHelpTooltip();
    updateDomeKnownMovesField();
    container.replaceChildren();
    const status = document.createElement("p");
    status.className = "facility-data-status";
    container.appendChild(status);
    const trainer = getCurrentTrainer();
    if (!trainer) { status.textContent = translate("ui", "domeChooseTrainer"); return; }
    if (domeToolState.opponents.some((mon) => !mon.speciesId)) {
        status.textContent = translate("ui", "domeNeedOpponents"); return;
    }
    const teams = getDomeCandidateTeams();
    if (!teams.length) { status.textContent = translate("ui", "domeNoTeams"); return; }
    const scenarios = getDomePlayerScenarios();
    if (!scenarios.length) { status.textContent = translate("ui", "domeNeedPlayers"); return; }
    status.textContent = formatFacilityText("domeResultCount", { count: teams.length, duos: scenarios.length });
    const pageSize = 8;
    const pages = Math.ceil(teams.length / pageSize);
    domeToolState.page = Math.max(1, Math.min(domeToolState.page, pages));
    const start = (domeToolState.page - 1) * pageSize;
    for (let index = start; index < Math.min(start + pageSize, teams.length); index++) {
        container.appendChild(buildDomePredictionTeam(teams[index], scenarios, index + 1, teams.length === 1));
    }
    if (pages > 1) {
        const controls = document.createElement("div");
        controls.className = "dome-pagination";
        const text = document.createElement("span");
        text.textContent = formatFacilityText("domePage", { page: domeToolState.page, pages });
        for (const [delta, key] of [[-1, "domePrevious"], [1, "domeNext"]]) {
            const button = document.createElement("button");
            button.type = "button";
            button.id = `dome-page-${delta === -1 ? "previous" : "next"}`;
            button.textContent = translate("ui", key);
            button.disabled = delta === -1 ? domeToolState.page === 1 : domeToolState.page === pages;
            button.addEventListener("click", () => {
                domeToolState.page += delta;
                renderDomePredictions();
                document.getElementById(button.id)?.focus();
            });
            controls.appendChild(button);
            if (delta === -1) { controls.appendChild(text); }
        }
        container.appendChild(controls);
    }
}

function updateDomeTieInfo() {
    const trainer = getCurrentTrainer();
    const opponent = document.getElementById("dome-opponent-seed");
    if (opponent) {
        opponent.disabled = !trainer || !!trainer.isDomeBrain;
        opponent.value = domeToolState.opponentSeed;
    }
    const player = document.getElementById("dome-player-seed");
    if (player) {
        player.value = domeToolState.playerSeed;
        player.disabled = !!trainer?.isDomeBrain;
    }
    const result = document.getElementById("dome-tie-result");
    if (!result) { return; }
    const winner = trainer ? getDomeTieWinner(Number(domeToolState.playerSeed), Number(domeToolState.opponentSeed), !!trainer.isDomeBrain) : "unknown";
    result.textContent = translate("ui", trainer?.isDomeBrain ? "domeTieBrain" :
        `domeTie${winner[0].toUpperCase()}${winner.slice(1)}`);
}

function refreshDomeInfo() {
    if (battleState.facility !== "dome" || !window.domeData) { return; }
    const changed = syncDomeTrainerState();
    const container = document.getElementById("dome-opponent-fields");
    if (changed && container) {
        renderDomeOpponentFields(container);
        renderDomePredictions();
        updateDomeTieInfo();
    }
}

function renderDomeInfo(container) {
    if (!window.domeData) {
        const message = document.createElement("p");
        message.textContent = translate("ui", "domeDataMissing");
        container.appendChild(message);
        return;
    }
    syncDomeTrainerState();
    const tool = document.createElement("div");
    tool.className = "dome-tool";
    const players = createFacilityInfoSection("dome-player-team", translate("ui", "playerTeamTitle"), true);
    players.details.children[0].appendChild(createHelpTooltip(translate("ui", "domePlayerHelp")));
    players.content.classList.add("dome-team-grid");
    for (let index = 0; index < 3; index++) { players.content.appendChild(buildDomeSpeciesCard("player", index)); }
    const opponents = createFacilityInfoSection("dome-opponent-team", translate("ui", "domeOpponentTitle"), true);
    opponents.details.children[0].appendChild(createHelpTooltip(translate("ui", "domeOpponentHelp")));
    opponents.content.id = "dome-opponent-fields";
    opponents.content.classList.add("dome-opponent-fields");
    const results = createFacilityInfoSection("dome-results", translate("ui", "domeResultsTitle"), true);
    results.details.children[0].appendChild(createHelpTooltip(translate("ui", "domeResultsHelp")));
    results.content.id = "dome-predictions";
    results.content.classList.add("dome-predictions");
    const tie = createFacilityInfoSection("dome-tie", translate("ui", "domeTieTitle"));
    tie.details.children[0].appendChild(createHelpTooltip(translate("ui", "domeTieHelp")));
    tie.content.classList.add("dome-tie-fields");
    for (const [field, key] of [["playerSeed", "domePlayerSeed"], ["opponentSeed", "domeOpponentSeed"]]) {
        const select = document.createElement("select");
        select.id = field === "playerSeed" ? "dome-player-seed" : "dome-opponent-seed";
        select.appendChild(createDomeOption("", translate("ui", "domeUnknownSeed")));
        for (let rank = 1; rank <= 16; rank++) {
            select.appendChild(createDomeOption(rank, `${rank}. ${translate("ui", `domeSeed${rank}`)}`));
        }
        select.value = domeToolState[field];
        select.addEventListener("change", () => {
            domeToolState[field] = select.value;
            updateDomeTieInfo();
        });
        tie.content.appendChild(createDomeField(select, key));
    }
    const result = document.createElement("p");
    result.id = "dome-tie-result";
    result.className = "dome-tie-result";
    tie.content.appendChild(result);
    tool.append(players.details, opponents.details, results.details, tie.details);
    container.appendChild(tool);
    updateDomeSpeciesOptions("player");
    renderDomeOpponentFields(opponents.content);
    renderDomePredictions();
    updateDomeTieInfo();
}

