"use strict";

// -----------------------------------------------------------------------------
// Pure probability model: hinted draw, replacements, then other-door exclusions.
// These are event probabilities, not probabilities of successfully inflicting a
// status on an immune Pokémon. Draw slots are treated as equiprobable; tiny
// Random()%N rounding biases are below the displayed precision.
// -----------------------------------------------------------------------------

function calculatePikeProbabilities(team, hint = "") {
    const data = window.pikeRooms;
    const alive = team.filter((mon) => mon.health !== "ko").length;
    const needsHealing = team.filter((mon) => mon.health !== "full" ||
        mon.status !== "none" || !mon.ppFull).length;
    const availability = data.events.map(() => true);
    availability[1] = availability[4] = needsHealing > 0;
    availability[3] = team.some((mon) => mon.health !== "ko" && mon.status === "none");
    availability[7] = alive >= 2;
    const result = { alive, needsHealing, availability, validHint: true,
        hinted: Array(8).fill(0), other: Array(8).fill(0),
        groupProbabilities: Object.fromEntries(data.groups.map((group) => [group, 0])) };
    if (!alive) { return { ...result, validHint: false, ended: true }; }
    if (hint === "brain") {
        const healing = [0, 0, 0];
        for (const permutation of data.bossHealPermutations) {
            // All doors have the same marginal distribution. Only mons needing
            // care consume TryHealMons' requested count (including fainted mons).
            healing[Math.min(permutation[0], needsHealing)] += 1 / data.bossHealPermutations.length;
        }
        return { ...result, boss: true, healing };
    }

    const slots = needsHealing ? data.events.map((event) => event.id) : data.fullyHealedHintSlots;
    for (const rawId of slots) {
        const id = (rawId === 3 || rawId === 7) && !availability[rawId] ? 2 : rawId;
        result.hinted[id] += 1 / slots.length;
        result.groupProbabilities[data.events[id].group] += 1 / slots.length;
    }
    if (hint && !result.groupProbabilities[hint]) {
        return { ...result, validHint: false, hinted: null, other: null };
    }
    const groups = hint ? [hint] : data.groups;
    for (const group of groups) {
        const weight = hint ? 1 : result.groupProbabilities[group];
        const candidates = data.events.filter((event) => event.group !== group && availability[event.id]);
        for (const event of candidates) { result.other[event.id] += weight / candidates.length; }
    }
    if (hint) {
        result.hinted = result.hinted.map((probability, id) => data.events[id].group === hint
            ? probability / result.groupProbabilities[hint] : 0);
    }
    return result;
}

function getPikeStatusTargetCount(room = battleState.pike.room) {
    return room <= 4 ? 1 : room <= 9 ? 2 : 3;
}

// -----------------------------------------------------------------------------
// Hooks into the shared facility and trainer controls.
// -----------------------------------------------------------------------------

function getPikeTrainerSeries() {
    // GetRandomScaledFrontierTrainerId accepts u8: very long streaks wrap at 256.
    const challengeIndex = (getFacilityChallengeSeries() - 1) % 256;
    const index = Math.min(challengeIndex, 7);
    const ranges = window.pikeRooms?.trainerRanges;
    const simple = ranges?.simple[index] ?? [1, 0];
    const hard = battleState.format === "multi" ? simple : ranges?.hard[index] ?? simple;
    // Solo combines both contiguous ranges; Multi uses only standard trainers.
    return { id: "pike-series", start: Math.min(simple[0], hard[0]),
        end: Math.max(simple[1], hard[1]) };
}

// -----------------------------------------------------------------------------
// Compact calculator. Changing team health / hints never clears battle selections.
// -----------------------------------------------------------------------------

function formatPikeProbability(probability) {
    if (probability === null) { return "—"; }
    return `${new Intl.NumberFormat(currentLang, { maximumFractionDigits: 1 }).format(probability * 100)} %`;
}

function createPikeSelect(id, value, options) {
    const select = document.createElement("select");
    select.id = id;
    for (const [optionValue, key] of options) {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = translate("ui", key);
        select.appendChild(option);
    }
    select.value = value;
    return select;
}

function createPikeField(control, labelKey, helpKey) {
    const field = document.createElement("div");
    field.className = "pike-field";
    const caption = document.createElement("div");
    caption.className = "pike-caption";
    const label = document.createElement("label");
    label.htmlFor = control.id;
    label.textContent = translate("ui", labelKey);
    caption.appendChild(label);
    if (helpKey) { caption.appendChild(createHelpTooltip(translate("ui", helpKey))); }
    field.append(caption, control);
    return field;
}

