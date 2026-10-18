// Wild encounters extracted from pokeemerald; species names from frontier_mons.js.
window.pyramidWildMons = {
  "source": {
    "repository": "https://github.com/pret/pokeemerald",
    "commit": "731ad5bfd6e6f265508d0efcca0ba42f9dcf5881",
    "wildTables": "User-provided battle_pyramid_*_wild_mons.h",
    "abilities": "src/data/pokemon/species_info.h",
    "probabilities": "src/data/wild_encounters.json",
    "trainerRanges": "src/battle_tower.c"
  },
  "cycleLength": 20,
  "floors": [
    {
      "number": 1,
      "encounterRate": 4,
      "probabilities": [
        60,
        20,
        15,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "number": 2,
      "encounterRate": 4,
      "probabilities": [
        0,
        60,
        20,
        15,
        5,
        0,
        0,
        0
      ]
    },
    {
      "number": 3,
      "encounterRate": 4,
      "probabilities": [
        0,
        0,
        60,
        20,
        15,
        5,
        0,
        0
      ]
    },
    {
      "number": 4,
      "encounterRate": 4,
      "probabilities": [
        0,
        0,
        0,
        60,
        20,
        15,
        5,
        0
      ]
    },
    {
      "number": 5,
      "encounterRate": 4,
      "probabilities": [
        0,
        0,
        0,
        0,
        60,
        20,
        15,
        5
      ]
    },
    {
      "number": 6,
      "encounterRate": 4,
      "probabilities": [
        0,
        0,
        0,
        0,
        10,
        50,
        20,
        20
      ]
    },
    {
      "number": 7,
      "encounterRate": 8,
      "probabilities": [
        0,
        0,
        0,
        0,
        10,
        20,
        30,
        40
      ]
    }
  ],
  "trainerSeries": [
    {
      "start": 1,
      "end": 120,
      "normalFloors": {
        "start": 1,
        "end": 100
      },
      "lastFloor": {
        "start": 101,
        "end": 120
      }
    },
    {
      "start": 81,
      "end": 140,
      "normalFloors": {
        "start": 81,
        "end": 120
      },
      "lastFloor": {
        "start": 121,
        "end": 140
      }
    },
    {
      "start": 101,
      "end": 160,
      "normalFloors": {
        "start": 101,
        "end": 140
      },
      "lastFloor": {
        "start": 141,
        "end": 160
      }
    },
    {
      "start": 121,
      "end": 180,
      "normalFloors": {
        "start": 121,
        "end": 160
      },
      "lastFloor": {
        "start": 161,
        "end": 180
      }
    },
    {
      "start": 141,
      "end": 200,
      "normalFloors": {
        "start": 141,
        "end": 180
      },
      "lastFloor": {
        "start": 181,
        "end": 200
      }
    },
    {
      "start": 161,
      "end": 220,
      "normalFloors": {
        "start": 161,
        "end": 200
      },
      "lastFloor": {
        "start": 201,
        "end": 220
      }
    },
    {
      "start": 181,
      "end": 240,
      "normalFloors": {
        "start": 181,
        "end": 220
      },
      "lastFloor": {
        "start": 221,
        "end": 240
      }
    },
    {
      "start": 201,
      "end": 300,
      "normalFloors": {
        "start": 201,
        "end": 300
      },
      "lastFloor": {
        "start": 201,
        "end": 300
      }
    }
  ],
  "species": {
    "plusle": {
      "speciesId": "plusle",
      "names": {
        "en": "Plusle",
        "fr": "Posipi"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "plus",
        null
      ]
    },
    "minun": {
      "speciesId": "minun",
      "names": {
        "en": "Minun",
        "fr": "Négapi"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "minus",
        null
      ]
    },
    "pikachu": {
      "speciesId": "pikachu",
      "names": {
        "en": "Pikachu",
        "fr": "Pikachu"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "static",
        null
      ]
    },
    "electabuzz": {
      "speciesId": "electabuzz",
      "names": {
        "en": "Electabuzz",
        "fr": "Élektek"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "static",
        null
      ]
    },
    "vileplume": {
      "speciesId": "vileplume",
      "names": {
        "en": "Vileplume",
        "fr": "Rafflesia"
      },
      "types": [
        "grass",
        "poison"
      ],
      "abilitySlots": [
        "chlorophyll",
        null
      ]
    },
    "manectric": {
      "speciesId": "manectric",
      "names": {
        "en": "Manectric",
        "fr": "Élecsprint"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "static",
        "lightning_rod"
      ]
    },
    "breloom": {
      "speciesId": "breloom",
      "names": {
        "en": "Breloom",
        "fr": "Chapignon"
      },
      "types": [
        "grass",
        "fighting"
      ],
      "abilitySlots": [
        "effect_spore",
        null
      ]
    },
    "jolteon": {
      "speciesId": "jolteon",
      "names": {
        "en": "Jolteon",
        "fr": "Voltali"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "volt_absorb",
        null
      ]
    },
    "gulpin": {
      "speciesId": "gulpin",
      "names": {
        "en": "Gulpin",
        "fr": "Gloupti"
      },
      "types": [
        "poison"
      ],
      "abilitySlots": [
        "liquid_ooze",
        "sticky_hold"
      ]
    },
    "roselia": {
      "speciesId": "roselia",
      "names": {
        "en": "Roselia",
        "fr": "Rosélia"
      },
      "types": [
        "grass",
        "poison"
      ],
      "abilitySlots": [
        "natural_cure",
        "poison_point"
      ]
    },
    "butterfree": {
      "speciesId": "butterfree",
      "names": {
        "en": "Butterfree",
        "fr": "Papilusion"
      },
      "types": [
        "bug",
        "flying"
      ],
      "abilitySlots": [
        "compound_eyes",
        null
      ]
    },
    "seviper": {
      "speciesId": "seviper",
      "names": {
        "en": "Seviper",
        "fr": "Séviper"
      },
      "types": [
        "poison"
      ],
      "abilitySlots": [
        "shed_skin",
        null
      ]
    },
    "skarmory": {
      "speciesId": "skarmory",
      "names": {
        "en": "Skarmory",
        "fr": "Airmure"
      },
      "types": [
        "steel",
        "flying"
      ],
      "abilitySlots": [
        "keen_eye",
        "sturdy"
      ]
    },
    "ludicolo": {
      "speciesId": "ludicolo",
      "names": {
        "en": "Ludicolo",
        "fr": "Ludicolo"
      },
      "types": [
        "water",
        "grass"
      ],
      "abilitySlots": [
        "swift_swim",
        "rain_dish"
      ]
    },
    "crobat": {
      "speciesId": "crobat",
      "names": {
        "en": "Crobat",
        "fr": "Nostenfer"
      },
      "types": [
        "poison",
        "flying"
      ],
      "abilitySlots": [
        "inner_focus",
        null
      ]
    },
    "gengar": {
      "speciesId": "gengar",
      "names": {
        "en": "Gengar",
        "fr": "Ectoplasma"
      },
      "types": [
        "ghost",
        "poison"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "growlithe": {
      "speciesId": "growlithe",
      "names": {
        "en": "Growlithe",
        "fr": "Caninos"
      },
      "types": [
        "fire"
      ],
      "abilitySlots": [
        "intimidate",
        "flash_fire"
      ]
    },
    "vulpix": {
      "speciesId": "vulpix",
      "names": {
        "en": "Vulpix",
        "fr": "Goupix"
      },
      "types": [
        "fire"
      ],
      "abilitySlots": [
        "flash_fire",
        null
      ]
    },
    "magcargo": {
      "speciesId": "magcargo",
      "names": {
        "en": "Magcargo",
        "fr": "Volcaropod"
      },
      "types": [
        "fire",
        "rock"
      ],
      "abilitySlots": [
        "magma_armor",
        "flame_body"
      ]
    },
    "ninetales": {
      "speciesId": "ninetales",
      "names": {
        "en": "Ninetales",
        "fr": "Feunard"
      },
      "types": [
        "fire"
      ],
      "abilitySlots": [
        "flash_fire",
        null
      ]
    },
    "medicham": {
      "speciesId": "medicham",
      "names": {
        "en": "Medicham",
        "fr": "Charmina"
      },
      "types": [
        "fighting",
        "psychic"
      ],
      "abilitySlots": [
        "pure_power",
        null
      ]
    },
    "weezing": {
      "speciesId": "weezing",
      "names": {
        "en": "Weezing",
        "fr": "Smogogo"
      },
      "types": [
        "poison"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "dusclops": {
      "speciesId": "dusclops",
      "names": {
        "en": "Dusclops",
        "fr": "Téraclope"
      },
      "types": [
        "ghost"
      ],
      "abilitySlots": [
        "pressure",
        null
      ]
    },
    "houndoom": {
      "speciesId": "houndoom",
      "names": {
        "en": "Houndoom",
        "fr": "Démolosse"
      },
      "types": [
        "dark",
        "fire"
      ],
      "abilitySlots": [
        "early_bird",
        "flash_fire"
      ]
    },
    "dunsparce": {
      "speciesId": "dunsparce",
      "names": {
        "en": "Dunsparce",
        "fr": "Insolourdo"
      },
      "types": [
        "normal"
      ],
      "abilitySlots": [
        "serene_grace",
        "run_away"
      ]
    },
    "banette": {
      "speciesId": "banette",
      "names": {
        "en": "Banette",
        "fr": "Branette"
      },
      "types": [
        "ghost"
      ],
      "abilitySlots": [
        "insomnia",
        null
      ]
    },
    "misdreavus": {
      "speciesId": "misdreavus",
      "names": {
        "en": "Misdreavus",
        "fr": "Feuforêve"
      },
      "types": [
        "ghost"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "absol": {
      "speciesId": "absol",
      "names": {
        "en": "Absol",
        "fr": "Absol"
      },
      "types": [
        "dark"
      ],
      "abilitySlots": [
        "pressure",
        null
      ]
    },
    "shedinja": {
      "speciesId": "shedinja",
      "names": {
        "en": "Shedinja",
        "fr": "Munja"
      },
      "types": [
        "bug",
        "ghost"
      ],
      "abilitySlots": [
        "wonder_guard",
        null
      ]
    },
    "haunter": {
      "speciesId": "haunter",
      "names": {
        "en": "Haunter",
        "fr": "Spectrum"
      },
      "types": [
        "ghost",
        "poison"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "chimecho": {
      "speciesId": "chimecho",
      "names": {
        "en": "Chimecho",
        "fr": "Éoko"
      },
      "types": [
        "psychic"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "solrock": {
      "speciesId": "solrock",
      "names": {
        "en": "Solrock",
        "fr": "Solaroc"
      },
      "types": [
        "rock",
        "psychic"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "claydol": {
      "speciesId": "claydol",
      "names": {
        "en": "Claydol",
        "fr": "Kaorine"
      },
      "types": [
        "ground",
        "psychic"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "flygon": {
      "speciesId": "flygon",
      "names": {
        "en": "Flygon",
        "fr": "Libégon"
      },
      "types": [
        "ground",
        "dragon"
      ],
      "abilitySlots": [
        "levitate",
        "levitate"
      ]
    },
    "diglett": {
      "speciesId": "diglett",
      "names": {
        "en": "Diglett",
        "fr": "Taupiqueur"
      },
      "types": [
        "ground"
      ],
      "abilitySlots": [
        "sand_veil",
        "arena_trap"
      ]
    },
    "trapinch": {
      "speciesId": "trapinch",
      "names": {
        "en": "Trapinch",
        "fr": "Kraknoix"
      },
      "types": [
        "ground"
      ],
      "abilitySlots": [
        "hyper_cutter",
        "arena_trap"
      ]
    },
    "wynaut": {
      "speciesId": "wynaut",
      "names": {
        "en": "Wynaut",
        "fr": "Okéoké"
      },
      "types": [
        "psychic"
      ],
      "abilitySlots": [
        "shadow_tag",
        null
      ]
    },
    "wobbuffet": {
      "speciesId": "wobbuffet",
      "names": {
        "en": "Wobbuffet",
        "fr": "Qulbutoké"
      },
      "types": [
        "psychic"
      ],
      "abilitySlots": [
        "shadow_tag",
        null
      ]
    },
    "dugtrio": {
      "speciesId": "dugtrio",
      "names": {
        "en": "Dugtrio",
        "fr": "Triopikeur"
      },
      "types": [
        "ground"
      ],
      "abilitySlots": [
        "sand_veil",
        "arena_trap"
      ]
    },
    "glalie": {
      "speciesId": "glalie",
      "names": {
        "en": "Glalie",
        "fr": "Oniglali"
      },
      "types": [
        "ice"
      ],
      "abilitySlots": [
        "inner_focus",
        null
      ]
    },
    "sneasel": {
      "speciesId": "sneasel",
      "names": {
        "en": "Sneasel",
        "fr": "Farfuret"
      },
      "types": [
        "dark",
        "ice"
      ],
      "abilitySlots": [
        "inner_focus",
        "keen_eye"
      ]
    },
    "dewgong": {
      "speciesId": "dewgong",
      "names": {
        "en": "Dewgong",
        "fr": "Lamantine"
      },
      "types": [
        "water",
        "ice"
      ],
      "abilitySlots": [
        "thick_fat",
        null
      ]
    },
    "piloswine": {
      "speciesId": "piloswine",
      "names": {
        "en": "Piloswine",
        "fr": "Cochignon"
      },
      "types": [
        "ice",
        "ground"
      ],
      "abilitySlots": [
        "oblivious",
        null
      ]
    },
    "jynx": {
      "speciesId": "jynx",
      "names": {
        "en": "Jynx",
        "fr": "Lippoutou"
      },
      "types": [
        "ice",
        "psychic"
      ],
      "abilitySlots": [
        "oblivious",
        null
      ]
    },
    "cloyster": {
      "speciesId": "cloyster",
      "names": {
        "en": "Cloyster",
        "fr": "Crustabri"
      },
      "types": [
        "water",
        "ice"
      ],
      "abilitySlots": [
        "shell_armor",
        null
      ]
    },
    "walrein": {
      "speciesId": "walrein",
      "names": {
        "en": "Walrein",
        "fr": "Kaimorse"
      },
      "types": [
        "ice",
        "water"
      ],
      "abilitySlots": [
        "thick_fat",
        null
      ]
    },
    "lapras": {
      "speciesId": "lapras",
      "names": {
        "en": "Lapras",
        "fr": "Lokhlass"
      },
      "types": [
        "water",
        "ice"
      ],
      "abilitySlots": [
        "water_absorb",
        "shell_armor"
      ]
    },
    "electrode": {
      "speciesId": "electrode",
      "names": {
        "en": "Electrode",
        "fr": "Électrode"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "soundproof",
        "static"
      ]
    },
    "golem": {
      "speciesId": "golem",
      "names": {
        "en": "Golem",
        "fr": "Grolem"
      },
      "types": [
        "rock",
        "ground"
      ],
      "abilitySlots": [
        "rock_head",
        "sturdy"
      ]
    },
    "pineco": {
      "speciesId": "pineco",
      "names": {
        "en": "Pineco",
        "fr": "Pomdepik"
      },
      "types": [
        "bug"
      ],
      "abilitySlots": [
        "sturdy",
        null
      ]
    },
    "forretress": {
      "speciesId": "forretress",
      "names": {
        "en": "Forretress",
        "fr": "Foretress"
      },
      "types": [
        "bug",
        "steel"
      ],
      "abilitySlots": [
        "sturdy",
        null
      ]
    },
    "shiftry": {
      "speciesId": "shiftry",
      "names": {
        "en": "Shiftry",
        "fr": "Tengalice"
      },
      "types": [
        "grass",
        "dark"
      ],
      "abilitySlots": [
        "chlorophyll",
        "early_bird"
      ]
    },
    "metang": {
      "speciesId": "metang",
      "names": {
        "en": "Metang",
        "fr": "Métang"
      },
      "types": [
        "steel"
      ],
      "abilitySlots": [
        "clear_body",
        null
      ]
    },
    "exeggutor": {
      "speciesId": "exeggutor",
      "names": {
        "en": "Exeggutor",
        "fr": "Noadkoko"
      },
      "types": [
        "grass",
        "psychic"
      ],
      "abilitySlots": [
        "chlorophyll",
        null
      ]
    },
    "slowking": {
      "speciesId": "slowking",
      "names": {
        "en": "Slowking",
        "fr": "Roigada"
      },
      "types": [
        "water",
        "psychic"
      ],
      "abilitySlots": [
        "oblivious",
        "own_tempo"
      ]
    },
    "xatu": {
      "speciesId": "xatu",
      "names": {
        "en": "Xatu",
        "fr": "Xatu"
      },
      "types": [
        "psychic",
        "flying"
      ],
      "abilitySlots": [
        "synchronize",
        "early_bird"
      ]
    },
    "alakazam": {
      "speciesId": "alakazam",
      "names": {
        "en": "Alakazam",
        "fr": "Alakazam"
      },
      "types": [
        "psychic"
      ],
      "abilitySlots": [
        "synchronize",
        "inner_focus"
      ]
    },
    "starmie": {
      "speciesId": "starmie",
      "names": {
        "en": "Starmie",
        "fr": "Staross"
      },
      "types": [
        "water",
        "psychic"
      ],
      "abilitySlots": [
        "illuminate",
        "natural_cure"
      ]
    },
    "espeon": {
      "speciesId": "espeon",
      "names": {
        "en": "Espeon",
        "fr": "Mentali"
      },
      "types": [
        "psychic"
      ],
      "abilitySlots": [
        "synchronize",
        null
      ]
    },
    "steelix": {
      "speciesId": "steelix",
      "names": {
        "en": "Steelix",
        "fr": "Steelix"
      },
      "types": [
        "steel",
        "ground"
      ],
      "abilitySlots": [
        "rock_head",
        "sturdy"
      ]
    },
    "omastar": {
      "speciesId": "omastar",
      "names": {
        "en": "Omastar",
        "fr": "Amonistar"
      },
      "types": [
        "rock",
        "water"
      ],
      "abilitySlots": [
        "swift_swim",
        "shell_armor"
      ]
    },
    "lunatone": {
      "speciesId": "lunatone",
      "names": {
        "en": "Lunatone",
        "fr": "Séléroc"
      },
      "types": [
        "rock",
        "psychic"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "shuckle": {
      "speciesId": "shuckle",
      "names": {
        "en": "Shuckle",
        "fr": "Caratroc"
      },
      "types": [
        "bug",
        "rock"
      ],
      "abilitySlots": [
        "sturdy",
        null
      ]
    },
    "armaldo": {
      "speciesId": "armaldo",
      "names": {
        "en": "Armaldo",
        "fr": "Armaldo"
      },
      "types": [
        "rock",
        "bug"
      ],
      "abilitySlots": [
        "battle_armor",
        null
      ]
    },
    "cradily": {
      "speciesId": "cradily",
      "names": {
        "en": "Cradily",
        "fr": "Vacilys"
      },
      "types": [
        "rock",
        "grass"
      ],
      "abilitySlots": [
        "suction_cups",
        null
      ]
    },
    "aerodactyl": {
      "speciesId": "aerodactyl",
      "names": {
        "en": "Aerodactyl",
        "fr": "Ptéra"
      },
      "types": [
        "rock",
        "flying"
      ],
      "abilitySlots": [
        "rock_head",
        "pressure"
      ]
    },
    "poliwrath": {
      "speciesId": "poliwrath",
      "names": {
        "en": "Poliwrath",
        "fr": "Tartard"
      },
      "types": [
        "water",
        "fighting"
      ],
      "abilitySlots": [
        "water_absorb",
        "damp"
      ]
    },
    "hariyama": {
      "speciesId": "hariyama",
      "names": {
        "en": "Hariyama",
        "fr": "Hariyama"
      },
      "types": [
        "fighting"
      ],
      "abilitySlots": [
        "thick_fat",
        "guts"
      ]
    },
    "hitmonchan": {
      "speciesId": "hitmonchan",
      "names": {
        "en": "Hitmonchan",
        "fr": "Tygnon"
      },
      "types": [
        "fighting"
      ],
      "abilitySlots": [
        "keen_eye",
        null
      ]
    },
    "hitmonlee": {
      "speciesId": "hitmonlee",
      "names": {
        "en": "Hitmonlee",
        "fr": "Kicklee"
      },
      "types": [
        "fighting"
      ],
      "abilitySlots": [
        "limber",
        null
      ]
    },
    "heracross": {
      "speciesId": "heracross",
      "names": {
        "en": "Heracross",
        "fr": "Scarhino"
      },
      "types": [
        "bug",
        "fighting"
      ],
      "abilitySlots": [
        "swarm",
        "guts"
      ]
    },
    "machamp": {
      "speciesId": "machamp",
      "names": {
        "en": "Machamp",
        "fr": "Mackogneur"
      },
      "types": [
        "fighting"
      ],
      "abilitySlots": [
        "guts",
        null
      ]
    },
    "quagsire": {
      "speciesId": "quagsire",
      "names": {
        "en": "Quagsire",
        "fr": "Maraiste"
      },
      "types": [
        "water",
        "ground"
      ],
      "abilitySlots": [
        "damp",
        "water_absorb"
      ]
    },
    "tropius": {
      "speciesId": "tropius",
      "names": {
        "en": "Tropius",
        "fr": "Tropius"
      },
      "types": [
        "grass",
        "flying"
      ],
      "abilitySlots": [
        "chlorophyll",
        null
      ]
    },
    "pupitar": {
      "speciesId": "pupitar",
      "names": {
        "en": "Pupitar",
        "fr": "Ymphect"
      },
      "types": [
        "rock",
        "ground"
      ],
      "abilitySlots": [
        "shed_skin",
        null
      ]
    },
    "cacturne": {
      "speciesId": "cacturne",
      "names": {
        "en": "Cacturne",
        "fr": "Cacturne"
      },
      "types": [
        "grass",
        "dark"
      ],
      "abilitySlots": [
        "sand_veil",
        null
      ]
    },
    "flareon": {
      "speciesId": "flareon",
      "names": {
        "en": "Flareon",
        "fr": "Pyroli"
      },
      "types": [
        "fire"
      ],
      "abilitySlots": [
        "flash_fire",
        null
      ]
    },
    "gyarados": {
      "speciesId": "gyarados",
      "names": {
        "en": "Gyarados",
        "fr": "Léviator"
      },
      "types": [
        "water",
        "flying"
      ],
      "abilitySlots": [
        "intimidate",
        null
      ]
    },
    "venomoth": {
      "speciesId": "venomoth",
      "names": {
        "en": "Venomoth",
        "fr": "Aéromite"
      },
      "types": [
        "bug",
        "poison"
      ],
      "abilitySlots": [
        "shield_dust",
        null
      ]
    },
    "scizor": {
      "speciesId": "scizor",
      "names": {
        "en": "Scizor",
        "fr": "Cizayox"
      },
      "types": [
        "bug",
        "steel"
      ],
      "abilitySlots": [
        "swarm",
        null
      ]
    },
    "sableye": {
      "speciesId": "sableye",
      "names": {
        "en": "Sableye",
        "fr": "Ténéfix"
      },
      "types": [
        "dark",
        "ghost"
      ],
      "abilitySlots": [
        "keen_eye",
        null
      ]
    },
    "crawdaunt": {
      "speciesId": "crawdaunt",
      "names": {
        "en": "Crawdaunt",
        "fr": "Colhomard"
      },
      "types": [
        "water",
        "dark"
      ],
      "abilitySlots": [
        "hyper_cutter",
        "shell_armor"
      ]
    },
    "umbreon": {
      "speciesId": "umbreon",
      "names": {
        "en": "Umbreon",
        "fr": "Noctali"
      },
      "types": [
        "dark"
      ],
      "abilitySlots": [
        "synchronize",
        null
      ]
    },
    "octillery": {
      "speciesId": "octillery",
      "names": {
        "en": "Octillery",
        "fr": "Octillery"
      },
      "types": [
        "water"
      ],
      "abilitySlots": [
        "suction_cups",
        null
      ]
    },
    "pelipper": {
      "speciesId": "pelipper",
      "names": {
        "en": "Pelipper",
        "fr": "Bekipan"
      },
      "types": [
        "water",
        "flying"
      ],
      "abilitySlots": [
        "keen_eye",
        null
      ]
    },
    "blastoise": {
      "speciesId": "blastoise",
      "names": {
        "en": "Blastoise",
        "fr": "Tortank"
      },
      "types": [
        "water"
      ],
      "abilitySlots": [
        "torrent",
        null
      ]
    },
    "duskull": {
      "speciesId": "duskull",
      "names": {
        "en": "Duskull",
        "fr": "Skelénox"
      },
      "types": [
        "ghost"
      ],
      "abilitySlots": [
        "levitate",
        null
      ]
    },
    "mawile": {
      "speciesId": "mawile",
      "names": {
        "en": "Mawile",
        "fr": "Mysdibule"
      },
      "types": [
        "steel"
      ],
      "abilitySlots": [
        "hyper_cutter",
        "intimidate"
      ]
    },
    "magneton": {
      "speciesId": "magneton",
      "names": {
        "en": "Magneton",
        "fr": "Magnéton"
      },
      "types": [
        "electric",
        "steel"
      ],
      "abilitySlots": [
        "magnet_pull",
        "sturdy"
      ]
    },
    "aggron": {
      "speciesId": "aggron",
      "names": {
        "en": "Aggron",
        "fr": "Galeking"
      },
      "types": [
        "steel",
        "rock"
      ],
      "abilitySlots": [
        "sturdy",
        "rock_head"
      ]
    },
    "metagross": {
      "speciesId": "metagross",
      "names": {
        "en": "Metagross",
        "fr": "Métalosse"
      },
      "types": [
        "steel",
        "psychic"
      ],
      "abilitySlots": [
        "clear_body",
        null
      ]
    },
    "dragonair": {
      "speciesId": "dragonair",
      "names": {
        "en": "Dragonair",
        "fr": "Draco"
      },
      "types": [
        "dragon"
      ],
      "abilitySlots": [
        "shed_skin",
        null
      ]
    },
    "vibrava": {
      "speciesId": "vibrava",
      "names": {
        "en": "Vibrava",
        "fr": "Vibraninf"
      },
      "types": [
        "ground",
        "dragon"
      ],
      "abilitySlots": [
        "levitate",
        "levitate"
      ]
    },
    "altaria": {
      "speciesId": "altaria",
      "names": {
        "en": "Altaria",
        "fr": "Altaria"
      },
      "types": [
        "dragon",
        "flying"
      ],
      "abilitySlots": [
        "natural_cure",
        null
      ]
    },
    "kingdra": {
      "speciesId": "kingdra",
      "names": {
        "en": "Kingdra",
        "fr": "Hyporoi"
      },
      "types": [
        "water",
        "dragon"
      ],
      "abilitySlots": [
        "swift_swim",
        null
      ]
    },
    "charizard": {
      "speciesId": "charizard",
      "names": {
        "en": "Charizard",
        "fr": "Dracaufeu"
      },
      "types": [
        "fire",
        "flying"
      ],
      "abilitySlots": [
        "blaze",
        null
      ]
    },
    "arcanine": {
      "speciesId": "arcanine",
      "names": {
        "en": "Arcanine",
        "fr": "Arcanin"
      },
      "types": [
        "fire"
      ],
      "abilitySlots": [
        "intimidate",
        "flash_fire"
      ]
    },
    "raichu": {
      "speciesId": "raichu",
      "names": {
        "en": "Raichu",
        "fr": "Raichu"
      },
      "types": [
        "electric"
      ],
      "abilitySlots": [
        "static",
        null
      ]
    },
    "vaporeon": {
      "speciesId": "vaporeon",
      "names": {
        "en": "Vaporeon",
        "fr": "Aquali"
      },
      "types": [
        "water"
      ],
      "abilitySlots": [
        "water_absorb",
        null
      ]
    },
    "kangaskhan": {
      "speciesId": "kangaskhan",
      "names": {
        "en": "Kangaskhan",
        "fr": "Kangourex"
      },
      "types": [
        "normal"
      ],
      "abilitySlots": [
        "early_bird",
        null
      ]
    },
    "swellow": {
      "speciesId": "swellow",
      "names": {
        "en": "Swellow",
        "fr": "Hélédelle"
      },
      "types": [
        "normal",
        "flying"
      ],
      "abilitySlots": [
        "guts",
        null
      ]
    },
    "ursaring": {
      "speciesId": "ursaring",
      "names": {
        "en": "Ursaring",
        "fr": "Ursaring"
      },
      "types": [
        "normal"
      ],
      "abilitySlots": [
        "guts",
        null
      ]
    },
    "porygon2": {
      "speciesId": "porygon2",
      "names": {
        "en": "Porygon2",
        "fr": "Porygon2"
      },
      "types": [
        "normal"
      ],
      "abilitySlots": [
        "trace",
        null
      ]
    },
    "tauros": {
      "speciesId": "tauros",
      "names": {
        "en": "Tauros",
        "fr": "Tauros"
      },
      "types": [
        "normal"
      ],
      "abilitySlots": [
        "intimidate",
        null
      ]
    },
    "fearow": {
      "speciesId": "fearow",
      "names": {
        "en": "Fearow",
        "fr": "Rapasdepic"
      },
      "types": [
        "normal",
        "flying"
      ],
      "abilitySlots": [
        "keen_eye",
        null
      ]
    },
    "snorlax": {
      "speciesId": "snorlax",
      "names": {
        "en": "Snorlax",
        "fr": "Ronflex"
      },
      "types": [
        "normal"
      ],
      "abilitySlots": [
        "immunity",
        "thick_fat"
      ]
    },
    "slaking": {
      "speciesId": "slaking",
      "names": {
        "en": "Slaking",
        "fr": "Monaflèmit"
      },
      "types": [
        "normal"
      ],
      "abilitySlots": [
        "truant",
        null
      ]
    }
  },
  "rounds": {
    "level50": [
      [
        {
          "speciesId": "plusle",
          "levelValue": 35,
          "abilitySelection": "random",
          "abilities": [
            "plus"
          ],
          "moves": [
            "thunder_wave",
            "spark",
            "encore"
          ]
        },
        {
          "speciesId": "minun",
          "levelValue": 35,
          "abilitySelection": "random",
          "abilities": [
            "minus"
          ],
          "moves": [
            "thunder_wave",
            "thunderbolt",
            "quick_attack"
          ]
        },
        {
          "speciesId": "pikachu",
          "levelValue": 37,
          "abilitySelection": "random",
          "abilities": [
            "static"
          ],
          "moves": [
            "thunder_wave",
            "thunderbolt",
            "slam"
          ]
        },
        {
          "speciesId": "electabuzz",
          "levelValue": 37,
          "abilitySelection": "random",
          "abilities": [
            "static"
          ],
          "moves": [
            "thunderpunch",
            "swift",
            "screech"
          ]
        },
        {
          "speciesId": "vileplume",
          "levelValue": 39,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll"
          ],
          "moves": [
            "stun_spore",
            "giga_drain",
            "protect"
          ]
        },
        {
          "speciesId": "manectric",
          "levelValue": 39,
          "abilitySelection": "random",
          "abilities": [
            "static",
            "lightning_rod"
          ],
          "moves": [
            "thunder_wave",
            "thunder",
            "quick_attack"
          ]
        },
        {
          "speciesId": "breloom",
          "levelValue": 40,
          "abilitySelection": "random",
          "abilities": [
            "effect_spore"
          ],
          "moves": [
            "stun_spore",
            "focus_punch",
            "giga_drain",
            "mach_punch"
          ]
        },
        {
          "speciesId": "jolteon",
          "levelValue": 40,
          "abilitySelection": "random",
          "abilities": [
            "volt_absorb"
          ],
          "moves": [
            "thunder_wave",
            "thunder",
            "pin_missile",
            "quick_attack"
          ]
        }
      ],
      [
        {
          "speciesId": "gulpin",
          "levelValue": 36,
          "abilitySelection": "random",
          "abilities": [
            "liquid_ooze",
            "sticky_hold"
          ],
          "moves": [
            "toxic",
            "sludge",
            "protect"
          ]
        },
        {
          "speciesId": "roselia",
          "levelValue": 36,
          "abilitySelection": "random",
          "abilities": [
            "natural_cure",
            "poison_point"
          ],
          "moves": [
            "toxic",
            "giga_drain",
            "magical_leaf",
            "petal_dance"
          ]
        },
        {
          "speciesId": "butterfree",
          "levelValue": 38,
          "abilitySelection": "random",
          "abilities": [
            "compound_eyes"
          ],
          "moves": [
            "poison_powder",
            "gust",
            "psybeam"
          ]
        },
        {
          "speciesId": "seviper",
          "levelValue": 38,
          "abilitySelection": "random",
          "abilities": [
            "shed_skin"
          ],
          "moves": [
            "poison_fang",
            "swagger",
            "crunch",
            "poison_tail"
          ]
        },
        {
          "speciesId": "skarmory",
          "levelValue": 40,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye",
            "sturdy"
          ],
          "moves": [
            "toxic",
            "fly",
            "steel_wing"
          ]
        },
        {
          "speciesId": "ludicolo",
          "levelValue": 40,
          "abilitySelection": 1,
          "abilities": [
            "rain_dish"
          ],
          "moves": [
            "toxic",
            "protect",
            "dive",
            "rain_dance"
          ]
        },
        {
          "speciesId": "crobat",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus"
          ],
          "moves": [
            "toxic",
            "confuse_ray",
            "mean_look",
            "bite"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "toxic",
            "shadow_punch",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "growlithe",
          "levelValue": 37,
          "abilitySelection": "random",
          "abilities": [
            "intimidate",
            "flash_fire"
          ],
          "moves": [
            "flame_wheel",
            "take_down"
          ]
        },
        {
          "speciesId": "vulpix",
          "levelValue": 37,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "will_o_wisp",
            "flamethrower"
          ]
        },
        {
          "speciesId": "magcargo",
          "levelValue": 39,
          "abilitySelection": 1,
          "abilities": [
            "flame_body"
          ],
          "moves": [
            "flamethrower",
            "rock_slide",
            "protect"
          ]
        },
        {
          "speciesId": "ninetales",
          "levelValue": 39,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "will_o_wisp",
            "quick_attack",
            "flamethrower"
          ]
        },
        {
          "speciesId": "medicham",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "pure_power"
          ],
          "moves": [
            "fire_punch",
            "hi_jump_kick"
          ]
        },
        {
          "speciesId": "weezing",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "will_o_wisp",
            "flamethrower",
            "protect"
          ]
        },
        {
          "speciesId": "dusclops",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "will_o_wisp",
            "confuse_ray",
            "mean_look",
            "shadow_punch"
          ]
        },
        {
          "speciesId": "houndoom",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "early_bird",
            "flash_fire"
          ],
          "moves": [
            "flamethrower",
            "bite",
            "solarbeam",
            "overheat"
          ]
        }
      ],
      [
        {
          "speciesId": "dunsparce",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "serene_grace",
            "run_away"
          ],
          "moves": [
            "spite",
            "toxic",
            "protect"
          ]
        },
        {
          "speciesId": "banette",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "insomnia"
          ],
          "moves": [
            "grudge",
            "will_o_wisp",
            "night_shade"
          ]
        },
        {
          "speciesId": "misdreavus",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "grudge",
            "spite",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "ninetales",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "grudge",
            "will_o_wisp",
            "overheat"
          ]
        },
        {
          "speciesId": "absol",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "bite",
            "aerial_ace",
            "shadow_ball",
            "protect"
          ]
        },
        {
          "speciesId": "dusclops",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "will_o_wisp",
            "protect",
            "toxic",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "shedinja",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "wonder_guard"
          ],
          "moves": [
            "grudge",
            "toxic",
            "spite"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "grudge",
            "spite",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "haunter",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "night_shade",
            "thunderbolt",
            "sludge_bomb"
          ]
        },
        {
          "speciesId": "chimecho",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "double_edge",
            "toxic",
            "psychic",
            "protect"
          ]
        },
        {
          "speciesId": "solrock",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "rock_slide",
            "fire_blast",
            "toxic"
          ]
        },
        {
          "speciesId": "misdreavus",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "psychic",
            "spite",
            "shadow_ball",
            "pain_split"
          ]
        },
        {
          "speciesId": "claydol",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "ancientpower",
            "selfdestruct",
            "psychic"
          ]
        },
        {
          "speciesId": "weezing",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "sludge_bomb",
            "selfdestruct",
            "protect"
          ]
        },
        {
          "speciesId": "flygon",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "crunch",
            "dragon_claw",
            "dragonbreath"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "thunderbolt",
            "psychic",
            "giga_drain",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "diglett",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "sand_veil",
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "slash",
            "dig"
          ]
        },
        {
          "speciesId": "trapinch",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "hyper_cutter",
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "earthquake",
            "giga_drain"
          ]
        },
        {
          "speciesId": "wynaut",
          "levelValue": 42,
          "abilitySelection": 0,
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "destiny_bond",
            "splash",
            "counter",
            "mirror_coat"
          ]
        },
        {
          "speciesId": "diglett",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "sand_veil",
            "arena_trap"
          ],
          "moves": [
            "earthquake",
            "rock_slide",
            "magnitude",
            "toxic"
          ]
        },
        {
          "speciesId": "trapinch",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "hyper_cutter",
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "earthquake",
            "giga_drain",
            "protect"
          ]
        },
        {
          "speciesId": "wynaut",
          "levelValue": 44,
          "abilitySelection": 0,
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "counter",
            "mirror_coat",
            "destiny_bond"
          ]
        },
        {
          "speciesId": "wobbuffet",
          "levelValue": 45,
          "abilitySelection": 0,
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "counter",
            "mirror_coat",
            "destiny_bond"
          ]
        },
        {
          "speciesId": "dugtrio",
          "levelValue": 45,
          "abilitySelection": 1,
          "abilities": [
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "sludge_bomb",
            "earthquake",
            "protect"
          ]
        }
      ],
      [
        {
          "speciesId": "glalie",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus"
          ],
          "moves": [
            "ice_beam",
            "crunch",
            "protect"
          ]
        },
        {
          "speciesId": "sneasel",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus",
            "keen_eye"
          ],
          "moves": [
            "ice_beam",
            "crush_claw",
            "spite"
          ]
        },
        {
          "speciesId": "dewgong",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "blizzard",
            "double_edge",
            "surf"
          ]
        },
        {
          "speciesId": "piloswine",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "oblivious"
          ],
          "moves": [
            "ice_beam",
            "earthquake",
            "toxic"
          ]
        },
        {
          "speciesId": "jynx",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "oblivious"
          ],
          "moves": [
            "blizzard",
            "lovely_kiss",
            "psychic"
          ]
        },
        {
          "speciesId": "cloyster",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "shell_armor"
          ],
          "moves": [
            "ice_beam",
            "surf",
            "protect"
          ]
        },
        {
          "speciesId": "walrein",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "blizzard",
            "body_slam",
            "surf"
          ]
        },
        {
          "speciesId": "lapras",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "shell_armor"
          ],
          "moves": [
            "sing",
            "body_slam",
            "ice_beam",
            "psychic"
          ]
        }
      ],
      [
        {
          "speciesId": "weezing",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "selfdestruct",
            "sludge_bomb",
            "fire_blast"
          ]
        },
        {
          "speciesId": "electrode",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "soundproof",
            "static"
          ],
          "moves": [
            "selfdestruct",
            "thunderbolt",
            "rollout"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "destiny_bond",
            "lick",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "golem",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "selfdestruct",
            "protect",
            "earthquake"
          ]
        },
        {
          "speciesId": "pineco",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "double_edge",
            "giga_drain"
          ]
        },
        {
          "speciesId": "solrock",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "explosion",
            "fire_spin",
            "psywave"
          ]
        },
        {
          "speciesId": "forretress",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "toxic",
            "rock_slide"
          ]
        },
        {
          "speciesId": "shiftry",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll",
            "early_bird"
          ],
          "moves": [
            "explosion",
            "giga_drain",
            "solarbeam",
            "protect"
          ]
        }
      ],
      [
        {
          "speciesId": "wobbuffet",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "counter",
            "mirror_coat",
            "safeguard",
            "destiny_bond"
          ]
        },
        {
          "speciesId": "metang",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "clear_body"
          ],
          "moves": [
            "earthquake",
            "toxic",
            "sludge_bomb",
            "psychic"
          ]
        },
        {
          "speciesId": "exeggutor",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll"
          ],
          "moves": [
            "egg_bomb",
            "psychic",
            "hypnosis"
          ]
        },
        {
          "speciesId": "slowking",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "oblivious",
            "own_tempo"
          ],
          "moves": [
            "shadow_ball",
            "surf",
            "ice_beam",
            "flamethrower"
          ]
        },
        {
          "speciesId": "xatu",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "synchronize",
            "early_bird"
          ],
          "moves": [
            "confuse_ray",
            "shadow_ball",
            "psychic",
            "steel_wing"
          ]
        },
        {
          "speciesId": "alakazam",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "synchronize",
            "inner_focus"
          ],
          "moves": [
            "psychic",
            "fire_punch",
            "ice_punch",
            "toxic"
          ]
        },
        {
          "speciesId": "starmie",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "illuminate",
            "natural_cure"
          ],
          "moves": [
            "psychic",
            "thunderbolt",
            "surf",
            "ice_beam"
          ]
        },
        {
          "speciesId": "espeon",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "synchronize"
          ],
          "moves": [
            "psychic",
            "dig",
            "shadow_ball"
          ]
        }
      ],
      [
        {
          "speciesId": "golem",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "selfdestruct",
            "earthquake",
            "protect"
          ]
        },
        {
          "speciesId": "steelix",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "iron_tail",
            "crunch",
            "earthquake"
          ]
        },
        {
          "speciesId": "omastar",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "swift_swim",
            "shell_armor"
          ],
          "moves": [
            "surf",
            "mud_shot",
            "ancientpower"
          ]
        },
        {
          "speciesId": "lunatone",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "hypnosis",
            "psywave",
            "explosion"
          ]
        },
        {
          "speciesId": "shuckle",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "toxic",
            "protect",
            "wrap"
          ]
        },
        {
          "speciesId": "armaldo",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "battle_armor"
          ],
          "moves": [
            "ancientpower",
            "protect",
            "aerial_ace"
          ]
        },
        {
          "speciesId": "cradily",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "suction_cups"
          ],
          "moves": [
            "sludge_bomb",
            "giga_drain",
            "confuse_ray"
          ]
        },
        {
          "speciesId": "aerodactyl",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "pressure"
          ],
          "moves": [
            "hyper_beam",
            "rock_slide",
            "bite"
          ]
        }
      ],
      [
        {
          "speciesId": "poliwrath",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "damp"
          ],
          "moves": [
            "submission",
            "focus_punch",
            "surf"
          ]
        },
        {
          "speciesId": "hariyama",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat",
            "guts"
          ],
          "moves": [
            "fake_out",
            "surf",
            "focus_punch"
          ]
        },
        {
          "speciesId": "breloom",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "effect_spore"
          ],
          "moves": [
            "spore",
            "focus_punch",
            "protect"
          ]
        },
        {
          "speciesId": "medicham",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "pure_power"
          ],
          "moves": [
            "thunderpunch",
            "fire_punch",
            "ice_punch",
            "focus_punch"
          ]
        },
        {
          "speciesId": "hitmonchan",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "thunderpunch",
            "fire_punch",
            "ice_punch",
            "focus_punch"
          ]
        },
        {
          "speciesId": "hitmonlee",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "limber"
          ],
          "moves": [
            "mega_kick",
            "focus_punch"
          ]
        },
        {
          "speciesId": "heracross",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "swarm",
            "guts"
          ],
          "moves": [
            "megahorn",
            "earthquake",
            "focus_punch",
            "rock_slide"
          ]
        },
        {
          "speciesId": "machamp",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "guts"
          ],
          "moves": [
            "rock_slide",
            "earthquake",
            "focus_punch",
            "seismic_toss"
          ]
        }
      ],
      [
        {
          "speciesId": "quagsire",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "damp",
            "water_absorb"
          ],
          "moves": [
            "rain_dance",
            "surf",
            "protect"
          ]
        },
        {
          "speciesId": "tropius",
          "levelValue": 41,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll"
          ],
          "moves": [
            "sunny_day",
            "solarbeam"
          ]
        },
        {
          "speciesId": "pupitar",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "shed_skin"
          ],
          "moves": [
            "sandstorm",
            "earthquake",
            "rock_slide"
          ]
        },
        {
          "speciesId": "lapras",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "shell_armor"
          ],
          "moves": [
            "hail",
            "ice_beam"
          ]
        },
        {
          "speciesId": "cacturne",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "sand_veil"
          ],
          "moves": [
            "sandstorm",
            "giga_drain",
            "solarbeam"
          ]
        },
        {
          "speciesId": "flareon",
          "levelValue": 44,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "sunny_day",
            "flamethrower",
            "protect"
          ]
        },
        {
          "speciesId": "walrein",
          "levelValue": 45,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "hail",
            "ice_beam"
          ]
        },
        {
          "speciesId": "gyarados",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "intimidate"
          ],
          "moves": [
            "rain_dance",
            "thunder",
            "hydro_pump"
          ]
        }
      ],
      [
        {
          "speciesId": "pineco",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "take_down"
          ]
        },
        {
          "speciesId": "shuckle",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "toxic",
            "earthquake",
            "protect"
          ]
        },
        {
          "speciesId": "venomoth",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "shield_dust"
          ],
          "moves": [
            "silver_wind",
            "poison_powder",
            "sleep_powder",
            "psychic"
          ]
        },
        {
          "speciesId": "scizor",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "swarm"
          ],
          "moves": [
            "quick_attack",
            "metal_claw",
            "fury_cutter",
            "pursuit"
          ]
        },
        {
          "speciesId": "heracross",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "swarm",
            "guts"
          ],
          "moves": [
            "megahorn",
            "brick_break",
            "earthquake",
            "rock_slide"
          ]
        },
        {
          "speciesId": "forretress",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "earthquake",
            "protect"
          ]
        },
        {
          "speciesId": "armaldo",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "battle_armor"
          ],
          "moves": [
            "water_pulse",
            "protect",
            "rock_slide"
          ]
        },
        {
          "speciesId": "shedinja",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "wonder_guard"
          ],
          "moves": [
            "shadow_ball",
            "toxic",
            "spite",
            "grudge"
          ]
        }
      ],
      [
        {
          "speciesId": "sableye",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "night_shade",
            "psychic",
            "aerial_ace"
          ]
        },
        {
          "speciesId": "sneasel",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus",
            "keen_eye"
          ],
          "moves": [
            "ice_beam",
            "taunt",
            "faint_attack",
            "quick_attack"
          ]
        },
        {
          "speciesId": "crawdaunt",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "hyper_cutter",
            "shell_armor"
          ],
          "moves": [
            "crabhammer",
            "ice_beam",
            "surf"
          ]
        },
        {
          "speciesId": "shiftry",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll",
            "early_bird"
          ],
          "moves": [
            "explosion",
            "shadow_ball",
            "aerial_ace",
            "giga_drain"
          ]
        },
        {
          "speciesId": "cacturne",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "sand_veil"
          ],
          "moves": [
            "toxic",
            "giga_drain",
            "needle_arm"
          ]
        },
        {
          "speciesId": "absol",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "bite",
            "protect",
            "slash"
          ]
        },
        {
          "speciesId": "houndoom",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "early_bird",
            "flash_fire"
          ],
          "moves": [
            "overheat",
            "crunch",
            "shadow_ball",
            "protect"
          ]
        },
        {
          "speciesId": "umbreon",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "synchronize"
          ],
          "moves": [
            "psychic",
            "shadow_ball",
            "iron_tail",
            "quick_attack"
          ]
        }
      ],
      [
        {
          "speciesId": "octillery",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "suction_cups"
          ],
          "moves": [
            "octazooka",
            "ice_beam",
            "fire_blast"
          ]
        },
        {
          "speciesId": "dewgong",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "water_pulse",
            "ice_beam",
            "headbutt"
          ]
        },
        {
          "speciesId": "pelipper",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "protect",
            "supersonic",
            "surf"
          ]
        },
        {
          "speciesId": "quagsire",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "damp",
            "water_absorb"
          ],
          "moves": [
            "earthquake",
            "rock_tomb",
            "surf"
          ]
        },
        {
          "speciesId": "ludicolo",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "swift_swim",
            "rain_dish"
          ],
          "moves": [
            "protect",
            "solarbeam",
            "toxic",
            "ice_beam"
          ]
        },
        {
          "speciesId": "slowking",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "oblivious",
            "own_tempo"
          ],
          "moves": [
            "psychic",
            "headbutt",
            "swagger"
          ]
        },
        {
          "speciesId": "starmie",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "illuminate",
            "natural_cure"
          ],
          "moves": [
            "water_pulse",
            "thunderbolt",
            "confuse_ray",
            "blizzard"
          ]
        },
        {
          "speciesId": "blastoise",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "torrent"
          ],
          "moves": [
            "hydro_pump",
            "bite",
            "ice_beam"
          ]
        }
      ],
      [
        {
          "speciesId": "duskull",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "night_shade",
            "will_o_wisp",
            "shadow_ball",
            "protect"
          ]
        },
        {
          "speciesId": "haunter",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "toxic",
            "spite",
            "hypnosis",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "banette",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "insomnia"
          ],
          "moves": [
            "shadow_ball",
            "spite",
            "will_o_wisp"
          ]
        },
        {
          "speciesId": "misdreavus",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "perish_song",
            "spite",
            "mean_look"
          ]
        },
        {
          "speciesId": "sableye",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "shadow_ball",
            "mean_look",
            "dig",
            "night_shade"
          ]
        },
        {
          "speciesId": "dusclops",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "will_o_wisp",
            "toxic",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "shedinja",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "wonder_guard"
          ],
          "moves": [
            "shadow_ball",
            "spite",
            "grudge",
            "protect"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "psychic",
            "destiny_bond",
            "spite",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "mawile",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "hyper_cutter",
            "intimidate"
          ],
          "moves": [
            "crunch",
            "toxic",
            "ice_beam"
          ]
        },
        {
          "speciesId": "magneton",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "magnet_pull",
            "sturdy"
          ],
          "moves": [
            "thunderbolt",
            "thunder_wave"
          ]
        },
        {
          "speciesId": "steelix",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "rock_throw",
            "double_edge",
            "earthquake"
          ]
        },
        {
          "speciesId": "scizor",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "swarm"
          ],
          "moves": [
            "metal_claw",
            "slash"
          ]
        },
        {
          "speciesId": "forretress",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "toxic"
          ]
        },
        {
          "speciesId": "skarmory",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye",
            "sturdy"
          ],
          "moves": [
            "steel_wing",
            "toxic",
            "fly",
            "protect"
          ]
        },
        {
          "speciesId": "aggron",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "sturdy",
            "rock_head"
          ],
          "moves": [
            "earthquake",
            "take_down",
            "surf",
            "ice_beam"
          ]
        },
        {
          "speciesId": "metagross",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "clear_body"
          ],
          "moves": [
            "earthquake",
            "psychic",
            "shadow_ball",
            "brick_break"
          ]
        }
      ],
      [
        {
          "speciesId": "dragonair",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "shed_skin"
          ],
          "moves": [
            "thunder_wave",
            "toxic",
            "ice_beam"
          ]
        },
        {
          "speciesId": "vibrava",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "dragonbreath",
            "crunch",
            "steel_wing"
          ]
        },
        {
          "speciesId": "altaria",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "natural_cure"
          ],
          "moves": [
            "earthquake",
            "dragon_claw",
            "sing",
            "protect"
          ]
        },
        {
          "speciesId": "flygon",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "dragon_claw",
            "fire_blast"
          ]
        },
        {
          "speciesId": "aerodactyl",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "pressure"
          ],
          "moves": [
            "earthquake",
            "rock_slide",
            "dragon_claw"
          ]
        },
        {
          "speciesId": "gyarados",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "intimidate"
          ],
          "moves": [
            "earthquake",
            "surf",
            "thrash",
            "bite"
          ]
        },
        {
          "speciesId": "kingdra",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "swift_swim"
          ],
          "moves": [
            "hydro_pump",
            "ice_beam",
            "protect"
          ]
        },
        {
          "speciesId": "charizard",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "blaze"
          ],
          "moves": [
            "flamethrower",
            "focus_punch",
            "fire_blast",
            "iron_tail"
          ]
        }
      ],
      [
        {
          "speciesId": "arcanine",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "intimidate",
            "flash_fire"
          ],
          "moves": [
            "fire_blast",
            "take_down"
          ]
        },
        {
          "speciesId": "poliwrath",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "damp"
          ],
          "moves": [
            "hydro_pump",
            "ice_beam"
          ]
        },
        {
          "speciesId": "raichu",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "static"
          ],
          "moves": [
            "thunder",
            "thunder_wave",
            "slam"
          ]
        },
        {
          "speciesId": "vaporeon",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb"
          ],
          "moves": [
            "surf",
            "ice_beam"
          ]
        },
        {
          "speciesId": "jolteon",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "volt_absorb"
          ],
          "moves": [
            "thunderbolt",
            "pin_missile"
          ]
        },
        {
          "speciesId": "flareon",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "flamethrower",
            "bite"
          ]
        },
        {
          "speciesId": "ninetales",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "flamethrower",
            "will_o_wisp",
            "protect"
          ]
        },
        {
          "speciesId": "starmie",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "illuminate",
            "natural_cure"
          ],
          "moves": [
            "ice_beam",
            "surf",
            "thunderbolt",
            "psychic"
          ]
        }
      ],
      [
        {
          "speciesId": "kangaskhan",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "early_bird"
          ],
          "moves": [
            "hyper_beam",
            "flamethrower",
            "surf",
            "dizzy_punch"
          ]
        },
        {
          "speciesId": "swellow",
          "levelValue": 42,
          "abilitySelection": "random",
          "abilities": [
            "guts"
          ],
          "moves": [
            "aerial_ace",
            "hyper_beam",
            "toxic"
          ]
        },
        {
          "speciesId": "ursaring",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "guts"
          ],
          "moves": [
            "hyper_beam",
            "earthquake",
            "focus_punch",
            "protect"
          ]
        },
        {
          "speciesId": "porygon2",
          "levelValue": 46,
          "abilitySelection": "random",
          "abilities": [
            "trace"
          ],
          "moves": [
            "psybeam",
            "hyper_beam",
            "shadow_ball",
            "ice_beam"
          ]
        },
        {
          "speciesId": "tauros",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "intimidate"
          ],
          "moves": [
            "earthquake",
            "hyper_beam",
            "surf",
            "thunderbolt"
          ]
        },
        {
          "speciesId": "fearow",
          "levelValue": 48,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "hyper_beam",
            "fly",
            "mirror_move",
            "protect"
          ]
        },
        {
          "speciesId": "snorlax",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "immunity",
            "thick_fat"
          ],
          "moves": [
            "hyper_beam",
            "body_slam",
            "shadow_ball",
            "earthquake"
          ]
        },
        {
          "speciesId": "slaking",
          "levelValue": 50,
          "abilitySelection": "random",
          "abilities": [
            "truant"
          ],
          "moves": [
            "hyper_beam",
            "earthquake",
            "shadow_ball",
            "ice_beam"
          ]
        }
      ]
    ],
    "open": [
      [
        {
          "speciesId": "plusle",
          "levelValue": 15,
          "abilitySelection": "random",
          "abilities": [
            "plus"
          ],
          "moves": [
            "thunder_wave",
            "spark",
            "encore"
          ]
        },
        {
          "speciesId": "minun",
          "levelValue": 15,
          "abilitySelection": "random",
          "abilities": [
            "minus"
          ],
          "moves": [
            "thunder_wave",
            "thunderbolt",
            "quick_attack"
          ]
        },
        {
          "speciesId": "pikachu",
          "levelValue": 13,
          "abilitySelection": "random",
          "abilities": [
            "static"
          ],
          "moves": [
            "thunder_wave",
            "thunderbolt",
            "slam"
          ]
        },
        {
          "speciesId": "electabuzz",
          "levelValue": 13,
          "abilitySelection": "random",
          "abilities": [
            "static"
          ],
          "moves": [
            "thunderpunch",
            "swift",
            "screech"
          ]
        },
        {
          "speciesId": "vileplume",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll"
          ],
          "moves": [
            "stun_spore",
            "giga_drain",
            "protect"
          ]
        },
        {
          "speciesId": "manectric",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "static",
            "lightning_rod"
          ],
          "moves": [
            "thunder_wave",
            "thunder",
            "quick_attack"
          ]
        },
        {
          "speciesId": "breloom",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "effect_spore"
          ],
          "moves": [
            "stun_spore",
            "focus_punch",
            "giga_drain",
            "mach_punch"
          ]
        },
        {
          "speciesId": "jolteon",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "volt_absorb"
          ],
          "moves": [
            "thunder_wave",
            "thunder",
            "pin_missile",
            "quick_attack"
          ]
        }
      ],
      [
        {
          "speciesId": "gulpin",
          "levelValue": 14,
          "abilitySelection": "random",
          "abilities": [
            "liquid_ooze",
            "sticky_hold"
          ],
          "moves": [
            "toxic",
            "sludge",
            "protect"
          ]
        },
        {
          "speciesId": "roselia",
          "levelValue": 14,
          "abilitySelection": "random",
          "abilities": [
            "natural_cure",
            "poison_point"
          ],
          "moves": [
            "toxic",
            "giga_drain",
            "magical_leaf",
            "petal_dance"
          ]
        },
        {
          "speciesId": "butterfree",
          "levelValue": 12,
          "abilitySelection": "random",
          "abilities": [
            "compound_eyes"
          ],
          "moves": [
            "poison_powder",
            "gust",
            "psybeam"
          ]
        },
        {
          "speciesId": "seviper",
          "levelValue": 12,
          "abilitySelection": "random",
          "abilities": [
            "shed_skin"
          ],
          "moves": [
            "poison_fang",
            "swagger",
            "crunch",
            "poison_tail"
          ]
        },
        {
          "speciesId": "skarmory",
          "levelValue": 7,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye",
            "sturdy"
          ],
          "moves": [
            "toxic",
            "fly",
            "steel_wing"
          ]
        },
        {
          "speciesId": "ludicolo",
          "levelValue": 7,
          "abilitySelection": 1,
          "abilities": [
            "rain_dish"
          ],
          "moves": [
            "toxic",
            "protect",
            "dive",
            "rain_dance"
          ]
        },
        {
          "speciesId": "crobat",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus"
          ],
          "moves": [
            "toxic",
            "confuse_ray",
            "mean_look",
            "bite"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "toxic",
            "shadow_punch",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "growlithe",
          "levelValue": 13,
          "abilitySelection": "random",
          "abilities": [
            "intimidate",
            "flash_fire"
          ],
          "moves": [
            "flame_wheel",
            "take_down"
          ]
        },
        {
          "speciesId": "vulpix",
          "levelValue": 13,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "will_o_wisp",
            "flamethrower"
          ]
        },
        {
          "speciesId": "magcargo",
          "levelValue": 11,
          "abilitySelection": 1,
          "abilities": [
            "flame_body"
          ],
          "moves": [
            "flamethrower",
            "rock_slide",
            "protect"
          ]
        },
        {
          "speciesId": "ninetales",
          "levelValue": 11,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "will_o_wisp",
            "quick_attack",
            "flamethrower"
          ]
        },
        {
          "speciesId": "medicham",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "pure_power"
          ],
          "moves": [
            "fire_punch",
            "hi_jump_kick"
          ]
        },
        {
          "speciesId": "weezing",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "will_o_wisp",
            "flamethrower",
            "protect"
          ]
        },
        {
          "speciesId": "dusclops",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "will_o_wisp",
            "confuse_ray",
            "mean_look",
            "shadow_punch"
          ]
        },
        {
          "speciesId": "houndoom",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "early_bird",
            "flash_fire"
          ],
          "moves": [
            "flamethrower",
            "bite",
            "solarbeam",
            "overheat"
          ]
        }
      ],
      [
        {
          "speciesId": "dunsparce",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "serene_grace",
            "run_away"
          ],
          "moves": [
            "spite",
            "toxic",
            "protect"
          ]
        },
        {
          "speciesId": "banette",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "insomnia"
          ],
          "moves": [
            "grudge",
            "will_o_wisp",
            "night_shade"
          ]
        },
        {
          "speciesId": "misdreavus",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "grudge",
            "spite",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "ninetales",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "grudge",
            "will_o_wisp",
            "overheat"
          ]
        },
        {
          "speciesId": "absol",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "bite",
            "aerial_ace",
            "shadow_ball",
            "protect"
          ]
        },
        {
          "speciesId": "dusclops",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "will_o_wisp",
            "protect",
            "toxic",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "shedinja",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "wonder_guard"
          ],
          "moves": [
            "grudge",
            "toxic",
            "spite"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "grudge",
            "spite",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "haunter",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "night_shade",
            "thunderbolt",
            "sludge_bomb"
          ]
        },
        {
          "speciesId": "chimecho",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "double_edge",
            "toxic",
            "psychic",
            "protect"
          ]
        },
        {
          "speciesId": "solrock",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "rock_slide",
            "fire_blast",
            "toxic"
          ]
        },
        {
          "speciesId": "misdreavus",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "psychic",
            "spite",
            "shadow_ball",
            "pain_split"
          ]
        },
        {
          "speciesId": "claydol",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "ancientpower",
            "selfdestruct",
            "psychic"
          ]
        },
        {
          "speciesId": "weezing",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "sludge_bomb",
            "selfdestruct",
            "protect"
          ]
        },
        {
          "speciesId": "flygon",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "crunch",
            "dragon_claw",
            "dragonbreath"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "thunderbolt",
            "psychic",
            "giga_drain",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "diglett",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "sand_veil",
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "slash",
            "dig"
          ]
        },
        {
          "speciesId": "trapinch",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "hyper_cutter",
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "earthquake",
            "giga_drain"
          ]
        },
        {
          "speciesId": "wynaut",
          "levelValue": 8,
          "abilitySelection": 0,
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "destiny_bond",
            "splash",
            "counter",
            "mirror_coat"
          ]
        },
        {
          "speciesId": "diglett",
          "levelValue": 8,
          "abilitySelection": 1,
          "abilities": [
            "arena_trap"
          ],
          "moves": [
            "earthquake",
            "rock_slide",
            "magnitude",
            "toxic"
          ]
        },
        {
          "speciesId": "trapinch",
          "levelValue": 6,
          "abilitySelection": 1,
          "abilities": [
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "earthquake",
            "giga_drain",
            "protect"
          ]
        },
        {
          "speciesId": "wynaut",
          "levelValue": 6,
          "abilitySelection": 0,
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "counter",
            "mirror_coat",
            "destiny_bond"
          ]
        },
        {
          "speciesId": "wobbuffet",
          "levelValue": 5,
          "abilitySelection": 0,
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "counter",
            "mirror_coat",
            "destiny_bond"
          ]
        },
        {
          "speciesId": "dugtrio",
          "levelValue": 5,
          "abilitySelection": 1,
          "abilities": [
            "arena_trap"
          ],
          "moves": [
            "rock_slide",
            "sludge_bomb",
            "earthquake",
            "protect"
          ]
        }
      ],
      [
        {
          "speciesId": "glalie",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus"
          ],
          "moves": [
            "ice_beam",
            "crunch",
            "protect"
          ]
        },
        {
          "speciesId": "sneasel",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus",
            "keen_eye"
          ],
          "moves": [
            "ice_beam",
            "crush_claw",
            "spite"
          ]
        },
        {
          "speciesId": "dewgong",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "blizzard",
            "double_edge",
            "surf"
          ]
        },
        {
          "speciesId": "piloswine",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "oblivious"
          ],
          "moves": [
            "ice_beam",
            "earthquake",
            "toxic"
          ]
        },
        {
          "speciesId": "jynx",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "oblivious"
          ],
          "moves": [
            "blizzard",
            "lovely_kiss",
            "psychic"
          ]
        },
        {
          "speciesId": "cloyster",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "shell_armor"
          ],
          "moves": [
            "ice_beam",
            "surf",
            "protect"
          ]
        },
        {
          "speciesId": "walrein",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "blizzard",
            "body_slam",
            "surf"
          ]
        },
        {
          "speciesId": "lapras",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "shell_armor"
          ],
          "moves": [
            "sing",
            "body_slam",
            "ice_beam",
            "psychic"
          ]
        }
      ],
      [
        {
          "speciesId": "weezing",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "selfdestruct",
            "sludge_bomb",
            "fire_blast"
          ]
        },
        {
          "speciesId": "electrode",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "soundproof",
            "static"
          ],
          "moves": [
            "selfdestruct",
            "thunderbolt",
            "rollout"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "destiny_bond",
            "lick",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "golem",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "selfdestruct",
            "protect",
            "earthquake"
          ]
        },
        {
          "speciesId": "pineco",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "double_edge",
            "giga_drain"
          ]
        },
        {
          "speciesId": "solrock",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "explosion",
            "fire_spin",
            "psywave"
          ]
        },
        {
          "speciesId": "forretress",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "toxic",
            "rock_slide"
          ]
        },
        {
          "speciesId": "shiftry",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll",
            "early_bird"
          ],
          "moves": [
            "explosion",
            "giga_drain",
            "solarbeam",
            "protect"
          ]
        }
      ],
      [
        {
          "speciesId": "wobbuffet",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "shadow_tag"
          ],
          "moves": [
            "counter",
            "mirror_coat",
            "safeguard",
            "destiny_bond"
          ]
        },
        {
          "speciesId": "metang",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "clear_body"
          ],
          "moves": [
            "earthquake",
            "toxic",
            "sludge_bomb",
            "psychic"
          ]
        },
        {
          "speciesId": "exeggutor",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll"
          ],
          "moves": [
            "egg_bomb",
            "psychic",
            "hypnosis"
          ]
        },
        {
          "speciesId": "slowking",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "oblivious",
            "own_tempo"
          ],
          "moves": [
            "shadow_ball",
            "surf",
            "ice_beam",
            "flamethrower"
          ]
        },
        {
          "speciesId": "xatu",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "synchronize",
            "early_bird"
          ],
          "moves": [
            "confuse_ray",
            "shadow_ball",
            "psychic",
            "steel_wing"
          ]
        },
        {
          "speciesId": "alakazam",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "synchronize",
            "inner_focus"
          ],
          "moves": [
            "psychic",
            "fire_punch",
            "ice_punch",
            "toxic"
          ]
        },
        {
          "speciesId": "starmie",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "illuminate",
            "natural_cure"
          ],
          "moves": [
            "psychic",
            "thunderbolt",
            "surf",
            "ice_beam"
          ]
        },
        {
          "speciesId": "espeon",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "synchronize"
          ],
          "moves": [
            "psychic",
            "dig",
            "shadow_ball"
          ]
        }
      ],
      [
        {
          "speciesId": "golem",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "selfdestruct",
            "earthquake",
            "protect"
          ]
        },
        {
          "speciesId": "steelix",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "iron_tail",
            "crunch",
            "earthquake"
          ]
        },
        {
          "speciesId": "omastar",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "swift_swim",
            "shell_armor"
          ],
          "moves": [
            "surf",
            "mud_shot",
            "ancientpower"
          ]
        },
        {
          "speciesId": "lunatone",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "hypnosis",
            "psywave",
            "explosion"
          ]
        },
        {
          "speciesId": "shuckle",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "toxic",
            "protect",
            "wrap"
          ]
        },
        {
          "speciesId": "armaldo",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "battle_armor"
          ],
          "moves": [
            "ancientpower",
            "protect",
            "aerial_ace"
          ]
        },
        {
          "speciesId": "cradily",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "suction_cups"
          ],
          "moves": [
            "sludge_bomb",
            "giga_drain",
            "confuse_ray"
          ]
        },
        {
          "speciesId": "aerodactyl",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "pressure"
          ],
          "moves": [
            "hyper_beam",
            "rock_slide",
            "bite"
          ]
        }
      ],
      [
        {
          "speciesId": "poliwrath",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "damp"
          ],
          "moves": [
            "submission",
            "focus_punch",
            "surf"
          ]
        },
        {
          "speciesId": "hariyama",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat",
            "guts"
          ],
          "moves": [
            "fake_out",
            "surf",
            "focus_punch"
          ]
        },
        {
          "speciesId": "breloom",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "effect_spore"
          ],
          "moves": [
            "spore",
            "focus_punch",
            "protect"
          ]
        },
        {
          "speciesId": "medicham",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "pure_power"
          ],
          "moves": [
            "thunderpunch",
            "fire_punch",
            "ice_punch",
            "focus_punch"
          ]
        },
        {
          "speciesId": "hitmonchan",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "thunderpunch",
            "fire_punch",
            "ice_punch",
            "focus_punch"
          ]
        },
        {
          "speciesId": "hitmonlee",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "limber"
          ],
          "moves": [
            "mega_kick",
            "focus_punch"
          ]
        },
        {
          "speciesId": "heracross",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "swarm",
            "guts"
          ],
          "moves": [
            "megahorn",
            "earthquake",
            "focus_punch",
            "rock_slide"
          ]
        },
        {
          "speciesId": "machamp",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "guts"
          ],
          "moves": [
            "rock_slide",
            "earthquake",
            "focus_punch",
            "seismic_toss"
          ]
        }
      ],
      [
        {
          "speciesId": "quagsire",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "damp",
            "water_absorb"
          ],
          "moves": [
            "rain_dance",
            "surf",
            "protect"
          ]
        },
        {
          "speciesId": "tropius",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll"
          ],
          "moves": [
            "sunny_day",
            "solarbeam"
          ]
        },
        {
          "speciesId": "pupitar",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "shed_skin"
          ],
          "moves": [
            "sandstorm",
            "earthquake",
            "rock_slide"
          ]
        },
        {
          "speciesId": "lapras",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "shell_armor"
          ],
          "moves": [
            "hail",
            "ice_beam"
          ]
        },
        {
          "speciesId": "cacturne",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "sand_veil"
          ],
          "moves": [
            "sandstorm",
            "giga_drain",
            "solarbeam"
          ]
        },
        {
          "speciesId": "flareon",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "sunny_day",
            "flamethrower",
            "protect"
          ]
        },
        {
          "speciesId": "walrein",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "hail",
            "ice_beam"
          ]
        },
        {
          "speciesId": "gyarados",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "intimidate"
          ],
          "moves": [
            "rain_dance",
            "thunder",
            "hydro_pump"
          ]
        }
      ],
      [
        {
          "speciesId": "pineco",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "take_down"
          ]
        },
        {
          "speciesId": "shuckle",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "toxic",
            "earthquake",
            "protect"
          ]
        },
        {
          "speciesId": "venomoth",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "shield_dust"
          ],
          "moves": [
            "silver_wind",
            "poison_powder",
            "sleep_powder",
            "psychic"
          ]
        },
        {
          "speciesId": "scizor",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "swarm"
          ],
          "moves": [
            "quick_attack",
            "metal_claw",
            "fury_cutter",
            "pursuit"
          ]
        },
        {
          "speciesId": "heracross",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "swarm",
            "guts"
          ],
          "moves": [
            "megahorn",
            "brick_break",
            "earthquake",
            "rock_slide"
          ]
        },
        {
          "speciesId": "forretress",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "earthquake",
            "protect"
          ]
        },
        {
          "speciesId": "armaldo",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "battle_armor"
          ],
          "moves": [
            "water_pulse",
            "protect",
            "rock_slide"
          ]
        },
        {
          "speciesId": "shedinja",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "wonder_guard"
          ],
          "moves": [
            "shadow_ball",
            "toxic",
            "spite",
            "grudge"
          ]
        }
      ],
      [
        {
          "speciesId": "sableye",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "night_shade",
            "psychic",
            "aerial_ace"
          ]
        },
        {
          "speciesId": "sneasel",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "inner_focus",
            "keen_eye"
          ],
          "moves": [
            "ice_beam",
            "taunt",
            "faint_attack",
            "quick_attack"
          ]
        },
        {
          "speciesId": "crawdaunt",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "hyper_cutter",
            "shell_armor"
          ],
          "moves": [
            "crabhammer",
            "ice_beam",
            "surf"
          ]
        },
        {
          "speciesId": "shiftry",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "chlorophyll",
            "early_bird"
          ],
          "moves": [
            "explosion",
            "shadow_ball",
            "aerial_ace",
            "giga_drain"
          ]
        },
        {
          "speciesId": "cacturne",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "sand_veil"
          ],
          "moves": [
            "toxic",
            "giga_drain",
            "needle_arm"
          ]
        },
        {
          "speciesId": "absol",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "bite",
            "protect",
            "slash"
          ]
        },
        {
          "speciesId": "houndoom",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "early_bird",
            "flash_fire"
          ],
          "moves": [
            "overheat",
            "crunch",
            "shadow_ball",
            "protect"
          ]
        },
        {
          "speciesId": "umbreon",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "synchronize"
          ],
          "moves": [
            "psychic",
            "shadow_ball",
            "iron_tail",
            "quick_attack"
          ]
        }
      ],
      [
        {
          "speciesId": "octillery",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "suction_cups"
          ],
          "moves": [
            "octazooka",
            "ice_beam",
            "fire_blast"
          ]
        },
        {
          "speciesId": "dewgong",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "thick_fat"
          ],
          "moves": [
            "water_pulse",
            "ice_beam",
            "headbutt"
          ]
        },
        {
          "speciesId": "pelipper",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "protect",
            "supersonic",
            "surf"
          ]
        },
        {
          "speciesId": "quagsire",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "damp",
            "water_absorb"
          ],
          "moves": [
            "earthquake",
            "rock_tomb",
            "surf"
          ]
        },
        {
          "speciesId": "ludicolo",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "swift_swim",
            "rain_dish"
          ],
          "moves": [
            "protect",
            "solarbeam",
            "toxic",
            "ice_beam"
          ]
        },
        {
          "speciesId": "slowking",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "oblivious",
            "own_tempo"
          ],
          "moves": [
            "psychic",
            "headbutt",
            "swagger"
          ]
        },
        {
          "speciesId": "starmie",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "illuminate",
            "natural_cure"
          ],
          "moves": [
            "water_pulse",
            "thunderbolt",
            "confuse_ray",
            "blizzard"
          ]
        },
        {
          "speciesId": "blastoise",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "torrent"
          ],
          "moves": [
            "hydro_pump",
            "bite",
            "ice_beam"
          ]
        }
      ],
      [
        {
          "speciesId": "duskull",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "night_shade",
            "will_o_wisp",
            "shadow_ball",
            "protect"
          ]
        },
        {
          "speciesId": "haunter",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "toxic",
            "spite",
            "hypnosis",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "banette",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "insomnia"
          ],
          "moves": [
            "shadow_ball",
            "spite",
            "will_o_wisp"
          ]
        },
        {
          "speciesId": "misdreavus",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "perish_song",
            "spite",
            "mean_look"
          ]
        },
        {
          "speciesId": "sableye",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "shadow_ball",
            "mean_look",
            "dig",
            "night_shade"
          ]
        },
        {
          "speciesId": "dusclops",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "pressure"
          ],
          "moves": [
            "will_o_wisp",
            "toxic",
            "shadow_ball"
          ]
        },
        {
          "speciesId": "shedinja",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "wonder_guard"
          ],
          "moves": [
            "shadow_ball",
            "spite",
            "grudge",
            "protect"
          ]
        },
        {
          "speciesId": "gengar",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "psychic",
            "destiny_bond",
            "spite",
            "night_shade"
          ]
        }
      ],
      [
        {
          "speciesId": "mawile",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "hyper_cutter",
            "intimidate"
          ],
          "moves": [
            "crunch",
            "toxic",
            "ice_beam"
          ]
        },
        {
          "speciesId": "magneton",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "magnet_pull",
            "sturdy"
          ],
          "moves": [
            "thunderbolt",
            "thunder_wave"
          ]
        },
        {
          "speciesId": "steelix",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "sturdy"
          ],
          "moves": [
            "rock_throw",
            "double_edge",
            "earthquake"
          ]
        },
        {
          "speciesId": "scizor",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "swarm"
          ],
          "moves": [
            "metal_claw",
            "slash"
          ]
        },
        {
          "speciesId": "forretress",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "sturdy"
          ],
          "moves": [
            "explosion",
            "toxic"
          ]
        },
        {
          "speciesId": "skarmory",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye",
            "sturdy"
          ],
          "moves": [
            "steel_wing",
            "toxic",
            "fly",
            "protect"
          ]
        },
        {
          "speciesId": "aggron",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "sturdy",
            "rock_head"
          ],
          "moves": [
            "earthquake",
            "take_down",
            "surf",
            "ice_beam"
          ]
        },
        {
          "speciesId": "metagross",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "clear_body"
          ],
          "moves": [
            "earthquake",
            "psychic",
            "shadow_ball",
            "brick_break"
          ]
        }
      ],
      [
        {
          "speciesId": "dragonair",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "shed_skin"
          ],
          "moves": [
            "thunder_wave",
            "toxic",
            "ice_beam"
          ]
        },
        {
          "speciesId": "vibrava",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "dragonbreath",
            "crunch",
            "steel_wing"
          ]
        },
        {
          "speciesId": "altaria",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "natural_cure"
          ],
          "moves": [
            "earthquake",
            "dragon_claw",
            "sing",
            "protect"
          ]
        },
        {
          "speciesId": "flygon",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "levitate"
          ],
          "moves": [
            "earthquake",
            "dragon_claw",
            "fire_blast"
          ]
        },
        {
          "speciesId": "aerodactyl",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "rock_head",
            "pressure"
          ],
          "moves": [
            "earthquake",
            "rock_slide",
            "dragon_claw"
          ]
        },
        {
          "speciesId": "gyarados",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "intimidate"
          ],
          "moves": [
            "earthquake",
            "surf",
            "thrash",
            "bite"
          ]
        },
        {
          "speciesId": "kingdra",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "swift_swim"
          ],
          "moves": [
            "hydro_pump",
            "ice_beam",
            "protect"
          ]
        },
        {
          "speciesId": "charizard",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "blaze"
          ],
          "moves": [
            "flamethrower",
            "focus_punch",
            "fire_blast",
            "iron_tail"
          ]
        }
      ],
      [
        {
          "speciesId": "arcanine",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "intimidate",
            "flash_fire"
          ],
          "moves": [
            "fire_blast",
            "take_down"
          ]
        },
        {
          "speciesId": "poliwrath",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb",
            "damp"
          ],
          "moves": [
            "hydro_pump",
            "ice_beam"
          ]
        },
        {
          "speciesId": "raichu",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "static"
          ],
          "moves": [
            "thunder",
            "thunder_wave",
            "slam"
          ]
        },
        {
          "speciesId": "vaporeon",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "water_absorb"
          ],
          "moves": [
            "surf",
            "ice_beam"
          ]
        },
        {
          "speciesId": "jolteon",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "volt_absorb"
          ],
          "moves": [
            "thunderbolt",
            "pin_missile"
          ]
        },
        {
          "speciesId": "flareon",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "flamethrower",
            "bite"
          ]
        },
        {
          "speciesId": "ninetales",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "flash_fire"
          ],
          "moves": [
            "flamethrower",
            "will_o_wisp",
            "protect"
          ]
        },
        {
          "speciesId": "starmie",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "illuminate",
            "natural_cure"
          ],
          "moves": [
            "ice_beam",
            "surf",
            "thunderbolt",
            "psychic"
          ]
        }
      ],
      [
        {
          "speciesId": "kangaskhan",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "early_bird"
          ],
          "moves": [
            "hyper_beam",
            "flamethrower",
            "surf",
            "dizzy_punch"
          ]
        },
        {
          "speciesId": "swellow",
          "levelValue": 10,
          "abilitySelection": "random",
          "abilities": [
            "guts"
          ],
          "moves": [
            "aerial_ace",
            "hyper_beam",
            "toxic"
          ]
        },
        {
          "speciesId": "ursaring",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "guts"
          ],
          "moves": [
            "hyper_beam",
            "earthquake",
            "focus_punch",
            "protect"
          ]
        },
        {
          "speciesId": "porygon2",
          "levelValue": 8,
          "abilitySelection": "random",
          "abilities": [
            "trace"
          ],
          "moves": [
            "psybeam",
            "hyper_beam",
            "shadow_ball",
            "ice_beam"
          ]
        },
        {
          "speciesId": "tauros",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "intimidate"
          ],
          "moves": [
            "earthquake",
            "hyper_beam",
            "surf",
            "thunderbolt"
          ]
        },
        {
          "speciesId": "fearow",
          "levelValue": 6,
          "abilitySelection": "random",
          "abilities": [
            "keen_eye"
          ],
          "moves": [
            "hyper_beam",
            "fly",
            "mirror_move",
            "protect"
          ]
        },
        {
          "speciesId": "snorlax",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "immunity",
            "thick_fat"
          ],
          "moves": [
            "hyper_beam",
            "body_slam",
            "shadow_ball",
            "earthquake"
          ]
        },
        {
          "speciesId": "slaking",
          "levelValue": 5,
          "abilitySelection": "random",
          "abilities": [
            "truant"
          ],
          "moves": [
            "hyper_beam",
            "earthquake",
            "shadow_ball",
            "ice_beam"
          ]
        }
      ]
    ]
  },
  "extraMoves": {
    "poison_powder": {
      "names": {
        "en": "Poison Powder",
        "fr": "Poudre Toxik"
      },
      "type": "poison"
    },
    "splash": {
      "names": {
        "en": "Splash",
        "fr": "Trempette"
      },
      "type": "normal"
    },
    "egg_bomb": {
      "names": {
        "en": "Egg Bomb",
        "fr": "Bomb’Œuf"
      },
      "type": "normal"
    }
  }
};
