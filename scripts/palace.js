"use strict";

// -----------------------------------------------------------------------------
// Palace selection probabilities — retail Emerald, without BUGFIX.
// The model covers move groups and PP. It does not execute the Smart AI or
// simulate battle restrictions / the success of a chosen move.
// -----------------------------------------------------------------------------

function getPalaceMoveGroup(moveId) {
    return window.palaceData?.moves[moveId]?.palaceGroup ?? null;
}

function calculatePalaceProbabilities(natureId, moveIds, ppAvailable = moveIds.map(() => true), changed = false) {
    // MOVE_NONE terminates the learned-move list in the cartridge.
    const end = moveIds.findIndex((id) => !id);
    if (end >= 0) { moveIds = moveIds.slice(0, end); ppAvailable = ppAvailable.slice(0, end); }
    const nature = window.palaceData?.natures[natureId];
    if (!nature || moveIds.some((id) => !getPalaceMoveGroup(id))) {
        return { valid: false, reason: "palaceDataMissing" };
    }
    if (!moveIds.length) { return { valid: false, reason: "palaceEmptySet" }; }

    const groups = window.palaceData.groups;
    const base = nature[changed ? "changed" : "initial"].map((percent) => percent / 100);
    const usable = moveIds.map((id, index) => ({ index, group: getPalaceMoveGroup(id) }))
        .filter((move) => ppAvailable[move.index]);
    const counts = groups.map((group) => usable.filter((move) => move.group === group).length);
    const smart = base.map((probability, index) => counts[index] ? probability : 0);
    const missing = base.reduce((sum, probability, index) => sum + (counts[index] ? 0 : probability), 0);

    // The cartridge tests the Defense nibble a second time instead of Support.
    // Only Attack and Defense can become the preferred fallback group.
    const multiple = groups.slice(0, 2).filter((_, index) => counts[index] >= 2);
    const fallback = multiple.length === 1 ? usable.filter((move) => move.group === multiple[0]) : usable;
    const randomByMove = moveIds.map(() => 0);
    for (const move of fallback) { randomByMove[move.index] = missing * 0.5 / fallback.length; }
    const random = groups.map((group) => usable.reduce((sum, move) =>
        sum + (move.group === group ? randomByMove[move.index] : 0), 0));
    const outcomes = {
        smartAttack: smart[0], randomAttack: random[0],
        defense: smart[1] + random[1], support: smart[2] + random[2],
        nothing: usable.length ? missing * 0.5 : 1
    };
    return { valid: true, base, counts, smart, random, randomByMove, outcomes,
        totalAttack: outcomes.smartAttack + outcomes.randomAttack };
}

function formatPalaceProbability(probability) {
    return `${new Intl.NumberFormat(currentLang, { maximumFractionDigits: 1 }).format(probability * 100)} %`;
}

function createPalaceMoveBadge(moveId) {
    const group = getPalaceMoveGroup(moveId);
    const badge = document.createElement("span");
    badge.className = "palace-move-group";
    badge.textContent = group ? translate("ui", group) : "?";
    return badge;
}

