"use strict";

// Retail Emerald mechanics: pret/pokeemerald, pinned commit below.
// Names: PokeAPI move_names / pokemon_species_names; existing project names win.
// This is a supplement to moves.js, not a replacement for the user's data file.
window.palaceData = {
  "sourceCommit": "731ad5bfd6e6f265508d0efcca0ba42f9dcf5881",
  "groups": [
    "attack",
    "defense",
    "support"
  ],
  "natures": {
    "hardy": {
      "initial": [
        61,
        7,
        32
      ],
      "changed": [
        61,
        7,
        32
      ],
      "doubleTarget": "stronger"
    },
    "lonely": {
      "initial": [
        20,
        25,
        55
      ],
      "changed": [
        84,
        8,
        8
      ],
      "doubleTarget": "stronger"
    },
    "brave": {
      "initial": [
        70,
        15,
        15
      ],
      "changed": [
        32,
        60,
        8
      ],
      "doubleTarget": "weaker"
    },
    "adamant": {
      "initial": [
        38,
        31,
        31
      ],
      "changed": [
        70,
        15,
        15
      ],
      "doubleTarget": "stronger"
    },
    "naughty": {
      "initial": [
        20,
        70,
        10
      ],
      "changed": [
        70,
        22,
        8
      ],
      "doubleTarget": "weaker"
    },
    "bold": {
      "initial": [
        30,
        20,
        50
      ],
      "changed": [
        32,
        58,
        10
      ],
      "doubleTarget": "weaker"
    },
    "docile": {
      "initial": [
        56,
        22,
        22
      ],
      "changed": [
        56,
        22,
        22
      ],
      "doubleTarget": "random"
    },
    "relaxed": {
      "initial": [
        25,
        15,
        60
      ],
      "changed": [
        75,
        15,
        10
      ],
      "doubleTarget": "stronger"
    },
    "impish": {
      "initial": [
        69,
        6,
        25
      ],
      "changed": [
        28,
        55,
        17
      ],
      "doubleTarget": "stronger"
    },
    "lax": {
      "initial": [
        35,
        10,
        55
      ],
      "changed": [
        29,
        6,
        65
      ],
      "doubleTarget": "stronger"
    },
    "timid": {
      "initial": [
        62,
        10,
        28
      ],
      "changed": [
        30,
        20,
        50
      ],
      "doubleTarget": "weaker"
    },
    "hasty": {
      "initial": [
        58,
        37,
        5
      ],
      "changed": [
        88,
        6,
        6
      ],
      "doubleTarget": "weaker"
    },
    "serious": {
      "initial": [
        34,
        11,
        55
      ],
      "changed": [
        29,
        11,
        60
      ],
      "doubleTarget": "weaker"
    },
    "jolly": {
      "initial": [
        35,
        5,
        60
      ],
      "changed": [
        35,
        60,
        5
      ],
      "doubleTarget": "stronger"
    },
    "naive": {
      "initial": [
        56,
        22,
        22
      ],
      "changed": [
        56,
        22,
        22
      ],
      "doubleTarget": "random"
    },
    "modest": {
      "initial": [
        35,
        45,
        20
      ],
      "changed": [
        34,
        60,
        6
      ],
      "doubleTarget": "weaker"
    },
    "mild": {
      "initial": [
        44,
        50,
        6
      ],
      "changed": [
        34,
        6,
        60
      ],
      "doubleTarget": "stronger"
    },
    "quiet": {
      "initial": [
        56,
        22,
        22
      ],
      "changed": [
        56,
        22,
        22
      ],
      "doubleTarget": "weaker"
    },
    "bashful": {
      "initial": [
        30,
        58,
        12
      ],
      "changed": [
        30,
        58,
        12
      ],
      "doubleTarget": "weaker"
    },
    "rash": {
      "initial": [
        30,
        13,
        57
      ],
      "changed": [
        27,
        6,
        67
      ],
      "doubleTarget": "stronger"
    },
    "calm": {
      "initial": [
        40,
        50,
        10
      ],
      "changed": [
        25,
        62,
        13
      ],
      "doubleTarget": "stronger"
    },
    "gentle": {
      "initial": [
        18,
        70,
        12
      ],
      "changed": [
        90,
        5,
        5
      ],
      "doubleTarget": "stronger"
    },
    "sassy": {
      "initial": [
        88,
        6,
        6
      ],
      "changed": [
        22,
        20,
        58
      ],
      "doubleTarget": "weaker"
    },
    "careful": {
      "initial": [
        42,
        50,
        8
      ],
      "changed": [
        42,
        5,
        53
      ],
      "doubleTarget": "weaker"
    },
    "quirky": {
      "initial": [
        56,
        22,
        22
      ],
      "changed": [
        56,
        22,
        22
      ],
      "doubleTarget": "stronger"
    }
  },
  "moves": {
    "pound": {
      "number": 1,
      "names": {
        "fr": "Écras’Face",
        "en": "Pound"
      },
      "type": "normal",
      "power_points": 35,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "karate_chop": {
      "number": 2,
      "names": {
        "fr": "Poing Karaté",
        "en": "Karate Chop"
      },
      "type": "fighting",
      "power_points": 25,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "doubleslap": {
      "number": 3,
      "names": {
        "fr": "Torgnoles",
        "en": "Double Slap"
      },
      "type": "normal",
      "power_points": 10,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "comet_punch": {
      "number": 4,
      "names": {
        "fr": "Poing Comète",
        "en": "Comet Punch"
      },
      "type": "normal",
      "power_points": 15,
      "power": 18,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mega_punch": {
      "number": 5,
      "names": {
        "fr": "Ultimapoing",
        "en": "Mega Punch"
      },
      "type": "normal",
      "power_points": 20,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "pay_day": {
      "number": 6,
      "names": {
        "fr": "Jackpot",
        "en": "Pay Day"
      },
      "type": "normal",
      "power_points": 20,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "fire_punch": {
      "number": 7,
      "names": {
        "fr": "Poing Feu",
        "en": "Fire Punch"
      },
      "type": "fire",
      "power_points": 15,
      "power": 75,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "ice_punch": {
      "number": 8,
      "names": {
        "fr": "Poing Glace",
        "en": "Ice Punch"
      },
      "type": "ice",
      "power_points": 15,
      "power": 75,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "thunderpunch": {
      "number": 9,
      "names": {
        "fr": "Poing Éclair",
        "en": "Thunder Punch"
      },
      "type": "electric",
      "power_points": 15,
      "power": 75,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "scratch": {
      "number": 10,
      "names": {
        "fr": "Griffe",
        "en": "Scratch"
      },
      "type": "normal",
      "power_points": 35,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "vicegrip": {
      "number": 11,
      "names": {
        "fr": "Force Poigne",
        "en": "ViceGrip"
      },
      "type": "normal",
      "power_points": 30,
      "power": 55,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "guillotine": {
      "number": 12,
      "names": {
        "fr": "Guillotine",
        "en": "Guillotine"
      },
      "type": "normal",
      "power_points": 5,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "razor_wind": {
      "number": 13,
      "names": {
        "fr": "Coupe-Vent",
        "en": "Razor Wind"
      },
      "type": "normal",
      "power_points": 10,
      "power": 80,
      "target": "both",
      "palaceGroup": "attack"
    },
    "swords_dance": {
      "number": 14,
      "names": {
        "fr": "Danse Lames",
        "en": "Swords Dance"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "cut": {
      "number": 15,
      "names": {
        "fr": "Coupe",
        "en": "Cut"
      },
      "type": "normal",
      "power_points": 30,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "gust": {
      "number": 16,
      "names": {
        "fr": "Tornade",
        "en": "Gust"
      },
      "type": "flying",
      "power_points": 35,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "wing_attack": {
      "number": 17,
      "names": {
        "fr": "Cru-Ailes",
        "en": "Wing Attack"
      },
      "type": "flying",
      "power_points": 35,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "whirlwind": {
      "number": 18,
      "names": {
        "fr": "Cyclone",
        "en": "Whirlwind"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "fly": {
      "number": 19,
      "names": {
        "fr": "Vol",
        "en": "Fly"
      },
      "type": "flying",
      "power_points": 15,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "bind": {
      "number": 20,
      "names": {
        "fr": "Étreinte",
        "en": "Bind"
      },
      "type": "normal",
      "power_points": 20,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "slam": {
      "number": 21,
      "names": {
        "fr": "Souplesse",
        "en": "Slam"
      },
      "type": "normal",
      "power_points": 20,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "vine_whip": {
      "number": 22,
      "names": {
        "fr": "Fouet Lianes",
        "en": "Vine Whip"
      },
      "type": "grass",
      "power_points": 10,
      "power": 35,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "stomp": {
      "number": 23,
      "names": {
        "fr": "Écrasement",
        "en": "Stomp"
      },
      "type": "normal",
      "power_points": 20,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "double_kick": {
      "number": 24,
      "names": {
        "fr": "Double Pied",
        "en": "Double Kick"
      },
      "type": "fighting",
      "power_points": 30,
      "power": 30,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mega_kick": {
      "number": 25,
      "names": {
        "fr": "Ultimawashi",
        "en": "Mega Kick"
      },
      "type": "normal",
      "power_points": 5,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "jump_kick": {
      "number": 26,
      "names": {
        "fr": "Pied Sauté",
        "en": "Jump Kick"
      },
      "type": "fighting",
      "power_points": 25,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "rolling_kick": {
      "number": 27,
      "names": {
        "fr": "Mawashi Geri",
        "en": "Rolling Kick"
      },
      "type": "fighting",
      "power_points": 15,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sand_attack": {
      "number": 28,
      "names": {
        "fr": "Jet de Sable",
        "en": "Sand Attack"
      },
      "type": "ground",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "headbutt": {
      "number": 29,
      "names": {
        "fr": "Coup d’Boule",
        "en": "Headbutt"
      },
      "type": "normal",
      "power_points": 15,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "horn_attack": {
      "number": 30,
      "names": {
        "fr": "Koud’Korne",
        "en": "Horn Attack"
      },
      "type": "normal",
      "power_points": 25,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "fury_attack": {
      "number": 31,
      "names": {
        "fr": "Furie",
        "en": "Fury Attack"
      },
      "type": "normal",
      "power_points": 20,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "horn_drill": {
      "number": 32,
      "names": {
        "fr": "Empal’Korne",
        "en": "Horn Drill"
      },
      "type": "normal",
      "power_points": 5,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "tackle": {
      "number": 33,
      "names": {
        "fr": "Charge",
        "en": "Tackle"
      },
      "type": "normal",
      "power_points": 35,
      "power": 35,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "body_slam": {
      "number": 34,
      "names": {
        "fr": "Plaquage",
        "en": "Body Slam"
      },
      "type": "normal",
      "power_points": 15,
      "power": 85,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "wrap": {
      "number": 35,
      "names": {
        "fr": "Ligotage",
        "en": "Wrap"
      },
      "type": "normal",
      "power_points": 20,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "take_down": {
      "number": 36,
      "names": {
        "fr": "Bélier",
        "en": "Take Down"
      },
      "type": "normal",
      "power_points": 20,
      "power": 90,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "thrash": {
      "number": 37,
      "names": {
        "fr": "Mania",
        "en": "Thrash"
      },
      "type": "normal",
      "power_points": 20,
      "power": 90,
      "target": "random",
      "palaceGroup": "attack"
    },
    "double_edge": {
      "number": 38,
      "names": {
        "fr": "Damoclès",
        "en": "Double-Edge"
      },
      "type": "normal",
      "power_points": 15,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "tail_whip": {
      "number": 39,
      "names": {
        "fr": "Mimi-Queue",
        "en": "Tail Whip"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "both",
      "palaceGroup": "support"
    },
    "poison_sting": {
      "number": 40,
      "names": {
        "fr": "Dard-Venin",
        "en": "Poison Sting"
      },
      "type": "poison",
      "power_points": 35,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "twineedle": {
      "number": 41,
      "names": {
        "fr": "Double Dard",
        "en": "Twineedle"
      },
      "type": "bug",
      "power_points": 20,
      "power": 25,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "pin_missile": {
      "number": 42,
      "names": {
        "fr": "Dard-Nuée",
        "en": "Pin Missile"
      },
      "type": "bug",
      "power_points": 20,
      "power": 14,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "leer": {
      "number": 43,
      "names": {
        "fr": "Groz’Yeux",
        "en": "Leer"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "both",
      "palaceGroup": "support"
    },
    "bite": {
      "number": 44,
      "names": {
        "fr": "Morsure",
        "en": "Bite"
      },
      "type": "dark",
      "power_points": 25,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "growl": {
      "number": 45,
      "names": {
        "fr": "Rugissement",
        "en": "Growl"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "both",
      "palaceGroup": "support"
    },
    "roar": {
      "number": 46,
      "names": {
        "fr": "Hurlement",
        "en": "Roar"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "sing": {
      "number": 47,
      "names": {
        "fr": "Berceuse",
        "en": "Sing"
      },
      "type": "normal",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "supersonic": {
      "number": 48,
      "names": {
        "fr": "Ultrason",
        "en": "Supersonic"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "sonicboom": {
      "number": 49,
      "names": {
        "fr": "Sonic Boom",
        "en": "Sonic Boom"
      },
      "type": "normal",
      "power_points": 20,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "disable": {
      "number": 50,
      "names": {
        "fr": "Entrave",
        "en": "Disable"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "acid": {
      "number": 51,
      "names": {
        "fr": "Acide",
        "en": "Acid"
      },
      "type": "poison",
      "power_points": 30,
      "power": 40,
      "target": "both",
      "palaceGroup": "attack"
    },
    "ember": {
      "number": 52,
      "names": {
        "fr": "Flammèche",
        "en": "Ember"
      },
      "type": "fire",
      "power_points": 25,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "flamethrower": {
      "number": 53,
      "names": {
        "fr": "Lance-Flammes",
        "en": "Flamethrower"
      },
      "type": "fire",
      "power_points": 15,
      "power": 95,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mist": {
      "number": 54,
      "names": {
        "fr": "Brume",
        "en": "Mist"
      },
      "type": "ice",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "water_gun": {
      "number": 55,
      "names": {
        "fr": "Pistolet à O",
        "en": "Water Gun"
      },
      "type": "water",
      "power_points": 25,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "hydro_pump": {
      "number": 56,
      "names": {
        "fr": "Hydrocanon",
        "en": "Hydro Pump"
      },
      "type": "water",
      "power_points": 5,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "surf": {
      "number": 57,
      "names": {
        "fr": "Surf",
        "en": "Surf"
      },
      "type": "water",
      "power_points": 15,
      "power": 95,
      "target": "both",
      "palaceGroup": "attack"
    },
    "ice_beam": {
      "number": 58,
      "names": {
        "fr": "Laser Glace",
        "en": "Ice Beam"
      },
      "type": "ice",
      "power_points": 10,
      "power": 95,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "blizzard": {
      "number": 59,
      "names": {
        "fr": "Blizzard",
        "en": "Blizzard"
      },
      "type": "ice",
      "power_points": 5,
      "power": 120,
      "target": "both",
      "palaceGroup": "attack"
    },
    "psybeam": {
      "number": 60,
      "names": {
        "fr": "Rafale Psy",
        "en": "Psybeam"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "bubblebeam": {
      "number": 61,
      "names": {
        "fr": "Bulles d’O",
        "en": "Bubble Beam"
      },
      "type": "water",
      "power_points": 20,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "aurora_beam": {
      "number": 62,
      "names": {
        "fr": "Onde Boréale",
        "en": "Aurora Beam"
      },
      "type": "ice",
      "power_points": 20,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "hyper_beam": {
      "number": 63,
      "names": {
        "fr": "Ultralaser",
        "en": "Hyper Beam"
      },
      "type": "normal",
      "power_points": 5,
      "power": 150,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "peck": {
      "number": 64,
      "names": {
        "fr": "Picpic",
        "en": "Peck"
      },
      "type": "flying",
      "power_points": 35,
      "power": 35,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "drill_peck": {
      "number": 65,
      "names": {
        "fr": "Bec Vrille",
        "en": "Drill Peck"
      },
      "type": "flying",
      "power_points": 20,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "submission": {
      "number": 66,
      "names": {
        "fr": "Sacrifice",
        "en": "Submission"
      },
      "type": "fighting",
      "power_points": 25,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "low_kick": {
      "number": 67,
      "names": {
        "fr": "Balayage",
        "en": "Low Kick"
      },
      "type": "fighting",
      "power_points": 20,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "counter": {
      "number": 68,
      "names": {
        "fr": "Riposte",
        "en": "Counter"
      },
      "type": "fighting",
      "power_points": 20,
      "power": 1,
      "target": "depends",
      "palaceGroup": "support"
    },
    "seismic_toss": {
      "number": 69,
      "names": {
        "fr": "Frappe Atlas",
        "en": "Seismic Toss"
      },
      "type": "fighting",
      "power_points": 20,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "strength": {
      "number": 70,
      "names": {
        "fr": "Force",
        "en": "Strength"
      },
      "type": "normal",
      "power_points": 15,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "absorb": {
      "number": 71,
      "names": {
        "fr": "Vole-Vie",
        "en": "Absorb"
      },
      "type": "grass",
      "power_points": 20,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mega_drain": {
      "number": 72,
      "names": {
        "fr": "Méga-Sangsue",
        "en": "Mega Drain"
      },
      "type": "grass",
      "power_points": 10,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "leech_seed": {
      "number": 73,
      "names": {
        "fr": "Vampigraine",
        "en": "Leech Seed"
      },
      "type": "grass",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "growth": {
      "number": 74,
      "names": {
        "fr": "Croissance",
        "en": "Growth"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "razor_leaf": {
      "number": 75,
      "names": {
        "fr": "Tranch’Herbe",
        "en": "Razor Leaf"
      },
      "type": "grass",
      "power_points": 25,
      "power": 55,
      "target": "both",
      "palaceGroup": "attack"
    },
    "solarbeam": {
      "number": 76,
      "names": {
        "fr": "Lance-Soleil",
        "en": "Solar Beam"
      },
      "type": "grass",
      "power_points": 10,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "poison_powder": {
      "number": 77,
      "names": {
        "fr": "Poudre Toxik",
        "en": "Poison Powder"
      },
      "type": "poison",
      "power_points": 35,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "stun_spore": {
      "number": 78,
      "names": {
        "fr": "Para-Spore",
        "en": "Stun Spore"
      },
      "type": "grass",
      "power_points": 30,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "sleep_powder": {
      "number": 79,
      "names": {
        "fr": "Poudre Dodo",
        "en": "Sleep Powder"
      },
      "type": "grass",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "petal_dance": {
      "number": 80,
      "names": {
        "fr": "Danse Fleurs",
        "en": "Petal Dance"
      },
      "type": "grass",
      "power_points": 20,
      "power": 70,
      "target": "random",
      "palaceGroup": "attack"
    },
    "string_shot": {
      "number": 81,
      "names": {
        "fr": "Sécrétion",
        "en": "String Shot"
      },
      "type": "bug",
      "power_points": 40,
      "power": 0,
      "target": "both",
      "palaceGroup": "support"
    },
    "dragon_rage": {
      "number": 82,
      "names": {
        "fr": "Draco-Rage",
        "en": "Dragon Rage"
      },
      "type": "dragon",
      "power_points": 10,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "fire_spin": {
      "number": 83,
      "names": {
        "fr": "Danse Flammes",
        "en": "Fire Spin"
      },
      "type": "fire",
      "power_points": 15,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "thunder_shock": {
      "number": 84,
      "names": {
        "fr": "Éclair",
        "en": "Thunder Shock"
      },
      "type": "electric",
      "power_points": 30,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "thunderbolt": {
      "number": 85,
      "names": {
        "fr": "Tonnerre",
        "en": "Thunderbolt"
      },
      "type": "electric",
      "power_points": 15,
      "power": 95,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "thunder_wave": {
      "number": 86,
      "names": {
        "fr": "Cage Éclair",
        "en": "Thunder Wave"
      },
      "type": "electric",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "thunder": {
      "number": 87,
      "names": {
        "fr": "Fatal-Foudre",
        "en": "Thunder"
      },
      "type": "electric",
      "power_points": 10,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "rock_throw": {
      "number": 88,
      "names": {
        "fr": "Jet-Pierres",
        "en": "Rock Throw"
      },
      "type": "rock",
      "power_points": 15,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "earthquake": {
      "number": 89,
      "names": {
        "fr": "Séisme",
        "en": "Earthquake"
      },
      "type": "ground",
      "power_points": 10,
      "power": 100,
      "target": "foes_and_ally",
      "palaceGroup": "attack"
    },
    "fissure": {
      "number": 90,
      "names": {
        "fr": "Abîme",
        "en": "Fissure"
      },
      "type": "ground",
      "power_points": 5,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "dig": {
      "number": 91,
      "names": {
        "fr": "Tunnel",
        "en": "Dig"
      },
      "type": "ground",
      "power_points": 10,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "toxic": {
      "number": 92,
      "names": {
        "fr": "Toxik",
        "en": "Toxic"
      },
      "type": "poison",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "confusion": {
      "number": 93,
      "names": {
        "fr": "Choc Mental",
        "en": "Confusion"
      },
      "type": "psychic",
      "power_points": 25,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "psychic": {
      "number": 94,
      "names": {
        "fr": "Psyko",
        "en": "Psychic"
      },
      "type": "psychic",
      "power_points": 10,
      "power": 90,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "hypnosis": {
      "number": 95,
      "names": {
        "fr": "Hypnose",
        "en": "Hypnosis"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "meditate": {
      "number": 96,
      "names": {
        "fr": "Yoga",
        "en": "Meditate"
      },
      "type": "psychic",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "agility": {
      "number": 97,
      "names": {
        "fr": "Hâte",
        "en": "Agility"
      },
      "type": "psychic",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "quick_attack": {
      "number": 98,
      "names": {
        "fr": "Vive-Attaque",
        "en": "Quick Attack"
      },
      "type": "normal",
      "power_points": 30,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "rage": {
      "number": 99,
      "names": {
        "fr": "Frénésie",
        "en": "Rage"
      },
      "type": "normal",
      "power_points": 20,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "teleport": {
      "number": 100,
      "names": {
        "fr": "Téléport",
        "en": "Teleport"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "night_shade": {
      "number": 101,
      "names": {
        "fr": "Ombre Nocturne",
        "en": "Night Shade"
      },
      "type": "ghost",
      "power_points": 15,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mimic": {
      "number": 102,
      "names": {
        "fr": "Copie",
        "en": "Mimic"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "screech": {
      "number": 103,
      "names": {
        "fr": "Grincement",
        "en": "Screech"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "double_team": {
      "number": 104,
      "names": {
        "fr": "Reflet",
        "en": "Double Team"
      },
      "type": "normal",
      "power_points": 15,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "recover": {
      "number": 105,
      "names": {
        "fr": "Soin",
        "en": "Recover"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "harden": {
      "number": 106,
      "names": {
        "fr": "Armure",
        "en": "Harden"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "minimize": {
      "number": 107,
      "names": {
        "fr": "Lilliput",
        "en": "Minimize"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "smokescreen": {
      "number": 108,
      "names": {
        "fr": "Brouillard",
        "en": "Smokescreen"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "confuse_ray": {
      "number": 109,
      "names": {
        "fr": "Onde Folie",
        "en": "Confuse Ray"
      },
      "type": "ghost",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "withdraw": {
      "number": 110,
      "names": {
        "fr": "Repli",
        "en": "Withdraw"
      },
      "type": "water",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "defense_curl": {
      "number": 111,
      "names": {
        "fr": "Boul’Armure",
        "en": "Defense Curl"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "barrier": {
      "number": 112,
      "names": {
        "fr": "Bouclier",
        "en": "Barrier"
      },
      "type": "psychic",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "light_screen": {
      "number": 113,
      "names": {
        "fr": "Mur Lumière",
        "en": "Light Screen"
      },
      "type": "psychic",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "haze": {
      "number": 114,
      "names": {
        "fr": "Buée Noire",
        "en": "Haze"
      },
      "type": "ice",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "reflect": {
      "number": 115,
      "names": {
        "fr": "Protection",
        "en": "Reflect"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "focus_energy": {
      "number": 116,
      "names": {
        "fr": "Puissance",
        "en": "Focus Energy"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "bide": {
      "number": 117,
      "names": {
        "fr": "Patience",
        "en": "Bide"
      },
      "type": "normal",
      "power_points": 10,
      "power": 1,
      "target": "user",
      "palaceGroup": "defense"
    },
    "metronome": {
      "number": 118,
      "names": {
        "fr": "Métronome",
        "en": "Metronome"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "depends",
      "palaceGroup": "support"
    },
    "mirror_move": {
      "number": 119,
      "names": {
        "fr": "Mimique",
        "en": "Mirror Move"
      },
      "type": "flying",
      "power_points": 20,
      "power": 0,
      "target": "depends",
      "palaceGroup": "support"
    },
    "selfdestruct": {
      "number": 120,
      "names": {
        "fr": "Destruction",
        "en": "Self-Destruct"
      },
      "type": "normal",
      "power_points": 5,
      "power": 200,
      "target": "foes_and_ally",
      "palaceGroup": "attack"
    },
    "egg_bomb": {
      "number": 121,
      "names": {
        "fr": "Bombe Œuf",
        "en": "Egg Bomb"
      },
      "type": "normal",
      "power_points": 10,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "lick": {
      "number": 122,
      "names": {
        "fr": "Léchouille",
        "en": "Lick"
      },
      "type": "ghost",
      "power_points": 30,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "smog": {
      "number": 123,
      "names": {
        "fr": "Purédpois",
        "en": "Smog"
      },
      "type": "poison",
      "power_points": 20,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sludge": {
      "number": 124,
      "names": {
        "fr": "Détritus",
        "en": "Sludge"
      },
      "type": "poison",
      "power_points": 20,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "bone_club": {
      "number": 125,
      "names": {
        "fr": "Massd’Os",
        "en": "Bone Club"
      },
      "type": "ground",
      "power_points": 20,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "fire_blast": {
      "number": 126,
      "names": {
        "fr": "Déflagration",
        "en": "Fire Blast"
      },
      "type": "fire",
      "power_points": 5,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "waterfall": {
      "number": 127,
      "names": {
        "fr": "Cascade",
        "en": "Waterfall"
      },
      "type": "water",
      "power_points": 15,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "clamp": {
      "number": 128,
      "names": {
        "fr": "Claquoir",
        "en": "Clamp"
      },
      "type": "water",
      "power_points": 10,
      "power": 35,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "swift": {
      "number": 129,
      "names": {
        "fr": "Météores",
        "en": "Swift"
      },
      "type": "normal",
      "power_points": 20,
      "power": 60,
      "target": "both",
      "palaceGroup": "attack"
    },
    "skull_bash": {
      "number": 130,
      "names": {
        "fr": "Coud’Krâne",
        "en": "Skull Bash"
      },
      "type": "normal",
      "power_points": 15,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "spike_cannon": {
      "number": 131,
      "names": {
        "fr": "Picanon",
        "en": "Spike Cannon"
      },
      "type": "normal",
      "power_points": 15,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "constrict": {
      "number": 132,
      "names": {
        "fr": "Constriction",
        "en": "Constrict"
      },
      "type": "normal",
      "power_points": 35,
      "power": 10,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "amnesia": {
      "number": 133,
      "names": {
        "fr": "Amnésie",
        "en": "Amnesia"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "kinesis": {
      "number": 134,
      "names": {
        "fr": "Télékinésie",
        "en": "Kinesis"
      },
      "type": "psychic",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "softboiled": {
      "number": 135,
      "names": {
        "fr": "E-Coque",
        "en": "Soft-Boiled"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "hi_jump_kick": {
      "number": 136,
      "names": {
        "fr": "Pied Voltige",
        "en": "High Jump Kick"
      },
      "type": "fighting",
      "power_points": 20,
      "power": 85,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "glare": {
      "number": 137,
      "names": {
        "fr": "Regard Médusant",
        "en": "Glare"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "dream_eater": {
      "number": 138,
      "names": {
        "fr": "Dévorêve",
        "en": "Dream Eater"
      },
      "type": "psychic",
      "power_points": 15,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "poison_gas": {
      "number": 139,
      "names": {
        "fr": "Gaz Toxik",
        "en": "Poison Gas"
      },
      "type": "poison",
      "power_points": 40,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "barrage": {
      "number": 140,
      "names": {
        "fr": "Pilonnage",
        "en": "Barrage"
      },
      "type": "normal",
      "power_points": 20,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "leech_life": {
      "number": 141,
      "names": {
        "fr": "Vampirisme",
        "en": "Leech Life"
      },
      "type": "bug",
      "power_points": 15,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "lovely_kiss": {
      "number": 142,
      "names": {
        "fr": "Grobisou",
        "en": "Lovely Kiss"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "sky_attack": {
      "number": 143,
      "names": {
        "fr": "Piqué",
        "en": "Sky Attack"
      },
      "type": "flying",
      "power_points": 5,
      "power": 140,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "transform": {
      "number": 144,
      "names": {
        "fr": "Morphing",
        "en": "Transform"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "bubble": {
      "number": 145,
      "names": {
        "fr": "Écume",
        "en": "Bubble"
      },
      "type": "water",
      "power_points": 30,
      "power": 20,
      "target": "both",
      "palaceGroup": "attack"
    },
    "dizzy_punch": {
      "number": 146,
      "names": {
        "fr": "Uppercut",
        "en": "Dizzy Punch"
      },
      "type": "normal",
      "power_points": 10,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "spore": {
      "number": 147,
      "names": {
        "fr": "Spore",
        "en": "Spore"
      },
      "type": "grass",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "flash": {
      "number": 148,
      "names": {
        "fr": "Flash",
        "en": "Flash"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "psywave": {
      "number": 149,
      "names": {
        "fr": "Vague Psy",
        "en": "Psywave"
      },
      "type": "psychic",
      "power_points": 15,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "splash": {
      "number": 150,
      "names": {
        "fr": "Trempette",
        "en": "Splash"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "acid_armor": {
      "number": 151,
      "names": {
        "fr": "Acidarmure",
        "en": "Acid Armor"
      },
      "type": "poison",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "crabhammer": {
      "number": 152,
      "names": {
        "fr": "Pince-Masse",
        "en": "Crabhammer"
      },
      "type": "water",
      "power_points": 10,
      "power": 90,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "explosion": {
      "number": 153,
      "names": {
        "fr": "Explosion",
        "en": "Explosion"
      },
      "type": "normal",
      "power_points": 5,
      "power": 250,
      "target": "foes_and_ally",
      "palaceGroup": "attack"
    },
    "fury_swipes": {
      "number": 154,
      "names": {
        "fr": "Combo-Griffe",
        "en": "Fury Swipes"
      },
      "type": "normal",
      "power_points": 15,
      "power": 18,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "bonemerang": {
      "number": 155,
      "names": {
        "fr": "Osmerang",
        "en": "Bonemerang"
      },
      "type": "ground",
      "power_points": 10,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "rest": {
      "number": 156,
      "names": {
        "fr": "Repos",
        "en": "Rest"
      },
      "type": "psychic",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "rock_slide": {
      "number": 157,
      "names": {
        "fr": "Éboulement",
        "en": "Rock Slide"
      },
      "type": "rock",
      "power_points": 10,
      "power": 75,
      "target": "both",
      "palaceGroup": "attack"
    },
    "hyper_fang": {
      "number": 158,
      "names": {
        "fr": "Croc de Mort",
        "en": "Hyper Fang"
      },
      "type": "normal",
      "power_points": 15,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sharpen": {
      "number": 159,
      "names": {
        "fr": "Affûtage",
        "en": "Sharpen"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "conversion": {
      "number": 160,
      "names": {
        "fr": "Conversion",
        "en": "Conversion"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "tri_attack": {
      "number": 161,
      "names": {
        "fr": "Triplattaque",
        "en": "Tri Attack"
      },
      "type": "normal",
      "power_points": 10,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "super_fang": {
      "number": 162,
      "names": {
        "fr": "Croc Fatal",
        "en": "Super Fang"
      },
      "type": "normal",
      "power_points": 10,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "slash": {
      "number": 163,
      "names": {
        "fr": "Tranche",
        "en": "Slash"
      },
      "type": "normal",
      "power_points": 20,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "substitute": {
      "number": 164,
      "names": {
        "fr": "Clonage",
        "en": "Substitute"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "struggle": {
      "number": 165,
      "names": {
        "fr": "Lutte",
        "en": "Struggle"
      },
      "type": "normal",
      "power_points": 1,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sketch": {
      "number": 166,
      "names": {
        "fr": "Gribouille",
        "en": "Sketch"
      },
      "type": "normal",
      "power_points": 1,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "triple_kick": {
      "number": 167,
      "names": {
        "fr": "Triple Pied",
        "en": "Triple Kick"
      },
      "type": "fighting",
      "power_points": 10,
      "power": 10,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "thief": {
      "number": 168,
      "names": {
        "fr": "Larcin",
        "en": "Thief"
      },
      "type": "dark",
      "power_points": 10,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "spider_web": {
      "number": 169,
      "names": {
        "fr": "Toile",
        "en": "Spider Web"
      },
      "type": "bug",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "mind_reader": {
      "number": 170,
      "names": {
        "fr": "Lire-Esprit",
        "en": "Mind Reader"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "nightmare": {
      "number": 171,
      "names": {
        "fr": "Cauchemar",
        "en": "Nightmare"
      },
      "type": "ghost",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "flame_wheel": {
      "number": 172,
      "names": {
        "fr": "Roue de Feu",
        "en": "Flame Wheel"
      },
      "type": "fire",
      "power_points": 25,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "snore": {
      "number": 173,
      "names": {
        "fr": "Ronflement",
        "en": "Snore"
      },
      "type": "normal",
      "power_points": 15,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "curse": {
      "number": 174,
      "names": {
        "fr": "Malédiction",
        "en": "Curse"
      },
      "type": "mystery",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "flail": {
      "number": 175,
      "names": {
        "fr": "Gigotage",
        "en": "Flail"
      },
      "type": "normal",
      "power_points": 15,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "conversion_2": {
      "number": 176,
      "names": {
        "fr": "Conversion 2",
        "en": "Conversion 2"
      },
      "type": "normal",
      "power_points": 30,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "aeroblast": {
      "number": 177,
      "names": {
        "fr": "Aéroblast",
        "en": "Aeroblast"
      },
      "type": "flying",
      "power_points": 5,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "cotton_spore": {
      "number": 178,
      "names": {
        "fr": "Spore Coton",
        "en": "Cotton Spore"
      },
      "type": "grass",
      "power_points": 40,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "reversal": {
      "number": 179,
      "names": {
        "fr": "Contre",
        "en": "Reversal"
      },
      "type": "fighting",
      "power_points": 15,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "spite": {
      "number": 180,
      "names": {
        "fr": "Dépit",
        "en": "Spite"
      },
      "type": "ghost",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "powder_snow": {
      "number": 181,
      "names": {
        "fr": "Poudreuse",
        "en": "Powder Snow"
      },
      "type": "ice",
      "power_points": 25,
      "power": 40,
      "target": "both",
      "palaceGroup": "attack"
    },
    "protect": {
      "number": 182,
      "names": {
        "fr": "Abri",
        "en": "Protect"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "mach_punch": {
      "number": 183,
      "names": {
        "fr": "Mach Punch",
        "en": "Mach Punch"
      },
      "type": "fighting",
      "power_points": 30,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "scary_face": {
      "number": 184,
      "names": {
        "fr": "Grimace",
        "en": "Scary Face"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "faint_attack": {
      "number": 185,
      "names": {
        "fr": "Feinte",
        "en": "Faint Attack"
      },
      "type": "dark",
      "power_points": 20,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sweet_kiss": {
      "number": 186,
      "names": {
        "fr": "Doux Baiser",
        "en": "Sweet Kiss"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "belly_drum": {
      "number": 187,
      "names": {
        "fr": "Cognobidon",
        "en": "Belly Drum"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "sludge_bomb": {
      "number": 188,
      "names": {
        "fr": "Bombe Beurk",
        "en": "Sludge Bomb"
      },
      "type": "poison",
      "power_points": 10,
      "power": 90,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mud_slap": {
      "number": 189,
      "names": {
        "fr": "Coud’Boue",
        "en": "Mud-Slap"
      },
      "type": "ground",
      "power_points": 10,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "octazooka": {
      "number": 190,
      "names": {
        "fr": "Octazooka",
        "en": "Octazooka"
      },
      "type": "water",
      "power_points": 10,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "spikes": {
      "number": 191,
      "names": {
        "fr": "Picots",
        "en": "Spikes"
      },
      "type": "ground",
      "power_points": 20,
      "power": 0,
      "target": "opponents_field",
      "palaceGroup": "support"
    },
    "zap_cannon": {
      "number": 192,
      "names": {
        "fr": "Élecanon",
        "en": "Zap Cannon"
      },
      "type": "electric",
      "power_points": 5,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "foresight": {
      "number": 193,
      "names": {
        "fr": "Clairvoyance",
        "en": "Foresight"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "destiny_bond": {
      "number": 194,
      "names": {
        "fr": "Lien du Destin",
        "en": "Destiny Bond"
      },
      "type": "ghost",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "perish_song": {
      "number": 195,
      "names": {
        "fr": "Requiem",
        "en": "Perish Song"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "icy_wind": {
      "number": 196,
      "names": {
        "fr": "Vent Glace",
        "en": "Icy Wind"
      },
      "type": "ice",
      "power_points": 15,
      "power": 55,
      "target": "both",
      "palaceGroup": "attack"
    },
    "detect": {
      "number": 197,
      "names": {
        "fr": "Détection",
        "en": "Detect"
      },
      "type": "fighting",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "bone_rush": {
      "number": 198,
      "names": {
        "fr": "Charge Os",
        "en": "Bone Rush"
      },
      "type": "ground",
      "power_points": 10,
      "power": 25,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "lock_on": {
      "number": 199,
      "names": {
        "fr": "Verrouillage",
        "en": "Lock-On"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "outrage": {
      "number": 200,
      "names": {
        "fr": "Colère",
        "en": "Outrage"
      },
      "type": "dragon",
      "power_points": 15,
      "power": 90,
      "target": "random",
      "palaceGroup": "attack"
    },
    "sandstorm": {
      "number": 201,
      "names": {
        "fr": "Tempête de Sable",
        "en": "Sandstorm"
      },
      "type": "rock",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "giga_drain": {
      "number": 202,
      "names": {
        "fr": "Giga-Sangsue",
        "en": "Giga Drain"
      },
      "type": "grass",
      "power_points": 5,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "endure": {
      "number": 203,
      "names": {
        "fr": "Ténacité",
        "en": "Endure"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "charm": {
      "number": 204,
      "names": {
        "fr": "Charme",
        "en": "Charm"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "rollout": {
      "number": 205,
      "names": {
        "fr": "Roulade",
        "en": "Rollout"
      },
      "type": "rock",
      "power_points": 20,
      "power": 30,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "false_swipe": {
      "number": 206,
      "names": {
        "fr": "Faux-Chage",
        "en": "False Swipe"
      },
      "type": "normal",
      "power_points": 40,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "swagger": {
      "number": 207,
      "names": {
        "fr": "Vantardise",
        "en": "Swagger"
      },
      "type": "normal",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "milk_drink": {
      "number": 208,
      "names": {
        "fr": "Lait à Boire",
        "en": "Milk Drink"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "spark": {
      "number": 209,
      "names": {
        "fr": "Étincelle",
        "en": "Spark"
      },
      "type": "electric",
      "power_points": 20,
      "power": 65,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "fury_cutter": {
      "number": 210,
      "names": {
        "fr": "Taillade",
        "en": "Fury Cutter"
      },
      "type": "bug",
      "power_points": 20,
      "power": 10,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "steel_wing": {
      "number": 211,
      "names": {
        "fr": "Ailes d’Acier",
        "en": "Steel Wing"
      },
      "type": "steel",
      "power_points": 25,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mean_look": {
      "number": 212,
      "names": {
        "fr": "Regard Noir",
        "en": "Mean Look"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "attract": {
      "number": 213,
      "names": {
        "fr": "Attraction",
        "en": "Attract"
      },
      "type": "normal",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "sleep_talk": {
      "number": 214,
      "names": {
        "fr": "Blabla Dodo",
        "en": "Sleep Talk"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "depends",
      "palaceGroup": "support"
    },
    "heal_bell": {
      "number": 215,
      "names": {
        "fr": "Glas de Soin",
        "en": "Heal Bell"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "return": {
      "number": 216,
      "names": {
        "fr": "Retour",
        "en": "Return"
      },
      "type": "normal",
      "power_points": 20,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "present": {
      "number": 217,
      "names": {
        "fr": "Cadeau",
        "en": "Present"
      },
      "type": "normal",
      "power_points": 15,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "frustration": {
      "number": 218,
      "names": {
        "fr": "Frustration",
        "en": "Frustration"
      },
      "type": "normal",
      "power_points": 20,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "safeguard": {
      "number": 219,
      "names": {
        "fr": "Rune Protect",
        "en": "Safeguard"
      },
      "type": "normal",
      "power_points": 25,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "pain_split": {
      "number": 220,
      "names": {
        "fr": "Balance",
        "en": "Pain Split"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "sacred_fire": {
      "number": 221,
      "names": {
        "fr": "Feu Sacré",
        "en": "Sacred Fire"
      },
      "type": "fire",
      "power_points": 5,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "magnitude": {
      "number": 222,
      "names": {
        "fr": "Ampleur",
        "en": "Magnitude"
      },
      "type": "ground",
      "power_points": 30,
      "power": 1,
      "target": "foes_and_ally",
      "palaceGroup": "attack"
    },
    "dynamicpunch": {
      "number": 223,
      "names": {
        "fr": "Dynamo-Poing",
        "en": "Dynamic Punch"
      },
      "type": "fighting",
      "power_points": 5,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "megahorn": {
      "number": 224,
      "names": {
        "fr": "Mégacorne",
        "en": "Megahorn"
      },
      "type": "bug",
      "power_points": 10,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "dragonbreath": {
      "number": 225,
      "names": {
        "fr": "Draco-Souffle",
        "en": "Dragon Breath"
      },
      "type": "dragon",
      "power_points": 20,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "baton_pass": {
      "number": 226,
      "names": {
        "fr": "Relais",
        "en": "Baton Pass"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "encore": {
      "number": 227,
      "names": {
        "fr": "Encore",
        "en": "Encore"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "pursuit": {
      "number": 228,
      "names": {
        "fr": "Poursuite",
        "en": "Pursuit"
      },
      "type": "dark",
      "power_points": 20,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "rapid_spin": {
      "number": 229,
      "names": {
        "fr": "Tour Rapide",
        "en": "Rapid Spin"
      },
      "type": "normal",
      "power_points": 40,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sweet_scent": {
      "number": 230,
      "names": {
        "fr": "Doux Parfum",
        "en": "Sweet Scent"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "both",
      "palaceGroup": "support"
    },
    "iron_tail": {
      "number": 231,
      "names": {
        "fr": "Queue de Fer",
        "en": "Iron Tail"
      },
      "type": "steel",
      "power_points": 15,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "metal_claw": {
      "number": 232,
      "names": {
        "fr": "Griffe Acier",
        "en": "Metal Claw"
      },
      "type": "steel",
      "power_points": 35,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "vital_throw": {
      "number": 233,
      "names": {
        "fr": "Corps Perdu",
        "en": "Vital Throw"
      },
      "type": "fighting",
      "power_points": 10,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "morning_sun": {
      "number": 234,
      "names": {
        "fr": "Aurore",
        "en": "Morning Sun"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "synthesis": {
      "number": 235,
      "names": {
        "fr": "Synthèse",
        "en": "Synthesis"
      },
      "type": "grass",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "moonlight": {
      "number": 236,
      "names": {
        "fr": "Rayon Lune",
        "en": "Moonlight"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "hidden_power": {
      "number": 237,
      "names": {
        "fr": "Puissance Cachée",
        "en": "Hidden Power"
      },
      "type": "normal",
      "power_points": 15,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "cross_chop": {
      "number": 238,
      "names": {
        "fr": "Coup Croix",
        "en": "Cross Chop"
      },
      "type": "fighting",
      "power_points": 5,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "twister": {
      "number": 239,
      "names": {
        "fr": "Ouragan",
        "en": "Twister"
      },
      "type": "dragon",
      "power_points": 20,
      "power": 40,
      "target": "both",
      "palaceGroup": "attack"
    },
    "rain_dance": {
      "number": 240,
      "names": {
        "fr": "Danse Pluie",
        "en": "Rain Dance"
      },
      "type": "water",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "sunny_day": {
      "number": 241,
      "names": {
        "fr": "Zénith",
        "en": "Sunny Day"
      },
      "type": "fire",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "crunch": {
      "number": 242,
      "names": {
        "fr": "Mâchouille",
        "en": "Crunch"
      },
      "type": "dark",
      "power_points": 15,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mirror_coat": {
      "number": 243,
      "names": {
        "fr": "Voile Miroir",
        "en": "Mirror Coat"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 1,
      "target": "depends",
      "palaceGroup": "support"
    },
    "psych_up": {
      "number": 244,
      "names": {
        "fr": "Boost",
        "en": "Psych Up"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "extremespeed": {
      "number": 245,
      "names": {
        "fr": "Vitesse Extrême",
        "en": "Extreme Speed"
      },
      "type": "normal",
      "power_points": 5,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "ancientpower": {
      "number": 246,
      "names": {
        "fr": "Pouvoir Antique",
        "en": "Ancient Power"
      },
      "type": "rock",
      "power_points": 5,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "shadow_ball": {
      "number": 247,
      "names": {
        "fr": "Ball’Ombre",
        "en": "Shadow Ball"
      },
      "type": "ghost",
      "power_points": 15,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "future_sight": {
      "number": 248,
      "names": {
        "fr": "Prescience",
        "en": "Future Sight"
      },
      "type": "psychic",
      "power_points": 15,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "rock_smash": {
      "number": 249,
      "names": {
        "fr": "Éclate-Roc",
        "en": "Rock Smash"
      },
      "type": "fighting",
      "power_points": 15,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "whirlpool": {
      "number": 250,
      "names": {
        "fr": "Siphon",
        "en": "Whirlpool"
      },
      "type": "water",
      "power_points": 15,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "beat_up": {
      "number": 251,
      "names": {
        "fr": "Baston",
        "en": "Beat Up"
      },
      "type": "dark",
      "power_points": 10,
      "power": 10,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "fake_out": {
      "number": 252,
      "names": {
        "fr": "Bluff",
        "en": "Fake Out"
      },
      "type": "normal",
      "power_points": 10,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "uproar": {
      "number": 253,
      "names": {
        "fr": "Brouhaha",
        "en": "Uproar"
      },
      "type": "normal",
      "power_points": 10,
      "power": 50,
      "target": "random",
      "palaceGroup": "attack"
    },
    "stockpile": {
      "number": 254,
      "names": {
        "fr": "Stockage",
        "en": "Stockpile"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "spit_up": {
      "number": 255,
      "names": {
        "fr": "Relâche",
        "en": "Spit Up"
      },
      "type": "normal",
      "power_points": 10,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "swallow": {
      "number": 256,
      "names": {
        "fr": "Avale",
        "en": "Swallow"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "heat_wave": {
      "number": 257,
      "names": {
        "fr": "Canicule",
        "en": "Heat Wave"
      },
      "type": "fire",
      "power_points": 10,
      "power": 100,
      "target": "both",
      "palaceGroup": "attack"
    },
    "hail": {
      "number": 258,
      "names": {
        "fr": "Grêle",
        "en": "Hail"
      },
      "type": "ice",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "torment": {
      "number": 259,
      "names": {
        "fr": "Tourmente",
        "en": "Torment"
      },
      "type": "dark",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "flatter": {
      "number": 260,
      "names": {
        "fr": "Flatterie",
        "en": "Flatter"
      },
      "type": "dark",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "will_o_wisp": {
      "number": 261,
      "names": {
        "fr": "Feu Follet",
        "en": "Will-O-Wisp"
      },
      "type": "fire",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "memento": {
      "number": 262,
      "names": {
        "fr": "Souvenir",
        "en": "Memento"
      },
      "type": "dark",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "facade": {
      "number": 263,
      "names": {
        "fr": "Façade",
        "en": "Facade"
      },
      "type": "normal",
      "power_points": 20,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "focus_punch": {
      "number": 264,
      "names": {
        "fr": "Mitra-Poing",
        "en": "Focus Punch"
      },
      "type": "fighting",
      "power_points": 20,
      "power": 150,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "smellingsalt": {
      "number": 265,
      "names": {
        "fr": "Stimulant",
        "en": "Smelling Salts"
      },
      "type": "normal",
      "power_points": 10,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "follow_me": {
      "number": 266,
      "names": {
        "fr": "Par Ici",
        "en": "Follow Me"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "nature_power": {
      "number": 267,
      "names": {
        "fr": "Force Nature",
        "en": "Nature Power"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "depends",
      "palaceGroup": "support"
    },
    "charge": {
      "number": 268,
      "names": {
        "fr": "Chargeur",
        "en": "Charge"
      },
      "type": "electric",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "taunt": {
      "number": 269,
      "names": {
        "fr": "Provoc",
        "en": "Taunt"
      },
      "type": "dark",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "helping_hand": {
      "number": 270,
      "names": {
        "fr": "Coup d’Main",
        "en": "Helping Hand"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "trick": {
      "number": 271,
      "names": {
        "fr": "Tour de Magie",
        "en": "Trick"
      },
      "type": "psychic",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "role_play": {
      "number": 272,
      "names": {
        "fr": "Imitation",
        "en": "Role Play"
      },
      "type": "psychic",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "wish": {
      "number": 273,
      "names": {
        "fr": "Vœu",
        "en": "Wish"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "assist": {
      "number": 274,
      "names": {
        "fr": "Assistance",
        "en": "Assist"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "depends",
      "palaceGroup": "support"
    },
    "ingrain": {
      "number": 275,
      "names": {
        "fr": "Racines",
        "en": "Ingrain"
      },
      "type": "grass",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "superpower": {
      "number": 276,
      "names": {
        "fr": "Surpuissance",
        "en": "Superpower"
      },
      "type": "fighting",
      "power_points": 5,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "magic_coat": {
      "number": 277,
      "names": {
        "fr": "Reflet Magik",
        "en": "Magic Coat"
      },
      "type": "psychic",
      "power_points": 15,
      "power": 0,
      "target": "depends",
      "palaceGroup": "support"
    },
    "recycle": {
      "number": 278,
      "names": {
        "fr": "Recyclage",
        "en": "Recycle"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "revenge": {
      "number": 279,
      "names": {
        "fr": "Vendetta",
        "en": "Revenge"
      },
      "type": "fighting",
      "power_points": 10,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "brick_break": {
      "number": 280,
      "names": {
        "fr": "Casse-Brique",
        "en": "Brick Break"
      },
      "type": "fighting",
      "power_points": 15,
      "power": 75,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "yawn": {
      "number": 281,
      "names": {
        "fr": "Bâillement",
        "en": "Yawn"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "knock_off": {
      "number": 282,
      "names": {
        "fr": "Sabotage",
        "en": "Knock Off"
      },
      "type": "dark",
      "power_points": 20,
      "power": 20,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "endeavor": {
      "number": 283,
      "names": {
        "fr": "Effort",
        "en": "Endeavor"
      },
      "type": "normal",
      "power_points": 5,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "eruption": {
      "number": 284,
      "names": {
        "fr": "Éruption",
        "en": "Eruption"
      },
      "type": "fire",
      "power_points": 5,
      "power": 150,
      "target": "both",
      "palaceGroup": "attack"
    },
    "skill_swap": {
      "number": 285,
      "names": {
        "fr": "Échange",
        "en": "Skill Swap"
      },
      "type": "psychic",
      "power_points": 10,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "imprison": {
      "number": 286,
      "names": {
        "fr": "Possessif",
        "en": "Imprison"
      },
      "type": "psychic",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "refresh": {
      "number": 287,
      "names": {
        "fr": "Régénération",
        "en": "Refresh"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "grudge": {
      "number": 288,
      "names": {
        "fr": "Rancune",
        "en": "Grudge"
      },
      "type": "ghost",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "snatch": {
      "number": 289,
      "names": {
        "fr": "Saisie",
        "en": "Snatch"
      },
      "type": "dark",
      "power_points": 10,
      "power": 0,
      "target": "depends",
      "palaceGroup": "support"
    },
    "secret_power": {
      "number": 290,
      "names": {
        "fr": "Force Cachée",
        "en": "Secret Power"
      },
      "type": "normal",
      "power_points": 20,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "dive": {
      "number": 291,
      "names": {
        "fr": "Plongée",
        "en": "Dive"
      },
      "type": "water",
      "power_points": 10,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "arm_thrust": {
      "number": 292,
      "names": {
        "fr": "Cogne",
        "en": "Arm Thrust"
      },
      "type": "fighting",
      "power_points": 20,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "camouflage": {
      "number": 293,
      "names": {
        "fr": "Camouflage",
        "en": "Camouflage"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "tail_glow": {
      "number": 294,
      "names": {
        "fr": "Lumi-Queue",
        "en": "Tail Glow"
      },
      "type": "bug",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "luster_purge": {
      "number": 295,
      "names": {
        "fr": "Lumi-Éclat",
        "en": "Luster Purge"
      },
      "type": "psychic",
      "power_points": 5,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mist_ball": {
      "number": 296,
      "names": {
        "fr": "Ball’Brume",
        "en": "Mist Ball"
      },
      "type": "psychic",
      "power_points": 5,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "featherdance": {
      "number": 297,
      "names": {
        "fr": "Danse Plumes",
        "en": "Feather Dance"
      },
      "type": "flying",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "teeter_dance": {
      "number": 298,
      "names": {
        "fr": "Danse Folle",
        "en": "Teeter Dance"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "foes_and_ally",
      "palaceGroup": "support"
    },
    "blaze_kick": {
      "number": 299,
      "names": {
        "fr": "Pied Brûleur",
        "en": "Blaze Kick"
      },
      "type": "fire",
      "power_points": 10,
      "power": 85,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mud_sport": {
      "number": 300,
      "names": {
        "fr": "Lance-Boue",
        "en": "Mud Sport"
      },
      "type": "ground",
      "power_points": 15,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "ice_ball": {
      "number": 301,
      "names": {
        "fr": "Ball’Glace",
        "en": "Ice Ball"
      },
      "type": "ice",
      "power_points": 20,
      "power": 30,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "needle_arm": {
      "number": 302,
      "names": {
        "fr": "Poing Dard",
        "en": "Needle Arm"
      },
      "type": "grass",
      "power_points": 15,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "slack_off": {
      "number": 303,
      "names": {
        "fr": "Paresse",
        "en": "Slack Off"
      },
      "type": "normal",
      "power_points": 10,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "hyper_voice": {
      "number": 304,
      "names": {
        "fr": "Mégaphone",
        "en": "Hyper Voice"
      },
      "type": "normal",
      "power_points": 10,
      "power": 90,
      "target": "both",
      "palaceGroup": "attack"
    },
    "poison_fang": {
      "number": 305,
      "names": {
        "fr": "Crochet Venin",
        "en": "Poison Fang"
      },
      "type": "poison",
      "power_points": 15,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "crush_claw": {
      "number": 306,
      "names": {
        "fr": "Éclate Griffe",
        "en": "Crush Claw"
      },
      "type": "normal",
      "power_points": 10,
      "power": 75,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "blast_burn": {
      "number": 307,
      "names": {
        "fr": "Rafale Feu",
        "en": "Blast Burn"
      },
      "type": "fire",
      "power_points": 5,
      "power": 150,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "hydro_cannon": {
      "number": 308,
      "names": {
        "fr": "Hydroblast",
        "en": "Hydro Cannon"
      },
      "type": "water",
      "power_points": 5,
      "power": 150,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "meteor_mash": {
      "number": 309,
      "names": {
        "fr": "Poing Météore",
        "en": "Meteor Mash"
      },
      "type": "steel",
      "power_points": 10,
      "power": 100,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "astonish": {
      "number": 310,
      "names": {
        "fr": "Étonnement",
        "en": "Astonish"
      },
      "type": "ghost",
      "power_points": 15,
      "power": 30,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "weather_ball": {
      "number": 311,
      "names": {
        "fr": "Ball’Météo",
        "en": "Weather Ball"
      },
      "type": "normal",
      "power_points": 10,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "aromatherapy": {
      "number": 312,
      "names": {
        "fr": "Aromathérapie",
        "en": "Aromatherapy"
      },
      "type": "grass",
      "power_points": 5,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "fake_tears": {
      "number": 313,
      "names": {
        "fr": "Croco Larme",
        "en": "Fake Tears"
      },
      "type": "dark",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "air_cutter": {
      "number": 314,
      "names": {
        "fr": "Tranch’Air",
        "en": "Air Cutter"
      },
      "type": "flying",
      "power_points": 25,
      "power": 55,
      "target": "both",
      "palaceGroup": "attack"
    },
    "overheat": {
      "number": 315,
      "names": {
        "fr": "Surchauffe",
        "en": "Overheat"
      },
      "type": "fire",
      "power_points": 5,
      "power": 140,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "odor_sleuth": {
      "number": 316,
      "names": {
        "fr": "Flair",
        "en": "Odor Sleuth"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "rock_tomb": {
      "number": 317,
      "names": {
        "fr": "Tomberoche",
        "en": "Rock Tomb"
      },
      "type": "rock",
      "power_points": 10,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "silver_wind": {
      "number": 318,
      "names": {
        "fr": "Vent Argenté",
        "en": "Silver Wind"
      },
      "type": "bug",
      "power_points": 5,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "metal_sound": {
      "number": 319,
      "names": {
        "fr": "Strido-Son",
        "en": "Metal Sound"
      },
      "type": "steel",
      "power_points": 40,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "grasswhistle": {
      "number": 320,
      "names": {
        "fr": "Siffl’Herbe",
        "en": "Grass Whistle"
      },
      "type": "grass",
      "power_points": 15,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "tickle": {
      "number": 321,
      "names": {
        "fr": "Chatouille",
        "en": "Tickle"
      },
      "type": "normal",
      "power_points": 20,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "cosmic_power": {
      "number": 322,
      "names": {
        "fr": "Force Cosmique",
        "en": "Cosmic Power"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "water_spout": {
      "number": 323,
      "names": {
        "fr": "Giclédo",
        "en": "Water Spout"
      },
      "type": "water",
      "power_points": 5,
      "power": 150,
      "target": "both",
      "palaceGroup": "attack"
    },
    "signal_beam": {
      "number": 324,
      "names": {
        "fr": "Rayon Signal",
        "en": "Signal Beam"
      },
      "type": "bug",
      "power_points": 15,
      "power": 75,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "shadow_punch": {
      "number": 325,
      "names": {
        "fr": "Poing Ombre",
        "en": "Shadow Punch"
      },
      "type": "ghost",
      "power_points": 20,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "extrasensory": {
      "number": 326,
      "names": {
        "fr": "Extrasenseur",
        "en": "Extrasensory"
      },
      "type": "psychic",
      "power_points": 30,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sky_uppercut": {
      "number": 327,
      "names": {
        "fr": "Stratopercut",
        "en": "Sky Uppercut"
      },
      "type": "fighting",
      "power_points": 15,
      "power": 85,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sand_tomb": {
      "number": 328,
      "names": {
        "fr": "Tourbi-Sable",
        "en": "Sand Tomb"
      },
      "type": "ground",
      "power_points": 15,
      "power": 15,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "sheer_cold": {
      "number": 329,
      "names": {
        "fr": "Glaciation",
        "en": "Sheer Cold"
      },
      "type": "ice",
      "power_points": 5,
      "power": 1,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "muddy_water": {
      "number": 330,
      "names": {
        "fr": "Ocroupi",
        "en": "Muddy Water"
      },
      "type": "water",
      "power_points": 10,
      "power": 95,
      "target": "both",
      "palaceGroup": "attack"
    },
    "bullet_seed": {
      "number": 331,
      "names": {
        "fr": "Balle Graine",
        "en": "Bullet Seed"
      },
      "type": "grass",
      "power_points": 30,
      "power": 10,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "aerial_ace": {
      "number": 332,
      "names": {
        "fr": "Aéropique",
        "en": "Aerial Ace"
      },
      "type": "flying",
      "power_points": 20,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "icicle_spear": {
      "number": 333,
      "names": {
        "fr": "Stalactite",
        "en": "Icicle Spear"
      },
      "type": "ice",
      "power_points": 30,
      "power": 10,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "iron_defense": {
      "number": 334,
      "names": {
        "fr": "Mur de Fer",
        "en": "Iron Defense"
      },
      "type": "steel",
      "power_points": 15,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "block": {
      "number": 335,
      "names": {
        "fr": "Barrage",
        "en": "Block"
      },
      "type": "normal",
      "power_points": 5,
      "power": 0,
      "target": "selected",
      "palaceGroup": "support"
    },
    "howl": {
      "number": 336,
      "names": {
        "fr": "Grondement",
        "en": "Howl"
      },
      "type": "normal",
      "power_points": 40,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "dragon_claw": {
      "number": 337,
      "names": {
        "fr": "Draco-Griffe",
        "en": "Dragon Claw"
      },
      "type": "dragon",
      "power_points": 15,
      "power": 80,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "frenzy_plant": {
      "number": 338,
      "names": {
        "fr": "Végé-Attaque",
        "en": "Frenzy Plant"
      },
      "type": "grass",
      "power_points": 5,
      "power": 150,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "bulk_up": {
      "number": 339,
      "names": {
        "fr": "Gonflette",
        "en": "Bulk Up"
      },
      "type": "fighting",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "bounce": {
      "number": 340,
      "names": {
        "fr": "Rebond",
        "en": "Bounce"
      },
      "type": "flying",
      "power_points": 5,
      "power": 85,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "mud_shot": {
      "number": 341,
      "names": {
        "fr": "Tir de Boue",
        "en": "Mud Shot"
      },
      "type": "ground",
      "power_points": 15,
      "power": 55,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "poison_tail": {
      "number": 342,
      "names": {
        "fr": "Queue-Poison",
        "en": "Poison Tail"
      },
      "type": "poison",
      "power_points": 25,
      "power": 50,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "covet": {
      "number": 343,
      "names": {
        "fr": "Implore",
        "en": "Covet"
      },
      "type": "normal",
      "power_points": 40,
      "power": 40,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "volt_tackle": {
      "number": 344,
      "names": {
        "fr": "Électacle",
        "en": "Volt Tackle"
      },
      "type": "electric",
      "power_points": 15,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "magical_leaf": {
      "number": 345,
      "names": {
        "fr": "Feuille Magik",
        "en": "Magical Leaf"
      },
      "type": "grass",
      "power_points": 20,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "water_sport": {
      "number": 346,
      "names": {
        "fr": "Tourniquet",
        "en": "Water Sport"
      },
      "type": "water",
      "power_points": 15,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "calm_mind": {
      "number": 347,
      "names": {
        "fr": "Plénitude",
        "en": "Calm Mind"
      },
      "type": "psychic",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "leaf_blade": {
      "number": 348,
      "names": {
        "fr": "Lame Feuille",
        "en": "Leaf Blade"
      },
      "type": "grass",
      "power_points": 15,
      "power": 70,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "dragon_dance": {
      "number": 349,
      "names": {
        "fr": "Danse Draco",
        "en": "Dragon Dance"
      },
      "type": "dragon",
      "power_points": 20,
      "power": 0,
      "target": "user",
      "palaceGroup": "defense"
    },
    "rock_blast": {
      "number": 350,
      "names": {
        "fr": "Boule Roc",
        "en": "Rock Blast"
      },
      "type": "rock",
      "power_points": 10,
      "power": 25,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "shock_wave": {
      "number": 351,
      "names": {
        "fr": "Onde de Choc",
        "en": "Shock Wave"
      },
      "type": "electric",
      "power_points": 20,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "water_pulse": {
      "number": 352,
      "names": {
        "fr": "Vibraqua",
        "en": "Water Pulse"
      },
      "type": "water",
      "power_points": 20,
      "power": 60,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "doom_desire": {
      "number": 353,
      "names": {
        "fr": "Vœu Destructeur",
        "en": "Doom Desire"
      },
      "type": "steel",
      "power_points": 5,
      "power": 120,
      "target": "selected",
      "palaceGroup": "attack"
    },
    "psycho_boost": {
      "number": 354,
      "names": {
        "fr": "Psycho-Boost",
        "en": "Psycho Boost"
      },
      "type": "psychic",
      "power_points": 5,
      "power": 140,
      "target": "selected",
      "palaceGroup": "attack"
    }
  },
  "species": {
    "bulbasaur": {
      "speciesId": "bulbasaur",
      "dexNumber": 1,
      "names": {
        "fr": "Bulbizarre",
        "en": "Bulbasaur"
      }
    },
    "ivysaur": {
      "speciesId": "ivysaur",
      "dexNumber": 2,
      "names": {
        "fr": "Herbizarre",
        "en": "Ivysaur"
      }
    },
    "venusaur": {
      "speciesId": "venusaur",
      "dexNumber": 3,
      "names": {
        "fr": "Florizarre",
        "en": "Venusaur"
      }
    },
    "charmander": {
      "speciesId": "charmander",
      "dexNumber": 4,
      "names": {
        "fr": "Salamèche",
        "en": "Charmander"
      }
    },
    "charmeleon": {
      "speciesId": "charmeleon",
      "dexNumber": 5,
      "names": {
        "fr": "Reptincel",
        "en": "Charmeleon"
      }
    },
    "charizard": {
      "speciesId": "charizard",
      "dexNumber": 6,
      "names": {
        "fr": "Dracaufeu",
        "en": "Charizard"
      }
    },
    "squirtle": {
      "speciesId": "squirtle",
      "dexNumber": 7,
      "names": {
        "fr": "Carapuce",
        "en": "Squirtle"
      }
    },
    "wartortle": {
      "speciesId": "wartortle",
      "dexNumber": 8,
      "names": {
        "fr": "Carabaffe",
        "en": "Wartortle"
      }
    },
    "blastoise": {
      "speciesId": "blastoise",
      "dexNumber": 9,
      "names": {
        "fr": "Tortank",
        "en": "Blastoise"
      }
    },
    "caterpie": {
      "speciesId": "caterpie",
      "dexNumber": 10,
      "names": {
        "fr": "Chenipan",
        "en": "Caterpie"
      }
    },
    "metapod": {
      "speciesId": "metapod",
      "dexNumber": 11,
      "names": {
        "fr": "Chrysacier",
        "en": "Metapod"
      }
    },
    "butterfree": {
      "speciesId": "butterfree",
      "dexNumber": 12,
      "names": {
        "fr": "Papilusion",
        "en": "Butterfree"
      }
    },
    "weedle": {
      "speciesId": "weedle",
      "dexNumber": 13,
      "names": {
        "fr": "Aspicot",
        "en": "Weedle"
      }
    },
    "kakuna": {
      "speciesId": "kakuna",
      "dexNumber": 14,
      "names": {
        "fr": "Coconfort",
        "en": "Kakuna"
      }
    },
    "beedrill": {
      "speciesId": "beedrill",
      "dexNumber": 15,
      "names": {
        "fr": "Dardargnan",
        "en": "Beedrill"
      }
    },
    "pidgey": {
      "speciesId": "pidgey",
      "dexNumber": 16,
      "names": {
        "fr": "Roucool",
        "en": "Pidgey"
      }
    },
    "pidgeotto": {
      "speciesId": "pidgeotto",
      "dexNumber": 17,
      "names": {
        "fr": "Roucoups",
        "en": "Pidgeotto"
      }
    },
    "pidgeot": {
      "speciesId": "pidgeot",
      "dexNumber": 18,
      "names": {
        "fr": "Roucarnage",
        "en": "Pidgeot"
      }
    },
    "rattata": {
      "speciesId": "rattata",
      "dexNumber": 19,
      "names": {
        "fr": "Rattata",
        "en": "Rattata"
      }
    },
    "raticate": {
      "speciesId": "raticate",
      "dexNumber": 20,
      "names": {
        "fr": "Rattatac",
        "en": "Raticate"
      }
    },
    "spearow": {
      "speciesId": "spearow",
      "dexNumber": 21,
      "names": {
        "fr": "Piafabec",
        "en": "Spearow"
      }
    },
    "fearow": {
      "speciesId": "fearow",
      "dexNumber": 22,
      "names": {
        "fr": "Rapasdepic",
        "en": "Fearow"
      }
    },
    "ekans": {
      "speciesId": "ekans",
      "dexNumber": 23,
      "names": {
        "fr": "Abo",
        "en": "Ekans"
      }
    },
    "arbok": {
      "speciesId": "arbok",
      "dexNumber": 24,
      "names": {
        "fr": "Arbok",
        "en": "Arbok"
      }
    },
    "pikachu": {
      "speciesId": "pikachu",
      "dexNumber": 25,
      "names": {
        "fr": "Pikachu",
        "en": "Pikachu"
      }
    },
    "raichu": {
      "speciesId": "raichu",
      "dexNumber": 26,
      "names": {
        "fr": "Raichu",
        "en": "Raichu"
      }
    },
    "sandshrew": {
      "speciesId": "sandshrew",
      "dexNumber": 27,
      "names": {
        "fr": "Sabelette",
        "en": "Sandshrew"
      }
    },
    "sandslash": {
      "speciesId": "sandslash",
      "dexNumber": 28,
      "names": {
        "fr": "Sablaireau",
        "en": "Sandslash"
      }
    },
    "nidoran_f": {
      "speciesId": "nidoran_f",
      "dexNumber": 29,
      "names": {
        "fr": "Nidoran♀",
        "en": "Nidoran♀"
      }
    },
    "nidorina": {
      "speciesId": "nidorina",
      "dexNumber": 30,
      "names": {
        "fr": "Nidorina",
        "en": "Nidorina"
      }
    },
    "nidoqueen": {
      "speciesId": "nidoqueen",
      "dexNumber": 31,
      "names": {
        "fr": "Nidoqueen",
        "en": "Nidoqueen"
      }
    },
    "nidoran_m": {
      "speciesId": "nidoran_m",
      "dexNumber": 32,
      "names": {
        "fr": "Nidoran♂",
        "en": "Nidoran♂"
      }
    },
    "nidorino": {
      "speciesId": "nidorino",
      "dexNumber": 33,
      "names": {
        "fr": "Nidorino",
        "en": "Nidorino"
      }
    },
    "nidoking": {
      "speciesId": "nidoking",
      "dexNumber": 34,
      "names": {
        "fr": "Nidoking",
        "en": "Nidoking"
      }
    },
    "clefairy": {
      "speciesId": "clefairy",
      "dexNumber": 35,
      "names": {
        "fr": "Mélofée",
        "en": "Clefairy"
      }
    },
    "clefable": {
      "speciesId": "clefable",
      "dexNumber": 36,
      "names": {
        "fr": "Mélodelfe",
        "en": "Clefable"
      }
    },
    "vulpix": {
      "speciesId": "vulpix",
      "dexNumber": 37,
      "names": {
        "fr": "Goupix",
        "en": "Vulpix"
      }
    },
    "ninetales": {
      "speciesId": "ninetales",
      "dexNumber": 38,
      "names": {
        "fr": "Feunard",
        "en": "Ninetales"
      }
    },
    "jigglypuff": {
      "speciesId": "jigglypuff",
      "dexNumber": 39,
      "names": {
        "fr": "Rondoudou",
        "en": "Jigglypuff"
      }
    },
    "wigglytuff": {
      "speciesId": "wigglytuff",
      "dexNumber": 40,
      "names": {
        "fr": "Grodoudou",
        "en": "Wigglytuff"
      }
    },
    "zubat": {
      "speciesId": "zubat",
      "dexNumber": 41,
      "names": {
        "fr": "Nosferapti",
        "en": "Zubat"
      }
    },
    "golbat": {
      "speciesId": "golbat",
      "dexNumber": 42,
      "names": {
        "fr": "Nosferalto",
        "en": "Golbat"
      }
    },
    "oddish": {
      "speciesId": "oddish",
      "dexNumber": 43,
      "names": {
        "fr": "Mystherbe",
        "en": "Oddish"
      }
    },
    "gloom": {
      "speciesId": "gloom",
      "dexNumber": 44,
      "names": {
        "fr": "Ortide",
        "en": "Gloom"
      }
    },
    "vileplume": {
      "speciesId": "vileplume",
      "dexNumber": 45,
      "names": {
        "fr": "Rafflesia",
        "en": "Vileplume"
      }
    },
    "paras": {
      "speciesId": "paras",
      "dexNumber": 46,
      "names": {
        "fr": "Paras",
        "en": "Paras"
      }
    },
    "parasect": {
      "speciesId": "parasect",
      "dexNumber": 47,
      "names": {
        "fr": "Parasect",
        "en": "Parasect"
      }
    },
    "venonat": {
      "speciesId": "venonat",
      "dexNumber": 48,
      "names": {
        "fr": "Mimitoss",
        "en": "Venonat"
      }
    },
    "venomoth": {
      "speciesId": "venomoth",
      "dexNumber": 49,
      "names": {
        "fr": "Aéromite",
        "en": "Venomoth"
      }
    },
    "diglett": {
      "speciesId": "diglett",
      "dexNumber": 50,
      "names": {
        "fr": "Taupiqueur",
        "en": "Diglett"
      }
    },
    "dugtrio": {
      "speciesId": "dugtrio",
      "dexNumber": 51,
      "names": {
        "fr": "Triopikeur",
        "en": "Dugtrio"
      }
    },
    "meowth": {
      "speciesId": "meowth",
      "dexNumber": 52,
      "names": {
        "fr": "Miaouss",
        "en": "Meowth"
      }
    },
    "persian": {
      "speciesId": "persian",
      "dexNumber": 53,
      "names": {
        "fr": "Persian",
        "en": "Persian"
      }
    },
    "psyduck": {
      "speciesId": "psyduck",
      "dexNumber": 54,
      "names": {
        "fr": "Psykokwak",
        "en": "Psyduck"
      }
    },
    "golduck": {
      "speciesId": "golduck",
      "dexNumber": 55,
      "names": {
        "fr": "Akwakwak",
        "en": "Golduck"
      }
    },
    "mankey": {
      "speciesId": "mankey",
      "dexNumber": 56,
      "names": {
        "fr": "Férosinge",
        "en": "Mankey"
      }
    },
    "primeape": {
      "speciesId": "primeape",
      "dexNumber": 57,
      "names": {
        "fr": "Colossinge",
        "en": "Primeape"
      }
    },
    "growlithe": {
      "speciesId": "growlithe",
      "dexNumber": 58,
      "names": {
        "fr": "Caninos",
        "en": "Growlithe"
      }
    },
    "arcanine": {
      "speciesId": "arcanine",
      "dexNumber": 59,
      "names": {
        "fr": "Arcanin",
        "en": "Arcanine"
      }
    },
    "poliwag": {
      "speciesId": "poliwag",
      "dexNumber": 60,
      "names": {
        "fr": "Ptitard",
        "en": "Poliwag"
      }
    },
    "poliwhirl": {
      "speciesId": "poliwhirl",
      "dexNumber": 61,
      "names": {
        "fr": "Têtarte",
        "en": "Poliwhirl"
      }
    },
    "poliwrath": {
      "speciesId": "poliwrath",
      "dexNumber": 62,
      "names": {
        "fr": "Tartard",
        "en": "Poliwrath"
      }
    },
    "abra": {
      "speciesId": "abra",
      "dexNumber": 63,
      "names": {
        "fr": "Abra",
        "en": "Abra"
      }
    },
    "kadabra": {
      "speciesId": "kadabra",
      "dexNumber": 64,
      "names": {
        "fr": "Kadabra",
        "en": "Kadabra"
      }
    },
    "alakazam": {
      "speciesId": "alakazam",
      "dexNumber": 65,
      "names": {
        "fr": "Alakazam",
        "en": "Alakazam"
      }
    },
    "machop": {
      "speciesId": "machop",
      "dexNumber": 66,
      "names": {
        "fr": "Machoc",
        "en": "Machop"
      }
    },
    "machoke": {
      "speciesId": "machoke",
      "dexNumber": 67,
      "names": {
        "fr": "Machopeur",
        "en": "Machoke"
      }
    },
    "machamp": {
      "speciesId": "machamp",
      "dexNumber": 68,
      "names": {
        "fr": "Mackogneur",
        "en": "Machamp"
      }
    },
    "bellsprout": {
      "speciesId": "bellsprout",
      "dexNumber": 69,
      "names": {
        "fr": "Chétiflor",
        "en": "Bellsprout"
      }
    },
    "weepinbell": {
      "speciesId": "weepinbell",
      "dexNumber": 70,
      "names": {
        "fr": "Boustiflor",
        "en": "Weepinbell"
      }
    },
    "victreebel": {
      "speciesId": "victreebel",
      "dexNumber": 71,
      "names": {
        "fr": "Empiflor",
        "en": "Victreebel"
      }
    },
    "tentacool": {
      "speciesId": "tentacool",
      "dexNumber": 72,
      "names": {
        "fr": "Tentacool",
        "en": "Tentacool"
      }
    },
    "tentacruel": {
      "speciesId": "tentacruel",
      "dexNumber": 73,
      "names": {
        "fr": "Tentacruel",
        "en": "Tentacruel"
      }
    },
    "geodude": {
      "speciesId": "geodude",
      "dexNumber": 74,
      "names": {
        "fr": "Racaillou",
        "en": "Geodude"
      }
    },
    "graveler": {
      "speciesId": "graveler",
      "dexNumber": 75,
      "names": {
        "fr": "Gravalanch",
        "en": "Graveler"
      }
    },
    "golem": {
      "speciesId": "golem",
      "dexNumber": 76,
      "names": {
        "fr": "Grolem",
        "en": "Golem"
      }
    },
    "ponyta": {
      "speciesId": "ponyta",
      "dexNumber": 77,
      "names": {
        "fr": "Ponyta",
        "en": "Ponyta"
      }
    },
    "rapidash": {
      "speciesId": "rapidash",
      "dexNumber": 78,
      "names": {
        "fr": "Galopa",
        "en": "Rapidash"
      }
    },
    "slowpoke": {
      "speciesId": "slowpoke",
      "dexNumber": 79,
      "names": {
        "fr": "Ramoloss",
        "en": "Slowpoke"
      }
    },
    "slowbro": {
      "speciesId": "slowbro",
      "dexNumber": 80,
      "names": {
        "fr": "Flagadoss",
        "en": "Slowbro"
      }
    },
    "magnemite": {
      "speciesId": "magnemite",
      "dexNumber": 81,
      "names": {
        "fr": "Magnéti",
        "en": "Magnemite"
      }
    },
    "magneton": {
      "speciesId": "magneton",
      "dexNumber": 82,
      "names": {
        "fr": "Magnéton",
        "en": "Magneton"
      }
    },
    "farfetchd": {
      "speciesId": "farfetchd",
      "dexNumber": 83,
      "names": {
        "fr": "Canarticho",
        "en": "Farfetch’d"
      }
    },
    "doduo": {
      "speciesId": "doduo",
      "dexNumber": 84,
      "names": {
        "fr": "Doduo",
        "en": "Doduo"
      }
    },
    "dodrio": {
      "speciesId": "dodrio",
      "dexNumber": 85,
      "names": {
        "fr": "Dodrio",
        "en": "Dodrio"
      }
    },
    "seel": {
      "speciesId": "seel",
      "dexNumber": 86,
      "names": {
        "fr": "Otaria",
        "en": "Seel"
      }
    },
    "dewgong": {
      "speciesId": "dewgong",
      "dexNumber": 87,
      "names": {
        "fr": "Lamantine",
        "en": "Dewgong"
      }
    },
    "grimer": {
      "speciesId": "grimer",
      "dexNumber": 88,
      "names": {
        "fr": "Tadmorv",
        "en": "Grimer"
      }
    },
    "muk": {
      "speciesId": "muk",
      "dexNumber": 89,
      "names": {
        "fr": "Grotadmorv",
        "en": "Muk"
      }
    },
    "shellder": {
      "speciesId": "shellder",
      "dexNumber": 90,
      "names": {
        "fr": "Kokiyas",
        "en": "Shellder"
      }
    },
    "cloyster": {
      "speciesId": "cloyster",
      "dexNumber": 91,
      "names": {
        "fr": "Crustabri",
        "en": "Cloyster"
      }
    },
    "gastly": {
      "speciesId": "gastly",
      "dexNumber": 92,
      "names": {
        "fr": "Fantominus",
        "en": "Gastly"
      }
    },
    "haunter": {
      "speciesId": "haunter",
      "dexNumber": 93,
      "names": {
        "fr": "Spectrum",
        "en": "Haunter"
      }
    },
    "gengar": {
      "speciesId": "gengar",
      "dexNumber": 94,
      "names": {
        "fr": "Ectoplasma",
        "en": "Gengar"
      }
    },
    "onix": {
      "speciesId": "onix",
      "dexNumber": 95,
      "names": {
        "fr": "Onix",
        "en": "Onix"
      }
    },
    "drowzee": {
      "speciesId": "drowzee",
      "dexNumber": 96,
      "names": {
        "fr": "Soporifik",
        "en": "Drowzee"
      }
    },
    "hypno": {
      "speciesId": "hypno",
      "dexNumber": 97,
      "names": {
        "fr": "Hypnomade",
        "en": "Hypno"
      }
    },
    "krabby": {
      "speciesId": "krabby",
      "dexNumber": 98,
      "names": {
        "fr": "Krabby",
        "en": "Krabby"
      }
    },
    "kingler": {
      "speciesId": "kingler",
      "dexNumber": 99,
      "names": {
        "fr": "Krabboss",
        "en": "Kingler"
      }
    },
    "voltorb": {
      "speciesId": "voltorb",
      "dexNumber": 100,
      "names": {
        "fr": "Voltorbe",
        "en": "Voltorb"
      }
    },
    "electrode": {
      "speciesId": "electrode",
      "dexNumber": 101,
      "names": {
        "fr": "Électrode",
        "en": "Electrode"
      }
    },
    "exeggcute": {
      "speciesId": "exeggcute",
      "dexNumber": 102,
      "names": {
        "fr": "Noeunoeuf",
        "en": "Exeggcute"
      }
    },
    "exeggutor": {
      "speciesId": "exeggutor",
      "dexNumber": 103,
      "names": {
        "fr": "Noadkoko",
        "en": "Exeggutor"
      }
    },
    "cubone": {
      "speciesId": "cubone",
      "dexNumber": 104,
      "names": {
        "fr": "Osselait",
        "en": "Cubone"
      }
    },
    "marowak": {
      "speciesId": "marowak",
      "dexNumber": 105,
      "names": {
        "fr": "Ossatueur",
        "en": "Marowak"
      }
    },
    "hitmonlee": {
      "speciesId": "hitmonlee",
      "dexNumber": 106,
      "names": {
        "fr": "Kicklee",
        "en": "Hitmonlee"
      }
    },
    "hitmonchan": {
      "speciesId": "hitmonchan",
      "dexNumber": 107,
      "names": {
        "fr": "Tygnon",
        "en": "Hitmonchan"
      }
    },
    "lickitung": {
      "speciesId": "lickitung",
      "dexNumber": 108,
      "names": {
        "fr": "Excelangue",
        "en": "Lickitung"
      }
    },
    "koffing": {
      "speciesId": "koffing",
      "dexNumber": 109,
      "names": {
        "fr": "Smogo",
        "en": "Koffing"
      }
    },
    "weezing": {
      "speciesId": "weezing",
      "dexNumber": 110,
      "names": {
        "fr": "Smogogo",
        "en": "Weezing"
      }
    },
    "rhyhorn": {
      "speciesId": "rhyhorn",
      "dexNumber": 111,
      "names": {
        "fr": "Rhinocorne",
        "en": "Rhyhorn"
      }
    },
    "rhydon": {
      "speciesId": "rhydon",
      "dexNumber": 112,
      "names": {
        "fr": "Rhinoféros",
        "en": "Rhydon"
      }
    },
    "chansey": {
      "speciesId": "chansey",
      "dexNumber": 113,
      "names": {
        "fr": "Leveinard",
        "en": "Chansey"
      }
    },
    "tangela": {
      "speciesId": "tangela",
      "dexNumber": 114,
      "names": {
        "fr": "Saquedeneu",
        "en": "Tangela"
      }
    },
    "kangaskhan": {
      "speciesId": "kangaskhan",
      "dexNumber": 115,
      "names": {
        "fr": "Kangourex",
        "en": "Kangaskhan"
      }
    },
    "horsea": {
      "speciesId": "horsea",
      "dexNumber": 116,
      "names": {
        "fr": "Hypotrempe",
        "en": "Horsea"
      }
    },
    "seadra": {
      "speciesId": "seadra",
      "dexNumber": 117,
      "names": {
        "fr": "Hypocéan",
        "en": "Seadra"
      }
    },
    "goldeen": {
      "speciesId": "goldeen",
      "dexNumber": 118,
      "names": {
        "fr": "Poissirène",
        "en": "Goldeen"
      }
    },
    "seaking": {
      "speciesId": "seaking",
      "dexNumber": 119,
      "names": {
        "fr": "Poissoroy",
        "en": "Seaking"
      }
    },
    "staryu": {
      "speciesId": "staryu",
      "dexNumber": 120,
      "names": {
        "fr": "Stari",
        "en": "Staryu"
      }
    },
    "starmie": {
      "speciesId": "starmie",
      "dexNumber": 121,
      "names": {
        "fr": "Staross",
        "en": "Starmie"
      }
    },
    "mr_mime": {
      "speciesId": "mr_mime",
      "dexNumber": 122,
      "names": {
        "fr": "M. Mime",
        "en": "Mr. Mime"
      }
    },
    "scyther": {
      "speciesId": "scyther",
      "dexNumber": 123,
      "names": {
        "fr": "Insécateur",
        "en": "Scyther"
      }
    },
    "jynx": {
      "speciesId": "jynx",
      "dexNumber": 124,
      "names": {
        "fr": "Lippoutou",
        "en": "Jynx"
      }
    },
    "electabuzz": {
      "speciesId": "electabuzz",
      "dexNumber": 125,
      "names": {
        "fr": "Élektek",
        "en": "Electabuzz"
      }
    },
    "magmar": {
      "speciesId": "magmar",
      "dexNumber": 126,
      "names": {
        "fr": "Magmar",
        "en": "Magmar"
      }
    },
    "pinsir": {
      "speciesId": "pinsir",
      "dexNumber": 127,
      "names": {
        "fr": "Scarabrute",
        "en": "Pinsir"
      }
    },
    "tauros": {
      "speciesId": "tauros",
      "dexNumber": 128,
      "names": {
        "fr": "Tauros",
        "en": "Tauros"
      }
    },
    "magikarp": {
      "speciesId": "magikarp",
      "dexNumber": 129,
      "names": {
        "fr": "Magicarpe",
        "en": "Magikarp"
      }
    },
    "gyarados": {
      "speciesId": "gyarados",
      "dexNumber": 130,
      "names": {
        "fr": "Léviator",
        "en": "Gyarados"
      }
    },
    "lapras": {
      "speciesId": "lapras",
      "dexNumber": 131,
      "names": {
        "fr": "Lokhlass",
        "en": "Lapras"
      }
    },
    "ditto": {
      "speciesId": "ditto",
      "dexNumber": 132,
      "names": {
        "fr": "Métamorph",
        "en": "Ditto"
      }
    },
    "eevee": {
      "speciesId": "eevee",
      "dexNumber": 133,
      "names": {
        "fr": "Évoli",
        "en": "Eevee"
      }
    },
    "vaporeon": {
      "speciesId": "vaporeon",
      "dexNumber": 134,
      "names": {
        "fr": "Aquali",
        "en": "Vaporeon"
      }
    },
    "jolteon": {
      "speciesId": "jolteon",
      "dexNumber": 135,
      "names": {
        "fr": "Voltali",
        "en": "Jolteon"
      }
    },
    "flareon": {
      "speciesId": "flareon",
      "dexNumber": 136,
      "names": {
        "fr": "Pyroli",
        "en": "Flareon"
      }
    },
    "porygon": {
      "speciesId": "porygon",
      "dexNumber": 137,
      "names": {
        "fr": "Porygon",
        "en": "Porygon"
      }
    },
    "omanyte": {
      "speciesId": "omanyte",
      "dexNumber": 138,
      "names": {
        "fr": "Amonita",
        "en": "Omanyte"
      }
    },
    "omastar": {
      "speciesId": "omastar",
      "dexNumber": 139,
      "names": {
        "fr": "Amonistar",
        "en": "Omastar"
      }
    },
    "kabuto": {
      "speciesId": "kabuto",
      "dexNumber": 140,
      "names": {
        "fr": "Kabuto",
        "en": "Kabuto"
      }
    },
    "kabutops": {
      "speciesId": "kabutops",
      "dexNumber": 141,
      "names": {
        "fr": "Kabutops",
        "en": "Kabutops"
      }
    },
    "aerodactyl": {
      "speciesId": "aerodactyl",
      "dexNumber": 142,
      "names": {
        "fr": "Ptéra",
        "en": "Aerodactyl"
      }
    },
    "snorlax": {
      "speciesId": "snorlax",
      "dexNumber": 143,
      "names": {
        "fr": "Ronflex",
        "en": "Snorlax"
      }
    },
    "articuno": {
      "speciesId": "articuno",
      "dexNumber": 144,
      "names": {
        "fr": "Artikodin",
        "en": "Articuno"
      }
    },
    "zapdos": {
      "speciesId": "zapdos",
      "dexNumber": 145,
      "names": {
        "fr": "Électhor",
        "en": "Zapdos"
      }
    },
    "moltres": {
      "speciesId": "moltres",
      "dexNumber": 146,
      "names": {
        "fr": "Sulfura",
        "en": "Moltres"
      }
    },
    "dratini": {
      "speciesId": "dratini",
      "dexNumber": 147,
      "names": {
        "fr": "Minidraco",
        "en": "Dratini"
      }
    },
    "dragonair": {
      "speciesId": "dragonair",
      "dexNumber": 148,
      "names": {
        "fr": "Draco",
        "en": "Dragonair"
      }
    },
    "dragonite": {
      "speciesId": "dragonite",
      "dexNumber": 149,
      "names": {
        "fr": "Dracolosse",
        "en": "Dragonite"
      }
    },
    "mewtwo": {
      "speciesId": "mewtwo",
      "dexNumber": 150,
      "names": {
        "fr": "Mewtwo",
        "en": "Mewtwo"
      }
    },
    "mew": {
      "speciesId": "mew",
      "dexNumber": 151,
      "names": {
        "fr": "Mew",
        "en": "Mew"
      }
    },
    "chikorita": {
      "speciesId": "chikorita",
      "dexNumber": 152,
      "names": {
        "fr": "Germignon",
        "en": "Chikorita"
      }
    },
    "bayleef": {
      "speciesId": "bayleef",
      "dexNumber": 153,
      "names": {
        "fr": "Macronium",
        "en": "Bayleef"
      }
    },
    "meganium": {
      "speciesId": "meganium",
      "dexNumber": 154,
      "names": {
        "fr": "Méganium",
        "en": "Meganium"
      }
    },
    "cyndaquil": {
      "speciesId": "cyndaquil",
      "dexNumber": 155,
      "names": {
        "fr": "Héricendre",
        "en": "Cyndaquil"
      }
    },
    "quilava": {
      "speciesId": "quilava",
      "dexNumber": 156,
      "names": {
        "fr": "Feurisson",
        "en": "Quilava"
      }
    },
    "typhlosion": {
      "speciesId": "typhlosion",
      "dexNumber": 157,
      "names": {
        "fr": "Typhlosion",
        "en": "Typhlosion"
      }
    },
    "totodile": {
      "speciesId": "totodile",
      "dexNumber": 158,
      "names": {
        "fr": "Kaiminus",
        "en": "Totodile"
      }
    },
    "croconaw": {
      "speciesId": "croconaw",
      "dexNumber": 159,
      "names": {
        "fr": "Crocrodil",
        "en": "Croconaw"
      }
    },
    "feraligatr": {
      "speciesId": "feraligatr",
      "dexNumber": 160,
      "names": {
        "fr": "Aligatueur",
        "en": "Feraligatr"
      }
    },
    "sentret": {
      "speciesId": "sentret",
      "dexNumber": 161,
      "names": {
        "fr": "Fouinette",
        "en": "Sentret"
      }
    },
    "furret": {
      "speciesId": "furret",
      "dexNumber": 162,
      "names": {
        "fr": "Fouinar",
        "en": "Furret"
      }
    },
    "hoothoot": {
      "speciesId": "hoothoot",
      "dexNumber": 163,
      "names": {
        "fr": "Hoothoot",
        "en": "Hoothoot"
      }
    },
    "noctowl": {
      "speciesId": "noctowl",
      "dexNumber": 164,
      "names": {
        "fr": "Noarfang",
        "en": "Noctowl"
      }
    },
    "ledyba": {
      "speciesId": "ledyba",
      "dexNumber": 165,
      "names": {
        "fr": "Coxy",
        "en": "Ledyba"
      }
    },
    "ledian": {
      "speciesId": "ledian",
      "dexNumber": 166,
      "names": {
        "fr": "Coxyclaque",
        "en": "Ledian"
      }
    },
    "spinarak": {
      "speciesId": "spinarak",
      "dexNumber": 167,
      "names": {
        "fr": "Mimigal",
        "en": "Spinarak"
      }
    },
    "ariados": {
      "speciesId": "ariados",
      "dexNumber": 168,
      "names": {
        "fr": "Migalos",
        "en": "Ariados"
      }
    },
    "crobat": {
      "speciesId": "crobat",
      "dexNumber": 169,
      "names": {
        "fr": "Nostenfer",
        "en": "Crobat"
      }
    },
    "chinchou": {
      "speciesId": "chinchou",
      "dexNumber": 170,
      "names": {
        "fr": "Loupio",
        "en": "Chinchou"
      }
    },
    "lanturn": {
      "speciesId": "lanturn",
      "dexNumber": 171,
      "names": {
        "fr": "Lanturn",
        "en": "Lanturn"
      }
    },
    "pichu": {
      "speciesId": "pichu",
      "dexNumber": 172,
      "names": {
        "fr": "Pichu",
        "en": "Pichu"
      }
    },
    "cleffa": {
      "speciesId": "cleffa",
      "dexNumber": 173,
      "names": {
        "fr": "Mélo",
        "en": "Cleffa"
      }
    },
    "igglybuff": {
      "speciesId": "igglybuff",
      "dexNumber": 174,
      "names": {
        "fr": "Toudoudou",
        "en": "Igglybuff"
      }
    },
    "togepi": {
      "speciesId": "togepi",
      "dexNumber": 175,
      "names": {
        "fr": "Togepi",
        "en": "Togepi"
      }
    },
    "togetic": {
      "speciesId": "togetic",
      "dexNumber": 176,
      "names": {
        "fr": "Togetic",
        "en": "Togetic"
      }
    },
    "natu": {
      "speciesId": "natu",
      "dexNumber": 177,
      "names": {
        "fr": "Natu",
        "en": "Natu"
      }
    },
    "xatu": {
      "speciesId": "xatu",
      "dexNumber": 178,
      "names": {
        "fr": "Xatu",
        "en": "Xatu"
      }
    },
    "mareep": {
      "speciesId": "mareep",
      "dexNumber": 179,
      "names": {
        "fr": "Wattouat",
        "en": "Mareep"
      }
    },
    "flaaffy": {
      "speciesId": "flaaffy",
      "dexNumber": 180,
      "names": {
        "fr": "Lainergie",
        "en": "Flaaffy"
      }
    },
    "ampharos": {
      "speciesId": "ampharos",
      "dexNumber": 181,
      "names": {
        "fr": "Pharamp",
        "en": "Ampharos"
      }
    },
    "bellossom": {
      "speciesId": "bellossom",
      "dexNumber": 182,
      "names": {
        "fr": "Joliflor",
        "en": "Bellossom"
      }
    },
    "marill": {
      "speciesId": "marill",
      "dexNumber": 183,
      "names": {
        "fr": "Marill",
        "en": "Marill"
      }
    },
    "azumarill": {
      "speciesId": "azumarill",
      "dexNumber": 184,
      "names": {
        "fr": "Azumarill",
        "en": "Azumarill"
      }
    },
    "sudowoodo": {
      "speciesId": "sudowoodo",
      "dexNumber": 185,
      "names": {
        "fr": "Simularbre",
        "en": "Sudowoodo"
      }
    },
    "politoed": {
      "speciesId": "politoed",
      "dexNumber": 186,
      "names": {
        "fr": "Tarpaud",
        "en": "Politoed"
      }
    },
    "hoppip": {
      "speciesId": "hoppip",
      "dexNumber": 187,
      "names": {
        "fr": "Granivol",
        "en": "Hoppip"
      }
    },
    "skiploom": {
      "speciesId": "skiploom",
      "dexNumber": 188,
      "names": {
        "fr": "Floravol",
        "en": "Skiploom"
      }
    },
    "jumpluff": {
      "speciesId": "jumpluff",
      "dexNumber": 189,
      "names": {
        "fr": "Cotovol",
        "en": "Jumpluff"
      }
    },
    "aipom": {
      "speciesId": "aipom",
      "dexNumber": 190,
      "names": {
        "fr": "Capumain",
        "en": "Aipom"
      }
    },
    "sunkern": {
      "speciesId": "sunkern",
      "dexNumber": 191,
      "names": {
        "fr": "Tournegrin",
        "en": "Sunkern"
      }
    },
    "sunflora": {
      "speciesId": "sunflora",
      "dexNumber": 192,
      "names": {
        "fr": "Héliatronc",
        "en": "Sunflora"
      }
    },
    "yanma": {
      "speciesId": "yanma",
      "dexNumber": 193,
      "names": {
        "fr": "Yanma",
        "en": "Yanma"
      }
    },
    "wooper": {
      "speciesId": "wooper",
      "dexNumber": 194,
      "names": {
        "fr": "Axoloto",
        "en": "Wooper"
      }
    },
    "quagsire": {
      "speciesId": "quagsire",
      "dexNumber": 195,
      "names": {
        "fr": "Maraiste",
        "en": "Quagsire"
      }
    },
    "espeon": {
      "speciesId": "espeon",
      "dexNumber": 196,
      "names": {
        "fr": "Mentali",
        "en": "Espeon"
      }
    },
    "umbreon": {
      "speciesId": "umbreon",
      "dexNumber": 197,
      "names": {
        "fr": "Noctali",
        "en": "Umbreon"
      }
    },
    "murkrow": {
      "speciesId": "murkrow",
      "dexNumber": 198,
      "names": {
        "fr": "Cornèbre",
        "en": "Murkrow"
      }
    },
    "slowking": {
      "speciesId": "slowking",
      "dexNumber": 199,
      "names": {
        "fr": "Roigada",
        "en": "Slowking"
      }
    },
    "misdreavus": {
      "speciesId": "misdreavus",
      "dexNumber": 200,
      "names": {
        "fr": "Feuforêve",
        "en": "Misdreavus"
      }
    },
    "unown": {
      "speciesId": "unown",
      "dexNumber": 201,
      "names": {
        "fr": "Zarbi",
        "en": "Unown"
      }
    },
    "wobbuffet": {
      "speciesId": "wobbuffet",
      "dexNumber": 202,
      "names": {
        "fr": "Qulbutoké",
        "en": "Wobbuffet"
      }
    },
    "girafarig": {
      "speciesId": "girafarig",
      "dexNumber": 203,
      "names": {
        "fr": "Girafarig",
        "en": "Girafarig"
      }
    },
    "pineco": {
      "speciesId": "pineco",
      "dexNumber": 204,
      "names": {
        "fr": "Pomdepik",
        "en": "Pineco"
      }
    },
    "forretress": {
      "speciesId": "forretress",
      "dexNumber": 205,
      "names": {
        "fr": "Foretress",
        "en": "Forretress"
      }
    },
    "dunsparce": {
      "speciesId": "dunsparce",
      "dexNumber": 206,
      "names": {
        "fr": "Insolourdo",
        "en": "Dunsparce"
      }
    },
    "gligar": {
      "speciesId": "gligar",
      "dexNumber": 207,
      "names": {
        "fr": "Scorplane",
        "en": "Gligar"
      }
    },
    "steelix": {
      "speciesId": "steelix",
      "dexNumber": 208,
      "names": {
        "fr": "Steelix",
        "en": "Steelix"
      }
    },
    "snubbull": {
      "speciesId": "snubbull",
      "dexNumber": 209,
      "names": {
        "fr": "Snubbull",
        "en": "Snubbull"
      }
    },
    "granbull": {
      "speciesId": "granbull",
      "dexNumber": 210,
      "names": {
        "fr": "Granbull",
        "en": "Granbull"
      }
    },
    "qwilfish": {
      "speciesId": "qwilfish",
      "dexNumber": 211,
      "names": {
        "fr": "Qwilfish",
        "en": "Qwilfish"
      }
    },
    "scizor": {
      "speciesId": "scizor",
      "dexNumber": 212,
      "names": {
        "fr": "Cizayox",
        "en": "Scizor"
      }
    },
    "shuckle": {
      "speciesId": "shuckle",
      "dexNumber": 213,
      "names": {
        "fr": "Caratroc",
        "en": "Shuckle"
      }
    },
    "heracross": {
      "speciesId": "heracross",
      "dexNumber": 214,
      "names": {
        "fr": "Scarhino",
        "en": "Heracross"
      }
    },
    "sneasel": {
      "speciesId": "sneasel",
      "dexNumber": 215,
      "names": {
        "fr": "Farfuret",
        "en": "Sneasel"
      }
    },
    "teddiursa": {
      "speciesId": "teddiursa",
      "dexNumber": 216,
      "names": {
        "fr": "Teddiursa",
        "en": "Teddiursa"
      }
    },
    "ursaring": {
      "speciesId": "ursaring",
      "dexNumber": 217,
      "names": {
        "fr": "Ursaring",
        "en": "Ursaring"
      }
    },
    "slugma": {
      "speciesId": "slugma",
      "dexNumber": 218,
      "names": {
        "fr": "Limagma",
        "en": "Slugma"
      }
    },
    "magcargo": {
      "speciesId": "magcargo",
      "dexNumber": 219,
      "names": {
        "fr": "Volcaropod",
        "en": "Magcargo"
      }
    },
    "swinub": {
      "speciesId": "swinub",
      "dexNumber": 220,
      "names": {
        "fr": "Marcacrin",
        "en": "Swinub"
      }
    },
    "piloswine": {
      "speciesId": "piloswine",
      "dexNumber": 221,
      "names": {
        "fr": "Cochignon",
        "en": "Piloswine"
      }
    },
    "corsola": {
      "speciesId": "corsola",
      "dexNumber": 222,
      "names": {
        "fr": "Corayon",
        "en": "Corsola"
      }
    },
    "remoraid": {
      "speciesId": "remoraid",
      "dexNumber": 223,
      "names": {
        "fr": "Rémoraid",
        "en": "Remoraid"
      }
    },
    "octillery": {
      "speciesId": "octillery",
      "dexNumber": 224,
      "names": {
        "fr": "Octillery",
        "en": "Octillery"
      }
    },
    "delibird": {
      "speciesId": "delibird",
      "dexNumber": 225,
      "names": {
        "fr": "Cadoizo",
        "en": "Delibird"
      }
    },
    "mantine": {
      "speciesId": "mantine",
      "dexNumber": 226,
      "names": {
        "fr": "Démanta",
        "en": "Mantine"
      }
    },
    "skarmory": {
      "speciesId": "skarmory",
      "dexNumber": 227,
      "names": {
        "fr": "Airmure",
        "en": "Skarmory"
      }
    },
    "houndour": {
      "speciesId": "houndour",
      "dexNumber": 228,
      "names": {
        "fr": "Malosse",
        "en": "Houndour"
      }
    },
    "houndoom": {
      "speciesId": "houndoom",
      "dexNumber": 229,
      "names": {
        "fr": "Démolosse",
        "en": "Houndoom"
      }
    },
    "kingdra": {
      "speciesId": "kingdra",
      "dexNumber": 230,
      "names": {
        "fr": "Hyporoi",
        "en": "Kingdra"
      }
    },
    "phanpy": {
      "speciesId": "phanpy",
      "dexNumber": 231,
      "names": {
        "fr": "Phanpy",
        "en": "Phanpy"
      }
    },
    "donphan": {
      "speciesId": "donphan",
      "dexNumber": 232,
      "names": {
        "fr": "Donphan",
        "en": "Donphan"
      }
    },
    "porygon2": {
      "speciesId": "porygon2",
      "dexNumber": 233,
      "names": {
        "fr": "Porygon2",
        "en": "Porygon2"
      }
    },
    "stantler": {
      "speciesId": "stantler",
      "dexNumber": 234,
      "names": {
        "fr": "Cerfrousse",
        "en": "Stantler"
      }
    },
    "smeargle": {
      "speciesId": "smeargle",
      "dexNumber": 235,
      "names": {
        "fr": "Queulorior",
        "en": "Smeargle"
      }
    },
    "tyrogue": {
      "speciesId": "tyrogue",
      "dexNumber": 236,
      "names": {
        "fr": "Debugant",
        "en": "Tyrogue"
      }
    },
    "hitmontop": {
      "speciesId": "hitmontop",
      "dexNumber": 237,
      "names": {
        "fr": "Kapoera",
        "en": "Hitmontop"
      }
    },
    "smoochum": {
      "speciesId": "smoochum",
      "dexNumber": 238,
      "names": {
        "fr": "Lippouti",
        "en": "Smoochum"
      }
    },
    "elekid": {
      "speciesId": "elekid",
      "dexNumber": 239,
      "names": {
        "fr": "Élekid",
        "en": "Elekid"
      }
    },
    "magby": {
      "speciesId": "magby",
      "dexNumber": 240,
      "names": {
        "fr": "Magby",
        "en": "Magby"
      }
    },
    "miltank": {
      "speciesId": "miltank",
      "dexNumber": 241,
      "names": {
        "fr": "Écrémeuh",
        "en": "Miltank"
      }
    },
    "blissey": {
      "speciesId": "blissey",
      "dexNumber": 242,
      "names": {
        "fr": "Leuphorie",
        "en": "Blissey"
      }
    },
    "raikou": {
      "speciesId": "raikou",
      "dexNumber": 243,
      "names": {
        "fr": "Raikou",
        "en": "Raikou"
      }
    },
    "entei": {
      "speciesId": "entei",
      "dexNumber": 244,
      "names": {
        "fr": "Entei",
        "en": "Entei"
      }
    },
    "suicune": {
      "speciesId": "suicune",
      "dexNumber": 245,
      "names": {
        "fr": "Suicune",
        "en": "Suicune"
      }
    },
    "larvitar": {
      "speciesId": "larvitar",
      "dexNumber": 246,
      "names": {
        "fr": "Embrylex",
        "en": "Larvitar"
      }
    },
    "pupitar": {
      "speciesId": "pupitar",
      "dexNumber": 247,
      "names": {
        "fr": "Ymphect",
        "en": "Pupitar"
      }
    },
    "tyranitar": {
      "speciesId": "tyranitar",
      "dexNumber": 248,
      "names": {
        "fr": "Tyranocif",
        "en": "Tyranitar"
      }
    },
    "lugia": {
      "speciesId": "lugia",
      "dexNumber": 249,
      "names": {
        "fr": "Lugia",
        "en": "Lugia"
      }
    },
    "ho_oh": {
      "speciesId": "ho_oh",
      "dexNumber": 250,
      "names": {
        "fr": "Ho-Oh",
        "en": "Ho-Oh"
      }
    },
    "celebi": {
      "speciesId": "celebi",
      "dexNumber": 251,
      "names": {
        "fr": "Celebi",
        "en": "Celebi"
      }
    },
    "treecko": {
      "speciesId": "treecko",
      "dexNumber": 252,
      "names": {
        "fr": "Arcko",
        "en": "Treecko"
      }
    },
    "grovyle": {
      "speciesId": "grovyle",
      "dexNumber": 253,
      "names": {
        "fr": "Massko",
        "en": "Grovyle"
      }
    },
    "sceptile": {
      "speciesId": "sceptile",
      "dexNumber": 254,
      "names": {
        "fr": "Jungko",
        "en": "Sceptile"
      }
    },
    "torchic": {
      "speciesId": "torchic",
      "dexNumber": 255,
      "names": {
        "fr": "Poussifeu",
        "en": "Torchic"
      }
    },
    "combusken": {
      "speciesId": "combusken",
      "dexNumber": 256,
      "names": {
        "fr": "Galifeu",
        "en": "Combusken"
      }
    },
    "blaziken": {
      "speciesId": "blaziken",
      "dexNumber": 257,
      "names": {
        "fr": "Braségali",
        "en": "Blaziken"
      }
    },
    "mudkip": {
      "speciesId": "mudkip",
      "dexNumber": 258,
      "names": {
        "fr": "Gobou",
        "en": "Mudkip"
      }
    },
    "marshtomp": {
      "speciesId": "marshtomp",
      "dexNumber": 259,
      "names": {
        "fr": "Flobio",
        "en": "Marshtomp"
      }
    },
    "swampert": {
      "speciesId": "swampert",
      "dexNumber": 260,
      "names": {
        "fr": "Laggron",
        "en": "Swampert"
      }
    },
    "poochyena": {
      "speciesId": "poochyena",
      "dexNumber": 261,
      "names": {
        "fr": "Medhyèna",
        "en": "Poochyena"
      }
    },
    "mightyena": {
      "speciesId": "mightyena",
      "dexNumber": 262,
      "names": {
        "fr": "Grahyèna",
        "en": "Mightyena"
      }
    },
    "zigzagoon": {
      "speciesId": "zigzagoon",
      "dexNumber": 263,
      "names": {
        "fr": "Zigzaton",
        "en": "Zigzagoon"
      }
    },
    "linoone": {
      "speciesId": "linoone",
      "dexNumber": 264,
      "names": {
        "fr": "Linéon",
        "en": "Linoone"
      }
    },
    "wurmple": {
      "speciesId": "wurmple",
      "dexNumber": 265,
      "names": {
        "fr": "Chenipotte",
        "en": "Wurmple"
      }
    },
    "silcoon": {
      "speciesId": "silcoon",
      "dexNumber": 266,
      "names": {
        "fr": "Armulys",
        "en": "Silcoon"
      }
    },
    "beautifly": {
      "speciesId": "beautifly",
      "dexNumber": 267,
      "names": {
        "fr": "Charmillon",
        "en": "Beautifly"
      }
    },
    "cascoon": {
      "speciesId": "cascoon",
      "dexNumber": 268,
      "names": {
        "fr": "Blindalys",
        "en": "Cascoon"
      }
    },
    "dustox": {
      "speciesId": "dustox",
      "dexNumber": 269,
      "names": {
        "fr": "Papinox",
        "en": "Dustox"
      }
    },
    "lotad": {
      "speciesId": "lotad",
      "dexNumber": 270,
      "names": {
        "fr": "Nénupiot",
        "en": "Lotad"
      }
    },
    "lombre": {
      "speciesId": "lombre",
      "dexNumber": 271,
      "names": {
        "fr": "Lombre",
        "en": "Lombre"
      }
    },
    "ludicolo": {
      "speciesId": "ludicolo",
      "dexNumber": 272,
      "names": {
        "fr": "Ludicolo",
        "en": "Ludicolo"
      }
    },
    "seedot": {
      "speciesId": "seedot",
      "dexNumber": 273,
      "names": {
        "fr": "Grainipiot",
        "en": "Seedot"
      }
    },
    "nuzleaf": {
      "speciesId": "nuzleaf",
      "dexNumber": 274,
      "names": {
        "fr": "Pifeuil",
        "en": "Nuzleaf"
      }
    },
    "shiftry": {
      "speciesId": "shiftry",
      "dexNumber": 275,
      "names": {
        "fr": "Tengalice",
        "en": "Shiftry"
      }
    },
    "taillow": {
      "speciesId": "taillow",
      "dexNumber": 276,
      "names": {
        "fr": "Nirondelle",
        "en": "Taillow"
      }
    },
    "swellow": {
      "speciesId": "swellow",
      "dexNumber": 277,
      "names": {
        "fr": "Hélédelle",
        "en": "Swellow"
      }
    },
    "wingull": {
      "speciesId": "wingull",
      "dexNumber": 278,
      "names": {
        "fr": "Goélise",
        "en": "Wingull"
      }
    },
    "pelipper": {
      "speciesId": "pelipper",
      "dexNumber": 279,
      "names": {
        "fr": "Bekipan",
        "en": "Pelipper"
      }
    },
    "ralts": {
      "speciesId": "ralts",
      "dexNumber": 280,
      "names": {
        "fr": "Tarsal",
        "en": "Ralts"
      }
    },
    "kirlia": {
      "speciesId": "kirlia",
      "dexNumber": 281,
      "names": {
        "fr": "Kirlia",
        "en": "Kirlia"
      }
    },
    "gardevoir": {
      "speciesId": "gardevoir",
      "dexNumber": 282,
      "names": {
        "fr": "Gardevoir",
        "en": "Gardevoir"
      }
    },
    "surskit": {
      "speciesId": "surskit",
      "dexNumber": 283,
      "names": {
        "fr": "Arakdo",
        "en": "Surskit"
      }
    },
    "masquerain": {
      "speciesId": "masquerain",
      "dexNumber": 284,
      "names": {
        "fr": "Maskadra",
        "en": "Masquerain"
      }
    },
    "shroomish": {
      "speciesId": "shroomish",
      "dexNumber": 285,
      "names": {
        "fr": "Balignon",
        "en": "Shroomish"
      }
    },
    "breloom": {
      "speciesId": "breloom",
      "dexNumber": 286,
      "names": {
        "fr": "Chapignon",
        "en": "Breloom"
      }
    },
    "slakoth": {
      "speciesId": "slakoth",
      "dexNumber": 287,
      "names": {
        "fr": "Parecool",
        "en": "Slakoth"
      }
    },
    "vigoroth": {
      "speciesId": "vigoroth",
      "dexNumber": 288,
      "names": {
        "fr": "Vigoroth",
        "en": "Vigoroth"
      }
    },
    "slaking": {
      "speciesId": "slaking",
      "dexNumber": 289,
      "names": {
        "fr": "Monaflèmit",
        "en": "Slaking"
      }
    },
    "nincada": {
      "speciesId": "nincada",
      "dexNumber": 290,
      "names": {
        "fr": "Ningale",
        "en": "Nincada"
      }
    },
    "ninjask": {
      "speciesId": "ninjask",
      "dexNumber": 291,
      "names": {
        "fr": "Ninjask",
        "en": "Ninjask"
      }
    },
    "shedinja": {
      "speciesId": "shedinja",
      "dexNumber": 292,
      "names": {
        "fr": "Munja",
        "en": "Shedinja"
      }
    },
    "whismur": {
      "speciesId": "whismur",
      "dexNumber": 293,
      "names": {
        "fr": "Chuchmur",
        "en": "Whismur"
      }
    },
    "loudred": {
      "speciesId": "loudred",
      "dexNumber": 294,
      "names": {
        "fr": "Ramboum",
        "en": "Loudred"
      }
    },
    "exploud": {
      "speciesId": "exploud",
      "dexNumber": 295,
      "names": {
        "fr": "Brouhabam",
        "en": "Exploud"
      }
    },
    "makuhita": {
      "speciesId": "makuhita",
      "dexNumber": 296,
      "names": {
        "fr": "Makuhita",
        "en": "Makuhita"
      }
    },
    "hariyama": {
      "speciesId": "hariyama",
      "dexNumber": 297,
      "names": {
        "fr": "Hariyama",
        "en": "Hariyama"
      }
    },
    "azurill": {
      "speciesId": "azurill",
      "dexNumber": 298,
      "names": {
        "fr": "Azurill",
        "en": "Azurill"
      }
    },
    "nosepass": {
      "speciesId": "nosepass",
      "dexNumber": 299,
      "names": {
        "fr": "Tarinor",
        "en": "Nosepass"
      }
    },
    "skitty": {
      "speciesId": "skitty",
      "dexNumber": 300,
      "names": {
        "fr": "Skitty",
        "en": "Skitty"
      }
    },
    "delcatty": {
      "speciesId": "delcatty",
      "dexNumber": 301,
      "names": {
        "fr": "Delcatty",
        "en": "Delcatty"
      }
    },
    "sableye": {
      "speciesId": "sableye",
      "dexNumber": 302,
      "names": {
        "fr": "Ténéfix",
        "en": "Sableye"
      }
    },
    "mawile": {
      "speciesId": "mawile",
      "dexNumber": 303,
      "names": {
        "fr": "Mysdibule",
        "en": "Mawile"
      }
    },
    "aron": {
      "speciesId": "aron",
      "dexNumber": 304,
      "names": {
        "fr": "Galekid",
        "en": "Aron"
      }
    },
    "lairon": {
      "speciesId": "lairon",
      "dexNumber": 305,
      "names": {
        "fr": "Galegon",
        "en": "Lairon"
      }
    },
    "aggron": {
      "speciesId": "aggron",
      "dexNumber": 306,
      "names": {
        "fr": "Galeking",
        "en": "Aggron"
      }
    },
    "meditite": {
      "speciesId": "meditite",
      "dexNumber": 307,
      "names": {
        "fr": "Méditikka",
        "en": "Meditite"
      }
    },
    "medicham": {
      "speciesId": "medicham",
      "dexNumber": 308,
      "names": {
        "fr": "Charmina",
        "en": "Medicham"
      }
    },
    "electrike": {
      "speciesId": "electrike",
      "dexNumber": 309,
      "names": {
        "fr": "Dynavolt",
        "en": "Electrike"
      }
    },
    "manectric": {
      "speciesId": "manectric",
      "dexNumber": 310,
      "names": {
        "fr": "Élecsprint",
        "en": "Manectric"
      }
    },
    "plusle": {
      "speciesId": "plusle",
      "dexNumber": 311,
      "names": {
        "fr": "Posipi",
        "en": "Plusle"
      }
    },
    "minun": {
      "speciesId": "minun",
      "dexNumber": 312,
      "names": {
        "fr": "Négapi",
        "en": "Minun"
      }
    },
    "volbeat": {
      "speciesId": "volbeat",
      "dexNumber": 313,
      "names": {
        "fr": "Muciole",
        "en": "Volbeat"
      }
    },
    "illumise": {
      "speciesId": "illumise",
      "dexNumber": 314,
      "names": {
        "fr": "Lumivole",
        "en": "Illumise"
      }
    },
    "roselia": {
      "speciesId": "roselia",
      "dexNumber": 315,
      "names": {
        "fr": "Rosélia",
        "en": "Roselia"
      }
    },
    "gulpin": {
      "speciesId": "gulpin",
      "dexNumber": 316,
      "names": {
        "fr": "Gloupti",
        "en": "Gulpin"
      }
    },
    "swalot": {
      "speciesId": "swalot",
      "dexNumber": 317,
      "names": {
        "fr": "Avaltout",
        "en": "Swalot"
      }
    },
    "carvanha": {
      "speciesId": "carvanha",
      "dexNumber": 318,
      "names": {
        "fr": "Carvanha",
        "en": "Carvanha"
      }
    },
    "sharpedo": {
      "speciesId": "sharpedo",
      "dexNumber": 319,
      "names": {
        "fr": "Sharpedo",
        "en": "Sharpedo"
      }
    },
    "wailmer": {
      "speciesId": "wailmer",
      "dexNumber": 320,
      "names": {
        "fr": "Wailmer",
        "en": "Wailmer"
      }
    },
    "wailord": {
      "speciesId": "wailord",
      "dexNumber": 321,
      "names": {
        "fr": "Wailord",
        "en": "Wailord"
      }
    },
    "numel": {
      "speciesId": "numel",
      "dexNumber": 322,
      "names": {
        "fr": "Chamallot",
        "en": "Numel"
      }
    },
    "camerupt": {
      "speciesId": "camerupt",
      "dexNumber": 323,
      "names": {
        "fr": "Camérupt",
        "en": "Camerupt"
      }
    },
    "torkoal": {
      "speciesId": "torkoal",
      "dexNumber": 324,
      "names": {
        "fr": "Chartor",
        "en": "Torkoal"
      }
    },
    "spoink": {
      "speciesId": "spoink",
      "dexNumber": 325,
      "names": {
        "fr": "Spoink",
        "en": "Spoink"
      }
    },
    "grumpig": {
      "speciesId": "grumpig",
      "dexNumber": 326,
      "names": {
        "fr": "Groret",
        "en": "Grumpig"
      }
    },
    "spinda": {
      "speciesId": "spinda",
      "dexNumber": 327,
      "names": {
        "fr": "Spinda",
        "en": "Spinda"
      }
    },
    "trapinch": {
      "speciesId": "trapinch",
      "dexNumber": 328,
      "names": {
        "fr": "Kraknoix",
        "en": "Trapinch"
      }
    },
    "vibrava": {
      "speciesId": "vibrava",
      "dexNumber": 329,
      "names": {
        "fr": "Vibraninf",
        "en": "Vibrava"
      }
    },
    "flygon": {
      "speciesId": "flygon",
      "dexNumber": 330,
      "names": {
        "fr": "Libégon",
        "en": "Flygon"
      }
    },
    "cacnea": {
      "speciesId": "cacnea",
      "dexNumber": 331,
      "names": {
        "fr": "Cacnea",
        "en": "Cacnea"
      }
    },
    "cacturne": {
      "speciesId": "cacturne",
      "dexNumber": 332,
      "names": {
        "fr": "Cacturne",
        "en": "Cacturne"
      }
    },
    "swablu": {
      "speciesId": "swablu",
      "dexNumber": 333,
      "names": {
        "fr": "Tylton",
        "en": "Swablu"
      }
    },
    "altaria": {
      "speciesId": "altaria",
      "dexNumber": 334,
      "names": {
        "fr": "Altaria",
        "en": "Altaria"
      }
    },
    "zangoose": {
      "speciesId": "zangoose",
      "dexNumber": 335,
      "names": {
        "fr": "Mangriff",
        "en": "Zangoose"
      }
    },
    "seviper": {
      "speciesId": "seviper",
      "dexNumber": 336,
      "names": {
        "fr": "Séviper",
        "en": "Seviper"
      }
    },
    "lunatone": {
      "speciesId": "lunatone",
      "dexNumber": 337,
      "names": {
        "fr": "Séléroc",
        "en": "Lunatone"
      }
    },
    "solrock": {
      "speciesId": "solrock",
      "dexNumber": 338,
      "names": {
        "fr": "Solaroc",
        "en": "Solrock"
      }
    },
    "barboach": {
      "speciesId": "barboach",
      "dexNumber": 339,
      "names": {
        "fr": "Barloche",
        "en": "Barboach"
      }
    },
    "whiscash": {
      "speciesId": "whiscash",
      "dexNumber": 340,
      "names": {
        "fr": "Barbicha",
        "en": "Whiscash"
      }
    },
    "corphish": {
      "speciesId": "corphish",
      "dexNumber": 341,
      "names": {
        "fr": "Écrapince",
        "en": "Corphish"
      }
    },
    "crawdaunt": {
      "speciesId": "crawdaunt",
      "dexNumber": 342,
      "names": {
        "fr": "Colhomard",
        "en": "Crawdaunt"
      }
    },
    "baltoy": {
      "speciesId": "baltoy",
      "dexNumber": 343,
      "names": {
        "fr": "Balbuto",
        "en": "Baltoy"
      }
    },
    "claydol": {
      "speciesId": "claydol",
      "dexNumber": 344,
      "names": {
        "fr": "Kaorine",
        "en": "Claydol"
      }
    },
    "lileep": {
      "speciesId": "lileep",
      "dexNumber": 345,
      "names": {
        "fr": "Lilia",
        "en": "Lileep"
      }
    },
    "cradily": {
      "speciesId": "cradily",
      "dexNumber": 346,
      "names": {
        "fr": "Vacilys",
        "en": "Cradily"
      }
    },
    "anorith": {
      "speciesId": "anorith",
      "dexNumber": 347,
      "names": {
        "fr": "Anorith",
        "en": "Anorith"
      }
    },
    "armaldo": {
      "speciesId": "armaldo",
      "dexNumber": 348,
      "names": {
        "fr": "Armaldo",
        "en": "Armaldo"
      }
    },
    "feebas": {
      "speciesId": "feebas",
      "dexNumber": 349,
      "names": {
        "fr": "Barpau",
        "en": "Feebas"
      }
    },
    "milotic": {
      "speciesId": "milotic",
      "dexNumber": 350,
      "names": {
        "fr": "Milobellus",
        "en": "Milotic"
      }
    },
    "castform": {
      "speciesId": "castform",
      "dexNumber": 351,
      "names": {
        "fr": "Morphéo",
        "en": "Castform"
      }
    },
    "kecleon": {
      "speciesId": "kecleon",
      "dexNumber": 352,
      "names": {
        "fr": "Kecleon",
        "en": "Kecleon"
      }
    },
    "shuppet": {
      "speciesId": "shuppet",
      "dexNumber": 353,
      "names": {
        "fr": "Polichombr",
        "en": "Shuppet"
      }
    },
    "banette": {
      "speciesId": "banette",
      "dexNumber": 354,
      "names": {
        "fr": "Branette",
        "en": "Banette"
      }
    },
    "duskull": {
      "speciesId": "duskull",
      "dexNumber": 355,
      "names": {
        "fr": "Skelénox",
        "en": "Duskull"
      }
    },
    "dusclops": {
      "speciesId": "dusclops",
      "dexNumber": 356,
      "names": {
        "fr": "Téraclope",
        "en": "Dusclops"
      }
    },
    "tropius": {
      "speciesId": "tropius",
      "dexNumber": 357,
      "names": {
        "fr": "Tropius",
        "en": "Tropius"
      }
    },
    "chimecho": {
      "speciesId": "chimecho",
      "dexNumber": 358,
      "names": {
        "fr": "Éoko",
        "en": "Chimecho"
      }
    },
    "absol": {
      "speciesId": "absol",
      "dexNumber": 359,
      "names": {
        "fr": "Absol",
        "en": "Absol"
      }
    },
    "wynaut": {
      "speciesId": "wynaut",
      "dexNumber": 360,
      "names": {
        "fr": "Okéoké",
        "en": "Wynaut"
      }
    },
    "snorunt": {
      "speciesId": "snorunt",
      "dexNumber": 361,
      "names": {
        "fr": "Stalgamin",
        "en": "Snorunt"
      }
    },
    "glalie": {
      "speciesId": "glalie",
      "dexNumber": 362,
      "names": {
        "fr": "Oniglali",
        "en": "Glalie"
      }
    },
    "spheal": {
      "speciesId": "spheal",
      "dexNumber": 363,
      "names": {
        "fr": "Obalie",
        "en": "Spheal"
      }
    },
    "sealeo": {
      "speciesId": "sealeo",
      "dexNumber": 364,
      "names": {
        "fr": "Phogleur",
        "en": "Sealeo"
      }
    },
    "walrein": {
      "speciesId": "walrein",
      "dexNumber": 365,
      "names": {
        "fr": "Kaimorse",
        "en": "Walrein"
      }
    },
    "clamperl": {
      "speciesId": "clamperl",
      "dexNumber": 366,
      "names": {
        "fr": "Coquiperl",
        "en": "Clamperl"
      }
    },
    "huntail": {
      "speciesId": "huntail",
      "dexNumber": 367,
      "names": {
        "fr": "Serpang",
        "en": "Huntail"
      }
    },
    "gorebyss": {
      "speciesId": "gorebyss",
      "dexNumber": 368,
      "names": {
        "fr": "Rosabyss",
        "en": "Gorebyss"
      }
    },
    "relicanth": {
      "speciesId": "relicanth",
      "dexNumber": 369,
      "names": {
        "fr": "Relicanth",
        "en": "Relicanth"
      }
    },
    "luvdisc": {
      "speciesId": "luvdisc",
      "dexNumber": 370,
      "names": {
        "fr": "Lovdisc",
        "en": "Luvdisc"
      }
    },
    "bagon": {
      "speciesId": "bagon",
      "dexNumber": 371,
      "names": {
        "fr": "Draby",
        "en": "Bagon"
      }
    },
    "shelgon": {
      "speciesId": "shelgon",
      "dexNumber": 372,
      "names": {
        "fr": "Drackhaus",
        "en": "Shelgon"
      }
    },
    "salamence": {
      "speciesId": "salamence",
      "dexNumber": 373,
      "names": {
        "fr": "Drattak",
        "en": "Salamence"
      }
    },
    "beldum": {
      "speciesId": "beldum",
      "dexNumber": 374,
      "names": {
        "fr": "Terhal",
        "en": "Beldum"
      }
    },
    "metang": {
      "speciesId": "metang",
      "dexNumber": 375,
      "names": {
        "fr": "Métang",
        "en": "Metang"
      }
    },
    "metagross": {
      "speciesId": "metagross",
      "dexNumber": 376,
      "names": {
        "fr": "Métalosse",
        "en": "Metagross"
      }
    },
    "regirock": {
      "speciesId": "regirock",
      "dexNumber": 377,
      "names": {
        "fr": "Regirock",
        "en": "Regirock"
      }
    },
    "regice": {
      "speciesId": "regice",
      "dexNumber": 378,
      "names": {
        "fr": "Regice",
        "en": "Regice"
      }
    },
    "registeel": {
      "speciesId": "registeel",
      "dexNumber": 379,
      "names": {
        "fr": "Registeel",
        "en": "Registeel"
      }
    },
    "latias": {
      "speciesId": "latias",
      "dexNumber": 380,
      "names": {
        "fr": "Latias",
        "en": "Latias"
      }
    },
    "latios": {
      "speciesId": "latios",
      "dexNumber": 381,
      "names": {
        "fr": "Latios",
        "en": "Latios"
      }
    },
    "kyogre": {
      "speciesId": "kyogre",
      "dexNumber": 382,
      "names": {
        "fr": "Kyogre",
        "en": "Kyogre"
      }
    },
    "groudon": {
      "speciesId": "groudon",
      "dexNumber": 383,
      "names": {
        "fr": "Groudon",
        "en": "Groudon"
      }
    },
    "rayquaza": {
      "speciesId": "rayquaza",
      "dexNumber": 384,
      "names": {
        "fr": "Rayquaza",
        "en": "Rayquaza"
      }
    },
    "jirachi": {
      "speciesId": "jirachi",
      "dexNumber": 385,
      "names": {
        "fr": "Jirachi",
        "en": "Jirachi"
      }
    },
    "deoxys": {
      "speciesId": "deoxys",
      "dexNumber": 386,
      "names": {
        "fr": "Deoxys",
        "en": "Deoxys"
      }
    }
  }
};

window.palaceData.brain = {
  "streakAppearances": {
    "silver": 21,
    "gold": 42,
    "repeat": 21,
    "offset": 1
  },
  "trainers": [
    {
      "id": "spenser_silver",
      "names": {
        "fr": "Esteban - Argent",
        "en": "Spenser - Silver"
      },
      "ivTier": 16,
      "poolId": "spenser_silver",
      "seriesIds": [
        "series_3"
      ],
      "infoKey": "palaceBrainSilverInfo",
      "team": [
        {
          "id": "spenser_silver_crobat",
          "speciesId": "crobat",
          "names": {
            "en": "Crobat",
            "fr": "Nostenfer"
          },
          "setNumber": null,
          "dexNumber": 169,
          "types": [
            "poison",
            "flying"
          ],
          "abilities": [
            "inner_focus"
          ],
          "nature": "adamant",
          "item": "brightpowder",
          "baseStats": {
            "hp": 85,
            "atk": 90,
            "def": 80,
            "spa": 70,
            "spd": 80,
            "spe": 130
          },
          "evs": {
            "hp": 152,
            "atk": 0,
            "def": 0,
            "spe": 152,
            "spa": 100,
            "spd": 106
          },
          "moves": [
            "confuse_ray",
            "double_team",
            "toxic",
            "fly"
          ],
          "battleIv": 16
        },
        {
          "id": "spenser_silver_slaking",
          "speciesId": "slaking",
          "names": {
            "en": "Slaking",
            "fr": "Monaflèmit"
          },
          "setNumber": null,
          "dexNumber": 289,
          "types": [
            "normal"
          ],
          "abilities": [
            "truant"
          ],
          "nature": "hardy",
          "item": "scope_lens",
          "baseStats": {
            "hp": 150,
            "atk": 160,
            "def": 100,
            "spa": 95,
            "spd": 65,
            "spe": 100
          },
          "evs": {
            "hp": 152,
            "atk": 152,
            "def": 0,
            "spe": 106,
            "spa": 100,
            "spd": 0
          },
          "moves": [
            "earthquake",
            "swagger",
            "shadow_ball",
            "brick_break"
          ],
          "battleIv": 16
        },
        {
          "id": "spenser_silver_lapras",
          "speciesId": "lapras",
          "names": {
            "en": "Lapras",
            "fr": "Lokhlass"
          },
          "setNumber": null,
          "dexNumber": 131,
          "types": [
            "water",
            "ice"
          ],
          "abilities": [
            "water_absorb",
            "shell_armor"
          ],
          "nature": "quiet",
          "item": "quick_claw",
          "baseStats": {
            "hp": 130,
            "atk": 85,
            "def": 80,
            "spa": 85,
            "spd": 95,
            "spe": 60
          },
          "evs": {
            "hp": 0,
            "atk": 0,
            "def": 252,
            "spe": 0,
            "spa": 106,
            "spd": 152
          },
          "moves": [
            "ice_beam",
            "horn_drill",
            "confuse_ray",
            "protect"
          ],
          "battleIv": 16
        }
      ]
    },
    {
      "id": "spenser_gold",
      "names": {
        "fr": "Esteban - Or",
        "en": "Spenser - Gold"
      },
      "ivTier": 31,
      "poolId": "spenser_gold",
      "seriesIds": [
        "series_6",
        "series_8_plus"
      ],
      "infoKey": "palaceBrainGoldInfo",
      "team": [
        {
          "id": "spenser_gold_arcanine",
          "speciesId": "arcanine",
          "names": {
            "en": "Arcanine",
            "fr": "Arcanin"
          },
          "setNumber": null,
          "dexNumber": 59,
          "types": [
            "fire"
          ],
          "abilities": [
            "intimidate",
            "flash_fire"
          ],
          "nature": "hasty",
          "item": "white_herb",
          "baseStats": {
            "hp": 90,
            "atk": 110,
            "def": 80,
            "spa": 100,
            "spd": 80,
            "spe": 95
          },
          "evs": {
            "hp": 6,
            "atk": 252,
            "def": 252,
            "spe": 0,
            "spa": 0,
            "spd": 0
          },
          "moves": [
            "overheat",
            "extremespeed",
            "roar",
            "protect"
          ],
          "battleIv": 31
        },
        {
          "id": "spenser_gold_slaking",
          "speciesId": "slaking",
          "names": {
            "en": "Slaking",
            "fr": "Monaflèmit"
          },
          "setNumber": null,
          "dexNumber": 289,
          "types": [
            "normal"
          ],
          "abilities": [
            "truant"
          ],
          "nature": "hardy",
          "item": "scope_lens",
          "baseStats": {
            "hp": 150,
            "atk": 160,
            "def": 100,
            "spa": 95,
            "spd": 65,
            "spe": 100
          },
          "evs": {
            "hp": 6,
            "atk": 252,
            "def": 0,
            "spe": 252,
            "spa": 0,
            "spd": 0
          },
          "moves": [
            "hyper_beam",
            "earthquake",
            "shadow_ball",
            "yawn"
          ],
          "battleIv": 31
        },
        {
          "id": "spenser_gold_suicune",
          "speciesId": "suicune",
          "names": {
            "en": "Suicune",
            "fr": "Suicune"
          },
          "setNumber": null,
          "dexNumber": 245,
          "types": [
            "water"
          ],
          "abilities": [
            "pressure"
          ],
          "nature": "hasty",
          "item": "kings_rock",
          "baseStats": {
            "hp": 100,
            "atk": 75,
            "def": 115,
            "spa": 90,
            "spd": 115,
            "spe": 85
          },
          "evs": {
            "hp": 252,
            "atk": 0,
            "def": 252,
            "spe": 6,
            "spa": 0,
            "spd": 0
          },
          "moves": [
            "blizzard",
            "surf",
            "bite",
            "calm_mind"
          ],
          "battleIv": 31
        }
      ]
    }
  ]
};

// Fill missing names/type/PP, preserving every existing data field and translation.
window.moves ??= {};
for (const [id, data] of Object.entries(window.palaceData.moves)) {
    const existing = window.moves[id] ?? window.pyramidWildMons?.extraMoves?.[id] ?? {};
    window.moves[id] = { ...data, ...existing,
        names: { ...data.names, ...existing.names }, palaceGroup: data.palaceGroup };
}
