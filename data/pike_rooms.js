"use strict";

// Compact rules from the supplied vanilla Emerald decompilation, not Platinum.
window.pikeRooms = {
    meta: {
        sourceRepository: "https://github.com/pret/pokeemerald",
        sourceCommit: "731ad5bfd6e6f265508d0efcca0ba42f9dcf5881",
        files: ["src/battle_pike.c", "src/battle_tower.c", "include/constants/battle_pike.h",
            "data/scripts/battle_pike.inc", "data/maps/BattleFrontier_BattlePikeThreePathRoom/scripts.inc"]
    },
    roomsPerRound: 14,
    groups: ["people", "whispering", "pokemon", "nostalgia"],
    // IDs and order match PIKE_ROOM_* and sRoomTypeHints.
    events: [
        { id: 0, group: "people", key: "pikeEventSingle" },
        { id: 1, group: "people", key: "pikeEventHealFull", helpKey: "pikeHealFullHelp" },
        { id: 2, group: "whispering", key: "pikeEventNpc" },
        { id: 3, group: "nostalgia", key: "pikeEventStatus", helpKey: "pikeStatusHelp" },
        { id: 4, group: "nostalgia", key: "pikeEventHealPart", helpKey: "pikeHealPartHelp" },
        { id: 5, group: "pokemon", key: "pikeEventWild" },
        { id: 6, group: "pokemon", key: "pikeEventHard", helpKey: "pikeHardHelp" },
        { id: 7, group: "whispering", key: "pikeEventMulti", helpKey: "pikeMultiHelp" }
    ],
    // SetHintedRoom loops only to count=6, fills four entries and leaves two 0s.
    // Healing-disabled hinted rooms therefore omit IDs 6/7 and repeat ID 0.
    fullyHealedHintSlots: [0, 2, 3, 5, 0, 0],
    // One-based trainer numbers used by frontier_trainers.js.
    trainerRanges: {
        simple: [[1, 100], [81, 120], [101, 140], [121, 160],
            [141, 180], [161, 200], [181, 220], [201, 300]],
        hard: [[101, 120], [121, 140], [141, 160], [161, 180],
            [181, 200], [201, 220], [221, 240], [201, 300]]
    },
    // sNumMonsToHealBeforePikeQueen: hidden permutations across the three doors.
    bossHealPermutations: [[2, 1, 0], [2, 0, 1], [1, 2, 0],
        [1, 0, 2], [0, 2, 1], [0, 1, 2]]
};
