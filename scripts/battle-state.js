"use strict";

// -----------------------------------------------------------------------------
// Battle format configuration
// -----------------------------------------------------------------------------

const PRIMARY_TRAINER_SLOT_INDEX = 0;
const PRIMARY_OPPONENT_SLOT_INDEX = 0;

// Facilities declare their controls; the combat/slot logic stays shared.
const FACILITY_MODE_CONFIG = {
    normal: {
        formats: ["singles", "doubles", "multi"],
        seriesControl: "filter",
        showSeenPokemon: true,
        showSeenItems: true
    },
    palace: {
        formats: ["singles", "doubles"],
        seriesControl: "filter",
        showSeenPokemon: true,
        showSeenItems: true,
        formatOverrides: { doubles: { exclusionLimit: 2 } }
    },
    dome: {
        formats: ["singles", "doubles"],
        seriesControl: "number",
        seriesLabelKey: "domeSeriesLabel",
        fixedIv: 3,
        showSeenPokemon: false,
        showSeenItems: false
    },
    pyramid: {
        formats: ["singles", "multi"],
        seriesControl: "number",
        seriesLabelKey: "pyramidSeriesLabel",
        showSeenPokemon: false,
        showSeenItems: false
    },
    pike: {
        formats: ["singles", "multi"],
        seriesControl: "number",
        seriesLabelKey: "pikeSeriesLabel",
        showSeenPokemon: true,
        showSeenItems: true,
        formatOverrides: { multi: { showSeenPokemon: false, showSeenItems: false } }
    },
    factory: {
        formats: ["singles", "doubles"],
        seriesControl: "number",
        seriesLabelKey: "factorySeriesLabel",
        maxSeries: 143,
        usesTrainerSelection: false,
        pokemonSource: "factory",
        allowedLevels: [50, 100],
        showSeenPokemon: true,
        showSeenItems: true,
        formatOverrides: { doubles: { exclusionLimit: 2 } }
    }
};

function getFacilityConfig() {
    const config = FACILITY_MODE_CONFIG[battleState.facility];
    return { ...config, ...config.formatOverrides?.[battleState.format] };
}

const BATTLE_FORMAT_CONFIG = {
    singles: {
        trainerCount: 1,
        opponentCount: 1,
        exclusionLimit: 2
    },
    doubles: {
        trainerCount: 1,
        opponentCount: 2,
        exclusionLimit: 3
    },
    multi: {
        trainerCount: 2,
        opponentCount: 2,
        exclusionLimit: 1
    }
};

// -----------------------------------------------------------------------------
// Battle state creation
// -----------------------------------------------------------------------------

// Creates trainer battle state
function createTrainerBattleState() {
    return {
        trainer: null,

        exclusions: {
            speciesIds: new Set(),
            itemIds: new Set()
        },

        suggestionMatches: [],
        suggestionActiveIndex: -1,
        exclusionSuggestions: {
            pokemon: { matches: [], activeIndex: -1 },
            item: { matches: [], activeIndex: -1 }
        }
    };
}

// Creates opponent battle state
function createOpponentBattleState() {
    return {
        speciesId: null,
        possibleSetIds: new Set(),

        suggestionMatches: [],
        suggestionActiveIndex: -1,

        movePpState: new Map()
    };
}

// -----------------------------------------------------------------------------
// Battle state
// -----------------------------------------------------------------------------

const battleState = {
    facility: "normal",
    format: "singles",

    facilitySeries: { pyramid: 1, factory: 1, pike: 1, dome: 1 },
    factory: { towerSeries: 1, swaps: 0, brain: true },
    pike: {
        room: 2,
        hint: "",
        team: Array.from({ length: 3 }, () => ({ health: "full", status: "none", ppFull: true }))
    },

    activeOpponentSlotIndex: PRIMARY_OPPONENT_SLOT_INDEX,

    trainers: [
        createTrainerBattleState(),
        createTrainerBattleState()
    ],

    opponents: [
        createOpponentBattleState(),
        createOpponentBattleState()
    ]
};

// -----------------------------------------------------------------------------
// State accessors
// -----------------------------------------------------------------------------

