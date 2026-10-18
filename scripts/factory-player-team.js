"use strict";

// -----------------------------------------------------------------------------
// Factory player team state
// -----------------------------------------------------------------------------

const FACTORY_PLAYER_TEAM_MAX_SIZE = 3;

// Returns factory player team size
function getFactoryPlayerTeamSize() {
    return 3;
}

// Creates factory player slot state
function createFactoryPlayerSlotState() {
    return {
        monId: null,
        // A chosen Pokémon keeps its set/IVs when the draft's swap rank changes.
        mon: null,
        suggestionMatches: [],
        suggestionActiveIndex: -1
    };
}

const factoryPlayerTeamState = {
    slots: Array.from(
        { length: FACTORY_PLAYER_TEAM_MAX_SIZE },
        () => createFactoryPlayerSlotState()
    )
};

// Returns factory player slot state
function getFactoryPlayerSlotState(slotIndex) {
    return factoryPlayerTeamState.slots[slotIndex];
}

// Returns factory player slot DOM
function getFactoryPlayerSlotDom(slotIndex) {
    return dom.factoryPlayerTeam.slots[slotIndex];
}

// -----------------------------------------------------------------------------
// Factory player team source
// -----------------------------------------------------------------------------

// Returns factory player team candidate mons
function getFactoryPlayerTeamCandidateMons() {
    if (!isFactoryMode()) {
        return [];
    }

    return getFactoryMonSources()?.candidates ?? [];
}

// Factory control hooks use the same facility number field and reset policy.
function updateFactoryControls() {
    dom.factoryControls.container.hidden = !isFactoryMode();
    dom.factoryControls.towerInput.value = String(battleState.factory.towerSeries);
    dom.factoryControls.swapsInput.value = String(battleState.factory.swaps);
    dom.factoryControls.brainField.hidden = !isFactoryMode() || !canEncounterFactoryBrain();
    dom.factoryControls.brainInput.checked = battleState.factory.brain;
    setHelpTooltip(dom.factoryControls.hint, formatFacilityText("factoryControlsHint", {
        rank: getFactoryRentalRank()
    }));
    applyFactoryPlayerTeamLanguage();
}

function bindFactoryControlEvents() {
    const resetOpponentSelection = () => {
        resetAllOpponentBattleStates();
        resetAllTrainerBattleExclusions();
        dom.trainerPanels.forEach((_, index) => {
            clearExcludedPokemonInput(index);
            clearExcludedItemInput(index);
        });
        renderBattleResults();
    };
    const bindNumber = (input, key, min, max) => input.addEventListener("change", () => {
        const previous = battleState.factory[key];
        const value = Number(input.value);
        const valid = input.value.trim() && Number.isInteger(value) && value >= min && value <= max;
        input.value = String(valid ? value : previous);
        if (!isFactoryMode() || !valid || value === previous) { return; }
        battleState.factory[key] = value;
        if (key === "swaps") {
            // Only draft suggestions change. Keep teams, exclusions and PP intact.
            dom.factoryPlayerTeam.slots.forEach((slotDom, slotIndex) => {
                slotDom.suggestions.replaceChildren();
                slotDom.suggestions.hidden = true;
                const slot = getFactoryPlayerSlotState(slotIndex);
                slot.suggestionMatches = [];
                slot.suggestionActiveIndex = -1;
            });
            renderBattleResults();
        } else {
            resetFactoryPlayerTeam();
            resetOpponentSelection();
        }
        updateFacilitySelectionControls();
    });
    bindNumber(dom.factoryControls.towerInput, "towerSeries", 1, 143);
    bindNumber(dom.factoryControls.swapsInput, "swaps", 0, 999);
    dom.factoryControls.brainInput.addEventListener("change", () => {
        if (!isFactoryMode()) { return; }
        battleState.factory.brain = dom.factoryControls.brainInput.checked;
        resetOpponentSelection();
    });
}

// Returns factory player team mon
function getFactoryPlayerTeamMon(slotIndex) {
    const slot = getFactoryPlayerSlotState(slotIndex);
    const monId = slot.monId;

    if (!monId) {
        return null;
    }

    return slot.mon ?? getFactoryMonSources()?.candidateById.get(monId) ?? null;
}

// Returns selected factory player team mons
function getSelectedFactoryPlayerTeamMons() {
    return factoryPlayerTeamState.slots
        .slice(0, getFactoryPlayerTeamSize())
        .map((_, slotIndex) => getFactoryPlayerTeamMon(slotIndex))
        .filter(Boolean);
}