function buildPalaceProbabilityBlock(natureId, moveIds, ppAvailable) {
    const block = document.createElement("section");
    block.className = "palace-probabilities";
    const title = document.createElement("p");
    title.className = "palace-probabilities-title";
    title.textContent = translate("ui", "palaceProbabilitiesTitle");
    title.appendChild(createHelpTooltip(translate("ui", "palaceProbabilityHelp")));
    block.appendChild(title);
    const results = [false, true].map((changed) =>
        calculatePalaceProbabilities(natureId, moveIds, ppAvailable, changed));
    if (!results[0].valid) {
        const empty = document.createElement("p");
        empty.className = "facility-data-status";
        empty.textContent = translate("ui", results[0].reason);
        block.appendChild(empty);
        return block;
    }

    const table = document.createElement("table");
    table.className = "palace-probability-table";
    const caption = document.createElement("caption");
    caption.className = "palace-table-caption";
    caption.textContent = `${translate("ui", "palaceProbabilitiesTitle")} — ${translateEntity("natures", natureId)}`;
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    for (const key of ["palaceBehaviour", "palaceInitial", "palaceChanged"]) {
        const th = document.createElement("th");
        th.scope = "col";
        const heading = document.createElement("span");
        heading.className = "palace-probability-heading";
        const label = document.createElement("span");
        label.textContent = translate("ui", key);
        heading.appendChild(label);
        if (key === "palaceChanged") { heading.appendChild(createHelpTooltip(translate("ui", "palaceHpHelp"))); }
        th.appendChild(heading);
        headRow.appendChild(th);
    }
    head.appendChild(headRow);
    const body = document.createElement("tbody");
    const rows = [["smartAttack", "palaceSmartAttack"], ["randomAttack", "palaceRandomAttack"],
        ["defense", "defense"], ["support", "support"], ["nothing", "palaceNothing"]];
    const makeRow = (key, probabilities) => {
        const row = document.createElement("tr");
        const label = document.createElement("th");
        label.scope = "row";
        label.textContent = translate("ui", key);
        row.appendChild(label);
        for (const probability of probabilities) {
            const cell = document.createElement("td");
            cell.textContent = formatPalaceProbability(probability);
            cell.classList.toggle("is-zero", probability === 0);
            row.appendChild(cell);
        }
        return row;
    };
    for (const [outcome, key] of rows) { body.appendChild(makeRow(key, results.map((result) => result.outcomes[outcome]))); }
    const foot = document.createElement("tfoot");
    foot.appendChild(makeRow("palaceTotalAttack", results.map((result) => result.totalAttack)));
    table.append(caption, head, body, foot);
    block.appendChild(table);

    if (battleState.format === "doubles") {
        const target = document.createElement("p");
        target.className = "palace-target";
        const preference = window.palaceData.natures[natureId].doubleTarget;
        target.textContent = translate("ui", `palaceTarget${preference[0].toUpperCase()}${preference.slice(1)}`);
        target.appendChild(createHelpTooltip(translate("ui", "palaceTargetHelp")));
        block.appendChild(target);
    }
    return block;
}

function buildPalaceSetProbabilities(mon, slotIndex) {
    return buildPalaceProbabilityBlock(mon.nature, mon.moves,
        mon.moves.map((id, index) => id ? Number(getCurrentMovePp(mon, id, index, slotIndex)) > 0 : false));
}

// Fixed Brain teams enter the same trainer/search/table path as regular teams.
// Their series IDs cover possible encounters; earned symbols are not tracked.
function getPalaceBrainTrainers() {
    return battleState.facility === "palace" && battleState.format === "singles"
        ? window.palaceData?.brain?.trainers ?? [] : [];
}

// -----------------------------------------------------------------------------
// Independent player team: no opponent matchup / Smart AI score simulation.
// Changing its fields never clears trainers, opponents, excluded sets or PP.
// -----------------------------------------------------------------------------

function createPalacePlayerSlot() {
    return { speciesId: "", nature: "hardy", moves: Array(4).fill(""), ppAvailable: Array(4).fill(true) };
}
const palacePlayerTeamState = { slots: Array.from({ length: 3 }, createPalacePlayerSlot) };

function getPalaceSpecies() {
    // Reuse the project's preferred species names wherever they exist.
    const names = new Map(Object.values(window.frontierMons ?? {}).map((mon) => [mon.speciesId, mon.names]));
    return Object.values(window.palaceData?.species ?? {}).map((mon) => ({ ...mon,
        names: { ...mon.names, ...names.get(mon.speciesId) } }));
}

function findPalaceEntity(value, entries, idKey) {
    const normalize = (name) => normalizeText(name.replaceAll("♀", "f").replaceAll("♂", "m")
        .replaceAll("œ", "oe").replaceAll("Œ", "OE"));
    const normalized = normalize(value);
    return entries.find((entity) => [entity[idKey], entity.names?.fr, entity.names?.en]
        .some((name) => name && normalize(name) === normalized));
}

function createPalaceField(control, key, values, clearButton = null) {
    const field = document.createElement("div");
    field.className = "palace-field";
    const label = document.createElement("label");
    label.htmlFor = control.id;
    label.textContent = formatFacilityText(key, values);
    field.appendChild(label);
    if (clearButton) {
        const wrapper = document.createElement("div");
        wrapper.className = "palace-input-control";
        wrapper.append(control, clearButton);
        field.appendChild(wrapper);
    } else { field.appendChild(control); }
    return field;
}