function renderPikeInfo(container) {
    if (!window.pikeRooms) {
        const missing = document.createElement("p");
        missing.textContent = translate("ui", "pikeDataMissing");
        container.appendChild(missing);
        return;
    }
    const state = battleState.pike;
    const tool = document.createElement("div");
    tool.className = "pike-tool";
    const teamBox = document.createElement("fieldset");
    teamBox.className = "pike-team";
    const legend = document.createElement("legend");
    legend.textContent = translate("ui", "playerTeamTitle");
    legend.appendChild(createHelpTooltip(translate("ui", "pikeTeamHelp")));
    const teamGrid = document.createElement("div");
    teamGrid.className = "pike-team-grid";
    const slots = state.team.map((mon, index) => {
        const box = document.createElement("fieldset");
        box.className = "pike-team-slot";
        const title = document.createElement("legend");
        title.textContent = translate("ui", `factoryPlayerPokemon${index + 1}`).replace(/\s*[:：]$/, "");
        const health = createPikeSelect(`pike-health-${index}`, mon.health,
            [["full", "pikeHealthFull"], ["injured", "pikeHealthInjured"], ["ko", "pikeHealthKo"]]);
        const status = createPikeSelect(`pike-status-${index}`, mon.status,
            [["none", "pikeStatusNone"], ["poison", "pikeStatusPoison"], ["toxic", "pikeStatusToxic"],
                ["freeze", "pikeStatusFreeze"], ["paralysis", "pikeStatusParalysis"],
                ["sleep", "pikeStatusSleep"], ["burn", "pikeStatusBurn"]]);
        const pp = document.createElement("input");
        pp.id = `pike-pp-${index}`;
        pp.type = "checkbox";
        const ppField = document.createElement("div");
        ppField.className = "pike-pp-field";
        const ppLabel = document.createElement("label");
        ppLabel.htmlFor = pp.id;
        ppLabel.textContent = translate("ui", "pikePpFull");
        ppField.append(pp, ppLabel);
        box.append(title, createPikeField(health, "pikeHealthLabel"),
            createPikeField(status, "pikeStatusLabel"), ppField);
        function sync() {
            health.value = mon.health;
            status.value = mon.status;
            pp.checked = mon.ppFull;
            status.disabled = pp.disabled = mon.health === "ko";
            box.classList.toggle("is-fainted", mon.health === "ko");
        }
        health.addEventListener("change", () => { mon.health = health.value; sync(); renderOutput(); });
        status.addEventListener("change", () => { mon.status = status.value; renderOutput(); });
        pp.addEventListener("change", () => { mon.ppFull = pp.checked; renderOutput(); });
        sync();
        teamGrid.appendChild(box);
        return { sync };
    });
    const healedButton = document.createElement("button");
    healedButton.type = "button";
    healedButton.id = "pike-team-healed";
    healedButton.className = "pike-heal-button";
    healedButton.textContent = translate("ui", "pikeTeamHealed");
    healedButton.addEventListener("click", () => {
        state.team.forEach((mon) => Object.assign(mon, { health: "full", status: "none", ppFull: true }));
        slots.forEach((slot) => slot.sync());
        renderOutput();
    });
    teamBox.append(legend, teamGrid, healedButton);
    const controls = document.createElement("div");
    controls.className = "pike-room-controls";
    const roomSelect = document.createElement("select");
    roomSelect.id = "pike-room";
    for (let room = 2; room <= window.pikeRooms.roomsPerRound; room += 2) {
        const option = document.createElement("option");
        option.value = String(room);
        option.textContent = formatFacilityText("pikeRoomNumber", { room });
        roomSelect.appendChild(option);
    }
    roomSelect.value = String(state.room);
    const hintSelect = document.createElement("select");
    hintSelect.id = "pike-hint";
    function syncHints() {
        const options = [["", "pikeHintUnknown"],
            ...window.pikeRooms.groups.map((group) => [group, `pikeHint_${group}`])];
        if (state.room === 14) { options.push(["brain", "pikeHint_brain"]); }
        if (!options.some(([value]) => value === state.hint)) { state.hint = ""; }
        hintSelect.replaceChildren(...createPikeSelect("", state.hint, options).children);
        hintSelect.value = state.hint;
    }
    syncHints();
    roomSelect.addEventListener("change", () => {
        state.room = Number(roomSelect.value);
        syncHints();
        renderOutput();
    });
    hintSelect.addEventListener("change", () => { state.hint = hintSelect.value; renderOutput(); });
    controls.append(createPikeField(roomSelect, "pikeRoomLabel", "pikeRoomHelp"),
        createPikeField(hintSelect, "pikeHintLabel", "pikeHintHelp"));
    const output = document.createElement("div");
    output.id = "pike-probabilities";
    output.className = "pike-output";
    output.setAttribute("aria-live", "polite");
    function renderOutput() {
        closeHelpTooltip();
        output.replaceChildren();
        const result = calculatePikeProbabilities(state.team, state.hint);
        const heading = document.createElement("h3");
        heading.className = "pike-output-title";
        heading.textContent = translate("ui", result.boss ? "pikeBossTitle" : "pikeProbabilitiesTitle");
        heading.appendChild(createHelpTooltip(translate("ui", result.boss ? "pikeBossHelp" :
            !result.needsHealing ? "pikeFullyHealedBugHelp" : "pikeProbabilityHelp")));
        output.appendChild(heading);
        if (result.ended || !result.validHint) {
            const message = document.createElement("p");
            message.className = "facility-data-status";
            message.setAttribute("role", "status");
            message.textContent = translate("ui", result.ended ? "pikeTeamEnded" : "pikeHintImpossible");
            output.appendChild(message);
            if (result.ended) { return; }
        }
        if (result.boss) { renderPikeBossProbabilities(output, result); return; }
        const grid = document.createElement("div");
        grid.className = "pike-event-grid";
        for (const group of window.pikeRooms.groups) {
            const card = document.createElement("div");
            card.className = "pike-event-group";
            card.classList.toggle("is-hinted", state.hint === group);
            const title = document.createElement("h4");
            title.textContent = translate("ui", `pikeHint_${group}`);
            card.appendChild(title);
            const table = document.createElement("table");
            table.className = "pike-event-table";
            const thead = document.createElement("thead");
            const header = document.createElement("tr");
            for (const key of ["pikeEventLabel", "pikeDoorHinted", "pikeDoorOther"]) {
                const cell = document.createElement("th");
                cell.scope = "col";
                cell.textContent = translate("ui", key);
                header.appendChild(cell);
            }
            thead.appendChild(header);
            const tbody = document.createElement("tbody");
            for (const event of window.pikeRooms.events.filter((entry) => entry.group === group)) {
                const hinted = result.validHint ? result.hinted[event.id] : null;
                const other = result.validHint ? result.other[event.id] : null;
                const row = document.createElement("tr");
                row.className = "pike-event-row";
                row.dataset.pikeEvent = String(event.id);
                row.classList.toggle("is-unavailable", hinted === 0 && other === 0);
                const label = document.createElement("th");
                label.scope = "row";
                label.textContent = translate("ui", event.key);
                if (event.helpKey) { label.appendChild(createHelpTooltip(formatFacilityText(event.helpKey,
                    { count: getPikeStatusTargetCount() }))); }
                row.append(label, createPikeProbabilityCell(hinted, "hinted"),
                    createPikeProbabilityCell(other, "other"));
                tbody.appendChild(row);
            }
            table.append(thead, tbody);
            card.appendChild(table);
            grid.appendChild(card);
        }
        output.appendChild(grid);
    }
    tool.append(teamBox, controls, output);
    container.appendChild(tool);
    renderOutput();
}

function createPikeProbabilityCell(probability, kind) {
    const cell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = `pike-probability pike-probability-${kind}`;
    badge.textContent = formatPikeProbability(probability);
    badge.classList.toggle("is-impossible", probability === 0);
    cell.appendChild(badge);
    return cell;
}

function renderPikeBossProbabilities(container, result) {
    const forced = document.createElement("p");
    forced.className = "facility-info-overview";
    forced.textContent = translate("ui", "pikeBossForced");
    const grid = document.createElement("div");
    grid.className = "pike-boss-grid";
    result.healing.forEach((probability, count) => {
        const card = document.createElement("div");
        card.className = "pike-event-group pike-boss-card";
        card.classList.toggle("is-unavailable", probability === 0);
        const title = document.createElement("h4");
        title.textContent = formatFacilityText("pikeBossHealedCount", { count });
        const badge = document.createElement("span");
        badge.className = "pike-probability";
        badge.textContent = formatPikeProbability(probability);
        badge.classList.toggle("is-impossible", probability === 0);
        card.append(title, badge);
        grid.appendChild(card);
    });
    container.append(forced, grid);
}
