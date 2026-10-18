"use strict";

// -----------------------------------------------------------------------------
// Global state
// -----------------------------------------------------------------------------

let currentLang = "fr";
let selectedSeriesId = "all";

// -----------------------------------------------------------------------------
// Text and translation helpers
// -----------------------------------------------------------------------------

// Normalizes user input to make search accent-insensitive and case-insensitive.
function normalizeText(value) {
    return value
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[^a-z0-9]/g, "");
}

// Translates UI labels by section/key.
function translate(section, key) {
    return window.appTranslations[section]?.[key]?.[currentLang]
        ?? window.appTranslations[section]?.[key]?.en
        ?? key;
}

// Translates data values such as types, abilities, natures, items or moves.
function translateEntity(category, id) {
    if (category === "moves") {
        return getMoveName(id);
    }

    return window.appTranslations[category]?.[id]?.[currentLang]
        ?? window.appTranslations[category]?.[id]?.en
        ?? id;
}

// Returns the translated entity name, falling back to English then ID.
function getName(entity, lang = currentLang) {
    return entity.names?.[lang] ?? entity.names?.en ?? entity.id;
}

// Returns the language not currently displayed.
function getOtherLang() {
    return currentLang === "fr" ? "en" : "fr";
}

// -----------------------------------------------------------------------------
// Language and controls
// -----------------------------------------------------------------------------

function updateSearchClearButtons() {
    [...dom.trainerSlots, ...dom.opponentSlots, ...dom.factoryPlayerTeam.slots].forEach((slotDom) => {
        slotDom.clearButton.hidden = slotDom.input.value.length === 0;
    });
}

function applyTrainerSlotLanguage() {
    const isMulti = battleState.format === "multi";
    dom.trainerForm.classList.toggle("is-multi", isMulti);
    dom.trainerForm.classList.toggle("is-factory", isFactoryMode());
    dom.trainerLabel.textContent = translate("ui", isMulti ? "trainerLabelMulti" : "trainerLabel");
    dom.trainerSlots.forEach((slotDom, slotIndex) => {
        slotDom.container.hidden = slotIndex >= getActiveTrainerCount();
        slotDom.label.textContent = translate("ui", isMulti ? `trainerSlot${slotIndex + 1}` : "trainerLabel");
        slotDom.input.placeholder = translate("ui", "trainerPlaceholder");
    });
}

function applyOpponentSlotLanguage() {
    dom.opponentSlots.forEach((slotDom, slotIndex) => {
        slotDom.label.textContent = translate("ui", getActiveOpponentCount() === 2
            ? `opponentPokemonLabel${slotIndex + 1}` : "opponentPokemonLabel");
        slotDom.input.placeholder = translate("ui", "opponentPokemonPlaceholder");
    });
}

function updateTableSelectionHints() {
    dom.trainerPanels.forEach((_, trainerIndex) => {
        const slotIndex = getOpponentSlotIndexForTrainerTable(trainerIndex);
        setHelpTooltip(document.getElementById(`table-selection-hint-${trainerIndex}`),
            translate("ui", battleState.format === "doubles" ? "tableSelectionHintDoubles" : "tableSelectionHint")
                .replace("{slot}", String(slotIndex + 1)));
    });
    dom.opponentSlots.forEach((slotDom, slotIndex) => {
        slotDom.container.classList.toggle("is-active-opponent", battleState.format === "doubles" &&
            slotIndex === battleState.activeOpponentSlotIndex);
    });
}

function applyLanguage() {
    document.documentElement.lang = currentLang;
    document.title = translate("ui", "pageTitle");
    dom.pageTitle.textContent = translate("ui", "pageTitle");
    dom.levelLabel.textContent = translate("ui", "levelLabel");
    dom.languageToggle.textContent = currentLang === "fr" ? "EN" : "FR";
    document.querySelectorAll("[data-ui]").forEach((element) => {
        element.textContent = translate("ui", element.dataset.ui);
    });
    applyHelpTooltipsLanguage();
    document.querySelectorAll(".future-facility").forEach((element) => {
        element.title = translate("ui", "facilityComingSoon");
    });
    applyTrainerSlotLanguage();
    applyOpponentSlotLanguage();
    [...dom.trainerSlots, ...dom.opponentSlots, ...dom.factoryPlayerTeam.slots].forEach((slotDom) => {
        const label = translate("ui", "clearSearch");
        slotDom.clearButton.title = label;
        slotDom.clearButton.setAttribute("aria-label", label);
    });
    populateSeriesFilter();
    dom.trainerSlots.forEach((slotDom, trainerIndex) => {
        const trainer = getTrainerBattleState(trainerIndex).trainer;
        populateTrainerSelect(trainerIndex, trainer?.id ?? "");
        if (trainer) { slotDom.input.value = getName(trainer); }
        slotDom.suggestions.hidden = true;
    });
    renderBattleResults();
    updateFacilitySelectionControls();
    renderFacilityInfo();
}

