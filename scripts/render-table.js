"use strict";

// -----------------------------------------------------------------------------
// Table rendering and sprite helpers
// -----------------------------------------------------------------------------

function setSpriteTextCell(td, imageUrl, text, altText, spriteKind = "item") {
    const wrapper = document.createElement("span");
    wrapper.className = "sprite-text-cell";

    if (imageUrl) {
        const wrapperImg = document.createElement("span");
        wrapperImg.className =
        spriteKind === "pokemon"
            ? "pokemon-sprite-wrapper"
            : "item-sprite-wrapper";

        const img = document.createElement("img");
        img.className =
        spriteKind === "pokemon"
            ? "pokemon-cell-sprite"
            : "item-cell-sprite";

        img.src = imageUrl;
        img.alt = altText ?? "";
        img.loading = "lazy";

        img.addEventListener("error", () => {
        wrapperImg.remove();
        });

        wrapperImg.appendChild(img);
        wrapper.appendChild(wrapperImg);
    }

    const label = document.createElement("span");
    label.textContent = text ?? "";
    wrapper.appendChild(label);

    td.replaceChildren(wrapper);
}


// ---------------------------------------------------------------------
// Table rendering helpers
// ---------------------------------------------------------------------

// Creates the translated table header.
function createPokemonTableHead(showIv = false) {
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>${translate("columns", "name")}</th>
      <th>${translate("columns", "set")}</th>
      ${showIv ? `<th>${translate("ui", "iv")}</th>` : ""}
      <th>${translate("columns", "type1")}</th>
      <th>${translate("columns", "type2")}</th>
      <th>${translate("columns", "ability1")}</th>
      <th>${translate("columns", "ability2")}</th>
      <th>${translate("ui", "nature")}</th>
      <th>${translate("ui", "item")}</th>
      <th>${translate("statLabels", "hp")}</th>
      <th>${translate("ui", "attack")}</th>
      <th>${translate("ui", "defense")}</th>
      <th>${translate("statLabels", "spa")}</th>
      <th>${translate("statLabels", "spd")}</th>
      <th>${translate("columns", "speed")}</th>
      <th>${translate("columns", "move1")}</th>
      <th>${translate("columns", "move2")}</th>
      <th>${translate("columns", "move3")}</th>
      <th>${translate("columns", "move4")}</th>
    </tr>
  `;
  return thead;
}

// Returns the data used to create one Pokémon table row.
function getPokemonRowCells(mon, trainer, stats) {
  const ability1 = mon.abilities[0] ? translateEntity("abilities", mon.abilities[0]) : "";
  const ability2 = mon.abilities[1] ? translateEntity("abilities", mon.abilities[1]) : "";

  return [
    getName(mon),
    mon.setNumber,
    translateEntity("types", mon.types[0]),
    mon.types[1] ? translateEntity("types", mon.types[1]) : "",
    ability1,
    ability2,
    {
      value: translateEntity("natures", mon.nature),
      className: getNatureBoostedStat(mon.nature) ? `nature-boost-${getNatureBoostedStat(mon.nature)}` : ""
    },
    translateEntity("items", mon.item),

    { value: formatBattleStat(stats.hp), className: getEvClass(mon.evs.hp ?? 0), statKey: "hp" },
    { value: formatBattleStat(stats.atk), className: getEvClass(mon.evs.atk ?? 0), statKey: "atk" },
    { value: formatBattleStat(stats.def), className: getEvClass(mon.evs.def ?? 0), statKey: "def" },
    { value: formatBattleStat(stats.spa), className: getEvClass(mon.evs.spa ?? 0), statKey: "spa" },
    { value: formatBattleStat(stats.spd), className: getEvClass(mon.evs.spd ?? 0), statKey: "spd" },
    { value: formatBattleStat(stats.spe), className: getEvClass(mon.evs.spe ?? 0), statKey: "spe" },

    translateEntity("moves", mon.moves[0]),
    translateEntity("moves", mon.moves[1]),
    translateEntity("moves", mon.moves[2]),
    translateEntity("moves", mon.moves[3])
  ];
}

function getNatureBoostedStat(natureId) {
    return natureModifiers[natureId]?.up ?? "";
}

function getEvClass(ev) {
  if (ev >= 255) {
    return "ev-max";
  }

  if (ev >= 170) {
    return "ev-mid";
  }

  return "";
}

// Applies extra classes and type colors to one row cell.
function applyCellPresentation(td, cellData, index, mon) {
    if (cellData !== null && typeof cellData === "object") {
        td.textContent = cellData.value ?? "";

        if (cellData.className) {
        td.classList.add(cellData.className);
        }

        if (cellData.statKey) {
        td.classList.add(cellData.statKey);
        }
    } else {
        td.textContent = cellData ?? "";
    }

    if (index === 0) {
        setSpriteTextCell(td, getPokemonSpriteUrl(mon), getName(mon), getName(mon), "pokemon");
    }

    if (index === 2) {
        applyTypeColor(td, mon.types[0], "table");
    }

    if (index === 3 && mon.types[1]) {
        applyTypeColor(td, mon.types[1], "table");
    }

    if (index === 7) {
        setSpriteTextCell(td, getItemSpriteUrl(mon.item), translateEntity("items", mon.item), translateEntity("items", mon.item), "item");
    }

    if (index >= 14 && index <= 17) {
        const moveId = mon.moves[index - 14];
        const moveType = getMoveType(moveId);
        applyTypeColor(td, moveType, "table");
    }
}

// Creates one table row for one Pokémon set.
function createPokemonTableRow(mon, trainer, level, trainerIndex, showIv = false) {
  const stats = calculateBattlePokemonStats(mon, level, trainer);
  const cells = getPokemonRowCells(mon, trainer, stats);
  const row = document.createElement("tr");

  cells.forEach((cellData, index) => {
    const td = document.createElement("td");
    applyCellPresentation(td, cellData, index, mon);
    row.appendChild(td);
    if (showIv && index === 1) {
        const ivCell = document.createElement("td");
        ivCell.textContent = getBattlePokemonIvLabel(mon, trainer);
        row.appendChild(ivCell);
    }
  });

  if (isMonExcluded(mon, trainerIndex)) {
      row.classList.add("pokemon-row-excluded");
  }

  row.addEventListener("dblclick", () => {
    if (isMonExcluded(mon, trainerIndex)) {
        return;
    }
    selectSingleSetFromTable(mon, getOpponentSlotIndexForTrainerTable(trainerIndex));
  });

  return row;
}


// ---------------------------------------------------------------------
// Main trainer team rendering
// ---------------------------------------------------------------------

function renderTrainerPanel(trainerIndex) {
    const trainer = getTrainerBattleState(trainerIndex).trainer;
    const panel = dom.trainerPanels[trainerIndex];
    panel.container.hidden = trainerIndex >= getActiveTrainerCount() || !trainer;
    panel.table.replaceChildren();
    panel.exclusions.container.hidden = !trainer;
    if (panel.container.hidden) {
        panel.title.textContent = "";
        panel.info.textContent = "";
        return;
    }
    panel.title.textContent = getName(trainer);
    panel.info.textContent = getTrainerInfoText(trainer);
    const tbody = document.createElement("tbody");
    const level = getSelectedLevel();
    for (const mon of getAvailableBattleMons(trainerIndex)) {
        tbody.appendChild(createPokemonTableRow(mon, trainer, level, trainerIndex));
    }
    if (!trainer.team && !window.frontierTrainerTeams[trainer.poolId]) {
        const cell = tbody.insertRow().insertCell();
        cell.colSpan = 18;
        cell.textContent = translate("ui", "noTeamFound");
        panel.exclusions.container.hidden = true;
    } else {
        refreshBattleExclusionInterface(trainerIndex);
    }
    panel.table.append(createPokemonTableHead(), tbody);
}

function getTrainerInfoText(trainer) {
    if (trainer.infoKey) { return translate("ui", trainer.infoKey); }
    return `${translate("ui", "iv")} : ${getFacilityConfig().fixedIv ?? trainer.ivTier} — ` +
        `${translate("ui", "pool")} : ${trainer.poolId.toUpperCase()}`;
}

function renderBattleResults() {
    closeHelpTooltip();
    // Sync trainer-bound tools before their filters supply the table and details.
    facilityTools[battleState.facility]?.refreshInfo?.();
    const isMulti = battleState.format === "multi";
    const primaryTrainer = getTrainerBattleState(0).trainer;
    dom.resultsContainer.hidden = !Array.from({ length: getActiveTrainerCount() },
        (_, index) => hasBattlePokemonSource(index)).some(Boolean);
    dom.resultsContainer.classList.toggle("is-multi", isMulti);
    dom.resultsContainer.classList.toggle("is-factory", isFactoryMode());
    dom.singleTrainerHeader.hidden = isMulti;
    dom.trainerTitle.textContent = isFactoryMode() ? translate("ui", "facilityFactory") :
        primaryTrainer ? getName(primaryTrainer) : "";
    const hasUndefinedIv = isFactoryMode() && (getAvailableBattleMons().some((mon) => mon.battleIv === null) ||
        getFactoryPlayerTeamCandidateMons().some((mon) => mon.battleIv === null));
    setHelpTooltip(document.getElementById("trainer-title-help"), hasUndefinedIv ? translate("ui", "factoryIvBugNote") : null);
    dom.trainerInfo.textContent = isFactoryMode() ? getFactoryOverviewText() :
        primaryTrainer ? getTrainerInfoText(primaryTrainer) : "";
    dom.trainerPanels.forEach((panel, trainerIndex) => {
        if (!isMulti) { panel.container.open = true; }
        if (isFactoryMode()) { renderFactoryPanel(trainerIndex); }
        else { renderTrainerPanel(trainerIndex); }
    });
    renderFactoryPlayerTeam();
    refreshOpponentBattleInterface();
    refreshSelectedOpponentViews();
    updateTableSelectionHints();
    updateSearchClearButtons();
}

function getFactoryOverviewText() {
    const series = getFacilityChallengeSeries();
    return formatFacilityText("factoryOverview", {
        series, tower: battleState.factory.towerSeries, level: getSelectedLevel()
    });
}

function renderFactoryPanel(index) {
    const panel = dom.trainerPanels[index];
    const source = getBattlePokemonSource(index);
    panel.container.hidden = !source;
    panel.table.replaceChildren();
    panel.exclusions.container.hidden = !source;
    if (!source) { return; }
    panel.title.textContent = translate("ui", "facilityFactory");
    panel.info.textContent = getFactoryOverviewText();
    panel.table.appendChild(createPokemonTableHead(true));
    const mons = source.mons.filter((mon) => !isMonExcludedByFactoryPlayerTeam(mon));
    for (const group of getFactoryBattleGroups(mons)) {
        const tbody = document.createElement("tbody");
        const row = document.createElement("tr");
        row.className = "factory-pool-group-row";
        const cell = document.createElement("th");
        cell.colSpan = 19;
        cell.textContent = `${translate("ui", group.key)} — ${getBattlePokemonIvLabel(group.mons[0])} IV — ${group.mons.length} ${translate("ui", "factoryPossibleSets")}`;
        row.appendChild(cell);
        tbody.appendChild(row);
        for (const mon of group.mons) {
            tbody.appendChild(createPokemonTableRow(mon, null, getSelectedLevel(), index, true));
        }
        panel.table.appendChild(tbody);
    }
    refreshBattleExclusionInterface(index);
}

function selectTrainerAndRender(trainer, trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    if (!trainer || trainerIndex >= getActiveTrainerCount() ||
        isTrainerSelectedInOtherSlot(trainer.id, trainerIndex)) {
        return;
    }
    const trainerState = getTrainerBattleState(trainerIndex);
    const slotDom = getTrainerSlotDom(trainerIndex);
    // Selecting the same trainer again must not discard Pokémon or PP.
    if (trainerState.trainer?.id !== trainer.id) {
        resetTrainerBattleExclusions(trainerIndex);
        getOpponentSlotIndexesForTrainer(trainerIndex).forEach(resetOpponentBattleState);
        clearExcludedPokemonInput(trainerIndex);
        clearExcludedItemInput(trainerIndex);
    }
    trainerState.trainer = trainer;
    trainerState.suggestionMatches = [];
    trainerState.suggestionActiveIndex = -1;
    slotDom.input.value = getName(trainer);
    slotDom.select.value = trainer.id;
    slotDom.suggestions.hidden = true;
    dom.trainerPanels[trainerIndex].container.open = true;
    dom.trainerSlots.forEach((_, slotIndex) => {
        populateTrainerSelect(slotIndex, getTrainerBattleState(slotIndex).trainer?.id ?? "");
    });
    renderBattleResults();
}
