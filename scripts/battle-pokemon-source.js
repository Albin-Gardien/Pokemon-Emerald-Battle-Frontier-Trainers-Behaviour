"use strict";

// Sort display copies only: Factory pool ranges still use untouched ROM indices.
function compareBattlePokemonByDex(a, b) {
    return (a.dexNumber ?? Infinity) - (b.dexNumber ?? Infinity) ||
        (a.setNumber ?? 0) - (b.setNumber ?? 0);
}

// Shared source API: searching, exclusions and rendering use the same battle mons.
function getTrainerMons(trainer) {
    const team = window.frontierTrainerTeams[trainer.poolId];
    const mons = trainer.team ?? team?.setIds.map((id) => window.frontierMons[id]).filter(Boolean) ?? [];
    return [...mons].sort(compareBattlePokemonByDex);
}

function getBattlePokemonSource(sourceIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    if (isFactoryMode()) {
        return sourceIndex === 0 ? getFactoryMonSources()?.opponent ?? null : null;
    }
    const trainer = getTrainerBattleState(sourceIndex).trainer;
    if (!trainer) { return null; }
    const mons = getTrainerMonsForLevel(trainer, getSelectedLevel());
    const filter = facilityTools[battleState.facility]?.filterBattleMons;
    return { type: "trainer", trainer, mons: filter ? filter(mons) : mons };
}

function hasBattlePokemonSource(sourceIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    return getBattlePokemonSource(sourceIndex) !== null;
}

function hasBattlePokemonSourceForOpponentSlot(slotIndex) {
    return hasBattlePokemonSource(getTrainerIndexForOpponentSlot(slotIndex));
}

function getAvailableBattleMons(sourceIndex = PRIMARY_TRAINER_SLOT_INDEX) {
    return getBattlePokemonSource(sourceIndex)?.mons ?? [];
}

function getBattlePokemonIv(mon, trainer = getTrainerBattleState(0).trainer) {
    return Object.hasOwn(mon, "battleIv") ? mon.battleIv : getFacilityConfig().fixedIv ?? trainer?.ivTier ?? 0;
}

function getBattlePokemonIvLabel(mon, trainer) {
    const iv = getBattlePokemonIv(mon, trainer);
    if (iv !== null) { return String(iv); }
    return translate("ui", mon.ivKind === "undefined" ? "factoryIvUndefined" : "factoryIvRandom");
}

// A compact ROM-index table replaces thousands of repeated set/IV entries.
let factoryMonSourceCache = null;

function getFactoryPoolSetIds(series = getFacilityChallengeSeries(), level = getSelectedLevel()) {
    const data = window.factoryPools;
    const ranges = data?.ranges?.[level === 50 ? "level50" : "level100"];
    const range = ranges?.[Math.min(series - 1, ranges.length - 1)];
    if (!range) { return []; }
    return data.setIdsByRomIndex.slice(range.start, range.end + 1)
        .filter((id) => window.frontierMons[id]?.speciesId !== "unown" && window.frontierMons[id]);
}

function getFactoryIvProfile(series, lastBattle = false) {
    const table = window.factoryPools?.ivProgression ?? [];
    const index = series - 1;
    // Retail Emerald reads past the table at index 8. Never invent fixed IV 31.
    // Regular/rental reads are documented as random. The other byte is undefined.
    if (index === table.length) {
        return { value: null, kind: lastBattle ? "undefined" : "random" };
    }
    return { value: table[Math.min(index, table.length - 1)]?.[lastBattle ? 1 : 0] ?? null,
        kind: "fixed" };
}

function getFactoryRentalRank() {
    // The game copies its u16 swap counter into a u8 before applying thresholds.
    const count = battleState.factory.swaps % 256;
    return (window.factoryPools?.upgradeThresholds ?? []).filter((threshold) => count >= threshold).length;
}

function canEncounterFactoryBrain() {
    const series = getFacilityChallengeSeries();
    return battleState.format === "singles" && series >= 3 && series % 3 === 0;
}

function usesFactoryBrain() {
    return canEncounterFactoryBrain() && battleState.factory.brain;
}