function toggleLanguage() {
    currentLang = currentLang === "fr" ? "en" : "fr";
    applyLanguage();
}

function refreshSelectedOpponentViews() {
    dom.opponentSlots.forEach((slotDom, slotIndex) => {
        const speciesId = getOpponentBattleState(slotIndex).speciesId;
        if (slotIndex < getActiveOpponentCount() && hasBattlePokemonSourceForOpponentSlot(slotIndex) && speciesId) {
            renderSelectedPokemonDetails(speciesId, slotIndex);
        } else {
            slotDom.details.replaceChildren();
            slotDom.details.hidden = true;
        }
    });
    updateSelectedPokemonPresence();
}

function handleBattleFormatChange(event) {
    const format = event.target.value;
    if (!event.target.checked || !BATTLE_FORMAT_CONFIG[format] ||
        !getFacilityConfig().formats.includes(format) || format === battleState.format) { return; }
    battleState.format = format;
    if (isFactoryMode()) { resetFactoryPlayerTeam(); }
    resetAllOpponentBattleStates();
    resetAllTrainerBattleExclusions();
    const visibleTrainerIds = getVisibleTrainerIds();
    dom.trainerSlots.forEach((slotDom, trainerIndex) => {
        if (trainerIndex >= getActiveTrainerCount() ||
            !visibleTrainerIds.has(getTrainerBattleState(trainerIndex).trainer?.id)) {
            getTrainerBattleState(trainerIndex).trainer = null;
            slotDom.input.value = "";
        }
        const trainerState = getTrainerBattleState(trainerIndex);
        trainerState.suggestionMatches = [];
        trainerState.suggestionActiveIndex = -1;
        slotDom.suggestions.hidden = true;
        populateTrainerSelect(trainerIndex, trainerState.trainer?.id ?? "");
        clearExcludedPokemonInput(trainerIndex);
        clearExcludedItemInput(trainerIndex);
        dom.trainerPanels[trainerIndex].container.open = true;
    });
    applyTrainerSlotLanguage();
    applyOpponentSlotLanguage();
    renderBattleResults();
    updateFacilitySelectionControls();
    renderFacilityInfo();
}

function initApp() {
    bindHelpTooltipEvents();
    bindFacilityControlEvents();
    bindFactoryPlayerTeamEvents();
    updateLevelInputConstraints();
    dom.trainerSlots.forEach((_, slotIndex) => bindTrainerSlotEvents(slotIndex));
    dom.opponentSlots.forEach((_, slotIndex) => bindOpponentPokemonSlotEvents(slotIndex));
    dom.trainerPanels.forEach((_, trainerIndex) => bindBattleExclusionEvents(trainerIndex));
    dom.battleFormatInputs.forEach((input) => input.addEventListener("change", handleBattleFormatChange));
    dom.languageToggle.addEventListener("click", toggleLanguage);
    dom.trainerForm.addEventListener("submit", (event) => event.preventDefault());
    dom.seriesFilterButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleSeriesFilterMenu();
    });
    document.addEventListener("click", (event) => {
        if (!dom.seriesFilterDropdown.contains(event.target)) { closeSeriesFilterMenu(); }
    });
    dom.levelInput.addEventListener("change", () => {
        getSelectedLevel();
        resetAllOpponentBattleStates();
        resetAllTrainerBattleExclusions();
        if (isFactoryMode()) { resetFactoryPlayerTeam(); }
        dom.trainerPanels.forEach((_, trainerIndex) => {
            clearExcludedPokemonInput(trainerIndex);
            clearExcludedItemInput(trainerIndex);
        });
        renderBattleResults();
        renderFacilityInfo();
    });
    // Match the initial DOM to state, also when the browser restores form controls.
    dom.battleFormatInputs.forEach((input) => { input.checked = input.value === battleState.format; });
    dom.facilityModeInputs.forEach((input) => { input.checked = input.value === battleState.facility; });
    applyLanguage();
}

document.addEventListener("DOMContentLoaded", initApp);
