"use strict";

// -----------------------------------------------------------------------------
// Opponent Pokémon selector and Pokémon detail cards
// -----------------------------------------------------------------------------

function getSelectedPokemonSets(trainer, speciesId) {
    const level = getSelectedLevel();

    return getTrainerMonsForLevel(trainer, level)
        .filter((mon) => mon.speciesId === speciesId);
}

function findOpponentPokemonByInputValue(trainer, value) {
    const normalizedValue = normalizeText(value);
    const level = getSelectedLevel();
    const mons = getTrainerMonsForLevel(trainer, level);

    return mons.find((mon) =>
        normalizeText(getPokemonDisplayName(mon)) === normalizedValue ||
        normalizeText(getName(mon, "fr")) === normalizedValue ||
        normalizeText(getName(mon, "en")) === normalizedValue
    );
}

function getPokemonDisplayName(mon) {
    const mainName = getName(mon, currentLang);
    const secondaryName = getName(mon, getOtherLang());

    return mainName === secondaryName ? mainName : `${mainName} (${secondaryName})`;
}

function selectOpponentPokemonAndRender(mon) {
    if (!currentTrainer || !mon) {
        return;
    }

    dom.opponentPokemonInput.value = getName(mon);
    dom.opponentPokemonSelect.value = mon.speciesId;
    dom.opponentPokemonSuggestions.hidden = true;

    renderSelectedPokemonDetails(currentTrainer, mon.speciesId);
}

function populateOpponentPokemonSelect(trainer) {
    const container = dom.opponentSearchContainer;
    const input = dom.opponentPokemonInput;
    const select = dom.opponentPokemonSelect;
    const level = getSelectedLevel();
    const mons = getTrainerMonsForLevel(trainer, level);

    const uniqueSpecies = [];

    for (const mon of mons) {
        if (!uniqueSpecies.some((existing) => existing.speciesId === mon.speciesId)) {
        uniqueSpecies.push(mon);
        }
    }
    populateOpponentPokemonSuggestions(uniqueSpecies, "");

    select.replaceChildren();
    select.appendChild(createPlaceholderOption(translate("ui", "opponentPokemonSelectPlaceholder")));

    for (const mon of uniqueSpecies) {
        const option = document.createElement("option");
        option.value = mon.speciesId;

        const mainName = getName(mon, currentLang);
        const secondaryName = getName(mon, getOtherLang());

        option.textContent =
        mainName === secondaryName ? mainName : `${mainName} (${secondaryName})`;

        select.appendChild(option);
    }

    input.value = "";
    container.hidden = false;
    dom.selectedPokemonDetails.hidden = true;
}

function populateOpponentPokemonSuggestions(uniqueSpecies, search = "") {
    const menu = dom.opponentPokemonSuggestions;
    menu.replaceChildren();

    const normalizedSearch = normalizeText(search);

    if (normalizedSearch.length < 2) {
        menu.hidden = true;
        return;
    }

    const matches = uniqueSpecies
        .filter((mon) =>
        normalizeText(getPokemonDisplayName(mon)).includes(normalizedSearch) ||
        normalizeText(getName(mon, "fr")).includes(normalizedSearch) ||
        normalizeText(getName(mon, "en")).includes(normalizedSearch)
        )
        .slice(0, 12);

    if (matches.length === 0) {
        menu.hidden = true;
        return;
    }

    opponentSuggestionMatches = matches;
    opponentSuggestionActiveIndex = -1;

    matches.forEach((mon, index) => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.textContent = getPokemonDisplayName(mon);
        item.dataset.index = index;

        item.addEventListener("mousedown", (event) => {
            event.preventDefault();
            selectOpponentPokemonAndRender(mon);
        });

        menu.appendChild(item);
    });

    menu.hidden = false;
}

function updateOpponentSuggestionActiveItem() {
    const items = document.querySelectorAll("#opponent-pokemon-suggestions .suggestion-item");

    items.forEach((item, index) => {
        item.classList.toggle("active", index === opponentSuggestionActiveIndex);
    });
}

function handleOpponentSuggestionKeyboard(event) {
    const menu = dom.opponentPokemonSuggestions;

    if (menu.hidden || opponentSuggestionMatches.length === 0) {
        return;
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        opponentSuggestionActiveIndex =
            (opponentSuggestionActiveIndex + 1) % opponentSuggestionMatches.length;
        updateOpponentSuggestionActiveItem();
    }

    if (event.key === "ArrowUp") {
        event.preventDefault();
        opponentSuggestionActiveIndex =
            (opponentSuggestionActiveIndex - 1 + opponentSuggestionMatches.length) % opponentSuggestionMatches.length;
        updateOpponentSuggestionActiveItem();
    }

    if (event.key === "Enter" && opponentSuggestionActiveIndex >= 0) {
        event.preventDefault();
        selectOpponentPokemonAndRender(opponentSuggestionMatches[opponentSuggestionActiveIndex]);
    }

    if (event.key === "Escape") {
        menu.hidden = true;
    }
}