// Returns factory player mon display name
function getFactoryPlayerMonDisplayName(mon) {
    return `${getName(mon)} ${mon.setNumber ?? ""} — ${translate("ui", "iv")} ${getBattlePokemonIvLabel(mon)} — ${translate("ui", `factoryOrigin_${mon.factoryOrigin}`)}`;
}

// Original rentals share the six-mon draft; swaps may introduce repeated items.
function isFactoryPlayerCandidateAvailable(mon, slotIndex) {
    const others = factoryPlayerTeamState.slots
        .map((_, index) => index === slotIndex ? null : getFactoryPlayerTeamMon(index))
        .filter(Boolean);
    if (others.some((other) => other.speciesId === mon.speciesId)) { return false; }
    if (mon.factoryOrigin === "trade") { return true; }
    const maximum = mon.factoryOrigin === "upgrade" ? getFactoryRentalRank() : 6 - getFactoryRentalRank();
    if (others.filter((other) => other.factoryOrigin === mon.factoryOrigin).length >= maximum) { return false; }
    return !mon.item || mon.item === "none" || !others.some((other) =>
        other.factoryOrigin !== "trade" && other.item === mon.item);
}

// Returns whether mon excluded by factory player team
function isMonExcludedByFactoryPlayerTeam(mon) {
    if (!isFactoryMode()) {
        return false;
    }

    return getSelectedFactoryPlayerTeamMons().some((playerMon) =>
        mon.factoryBoss ? playerMon.sourceSetId === mon.sourceSetId : playerMon.speciesId === mon.speciesId
    );
}

// -----------------------------------------------------------------------------
// Factory player team suggestions
// -----------------------------------------------------------------------------

// Populates factory player suggestions
function populateFactoryPlayerSuggestions(search, slotIndex) {
    const slotState = getFactoryPlayerSlotState(slotIndex);
    const slotDom = getFactoryPlayerSlotDom(slotIndex);

    slotDom.suggestions.replaceChildren();

    slotState.suggestionMatches = [];
    slotState.suggestionActiveIndex = -1;

    const normalizedSearch = normalizeText(search);

    if (normalizedSearch.length < 2) {
        slotDom.suggestions.hidden = true;
        return;
    }

    const matches = getFactoryPlayerTeamCandidateMons()
        .filter((mon) => isFactoryPlayerCandidateAvailable(mon, slotIndex))
        .filter((mon) => {
            const searchableValues = [
                getFactoryPlayerMonDisplayName(mon),
                getName(mon, "fr"),
                getName(mon, "en"),
                `${getName(mon, "fr")} ${mon.setNumber ?? ""}`,
                `${getName(mon, "en")} ${mon.setNumber ?? ""}`,
                `${translate("ui", "iv")} ${getBattlePokemonIv(mon)}`
            ];

            return searchableValues.some((value) =>
                normalizeText(value).includes(normalizedSearch)
            );
        })
        .slice(0, 30);

    slotState.suggestionMatches = matches;

    if (matches.length === 0) {
        slotDom.suggestions.hidden = true;
        return;
    }

    matches.forEach((mon, index) => {
        const item = document.createElement("div");

        item.className = "suggestion-item";
        item.dataset.index = index;
        item.textContent = getFactoryPlayerMonDisplayName(mon);

        item.addEventListener("mousedown", (event) => {
            event.preventDefault();
            selectFactoryPlayerMon(mon, slotIndex);
        });

        slotDom.suggestions.appendChild(item);
    });

    slotDom.suggestions.hidden = false;
}

// Updates factory player suggestion active item
function updateFactoryPlayerSuggestionActiveItem(slotIndex) {
    const slotState = getFactoryPlayerSlotState(slotIndex);
    const slotDom = getFactoryPlayerSlotDom(slotIndex);
    const items = slotDom.suggestions.querySelectorAll(".suggestion-item");

    items.forEach((item, index) => {
        item.classList.toggle("active", index === slotState.suggestionActiveIndex);
    });
}

