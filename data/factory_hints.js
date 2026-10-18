// Generated from Emerald source by tools/generate-factory-pools.cjs.
window.factoryHints = {
  "meta": {
    "schemaVersion": 1,
    "sourceRepository": "https://github.com/pret/pokeemerald",
    "sourceCommit": "731ad5bfd6e6f265508d0efcca0ba42f9dcf5881",
    "files": [
      "src/battle_factory.c",
      "include/constants/battle_factory.h",
      "data/maps/BattleFrontier_BattleFactoryPreBattleRoom/scripts.inc",
      "src/data/text/move_names.h",
      "src/data/battle_moves.h"
    ]
  },
  "teamSize": 3,
  "movesPerPokemon": 4,
  "flexibleMinimumCategories": 3,
  "styles": [
    {
      "id": 0,
      "symbol": "FACTORY_STYLE_NONE",
      "phraseEnglish": "free-spirited and unrestrained."
    },
    {
      "id": 1,
      "symbol": "FACTORY_STYLE_PREPARATION",
      "sourceArray": "sMoves_TotalPreparation",
      "phraseEnglish": "one based on total preparation.",
      "minimum": 3,
      "moves": [
        "swords_dance",
        "growth",
        "meditate",
        "agility",
        "double_team",
        "harden",
        "minimize",
        "withdraw",
        "defense_curl",
        "barrier",
        "focus_energy",
        "amnesia",
        "acid_armor",
        "sharpen",
        "conversion",
        "conversion_2",
        "belly_drum",
        "psych_up",
        "charge",
        "snatch",
        "tail_glow",
        "cosmic_power",
        "iron_defense",
        "howl",
        "bulk_up",
        "calm_mind",
        "dragon_dance"
      ],
      "effectiveMoves": [
        "swords_dance",
        "growth",
        "meditate",
        "agility",
        "double_team",
        "harden",
        "minimize",
        "withdraw",
        "defense_curl",
        "barrier",
        "focus_energy",
        "amnesia",
        "acid_armor",
        "sharpen",
        "conversion",
        "conversion_2",
        "belly_drum",
        "psych_up",
        "charge",
        "snatch",
        "tail_glow",
        "cosmic_power",
        "iron_defense",
        "howl",
        "bulk_up",
        "calm_mind",
        "dragon_dance"
      ]
    },
    {
      "id": 2,
      "symbol": "FACTORY_STYLE_SLOW_STEADY",
      "sourceArray": "sMoves_SlowAndSteady",
      "phraseEnglish": "slow and steady.",
      "minimum": 3,
      "moves": [
        "sing",
        "supersonic",
        "disable",
        "leech_seed",
        "poison_powder",
        "stun_spore",
        "sleep_powder",
        "thunder_wave",
        "toxic",
        "hypnosis",
        "confuse_ray",
        "glare",
        "poison_gas",
        "lovely_kiss",
        "spore",
        "spider_web",
        "sweet_kiss",
        "spikes",
        "swagger",
        "mean_look",
        "attract",
        "encore",
        "torment",
        "flatter",
        "will_o_wisp",
        "taunt",
        "yawn",
        "imprison",
        "snatch",
        "teeter_dance",
        "grass_whistle",
        "block"
      ],
      "effectiveMoves": [
        "sing",
        "supersonic",
        "disable",
        "leech_seed",
        "poison_powder",
        "stun_spore",
        "sleep_powder",
        "thunder_wave",
        "toxic",
        "hypnosis",
        "confuse_ray",
        "glare",
        "poison_gas",
        "lovely_kiss",
        "spore",
        "spider_web",
        "sweet_kiss",
        "spikes",
        "swagger",
        "mean_look",
        "attract",
        "encore",
        "torment",
        "flatter",
        "will_o_wisp",
        "taunt",
        "yawn",
        "imprison",
        "teeter_dance",
        "grass_whistle",
        "block"
      ]
    },
    {
      "id": 3,
      "symbol": "FACTORY_STYLE_ENDURANCE",
      "sourceArray": "sMoves_Endurance",
      "phraseEnglish": "one of endurance.",
      "minimum": 3,
      "moves": [
        "mist",
        "recover",
        "light_screen",
        "haze",
        "reflect",
        "soft_boiled",
        "rest",
        "protect",
        "detect",
        "endure",
        "milk_drink",
        "heal_bell",
        "safeguard",
        "baton_pass",
        "morning_sun",
        "synthesis",
        "moonlight",
        "swallow",
        "wish",
        "ingrain",
        "magic_coat",
        "recycle",
        "refresh",
        "mud_sport",
        "slack_off",
        "aromatherapy",
        "water_sport"
      ],
      "effectiveMoves": [
        "mist",
        "recover",
        "light_screen",
        "haze",
        "reflect",
        "soft_boiled",
        "rest",
        "protect",
        "detect",
        "endure",
        "milk_drink",
        "heal_bell",
        "safeguard",
        "baton_pass",
        "morning_sun",
        "synthesis",
        "moonlight",
        "swallow",
        "wish",
        "ingrain",
        "magic_coat",
        "recycle",
        "refresh",
        "mud_sport",
        "slack_off",
        "aromatherapy",
        "water_sport"
      ]
    },
    {
      "id": 4,
      "symbol": "FACTORY_STYLE_HIGH_RISK",
      "sourceArray": "sMoves_HighRiskHighReturn",
      "phraseEnglish": "high risk, high return.",
      "minimum": 2,
      "moves": [
        "guillotine",
        "horn_drill",
        "double_edge",
        "hyper_beam",
        "counter",
        "fissure",
        "bide",
        "self_destruct",
        "sky_attack",
        "explosion",
        "flail",
        "reversal",
        "destiny_bond",
        "perish_song",
        "pain_split",
        "mirror_coat",
        "memento",
        "grudge",
        "facade",
        "focus_punch",
        "blast_burn",
        "hydro_cannon",
        "overheat",
        "frenzy_plant",
        "psycho_boost",
        "volt_tackle"
      ],
      "effectiveMoves": [
        "guillotine",
        "horn_drill",
        "double_edge",
        "hyper_beam",
        "counter",
        "fissure",
        "bide",
        "self_destruct",
        "sky_attack",
        "explosion",
        "flail",
        "reversal",
        "destiny_bond",
        "perish_song",
        "pain_split",
        "mirror_coat",
        "memento",
        "grudge",
        "facade",
        "focus_punch",
        "blast_burn",
        "hydro_cannon",
        "overheat",
        "frenzy_plant",
        "psycho_boost",
        "volt_tackle"
      ]
    },
    {
      "id": 5,
      "symbol": "FACTORY_STYLE_WEAKENING",
      "sourceArray": "sMoves_WeakeningTheFoe",
      "phraseEnglish": "weakening the foe to start.",
      "minimum": 2,
      "moves": [
        "sand_attack",
        "tail_whip",
        "leer",
        "growl",
        "string_shot",
        "screech",
        "smokescreen",
        "kinesis",
        "flash",
        "cotton_spore",
        "spite",
        "scary_face",
        "charm",
        "knock_off",
        "sweet_scent",
        "feather_dance",
        "fake_tears",
        "metal_sound",
        "tickle"
      ],
      "effectiveMoves": [
        "sand_attack",
        "tail_whip",
        "leer",
        "growl",
        "string_shot",
        "screech",
        "smokescreen",
        "kinesis",
        "flash",
        "cotton_spore",
        "spite",
        "scary_face",
        "charm",
        "knock_off",
        "sweet_scent",
        "feather_dance",
        "fake_tears",
        "metal_sound",
        "tickle"
      ]
    },
    {
      "id": 6,
      "symbol": "FACTORY_STYLE_UNPREDICTABLE",
      "sourceArray": "sMoves_ImpossibleToPredict",
      "phraseEnglish": "impossible to predict.",
      "minimum": 2,
      "moves": [
        "mimic",
        "metronome",
        "mirror_move",
        "transform",
        "substitute",
        "sketch",
        "curse",
        "present",
        "follow_me",
        "trick",
        "role_play",
        "assist",
        "skill_swap",
        "camouflage"
      ],
      "effectiveMoves": [
        "mimic",
        "metronome",
        "mirror_move",
        "transform",
        "substitute",
        "sketch",
        "curse",
        "present",
        "follow_me",
        "trick",
        "role_play",
        "assist",
        "skill_swap",
        "camouflage"
      ]
    },
    {
      "id": 7,
      "symbol": "FACTORY_STYLE_WEATHER",
      "sourceArray": "sMoves_DependsOnTheBattlesFlow",
      "phraseEnglish": "The favorite battle style appears to depend on the battle's flow.",
      "minimum": 2,
      "moves": [
        "sandstorm",
        "rain_dance",
        "sunny_day",
        "hail",
        "weather_ball"
      ],
      "effectiveMoves": [
        "sandstorm",
        "rain_dance",
        "sunny_day",
        "hail",
        "weather_ball"
      ]
    },
    {
      "id": 8,
      "symbol": "FACTORY_NUM_STYLES",
      "phraseEnglish": "flexibly adaptable to the situation."
    }
  ],
  "moves": {
    "swords_dance": {
      "names": {
        "en": "Swords Dance",
        "fr": "Danse Lames"
      },
      "type": "normal"
    },
    "growth": {
      "names": {
        "en": "Growth",
        "fr": "Croissance"
      },
      "type": "normal"
    },
    "meditate": {
      "names": {
        "en": "Meditate",
        "fr": "Yoga"
      },
      "type": "psychic"
    },
    "agility": {
      "names": {
        "en": "Agility",
        "fr": "Hâte"
      },
      "type": "psychic"
    },
    "double_team": {
      "names": {
        "en": "Double Team",
        "fr": "Reflet"
      },
      "type": "normal"
    },
    "harden": {
      "names": {
        "en": "Harden",
        "fr": "Armure"
      },
      "type": "normal"
    },
    "minimize": {
      "names": {
        "en": "Minimize",
        "fr": "Lilliput"
      },
      "type": "normal"
    },
    "withdraw": {
      "names": {
        "en": "Withdraw",
        "fr": "Repli"
      },
      "type": "water"
    },
    "defense_curl": {
      "names": {
        "en": "Defense Curl",
        "fr": "Boul’Armure"
      },
      "type": "normal"
    },
    "barrier": {
      "names": {
        "en": "Barrier",
        "fr": "Bouclier"
      },
      "type": "psychic"
    },
    "focus_energy": {
      "names": {
        "en": "Focus Energy",
        "fr": "Puissance"
      },
      "type": "normal"
    },
    "amnesia": {
      "names": {
        "en": "Amnesia",
        "fr": "Amnésie"
      },
      "type": "psychic"
    },
    "acid_armor": {
      "names": {
        "en": "Acid Armor",
        "fr": "Acidarmure"
      },
      "type": "poison"
    },
    "sharpen": {
      "names": {
        "en": "Sharpen",
        "fr": "Affûtage"
      },
      "type": "normal"
    },
    "conversion": {
      "names": {
        "en": "Conversion",
        "fr": "Conversion"
      },
      "type": "normal"
    },
    "conversion_2": {
      "names": {
        "en": "Conversion 2",
        "fr": "Conversion 2"
      },
      "type": "normal"
    },
    "belly_drum": {
      "names": {
        "en": "Belly Drum",
        "fr": "Cognobidon"
      },
      "type": "normal"
    },
    "psych_up": {
      "names": {
        "en": "Psych Up",
        "fr": "Boost"
      },
      "type": "normal"
    },
    "charge": {
      "names": {
        "en": "Charge",
        "fr": "Chargeur"
      },
      "type": "electric"
    },
    "snatch": {
      "names": {
        "en": "Snatch",
        "fr": "Saisie"
      },
      "type": "dark"
    },
    "tail_glow": {
      "names": {
        "en": "Tail Glow",
        "fr": "Lumiqueue"
      },
      "type": "bug"
    },
    "cosmic_power": {
      "names": {
        "en": "Cosmic Power",
        "fr": "Force Cosmique"
      },
      "type": "psychic"
    },
    "iron_defense": {
      "names": {
        "en": "Iron Defense",
        "fr": "Mur de Fer"
      },
      "type": "steel"
    },
    "howl": {
      "names": {
        "en": "Howl",
        "fr": "Grondement"
      },
      "type": "normal"
    },
    "bulk_up": {
      "names": {
        "en": "Bulk Up",
        "fr": "Gonflette"
      },
      "type": "fighting"
    },
    "calm_mind": {
      "names": {
        "en": "Calm Mind",
        "fr": "Plénitude"
      },
      "type": "psychic"
    },
    "dragon_dance": {
      "names": {
        "en": "Dragon Dance",
        "fr": "Danse Draco"
      },
      "type": "dragon"
    },
    "sing": {
      "names": {
        "en": "Sing",
        "fr": "Berceuse"
      },
      "type": "normal"
    },
    "supersonic": {
      "names": {
        "en": "Supersonic",
        "fr": "Ultrason"
      },
      "type": "normal"
    },
    "disable": {
      "names": {
        "en": "Disable",
        "fr": "Entrave"
      },
      "type": "normal"
    },
    "leech_seed": {
      "names": {
        "en": "Leech Seed",
        "fr": "Vampigraine"
      },
      "type": "grass"
    },
    "poison_powder": {
      "names": {
        "en": "Poisonpowder",
        "fr": "Poudre Toxik"
      },
      "type": "poison"
    },
    "stun_spore": {
      "names": {
        "en": "Stun Spore",
        "fr": "Para-Spore"
      },
      "type": "grass"
    },
    "sleep_powder": {
      "names": {
        "en": "Sleep Powder",
        "fr": "Poudre Dodo"
      },
      "type": "grass"
    },
    "thunder_wave": {
      "names": {
        "en": "Thunder Wave",
        "fr": "Cage Éclair"
      },
      "type": "electric"
    },
    "toxic": {
      "names": {
        "en": "Toxic",
        "fr": "Toxik"
      },
      "type": "poison"
    },
    "hypnosis": {
      "names": {
        "en": "Hypnosis",
        "fr": "Hypnose"
      },
      "type": "psychic"
    },
    "confuse_ray": {
      "names": {
        "en": "Confuse Ray",
        "fr": "Onde Folie"
      },
      "type": "ghost"
    },
    "glare": {
      "names": {
        "en": "Glare",
        "fr": "Intimidation"
      },
      "type": "normal"
    },
    "poison_gas": {
      "names": {
        "en": "Poison Gas",
        "fr": "Gaz Toxik"
      },
      "type": "poison"
    },
    "lovely_kiss": {
      "names": {
        "en": "Lovely Kiss",
        "fr": "Grobisou"
      },
      "type": "normal"
    },
    "spore": {
      "names": {
        "en": "Spore",
        "fr": "Spore"
      },
      "type": "grass"
    },
    "spider_web": {
      "names": {
        "en": "Spider Web",
        "fr": "Toile"
      },
      "type": "bug"
    },
    "sweet_kiss": {
      "names": {
        "en": "Sweet Kiss",
        "fr": "Doux Baiser"
      },
      "type": "normal"
    },
    "spikes": {
      "names": {
        "en": "Spikes",
        "fr": "Picots"
      },
      "type": "ground"
    },
    "swagger": {
      "names": {
        "en": "Swagger",
        "fr": "Vantardise"
      },
      "type": "normal"
    },
    "mean_look": {
      "names": {
        "en": "Mean Look",
        "fr": "Regard Noir"
      },
      "type": "normal"
    },
    "attract": {
      "names": {
        "en": "Attract",
        "fr": "Attraction"
      },
      "type": "normal"
    },
    "encore": {
      "names": {
        "en": "Encore",
        "fr": "Encore"
      },
      "type": "normal"
    },
    "torment": {
      "names": {
        "en": "Torment",
        "fr": "Tourmente"
      },
      "type": "dark"
    },
    "flatter": {
      "names": {
        "en": "Flatter",
        "fr": "Flatterie"
      },
      "type": "dark"
    },
    "will_o_wisp": {
      "names": {
        "en": "Will-O-Wisp",
        "fr": "Feu Follet"
      },
      "type": "fire"
    },
    "taunt": {
      "names": {
        "en": "Taunt",
        "fr": "Provoc"
      },
      "type": "dark"
    },
    "yawn": {
      "names": {
        "en": "Yawn",
        "fr": "Bâillement"
      },
      "type": "normal"
    },
    "imprison": {
      "names": {
        "en": "Imprison",
        "fr": "Possessif"
      },
      "type": "psychic"
    },
    "teeter_dance": {
      "names": {
        "en": "Teeter Dance",
        "fr": "Danse Folle"
      },
      "type": "normal"
    },
    "grass_whistle": {
      "names": {
        "en": "Grasswhistle",
        "fr": "Siffl’Herbe"
      },
      "type": "grass"
    },
    "block": {
      "names": {
        "en": "Block",
        "fr": "Barrage"
      },
      "type": "normal"
    },
    "mist": {
      "names": {
        "en": "Mist",
        "fr": "Brume"
      },
      "type": "ice"
    },
    "recover": {
      "names": {
        "en": "Recover",
        "fr": "Soin"
      },
      "type": "normal"
    },
    "light_screen": {
      "names": {
        "en": "Light Screen",
        "fr": "Mur Lumière"
      },
      "type": "psychic"
    },
    "haze": {
      "names": {
        "en": "Haze",
        "fr": "Buée Noire"
      },
      "type": "ice"
    },
    "reflect": {
      "names": {
        "en": "Reflect",
        "fr": "Protection"
      },
      "type": "psychic"
    },
    "soft_boiled": {
      "names": {
        "en": "Softboiled",
        "fr": "E-Coque"
      },
      "type": "normal"
    },
    "rest": {
      "names": {
        "en": "Rest",
        "fr": "Repos"
      },
      "type": "psychic"
    },
    "protect": {
      "names": {
        "en": "Protect",
        "fr": "Abri"
      },
      "type": "normal"
    },
    "detect": {
      "names": {
        "en": "Detect",
        "fr": "Détection"
      },
      "type": "fighting"
    },
    "endure": {
      "names": {
        "en": "Endure",
        "fr": "Ténacité"
      },
      "type": "normal"
    },
    "milk_drink": {
      "names": {
        "en": "Milk Drink",
        "fr": "Lait à Boire"
      },
      "type": "normal"
    },
    "heal_bell": {
      "names": {
        "en": "Heal Bell",
        "fr": "Glas de Soin"
      },
      "type": "normal"
    },
    "safeguard": {
      "names": {
        "en": "Safeguard",
        "fr": "Rune Protect"
      },
      "type": "normal"
    },
    "baton_pass": {
      "names": {
        "en": "Baton Pass",
        "fr": "Relais"
      },
      "type": "normal"
    },
    "morning_sun": {
      "names": {
        "en": "Morning Sun",
        "fr": "Aurore"
      },
      "type": "normal"
    },
    "synthesis": {
      "names": {
        "en": "Synthesis",
        "fr": "Synthèse"
      },
      "type": "grass"
    },
    "moonlight": {
      "names": {
        "en": "Moonlight",
        "fr": "Rayon Lune"
      },
      "type": "normal"
    },
    "swallow": {
      "names": {
        "en": "Swallow",
        "fr": "Avale"
      },
      "type": "normal"
    },
    "wish": {
      "names": {
        "en": "Wish",
        "fr": "Vœu"
      },
      "type": "normal"
    },
    "ingrain": {
      "names": {
        "en": "Ingrain",
        "fr": "Racines"
      },
      "type": "grass"
    },
    "magic_coat": {
      "names": {
        "en": "Magic Coat",
        "fr": "Reflet Magik"
      },
      "type": "psychic"
    },
    "recycle": {
      "names": {
        "en": "Recycle",
        "fr": "Recyclage"
      },
      "type": "normal"
    },
    "refresh": {
      "names": {
        "en": "Refresh",
        "fr": "Régénération"
      },
      "type": "normal"
    },
    "mud_sport": {
      "names": {
        "en": "Mud Sport",
        "fr": "Lance-Boue"
      },
      "type": "ground"
    },
    "slack_off": {
      "names": {
        "en": "Slack Off",
        "fr": "Paresse"
      },
      "type": "normal"
    },
    "aromatherapy": {
      "names": {
        "en": "Aromatherapy",
        "fr": "Aromathérapie"
      },
      "type": "grass"
    },
    "water_sport": {
      "names": {
        "en": "Water Sport",
        "fr": "Tourniquet"
      },
      "type": "water"
    },
    "guillotine": {
      "names": {
        "en": "Guillotine",
        "fr": "Guillotine"
      },
      "type": "normal"
    },
    "horn_drill": {
      "names": {
        "en": "Horn Drill",
        "fr": "Empal’Korne"
      },
      "type": "normal"
    },
    "double_edge": {
      "names": {
        "en": "Double-Edge",
        "fr": "Damoclès"
      },
      "type": "normal"
    },
    "hyper_beam": {
      "names": {
        "en": "Hyper Beam",
        "fr": "Ultralaser"
      },
      "type": "normal"
    },
    "counter": {
      "names": {
        "en": "Counter",
        "fr": "Riposte"
      },
      "type": "fighting"
    },
    "fissure": {
      "names": {
        "en": "Fissure",
        "fr": "Abîme"
      },
      "type": "ground"
    },
    "bide": {
      "names": {
        "en": "Bide",
        "fr": "Patience"
      },
      "type": "normal"
    },
    "self_destruct": {
      "names": {
        "en": "Selfdestruct",
        "fr": "Destruction"
      },
      "type": "normal"
    },
    "sky_attack": {
      "names": {
        "en": "Sky Attack",
        "fr": "Piqué"
      },
      "type": "flying"
    },
    "explosion": {
      "names": {
        "en": "Explosion",
        "fr": "Explosion"
      },
      "type": "normal"
    },
    "flail": {
      "names": {
        "en": "Flail",
        "fr": "Fléau"
      },
      "type": "normal"
    },
    "reversal": {
      "names": {
        "en": "Reversal",
        "fr": "Contre"
      },
      "type": "fighting"
    },
    "destiny_bond": {
      "names": {
        "en": "Destiny Bond",
        "fr": "Prlvt Destin"
      },
      "type": "ghost"
    },
    "perish_song": {
      "names": {
        "en": "Perish Song",
        "fr": "Requiem"
      },
      "type": "normal"
    },
    "pain_split": {
      "names": {
        "en": "Pain Split",
        "fr": "Balance"
      },
      "type": "normal"
    },
    "mirror_coat": {
      "names": {
        "en": "Mirror Coat",
        "fr": "Voile Miroir"
      },
      "type": "psychic"
    },
    "memento": {
      "names": {
        "en": "Memento",
        "fr": "Souvenir"
      },
      "type": "dark"
    },
    "grudge": {
      "names": {
        "en": "Grudge",
        "fr": "Rancune"
      },
      "type": "ghost"
    },
    "facade": {
      "names": {
        "en": "Facade",
        "fr": "Façade"
      },
      "type": "normal"
    },
    "focus_punch": {
      "names": {
        "en": "Focus Punch",
        "fr": "Mitra-Poing"
      },
      "type": "fighting"
    },
    "blast_burn": {
      "names": {
        "en": "Blast Burn",
        "fr": "Rafale Feu"
      },
      "type": "fire"
    },
    "hydro_cannon": {
      "names": {
        "en": "Hydro Cannon",
        "fr": "Hydroblast"
      },
      "type": "water"
    },
    "overheat": {
      "names": {
        "en": "Overheat",
        "fr": "Surchauffe"
      },
      "type": "fire"
    },
    "frenzy_plant": {
      "names": {
        "en": "Frenzy Plant",
        "fr": "Végé-Attak"
      },
      "type": "grass"
    },
    "psycho_boost": {
      "names": {
        "en": "Psycho Boost",
        "fr": "Psycho Boost"
      },
      "type": "psychic"
    },
    "volt_tackle": {
      "names": {
        "en": "Volt Tackle",
        "fr": "Électacle"
      },
      "type": "electric"
    },
    "sand_attack": {
      "names": {
        "en": "Sand-Attack",
        "fr": "Jet de Sable"
      },
      "type": "ground"
    },
    "tail_whip": {
      "names": {
        "en": "Tail Whip",
        "fr": "Mimi-Queue"
      },
      "type": "normal"
    },
    "leer": {
      "names": {
        "en": "Leer",
        "fr": "Groz’Yeux"
      },
      "type": "normal"
    },
    "growl": {
      "names": {
        "en": "Growl",
        "fr": "Rugissement"
      },
      "type": "normal"
    },
    "string_shot": {
      "names": {
        "en": "String Shot",
        "fr": "Sécrétion"
      },
      "type": "bug"
    },
    "screech": {
      "names": {
        "en": "Screech",
        "fr": "Grincement"
      },
      "type": "normal"
    },
    "smokescreen": {
      "names": {
        "en": "Smokescreen",
        "fr": "Brouillard"
      },
      "type": "normal"
    },
    "kinesis": {
      "names": {
        "en": "Kinesis",
        "fr": "Télékinésie"
      },
      "type": "psychic"
    },
    "flash": {
      "names": {
        "en": "Flash",
        "fr": "Flash"
      },
      "type": "normal"
    },
    "cotton_spore": {
      "names": {
        "en": "Cotton Spore",
        "fr": "Spore Coton"
      },
      "type": "grass"
    },
    "spite": {
      "names": {
        "en": "Spite",
        "fr": "Dépit"
      },
      "type": "ghost"
    },
    "scary_face": {
      "names": {
        "en": "Scary Face",
        "fr": "Grimace"
      },
      "type": "normal"
    },
    "charm": {
      "names": {
        "en": "Charm",
        "fr": "Charme"
      },
      "type": "normal"
    },
    "knock_off": {
      "names": {
        "en": "Knock Off",
        "fr": "Sabotage"
      },
      "type": "dark"
    },
    "sweet_scent": {
      "names": {
        "en": "Sweet Scent",
        "fr": "Doux Parfum"
      },
      "type": "normal"
    },
    "feather_dance": {
      "names": {
        "en": "Featherdance",
        "fr": "Danse Plumes"
      },
      "type": "flying"
    },
    "fake_tears": {
      "names": {
        "en": "Fake Tears",
        "fr": "Croco Larme"
      },
      "type": "dark"
    },
    "metal_sound": {
      "names": {
        "en": "Metal Sound",
        "fr": "Strido-Son"
      },
      "type": "steel"
    },
    "tickle": {
      "names": {
        "en": "Tickle",
        "fr": "Chatouille"
      },
      "type": "normal"
    },
    "mimic": {
      "names": {
        "en": "Mimic",
        "fr": "Copie"
      },
      "type": "normal"
    },
    "metronome": {
      "names": {
        "en": "Metronome",
        "fr": "Métronome"
      },
      "type": "normal"
    },
    "mirror_move": {
      "names": {
        "en": "Mirror Move",
        "fr": "Mimique"
      },
      "type": "flying"
    },
    "transform": {
      "names": {
        "en": "Transform",
        "fr": "Morphing"
      },
      "type": "normal"
    },
    "substitute": {
      "names": {
        "en": "Substitute",
        "fr": "Clonage"
      },
      "type": "normal"
    },
    "sketch": {
      "names": {
        "en": "Sketch",
        "fr": "Gribouille"
      },
      "type": "normal"
    },
    "curse": {
      "names": {
        "en": "Curse",
        "fr": "Malédiction"
      },
      "type": "mystery"
    },
    "present": {
      "names": {
        "en": "Present",
        "fr": "Cadeau"
      },
      "type": "normal"
    },
    "follow_me": {
      "names": {
        "en": "Follow Me",
        "fr": "Par Ici"
      },
      "type": "normal"
    },
    "trick": {
      "names": {
        "en": "Trick",
        "fr": "Tourmagik"
      },
      "type": "psychic"
    },
    "role_play": {
      "names": {
        "en": "Role Play",
        "fr": "Imitation"
      },
      "type": "psychic"
    },
    "assist": {
      "names": {
        "en": "Assist",
        "fr": "Assistance"
      },
      "type": "normal"
    },
    "skill_swap": {
      "names": {
        "en": "Skill Swap",
        "fr": "Échange"
      },
      "type": "psychic"
    },
    "camouflage": {
      "names": {
        "en": "Camouflage",
        "fr": "Camouflage"
      },
      "type": "normal"
    },
    "sandstorm": {
      "names": {
        "en": "Sandstorm",
        "fr": "Tempête de Sable"
      },
      "type": "rock"
    },
    "rain_dance": {
      "names": {
        "en": "Rain Dance",
        "fr": "Danse Pluie"
      },
      "type": "water"
    },
    "sunny_day": {
      "names": {
        "en": "Sunny Day",
        "fr": "Zénith"
      },
      "type": "fire"
    },
    "hail": {
      "names": {
        "en": "Hail",
        "fr": "Grêle"
      },
      "type": "ice"
    },
    "weather_ball": {
      "names": {
        "en": "Weather Ball",
        "fr": "Ball’Météo"
      },
      "type": "normal"
    }
  }
};
