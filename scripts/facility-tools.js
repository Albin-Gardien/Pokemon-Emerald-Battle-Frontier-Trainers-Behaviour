"use strict";

// One registry connects a facility's optional tools to the shared controls.
// Additional tools can supply these hooks without changing combat slots.
const facilityTools = {
    palace: {
        titleKey: "playerTeamTitle",
        helpKey: "palaceTeamHelp",
        renderInfo: renderPalaceInfo,
        getExtraTrainers: getPalaceBrainTrainers
    },
    dome: {
        titleKey: "domeToolTitle",
        helpKey: "domeToolHelp",
        getTrainerSeries: getDomeTrainerSeries,
        getExtraTrainers: getDomeBrainTrainers,
        allowMonAtLevel: isDomeMonAllowedAtLevel,
        filterBattleMons: filterDomeBattleMons,
        renderInfo: renderDomeInfo,
        refreshInfo: refreshDomeInfo
    },
    pyramid: {
        titleKey: "pyramidWildTitle",
        helpKey: "pyramidProbabilityNote",
        getTrainerSeries: getPyramidTrainerSeries,
        renderInfo: renderPyramidInfo
    },
    factory: {
        titleKey: "factoryHintsTitle",
        renderInfo: renderFactoryHints,
        updateControls: updateFactoryControls,
        reset: resetFactoryPlayerTeam,
        bindEvents: bindFactoryControlEvents
    },
    pike: {
        titleKey: "pikeRoomsTitle",
        helpKey: "pikeRoomsHelp",
        getTrainerSeries: getPikeTrainerSeries,
        renderInfo: renderPikeInfo
    }
};
const facilityInfoSectionState = new Map();

function getFacilityChallengeSeries() {
    return battleState.facilitySeries[battleState.facility] ?? 1;
}

function getFacilityTrainerSeries() {
    return facilityTools[battleState.facility]?.getTrainerSeries?.() ?? null;
}

function getExtraFacilityTrainers() {
    return facilityTools[battleState.facility]?.getExtraTrainers?.() ?? [];
}

function updateFacilitySelectionControls() {
    const config = getFacilityConfig();
    dom.trainerLabel.hidden = config.usesTrainerSelection === false;
    dom.trainerSelectorsContainer.hidden = config.usesTrainerSelection === false;
    dom.seriesFilterDropdown.hidden = config.seriesControl !== "filter";
    dom.facilitySeriesField.hidden = config.seriesControl !== "number";
    dom.facilitySeriesLabel.textContent = config.seriesLabelKey ? translate("ui", config.seriesLabelKey) : "";
    setHelpTooltip(document.getElementById("facility-series-help"), battleState.facility === "factory"
        ? translate("ui", "factorySeriesHelp") : null);
    dom.facilitySeriesInput.value = String(getFacilityChallengeSeries());
    if (config.maxSeries) { dom.facilitySeriesInput.max = String(config.maxSeries); }
    else { dom.facilitySeriesInput.removeAttribute("max"); }

    dom.facilityModeInputs.forEach((input) => {
        input.disabled = !FACILITY_MODE_CONFIG[input.value];
        input.checked = input.value === battleState.facility;
    });
    dom.battleFormatInputs.forEach((input) => {
        input.disabled = !config.formats.includes(input.value);
        input.checked = input.value === battleState.format;
    });
    dom.trainerPanels.forEach((panel) => {
        panel.exclusions.excludedPokemonField.hidden = !config.showSeenPokemon;
        panel.exclusions.excludedItemField.hidden = !config.showSeenItems;
    });
    for (const [facility, tool] of Object.entries(facilityTools)) {
        tool.updateControls?.(facility === battleState.facility);
    }
}

function handleFacilityModeChange(event) {
    const facility = event.target.value;
    if (!event.target.checked || !FACILITY_MODE_CONFIG[facility] || facility === battleState.facility) {
        return;
    }

    facilityTools[battleState.facility]?.reset?.();
    battleState.facility = facility;
    facilityTools[facility]?.reset?.();
    const config = getFacilityConfig();
    if (!config.formats.includes(battleState.format)) {
        battleState.format = config.formats[0];
    }
    closeSeriesFilterMenu();
    updateLevelInputConstraints();
    clearTrainerDisplay();
    applyLanguage();
}

function handleFacilitySeriesChange(event) {
    const previous = getFacilityChallengeSeries();
    const series = Number(event.target.value);
    const valid = Number.isSafeInteger(series) && series >= 1 &&
        (!getFacilityConfig().maxSeries || series <= getFacilityConfig().maxSeries);
    dom.facilitySeriesInput.value = String(valid ? series : previous);
    if (getFacilityConfig().seriesControl !== "number" || !valid || series === previous) {
        return;
    }

    battleState.facilitySeries[battleState.facility] = series;
    facilityTools[battleState.facility]?.reset?.();
    clearTrainerDisplay();
    updateFacilitySelectionControls();
    renderFacilityInfo();
}

function bindFacilityControlEvents() {
    dom.facilityModeInputs.forEach((input) => input.addEventListener("change", handleFacilityModeChange));
    dom.facilitySeriesInput.addEventListener("change", handleFacilitySeriesChange);
    Object.values(facilityTools).forEach((tool) => tool.bindEvents?.());
}

// Reusable details panel and nested sections. Re-rendering preserves open state.
function rememberFacilityInfoSections(container = dom.facilityInfoContent) {
    for (const section of container.querySelectorAll(".facility-info-section")) {
        facilityInfoSectionState.set(section.dataset.infoSection, section.open);
    }
}

