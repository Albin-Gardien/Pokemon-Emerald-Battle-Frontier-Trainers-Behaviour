"use strict";

// -----------------------------------------------------------------------------
// App constants and cached DOM references
// -----------------------------------------------------------------------------

const spriteBaseUrl = "https://raw.githubusercontent.com/msikma/pokesprite/master";
const pokemonSpriteBaseUrl = `${spriteBaseUrl}/pokemon-gen7x/regular`;
const itemSpriteBaseUrl = `${spriteBaseUrl}/items`;

const forbiddenLevel50Species = new Set(["tyranitar", "dragonite"]);

const frontierSeries = [
    { id: "series_1", label: "Série 1", start: 1, end: 120 },
    { id: "series_2", label: "Série 2", start: 81, end: 140 },
    { id: "series_3", label: "Série 3", start: 101, end: 160 },
    { id: "series_4", label: "Série 4", start: 121, end: 180 },
    { id: "series_5", label: "Série 5", start: 141, end: 200 },
    { id: "series_6", label: "Série 6", start: 161, end: 220 },
    { id: "series_7", label: "Série 7", start: 181, end: 240 },
    { id: "series_8_plus", label: "Série 8+", start: 200, end: 300 }
];

const natureModifiers = {
    hardy: {},
    docile: {},
    serious: {},
    bashful: {},
    quirky: {},

    lonely: { up: "atk", down: "def" },
    brave: { up: "atk", down: "spe" },
    adamant: { up: "atk", down: "spa" },
    naughty: { up: "atk", down: "spd" },

    bold: { up: "def", down: "atk" },
    relaxed: { up: "def", down: "spe" },
    impish: { up: "def", down: "spa" },
    lax: { up: "def", down: "spd" },

    timid: { up: "spe", down: "atk" },
    hasty: { up: "spe", down: "def" },
    jolly: { up: "spe", down: "spa" },
    naive: { up: "spe", down: "spd" },

    modest: { up: "spa", down: "atk" },
    mild: { up: "spa", down: "def" },
    quiet: { up: "spa", down: "spe" },
    rash: { up: "spa", down: "spd" },

    calm: { up: "spd", down: "atk" },
    gentle: { up: "spd", down: "def" },
    sassy: { up: "spd", down: "spe" },
    careful: { up: "spd", down: "spa" }
};

const typeColors = {
    normal: { bg: "#a8a878" },
    fire: { bg: "#f08030" },
    water: { bg: "#6890f0" },
    electric: { bg: "#f8d030" },
    grass: { bg: "#78c850" },
    ice: { bg: "#98d8d8" },
    fighting: { bg: "#c03028" },
    poison: { bg: "#a040a0" },
    ground: { bg: "#e0c068" },
    flying: { bg: "#a890f0" },
    psychic: { bg: "#f85888" },
    bug: { bg: "#a8b820" },
    rock: { bg: "#b8a038" },
    ghost: { bg: "#705898" },
    dragon: { bg: "#7038f8" },
    dark: { bg: "#705848" },
    steel: { bg: "#b8b8d0" }
};

const pokemonSpriteSlugOverrides = {
    mr_mime: "mr-mime",
    nidoran_f: "nidoran-f",
    nidoran_m: "nidoran-m"
};

const itemSpriteMap = {
    aspear_berry: "berry/aspear",
    black_belt: "hold-item/black-belt",
    black_glasses: "hold-item/black-glasses",
    brightpowder: "hold-item/bright-powder",
    charcoal: "hold-item/charcoal",
    cheri_berry: "berry/cheri",
    chesto_berry: "berry/chesto",
    choice_band: "hold-item/choice-band",
    deep_sea_scale: "evo-item/deep-sea-scale",
    focus_band: "hold-item/focus-band",
    hard_stone: "hold-item/hard-stone",
    kings_rock: "hold-item/kings-rock",
    lax_incense: "incense/lax",
    leftovers: "hold-item/leftovers",
    leppa_berry: "berry/leppa",
    liechi_berry: "berry/liechi",
    light_ball: "hold-item/light-ball",
    lum_berry: "berry/lum",
    magnet: "hold-item/magnet",
    mental_herb: "hold-item/mental-herb",
    metal_coat: "hold-item/metal-coat",
    metal_powder: "hold-item/metal-powder",
    miracle_seed: "hold-item/miracle-seed",
    mystic_water: "hold-item/mystic-water",
    nevermeltice: "hold-item/never-melt-ice",
    pecha_berry: "berry/pecha",
    persim_berry: "berry/persim",
    petaya_berry: "berry/petaya",
    poison_barb: "hold-item/poison-barb",
    quick_claw: "hold-item/quick-claw",
    rawst_berry: "berry/rawst",
    salac_berry: "berry/salac",
    scope_lens: "hold-item/scope-lens",
    sharp_beak: "hold-item/sharp-beak",
    shell_bell: "hold-item/shell-bell",
    silk_scarf: "hold-item/silk-scarf",
    silver_powder: "hold-item/silver-powder",
    sitrus_berry: "berry/sitrus",
    soft_sand: "hold-item/soft-sand",
    stick: "hold-item/stick",
    thick_club: "hold-item/thick-club",
    twistedspoon: "hold-item/twisted-spoon",
    white_herb: "hold-item/white-herb"
};

const dom = {
    pageTitle: document.getElementById("page-title"),
    languageToggle: document.getElementById("language-toggle"),

    trainerForm: document.getElementById("trainer-form"),
    trainerLabel: document.getElementById("trainer-label"),
    trainerTextInput: document.getElementById("trainer-text-input"),
    trainerSuggestions: document.getElementById("trainer-suggestions"),
    trainerSelect: document.getElementById("trainer-select"),

    levelLabel: document.getElementById("level-label"),
    levelInput: document.getElementById("level-input"),

    seriesFilterDropdown: document.querySelector(".series-filter-dropdown"),
    seriesFilterButton: document.getElementById("series-filter-button"),
    seriesFilterMenu: document.getElementById("series-filter-menu"),

    resultsContainer: document.getElementById("results-container"),
    trainerTitle: document.getElementById("trainer-title"),
    trainerInfo: document.getElementById("trainer-info"),
    pokemonResults: document.getElementById("pokemon-results"),

    battleExclusionsContainer: document.getElementById("battle-exclusions-container"),

    excludedPokemonLabel: document.getElementById("excluded-pokemon-label"),
    excludedPokemonInput: document.getElementById("excluded-pokemon-input"),
    excludedPokemonTags: document.getElementById("excluded-pokemon-tags"),
    excludedPokemonSuggestions: document.getElementById("excluded-pokemon-suggestions"),

    excludedItemLabel: document.getElementById("excluded-item-label"),
    excludedItemInput: document.getElementById("excluded-item-input"),
    excludedItemTags: document.getElementById("excluded-item-tags"),
    excludedItemSuggestions: document.getElementById("excluded-item-suggestions"),

    opponentSearchContainer: document.getElementById("opponent-search-container"),
    opponentPokemonLabel: document.getElementById("opponent-pokemon-label"),
    opponentPokemonInput: document.getElementById("opponent-pokemon-input"),
    opponentPokemonSuggestions: document.getElementById("opponent-pokemon-suggestions"),
    opponentPokemonSelect: document.getElementById("opponent-pokemon-select"),

    selectedPokemonDetails: document.getElementById("selected-pokemon-details")
};