function renderSelectedPokemonDetails(trainer, speciesId) {
    const container = dom.selectedPokemonDetails;
    const sets = getSelectedPokemonSets(trainer, speciesId);

    container.replaceChildren();

    if (sets.length === 0) {
        container.hidden = true;
        return;
    }

    const level = getSelectedLevel();

    for (const mon of sets) {
        const stats = calculateStats(mon, trainer.ivTier, level);
        const card = buildPokemonDetailCard(mon, stats, trainer.ivTier);
        container.appendChild(card);
    }

    container.hidden = false;
}

// ---------------------------------------------------------------------
// Initialization and events
// ---------------------------------------------------------------------

// Handles trainer form submission.
function handleTrainerSubmit(event) {
  event.preventDefault();

  const select = dom.trainerSelect;
  const trainer =
    findTrainerByInputValue(dom.trainerTextInput.value) ??
    getTrainerById(select.value);

  if (!trainer) {
    return;
  }
  currentTrainer = trainer;
  renderTrainerTeam(trainer);
}

function buildPokemonDetailCard(mon, stats, ivTier) {
    const card = document.createElement("article");
    card.className = "pokemon-detail-card";

    const title = document.createElement("h3");
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

    const itemSpriteUrl = getItemSpriteUrl(mon.item);

    info.innerHTML = `
        <p><strong>${translate("columns", "type1").replace(" 1", "s")} :</strong> ${mon.types.map((type) => translateEntity("types", type)).join(" / ")}</p>
        <p><strong>${translate("columns", "ability1").replace(" 1", "s")} :</strong> ${mon.abilities.map((ability) => translateEntity("abilities", ability)).join(" / ")}</p>
        <p><strong>${translate("columns", "nature")} :</strong> ${t("natures", mon.nature)}</p>
        <p class="pokemon-detail-item">
            <strong>${translate("columns", "item")} :</strong>
            <span>${t("items", mon.item)}</span>
            ${itemSpriteUrl ? `<img class="pokemon-detail-item-sprite" src="${itemSpriteUrl}" alt="${t("items", mon.item)}" loading="lazy">` : ""}
        </p>
        <p><strong>${translate("columns", "iv")} :</strong> ${ivTier}</p>
    `;

    const statsBlock = buildStatsBlock(stats);
    const movesBlock = buildMovesBlock(mon.moves);

    content.append(sprite, info, statsBlock);
    card.append(title, content, movesBlock);

    return card;
}

function buildStatsBlock(stats) {
    const statMax = Math.max(stats.hp, stats.atk, stats.def, stats.spa, stats.spd, stats.spe);

    const statsBlock = document.createElement("div");
    statsBlock.className = "pokemon-detail-stats";

    const rows = [
        [translate("statLabels", "hp"), stats.hp],
        [translate("statLabels", "atk"), stats.atk],
        [translate("statLabels", "def"), stats.def],
        [translate("statLabels", "spa"), stats.spa],
        [translate("statLabels", "spd"), stats.spd],
        [translate("statLabels", "spe"), stats.spe]
    ];

    for (const [label, value] of rows) {
        const row = document.createElement("div");
        row.className = "stat-bar-row";

        const percentage = Math.round((value / statMax) * 100);

        row.innerHTML = `
        <span class="stat-label">${label}</span>
        <div class="stat-bar-background">
            <div
                class="stat-bar-fill"
                style="width:${percentage}%; background-color:${getStatBarColor(value)}"
            ></div>
        </div>
        <span class="stat-value">${value}</span>
        `;

        statsBlock.appendChild(row);
    }

    return statsBlock;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function getStatBarColor(statValue) {
    const cappedStat = clamp(statValue, 0, 255);

    const red = clamp(511 - 2 * cappedStat, 0, 255);
    const green = clamp(2 * cappedStat, 0, 255);

    return `rgb(${red}, ${green}, 0)`;
}

function getMoveName(moveId) {
    const move = window.moves?.[moveId];

    return move?.names?.[currentLang]
        ?? move?.names?.en
        ?? window.appTranslations.moves?.[moveId]?.[currentLang]
        ?? window.appTranslations.moves?.[moveId]?.en
        ?? moveId;
}

function getMovePowerPoints(moveId) {
    return window.moves?.[moveId]?.power_points ?? "";
}

function buildMovesBlock(moveIds) {
    const movesBlock = document.createElement("div");
    movesBlock.className = "pokemon-detail-moves";

    const title = document.createElement("p");
    title.className = "moves-title";
    title.textContent = translate("ui", "movesTitle");

    const grid = document.createElement("div");
    grid.className = "moves-grid";

    for (const moveId of moveIds) {
        const move = document.createElement("div");
        move.className = "move-detail";

        const moveType = getMoveType(moveId);
        applyTypeColor(move, moveType);

        move.textContent = `${getMoveName(moveId)} — ${getMovePowerPoints(moveId)} ${translate("ui", "pp")}`;

        grid.appendChild(move);
    }

    movesBlock.append(title, grid);

    return movesBlock;
}