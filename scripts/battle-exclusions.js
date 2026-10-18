"use strict";

// Exclusions and autocomplete state belong to one trainer, including in Multi.
function getBattleExclusionLimit() {
    return getBattleFormatConfig().exclusionLimit;
}

function getExclusionDom(trainerIndex) {
    return dom.trainerPanels[trainerIndex].exclusions;
}

function isMonExcluded(mon, trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    const exclusions = getTrainerBattleExclusions(trainerIndex);
    return exclusions.speciesIds.has(mon.speciesId) || exclusions.itemIds.has(mon.item) ||
        isMonExcludedByFactoryPlayerTeam(mon);
}

function getCurrentTrainerAvailableMons(trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    return getAvailableBattleMons(trainerIndex);
}

function getUniqueSpeciesFromCurrentTrainer(trainerIndex) {
    return [...new Map(getCurrentTrainerAvailableMons(trainerIndex)
        .map((mon) => [mon.speciesId, mon])).values()];
}

function getUniqueItemsFromCurrentTrainer(trainerIndex) {
    return [...new Set(getCurrentTrainerAvailableMons(trainerIndex).map((mon) => mon.item).filter(Boolean))];
}

function refreshBattleExclusionInterface(trainerIndex) {
    const exclusionDom = getExclusionDom(trainerIndex);
    const hasSource = hasBattlePokemonSource(trainerIndex);
    const facility = getFacilityConfig();
    exclusionDom.excludedPokemonField.hidden = !facility.showSeenPokemon;
    exclusionDom.excludedItemField.hidden = !facility.showSeenItems;
    exclusionDom.container.hidden = !hasSource || (!facility.showSeenPokemon && !facility.showSeenItems);
    if (!hasSource) { return; }
    exclusionDom.excludedPokemonLabel.textContent = translate("ui", "excludedPokemonLabel");
    exclusionDom.excludedItemLabel.textContent = translate("ui", "excludedItemLabel");
    renderBattleExclusionTags(trainerIndex);
    updateBattleExclusionInputsState(trainerIndex);
}

function updateBattleExclusionInputsState(trainerIndex) {
    const exclusionDom = getExclusionDom(trainerIndex);
    const exclusions = getTrainerBattleExclusions(trainerIndex);
    ["pokemon", "item"].forEach((kind) => {
        const prefix = kind === "pokemon" ? "excludedPokemon" : "excludedItem";
        const values = kind === "pokemon" ? exclusions.speciesIds : exclusions.itemIds;
        updateBattleExclusionInputState({
            input: exclusionDom[`${prefix}Input`],
            suggestions: exclusionDom[`${prefix}Suggestions`],
            limitReached: values.size >= getBattleExclusionLimit(),
            placeholder: translate("ui", `${prefix}Placeholder`)
        });
    });
}

function renderBattleExclusionTags(trainerIndex) {
    const exclusionDom = getExclusionDom(trainerIndex);
    const exclusions = getTrainerBattleExclusions(trainerIndex);
    renderMultiSelectTags({
        container: exclusionDom.excludedPokemonTags,
        values: [...exclusions.speciesIds],
        getLabel: (speciesId) => getExcludedSpeciesLabel(speciesId, trainerIndex),
        onRemove: (speciesId) => removeExcludedSpecies(speciesId, trainerIndex)
    });
    renderMultiSelectTags({
        container: exclusionDom.excludedItemTags,
        values: [...exclusions.itemIds],
        getLabel: (itemId) => translateEntity("items", itemId),
        onRemove: (itemId) => removeExcludedItem(itemId, trainerIndex)
    });
}

function getExcludedSpeciesLabel(speciesId, trainerIndex) {
    const mon = getUniqueSpeciesFromCurrentTrainer(trainerIndex).find((mon) => mon.speciesId === speciesId);
    return mon ? getPokemonDisplayName(mon) : speciesId;
}

function addExcludedSpecies(speciesId, trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    if (!getFacilityConfig().showSeenPokemon) { return; }
    const exclusions = getTrainerBattleExclusions(trainerIndex);
    if (exclusions.speciesIds.size >= getBattleExclusionLimit() || exclusions.speciesIds.has(speciesId)) { return; }
    if (!getUniqueSpeciesFromCurrentTrainer(trainerIndex).some((mon) => mon.speciesId === speciesId)) { return; }
    exclusions.speciesIds.add(speciesId);
    clearExcludedPokemonInput(trainerIndex);
    refreshAfterBattleExclusionChange(trainerIndex);
}