// Handles factory player suggestion keyboard
function handleFactoryPlayerSuggestionKeyboard(event, slotIndex) {
    const slotState = getFactoryPlayerSlotState(slotIndex);
    const slotDom = getFactoryPlayerSlotDom(slotIndex);
    const matches = slotState.suggestionMatches;

    if (slotDom.suggestions.hidden || matches.length === 0) {
        return;
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        slotState.suggestionActiveIndex = (slotState.suggestionActiveIndex + 1) % matches.length;

        updateFactoryPlayerSuggestionActiveItem(slotIndex);
        return;
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        slotState.suggestionActiveIndex = (slotState.suggestionActiveIndex - 1 + matches.length) % matches.length;

        updateFactoryPlayerSuggestionActiveItem(slotIndex);
        return;
    }

    if (event.key === "Enter" && slotState.suggestionActiveIndex >= 0) {
        event.preventDefault();

        selectFactoryPlayerMon(matches[slotState.suggestionActiveIndex], slotIndex);

        return;
    }

    if (event.key === "Escape") {
        slotDom.suggestions.hidden = true;
    }
}

// -----------------------------------------------------------------------------
// Factory player team selection
// -----------------------------------------------------------------------------

// Selects factory player mon
function selectFactoryPlayerMon(mon, slotIndex) {
    if (!isFactoryMode() || slotIndex >= getFactoryPlayerTeamSize() ||
        !getFactoryMonSources()?.candidateById.has(mon.id) || !isFactoryPlayerCandidateAvailable(mon, slotIndex)) { return; }
    const slotState = getFactoryPlayerSlotState(slotIndex);
    const slotDom = getFactoryPlayerSlotDom(slotIndex);

    slotState.monId = mon.id;
    slotState.mon = mon;
    slotState.suggestionMatches = [];
    slotState.suggestionActiveIndex = -1;

    slotDom.input.value = getFactoryPlayerMonDisplayName(mon);
    slotDom.suggestions.replaceChildren();
    slotDom.suggestions.hidden = true;

    renderFactoryPlayerTeamSlot(slotIndex);
    updateSearchClearButtons();
    refreshFactoryOpponentPoolAfterPlayerTeamChange();
}

// Clears factory player team slot
function clearFactoryPlayerTeamSlot(slotIndex, refreshOpponentPool = true) {
    const slotState = getFactoryPlayerSlotState(slotIndex);
    const slotDom = getFactoryPlayerSlotDom(slotIndex);

    slotState.monId = null;
    slotState.mon = null;
    slotState.suggestionMatches = [];
    slotState.suggestionActiveIndex = -1;

    slotDom.input.value = "";
    slotDom.suggestions.replaceChildren();
    slotDom.suggestions.hidden = true;
    slotDom.details.replaceChildren();
    slotDom.details.hidden = true;

    updateSearchClearButtons();
    if (refreshOpponentPool) {
        refreshFactoryOpponentPoolAfterPlayerTeamChange();
    }
}

// Resets factory player team
function resetFactoryPlayerTeam() {
    factoryPlayerTeamState.slots.forEach((_, slotIndex) => {
        clearFactoryPlayerTeamSlot(slotIndex, false);
    });
}

// -----------------------------------------------------------------------------
// Factory player team rendering
// -----------------------------------------------------------------------------

// Builds factory player moves block
function buildFactoryPlayerMovesBlock(mon) {
    const movesBlock = document.createElement("div");
    movesBlock.className = "pokemon-detail-moves factory-player-moves";

    const title = document.createElement("p");
    title.className = "moves-title";
    title.textContent = translate("ui", "movesTitle");

    const grid = document.createElement("div");
    grid.className = "moves-grid";

    for (const moveId of mon.moves) {
        const move = document.createElement("div");
        move.className = "move-detail";

        applyTypeColor(move, getMoveType(moveId));

        const label = document.createElement("span");
        label.className = "move-detail-name";
        label.textContent = getMoveName(moveId);

        move.appendChild(label);
        grid.appendChild(move);
    }

    movesBlock.append(title, grid);

    return movesBlock;
}

// Builds factory player pokemon card
function buildFactoryPlayerPokemonCard(mon) {
    const stats = calculateBattlePokemonStats(mon, getSelectedLevel());

    const card = document.createElement("article");
    card.className = "pokemon-detail-card factory-player-pokemon-card";

    const title = document.createElement("h3");
    title.className = "factory-player-pokemon-title";
    title.textContent = `${getName(mon)} ${mon.setNumber ?? ""}`;

    const content = document.createElement("div");
    content.className = "pokemon-detail-content";

    const sprite = document.createElement("img");
    sprite.className = "pokemon-detail-sprite";
    sprite.src = getPokemonFrontSpriteUrl(mon);
    sprite.alt = getName(mon);
    sprite.loading = "lazy";

    const info = document.createElement("div");
    info.className = "pokemon-detail-info";

    info.append(
        buildTypeInfoLine(mon.types),
        buildAbilitiesInfoLine(mon.abilities),
        buildNatureInfoLine(mon.nature),
        buildItemInfoLine(mon.item, getItemSpriteUrl(mon.item)),
        buildSimpleInfoLine(translate("ui", "iv"), getBattlePokemonIvLabel(mon)),
        buildSimpleInfoLine(translate("ui", "factoryOrigin"), translate("ui", `factoryOrigin_${mon.factoryOrigin}`))
    );

    const statsBlock = buildStatsBlock(stats);
    const movesBlock = buildFactoryPlayerMovesBlock(mon);

    content.append(sprite, info, statsBlock);
    card.append(title, content, movesBlock);

    return card;
}