function buildPalacePlayerCard(slotIndex, species) {
    const slot = palacePlayerTeamState.slots[slotIndex];
    const card = document.createElement("fieldset");
    card.className = "palace-player-card";
    const legend = document.createElement("legend");
    legend.textContent = formatFacilityText("pokemonSlot", { slot: slotIndex + 1 });
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "search-clear-button palace-clear";
    clear.textContent = "×";
    clear.title = translate("ui", "palaceClearPokemon");
    clear.setAttribute("aria-label", clear.title);
    clear.id = `palace-clear-${slotIndex}`;
    clear.addEventListener("click", () => {
        palacePlayerTeamState.slots[slotIndex] = createPalacePlayerSlot();
        rememberFacilityInfoSections();
        card.replaceWith(buildPalacePlayerCard(slotIndex, species));
        document.getElementById(`palace-species-${slotIndex}`)?.focus();
    });
    const heading = document.createElement("div");
    heading.className = "palace-player-heading";
    const sprite = document.createElement("img");
    sprite.className = "palace-player-sprite";
    sprite.alt = "";
    sprite.loading = "lazy";
    sprite.hidden = true;
    sprite.addEventListener("error", () => { sprite.hidden = true; });
    const input = document.createElement("input");
    input.type = "text";
    input.autocomplete = "off";
    input.id = `palace-species-${slotIndex}`;
    input.setAttribute("list", "palace-species-options");
    const updateSpecies = () => {
        const mon = species.find((mon) => mon.speciesId === slot.speciesId);
        input.value = mon ? getName(mon) : "";
        sprite.hidden = !mon;
        if (mon) { sprite.src = getPokemonFrontSpriteUrl(mon); }
    };
    const updateClearButton = () => {
        clear.hidden = !input.value && slot.nature === "hardy" && !slot.moves.some(Boolean);
    };
    updateSpecies();
    updateClearButton();
    input.addEventListener("input", () => { input.setCustomValidity(""); updateClearButton(); });
    input.addEventListener("change", () => {
        const mon = input.value.trim() ? findPalaceEntity(input.value, species, "speciesId") : null;
        if (input.value.trim() && !mon) {
            input.setCustomValidity(translate("ui", "palaceInvalidSpecies"));
            input.reportValidity();
            updateSpecies();
            return;
        }
        slot.speciesId = mon?.speciesId ?? "";
        input.setCustomValidity("");
        updateSpecies();
        updateClearButton();
    });
    heading.append(sprite, createPalaceField(input, "species", undefined, clear));

    const nature = document.createElement("select");
    nature.id = `palace-nature-${slotIndex}`;
    for (const id of Object.keys(window.palaceData.natures)) {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = translateEntity("natures", id);
        nature.appendChild(option);
    }
    nature.value = slot.nature;

    const output = document.createElement("div");
    output.id = `palace-player-output-${slotIndex}`;
    const updateOutput = () => {
        closeHelpTooltip();
        updateClearButton();
        const selected = slot.moves.map((id, index) => ({ id, pp: slot.ppAvailable[index] })).filter((move) => move.id);
        output.replaceChildren(buildPalaceProbabilityBlock(slot.nature,
            selected.map((move) => move.id), selected.map((move) => move.pp)));
    };
    nature.addEventListener("change", () => { slot.nature = nature.value; updateOutput(); });
    const moveFields = document.createElement("div");
    moveFields.className = "palace-player-moves";
    const moveEntries = Object.entries(window.palaceData.moves).filter(([, move]) => move.number !== 165)
        .map(([id]) => ({ id, names: window.moves[id]?.names ?? window.palaceData.moves[id].names }));
    for (let index = 0; index < 4; index++) {
        const row = document.createElement("div");
        row.className = "palace-player-move";
        const move = document.createElement("input");
        move.type = "text";
        move.autocomplete = "off";
        move.id = `palace-move-${slotIndex}-${index}`;
        move.setAttribute("list", "palace-move-options");
        move.value = slot.moves[index] ? getMoveName(slot.moves[index]) : "";
        const pp = document.createElement("input");
        pp.type = "checkbox";
        pp.id = `palace-pp-${slotIndex}-${index}`;
        pp.checked = slot.ppAvailable[index];
        pp.disabled = !slot.moves[index];
        pp.title = translate("ui", "palacePpAvailable");
        pp.setAttribute("aria-label", `${translate("ui", "palacePpAvailable")} — ${formatFacilityText("palaceMove", { slot: index + 1 })}`);
        const moveClear = document.createElement("button");
        moveClear.type = "button";
        moveClear.id = `palace-move-clear-${slotIndex}-${index}`;
        moveClear.className = "search-clear-button palace-clear palace-move-clear";
        moveClear.textContent = "×";
        moveClear.title = formatFacilityText("palaceClearMove", { slot: index + 1 });
        moveClear.setAttribute("aria-label", moveClear.title);
        const badge = document.createElement("span");
        const updateMove = () => {
            badge.replaceChildren();
            move.style.backgroundColor = "";
            move.classList.remove("type-colored");
            if (slot.moves[index]) { applyTypeColor(move, getMoveType(slot.moves[index])); }
            if (slot.moves[index]) { badge.appendChild(createPalaceMoveBadge(slot.moves[index])); }
            pp.disabled = !slot.moves[index];
            moveClear.hidden = !move.value;
            updateOutput();
        };
        moveClear.addEventListener("click", () => {
            slot.moves[index] = "";
            slot.ppAvailable[index] = true;
            move.value = "";
            move.setCustomValidity("");
            pp.checked = true;
            updateMove();
            move.focus();
        });
        move.addEventListener("input", () => {
            move.setCustomValidity("");
            moveClear.hidden = !move.value;
            if (!move.value.trim()) { slot.moves[index] = ""; updateMove(); }
        });
        move.addEventListener("change", () => {
            const entry = move.value.trim() ? findPalaceEntity(move.value, moveEntries, "id") : null;
            if (move.value.trim() && (!entry || slot.moves.some((id, other) => other !== index && id === entry.id))) {
                move.setCustomValidity(translate("ui", "palaceInvalidMove"));
                move.reportValidity();
                move.value = slot.moves[index] ? getMoveName(slot.moves[index]) : "";
                return;
            }
            if (slot.moves[index] !== (entry?.id ?? "")) { slot.ppAvailable[index] = true; pp.checked = true; }
            slot.moves[index] = entry?.id ?? "";
            move.value = entry ? getMoveName(entry.id) : "";
            move.setCustomValidity("");
            updateMove();
        });
        pp.addEventListener("change", () => { slot.ppAvailable[index] = pp.checked; updateOutput(); });
        const control = createPalaceField(move, "palaceMove", { slot: index + 1 }, moveClear);
        const extra = document.createElement("div");
        extra.className = "palace-move-meta";
        const ppLabel = document.createElement("label");
        ppLabel.htmlFor = pp.id;
        ppLabel.textContent = "PP";
        ppLabel.title = translate("ui", "palacePpAvailable");
        extra.append(badge, pp, ppLabel);
        row.append(control, extra);
        moveFields.appendChild(row);
        updateMove();
    }
    const natureField = createPalaceField(nature, "nature");
    natureField.classList.add("palace-nature-field");
    card.append(legend, heading, natureField, moveFields, output);
    return card;
}

function renderPalaceInfo(container) {
    if (!window.palaceData) {
        const missing = document.createElement("p");
        missing.textContent = translate("ui", "palaceDataMissing");
        container.appendChild(missing);
        return;
    }
    const tool = document.createElement("div");
    tool.className = "palace-tool";
    const species = getPalaceSpecies();
    const speciesList = document.createElement("datalist");
    speciesList.id = "palace-species-options";
    for (const mon of species) {
        const option = document.createElement("option");
        option.value = getName(mon);
        speciesList.appendChild(option);
    }
    const moveList = document.createElement("datalist");
    moveList.id = "palace-move-options";
    const entries = Object.entries(window.palaceData.moves).filter(([, move]) => move.number !== 165)
        .sort(([a], [b]) => getMoveName(a).localeCompare(getMoveName(b), currentLang));
    for (const [id] of entries) {
        const option = document.createElement("option");
        option.value = getMoveName(id);
        moveList.appendChild(option);
    }
    const team = document.createElement("div");
    team.className = "palace-team-grid";
    for (let slot = 0; slot < 3; slot++) { team.appendChild(buildPalacePlayerCard(slot, species)); }
    tool.append(speciesList, moveList, team);
    container.appendChild(tool);
}