function removeExcludedSpecies(speciesId, trainerIndex) {
    getTrainerBattleExclusions(trainerIndex).speciesIds.delete(speciesId);
    refreshAfterBattleExclusionChange(trainerIndex);
}

function addExcludedItem(itemId, trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    if (!getFacilityConfig().showSeenItems) { return; }
    const exclusions = getTrainerBattleExclusions(trainerIndex);
    if (exclusions.itemIds.size >= getBattleExclusionLimit() || exclusions.itemIds.has(itemId)) { return; }
    if (!getUniqueItemsFromCurrentTrainer(trainerIndex).includes(itemId)) { return; }
    exclusions.itemIds.add(itemId);
    clearExcludedItemInput(trainerIndex);
    refreshAfterBattleExclusionChange(trainerIndex);
}

function removeExcludedItem(itemId, trainerIndex) {
    getTrainerBattleExclusions(trainerIndex).itemIds.delete(itemId);
    refreshAfterBattleExclusionChange(trainerIndex);
}

function clearExcludedInput(kind, trainerIndex) {
    const exclusionDom = getExclusionDom(trainerIndex);
    const prefix = kind === "pokemon" ? "excludedPokemon" : "excludedItem";
    exclusionDom[`${prefix}Input`].value = "";
    exclusionDom[`${prefix}Suggestions`].replaceChildren();
    exclusionDom[`${prefix}Suggestions`].hidden = true;
    const state = getTrainerBattleState(trainerIndex).exclusionSuggestions[kind];
    state.matches = [];
    state.activeIndex = -1;
}

function clearExcludedPokemonInput(trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    clearExcludedInput("pokemon", trainerIndex);
}

function clearExcludedItemInput(trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    clearExcludedInput("item", trainerIndex);
}

function populateExcludedSuggestions(search, kind, trainerIndex) {
    const exclusionDom = getExclusionDom(trainerIndex);
    const exclusions = getTrainerBattleExclusions(trainerIndex);
    const state = getTrainerBattleState(trainerIndex).exclusionSuggestions[kind];
    const prefix = kind === "pokemon" ? "excludedPokemon" : "excludedItem";
    const menu = exclusionDom[`${prefix}Suggestions`];
    const selected = kind === "pokemon" ? exclusions.speciesIds : exclusions.itemIds;
    state.matches = [];
    state.activeIndex = -1;
    menu.replaceChildren();
    menu.hidden = true;
    const normalizedSearch = normalizeText(search);
    if (selected.size >= getBattleExclusionLimit() || normalizedSearch.length < 2) { return; }
    const values = kind === "pokemon" ? getUniqueSpeciesFromCurrentTrainer(trainerIndex)
        : getUniqueItemsFromCurrentTrainer(trainerIndex);
    const getId = (value) => kind === "pokemon" ? value.speciesId : value;
    const getLabel = (value) => kind === "pokemon" ? getPokemonDisplayName(value) : translateEntity("items", value);
    state.matches = values.filter((value) => !selected.has(getId(value)))
        .filter((value) => normalizeText(getLabel(value)).includes(normalizedSearch)).slice(0, 12);
    buildSuggestionMenu({
        menu, matches: state.matches, getLabel,
        onSelect: (value) => selectExcludedSuggestion(value, kind, trainerIndex)
    });
}

function populateExcludedPokemonSuggestions(search, trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    populateExcludedSuggestions(search, "pokemon", trainerIndex);
}

function populateExcludedItemSuggestions(search, trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    populateExcludedSuggestions(search, "item", trainerIndex);
}

function selectExcludedSuggestion(value, kind, trainerIndex) {
    if (kind === "pokemon") {
        addExcludedSpecies(value.speciesId, trainerIndex);
    } else {
        addExcludedItem(value, trainerIndex);
    }
}