// Renders factory player team slot
function renderFactoryPlayerTeamSlot(slotIndex) {
    const slotDom = getFactoryPlayerSlotDom(slotIndex);
    const mon = getFactoryPlayerTeamMon(slotIndex);

    slotDom.details.replaceChildren();

    if (!mon) {
        slotDom.details.hidden = true;
        return;
    }

    slotDom.input.value = getFactoryPlayerMonDisplayName(mon);
    slotDom.details.appendChild(buildFactoryPlayerPokemonCard(mon));
    slotDom.details.hidden = false;
}

// Renders factory player team
function renderFactoryPlayerTeam() {
    dom.factoryPlayerTeam.container.hidden = !isFactoryMode();

    if (!isFactoryMode()) {
        return;
    }

    const teamSize = getFactoryPlayerTeamSize();
    factoryPlayerTeamState.slots.forEach((_, slotIndex) => {
        const slotDom = getFactoryPlayerSlotDom(slotIndex);
        const isActive = slotIndex < teamSize;

        slotDom.container.hidden = !isActive;

        if (isActive) {
            renderFactoryPlayerTeamSlot(slotIndex);
        }
    });
}

// Applies factory player team language
function applyFactoryPlayerTeamLanguage() {
    dom.factoryPlayerTeam.title.textContent = translate("ui", "playerTeamTitle");

    dom.factoryPlayerTeam.slots.forEach((slotDom, slotIndex) => {
        slotDom.label.textContent = translate("ui", `factoryPlayerPokemon${slotIndex + 1}`);
        slotDom.input.placeholder = translate("ui", "factoryPlayerPokemonPlaceholder");

        const mon = getFactoryPlayerTeamMon(slotIndex);

        if (mon) {
            slotDom.input.value = getFactoryPlayerMonDisplayName(mon);
        }
    });
}

// -----------------------------------------------------------------------------
// Factory opponent refresh
// -----------------------------------------------------------------------------

// Refreshes factory opponent pool after player team change
function refreshFactoryOpponentPoolAfterPlayerTeamChange() {
    if (!isFactoryMode()) {
        return;
    }

    for (let slotIndex = 0; slotIndex < getActiveOpponentCount(); slotIndex++) {
        refreshSelectedPokemonDetailsAfterExclusionChange(slotIndex);
    }

    renderBattleResults();
    updateSelectedPokemonPresence();
}

// -----------------------------------------------------------------------------
// Factory player team events
// -----------------------------------------------------------------------------

// Binds factory player team events
function bindFactoryPlayerTeamEvents() {
    dom.factoryPlayerTeam.slots.forEach((slotDom, slotIndex) => {
        slotDom.input.addEventListener("input", (event) => {
            const text = event.target.value;
            if (!text.trim() || getFactoryPlayerSlotState(slotIndex).monId) {
                clearFactoryPlayerTeamSlot(slotIndex);
                slotDom.input.value = text;
            }
            populateFactoryPlayerSuggestions(text, slotIndex);
            updateSearchClearButtons();
        });

        slotDom.input.addEventListener("keydown", (event) => {
            handleFactoryPlayerSuggestionKeyboard(event, slotIndex);
        });

        slotDom.clearButton.addEventListener("click", () => {
            clearFactoryPlayerTeamSlot(slotIndex);
            slotDom.input.focus();
        });

        slotDom.input.addEventListener("blur", () => {
            setTimeout(() => {
                slotDom.suggestions.hidden = true;

                const mon = getFactoryPlayerTeamMon(slotIndex);
                slotDom.input.value = mon
                    ? getFactoryPlayerMonDisplayName(mon)
                    : "";
                updateSearchClearButtons();
            }, 100);
        });
    });
}