function renderFacilityInfo() {
    rememberFacilityInfoSections();
    const tool = facilityTools[battleState.facility];
    dom.facilityInfoPanel.hidden = !tool?.renderInfo;
    dom.facilityInfoContent.replaceChildren();
    if (!tool?.renderInfo) {
        return;
    }

    dom.facilityInfoTitle.textContent = translate("ui", tool.titleKey);
    setHelpTooltip(document.getElementById("facility-info-help"), tool.helpKey ? translate("ui", tool.helpKey) : null);
    tool.renderInfo(dom.facilityInfoContent);
}

function createFacilityInfoSection(key, title, initiallyOpen = false) {
    const details = document.createElement("details");
    details.className = "facility-info-section";
    details.dataset.infoSection = key;
    details.open = facilityInfoSectionState.get(key) ?? initiallyOpen;
    const summary = document.createElement("summary");
    summary.className = "facility-info-section-title";
    summary.textContent = title;
    const content = document.createElement("div");
    content.className = "facility-info-grid";
    details.append(summary, content);
    return { details, content };
}

function formatFacilityText(key, values = {}) {
    return Object.entries(values).reduce((text, [name, value]) =>
        text.replaceAll(`{${name}}`, String(value)), translate("ui", key));
}

// Pyramid data access: wild rounds loop; trainer ranges saturate independently.
function getPyramidRoundIndex(series = getFacilityChallengeSeries()) {
    return (series - 1) % (window.pyramidWildMons?.cycleLength ?? 20);
}

function getPyramidTrainerSeries() {
    const series = getFacilityChallengeSeries();
    const ranges = window.pyramidWildMons?.trainerSeries;
    const range = ranges?.[Math.min(series - 1, ranges.length - 1)];
    return { id: "pyramid-series", start: range?.start ?? 1, end: range?.end ?? 0 };
}

function getPyramidWildEntries(floorNumber, level = getSelectedLevel(), series = getFacilityChallengeSeries()) {
    const data = window.pyramidWildMons;
    const mode = level === 50 ? "level50" : "open";
    const round = data?.rounds?.[mode]?.[getPyramidRoundIndex(series)];
    const floor = data?.floors?.[floorNumber - 1];
    if (!round || !floor) {
        return [];
    }

    return floor.probabilities.flatMap((probability, index) => {
        if (!probability) {
            return [];
        }
        const entry = round[index];
        const baseLevel = mode === "level50" ? entry.levelValue : level - entry.levelValue;
        return [{
            ...entry,
            ...data.species[entry.speciesId],
            probability,
            levelMin: baseLevel - 5,
            levelMax: baseLevel + 5
        }];
    });
}

function renderPyramidInfo(container) {
    const data = window.pyramidWildMons;
    if (!data) {
        const missing = document.createElement("p");
        missing.className = "facility-data-status";
        missing.textContent = translate("ui", "pyramidDataMissing");
        container.appendChild(missing);
        return;
    }

    const series = getFacilityChallengeSeries();
    const range = getPyramidTrainerSeries();
    const overview = document.createElement("p");
    overview.className = "facility-info-overview";
    overview.textContent = formatFacilityText("pyramidOverview", {
        series, cycle: getPyramidRoundIndex() + 1, start: range.start, end: range.end
    });
    container.appendChild(overview);

    for (const floor of data.floors) {
        const section = createFacilityInfoSection(`pyramid-floor-${floor.number}`,
            formatFacilityText("pyramidFloorTitle", { floor: floor.number }), floor.number === 1);
        for (const mon of getPyramidWildEntries(floor.number)) {
            section.content.appendChild(buildPyramidWildCard(mon));
        }
        container.appendChild(section.details);
    }
}

function buildPyramidWildCard(mon) {
    const card = document.createElement("article");
    card.className = "facility-info-card";
    card.dataset.speciesId = mon.speciesId;
    const header = document.createElement("div");
    header.className = "facility-info-card-header";
    const sprite = document.createElement("img");
    sprite.className = "facility-info-sprite";
    sprite.src = getPokemonFrontSpriteUrl(mon);
    sprite.alt = "";
    sprite.loading = "lazy";
    sprite.addEventListener("error", () => { sprite.hidden = true; });
    const name = document.createElement("h4");
    name.className = "facility-info-name";
    name.textContent = getName(mon);
    const probability = document.createElement("span");
    probability.className = "facility-info-probability";
    probability.textContent = `${mon.probability}%`;
    header.append(sprite, name, probability);

    const abilities = document.createElement("p");
    abilities.className = "facility-info-abilities";
    abilities.textContent = formatFacilityText(mon.abilities.length > 1 ? "pyramidAbilities" : "pyramidAbility", {
        abilities: mon.abilities.map((id) => translateEntity("abilities", id)).join(" / ")
    });
    const level = document.createElement("p");
    level.className = "facility-info-level";
    level.textContent = formatFacilityText("pyramidWildLevel", { min: mon.levelMin, max: mon.levelMax });
    const moves = document.createElement("ul");
    moves.className = "facility-info-moves";
    for (const moveId of mon.moves) {
        const item = document.createElement("li");
        const extra = window.pyramidWildMons.extraMoves[moveId];
        item.textContent = window.moves?.[moveId] ? getMoveName(moveId) :
            extra?.names?.[currentLang] ?? extra?.names?.en ?? getMoveName(moveId);
        applyTypeColor(item, getMoveType(moveId) ?? extra?.type);
        moves.appendChild(item);
    }
    card.append(header, abilities, level, moves);
    return card;
}