// Returns trainer battle state
function getTrainerBattleState(slotIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    return battleState.trainers[slotIndex];
}

// Returns opponent battle state
function getOpponentBattleState(slotIndex = PRIMARY_OPPONENT_SLOT_INDEX) {
    return battleState.opponents[slotIndex];
}

// Returns current trainer
function getCurrentTrainer() {
    return getTrainerBattleState().trainer;
}

// Returns current battle exclusions
function getCurrentBattleExclusions() {
    return getTrainerBattleExclusions();
}

// -----------------------------------------------------------------------------
// Format and slot helpers
// -----------------------------------------------------------------------------

// Returns battle format config
function getBattleFormatConfig() {
    return {
        ...BATTLE_FORMAT_CONFIG[battleState.format],
        ...getFacilityConfig().formatOverrides?.[battleState.format]
    };
}

function isFactoryMode() {
    return getFacilityConfig().pokemonSource === "factory";
}

// Returns active opponent count
function getActiveOpponentCount() {
    return getBattleFormatConfig().opponentCount;
}

// Returns active trainer count
function getActiveTrainerCount() {
    return getBattleFormatConfig().trainerCount;
}

// Returns trainer index for opponent slot
function getTrainerIndexForOpponentSlot(slotIndex) {
    return battleState.format === "multi" ? slotIndex : PRIMARY_TRAINER_SLOT_INDEX;
}

// Returns trainer for opponent slot
function getTrainerForOpponentSlot(slotIndex) {
    return getTrainerBattleState(getTrainerIndexForOpponentSlot(slotIndex)).trainer;
}

// Returns opponent slot indexes for trainer
function getOpponentSlotIndexesForTrainer(trainerIndex) {
    if (battleState.format === "multi") {
        return trainerIndex < getActiveTrainerCount() ? [trainerIndex] : [];
    }

    if (trainerIndex !== PRIMARY_TRAINER_SLOT_INDEX) {
        return [];
    }

    return Array.from({ length: getActiveOpponentCount() }, (_, slotIndex) => slotIndex);
}

// Returns opponent slot index for trainer table
function getOpponentSlotIndexForTrainerTable(trainerIndex) {
    if (battleState.format === "multi") {
        return trainerIndex;
    }

    if (battleState.format === "doubles") {
        return battleState.activeOpponentSlotIndex;
    }

    return PRIMARY_OPPONENT_SLOT_INDEX;
}

// -----------------------------------------------------------------------------
// Trainer exclusion state
// -----------------------------------------------------------------------------

// Returns trainer battle exclusions
function getTrainerBattleExclusions(trainerIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    return getTrainerBattleState(trainerIndex).exclusions;
}

// Resets trainer battle exclusions
function resetTrainerBattleExclusions(trainerIndex) {
    const exclusions = getTrainerBattleExclusions(trainerIndex);

    exclusions.speciesIds.clear();
    exclusions.itemIds.clear();
    const suggestions = getTrainerBattleState(trainerIndex).exclusionSuggestions;
    Object.values(suggestions).forEach((state) => {
        state.matches = [];
        state.activeIndex = -1;
    });
}

// Resets all trainer battle exclusions
function resetAllTrainerBattleExclusions() {
    battleState.trainers.forEach((_, trainerIndex) => resetTrainerBattleExclusions(trainerIndex));
}

// Returns whether doubles AI
function usesDoublesAi() {
    return battleState.format === "doubles" || battleState.format === "multi";
}

// -----------------------------------------------------------------------------
// Opponent state reset
// -----------------------------------------------------------------------------

// Resets opponent battle state
function resetOpponentBattleState(slotIndex) {
    const opponentState = getOpponentBattleState(slotIndex);

    opponentState.speciesId = null;
    opponentState.possibleSetIds.clear();
    opponentState.suggestionMatches = [];
    opponentState.suggestionActiveIndex = -1;
    opponentState.movePpState.clear();
}

// Resets all opponent battle states
function resetAllOpponentBattleStates() {
    battleState.opponents.forEach((_, slotIndex) => resetOpponentBattleState(slotIndex));
    battleState.activeOpponentSlotIndex = PRIMARY_OPPONENT_SLOT_INDEX;
}