function handleExcludedSuggestionKey(event, kind, trainerIndex) {
    const exclusionDom = getExclusionDom(trainerIndex);
    const prefix = kind === "pokemon" ? "excludedPokemon" : "excludedItem";
    const menu = exclusionDom[`${prefix}Suggestions`];
    const state = getTrainerBattleState(trainerIndex).exclusionSuggestions[kind];
    if (exclusionDom[`${prefix}Input`].disabled) { return; }
    if (handleExcludedSuggestionKeyboard({
        event, menu, matches: state.matches,
        getActiveIndex: () => state.activeIndex,
        setActiveIndex: (index) => { state.activeIndex = index; },
        onSelect: (value) => selectExcludedSuggestion(value, kind, trainerIndex)
    })) {
        menu.querySelectorAll(".suggestion-item").forEach((item, index) => {
            item.classList.toggle("active", index === state.activeIndex);
        });
    }
}

function bindBattleExclusionEvents(trainerIndex) {
    const exclusionDom = getExclusionDom(trainerIndex);
    ["pokemon", "item"].forEach((kind) => {
        const prefix = kind === "pokemon" ? "excludedPokemon" : "excludedItem";
        const input = exclusionDom[`${prefix}Input`];
        input.addEventListener("input", () => populateExcludedSuggestions(input.value, kind, trainerIndex));
        input.addEventListener("keydown", (event) => handleExcludedSuggestionKey(event, kind, trainerIndex));
        input.addEventListener("blur", () => {
            setTimeout(() => { exclusionDom[`${prefix}Suggestions`].hidden = true; }, 100);
        });
    });
}

function refreshAfterBattleExclusionChange(trainerIndex) {
    getOpponentSlotIndexesForTrainer(trainerIndex).forEach(refreshSelectedPokemonDetailsAfterExclusionChange);
    renderBattleResults();
}

function refreshSelectedPokemonDetailsAfterExclusionChange(slotIndex) {
    const state = getOpponentBattleState(slotIndex);
    if (!state.speciesId) { return; }
    const availableSets = getSelectedPokemonSets(state.speciesId, slotIndex);
    if (availableSets.length === 0) {
        clearOpponentPokemonSelection(slotIndex, false);
        return;
    }
    const hadPossibleSets = state.possibleSetIds.size > 0;
    state.possibleSetIds = new Set(availableSets.filter((mon) => state.possibleSetIds.has(mon.id)).map((mon) => mon.id));
    if (hadPossibleSets && state.possibleSetIds.size === 0) {
        state.possibleSetIds = new Set(availableSets.map((mon) => mon.id));
    }
}

function updateBattleExclusionInputState({ input, suggestions, limitReached, placeholder }) {
    const field = input.closest(".multi-select-field");

    input.disabled = limitReached;
    input.hidden = limitReached;
    input.placeholder = limitReached ? "" : placeholder;

    field.classList.toggle("multi-select-field-full", limitReached);

    if (limitReached) {
        input.value = "";
        suggestions.hidden = true;
    }
}

function renderMultiSelectTags({ container, values, getLabel, onRemove }) {
    container.replaceChildren();

    for (const value of values) {
        const tag = document.createElement("span");
        tag.className = "multi-select-tag";

        const text = document.createElement("span");
        text.textContent = getLabel(value);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "multi-select-tag-remove";
        button.textContent = "×";
        button.setAttribute("aria-label", `${translate("ui", "clearSearch")} : ${getLabel(value)}`);
        button.addEventListener("click", () => {
            onRemove(value);
        });

        tag.append(text, button);
        container.appendChild(tag);
    }
}

function buildSuggestionMenu({ menu, matches, getLabel, onSelect }) {
    if (matches.length === 0) {
        menu.hidden = true;
        return;
    }

    for (const value of matches) {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.textContent = getLabel(value);

        item.addEventListener("mousedown", (event) => {
            event.preventDefault();
            onSelect(value);
        });

        menu.appendChild(item);
    }

    menu.hidden = false;
}

function handleExcludedSuggestionKeyboard({
    event,
    menu,
    matches,
    getActiveIndex,
    setActiveIndex,
    onSelect
}) {
    if (menu.hidden || matches.length === 0) {
        return false;
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((getActiveIndex() + 1) % matches.length);
        return true;
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((getActiveIndex() - 1 + matches.length) % matches.length);
        return true;
    }

    if (event.key === "Enter" && getActiveIndex() >= 0) {
        event.preventDefault();
        onSelect(matches[getActiveIndex()]);
        return true;
    }

    if (event.key === "Escape") {
        menu.hidden = true;
        return false;
    }

    return false;
}
