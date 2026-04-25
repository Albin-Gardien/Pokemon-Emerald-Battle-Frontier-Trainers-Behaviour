window.moves = {
  absorb: {
    id: "absorb",
    names: { en: "Absorb", fr: "Vol-Vie" },
    battleEffect: "HpDrain",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 20
  },
  acid: {
    id: "acid",
    names: { en: "Acid", fr: "Acide" },
    battleEffect: null,
    type: "poison",
    damageFormula: "standard_damage",
    power_points: 30
  },
  acid_armor: {
    id: "acid_armor",
    names: { en: "Acid Armor", fr: "Acidarmure" },
    battleEffect: "UserDefenseUp2",
    type: "poison",
    damageFormula: "no_damage",
    power_points: 40
  },
  aerial_ace: {
    id: "aerial_ace",
    names: { en: "Aerial Ace", fr: "Aéropique" },
    battleEffect: "CannotMiss",
    type: "flying",
    damageFormula: "standard_damage",
    power_points: 20
  },
  agility: {
    id: "agility",
    names: { en: "Agility", fr: "Hâte" },
    battleEffect: "UserSpeedUp2",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 30
  },
  air_cutter: {
    id: "air_cutter",
    names: { en: "Air Cutter", fr: "Tranch’Air" },
    battleEffect: "HighCritical",
    type: "flying",
    damageFormula: "standard_damage",
    power_points: 25
  },
  amnesia: {
    id: "amnesia",
    names: { en: "Amnesia", fr: "Amnésie" },
    battleEffect: "UserSpdefenseUp2",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 20
  },
  ancientpower: {
    id: "ancientpower",
    names: { en: "AncientPower", fr: "Pouv.Antique" },
    battleEffect: null,
    type: "rock",
    damageFormula: "standard_damage",
    power_points: 5
  },
  aromatherapy: {
    id: "aromatherapy",
    names: { en: "Aromatherapy", fr: "Aromathérapie" },
    battleEffect: "HealBell",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 5
  },
  assist: {
    id: "assist",
    names: { en: "Assist", fr: "Assistance" },
    battleEffect: "Assist",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  astonish: {
    id: "astonish",
    names: { en: "Astonish", fr: "Étonnement" },
    battleEffect: null,
    type: "ghost",
    damageFormula: "standard_damage",
    power_points: 15
  },
  attract: {
    id: "attract",
    names: { en: "Attract", fr: "Attraction" },
    battleEffect: "Attract",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 15
  },
  aurora_beam: {
    id: "aurora_beam",
    names: { en: "Aurora Beam", fr: "Onde Boréale" },
    battleEffect: null,
    type: "ice",
    damageFormula: "standard_damage",
    power_points: 20
  },
  barrier: {
    id: "barrier",
    names: { en: "Barrier", fr: "Bouclier" },
    battleEffect: "UserDefenseUp2",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 30
  },
  baton_pass: {
    id: "baton_pass",
    names: { en: "Baton Pass", fr: "Relais" },
    battleEffect: "BatonPass",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 40
  },
  belly_drum: {
    id: "belly_drum",
    names: { en: "Belly Drum", fr: "Cognobidon" },
    battleEffect: "BellyDrum",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  bide: {
    id: "bide",
    names: { en: "Bide", fr: "Patience" },
    battleEffect: "Bide",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 10
  },
  bind: {
    id: "bind",
    names: { en: "Bind", fr: "Étreinte" },
    battleEffect: "Trap",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  bite: {
    id: "bite",
    names: { en: "Bite", fr: "Morsure" },
    battleEffect: null,
    type: "dark",
    damageFormula: "standard_damage",
    power_points: 25
  },
  blaze_kick: {
    id: "blaze_kick",
    names: { en: "Blaze Kick", fr: "Pied Brûleur" },
    battleEffect: "BlazeKick",
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 10
  },
  blizzard: {
    id: "blizzard",
    names: { en: "Blizzard", fr: "Blizzard" },
    battleEffect: null,
    type: "ice",
    damageFormula: "standard_damage",
    power_points: 5
  },
  block: {
    id: "block",
    names: { en: "Block", fr: "Barrage" },
    battleEffect: "BlockEscape",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 5
  },
  body_slam: {
    id: "body_slam",
    names: { en: "Body Slam", fr: "Plaquage" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  bone_club: {
    id: "bone_club",
    names: { en: "Bone Club", fr: "Massd’Os" },
    battleEffect: null,
    type: "ground",
    damageFormula: "standard_damage",
    power_points: 20
  },
  bonemerang: {
    id: "bonemerang",
    names: { en: "Bonemerang", fr: "Osmerang" },
    battleEffect: "MultiHit",
    type: "ground",
    damageFormula: "standard_damage",
    power_points: 10
  },
  bounce: {
    id: "bounce",
    names: { en: "Bounce", fr: "Rebond" },
    battleEffect: "Bounce",
    type: "flying",
    damageFormula: "standard_damage",
    power_points: 5
  },
  brick_break: {
    id: "brick_break",
    names: { en: "Brick Break", fr: "Casse-Brique" },
    battleEffect: "BrickBreak",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 15
  },
  bubblebeam: {
    id: "bubblebeam",
    names: { en: "BubbleBeam", fr: "Bulles d’O" },
    battleEffect: "DamageAndTargetSpeedDown1",
    type: "water",
    damageFormula: "standard_damage",
    power_points: 20
  },
  bulk_up: {
    id: "bulk_up",
    names: { en: "Bulk Up", fr: "Gonflette" },
    battleEffect: "BulkUp",
    type: "fighting",
    damageFormula: "no_damage",
    power_points: 20
  },
  bullet_seed: {
    id: "bullet_seed",
    names: { en: "Bullet Seed", fr: "Balle Graine" },
    battleEffect: "MultiHit",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 30
  },
  calm_mind: {
    id: "calm_mind",
    names: { en: "Calm Mind", fr: "Plénitude" },
    battleEffect: "CalmMind",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 20
  },
  charm: {
    id: "charm",
    names: { en: "Charm", fr: "Charme" },
    battleEffect: "TargetAttackDown2",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  clamp: {
    id: "clamp",
    names: { en: "Clamp", fr: "Claquoir" },
    battleEffect: "Trap",
    type: "water",
    damageFormula: "standard_damage",
    power_points: 10
  },
  comet_punch: {
    id: "comet_punch",
    names: { en: "Comet Punch", fr: "Poing Comète" },
    battleEffect: "MultiHit",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  confuse_ray: {
    id: "confuse_ray",
    names: { en: "Confuse Ray", fr: "Onde Folie" },
    battleEffect: "InflictConfusion",
    type: "ghost",
    damageFormula: "no_damage",
    power_points: 10
  },
  confusion: {
    id: "confusion",
    names: { en: "Confusion", fr: "Choc Mental" },
    battleEffect: null,
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 25
  },
  cosmic_power: {
    id: "cosmic_power",
    names: { en: "Cosmic Power", fr: "Force Cosmik" },
    battleEffect: "BothDefenseUp1",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 20
  },
  cotton_spore: {
    id: "cotton_spore",
    names: { en: "Cotton Spore", fr: "Spore Coton" },
    battleEffect: "TargetSpeedDown2",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 40
  },
  counter: {
    id: "counter",
    names: { en: "Counter", fr: "Riposte" },
    battleEffect: "Counter",
    type: "fighting",
    damageFormula: "non_standard_damage",
    power_points: 20
  },
  covet: {
    id: "covet",
    names: { en: "Covet", fr: "Implore" },
    battleEffect: "StealItem",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 40
  },
  crabhammer: {
    id: "crabhammer",
    names: { en: "Crabhammer", fr: "Pince-Masse" },
    battleEffect: "HighCritical",
    type: "water",
    damageFormula: "standard_damage",
    power_points: 10
  },
  cross_chop: {
    id: "cross_chop",
    names: { en: "Cross Chop", fr: "Coup-Croix" },
    battleEffect: "HighCritical",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 5
  },
  crunch: {
    id: "crunch",
    names: { en: "Crunch", fr: "Mâchouille" },
    battleEffect: null,
    type: "dark",
    damageFormula: "standard_damage",
    power_points: 15
  },
  crush_claw: {
    id: "crush_claw",
    names: { en: "Crush Claw", fr: "Éclategriffe" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  curse: {
    id: "curse",
    names: { en: "Curse", fr: "Malédiction" },
    battleEffect: "Curse",
    type: "ghost",
    damageFormula: "no_damage",
    power_points: 10
  },
  defense_curl: {
    id: "defense_curl",
    names: { en: "Defense Curl", fr: "Boul’Armure" },
    battleEffect: "DefenseCurl",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 40
  },
  destiny_bond: {
    id: "destiny_bond",
    names: { en: "Destiny Bond", fr: "Prlvt Destin" },
    battleEffect: "DestinyBond",
    type: "ghost",
    damageFormula: "no_damage",
    power_points: 5
  },
  detect: {
    id: "detect",
    names: { en: "Detect", fr: "Détection" },
    battleEffect: "Protect",
    type: "fighting",
    damageFormula: "no_damage",
    power_points: 5
  },
  dig: {
    id: "dig",
    names: { en: "Dig", fr: "Tunnel" },
    battleEffect: "Dig",
    type: "ground",
    damageFormula: "standard_damage",
    power_points: 10
  },
  disable: {
    id: "disable",
    names: { en: "Disable", fr: "Entrave" },
    battleEffect: "Disable",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  dive: {
    id: "dive",
    names: { en: "Dive", fr: "Plongée" },
    battleEffect: "Dive",
    type: "water",
    damageFormula: "standard_damage",
    power_points: 10
  },
  dizzy_punch: {
    id: "dizzy_punch",
    names: { en: "Dizzy Punch", fr: "Uppercut" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  double_edge: {
    id: "double_edge",
    names: { en: "Double-Edge", fr: "Damoclès" },
    battleEffect: "13Recoil",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  double_kick: {
    id: "double_kick",
    names: { en: "Double Kick", fr: "Double Pied" },
    battleEffect: "MultiHit",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 30
  },
  double_team: {
    id: "double_team",
    names: { en: "Double Team", fr: "Reflet" },
    battleEffect: "UserEvasionUp1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 15
  },
  doubleslap: {
    id: "doubleslap",
    names: { en: "Doubleslap", fr: "Torgnoles" },
    battleEffect: "MultiHit",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  dragon_claw: {
    id: "dragon_claw",
    names: { en: "Dragon Claw", fr: "Dracogriffe" },
    battleEffect: null,
    type: "dragon",
    damageFormula: "standard_damage",
    power_points: 15
  },
  dragon_dance: {
    id: "dragon_dance",
    names: { en: "Dragon Dance", fr: "Danse Draco" },
    battleEffect: "DragonDance",
    type: "dragon",
    damageFormula: "no_damage",
    power_points: 20
  },
  dragon_rage: {
    id: "dragon_rage",
    names: { en: "Dragon Rage", fr: "Draco-Rage" },
    battleEffect: "DragonRage",
    type: "dragon",
    damageFormula: "non_standard_damage",
    power_points: 10
  },
  dragonbreath: {
    id: "dragonbreath",
    names: { en: "DragonBreath", fr: "Dracosouffle" },
    battleEffect: null,
    type: "dragon",
    damageFormula: "standard_damage",
    power_points: 20
  },
  dream_eater: {
    id: "dream_eater",
    names: { en: "Dream Eater", fr: "Dévorêve" },
    battleEffect: "DreamEater",
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 15
  },
  drill_peck: {
    id: "drill_peck",
    names: { en: "Drill Peck", fr: "Bec Vrille" },
    battleEffect: null,
    type: "flying",
    damageFormula: "standard_damage",
    power_points: 20
  },
  dynamicpunch: {
    id: "dynamicpunch",
    names: { en: "DynamicPunch", fr: "Dynamopoing" },
    battleEffect: null,
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 5
  },
  earthquake: {
    id: "earthquake",
    names: { en: "Earthquake", fr: "Séisme" },
    battleEffect: null,
    type: "ground",
    damageFormula: "standard_damage",
    power_points: 10
  },
  ember: {
    id: "ember",
    names: { en: "Ember", fr: "Flammèche" },
    battleEffect: null,
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 25
  },
  encore: {
    id: "encore",
    names: { en: "Encore", fr: "Encore" },
    battleEffect: "Encore",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 5
  },
  endeavor: {
    id: "endeavor",
    names: { en: "Endeavor", fr: "Effort" },
    battleEffect: "Endeavor",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 5
  },
  endure: {
    id: "endure",
    names: { en: "Endure", fr: "Ténacité" },
    battleEffect: "Endure",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  eruption: {
    id: "eruption",
    names: { en: "Eruption", fr: "Éruption" },
    battleEffect: "HighHpHighDamage",
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 5
  },
  explosion: {
    id: "explosion",
    names: { en: "Explosion", fr: "Explosion" },
    battleEffect: "Selfdestruction",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 5
  },
  extrasensory: {
    id: "extrasensory",
    names: { en: "Extrasensory", fr: "Extrasenseur" },
    battleEffect: null,
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 30
  },
  extremespeed: {
    id: "extremespeed",
    names: { en: "ExtremeSpeed", fr: "Vit.Extrême" },
    battleEffect: "Priority",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 5
  },
  facade: {
    id: "facade",
    names: { en: "Facade", fr: "Façade" },
    battleEffect: "Facade",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  faint_attack: {
    id: "faint_attack",
    names: { en: "Faint Attack", fr: "Feinte" },
    battleEffect: "CannotMiss",
    type: "dark",
    damageFormula: "standard_damage",
    power_points: 20
  },
  fake_out: {
    id: "fake_out",
    names: { en: "Fake Out", fr: "Bluff" },
    battleEffect: "FakeOut",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  fake_tears: {
    id: "fake_tears",
    names: { en: "Fake Tears", fr: "Croco Larme" },
    battleEffect: "TargetSpdefenseDown2",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  featherdance: {
    id: "featherdance",
    names: { en: "FeatherDance", fr: "Danse-Plume" },
    battleEffect: "TargetAttackDown2",
    type: "flying",
    damageFormula: "no_damage",
    power_points: 15
  },
  fire_blast: {
    id: "fire_blast",
    names: { en: "Fire Blast", fr: "Déflagration" },
    battleEffect: null,
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 5
  },
  fire_punch: {
    id: "fire_punch",
    names: { en: "Fire Punch", fr: "Poing de Feu" },
    battleEffect: null,
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 15
  },
  fire_spin: {
    id: "fire_spin",
    names: { en: "Fire Spin", fr: "Danse Flammes" },
    battleEffect: "Trap",
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 15
  },
  fissure: {
    id: "fissure",
    names: { en: "Fissure", fr: "Abîme" },
    battleEffect: "Ohko",
    type: "ground",
    damageFormula: "non_standard_damage",
    power_points: 5
  },
  flail: {
    id: "flail",
    names: { en: "Flail", fr: "Fléau" },
    battleEffect: "LowHpHighDamage",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 15
  },
  flame_wheel: {
    id: "flame_wheel",
    names: { en: "Flame Wheel", fr: "Roue de Feu" },
    battleEffect: null,
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 25
  },
  flamethrower: {
    id: "flamethrower",
    names: { en: "Flamethrower", fr: "Lance-Flammes" },
    battleEffect: null,
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 15
  },
  flash: {
    id: "flash",
    names: { en: "Flash", fr: "Flash" },
    battleEffect: "TargetAccuracyDown1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  flatter: {
    id: "flatter",
    names: { en: "Flatter", fr: "Flatterie" },
    battleEffect: "Flatter",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 15
  },
  fly: {
    id: "fly",
    names: { en: "Fly", fr: "Vol" },
    battleEffect: "Fly",
    type: "flying",
    damageFormula: "standard_damage",
    power_points: 15
  },
  focus_energy: {
    id: "focus_energy",
    names: { en: "Focus Energy", fr: "Puissance" },
    battleEffect: "FocusEnergy",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 30
  },
  focus_punch: {
    id: "focus_punch",
    names: { en: "Focus Punch", fr: "Mitra-Poing" },
    battleEffect: "FocusPunch",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 20
  },
  follow_me: {
    id: "follow_me",
    names: { en: "Follow Me", fr: "Par Ici" },
    battleEffect: "FollowMe",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  foresight: {
    id: "foresight",
    names: { en: "Foresight", fr: "Clairvoyance" },
    battleEffect: "Identify",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 40
  },
  frustration: {
    id: "frustration",
    names: { en: "Frustration", fr: "Frustration" },
    battleEffect: "Frustration",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 20
  },
  fury_attack: {
    id: "fury_attack",
    names: { en: "Fury Attack", fr: "Furie" },
    battleEffect: "MultiHit",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  fury_cutter: {
    id: "fury_cutter",
    names: { en: "Fury Cutter", fr: "Taillade" },
    battleEffect: null,
    type: "bug",
    damageFormula: "standard_damage",
    power_points: 20
  },
  fury_swipes: {
    id: "fury_swipes",
    names: { en: "Fury Swipes", fr: "Combo-Griffe" },
    battleEffect: "MultiHit",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  future_sight: {
    id: "future_sight",
    names: { en: "Future Sight", fr: "Prescience" },
    battleEffect: "FutureAttack",
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 15
  },
  giga_drain: {
    id: "giga_drain",
    names: { en: "Giga Drain", fr: "Giga-Sangsue" },
    battleEffect: "HpDrain",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 5
  },
  glare: {
    id: "glare",
    names: { en: "Glare", fr: "Intimidation" },
    battleEffect: "InflictParalysis",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 30
  },
  grasswhistle: {
    id: "grasswhistle",
    names: { en: "GrassWhistle", fr: "Siffl’Herbe" },
    battleEffect: "InflictSleep",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 15
  },
  growth: {
    id: "growth",
    names: { en: "Growth", fr: "Croissance" },
    battleEffect: "UserSpattackUp1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 40
  },
  grudge: {
    id: "grudge",
    names: { en: "Grudge", fr: "Rancune" },
    battleEffect: "Grudge",
    type: "ghost",
    damageFormula: "no_damage",
    power_points: 5
  },
  guillotine: {
    id: "guillotine",
    names: { en: "Guillotine", fr: "Guillotine" },
    battleEffect: "Ohko",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 5
  },
  gust: {
    id: "gust",
    names: { en: "Gust", fr: "Tornade" },
    battleEffect: null,
    type: "flying",
    damageFormula: "standard_damage",
    power_points: 35
  },
  hail: {
    id: "hail",
    names: { en: "Hail", fr: "Grêle" },
    battleEffect: "Hail",
    type: "ice",
    damageFormula: "no_damage",
    power_points: 10
  },
  harden: {
    id: "harden",
    names: { en: "Harden", fr: "Armure" },
    battleEffect: "UserDefenseUp1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 30
  },
  haze: {
    id: "haze",
    names: { en: "Haze", fr: "Buée Noire" },
    battleEffect: "Haze",
    type: "ice",
    damageFormula: "no_damage",
    power_points: 30
  },
  headbutt: {
    id: "headbutt",
    names: { en: "Headbutt", fr: "Coup d’Boule" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  heal_bell: {
    id: "heal_bell",
    names: { en: "Heal Bell", fr: "Glas de Soin" },
    battleEffect: "HealBell",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 5
  },
  heat_wave: {
    id: "heat_wave",
    names: { en: "Heat Wave", fr: "Canicule" },
    battleEffect: null,
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 10
  },
  helping_hand: {
    id: "helping_hand",
    names: { en: "Helping Hand", fr: "Coup d’Main" },
    battleEffect: "HelpingHand",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  hi_jump_kick: {
    id: "hi_jump_kick",
    names: { en: "Hi Jump Kick", fr: "Pied Voltige" },
    battleEffect: null,
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 20
  },
  hidden_power: {
    id: "hidden_power",
    names: { en: "Hidden Power", fr: "Puissance Cachée" },
    battleEffect: "HiddenPower",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 15
  },
  horn_drill: {
    id: "horn_drill",
    names: { en: "Horn Drill", fr: "Empal’Korne" },
    battleEffect: "Ohko",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 5
  },
  howl: {
    id: "howl",
    names: { en: "Howl", fr: "Grondement" },
    battleEffect: "UserAttackUp1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 40
  },
  hydro_pump: {
    id: "hydro_pump",
    names: { en: "Hydro Pump", fr: "Hydrocanon" },
    battleEffect: null,
    type: "water",
    damageFormula: "standard_damage",
    power_points: 5
  },
  hyper_beam: {
    id: "hyper_beam",
    names: { en: "Hyper Beam", fr: "Ultralaser" },
    battleEffect: "MustRecharge",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 5
  },
  hyper_fang: {
    id: "hyper_fang",
    names: { en: "Hyper Fang", fr: "Croc de Mort" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  hyper_voice: {
    id: "hyper_voice",
    names: { en: "Hyper Voice", fr: "Mégaphone" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  hypnosis: {
    id: "hypnosis",
    names: { en: "Hypnosis", fr: "Hypnose" },
    battleEffect: "InflictSleep",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 20
  },
  ice_ball: {
    id: "ice_ball",
    names: { en: "Ice Ball", fr: "Ball’Glace" },
    battleEffect: null,
    type: "ice",
    damageFormula: "standard_damage",
    power_points: 20
  },
  ice_beam: {
    id: "ice_beam",
    names: { en: "Ice Beam", fr: "Laser Glace" },
    battleEffect: null,
    type: "ice",
    damageFormula: "standard_damage",
    power_points: 10
  },
  ice_punch: {
    id: "ice_punch",
    names: { en: "Ice Punch", fr: "Poinglace" },
    battleEffect: null,
    type: "ice",
    damageFormula: "standard_damage",
    power_points: 15
  },
  icicle_spear: {
    id: "icicle_spear",
    names: { en: "Icicle Spear", fr: "Stalagtite" },
    battleEffect: "MultiHit",
    type: "ice",
    damageFormula: "standard_damage",
    power_points: 30
  },
  icy_wind: {
    id: "icy_wind",
    names: { en: "Icy Wind", fr: "Vent Glace" },
    battleEffect: "DamageAndTargetSpeedDown1",
    type: "ice",
    damageFormula: "standard_damage",
    power_points: 15
  },
  imprison: {
    id: "imprison",
    names: { en: "Imprison", fr: "Possessif" },
    battleEffect: "Imprison",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 10
  },
  ingrain: {
    id: "ingrain",
    names: { en: "Ingrain", fr: "Racines" },
    battleEffect: "Ingrain",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 20
  },
  iron_defense: {
    id: "iron_defense",
    names: { en: "Iron Defense", fr: "Mur de Fer" },
    battleEffect: "UserDefenseUp2",
    type: "steel",
    damageFormula: "no_damage",
    power_points: 15
  },
  iron_tail: {
    id: "iron_tail",
    names: { en: "Iron Tail", fr: "Queue de Fer" },
    battleEffect: null,
    type: "steel",
    damageFormula: "standard_damage",
    power_points: 15
  },
  karate_chop: {
    id: "karate_chop",
    names: { en: "Karate Chop", fr: "Poing-Karaté" },
    battleEffect: "HighCritical",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 25
  },
  knock_off: {
    id: "knock_off",
    names: { en: "Knock Off", fr: "Sabotage" },
    battleEffect: "KnockOff",
    type: "dark",
    damageFormula: "standard_damage",
    power_points: 20
  },
  leaf_blade: {
    id: "leaf_blade",
    names: { en: "Leaf Blade", fr: "Lame-Feuille" },
    battleEffect: "HighCritical",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 15
  },
  leech_life: {
    id: "leech_life",
    names: { en: "Leech Life", fr: "Vampirisme" },
    battleEffect: "HpDrain",
    type: "bug",
    damageFormula: "standard_damage",
    power_points: 15
  },
  leech_seed: {
    id: "leech_seed",
    names: { en: "Leech Seed", fr: "Vampigraine" },
    battleEffect: "LeechSeed",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 10
  },
  leer: {
    id: "leer",
    names: { en: "Leer", fr: "Groz’Yeux" },
    battleEffect: "TargetDefenseDown1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 30
  },
  lick: {
    id: "lick",
    names: { en: "Lick", fr: "Léchouille" },
    battleEffect: null,
    type: "ghost",
    damageFormula: "standard_damage",
    power_points: 30
  },
  light_screen: {
    id: "light_screen",
    names: { en: "Light Screen", fr: "Mur Lumière" },
    battleEffect: "LightScreen",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 30
  },
  lovely_kiss: {
    id: "lovely_kiss",
    names: { en: "Lovely Kiss", fr: "Grobisou" },
    battleEffect: "InflictSleep",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  low_kick: {
    id: "low_kick",
    names: { en: "Low Kick", fr: "Balayage" },
    battleEffect: "DamageByTargetWeight",
    type: "fighting",
    damageFormula: "non_standard_damage",
    power_points: 20
  },
  luster_purge: {
    id: "luster_purge",
    names: { en: "Luster Purge", fr: "Lumi-Éclat" },
    battleEffect: null,
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 5
  },
  mach_punch: {
    id: "mach_punch",
    names: { en: "Mach Punch", fr: "Mach Punch" },
    battleEffect: "Priority",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 30
  },
  magic_coat: {
    id: "magic_coat",
    names: { en: "Magic Coat", fr: "Reflet Magik" },
    battleEffect: "MagicCoat",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 15
  },
  magical_leaf: {
    id: "magical_leaf",
    names: { en: "Magical Leaf", fr: "Feuillemagik" },
    battleEffect: "CannotMiss",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 20
  },
  magnitude: {
    id: "magnitude",
    names: { en: "Magnitude", fr: "Ampleur" },
    battleEffect: "Magnitude",
    type: "ground",
    damageFormula: "non_standard_damage",
    power_points: 30
  },
  mean_look: {
    id: "mean_look",
    names: { en: "Mean Look", fr: "Regard Noir" },
    battleEffect: "BlockEscape",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 5
  },
  meditate: {
    id: "meditate",
    names: { en: "Meditate", fr: "Yoga" },
    battleEffect: "UserAttackUp1",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 40
  },
  mega_drain: {
    id: "mega_drain",
    names: { en: "Mega Drain", fr: "Méga-Sangsue" },
    battleEffect: "HpDrain",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 10
  },
  mega_kick: {
    id: "mega_kick",
    names: { en: "Mega Kick", fr: "Ultimawashi" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 5
  },
  mega_punch: {
    id: "mega_punch",
    names: { en: "Mega Punch", fr: "Ultimapoing" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  megahorn: {
    id: "megahorn",
    names: { en: "Megahorn", fr: "Mégacorne" },
    battleEffect: null,
    type: "bug",
    damageFormula: "standard_damage",
    power_points: 10
  },
  memento: {
    id: "memento",
    names: { en: "Memento", fr: "Souvenir" },
    battleEffect: "Memento",
    type: "dark",
    damageFormula: "no_damage",
    power_points: 10
  },
  metal_claw: {
    id: "metal_claw",
    names: { en: "Metal Claw", fr: "Griffe Acier" },
    battleEffect: null,
    type: "steel",
    damageFormula: "standard_damage",
    power_points: 35
  },
  metal_sound: {
    id: "metal_sound",
    names: { en: "Metal Sound", fr: "Strido-Son" },
    battleEffect: "TargetSpdefenseDown2",
    type: "steel",
    damageFormula: "no_damage",
    power_points: 40
  },
  meteor_mash: {
    id: "meteor_mash",
    names: { en: "Meteor Mash", fr: "Poing Météore" },
    battleEffect: null,
    type: "steel",
    damageFormula: "standard_damage",
    power_points: 10
  },
  metronome: {
    id: "metronome",
    names: { en: "Metronome", fr: "Métronome" },
    battleEffect: "Metronome",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  milk_drink: {
    id: "milk_drink",
    names: { en: "Milk Drink", fr: "Lait à Boire" },
    battleEffect: "Recover",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  mimic: {
    id: "mimic",
    names: { en: "Mimic", fr: "Copie" },
    battleEffect: "Mimic",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  minimize: {
    id: "minimize",
    names: { en: "Minimize", fr: "Lilliput" },
    battleEffect: "Minimize",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  mirror_coat: {
    id: "mirror_coat",
    names: { en: "Mirror Coat", fr: "Voile Miroir" },
    battleEffect: "MirrorCoat",
    type: "psychic",
    damageFormula: "non_standard_damage",
    power_points: 20
  },
  mirror_move: {
    id: "mirror_move",
    names: { en: "Mirror Move", fr: "Mimique" },
    battleEffect: "MirrorMove",
    type: "flying",
    damageFormula: "no_damage",
    power_points: 20
  },
  mist_ball: {
    id: "mist_ball",
    names: { en: "Mist Ball", fr: "Ball’Brume" },
    battleEffect: null,
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 5
  },
  moonlight: {
    id: "moonlight",
    names: { en: "Moonlight", fr: "Rayon Lune" },
    battleEffect: "SunRecover",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 5
  },
  mud_shot: {
    id: "mud_shot",
    names: { en: "Mud Shot", fr: "Tir de Boue" },
    battleEffect: "DamageAndTargetSpeedDown1",
    type: "ground",
    damageFormula: "standard_damage",
    power_points: 15
  },
  mud_slap: {
    id: "mud_slap",
    names: { en: "Mud Slap", fr: "Coud’Boue" },
    battleEffect: null,
    type: "ground",
    damageFormula: "standard_damage",
    power_points: 10
  },
  mud_sport: {
    id: "mud_sport",
    names: { en: "Mud Sport", fr: "Lance-Boue" },
    battleEffect: "MudSport",
    type: "ground",
    damageFormula: "no_damage",
    power_points: 15
  },
  muddy_water: {
    id: "muddy_water",
    names: { en: "Muddy Water", fr: "Ocroupi" },
    battleEffect: null,
    type: "water",
    damageFormula: "standard_damage",
    power_points: 10
  },
  needle_arm: {
    id: "needle_arm",
    names: { en: "Needle Arm", fr: "Poing Dard" },
    battleEffect: null,
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 15
  },
  night_shade: {
    id: "night_shade",
    names: { en: "Night Shade", fr: "Ténèbres" },
    battleEffect: "DamageIsLevel",
    type: "ghost",
    damageFormula: "non_standard_damage",
    power_points: 15
  },
  nightmare: {
    id: "nightmare",
    names: { en: "Nightmare", fr: "Cauchemar" },
    battleEffect: "Nightmare",
    type: "ghost",
    damageFormula: "no_damage",
    power_points: 15
  },
  octazooka: {
    id: "octazooka",
    names: { en: "Octazooka", fr: "Octazooka" },
    battleEffect: null,
    type: "water",
    damageFormula: "standard_damage",
    power_points: 10
  },
  outrage: {
    id: "outrage",
    names: { en: "Outrage", fr: "Colère" },
    battleEffect: null,
    type: "dragon",
    damageFormula: "standard_damage",
    power_points: 15
  },
  overheat: {
    id: "overheat",
    names: { en: "Overheat", fr: "Surchauffe" },
    battleEffect: "DamageAndUserSpattackDown2",
    type: "fire",
    damageFormula: "standard_damage",
    power_points: 5
  },
  pain_split: {
    id: "pain_split",
    names: { en: "Pain Split", fr: "Balance" },
    battleEffect: "PainSplit",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  perish_song: {
    id: "perish_song",
    names: { en: "Perish Song", fr: "Requiem" },
    battleEffect: "PerishSong",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 5
  },
  petal_dance: {
    id: "petal_dance",
    names: { en: "Petal Dance", fr: "Danse-Fleur" },
    battleEffect: null,
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 20
  },
  pin_missile: {
    id: "pin_missile",
    names: { en: "Pin Missile", fr: "Dard-Nuée" },
    battleEffect: "MultiHit",
    type: "bug",
    damageFormula: "standard_damage",
    power_points: 20
  },
  poison_fang: {
    id: "poison_fang",
    names: { en: "Poison Fang", fr: "Crochetvenin" },
    battleEffect: null,
    type: "poison",
    damageFormula: "standard_damage",
    power_points: 15
  },
  poison_sting: {
    id: "poison_sting",
    names: { en: "Poison Sting", fr: "Dard-Venin" },
    battleEffect: null,
    type: "poison",
    damageFormula: "standard_damage",
    power_points: 35
  },
  poison_tail: {
    id: "poison_tail",
    names: { en: "Poison Tail", fr: "Queue-Poison" },
    battleEffect: "PoisonTail",
    type: "poison",
    damageFormula: "standard_damage",
    power_points: 25
  },
  present: {
    id: "present",
    names: { en: "Present", fr: "Cadeau" },
    battleEffect: "Present",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 15
  },
  protect: {
    id: "protect",
    names: { en: "Protect", fr: "Abri" },
    battleEffect: "Protect",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  psybeam: {
    id: "psybeam",
    names: { en: "Psybeam", fr: "Rafale Psy" },
    battleEffect: null,
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 20
  },
  psych_up: {
    id: "psych_up",
    names: { en: "Psych Up", fr: "Boost" },
    battleEffect: "PsychUp",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  psychic: {
    id: "psychic",
    names: { en: "Psychic", fr: "Psyko" },
    battleEffect: null,
    type: "psychic",
    damageFormula: "standard_damage",
    power_points: 10
  },
  psywave: {
    id: "psywave",
    names: { en: "Psywave", fr: "Vague Psy" },
    battleEffect: "Psywave",
    type: "psychic",
    damageFormula: "non_standard_damage",
    power_points: 15
  },
  pursuit: {
    id: "pursuit",
    names: { en: "Pursuit", fr: "Poursuite" },
    battleEffect: "Pursuit",
    type: "dark",
    damageFormula: "standard_damage",
    power_points: 20
  },
  quick_attack: {
    id: "quick_attack",
    names: { en: "Quick Attack", fr: "Vive-Attaque" },
    battleEffect: "Priority",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 30
  },
  rain_dance: {
    id: "rain_dance",
    names: { en: "Rain Dance", fr: "Danse Pluie" },
    battleEffect: "RainDance",
    type: "water",
    damageFormula: "no_damage",
    power_points: 5
  },
  rapid_spin: {
    id: "rapid_spin",
    names: { en: "Rapid Spin", fr: "Tour Rapide" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 40
  },
  razor_leaf: {
    id: "razor_leaf",
    names: { en: "Razor Leaf", fr: "Tranch’Herbe" },
    battleEffect: "HighCritical",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 25
  },
  razor_wind: {
    id: "razor_wind",
    names: { en: "Razor Wind", fr: "Coupe-Vent" },
    battleEffect: "RazorWind",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  recover: {
    id: "recover",
    names: { en: "Recover", fr: "Soin" },
    battleEffect: "Recover",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  recycle: {
    id: "recycle",
    names: { en: "Recycle", fr: "Recyclage" },
    battleEffect: "Recycle",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  reflect: {
    id: "reflect",
    names: { en: "Reflect", fr: "Protection" },
    battleEffect: "Reflect",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 20
  },
  refresh: {
    id: "refresh",
    names: { en: "Refresh", fr: "Régénération" },
    battleEffect: "Refresh",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  rest: {
    id: "rest",
    names: { en: "Rest", fr: "Repos" },
    battleEffect: "Rest",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 10
  },
  return: {
    id: "return",
    names: { en: "Return", fr: "Retour" },
    battleEffect: "Return",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 20
  },
  revenge: {
    id: "revenge",
    names: { en: "Revenge", fr: "Vendetta" },
    battleEffect: "DamageRevenge",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 10
  },
  reversal: {
    id: "reversal",
    names: { en: "Reversal", fr: "Contre" },
    battleEffect: "LowHpHighDamage",
    type: "fighting",
    damageFormula: "non_standard_damage",
    power_points: 15
  },
  roar: {
    id: "roar",
    names: { en: "Roar", fr: "Hurlement" },
    battleEffect: "ForceSwitch",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  rock_blast: {
    id: "rock_blast",
    names: { en: "Rock Blast", fr: "Boule Roc" },
    battleEffect: "MultiHit",
    type: "rock",
    damageFormula: "standard_damage",
    power_points: 10
  },
  rock_slide: {
    id: "rock_slide",
    names: { en: "Rock Slide", fr: "Éboulement" },
    battleEffect: null,
    type: "rock",
    damageFormula: "standard_damage",
    power_points: 10
  },
  rock_throw: {
    id: "rock_throw",
    names: { en: "Rock Throw", fr: "Jet-Pierres" },
    battleEffect: null,
    type: "rock",
    damageFormula: "standard_damage",
    power_points: 15
  },
  rock_tomb: {
    id: "rock_tomb",
    names: { en: "Rock Tomb", fr: "Tomberoche" },
    battleEffect: "DamageAndTargetSpeedDown1",
    type: "rock",
    damageFormula: "standard_damage",
    power_points: 10
  },
  role_play: {
    id: "role_play",
    names: { en: "Role Play", fr: "Imitation" },
    battleEffect: "RolePlay",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 10
  },
  rolling_kick: {
    id: "rolling_kick",
    names: { en: "Rolling Kick", fr: "Mawashi Geri" },
    battleEffect: null,
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 15
  },
  rollout: {
    id: "rollout",
    names: { en: "Rollout", fr: "Roulade" },
    battleEffect: null,
    type: "rock",
    damageFormula: "standard_damage",
    power_points: 20
  },
  safeguard: {
    id: "safeguard",
    names: { en: "Safeguard", fr: "Rune Protect" },
    battleEffect: "Safeguard",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 25
  },
  sand_attack: {
    id: "sand_attack",
    names: { en: "Sand Attack", fr: "Jet de Sable" },
    battleEffect: "TargetAccuracyDown1",
    type: "ground",
    damageFormula: "no_damage",
    power_points: 15
  },
  sand_tomb: {
    id: "sand_tomb",
    names: { en: "Sand Tomb", fr: "Tourbi-Sable" },
    battleEffect: "Trap",
    type: "ground",
    damageFormula: "standard_damage",
    power_points: 15
  },
  sandstorm: {
    id: "sandstorm",
    names: { en: "Sandstorm", fr: "Tempêtesable" },
    battleEffect: "Sandstorm",
    type: "rock",
    damageFormula: "no_damage",
    power_points: 10
  },
  scary_face: {
    id: "scary_face",
    names: { en: "Scary Face", fr: "Grimace" },
    battleEffect: "TargetSpeedDown2",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  scratch: {
    id: "scratch",
    names: { en: "Scratch", fr: "Griffe" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 35
  },
  screech: {
    id: "screech",
    names: { en: "Screech", fr: "Grincement" },
    battleEffect: "TargetDefenseDown2",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 40
  },
  secret_power: {
    id: "secret_power",
    names: { en: "Secret Power", fr: "Force Cachée" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  seismic_toss: {
    id: "seismic_toss",
    names: { en: "Seismic Toss", fr: "Frappe Atlas" },
    battleEffect: "DamageIsLevel",
    type: "fighting",
    damageFormula: "non_standard_damage",
    power_points: 20
  },
  selfdestruct: {
    id: "selfdestruct",
    names: { en: "Selfdestruct", fr: "Destruction" },
    battleEffect: "Selfdestruction",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 5
  },
  shadow_ball: {
    id: "shadow_ball",
    names: { en: "Shadow Ball", fr: "Ball’Ombre" },
    battleEffect: null,
    type: "ghost",
    damageFormula: "standard_damage",
    power_points: 15
  },
  shadow_punch: {
    id: "shadow_punch",
    names: { en: "Shadow Punch", fr: "Poing Ombre" },
    battleEffect: "CannotMiss",
    type: "ghost",
    damageFormula: "standard_damage",
    power_points: 20
  },
  sheer_cold: {
    id: "sheer_cold",
    names: { en: "Sheer Cold", fr: "Glaciation" },
    battleEffect: "Ohko",
    type: "ice",
    damageFormula: "non_standard_damage",
    power_points: 5
  },
  shock_wave: {
    id: "shock_wave",
    names: { en: "Shock Wave", fr: "Onde de Choc" },
    battleEffect: "CannotMiss",
    type: "electric",
    damageFormula: "standard_damage",
    power_points: 20
  },
  signal_beam: {
    id: "signal_beam",
    names: { en: "Signal Beam", fr: "Rayon Signal" },
    battleEffect: null,
    type: "bug",
    damageFormula: "standard_damage",
    power_points: 15
  },
  silver_wind: {
    id: "silver_wind",
    names: { en: "Silver Wind", fr: "Vent Argenté" },
    battleEffect: null,
    type: "bug",
    damageFormula: "standard_damage",
    power_points: 5
  },
  sing: {
    id: "sing",
    names: { en: "Sing", fr: "Berceuse" },
    battleEffect: "InflictSleep",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 15
  },
  skill_swap: {
    id: "skill_swap",
    names: { en: "Skill Swap", fr: "Échange" },
    battleEffect: "SkillSwap",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 10
  },
  sky_attack: {
    id: "sky_attack",
    names: { en: "Sky Attack", fr: "Piqué" },
    battleEffect: "SkyAttack",
    type: "flying",
    damageFormula: "standard_damage",
    power_points: 5
  },
  sky_uppercut: {
    id: "sky_uppercut",
    names: { en: "Sky Uppercut", fr: "Stratopercut" },
    battleEffect: null,
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 15
  },
  slam: {
    id: "slam",
    names: { en: "Slam", fr: "Souplesse" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  slash: {
    id: "slash",
    names: { en: "Slash", fr: "Tranche" },
    battleEffect: "HighCritical",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  sleep_powder: {
    id: "sleep_powder",
    names: { en: "Sleep Powder", fr: "Poudre Dodo" },
    battleEffect: "InflictSleep",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 15
  },
  sleep_talk: {
    id: "sleep_talk",
    names: { en: "Sleep Talk", fr: "Blabla Dodo" },
    battleEffect: "SleepTalk",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  sludge: {
    id: "sludge",
    names: { en: "Sludge", fr: "Détritus" },
    battleEffect: null,
    type: "poison",
    damageFormula: "standard_damage",
    power_points: 20
  },
  sludge_bomb: {
    id: "sludge_bomb",
    names: { en: "Sludge Bomb", fr: "Bomb-Beurk" },
    battleEffect: null,
    type: "poison",
    damageFormula: "standard_damage",
    power_points: 10
  },
  smellingsalt: {
    id: "smellingsalt",
    names: { en: "SmellingSalt", fr: "Stimulant" },
    battleEffect: "SmellingSalt",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  smog: {
    id: "smog",
    names: { en: "Smog", fr: "Purédpois" },
    battleEffect: null,
    type: "poison",
    damageFormula: "standard_damage",
    power_points: 20
  },
  smokescreen: {
    id: "smokescreen",
    names: { en: "SmokeScreen", fr: "Brouillard" },
    battleEffect: "TargetAccuracyDown1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  snore: {
    id: "snore",
    names: { en: "Snore", fr: "Ronflement" },
    battleEffect: "Snore",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  softboiled: {
    id: "softboiled",
    names: { en: "Softboiled", fr: "E-Coque" },
    battleEffect: "Recover",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  solarbeam: {
    id: "solarbeam",
    names: { en: "SolarBeam", fr: "Lance-Soleil" },
    battleEffect: "Solarbeam",
    type: "grass",
    damageFormula: "standard_damage",
    power_points: 10
  },
  sonicboom: {
    id: "sonicboom",
    names: { en: "SonicBoom", fr: "Sonicboom" },
    battleEffect: "Sonicboom",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 20
  },
  spark: {
    id: "spark",
    names: { en: "Spark", fr: "Étincelle" },
    battleEffect: null,
    type: "electric",
    damageFormula: "standard_damage",
    power_points: 20
  },
  spider_web: {
    id: "spider_web",
    names: { en: "Spider Web", fr: "Toile" },
    battleEffect: "BlockEscape",
    type: "bug",
    damageFormula: "no_damage",
    power_points: 10
  },
  spike_cannon: {
    id: "spike_cannon",
    names: { en: "Spike Cannon", fr: "Picanon" },
    battleEffect: "MultiHit",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  spikes: {
    id: "spikes",
    names: { en: "Spikes", fr: "Picots" },
    battleEffect: "Spikes",
    type: "ground",
    damageFormula: "no_damage",
    power_points: 20
  },
  spit_up: {
    id: "spit_up",
    names: { en: "Spit Up", fr: "Relâche" },
    battleEffect: "SpitUp",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  spite: {
    id: "spite",
    names: { en: "Spite", fr: "Dépit" },
    battleEffect: "Spite",
    type: "ghost",
    damageFormula: "no_damage",
    power_points: 10
  },
  spore: {
    id: "spore",
    names: { en: "Spore", fr: "Spore" },
    battleEffect: "InflictSleep",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 15
  },
  steel_wing: {
    id: "steel_wing",
    names: { en: "Steel Wing", fr: "Aile d’Acier" },
    battleEffect: null,
    type: "steel",
    damageFormula: "standard_damage",
    power_points: 25
  },
  stockpile: {
    id: "stockpile",
    names: { en: "Stockpile", fr: "Stockage" },
    battleEffect: "Stockpile",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  stomp: {
    id: "stomp",
    names: { en: "Stomp", fr: "Écrasement" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  strength: {
    id: "strength",
    names: { en: "Strength", fr: "Force" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 15
  },
  string_shot: {
    id: "string_shot",
    names: { en: "String Shot", fr: "Sécrétion" },
    battleEffect: "TargetSpeedDown1",
    type: "bug",
    damageFormula: "no_damage",
    power_points: 40
  },
  stun_spore: {
    id: "stun_spore",
    names: { en: "Stun Spore", fr: "Para-Spore" },
    battleEffect: "InflictParalysis",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 30
  },
  submission: {
    id: "submission",
    names: { en: "Submission", fr: "Sacrifice" },
    battleEffect: "14Recoil",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 25
  },
  substitute: {
    id: "substitute",
    names: { en: "Substitute", fr: "Clonage" },
    battleEffect: "Substitute",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  sunny_day: {
    id: "sunny_day",
    names: { en: "Sunny Day", fr: "Zénith" },
    battleEffect: "SunnyDay",
    type: "fire",
    damageFormula: "no_damage",
    power_points: 5
  },
  super_fang: {
    id: "super_fang",
    names: { en: "Super Fang", fr: "Croc Fatal" },
    battleEffect: "SuperFang",
    type: "normal",
    damageFormula: "non_standard_damage",
    power_points: 10
  },
  superpower: {
    id: "superpower",
    names: { en: "Superpower", fr: "Surpuissance" },
    battleEffect: "Superpower",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 5
  },
  supersonic: {
    id: "supersonic",
    names: { en: "Supersonic", fr: "Ultrason" },
    battleEffect: "InflictConfusion",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  surf: {
    id: "surf",
    names: { en: "Surf", fr: "Surf" },
    battleEffect: null,
    type: "water",
    damageFormula: "standard_damage",
    power_points: 15
  },
  swagger: {
    id: "swagger",
    names: { en: "Swagger", fr: "Vantardise" },
    battleEffect: "Swagger",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 15
  },
  swallow: {
    id: "swallow",
    names: { en: "Swallow", fr: "Avale" },
    battleEffect: "Swallow",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  sweet_kiss: {
    id: "sweet_kiss",
    names: { en: "Sweet Kiss", fr: "Doux Baiser" },
    battleEffect: "InflictConfusion",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  sweet_scent: {
    id: "sweet_scent",
    names: { en: "Sweet Scent", fr: "Doux Parfum" },
    battleEffect: "TargetEvasionDown1",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 20
  },
  swift: {
    id: "swift",
    names: { en: "Swift", fr: "Météores" },
    battleEffect: "CannotMiss",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  swords_dance: {
    id: "swords_dance",
    names: { en: "Swords Dance", fr: "Danse-Lames" },
    battleEffect: "UserAttackUp2",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 30
  },
  synthesis: {
    id: "synthesis",
    names: { en: "Synthesis", fr: "Synthèse" },
    battleEffect: "SunRecover",
    type: "grass",
    damageFormula: "no_damage",
    power_points: 5
  },
  tackle: {
    id: "tackle",
    names: { en: "Tackle", fr: "Charge" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 35
  },
  tail_glow: {
    id: "tail_glow",
    names: { en: "Tail Glow", fr: "Lumiqueue" },
    battleEffect: "UserSpattackUp2",
    type: "bug",
    damageFormula: "no_damage",
    power_points: 20
  },
  tail_whip: {
    id: "tail_whip",
    names: { en: "Tail Whip", fr: "Mimi-Queue" },
    battleEffect: "TargetDefenseDown1",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 30
  },
  take_down: {
    id: "take_down",
    names: { en: "Take Down", fr: "Bélier" },
    battleEffect: "14Recoil",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  taunt: {
    id: "taunt",
    names: { en: "Taunt", fr: "Provoc" },
    battleEffect: "Taunt",
    type: "dark",
    damageFormula: "no_damage",
    power_points: 20
  },
  teeter_dance: {
    id: "teeter_dance",
    names: { en: "Teeter Dance", fr: "Danse-Folle" },
    battleEffect: "TeeterDance",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  thrash: {
    id: "thrash",
    names: { en: "Thrash", fr: "Mania" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  thunder: {
    id: "thunder",
    names: { en: "Thunder", fr: "Fatal-Foudre" },
    battleEffect: null,
    type: "electric",
    damageFormula: "standard_damage",
    power_points: 10
  },
  thunder_wave: {
    id: "thunder_wave",
    names: { en: "Thunder Wave", fr: "Cage-Éclair" },
    battleEffect: "InflictParalysis",
    type: "electric",
    damageFormula: "no_damage",
    power_points: 20
  },
  thunderbolt: {
    id: "thunderbolt",
    names: { en: "Thunderbolt", fr: "Tonnerre" },
    battleEffect: null,
    type: "electric",
    damageFormula: "standard_damage",
    power_points: 15
  },
  thunderpunch: {
    id: "thunderpunch",
    names: { en: "ThunderPunch", fr: "Poing-Éclair" },
    battleEffect: null,
    type: "electric",
    damageFormula: "standard_damage",
    power_points: 15
  },
  tickle: {
    id: "tickle",
    names: { en: "Tickle", fr: "Chatouille" },
    battleEffect: "Tickle",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  torment: {
    id: "torment",
    names: { en: "Torment", fr: "Tourmente" },
    battleEffect: "Torment",
    type: "dark",
    damageFormula: "no_damage",
    power_points: 15
  },
  toxic: {
    id: "toxic",
    names: { en: "Toxic", fr: "Toxik" },
    battleEffect: "Toxic",
    type: "poison",
    damageFormula: "no_damage",
    power_points: 10
  },
  transform: {
    id: "transform",
    names: { en: "Transform", fr: "Morphing" },
    battleEffect: "Transform",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  tri_attack: {
    id: "tri_attack",
    names: { en: "Tri Attack", fr: "Triplattaque" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  trick: {
    id: "trick",
    names: { en: "Trick", fr: "Tourmagik" },
    battleEffect: "SwitchItems",
    type: "psychic",
    damageFormula: "no_damage",
    power_points: 10
  },
  triple_kick: {
    id: "triple_kick",
    names: { en: "Triple Kick", fr: "Triple Pied" },
    battleEffect: "MultiHit",
    type: "fighting",
    damageFormula: "standard_damage",
    power_points: 10
  },
  twineedle: {
    id: "twineedle",
    names: { en: "Twineedle", fr: "Double-Dard" },
    battleEffect: "MultiHit",
    type: "bug",
    damageFormula: "standard_damage",
    power_points: 20
  },
  twister: {
    id: "twister",
    names: { en: "Twister", fr: "Ouragan" },
    battleEffect: null,
    type: "dragon",
    damageFormula: "standard_damage",
    power_points: 20
  },
  uproar: {
    id: "uproar",
    names: { en: "Uproar", fr: "Brouhaha" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  vicegrip: {
    id: "vicegrip",
    names: { en: "ViceGrip", fr: "Force Poigne" },
    battleEffect: null,
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 30
  },
  water_gun: {
    id: "water_gun",
    names: { en: "Water Gun", fr: "Pistolet à O" },
    battleEffect: null,
    type: "water",
    damageFormula: "standard_damage",
    power_points: 25
  },
  water_pulse: {
    id: "water_pulse",
    names: { en: "Water Pulse", fr: "Vibraqua" },
    battleEffect: null,
    type: "water",
    damageFormula: "standard_damage",
    power_points: 20
  },
  water_spout: {
    id: "water_spout",
    names: { en: "Water Spout", fr: "Giclédo" },
    battleEffect: "HighHpHighDamage",
    type: "water",
    damageFormula: "standard_damage",
    power_points: 5
  },
  waterfall: {
    id: "waterfall",
    names: { en: "Waterfall", fr: "Cascade" },
    battleEffect: null,
    type: "water",
    damageFormula: "standard_damage",
    power_points: 15
  },
  whirlpool: {
    id: "whirlpool",
    names: { en: "Whirlpool", fr: "Siphon" },
    battleEffect: "Trap",
    type: "water",
    damageFormula: "standard_damage",
    power_points: 15
  },
  whirlwind: {
    id: "whirlwind",
    names: { en: "Whirlwind", fr: "Cyclone" },
    battleEffect: "ForceSwitch",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 20
  },
  will_o_wisp: {
    id: "will_o_wisp",
    names: { en: "Will-O-Wisp", fr: "Feu Follet" },
    battleEffect: "InflictBurn",
    type: "fire",
    damageFormula: "no_damage",
    power_points: 15
  },
  wish: {
    id: "wish",
    names: { en: "Wish", fr: "Vœu" },
    battleEffect: "Wish",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 10
  },
  withdraw: {
    id: "withdraw",
    names: { en: "Withdraw", fr: "Repli" },
    battleEffect: "UserDefenseUp1",
    type: "water",
    damageFormula: "no_damage",
    power_points: 40
  },
  wrap: {
    id: "wrap",
    names: { en: "Wrap", fr: "Ligotage" },
    battleEffect: "Trap",
    type: "normal",
    damageFormula: "standard_damage",
    power_points: 20
  },
  yawn: {
    id: "yawn",
    names: { en: "Yawn", fr: "Bâillement" },
    battleEffect: "Yawn",
    type: "normal",
    damageFormula: "no_damage",
    power_points: 10
  },
  zap_cannon: {
    id: "zap_cannon",
    names: { en: "Zap Cannon", fr: "Élecanon" },
    battleEffect: null,
    type: "electric",
    damageFormula: "standard_damage",
    power_points: 5
  }
};