function getFactoryAiKind(brain = false) {
    const series = getFacilityChallengeSeries();
    return brain || series >= 5 ? "full" : series <= 2 ? "random" : "basic";
}

function createFactoryBattleMon(setId, profile, identity, metadata = {}) {
    const mon = window.frontierMons[setId];
    return { ...mon, id: `${setId}__${identity}__iv_${profile.value ?? profile.kind}`,
        sourceSetId: setId, battleIv: profile.value, ivKind: profile.kind,
        moves: mon.moves.map((move) => move === "return" ? "frustration" : move), ...metadata };
}

function getFactoryMonSources() {
    const data = window.factoryPools;
    if (!data) { return null; }
    const series = getFacilityChallengeSeries();
    const state = battleState.factory;
    const key = [series, state.towerSeries, state.swaps, usesFactoryBrain(), battleState.format, getSelectedLevel()].join("/");
    if (factoryMonSourceCache?.key === key && factoryMonSourceCache.data === data &&
        factoryMonSourceCache.catalogue === window.frontierMons) { return factoryMonSourceCache.value; }

    const ids = getFactoryPoolSetIds(series);
    const firstIv = getFactoryIvProfile(state.towerSeries);
    const lastIv = usesFactoryBrain() ? getFactoryIvProfile(series + 2) : getFactoryIvProfile(state.towerSeries, true);
    const samePhases = !usesFactoryBrain() && firstIv.value === lastIv.value && firstIv.kind === lastIv.kind;
    const mons = ids.flatMap((id) => {
        const first = createFactoryBattleMon(id, firstIv, samePhases ? "all" : "early", {
            factoryAvailability: samePhases ? ["battles1To6", "battle7"] : ["battles1To6"],
            factoryBoss: false, factoryAi: getFactoryAiKind() });
        return samePhases ? [first] : [first, createFactoryBattleMon(id, lastIv, "last", {
            factoryAvailability: ["battle7"], factoryBoss: usesFactoryBrain(), factoryAi: getFactoryAiKind(usesFactoryBrain()) })];
    });
    const candidates = [];
    const appendCandidates = (setIds, profile, origin) => {
        for (const id of setIds) candidates.push(createFactoryBattleMon(id, profile, origin, { factoryOrigin: origin }));
    };
    appendCandidates(ids, getFactoryIvProfile(series), "rental");
    appendCandidates(ids, firstIv, "trade");
    if (getFactoryRentalRank() > 0) {
        appendCandidates(getFactoryPoolSetIds(series + 1), getFactoryIvProfile(series + 1), "upgrade");
    }
    mons.sort(compareBattlePokemonByDex);
    candidates.sort(compareBattlePokemonByDex);
    const value = { opponent: { type: "factory", mons }, candidates,
        candidateById: new Map(candidates.map((mon) => [mon.id, mon])) };
    factoryMonSourceCache = { key, data, catalogue: window.frontierMons, value };
    return value;
}

function getFactoryMonGroupId(mon) {
    return mon.factoryAvailability.length === 2 ? "factoryBattles1To7" :
        mon.factoryAvailability.includes("battle7") ? (mon.factoryBoss ? "factoryBattle7Boss" : "factoryBattle7") : "factoryBattles1To6";
}

function getFactoryBattleGroups(mons) {
    const groups = new Map();
    for (const mon of mons) {
        const key = getFactoryMonGroupId(mon);
        if (!groups.has(key)) { groups.set(key, []); }
        groups.get(key).push(mon);
    }
    const phaseOrder = ["factoryBattles1To7", "factoryBattles1To6", "factoryBattle7", "factoryBattle7Boss"];
    return [...groups].map(([key, entries]) => ({ key, mons: entries }))
        .sort((a, b) => phaseOrder.indexOf(a.key) - phaseOrder.indexOf(b.key));
}

function getFactoryAiDisplayProfile(visibleSets) {
    const fullSets = visibleSets.filter((mon) => mon.factoryAi === "full");
    if (fullSets.length === visibleSets.length) { return { sets: fullSets, messageKey: null }; }
    return { sets: fullSets, messageKey: fullSets.length ? "factoryAiMixed" :
        getFactoryAiKind() === "random" ? "factoryAiRandom" : "factoryAiBasic" };
}
