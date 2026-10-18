window.moveAiRoutines = {
  absorb: {
    id: "absorb",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\t80.5% (206/256) of score -3 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\t80,5 % (206/256) de chances d’avoir un score -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  acid: {
    id: "acid",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  acid_armor: {
    id: "acid_armor",
    routine: {
      singles: {
        en: [
          "If the user's current defense is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a special move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si la défense actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était spéciale :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  aerial_ace: {
    id: "aerial_ace",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current accuracy is reduced to -5 or lower, or the target's current evasion is boosted to +5 or more:\n\tScore +1 and continue\n\nIf the user's current accuracy is reduced to -3 or lower, or the target's current evasion is boosted to +3 or more:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la précision actuelle du lanceur est diminuée à -5 ou moins, ou si l’esquive actuelle de la cible est augmentée à +5 ou plus :\n\tScore +1 et continuation\n\nSi la précision actuelle du lanceur est diminuée à -3 ou moins, ou si l’esquive actuelle de la cible est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  agility: {
    id: "agility",
    routine: {
      singles: {
        en: [
          "If the user's current speed is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the foe:\n\tScore -3 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score +3 and terminate"
        ],
        fr: [
          "Si la vitesse actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant l’adversaire :\n\tScore -3 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score +3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  air_cutter: {
    id: "air_cutter",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  amnesia: {
    id: "amnesia",
    routine: {
      singles: {
        en: [
          "If the user's current special defense is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current special defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current special defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a physical move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si la défense spéciale actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense spéciale actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense spéciale actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était physique :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  ancientpower: {
    id: "ancientpower",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  aromatherapy: {
    id: "aromatherapy",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the foe, and all of its other party members, are not statused:\n\tScore -5 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’adversaire et tous les autres membres de son équipe n’ont aucun problème de statut :\n\tScore -5 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  assist: {
    id: "assist",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  astonish: {
    id: "astonish",
    routine: {
      singles: {
        en: [
          "If the target has a Normal typing:\n\tIf the target also has a Psychic, Dark, Steel, or Ghost Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Normal :\n\tSi la cible possède aussi le type Psy, Ténèbres, Acier ou Spectre :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  attract: {
    id: "attract",
    routine: {
      singles: {
        en: [
          "If the target is already infatuated:\n\tScore -10 and terminate\n\nIf the target's ability is Oblivious:\n\tScore -10 and terminate\n\nIf the target is not the opposite gender as the user:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible est déjà sous l’effet d’Attraction :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Benêt :\n\tScore -10 et arrêt\n\nSi la cible n’est pas du sexe opposé au lanceur :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  aurora_beam: {
    id: "aurora_beam",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  barrier: {
    id: "barrier",
    routine: {
      singles: {
        en: [
          "If the user's current defense is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a special move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si la défense actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était spéciale :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  baton_pass: {
    id: "baton_pass",
    routine: {
      singles: {
        en: [
          "If the user has no other living party members:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current attack, defense, special attack, special defense, or evasion is boosted to +3 or more:\n\tIf the user will move before the foe, and the user's HP is over 60%:\n\t\tNo scoring change and terminate\n\t\n\tIf the user will move after the foe, and the user's HP is over 70%:\n\t\tNo scoring change and terminate\n\t\n\tOtherwise:\n\t\t68.8% (176/256) chance of score +2 and terminate\n\nIf the user's current attack, defense, special attack, special defense, or evasion is boosted to +2 or more:\n\tIf the user will move before the foe:\n\t\tIf the user's HP is over 60%:\n\t\t\tScore -2 and terminate\n\t\tElse:\n\t\t\tNo scoring change and terminate\n\t\n\tIf the user will move after the foe:\n\t\tIf the user's HP is under 70%:\n\t\t\tNo scoring change and terminate\n\t\tElse:\n\t\t\tScore -2 and terminate\n\nOtherwise:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si le lanceur n’a aucun autre Pokémon encore en état de combattre dans son équipe :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque, la défense, l’attaque spéciale, la défense spéciale ou l’esquive actuelle du lanceur est augmentée à +3 ou plus :\n\tSi le lanceur agit avant l’adversaire et que ses PV sont supérieurs à 60 % :\n\t\tAucune modification du score et arrêt\n\t\n\tSi le lanceur agit après l’adversaire et que ses PV sont supérieurs à 70 % :\n\t\tAucune modification du score et arrêt\n\t\n\tSinon :\n\t\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt\n\nSi l’attaque, la défense, l’attaque spéciale, la défense spéciale ou l’esquive actuelle du lanceur est augmentée à +2 ou plus :\n\tSi le lanceur agit avant l’adversaire :\n\t\tSi les PV du lanceur sont supérieurs à 60 % :\n\t\t\tScore -2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification du score et arrêt\n\t\n\tSi le lanceur agit après l’adversaire :\n\t\tSi les PV du lanceur sont inférieurs à 70 % :\n\t\t\tAucune modification du score et arrêt\n\t\tSinon :\n\t\t\tScore -2 et arrêt\n\nSinon :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  belly_drum: {
    id: "belly_drum",
    routine: {
      singles: {
        en: [
          "If the user's HP is under 51%:\n\tScore -10 and terminate",
          "If the user's current attack is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 90%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si les PV du lanceur sont inférieurs à 51 % :\n\tScore -10 et arrêt",
          "Si l’attaque actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 90 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bide: {
    id: "bide",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 91%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 91 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bind: {
    id: "bind",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bite: {
    id: "bite",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  blaze_kick: {
    id: "blaze_kick",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  blizzard: {
    id: "blizzard",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  block: {
    id: "block",
    routine: {
      singles: {
        en: [
          "If the target is already prevented from escaping:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible ne peut déjà plus fuir :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  body_slam: {
    id: "body_slam",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bone_club: {
    id: "bone_club",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bonemerang: {
    id: "bonemerang",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bounce: {
    id: "bounce",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target knows the move Protect or Detect:\n\tScore -1 and terminate",
          "If the target is badly poisoned, or under the effect or Curse or Leech Seed:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the current weather is hail and the user is is Rock, Ground, or Steel type, or the current weather is sandstorm and the user is Ice type:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the user will move after the target:\n\tNo scoring change and terminate\n\nIf the last move used by the target was Lock-On or Mind Reader:\n\tNo scoring change and terminate\n\nOtherwise:\n\t68.8% (176/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Abri ou Détection :\n\tScore -1 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet de Malédiction ou de Vampigraine :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi la météo actuelle est la grêle et que le lanceur est de type Roche, Sol ou Acier, ou si la météo actuelle est la tempête de sable et que le lanceur est de type Glace :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi le lanceur agit après la cible :\n\tAucune modification du score et arrêt\n\nSi la dernière capacité utilisée par la cible était Verrouillage ou Lire-Esprit :\n\tAucune modification du score et arrêt\n\nSinon :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  brick_break: {
    id: "brick_break",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's side of the field has Reflect active:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le côté du terrain de la cible est sous l’effet de Protection :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bubblebeam: {
    id: "bubblebeam",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bulk_up: {
    id: "bulk_up",
    routine: {
      singles: {
        en: [
          "If the user's current attack is boosted to +6:\n\tScore -10 and terminate\n\nIf the user's current defense is boosted to +6:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a special move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt\n\nSi la défense actuelle du lanceur est augmentée à +6 :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était spéciale :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  bullet_seed: {
    id: "bullet_seed",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  calm_mind: {
    id: "calm_mind",
    routine: {
      singles: {
        en: [
          "If the user's current special attack is boosted to +6:\n\tScore -10 and terminate\n\nIf the user's current special defense is boosted to +6:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current special defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current special defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a physical move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si l’attaque spéciale actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt\n\nSi la défense spéciale actuelle du lanceur est augmentée à +6 :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense spéciale actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense spéciale actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était physique :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  charm: {
    id: "charm",
    routine: {
      singles: {
        en: [
          "If the target's attack is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is Hyper Cutter:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's current attack level is not +0:\n\tScore -1 and continue\n\nIf the target's current attack level is not +0, and the user's HP is under 91%:\n\tScore -1 and continue\n\nIf the target's current attack is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and continue\n\nIf either of the foe's types is not Normal, Fighting, Ground, Rock, Bug, or Steel:\n\t80.5% (206/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si l’attaque de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Hyper Cutter :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le niveau actuel de attaque de la cible n’est pas à +0 :\n\tScore -1 et continuation\n\nSi le niveau actuel de attaque de la cible n’est pas à +0 et que les PV du lanceur sont inférieurs à 91 % :\n\tScore -1 et continuation\n\nSi l’attaque actuelle de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et continuation\n\nSi au moins l’un des types de l’adversaire n’est pas Normal, Combat, Sol, Roche, Insecte ou Acier :\n\t80,5 % (206/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  clamp: {
    id: "clamp",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  comet_punch: {
    id: "comet_punch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  confuse_ray: {
    id: "confuse_ray",
    routine: {
      singles: {
        en: [
          "If the target is already confused:\n\tScore -5 and terminate\n\nIf the target's ability is Own Tempo:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is over 70%:\n\tNo scoring change and terminate\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the target's HP is under 51%:\n\tScore -1 and continue\n\nIf the target's HP is under 31%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la cible est déjà confuse :\n\tScore -5 et arrêt\n\nSi le talent de la cible est Tempo Perso :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont supérieurs à 70 % :\n\tAucune modification du score et arrêt\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV de la cible sont inférieurs à 51 % :\n\tScore -1 et continuation\n\nSi les PV de la cible sont inférieurs à 31 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  confusion: {
    id: "confusion",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  cosmic_power: {
    id: "cosmic_power",
    routine: {
      singles: {
        en: [
          "If the user's current defense is boosted to +6:\n\tScore -10 and terminate\n\nIf the user's current special defense is boosted to +6:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current special defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current special defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a physical move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si la défense actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt\n\nSi la défense spéciale actuelle du lanceur est augmentée à +6 :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense spéciale actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense spéciale actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était physique :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  cotton_spore: {
    id: "cotton_spore",
    routine: {
      singles: {
        en: [
          "If the target's speed is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is certainly Speed Boost:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tScore -3 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la vitesse de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est assurément Turbo :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tScore -3 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  counter: {
    id: "counter",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the foe is asleep, infatuated, or confused:\n\tScore -1 and terminate\n\nIf the user's HP is under 31%:\n\t96.1% (246/256) chance of score -1 and continue\n\nIf the user's HP is under 51%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user also has the move Mirror Coat:\n\t60.9% (156/256) chance of score +4 and terminate\n\nIf the foe is under the effect of Taunt:\n\t60.9% (156/256) chance of score +1 and continue\n\nIf the last move used by foe is damaging:\t\n\tIf the last move used by the foe is special:\n\t\tScore -1 and terminate\n\tElse:\n\t\t60.9% (156/256) chance of score +1 and terminate\n\nIf either of the foe's types is Physical:\n\tNo scoring change and terminate\n\nOtherwise:\n\t49% (4017/8192) chance of score +4 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’adversaire dort, est sous l’effet d’Attraction ou est confus :\n\tScore -1 et arrêt\n\nSi les PV du lanceur sont inférieurs à 31 % :\n\t96,1 % (246/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 51 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi le lanceur possède aussi Voile Miroir :\n\t60,9 % (156/256) de chances d’avoir un score +4 et arrêt\n\nSi l’adversaire est sous l’effet de Provoc :\n\t60,9 % (156/256) de chances d’avoir un score +1 et continuation\n\nSi la dernière capacité utilisée par l’adversaire infligeait des dégâts :\t\n\tSi la dernière capacité utilisée par l’adversaire était spéciale :\n\t\tScore -1 et arrêt\n\tSinon :\n\t\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt\n\nSi l’un des types de l’adversaire est physique :\n\tAucune modification du score et arrêt\n\nSinon :\n\t49 % (4017/8192) de chances d’avoir un score +4 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  covet: {
    id: "covet",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user is holding an item in the list below:\n\t80.5% (206/256) chance of score +1 and terminate\n\nOtherwise:\n\tScore -2 and terminate",
          "Chesto Berry\nLum Berry\nBerry Juice\nOran Berry\nSitrus Berry\nBrightPowder\nLax Incense\nLeftovers\nLight Ball\nThick Club"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur tient un objet de la liste ci-dessous :\n\t80,5 % (206/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\tScore -2 et arrêt",
          "Baie Maron\nBaie Prine\nJus de Baie\nBaie Oran\nBaie Sitrus\nPoudreclaire\nEncens Doux\nRestes\nBalle Lumière\nMasse Os"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  crabhammer: {
    id: "crabhammer",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  cross_chop: {
    id: "cross_chop",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  crunch: {
    id: "crunch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  crush_claw: {
    id: "crush_claw",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  curse: {
    id: "curse",
    routine: {
      singles: {
        en: [
          "If the user's current attack is boosted to +6:\n\tScore -10 and terminate\n\nIf the user's current defense is boosted to +6:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user is Ghost type:\n\tIf the user's HP is under 81%:\n\t\tScore -1 and terminate\n\t\n\tOtherwise:\n\t\tNo scoring change and terminate\n\nIf the user's defense is boosted to:\n\t+4 or Higher:\n\t\tNo scoring change and terminate\n\t+2 or +3:\n\t\t50% (128/256) chance of score +0 and terminate\n\t\t50% (128/256) chance of score +1 and terminate\n\t+1:\n\t\t25% (64/256)\tchance of score +0 and terminate\n\t\t50% (128/256)\tchance of score +1 and terminate\n\t\t25% (64/256)\tchance of score +2 and terminate\n\t+0 or Lower:\n\t\t12.5% (32/256)\tchance of score +0 and terminate\n\t\t37.5% (96/256)\tchance of score +1 and terminate\n\t\t37.5% (96/256)\tchance of score +2 and terminate\n\t\t12.5% (32/256)\tchance of score +3 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt\n\nSi la défense actuelle du lanceur est augmentée à +6 :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur est de type Spectre :\n\tSi les PV du lanceur sont inférieurs à 81 % :\n\t\tScore -1 et arrêt\n\t\n\tSinon :\n\t\tAucune modification du score et arrêt\n\nSi la défense du lanceur est augmentée à :\n\t+4 ou plus :\n\t\tAucune modification du score et arrêt\n\t+2 ou +3 :\n\t\t50 % (128/256) de chances d’avoir un score +0 et arrêt\n\t\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\t+1 :\n\t\t25% (64/256)\tde chances d’avoir un score +0 et arrêt\n\t\t50% (128/256)\tde chances d’avoir un score +1 et arrêt\n\t\t25% (64/256)\tde chances d’avoir un score +2 et arrêt\n\t+0 ou moins :\n\t\t12.5% (32/256)\tde chances d’avoir un score +0 et arrêt\n\t\t37.5% (96/256)\tde chances d’avoir un score +1 et arrêt\n\t\t37.5% (96/256)\tde chances d’avoir un score +2 et arrêt\n\t\t12.5% (32/256)\tde chances d’avoir un score +3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  defense_curl: {
    id: "defense_curl",
    routine: {
      singles: {
        en: [
          "If the user's current defense is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la défense actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  destiny_bond: {
    id: "destiny_bond",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move after the foe, or the user's HP is over 70%:\n\tScore -1 and terminate\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the user's HP is under 51%:\n\t50% (128/256) chance of score +1 and continue\n\nIf the user's HP is under 31%:\n\t60.9% (156/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit après l’adversaire ou que ses PV sont supérieurs à 70 % :\n\tScore -1 et arrêt\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 51 % :\n\t50 % (128/256) de chances d’avoir un score +1 et continuation\n\nSi les PV du lanceur sont inférieurs à 31 % :\n\t60,9 % (156/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  detect: {
    id: "detect",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's consecutive protection count is 2 or more:\n\tScore -2 and terminate\n\nIf the user is badly poisoned, or infatuated, or under the effect of Curse, Leech Seed, Yawn, or Perish Song, or the foe knows the move Recover, Slack Off, or Defense Curl:\n\tIf the foe's last move was not Lock-On or Mind Reader:\n\t\tNo scoring change and terminate\n\tElse:\n\t\tScore -2 and terminate\n\nIf the foe is badly poisoned, or infatuated, or under the effect of Curse, Leech Seed, Yawn, or Perish Song, or the foe's last move was not Lock-On or Mind Reader:\n\tScore +2 and continue\nElse:\n\t33.2% (85/256) chance of score +2 and continue\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the user's consecutive protection count is 1:\n\tScore -1 and continue\n\t50% (128/256) chance of score -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le compteur de protections consécutives du lanceur est de 2 ou plus :\n\tScore -2 et arrêt\n\nSi le lanceur est gravement empoisonné, sous l’effet d’Attraction, de Malédiction, de Vampigraine, de Bâillement ou de Requiem, ou si l’adversaire connaît Soin, Paresse ou Boul’Armure :\n\tSi la dernière capacité utilisée par l’adversaire n’était pas Verrouillage ou Lire-Esprit :\n\t\tAucune modification du score et arrêt\n\tSinon :\n\t\tScore -2 et arrêt\n\nSi l’adversaire est gravement empoisonné, sous l’effet d’Attraction, de Malédiction, de Vampigraine, de Bâillement ou de Requiem, ou si sa dernière capacité utilisée n’était pas Verrouillage ou Lire-Esprit :\n\tScore +2 et continuation\nSinon :\n\t33,2 % (85/256) de chances d’avoir un score +2 et continuation\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi le compteur de protections consécutives du lanceur est de 1 :\n\tScore -1 et continuation\n\t50 % (128/256) de chances d’avoir un score -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dig: {
    id: "dig",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target knows the move Protect or Detect:\n\tScore -1 and terminate",
          "If the target is badly poisoned, or under the effect or Curse or Leech Seed:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the current weather is hail and the user is is Rock, Ground, or Steel type, or the current weather is sandstorm and the user is Ice type:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the user will move after the target:\n\tNo scoring change and terminate\n\nIf the last move used by the target was Lock-On or Mind Reader:\n\tNo scoring change and terminate\n\nOtherwise:\n\t68.8% (176/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Abri ou Détection :\n\tScore -1 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet de Malédiction ou de Vampigraine :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi la météo actuelle est la grêle et que le lanceur est de type Roche, Sol ou Acier, ou si la météo actuelle est la tempête de sable et que le lanceur est de type Glace :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi le lanceur agit après la cible :\n\tAucune modification du score et arrêt\n\nSi la dernière capacité utilisée par la cible était Verrouillage ou Lire-Esprit :\n\tAucune modification du score et arrêt\n\nSinon :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  disable: {
    id: "disable",
    routine: {
      singles: {
        en: [
          "If the target is already disabled:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move after the target:\n\tNo scoring change and terminate\n\nIf the last move used by the target is nondamaging, or the target has not yet used a move:\n\t60.9% (156/256) chance of score -1 and terminate\n\nOtherwise:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si une capacité de la cible est déjà sous l’effet d’Entrave :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit après la cible :\n\tAucune modification du score et arrêt\n\nSi la dernière capacité utilisée par la cible n’infligeait pas de dégâts, ou si la cible n’a pas encore utilisé de capacité :\n\t60,9 % (156/256) de chances d’avoir un score -1 et arrêt\n\nSinon :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dive: {
    id: "dive",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target knows the move Protect or Detect:\n\tScore -1 and terminate",
          "If the target is badly poisoned, or under the effect or Curse or Leech Seed:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the current weather is hail and the user is is Rock, Ground, or Steel type, or the current weather is sandstorm and the user is Ice type:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the user will move after the target:\n\tNo scoring change and terminate\n\nIf the last move used by the target was Lock-On or Mind Reader:\n\tNo scoring change and terminate\n\nOtherwise:\n\t68.8% (176/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Abri ou Détection :\n\tScore -1 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet de Malédiction ou de Vampigraine :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi la météo actuelle est la grêle et que le lanceur est de type Roche, Sol ou Acier, ou si la météo actuelle est la tempête de sable et que le lanceur est de type Glace :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi le lanceur agit après la cible :\n\tAucune modification du score et arrêt\n\nSi la dernière capacité utilisée par la cible était Verrouillage ou Lire-Esprit :\n\tAucune modification du score et arrêt\n\nSinon :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dizzy_punch: {
    id: "dizzy_punch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  double_edge: {
    id: "double_edge",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  double_kick: {
    id: "double_kick",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  double_team: {
    id: "double_team",
    routine: {
      singles: {
        en: [
          "If the user's current evasion is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is over 89%:\n\t60.9% (156/256) chance of score +3 and continue\n\nIf the user's current evasion is boosted to +3 or more:\n\t50% (128/256) chance of score -1 and continue\n\nIf the foe is badly poisoned:\n\tIf the user's HP is over 50%:\n\t\t80.5% (206/256) chance of score +3 and continue\n\tElse:\n\t\t55.3% (1133/2048) chance of score +3 and continue\n\nIf the foe is under the effect of Leech Seed:\n\t72.7% (186/256) chance of score +3 and continue\n\nIf the user is under the effect of Ingrain:\n\t50% (128/256) chance of score +2 and continue\n\nIf the foe is under the effect of Curse:\n\t72.7% (186/256) chance of score +3 and continue\n\nIf the user's HP is over 70%, or the user's current evasion level is +0:\n\tNo scoring change and terminate\n\nIf the user's HP is under 40%, or the foe's HP is under 40%:\n\tScore -2 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si l’esquive actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont supérieurs à 89 % :\n\t60,9 % (156/256) de chances d’avoir un score +3 et continuation\n\nSi l’esquive actuelle du lanceur est augmentée à +3 ou plus :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi l’adversaire est gravement empoisonné :\n\tSi les PV du lanceur sont supérieurs à 50 % :\n\t\t80,5 % (206/256) de chances d’avoir un score +3 et continuation\n\tSinon :\n\t\t55,3 % (1133/2048) de chances d’avoir un score +3 et continuation\n\nSi l’adversaire est sous l’effet de Vampigraine :\n\t72,7 % (186/256) de chances d’avoir un score +3 et continuation\n\nSi le lanceur est sous l’effet de Racines :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi l’adversaire est sous l’effet de Malédiction :\n\t72,7 % (186/256) de chances d’avoir un score +3 et continuation\n\nSi les PV du lanceur sont supérieurs à 70 % ou si son niveau actuel d’esquive est à +0 :\n\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % ou si les PV de l’adversaire sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  doubleslap: {
    id: "doubleslap",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dragon_claw: {
    id: "dragon_claw",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dragon_dance: {
    id: "dragon_dance",
    routine: {
      singles: {
        en: [
          "If the user's current attack is boosted to +6:\n\tScore -10 and terminate\n\nIf the user's current speed is boosted to +6:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move after the foe:\n\t50% (128/256) chance of score +1 and terminate\n\nIf the user's HP is under 51%:\n\t72.7% (186/256) chance of score -1 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt\n\nSi la vitesse actuelle du lanceur est augmentée à +6 :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit après l’adversaire :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSi les PV du lanceur sont inférieurs à 51 % :\n\t72,7 % (186/256) de chances d’avoir un score -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dragon_rage: {
    id: "dragon_rage",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dragonbreath: {
    id: "dragonbreath",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dream_eater: {
    id: "dream_eater",
    routine: {
      singles: {
        en: [
          "If the target is not asleep:\n\tScore -8 and terminate",
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la cible ne dort pas :\n\tScore -8 et arrêt",
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  drill_peck: {
    id: "drill_peck",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  dynamicpunch: {
    id: "dynamicpunch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  earthquake: {
    id: "earthquake",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms Levitate for the user’s ally or the user’s ally has the Flying type :\n\tScore +2 and terminate\nOtherwise :\n\tIf the user’s ally has the Fire type or the user’s ally has the Electric type or the user’s ally has the Poison type or the user’s ally has the Rock type :\n\t\tScore -10 and terminate\n\tOtherwise :\n\t\tScore -3 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Lévitation pour l’allié du lanceur ou l’allié du lanceur possède le type Vol :\n\tScore +2 et arrêt\nSinon :\n\tSi l’allié du lanceur possède le type Feu ou l’allié du lanceur possède le type Électrik ou l’allié du lanceur possède le type Poison ou l’allié du lanceur possède le type Roche :\n\t\tScore -10 et arrêt\n\tSinon :\n\t\tScore -3 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  ember: {
    id: "ember",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  encore: {
    id: "encore",
    routine: {
      singles: {
        en: [
          "If the target is already under the effect of Encore:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is under the effect of Disable:\n\t88.3% (226/256) chance of score +3 and terminate\n\nIf the user will move after the target:\n\tScore -2 and terminate\n\nIf the last move used by the target is in the list below:\n\t88.3% (226/256) chance of score +3 and terminate\n\nOtherwise:\n\tScore -2 and terminate",
          "Dream Eater\nMeditate\nSharpen\nHowl\nHarden\nWithdraw\nGrowth\nHaze\nWhirlwind\nRoar\nConversion\nToxic\nLight Screen\nRest\nSuper Fang\nAmnesia\nSupersonic\nConfuse Ray\nSweet Kiss\nPoisonPowder\nPoison Gas\nStun Spore\nThunder Wave\nGlare\nLeech seed\nSplash\nSwords Dance\nEncore\nConversion2\nMind Reader\nLock-On\nHeal Bell\nAromatherapy\nSpider Web\nMean Look\nBlock\nNightmare\nProtect\nDetect\nSkill Swap\nForesight\nOdor Sleuth\nPerish Song\nSandstorm\nEndure\nSwagger\nAttract\nSafeguard\nRain Dance\nSunny Day\nBelly Drum\nPsych Up\nFuture Sight\nDoom Desire\nFake Out\nStockpile\nSpit Up\nSwallow\nHail\nTorment\nWill-O-Wisp\nFollow me\nCharge\nTrick\nRole Play\nIngrain\nRecycle\nKnock Off\nImprison\nRefresh\nGrudge\nTeeter Dance\nMud Sport\nWater Sport\nDragon Dance\nCamouflage"
        ],
        fr: [
          "Si la cible est déjà sous l’effet d’Encore :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est sous l’effet d’Entrave :\n\t88,3 % (226/256) de chances d’avoir un score +3 et arrêt\n\nSi le lanceur agit après la cible :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par la cible est dans la liste ci-dessous :\n\t88,3 % (226/256) de chances d’avoir un score +3 et arrêt\n\nSinon :\n\tScore -2 et arrêt",
          "Dévorêve\nMéditation\nAffûtage\nGrondement\nArmure\nRepli\nCroissance\nBuée Noire\nCyclone\nHurlement\nConversion\nToxik\nMur Lumière\nRepos\nCroc Fatal\nAmnésie\nUltrason\nOnde Folie\nDoux Baiser\nPoudre Toxik\nGaz Toxik\nPara-Spore\nCage-Éclair\nIntimidation\nLeech seed\nTrempette\nDanse Lames\nEncore\nConversion 2\nLire-Esprit\nVerrouillage\nGlas de Soin\nAromathérapie\nToile\nRegard Noir\nBarrage\nCauchemar\nAbri\nDétection\nÉchange\nClairvoyance\nFlair\nRequiem\nTempête de Sable\nTénacité\nVantardise\nAttraction\nRune Abri\nDanse Pluie\nZénith\nCognobidon\nBoost\nPrescience\nCarnareket\nBluff\nStockage\nRelâche\nAvale\nGrêle\nTourmente\nFeu Follet\nPar Ici\nChargeur\nTourmagik\nImitation\nRacines\nRecyclage\nSabotage\nPossessif\nRégénération\nRancune\nDanse-Folle\nLance-Boue\nTourniquet\nDanse Draco\nCamouflage"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  endeavor: {
    id: "endeavor",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is under 70%:\n\tScore -1 and terminate\n\nIf the user will move before the target, and the user's HP is over 40%:\n\tScore -1 and terminate\n\nIf the user will move after the target, and the user's HP is over 50%:\n\tScore -1 and terminate\n\nOtherwise:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont inférieurs à 70 % :\n\tScore -1 et arrêt\n\nSi le lanceur agit avant la cible et que ses PV sont supérieurs à 40 % :\n\tScore -1 et arrêt\n\nSi le lanceur agit après la cible et que ses PV sont supérieurs à 50 % :\n\tScore -1 et arrêt\n\nSinon :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  endure: {
    id: "endure",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 4%:\n\tScore -1 and terminate\n\nIf the user's HP is under 35%:\n\t72.7% (186/256) chance of score +1 and terminate\n\nOtherwise:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 4 % :\n\tScore -1 et arrêt\n\nSi les PV du lanceur sont inférieurs à 35 % :\n\t72,7 % (186/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  eruption: {
    id: "eruption",
    routine: {
      singles: {
        en: [
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -1 and terminate",
          "If the user will attack after the target:\n\tIf the target's HP is over 70%:\n\t\tNo scoring change and terminate\n\tElse:\n\t\tScore -1 and terminate\n\nIf the target's HP is over 50%:\n\tNo score change and terminate\n\nOtherwise:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -1 et arrêt",
          "Si le lanceur attaque après la cible :\n\tSi les PV de la cible sont supérieurs à 70 % :\n\t\tAucune modification du score et arrêt\n\tSinon :\n\t\tScore -1 et arrêt\n\nSi les PV de la cible sont supérieurs à 50 % :\n\tAucune modification du score et arrêt\n\nSinon :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  explosion: {
    id: "explosion",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Damp:\n\tScore -10 and terminate\n\nIf the user has other living party members:\n\tNo score change and terminate\n\nIf the target has other living party members:\n\tScore -10 and terminate\n\nOtherwise:\n\tScore -1 and terminate",
          "If the move can KO the target:\n\tNo score change and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's evasion is boosted to +1 or more:\n\tScore -1 and continue\n\nIf the target's evasion is boosted to +3 or more:\n\t50% (128/256) chance of score -1 and continue\n\nIf the user's HP is under 80%, or the user will attack after the target:\n\tIf the user's HP is over 50%:\n\t\t80.5% (206/256) chance of score -1 and terminate\n\t\n\tIf the user's HP is under 51%:\n\t\t50% (128/256) chance of score +1 and continue\n\t\n\tIf the user's HP is under 31%:\n\t\t80.5% (206/256) chance of score +1 and terminate\nElse:\n\t80.5% (206/256) chance of score -3 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Moiteur :\n\tScore -10 et arrêt\n\nSi le lanceur a d’autres Pokémon encore en état de combattre dans son équipe :\n\tAucune modification du score et arrêt\n\nSi la cible a d’autres Pokémon encore en état de combattre dans son équipe :\n\tScore -10 et arrêt\n\nSinon :\n\tScore -1 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tAucune modification du score et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’esquive de la cible est augmentée à +1 ou plus :\n\tScore -1 et continuation\n\nSi l’esquive de la cible est augmentée à +3 ou plus :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 80 % ou si le lanceur attaque après la cible :\n\tSi les PV du lanceur sont supérieurs à 50 % :\n\t\t80,5 % (206/256) de chances d’avoir un score -1 et arrêt\n\t\n\tSi les PV du lanceur sont inférieurs à 51 % :\n\t\t50 % (128/256) de chances d’avoir un score +1 et continuation\n\t\n\tSi les PV du lanceur sont inférieurs à 31 % :\n\t\t80,5 % (206/256) de chances d’avoir un score +1 et arrêt\nSinon :\n\t80,5 % (206/256) de chances d’avoir un score -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  extrasensory: {
    id: "extrasensory",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  extremespeed: {
    id: "extremespeed",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +6 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +6 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  facade: {
    id: "facade",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is burned, paralyzed, poisoned, or badly poisoned:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est brûlée, paralysée, empoisonnée ou gravement empoisonnée :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  faint_attack: {
    id: "faint_attack",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current accuracy is reduced to -5 or lower, or the target's current evasion is boosted to +5 or more:\n\tScore +1 and continue\n\nIf the user's current accuracy is reduced to -3 or lower, or the target's current evasion is boosted to +3 or more:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la précision actuelle du lanceur est diminuée à -5 ou moins, ou si l’esquive actuelle de la cible est augmentée à +5 ou plus :\n\tScore +1 et continuation\n\nSi la précision actuelle du lanceur est diminuée à -3 ou moins, ou si l’esquive actuelle de la cible est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fake_out: {
    id: "fake_out",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If this is not the first turn the user is active:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "Unconditionally:\n\tScore +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si ce n’est pas le premier tour où le lanceur est actif :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Sans condition :\n\tScore +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fake_tears: {
    id: "fake_tears",
    routine: {
      singles: {
        en: [
          "If the target's special defense is reduced to -6:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's special defense is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si la défense spéciale de la cible est diminuée à -6 :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si la défense spéciale de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  featherdance: {
    id: "featherdance",
    routine: {
      singles: {
        en: [
          "If the target's attack is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is Hyper Cutter:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's current attack level is not +0:\n\tScore -1 and continue\n\nIf the target's current attack level is not +0, and the user's HP is under 91%:\n\tScore -1 and continue\n\nIf the target's current attack is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and continue\n\nIf either of the foe's types is not Normal, Fighting, Ground, Rock, Bug, or Steel:\n\t80.5% (206/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si l’attaque de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Hyper Cutter :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le niveau actuel de attaque de la cible n’est pas à +0 :\n\tScore -1 et continuation\n\nSi le niveau actuel de attaque de la cible n’est pas à +0 et que les PV du lanceur sont inférieurs à 91 % :\n\tScore -1 et continuation\n\nSi l’attaque actuelle de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et continuation\n\nSi au moins l’un des types de l’adversaire n’est pas Normal, Combat, Sol, Roche, Insecte ou Acier :\n\t80,5 % (206/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fire_blast: {
    id: "fire_blast",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fire_punch: {
    id: "fire_punch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fire_spin: {
    id: "fire_spin",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fissure: {
    id: "fissure",
    routine: {
      singles: {
        en: [
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Sturdy:\n\tScore -10 and terminate\n\nIf the target is a higher level than the user:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Fermeté :\n\tScore -10 et arrêt\n\nSi la cible a un niveau supérieur au lanceur :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  flail: {
    id: "flail",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tIf the user's HP is over 33%:\n\t\tScore -1 and terminate\n\t\n\tIf the user's HP is over 20%:\n\t\tNo scoring change and terminate\n\t\n\tIf the user's HP is under 8%:\n\t\tScore +1 and continue\n\t\n\t60.9% (156/256) chance of score +1 and terminate\n\nIf the user will move after the target:\n\tIf the user's HP is over 60%:\n\t\tScore -1 and terminate\n\t\n\tIf the user's HP is over 40%:\n\t\tNo scoring change and terminate\n\t\n\tOtherwise:\n\t\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tSi les PV du lanceur sont supérieurs à 33 % :\n\t\tScore -1 et arrêt\n\t\n\tSi les PV du lanceur sont supérieurs à 20 % :\n\t\tAucune modification du score et arrêt\n\t\n\tSi les PV du lanceur sont inférieurs à 8 % :\n\t\tScore +1 et continuation\n\t\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt\n\nSi le lanceur agit après la cible :\n\tSi les PV du lanceur sont supérieurs à 60 % :\n\t\tScore -1 et arrêt\n\t\n\tSi les PV du lanceur sont supérieurs à 40 % :\n\t\tAucune modification du score et arrêt\n\t\n\tSinon :\n\t\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  flame_wheel: {
    id: "flame_wheel",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  flamethrower: {
    id: "flamethrower",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  flash: {
    id: "flash",
    routine: {
      singles: {
        en: [
          "If the target's accuracy is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is Keen Eye:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's HP is under 71%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's accuracy is reduced to -2 or lower:\n\t68.8% (176/256) chance of score -2 and continue\n\nIf the target is badly poisoned:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the target is under the effect of Leech Seed:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the user is under the effect of Ingrain:\n\t50% (128/256) chance of score +1 and continue\n\nIf the target is under the effect of Curse:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the user's HP is over 70%, or the target's current accuracy level is +0:\n\tNo scoring change and terminate\n\nIf the user's HP is under 40%, or the target's HP is under 40%:\n\tScore -2 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si la précision de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Regard Vif :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si les PV de la cible sont inférieurs à 71 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi la précision du lanceur est diminuée à -2 ou moins :\n\t68,8 % (176/256) de chances d’avoir un score -2 et continuation\n\nSi la cible est gravement empoisonnée :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi la cible est sous l’effet de Vampigraine :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi le lanceur est sous l’effet de Racines :\n\t50 % (128/256) de chances d’avoir un score +1 et continuation\n\nSi la cible est sous l’effet de Malédiction :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 70 % ou si le niveau actuel de précision de la cible est à +0 :\n\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % ou si les PV de la cible sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  flatter: {
    id: "flatter",
    routine: {
      singles: {
        en: [
          "If the target is already confused:\n\tScore -5 and terminate\n\nIf the target's ability is Own Tempo:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "Unconditionally:\n\t50% (128/256) chance of score +1 and continue",
          "If the target's HP is over 70%:\n\tNo scoring change and terminate\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the target's HP is under 51%:\n\tScore -1 and continue\n\nIf the target's HP is under 31%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la cible est déjà confuse :\n\tScore -5 et arrêt\n\nSi le talent de la cible est Tempo Perso :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Sans condition :\n\t50 % (128/256) de chances d’avoir un score +1 et continuation",
          "Si les PV de la cible sont supérieurs à 70 % :\n\tAucune modification du score et arrêt\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV de la cible sont inférieurs à 51 % :\n\tScore -1 et continuation\n\nSi les PV de la cible sont inférieurs à 31 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fly: {
    id: "fly",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target knows the move Protect or Detect:\n\tScore -1 and terminate",
          "If the target is badly poisoned, or under the effect or Curse or Leech Seed:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the current weather is hail and the user is is Rock, Ground, or Steel type, or the current weather is sandstorm and the user is Ice type:\n\t68.8% (176/256) chance of score +1 and terminate\n\nIf the user will move after the target:\n\tNo scoring change and terminate\n\nIf the last move used by the target was Lock-On or Mind Reader:\n\tNo scoring change and terminate\n\nOtherwise:\n\t68.8% (176/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Abri ou Détection :\n\tScore -1 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet de Malédiction ou de Vampigraine :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi la météo actuelle est la grêle et que le lanceur est de type Roche, Sol ou Acier, ou si la météo actuelle est la tempête de sable et que le lanceur est de type Glace :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt\n\nSi le lanceur agit après la cible :\n\tAucune modification du score et arrêt\n\nSi la dernière capacité utilisée par la cible était Verrouillage ou Lire-Esprit :\n\tAucune modification du score et arrêt\n\nSinon :\n\t68,8 % (176/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  focus_energy: {
    id: "focus_energy",
    routine: {
      singles: {
        en: [
          "If the user is already under the effect of Focus Energy:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le lanceur est déjà sous l’effet de Puissance :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  focus_punch: {
    id: "focus_punch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -1 and terminate",
          "If the target is asleep:\n\tScore +1 and terminate\n\nIf the target is infatuated or confused, and the user is behind a substitute:\n\t60.9% (156/256) chance of score +5 and terminate\n\nIf this is not the first turn the user has been in battle:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -1 et arrêt",
          "Si la cible dort :\n\tScore +1 et arrêt\n\nSi la cible est sous l’effet d’Attraction ou confuse, et que le lanceur est derrière un clone :\n\t60,9 % (156/256) de chances d’avoir un score +5 et arrêt\n\nSi ce n’est pas le premier tour du lanceur dans le combat :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  follow_me: {
    id: "follow_me",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  foresight: {
    id: "foresight",
    routine: {
      singles: {
        en: [
          "If the target is already identified by Foresight or Odor Sleuth:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user is Ghost type:\n\t47.3% (121/256) chance of score +2 and terminate\n\nIf the user's current evasion is boosted to +3 or more:\n\t68.8% (176/256) chance of score +2 and terminate\n\nOtherwise:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si la cible est déjà identifiée par Clairvoyance ou Flair :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur est de type Spectre :\n\t47.3% (121/256) de chances d’avoir un score +2 et arrêt\n\nSi l’esquive actuelle du lanceur est augmentée à +3 ou plus :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  frustration: {
    id: "frustration",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fury_attack: {
    id: "fury_attack",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fury_cutter: {
    id: "fury_cutter",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  fury_swipes: {
    id: "fury_swipes",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  future_sight: {
    id: "future_sight",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the user's side is awaiting a future attack:\n\tScore -12 and terminate\n\nIf the target's side is awaiting a future attack:\n\tScore -12 and terminate\n\nOtherwise:\n\tScore +5 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si le côté du terrain du lanceur attend déjà une attaque future :\n\tScore -12 et arrêt\n\nSi le côté du terrain de la cible attend déjà une attaque future :\n\tScore -12 et arrêt\n\nSinon :\n\tScore +5 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  giga_drain: {
    id: "giga_drain",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\t80.5% (206/256) of score -3 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\t80,5 % (206/256) de chances d’avoir un score -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  glare: {
    id: "glare",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Limber:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move after the target:\n\t92.2% (236/256) chance of score +3 and terminate\n\nIf the user's HP is under 71%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Échauffement :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit après la cible :\n\t92,2 % (236/256) de chances d’avoir un score +3 et arrêt\n\nSi les PV du lanceur sont inférieurs à 71 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  grasswhistle: {
    id: "grasswhistle",
    routine: {
      singles: {
        en: [
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Insomnia or Vital Spirit:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target has the move Nightmare or Dream Eater:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Insomnia ou Esprit Vital :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Cauchemar ou Dévorêve :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  growth: {
    id: "growth",
    routine: {
      singles: {
        en: [
          "If the user's current special attack is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current special attack is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current special attack is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 39% and under 71%:\n\t72.7% (186/256) chance of score -2 and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si l’attaque spéciale actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque spéciale actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa attaque spéciale actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 39 % et inférieurs à 71 % :\n\t72,7 % (186/256) de chances d’avoir un score -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  grudge: {
    id: "grudge",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  guillotine: {
    id: "guillotine",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Sturdy:\n\tScore -10 and terminate\n\nIf the target is a higher level than the user:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Fermeté :\n\tScore -10 et arrêt\n\nSi la cible a un niveau supérieur au lanceur :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  gust: {
    id: "gust",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  hail: {
    id: "hail",
    routine: {
      singles: {
        en: [
          "If the weather is already hail:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 40%:\n\tScore -1 and terminate\n\nIf the weather is rain, sun, or sandstorm:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si la météo est déjà la grêle :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 40 % :\n\tScore -1 et arrêt\n\nSi la météo est la pluie, le soleil ou la tempête de sable :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  harden: {
    id: "harden",
    routine: {
      singles: {
        en: [
          "If the user's current defense is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a special move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si la défense actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était spéciale :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  haze: {
    id: "haze",
    routine: {
      singles: {
        en: [
          "If any of the user's stats are reduced:\n\tNo scoring change and terminate\n\nIf any of the target's stats are boosted:\n\tNo scoring change and terminate\n\nOtherwise:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current attack, defense, special attack, special defense, or evasion is boosted to +3 or more, or the target's current attack, defense, special attack, special defense, or evasion is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -3 and continue\n\nIf the user's current attack, defense, special attack, special defense, or evasion is reduced to -3 or lower, or the target's current attack, defense, special attack, special defense, or evasion is boosted to +3 or more:\n\t19.5% (50/256) chance of score +3 and terminate\n\nOtherwise:\n\t80.5% (206/256) chance of score -1 and terminate"
        ],
        fr: [
          "Si au moins une statistique du lanceur est diminuée :\n\tAucune modification du score et arrêt\n\nSi au moins une statistique de la cible est augmentée :\n\tAucune modification du score et arrêt\n\nSinon :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque, la défense, l’attaque spéciale, la défense spéciale ou l’esquive actuelle du lanceur est augmentée à +3 ou plus, ou si l’une de ces statistiques de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -3 et continuation\n\nSi l’attaque, la défense, l’attaque spéciale, la défense spéciale ou l’esquive actuelle du lanceur est diminuée à -3 ou moins, ou si l’une de ces statistiques de la cible est augmentée à +3 ou plus :\n\t19.5% (50/256) de chances d’avoir un score +3 et arrêt\n\nSinon :\n\t80,5 % (206/256) de chances d’avoir un score -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  headbutt: {
    id: "headbutt",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  heal_bell: {
    id: "heal_bell",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the foe, and all of its other party members, are not statused:\n\tScore -5 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’adversaire et tous les autres membres de son équipe n’ont aucun problème de statut :\n\tScore -5 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  heat_wave: {
    id: "heat_wave",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Flash Fire:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Torche :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the AI’s ability check confirms Flash Fire for the user’s ally and the Flash Fire boost of the user’s ally has not been activated :\n\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Torche pour l’allié du lanceur et le bonus de Torche de l’allié du lanceur n’a pas été activé :\n\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  helping_hand: {
    id: "helping_hand",
    routine: {
      singles: {
        en: [
          "If the fight is a singles battle:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le combat est un combat solo :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "25% (64/256) chance:\n\tScore -1 and terminate\nOtherwise 75% (192/256) :\n\tScore +2 and terminate"
        ],
        fr: [
          "25 % (64/256) de chances :\n\tScore -1 et arrêt\nSinon 75 % (192/256) :\n\tScore +2 et arrêt"
        ]
      }
    }
  },
  hi_jump_kick: {
    id: "hi_jump_kick",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  hidden_power: {
    id: "hidden_power",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  horn_drill: {
    id: "horn_drill",
    routine: {
      singles: {
        en: [
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Sturdy:\n\tScore -10 and terminate\n\nIf the target is a higher level than the user:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Fermeté :\n\tScore -10 et arrêt\n\nSi la cible a un niveau supérieur au lanceur :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  howl: {
    id: "howl",
    routine: {
      singles: {
        en: [
          "If the user's current attack is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current attack is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current attack is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 39% and under 71%:\n\t84.4% (216/256) chance of score -2 and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa attaque actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 39 % et inférieurs à 71 % :\n\t84,4 % (216/256) de chances d’avoir un score -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  hydro_pump: {
    id: "hydro_pump",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  hyper_beam: {
    id: "hyper_beam",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -1 and terminate",
          "If the user will move after the target, and the user's HP is over 59%:\n\tScore -1 and terminate\n\nIf the user will move before the target, and the user's HP is over 40%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -1 et arrêt",
          "Si le lanceur agit après la cible et que ses PV sont supérieurs à 59 % :\n\tScore -1 et arrêt\n\nSi le lanceur agit avant la cible et que ses PV sont supérieurs à 40 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  hyper_fang: {
    id: "hyper_fang",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  hyper_voice: {
    id: "hyper_voice",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  hypnosis: {
    id: "hypnosis",
    routine: {
      singles: {
        en: [
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Insomnia or Vital Spirit:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target has the move Nightmare or Dream Eater:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Insomnia ou Esprit Vital :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Cauchemar ou Dévorêve :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  ice_ball: {
    id: "ice_ball",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  ice_beam: {
    id: "ice_beam",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  ice_punch: {
    id: "ice_punch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  icicle_spear: {
    id: "icicle_spear",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  icy_wind: {
    id: "icy_wind",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tScore -3 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tScore -3 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  imprison: {
    id: "imprison",
    routine: {
      singles: {
        en: [
          "If the user is currently imprisoning the target:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If this is not the first turn the user has been in battle:\n\t60.9% (156/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le lanceur bloque déjà la cible avec Possessif :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si ce n’est pas le premier tour du lanceur dans le combat :\n\t60,9 % (156/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  ingrain: {
    id: "ingrain",
    routine: {
      singles: {
        en: [
          "If the user is already under the effect of Ingrain:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le lanceur est déjà sous l’effet de Racines :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  iron_defense: {
    id: "iron_defense",
    routine: {
      singles: {
        en: [
          "If the user's current defense is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a special move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si la défense actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était spéciale :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  iron_tail: {
    id: "iron_tail",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  karate_chop: {
    id: "karate_chop",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  knock_off: {
    id: "knock_off",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the target's ability is Sticky Hold:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is under 30%:\n\tNo scoring change and terminate\n\nIf this is not the user's first turn in battle:\n\t29.7% (76/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Glue :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont inférieurs à 30 % :\n\tAucune modification du score et arrêt\n\nSi ce n’est pas le premier tour du lanceur dans le combat :\n\t29,7 % (76/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  leaf_blade: {
    id: "leaf_blade",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  leech_life: {
    id: "leech_life",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\t80.5% (206/256) of score -3 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\t80,5 % (206/256) de chances d’avoir un score -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  leech_seed: {
    id: "leech_seed",
    routine: {
      singles: {
        en: [
          "If the target is already under the effect of Leech Seed:\n\tScore -10 and terminate\n\nIf the target is Grass type:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user has a move that inflicts damage:\n\tIf the user's HP is under 51%:\n\t\t80.5% (206/256) chance of score -3 and continue\n\t\n\tIf the target's HP is under 51%:\n\t\t80.5% (206/256) chance of score -3 and continue\n\nIf the user knows the move Protect or Detect:\n\t76.6% (196/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible est déjà sous l’effet de Vampigraine :\n\tScore -10 et arrêt\n\nSi la cible est de type Plante :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur possède une capacité qui inflige des dégâts :\n\tSi les PV du lanceur sont inférieurs à 51 % :\n\t\t80,5 % (206/256) de chances d’avoir un score -3 et continuation\n\t\n\tSi les PV de la cible sont inférieurs à 51 % :\n\t\t80,5 % (206/256) de chances d’avoir un score -3 et continuation\n\nSi le lanceur connaît Abri ou Détection :\n\t76,6 % (196/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  leer: {
    id: "leer",
    routine: {
      singles: {
        en: [
          "If the target's defense is reduced to -6:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's defense is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si la défense de la cible est diminuée à -6 :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si la défense de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  lick: {
    id: "lick",
    routine: {
      singles: {
        en: [
          "If the target has a Normal typing:\n\tIf the target also has a Psychic, Dark, Steel, or Ghost Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Normal :\n\tSi la cible possède aussi le type Psy, Ténèbres, Acier ou Spectre :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  light_screen: {
    id: "light_screen",
    routine: {
      singles: {
        en: [
          "If the user's side of the field already has Light Screen active:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 50%:\n\tScore -2 and terminate\n\nIf either of the foe's types is Physical:\n\t80.5% (206/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si le côté du terrain du lanceur est déjà sous l’effet de Mur Lumière :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 50 % :\n\tScore -2 et arrêt\n\nSi l’un des types de l’adversaire est physique :\n\t80,5 % (206/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  lovely_kiss: {
    id: "lovely_kiss",
    routine: {
      singles: {
        en: [
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Insomnia or Vital Spirit:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target has the move Nightmare or Dream Eater:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Insomnia ou Esprit Vital :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Cauchemar ou Dévorêve :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  low_kick: {
    id: "low_kick",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  luster_purge: {
    id: "luster_purge",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mach_punch: {
    id: "mach_punch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +6 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +6 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  magic_coat: {
    id: "magic_coat",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 31%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf this is the user's first turn in battle:\n\t41.4% (106/256) chance of score +1 and terminate\n\nOtherwise:\n\t88.3% (226/256) chance of score -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 31 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi c’est le premier tour du lanceur dans le combat :\n\t41,4 % (106/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t88,3 % (226/256) de chances d’avoir un score -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  magical_leaf: {
    id: "magical_leaf",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current accuracy is reduced to -5 or lower, or the target's current evasion is boosted to +5 or more:\n\tScore +1 and continue\n\nIf the user's current accuracy is reduced to -3 or lower, or the target's current evasion is boosted to +3 or more:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la précision actuelle du lanceur est diminuée à -5 ou moins, ou si l’esquive actuelle de la cible est augmentée à +5 ou plus :\n\tScore +1 et continuation\n\nSi la précision actuelle du lanceur est diminuée à -3 ou moins, ou si l’esquive actuelle de la cible est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  magnitude: {
    id: "magnitude",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms Levitate for the user’s ally or the user’s ally has the Flying type :\n\tScore +2 and terminate\nOtherwise :\n\tIf the user’s ally has the Fire type or the user’s ally has the Electric type or the user’s ally has the Poison type or the user’s ally has the Rock type :\n\t\tScore -10 and terminate\n\tOtherwise :\n\t\tScore -3 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme Lévitation pour l’allié du lanceur ou l’allié du lanceur possède le type Vol :\n\tScore +2 et arrêt\nSinon :\n\tSi l’allié du lanceur possède le type Feu ou l’allié du lanceur possède le type Électrik ou l’allié du lanceur possède le type Poison ou l’allié du lanceur possède le type Roche :\n\t\tScore -10 et arrêt\n\tSinon :\n\t\tScore -3 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mean_look: {
    id: "mean_look",
    routine: {
      singles: {
        en: [
          "If the target is already prevented from escaping:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible ne peut déjà plus fuir :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  meditate: {
    id: "meditate",
    routine: {
      singles: {
        en: [
          "If the user's current attack is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current attack is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current attack is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 39% and under 71%:\n\t84.4% (216/256) chance of score -2 and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa attaque actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 39 % et inférieurs à 71 % :\n\t84,4 % (216/256) de chances d’avoir un score -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mega_drain: {
    id: "mega_drain",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\t80.5% (206/256) of score -3 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\t80,5 % (206/256) de chances d’avoir un score -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mega_kick: {
    id: "mega_kick",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mega_punch: {
    id: "mega_punch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  megahorn: {
    id: "megahorn",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  memento: {
    id: "memento",
    routine: {
      singles: {
        en: [
          "If the target's current attack is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's current special attack is reduced to -6:\n\tScore -8 and terminate\n\nIf the user has no living party members:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's evasion is boosted to +1 or more:\n\tScore -1 and continue\n\nIf the target's evasion is boosted to +3 or more:\n\t50% (128/256) chance of score -1 and continue\n\nIf the user's HP is under 80%, or the user will attack after the target:\n\tIf the user's HP is over 50%:\n\t\t80.5% (206/256) chance of score -1 and terminate\n\t\n\tIf the user's HP is under 51%:\n\t\t50% (128/256) chance of score +1 and continue\n\t\n\tIf the user's HP is under 31%:\n\t\t80.5% (206/256) chance of score +1 and terminate\nElse:\n\t80.5% (206/256) chance of score -3 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi l’attaque spéciale actuelle de la cible est diminuée à -6 :\n\tScore -8 et arrêt\n\nSi le lanceur n’a aucun Pokémon encore en état de combattre dans son équipe :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’esquive de la cible est augmentée à +1 ou plus :\n\tScore -1 et continuation\n\nSi l’esquive de la cible est augmentée à +3 ou plus :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 80 % ou si le lanceur attaque après la cible :\n\tSi les PV du lanceur sont supérieurs à 50 % :\n\t\t80,5 % (206/256) de chances d’avoir un score -1 et arrêt\n\t\n\tSi les PV du lanceur sont inférieurs à 51 % :\n\t\t50 % (128/256) de chances d’avoir un score +1 et continuation\n\t\n\tSi les PV du lanceur sont inférieurs à 31 % :\n\t\t80,5 % (206/256) de chances d’avoir un score +1 et arrêt\nSinon :\n\t80,5 % (206/256) de chances d’avoir un score -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  metal_claw: {
    id: "metal_claw",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  metal_sound: {
    id: "metal_sound",
    routine: {
      singles: {
        en: [
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the target's special defense is reduced to -6:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's special defense is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si la défense spéciale de la cible est diminuée à -6 :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si la défense spéciale de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  meteor_mash: {
    id: "meteor_mash",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  metronome: {
    id: "metronome",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  milk_drink: {
    id: "milk_drink",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is full:\n\tScore -3 and terminate\n\nIf the user will move before the target:\n\tScore -8 and terminate\n\nIf the user's HP is over 69%:\n\tWith a 88.3% (226/256) chance:\n\t\tScore -3 and terminate\n\nIf the foe knows the move Snatch:\n\t56.2% (2301/4096) chance of score +2 and terminate\n\nOtherwise:\n\t92.2% (236/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont au maximum :\n\tScore -3 et arrêt\n\nSi le lanceur agit avant la cible :\n\tScore -8 et arrêt\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 88.3% (226/256) de chances :\n\t\tScore -3 et arrêt\n\nSi l’adversaire connaît Saisie :\n\t56,2 % (2301/4096) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\t92,2 % (236/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mimic: {
    id: "mimic",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  minimize: {
    id: "minimize",
    routine: {
      singles: {
        en: [
          "If the user's current evasion is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is over 89%:\n\t60.9% (156/256) chance of score +3 and continue\n\nIf the user's current evasion is boosted to +3 or more:\n\t50% (128/256) chance of score -1 and continue\n\nIf the foe is badly poisoned:\n\tIf the user's HP is over 50%:\n\t\t80.5% (206/256) chance of score +3 and continue\n\tElse:\n\t\t55.3% (1133/2048) chance of score +3 and continue\n\nIf the foe is under the effect of Leech Seed:\n\t72.7% (186/256) chance of score +3 and continue\n\nIf the user is under the effect of Ingrain:\n\t50% (128/256) chance of score +2 and continue\n\nIf the foe is under the effect of Curse:\n\t72.7% (186/256) chance of score +3 and continue\n\nIf the user's HP is over 70%, or the user's current evasion level is +0:\n\tNo scoring change and terminate\n\nIf the user's HP is under 40%, or the foe's HP is under 40%:\n\tScore -2 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si l’esquive actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont supérieurs à 89 % :\n\t60,9 % (156/256) de chances d’avoir un score +3 et continuation\n\nSi l’esquive actuelle du lanceur est augmentée à +3 ou plus :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi l’adversaire est gravement empoisonné :\n\tSi les PV du lanceur sont supérieurs à 50 % :\n\t\t80,5 % (206/256) de chances d’avoir un score +3 et continuation\n\tSinon :\n\t\t55,3 % (1133/2048) de chances d’avoir un score +3 et continuation\n\nSi l’adversaire est sous l’effet de Vampigraine :\n\t72,7 % (186/256) de chances d’avoir un score +3 et continuation\n\nSi le lanceur est sous l’effet de Racines :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi l’adversaire est sous l’effet de Malédiction :\n\t72,7 % (186/256) de chances d’avoir un score +3 et continuation\n\nSi les PV du lanceur sont supérieurs à 70 % ou si son niveau actuel d’esquive est à +0 :\n\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % ou si les PV de l’adversaire sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mirror_coat: {
    id: "mirror_coat",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the foe is asleep, infatuated, or confused:\n\tScore -1 and terminate\n\nIf the user's HP is under 31%:\n\t96.1% (246/256) chance of score -1 and continue\n\nIf the user's HP is under 51%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user also has the move Counter:\n\t60.9% (156/256) chance of score +4 and terminate\n\nIf the foe is under the effect of Taunt:\n\t60.9% (156/256) chance of score +1 and continue\n\nIf the last move used by foe is damaging:\n\tIf the last move used by the foe is physical:\n\t\tScore -1 and terminate\n\tElse:\n\t\t60.9% (156/256) chance of score +1 and terminate\n\nIf either of the foe's types is Special:\n\tNo scoring change and terminate\n\nOtherwise:\n\t49% (4017/8192) chance of score +4 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’adversaire dort, est sous l’effet d’Attraction ou est confus :\n\tScore -1 et arrêt\n\nSi les PV du lanceur sont inférieurs à 31 % :\n\t96,1 % (246/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 51 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi le lanceur possède aussi Riposte :\n\t60,9 % (156/256) de chances d’avoir un score +4 et arrêt\n\nSi l’adversaire est sous l’effet de Provoc :\n\t60,9 % (156/256) de chances d’avoir un score +1 et continuation\n\nSi la dernière capacité utilisée par l’adversaire infligeait des dégâts :\n\tSi la dernière capacité utilisée par l’adversaire était physique :\n\t\tScore -1 et arrêt\n\tSinon :\n\t\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt\n\nSi l’un des types de l’adversaire est spécial :\n\tAucune modification du score et arrêt\n\nSinon :\n\t49 % (4017/8192) de chances d’avoir un score +4 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mirror_move: {
    id: "mirror_move",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target, and the last move used by the target is in the list below:\n\t50% (128/256) chance of score +2 and terminate\n\nIf the last move used by the target is not in the list below:\n\t68.8% (176/256) chance of score -1 and terminate",
          "Sleep Powder\nLovely Kiss\nSpore\nHypnosis\nSing\nGrassWhistle\nShadow Punch\nSand-Attack\nSmokeScreen\nToxic\nGuillotine\nHorn Drill\nFissure\nSheer Cold\nCross Chop\nAeroblast\nConfuse Ray\nSweet Kiss\nScreech\nCotton Spore\nScary Face\nFake Tears\nMetal Sound\nThunder Wave\nGlare\nPoisonPowder\nShadow Ball\nDynamicPunch\nHyper Beam\nExtremeSpeed\nThief\nCovet\nAttract\nSwagger\nTorment\nFlatter\nTrick\nSuperpower\nSkill Swap"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible et que la dernière capacité utilisée par la cible est dans la liste ci-dessous :\n\t50 % (128/256) de chances d’avoir un score +2 et arrêt\n\nSi la dernière capacité utilisée par la cible n’est pas dans la liste ci-dessous :\n\t68,8 % (176/256) de chances d’avoir un score -1 et arrêt",
          "Sleep Powder\nGrobisou\nSpore\nHypnose\nBerceuse\nSiffl’Herbe\nPoing Ombre\nJet de Sable\nBrouillard\nToxik\nGuillotine\nEmpal’Korne\nAbîme\nGlaciation\nCoup-Croix\nAéroblast\nOnde Folie\nDoux Baiser\nGrincement\nSpore Coton\nGrimace\nCroco Larme\nStrido-Son\nCage-Éclair\nIntimidation\nPoudre Toxik\nBall’Ombre\nDynamopoing\nUltralaser\nVit.Extrême\nLarcin\nImplore\nAttraction\nVantardise\nTourmente\nFlatterie\nTourmagik\nSurpuissance\nÉchange"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mist_ball: {
    id: "mist_ball",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  moonlight: {
    id: "moonlight",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the current weather is rain, sandstorm, or hail:\n\tScore -2 and continue",
          "If the user's HP is full:\n\tScore -3 and terminate\n\nIf the user will move before the target:\n\tScore -8 and terminate\n\nIf the user's HP is over 69%:\n\tWith a 88.3% (226/256) chance:\n\t\tScore -3 and terminate\n\nIf the foe knows the move Snatch:\n\t56.2% (2301/4096) chance of score +2 and terminate\n\nOtherwise:\n\t92.2% (236/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la météo actuelle est la pluie, la tempête de sable ou la grêle :\n\tScore -2 et continuation",
          "Si les PV du lanceur sont au maximum :\n\tScore -3 et arrêt\n\nSi le lanceur agit avant la cible :\n\tScore -8 et arrêt\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 88.3% (226/256) de chances :\n\t\tScore -3 et arrêt\n\nSi l’adversaire connaît Saisie :\n\t56,2 % (2301/4096) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\t92,2 % (236/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mud_shot: {
    id: "mud_shot",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tScore -3 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tScore -3 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mud_slap: {
    id: "mud_slap",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  mud_sport: {
    id: "mud_sport",
    routine: {
      singles: {
        en: [
          "If the user is already under the effect of Mud Sport:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 50%:\n\tScore -1 and terminate\n\nIf the foe is Electric type:\n\tScore +1 and terminate\n\nOtherwise:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si le lanceur est déjà sous l’effet de Lance-Boue :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 50 % :\n\tScore -1 et arrêt\n\nSi l’adversaire est de type Électrik :\n\tScore +1 et arrêt\n\nSinon :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  muddy_water: {
    id: "muddy_water",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  needle_arm: {
    id: "needle_arm",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  night_shade: {
    id: "night_shade",
    routine: {
      singles: {
        en: [
          "If the target has a Normal typing:\n\tIf the target also has a Psychic, Dark, Steel, or Ghost Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Normal :\n\tSi la cible possède aussi le type Psy, Ténèbres, Acier ou Spectre :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  nightmare: {
    id: "nightmare",
    routine: {
      singles: {
        en: [
          "If the target is already having a nightmare:\n\tScore -10 and terminate\n\nIf the target is not asleep:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible est déjà sous l’effet de Cauchemar :\n\tScore -10 et arrêt\n\nSi la cible ne dort pas :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  octazooka: {
    id: "octazooka",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  outrage: {
    id: "outrage",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  overheat: {
    id: "overheat",
    routine: {
      singles: {
        en: [
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -1 and terminate",
          "If the user will move after the target, and the user's HP is under 81%:\n\tScore -1 and terminate\n\nIf the user will move before the target, and the user's HP is under 61%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -1 et arrêt",
          "Si le lanceur agit après la cible et que ses PV sont inférieurs à 81 % :\n\tScore -1 et arrêt\n\nSi le lanceur agit avant la cible et que ses PV sont inférieurs à 61 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  pain_split: {
    id: "pain_split",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is under 80%:\n\tScore -1 and terminate\n\nIf the user will move before the target:\n\tIf the user's HP is over 40%:\n\t\tScore -1 and terminate\n\tElse:\n\t\tScore +1 and terminate\n\nIf the user will move after the target:\n\tIf the user's HP is over 60%:\n\t\tScore -1 and terminate\n\tElse:\n\t\tScore +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont inférieurs à 80 % :\n\tScore -1 et arrêt\n\nSi le lanceur agit avant la cible :\n\tSi les PV du lanceur sont supérieurs à 40 % :\n\t\tScore -1 et arrêt\n\tSinon :\n\t\tScore +1 et arrêt\n\nSi le lanceur agit après la cible :\n\tSi les PV du lanceur sont supérieurs à 60 % :\n\t\tScore -1 et arrêt\n\tSinon :\n\t\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  perish_song: {
    id: "perish_song",
    routine: {
      singles: {
        en: [
          "If the target is already under the effect of Perish Song:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible est déjà sous l’effet de Requiem :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  petal_dance: {
    id: "petal_dance",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  pin_missile: {
    id: "pin_missile",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  poison_fang: {
    id: "poison_fang",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  poison_sting: {
    id: "poison_sting",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  poison_tail: {
    id: "poison_tail",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  present: {
    id: "present",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  protect: {
    id: "protect",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's consecutive protection count is 2 or more:\n\tScore -2 and terminate\n\nIf the user is badly poisoned, or infatuated, or under the effect of Curse, Leech Seed, Yawn, or Perish Song, or the foe knows the move Recover, Slack Off, or Defense Curl:\n\tIf the foe's last move was not Lock-On or Mind Reader:\n\t\tNo scoring change and terminate\n\tElse:\n\t\tScore -2 and terminate\n\nIf the foe is badly poisoned, or infatuated, or under the effect of Curse, Leech Seed, Yawn, or Perish Song, or the foe's last move was not Lock-On or Mind Reader:\n\tScore +2 and continue\nElse:\n\t33.2% (85/256) chance of score +2 and continue\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the user's consecutive protection count is 1:\n\tScore -1 and continue\n\t50% (128/256) chance of score -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le compteur de protections consécutives du lanceur est de 2 ou plus :\n\tScore -2 et arrêt\n\nSi le lanceur est gravement empoisonné, sous l’effet d’Attraction, de Malédiction, de Vampigraine, de Bâillement ou de Requiem, ou si l’adversaire connaît Soin, Paresse ou Boul’Armure :\n\tSi la dernière capacité utilisée par l’adversaire n’était pas Verrouillage ou Lire-Esprit :\n\t\tAucune modification du score et arrêt\n\tSinon :\n\t\tScore -2 et arrêt\n\nSi l’adversaire est gravement empoisonné, sous l’effet d’Attraction, de Malédiction, de Vampigraine, de Bâillement ou de Requiem, ou si sa dernière capacité utilisée n’était pas Verrouillage ou Lire-Esprit :\n\tScore +2 et continuation\nSinon :\n\t33,2 % (85/256) de chances d’avoir un score +2 et continuation\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi le compteur de protections consécutives du lanceur est de 1 :\n\tScore -1 et continuation\n\t50 % (128/256) de chances d’avoir un score -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  psybeam: {
    id: "psybeam",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  psych_up: {
    id: "psych_up",
    routine: {
      singles: {
        en: [
          "If any of the user's stats are reduced:\n\tNo scoring change and terminate\n\nIf any of the target's stats are boosted:\n\tNo scoring change and terminate\n\nOtherwise:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's current attack, defense, special attack, special defense, or evasion are boosted to +3 or more:\n\tIf the user's current attack, defense, special attack, or special defense are at +0 or below:\n\t\tScore +1 and terminate\n\t\n\tIf the user's current evasion is at +0 or below:\n\t\tScore +2 and terminate\n\t\n\tOtherwise:\n\t\t80.5% (206/256) chance of score -2 and terminate\n\nOtherwise:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si au moins une statistique du lanceur est diminuée :\n\tAucune modification du score et arrêt\n\nSi au moins une statistique de la cible est augmentée :\n\tAucune modification du score et arrêt\n\nSinon :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque, la défense, l’attaque spéciale, la défense spéciale ou l’esquive actuelle de la cible est augmentée à +3 ou plus :\n\tSi l’attaque, la défense, l’attaque spéciale ou la défense spéciale actuelle du lanceur est à +0 ou moins :\n\t\tScore +1 et arrêt\n\t\n\tSi l’esquive actuelle du lanceur est à +0 ou moins :\n\t\tScore +2 et arrêt\n\t\n\tSinon :\n\t\t80,5 % (206/256) de chances d’avoir un score -2 et arrêt\n\nSinon :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  psychic: {
    id: "psychic",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  psywave: {
    id: "psywave",
    routine: {
      singles: {
        en: [
          "If the target has a Dark typing:\n\tIf the target also has a Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Ténèbres :\n\tSi la cible possède aussi le type Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  pursuit: {
    id: "pursuit",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If this is not the first turn the user has been in battle, and the target is Ghost or Psychic type:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si ce n’est pas le premier tour du lanceur dans le combat et que la cible est de type Spectre ou Psy :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  quick_attack: {
    id: "quick_attack",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +6 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +6 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rain_dance: {
    id: "rain_dance",
    routine: {
      singles: {
        en: [
          "If the weather is already rain:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move after the foe, and the user's ability is Swift Swim:\n\tScore +1 and terminate\n\nIf the user's HP is under 40%:\n\tScore -1 and terminate\n\nIf the current weather is sun, hail, or sandstorm, or the user's ability is Rain Dish:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si la météo est déjà la pluie :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit après l’adversaire et que son talent est Glissade :\n\tScore +1 et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -1 et arrêt\n\nSi la météo actuelle est le soleil, la grêle ou la tempête de sable, ou si le talent du lanceur est Cuvette :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rapid_spin: {
    id: "rapid_spin",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  razor_leaf: {
    id: "razor_leaf",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  razor_wind: {
    id: "razor_wind",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -2 and terminate\n\nIf the target knows the move Protect or Detect:\n\tScore -2 and terminate\n\nIf the user's HP is under 39%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -2 et arrêt\n\nSi la cible connaît Abri ou Détection :\n\tScore -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 39 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  recover: {
    id: "recover",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is full:\n\tScore -3 and terminate\n\nIf the user will move before the target:\n\tScore -8 and terminate\n\nIf the user's HP is over 69%:\n\tWith a 88.3% (226/256) chance:\n\t\tScore -3 and terminate\n\nIf the foe knows the move Snatch:\n\t56.2% (2301/4096) chance of score +2 and terminate\n\nOtherwise:\n\t92.2% (236/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont au maximum :\n\tScore -3 et arrêt\n\nSi le lanceur agit avant la cible :\n\tScore -8 et arrêt\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 88.3% (226/256) de chances :\n\t\tScore -3 et arrêt\n\nSi l’adversaire connaît Saisie :\n\t56,2 % (2301/4096) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\t92,2 % (236/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  recycle: {
    id: "recycle",
    routine: {
      singles: {
        en: [
          "If the user has no item to recycle:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user can recycle a Chesto Berry, Lum Berry, or Starf Berry:\n\t80.5% (206/256) chance of score +1 and terminate\n\nOtherwise:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si le lanceur n’a aucun objet à recycler :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur peut recycler une Baie Maron, une Baie Prine ou une Baie Starf :\n\t80,5 % (206/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  reflect: {
    id: "reflect",
    routine: {
      singles: {
        en: [
          "If the user's side of the field already has Reflect active:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 50%:\n\tScore -2 and terminate\n\nIf the either of the foe's types is Special:\n\t80.4% (206/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si le côté du terrain du lanceur est déjà sous l’effet de Protection :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 50 % :\n\tScore -2 et arrêt\n\nSi l’un des types de l’adversaire est spécial :\n\t80,4 % (206/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  refresh: {
    id: "refresh",
    routine: {
      singles: {
        en: [
          "If the user is not burned, paralyzed, poisoned, or badly poisoned:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is under 50%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si le lanceur n’est ni brûlé, ni paralysé, ni empoisonné, ni gravement empoisonné :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont inférieurs à 50 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rest: {
    id: "rest",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the foe:\n\tIf the user's HP is full:\n\t\tScore -8 and terminate\n\t\n\tIf the user's HP is over 50%:\n\t\tScore -3 and terminate\n\t\n\tIf the user's HP is over 39%:\n\t\tWith a 72.7% (186/256) chance:\n\t\t\tScore -3 and terminate\n\nIf the user will move after the foe:\n\tIf the user's HP is over 70%:\n\t\tScore -3 and terminate\n\t\n\tIf the user's HP is over 59%:\n\t\tWith a 80.5% (206/256) chance:\n\t\t\tScore -3 and terminate\n\nIf the foe knows the move Snatch:\n\t77.3% (12669/16384) chance of score +3 and terminate\n\nOtherwise:\n\t96.1% (246/256) chance of score +3 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant l’adversaire :\n\tSi les PV du lanceur sont au maximum :\n\t\tScore -8 et arrêt\n\t\n\tSi les PV du lanceur sont supérieurs à 50 % :\n\t\tScore -3 et arrêt\n\t\n\tSi les PV du lanceur sont supérieurs à 39 % :\n\t\tAvec 72.7% (186/256) de chances :\n\t\t\tScore -3 et arrêt\n\nSi le lanceur agit après l’adversaire :\n\tSi les PV du lanceur sont supérieurs à 70 % :\n\t\tScore -3 et arrêt\n\t\n\tSi les PV du lanceur sont supérieurs à 59 % :\n\t\tAvec 80.5% (206/256) de chances :\n\t\t\tScore -3 et arrêt\n\nSi l’adversaire connaît Saisie :\n\t77,3 % (12669/16384) de chances d’avoir un score +3 et arrêt\n\nSinon :\n\t96,1 % (246/256) de chances d’avoir un score +3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  return: {
    id: "return",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  revenge: {
    id: "revenge",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is asleep, infatuated, or confused:\n\tScore -2 and terminate\n\nWith a 70.3% (180/256) chance:\n\tScore -2 and terminate\nElse:\n\tScore +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible dort, est sous l’effet d’Attraction ou est confuse :\n\tScore -2 et arrêt\n\nAvec 70.3% (180/256) de chances :\n\tScore -2 et arrêt\nSinon :\n\tScore +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  reversal: {
    id: "reversal",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tIf the user's HP is over 33%:\n\t\tScore -1 and terminate\n\t\n\tIf the user's HP is over 20%:\n\t\tNo scoring change and terminate\n\t\n\tIf the user's HP is under 8%:\n\t\tScore +1 and continue\n\t\n\t60.9% (156/256) chance of score +1 and terminate\n\nIf the user will move after the target:\n\tIf the user's HP is over 60%:\n\t\tScore -1 and terminate\n\t\n\tIf the user's HP is over 40%:\n\t\tNo scoring change and terminate\n\t\n\tOtherwise:\n\t\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tSi les PV du lanceur sont supérieurs à 33 % :\n\t\tScore -1 et arrêt\n\t\n\tSi les PV du lanceur sont supérieurs à 20 % :\n\t\tAucune modification du score et arrêt\n\t\n\tSi les PV du lanceur sont inférieurs à 8 % :\n\t\tScore +1 et continuation\n\t\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt\n\nSi le lanceur agit après la cible :\n\tSi les PV du lanceur sont supérieurs à 60 % :\n\t\tScore -1 et arrêt\n\t\n\tSi les PV du lanceur sont supérieurs à 40 % :\n\t\tAucune modification du score et arrêt\n\t\n\tSinon :\n\t\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  roar: {
    id: "roar",
    routine: {
      singles: {
        en: [
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the target has no other living party members:\n\tScore -10 and terminate\n\nIf the target's ability is Suction Cups:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's attack, defense, special attack, special defense, or evasion is boosted to +3 or more:\n\t50% (128/256) chance of score +2 and terminate\n\nOtherwise:\n\tScore -3 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si la cible n’a aucun autre Pokémon encore en état de combattre dans son équipe :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Ventouse :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque, la défense, l’attaque spéciale, la défense spéciale ou l’esquive de la cible est augmentée à +3 ou plus :\n\t50 % (128/256) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\tScore -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rock_blast: {
    id: "rock_blast",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rock_slide: {
    id: "rock_slide",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rock_throw: {
    id: "rock_throw",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rock_tomb: {
    id: "rock_tomb",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tScore -3 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tScore -3 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  role_play: {
    id: "role_play",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's ability is in the list below:\n\tScore -1 and terminate\n\nIf the target's ability is in the list below:\n\t80.5% (206/256) chance of score +2 and terminate\n\nOtherwise:\n\tScore -1 and terminate",
          "Speed boost \nBattle Armor \nSand Veil \nStatic \nFlash Fire \nWonder Guard \nEffect Spore \nSwift Swim \nHuge Power \nRain Dish \nCute Charm \nShed Skin \nMarvel Scale \nPure Power \nChlorophyll \nShield Dust"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le talent du lanceur est dans la liste ci-dessous :\n\tScore -1 et arrêt\n\nSi le talent de la cible est dans la liste ci-dessous :\n\t80,5 % (206/256) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\tScore -1 et arrêt",
          "Turbo \nArmurbaston \nVoile Sable \nStatik \nTorche \nGarde Mystik \nPose Spore \nGlissade \nColoforce \nCuvette \nJoli Sourire \nMue \nÉcaille Spé. \nForce Pure \nChlorophylle \nÉcran Poudre"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rolling_kick: {
    id: "rolling_kick",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  rollout: {
    id: "rollout",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  safeguard: {
    id: "safeguard",
    routine: {
      singles: {
        en: [
          "If the user is already under the effect of Safeguard:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le lanceur est déjà sous l’effet de Rune Abri :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sand_attack: {
    id: "sand_attack",
    routine: {
      singles: {
        en: [
          "If the target's accuracy is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is Keen Eye:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's HP is under 71%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's accuracy is reduced to -2 or lower:\n\t68.8% (176/256) chance of score -2 and continue\n\nIf the target is badly poisoned:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the target is under the effect of Leech Seed:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the user is under the effect of Ingrain:\n\t50% (128/256) chance of score +1 and continue\n\nIf the target is under the effect of Curse:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the user's HP is over 70%, or the target's current accuracy level is +0:\n\tNo scoring change and terminate\n\nIf the user's HP is under 40%, or the target's HP is under 40%:\n\tScore -2 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si la précision de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Regard Vif :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si les PV de la cible sont inférieurs à 71 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi la précision du lanceur est diminuée à -2 ou moins :\n\t68,8 % (176/256) de chances d’avoir un score -2 et continuation\n\nSi la cible est gravement empoisonnée :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi la cible est sous l’effet de Vampigraine :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi le lanceur est sous l’effet de Racines :\n\t50 % (128/256) de chances d’avoir un score +1 et continuation\n\nSi la cible est sous l’effet de Malédiction :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 70 % ou si le niveau actuel de précision de la cible est à +0 :\n\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % ou si les PV de la cible sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sand_tomb: {
    id: "sand_tomb",
    routine: {
      singles: {
        en: [
          "If the target has a Flying typing:\n\tIf the target also has a Bug, Rock, or Steel Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Levitate:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible possède le type Vol :\n\tSi la cible possède aussi le type Insecte, Roche ou Acier :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Lévitation :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sandstorm: {
    id: "sandstorm",
    routine: {
      singles: {
        en: [
          "If the weather is already a sandstorm:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la météo est déjà la tempête de sable :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  scary_face: {
    id: "scary_face",
    routine: {
      singles: {
        en: [
          "If the target's speed is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is certainly Speed Boost:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tScore -3 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la vitesse de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est assurément Turbo :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tScore -3 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  scratch: {
    id: "scratch",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  screech: {
    id: "screech",
    routine: {
      singles: {
        en: [
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the target's defense is reduced to -6:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's defense is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si la défense de la cible est diminuée à -6 :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si la défense de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  secret_power: {
    id: "secret_power",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  seismic_toss: {
    id: "seismic_toss",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  selfdestruct: {
    id: "selfdestruct",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Damp:\n\tScore -10 and terminate\n\nIf the user has other living party members:\n\tNo score change and terminate\n\nIf the target has other living party members:\n\tScore -10 and terminate\n\nOtherwise:\n\tScore -1 and terminate",
          "If the move can KO the target:\n\tNo score change and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's evasion is boosted to +1 or more:\n\tScore -1 and continue\n\nIf the target's evasion is boosted to +3 or more:\n\t50% (128/256) chance of score -1 and continue\n\nIf the user's HP is under 80%, or the user will attack after the target:\n\tIf the user's HP is over 50%:\n\t\t80.5% (206/256) chance of score -1 and terminate\n\t\n\tIf the user's HP is under 51%:\n\t\t50% (128/256) chance of score +1 and continue\n\t\n\tIf the user's HP is under 31%:\n\t\t80.5% (206/256) chance of score +1 and terminate\nElse:\n\t80.5% (206/256) chance of score -3 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Moiteur :\n\tScore -10 et arrêt\n\nSi le lanceur a d’autres Pokémon encore en état de combattre dans son équipe :\n\tAucune modification du score et arrêt\n\nSi la cible a d’autres Pokémon encore en état de combattre dans son équipe :\n\tScore -10 et arrêt\n\nSinon :\n\tScore -1 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tAucune modification du score et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’esquive de la cible est augmentée à +1 ou plus :\n\tScore -1 et continuation\n\nSi l’esquive de la cible est augmentée à +3 ou plus :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 80 % ou si le lanceur attaque après la cible :\n\tSi les PV du lanceur sont supérieurs à 50 % :\n\t\t80,5 % (206/256) de chances d’avoir un score -1 et arrêt\n\t\n\tSi les PV du lanceur sont inférieurs à 51 % :\n\t\t50 % (128/256) de chances d’avoir un score +1 et continuation\n\t\n\tSi les PV du lanceur sont inférieurs à 31 % :\n\t\t80,5 % (206/256) de chances d’avoir un score +1 et arrêt\nSinon :\n\t80,5 % (206/256) de chances d’avoir un score -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  shadow_ball: {
    id: "shadow_ball",
    routine: {
      singles: {
        en: [
          "If the target has a Normal typing:\n\tIf the target also has a Psychic, Dark, Steel, or Ghost Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Normal :\n\tSi la cible possède aussi le type Psy, Ténèbres, Acier ou Spectre :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  shadow_punch: {
    id: "shadow_punch",
    routine: {
      singles: {
        en: [
          "If the target has a Normal typing:\n\tIf the target also has a Psychic, Dark, Steel, or Ghost Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current accuracy is reduced to -5 or lower, or the target's current evasion is boosted to +5 or more:\n\tScore +1 and continue\n\nIf the user's current accuracy is reduced to -3 or lower, or the target's current evasion is boosted to +3 or more:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible possède le type Normal :\n\tSi la cible possède aussi le type Psy, Ténèbres, Acier ou Spectre :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la précision actuelle du lanceur est diminuée à -5 ou moins, ou si l’esquive actuelle de la cible est augmentée à +5 ou plus :\n\tScore +1 et continuation\n\nSi la précision actuelle du lanceur est diminuée à -3 ou moins, ou si l’esquive actuelle de la cible est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sheer_cold: {
    id: "sheer_cold",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Sturdy:\n\tScore -10 and terminate\n\nIf the target is a higher level than the user:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Fermeté :\n\tScore -10 et arrêt\n\nSi la cible a un niveau supérieur au lanceur :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  shock_wave: {
    id: "shock_wave",
    routine: {
      singles: {
        en: [
          "If the target has a Ground typing:\n\tIf the target also has a Flying, or Dragon Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Volt Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current accuracy is reduced to -5 or lower, or the target's current evasion is boosted to +5 or more:\n\tScore +1 and continue\n\nIf the user's current accuracy is reduced to -3 or lower, or the target's current evasion is boosted to +3 or more:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible possède le type Sol :\n\tSi la cible possède aussi le type Vol ou Dragon :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Volt :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la précision actuelle du lanceur est diminuée à -5 ou moins, ou si l’esquive actuelle de la cible est augmentée à +5 ou plus :\n\tScore +1 et continuation\n\nSi la précision actuelle du lanceur est diminuée à -3 ou moins, ou si l’esquive actuelle de la cible est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms the absence of Lightning Rod for the target’s ally :\n\tNo further score change and terminate\nOtherwise :\n\tScore -2 and continue\n\tIf the target’s ally does not have the Ground type :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore -8 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme l’absence de Paratonnerre pour l’allié de la cible :\n\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tScore -2 et continuation\n\tSi l’allié de la cible ne possède pas le type Sol :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore -8 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  signal_beam: {
    id: "signal_beam",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  silver_wind: {
    id: "silver_wind",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sing: {
    id: "sing",
    routine: {
      singles: {
        en: [
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Insomnia or Vital Spirit:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target has the move Nightmare or Dream Eater:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Insomnia ou Esprit Vital :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Cauchemar ou Dévorêve :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  skill_swap: {
    id: "skill_swap",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's ability is in the list below:\n\tScore -1 and terminate\n\nIf the target's ability is in the list below:\n\t80.5% (206/256) chance of score +2 and terminate\n\nOtherwise:\n\tScore -1 and terminate",
          "Speed boost \nBattle Armor \nSand Veil \nStatic \nFlash Fire \nWonder Guard \nEffect Spore \nSwift Swim \nHuge Power \nRain Dish \nCute Charm \nShed Skin \nMarvel Scale \nPure Power \nChlorophyll \nShield Dust"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le talent du lanceur est dans la liste ci-dessous :\n\tScore -1 et arrêt\n\nSi le talent de la cible est dans la liste ci-dessous :\n\t80,5 % (206/256) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\tScore -1 et arrêt",
          "Turbo \nArmurbaston \nVoile Sable \nStatik \nTorche \nGarde Mystik \nPose Spore \nGlissade \nColoforce \nCuvette \nJoli Sourire \nMue \nÉcaille Spé. \nForce Pure \nChlorophylle \nÉcran Poudre"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is Truant :\n\tScore +5 and terminate\nOtherwise :\n\tIf the ability of the target, as assessed by the AI, is Shadow Tag or (the ability of the target, as assessed by the AI, is Pure Power) :\n\t\tScore +2 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, est Absentéisme :\n\tScore +5 et arrêt\nSinon :\n\tSi le talent de la cible, tel qu’évalué par l’IA, est Marque Ombre ou (le talent de la cible, tel qu’évalué par l’IA, est Force Pure) :\n\t\tScore +2 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the ability of the target, as assessed by the AI, is Truant :\n\tScore +10 and terminate\nOtherwise :\n\tIf the ability of the user, as assessed by the AI, is not Levitate :\n\t\tIf the ability of the user, as assessed by the AI, is Compound Eyes and the user’s ally knows at least one of these moves (Fire Blast, Thunder, Cross Chop, Hydro Pump, Dynamic Punch, Blizzard, Megahorn) :\n\t\t\tScore +3 and terminate\n\t\tOtherwise :\n\t\t\tScore -30 and terminate\n\tOtherwise :\n\t\tIf the ability of the target, as assessed by the AI, is Levitate :\n\t\t\tScore -30 and terminate\n\t\tOtherwise :\n\t\t\tIf the target’s first type is not Electric :\n\t\t\t\tIf the target’s first type is Psychic and the user’s ally knows at least one of these moves (Fire Blast, Thunder, Cross Chop, Hydro Pump, Dynamic Punch, Blizzard, Megahorn) :\n\t\t\t\t\tScore +3 and terminate\n\t\t\t\tOtherwise :\n\t\t\t\t\tScore -30 and terminate\n\t\t\tOtherwise :\n\t\t\t\tScore +1 and continue\n\t\t\t\tIf the target’s second type is not Electric :\n\t\t\t\t\tIf the target’s second type is Psychic and the user’s ally knows at least one of these moves (Fire Blast, Thunder, Cross Chop, Hydro Pump, Dynamic Punch, Blizzard, Megahorn) :\n\t\t\t\t\t\tScore +3 and terminate\n\t\t\t\t\tOtherwise :\n\t\t\t\t\t\tScore -30 and terminate\n\t\t\t\tOtherwise :\n\t\t\t\t\tScore +1 and terminate"
        ],
        fr: [
          "Si le talent de la cible, tel qu’évalué par l’IA, est Absentéisme :\n\tScore +10 et arrêt\nSinon :\n\tSi le talent du lanceur, tel qu’évalué par l’IA, n’est pas Lévitation :\n\t\tSi le talent du lanceur, tel qu’évalué par l’IA, est Œil Composé et l’allié du lanceur connaît au moins une de ces capacités (Déflagration, Fatal-Foudre, Coup-Croix, Hydrocanon, Dynamopoing, Blizzard, Mégacorne) :\n\t\t\tScore +3 et arrêt\n\t\tSinon :\n\t\t\tScore -30 et arrêt\n\tSinon :\n\t\tSi le talent de la cible, tel qu’évalué par l’IA, est Lévitation :\n\t\t\tScore -30 et arrêt\n\t\tSinon :\n\t\t\tSi le premier type de la cible n’est pas Électrik :\n\t\t\t\tSi le premier type de la cible est Psy et l’allié du lanceur connaît au moins une de ces capacités (Déflagration, Fatal-Foudre, Coup-Croix, Hydrocanon, Dynamopoing, Blizzard, Mégacorne) :\n\t\t\t\t\tScore +3 et arrêt\n\t\t\t\tSinon :\n\t\t\t\t\tScore -30 et arrêt\n\t\t\tSinon :\n\t\t\t\tScore +1 et continuation\n\t\t\t\tSi le second type de la cible n’est pas Électrik :\n\t\t\t\t\tSi le second type de la cible est Psy et l’allié du lanceur connaît au moins une de ces capacités (Déflagration, Fatal-Foudre, Coup-Croix, Hydrocanon, Dynamopoing, Blizzard, Mégacorne) :\n\t\t\t\t\t\tScore +3 et arrêt\n\t\t\t\t\tSinon :\n\t\t\t\t\t\tScore -30 et arrêt\n\t\t\t\tSinon :\n\t\t\t\t\tScore +1 et arrêt"
        ]
      }
    }
  },
  sky_attack: {
    id: "sky_attack",
    routine: {
      singles: {
        en: [
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -2 and terminate\n\nIf the target knows the move Protect or Detect:\n\tScore -2 and terminate\n\nIf the user's HP is under 39%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -2 et arrêt\n\nSi la cible connaît Abri ou Détection :\n\tScore -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 39 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sky_uppercut: {
    id: "sky_uppercut",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  slam: {
    id: "slam",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  slash: {
    id: "slash",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tNo scoring change and terminate\n\nIf the effectiveness of the move is 2x or 4x:\n\t50% (128/256) chance of score +1 and terminate\n\nOtherwise:\n\t25% (64/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tAucune modification du score et arrêt\n\nSi l’efficacité de la capacité est de 2× ou 4× :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt\n\nSinon :\n\t25 % (64/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sleep_powder: {
    id: "sleep_powder",
    routine: {
      singles: {
        en: [
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Insomnia or Vital Spirit:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target has the move Nightmare or Dream Eater:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Insomnia ou Esprit Vital :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Cauchemar ou Dévorêve :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sleep_talk: {
    id: "sleep_talk",
    routine: {
      singles: {
        en: [
          "If the user is not asleep:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user is currently asleep:\n\tScore +10 and terminate\n\nOtherwise:\n\tScore -5 and terminate"
        ],
        fr: [
          "Si le lanceur ne dort pas :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur dort actuellement :\n\tScore +10 et arrêt\n\nSinon :\n\tScore -5 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sludge: {
    id: "sludge",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sludge_bomb: {
    id: "sludge_bomb",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  smellingsalt: {
    id: "smellingsalt",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is paralyzed:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est paralysée :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  smog: {
    id: "smog",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  smokescreen: {
    id: "smokescreen",
    routine: {
      singles: {
        en: [
          "If the target's accuracy is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is Keen Eye:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's HP is under 71%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's accuracy is reduced to -2 or lower:\n\t68.8% (176/256) chance of score -2 and continue\n\nIf the target is badly poisoned:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the target is under the effect of Leech Seed:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the user is under the effect of Ingrain:\n\t50% (128/256) chance of score +1 and continue\n\nIf the target is under the effect of Curse:\n\t72.7% (186/256) chance of score +2 and continue\n\nIf the user's HP is over 70%, or the target's current accuracy level is +0:\n\tNo scoring change and terminate\n\nIf the user's HP is under 40%, or the target's HP is under 40%:\n\tScore -2 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score -2 and terminate"
        ],
        fr: [
          "Si la précision de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Regard Vif :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si les PV de la cible sont inférieurs à 71 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi la précision du lanceur est diminuée à -2 ou moins :\n\t68,8 % (176/256) de chances d’avoir un score -2 et continuation\n\nSi la cible est gravement empoisonnée :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi la cible est sous l’effet de Vampigraine :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi le lanceur est sous l’effet de Racines :\n\t50 % (128/256) de chances d’avoir un score +1 et continuation\n\nSi la cible est sous l’effet de Malédiction :\n\t72,7 % (186/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 70 % ou si le niveau actuel de précision de la cible est à +0 :\n\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % ou si les PV de la cible sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  snore: {
    id: "snore",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the user is not asleep:\n\tScore -8 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "Unconditionally:\n\tScore +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si le lanceur ne dort pas :\n\tScore -8 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Sans condition :\n\tScore +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  softboiled: {
    id: "softboiled",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is full:\n\tScore -3 and terminate\n\nIf the user will move before the target:\n\tScore -8 and terminate\n\nIf the user's HP is over 69%:\n\tWith a 88.3% (226/256) chance:\n\t\tScore -3 and terminate\n\nIf the foe knows the move Snatch:\n\t56.2% (2301/4096) chance of score +2 and terminate\n\nOtherwise:\n\t92.2% (236/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont au maximum :\n\tScore -3 et arrêt\n\nSi le lanceur agit avant la cible :\n\tScore -8 et arrêt\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 88.3% (226/256) de chances :\n\t\tScore -3 et arrêt\n\nSi l’adversaire connaît Saisie :\n\t56,2 % (2301/4096) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\t92,2 % (236/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  solarbeam: {
    id: "solarbeam",
    routine: {
      singles: {
        en: [
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -2 and terminate\n\nIf the target knows the move Protect or Detect:\n\tScore -2 and terminate\n\nIf the user's HP is under 39%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -2 et arrêt\n\nSi la cible connaît Abri ou Détection :\n\tScore -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 39 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sonicboom: {
    id: "sonicboom",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  spark: {
    id: "spark",
    routine: {
      singles: {
        en: [
          "If the target has a Ground typing:\n\tIf the target also has a Flying, or Dragon Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Volt Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Sol :\n\tSi la cible possède aussi le type Vol ou Dragon :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Volt :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms the absence of Lightning Rod for the target’s ally :\n\tNo further score change and terminate\nOtherwise :\n\tScore -2 and continue\n\tIf the target’s ally does not have the Ground type :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore -8 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme l’absence de Paratonnerre pour l’allié de la cible :\n\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tScore -2 et continuation\n\tSi l’allié de la cible ne possède pas le type Sol :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore -8 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  spider_web: {
    id: "spider_web",
    routine: {
      singles: {
        en: [
          "If the target is already prevented from escaping:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible ne peut déjà plus fuir :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  spike_cannon: {
    id: "spike_cannon",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  spikes: {
    id: "spikes",
    routine: {
      singles: {
        en: [
          "If the target's side of the field already has a layer of Spikes:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le côté du terrain de la cible a déjà une rangée de Picots :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  spit_up: {
    id: "spit_up",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's stockpile count is 2 or 3:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le compteur de Stockage du lanceur est de 2 ou 3 :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  spite: {
    id: "spite",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  spore: {
    id: "spore",
    routine: {
      singles: {
        en: [
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Insomnia or Vital Spirit:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target has the move Nightmare or Dream Eater:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Insomnia ou Esprit Vital :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible connaît Cauchemar ou Dévorêve :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  steel_wing: {
    id: "steel_wing",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  stockpile: {
    id: "stockpile",
    routine: {
      singles: {
        en: [
          "If the user's Stockpile count is 3:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le compteur de Stockage du lanceur est de 3 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  stomp: {
    id: "stomp",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  strength: {
    id: "strength",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  string_shot: {
    id: "string_shot",
    routine: {
      singles: {
        en: [
          "If the target's speed is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's ability is certainly Speed Boost:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move before the target:\n\tScore -3 and terminate\n\nOtherwise:\n\t72.7% (186/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la vitesse de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi le talent de la cible est assurément Turbo :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit avant la cible :\n\tScore -3 et arrêt\n\nSinon :\n\t72,7 % (186/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  stun_spore: {
    id: "stun_spore",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Limber:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move after the target:\n\t92.2% (236/256) chance of score +3 and terminate\n\nIf the user's HP is under 71%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Échauffement :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit après la cible :\n\t92,2 % (236/256) de chances d’avoir un score +3 et arrêt\n\nSi les PV du lanceur sont inférieurs à 71 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  submission: {
    id: "submission",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  substitute: {
    id: "substitute",
    routine: {
      singles: {
        en: [
          "If the user already has a substitute:\n\tScore -8 and terminate\n\nIf the user's HP is under 26%:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 91%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is under 71%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is under 51%:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user will move after the foe:\n\tNo scoring change and terminate\n\nIf the last move used by the foe directly inflicts sleep, poison, paralysis, or burns, and the foe is not currently statused:\n\t60.9% (156/256) chance of score +1 and terminate\n\nIf the last move used by the foe was Supersonic, Confuse Ray, or Sweet Kiss, and the foe is not currently confused:\n\t60.9% (156/256) chance of score +1 and terminate\n\nIf the last move used by the foe was Leech Seed, and the foe is not currently under the effect of Leech Seed:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si le lanceur a déjà un clone :\n\tScore -8 et arrêt\n\nSi les PV du lanceur sont inférieurs à 26 % :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 91 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 71 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont inférieurs à 51 % :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi le lanceur agit après l’adversaire :\n\tAucune modification du score et arrêt\n\nSi la dernière capacité utilisée par l’adversaire inflige directement le sommeil, le poison, la paralysie ou la brûlure, et que l’adversaire n’a actuellement aucun problème de statut :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était Ultrason, Onde Folie ou Doux Baiser, et que l’adversaire n’est pas actuellement confus :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était Vampigraine, et que l’adversaire n’est pas actuellement sous l’effet de Vampigraine :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sunny_day: {
    id: "sunny_day",
    routine: {
      singles: {
        en: [
          "If the weather is already sun:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 40%:\n\tScore -1 and terminate\n\nIf the current weather is rain, hail, or sandstorm:\n\tScore +1 and terminate"
        ],
        fr: [
          "Si la météo est déjà le soleil :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 40 % :\n\tScore -1 et arrêt\n\nSi la météo actuelle est la pluie, la grêle ou la tempête de sable :\n\tScore +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  super_fang: {
    id: "super_fang",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is under 51%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont inférieurs à 51 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  superpower: {
    id: "superpower",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -1 and terminate",
          "If the user's attack is reduced to -1 or lower:\n\tScore -1 and terminate\n\nIf the user will move after the target, and the user's HP is over 59%:\n\tScore -1 and terminate\n\nIf the user will move before the target, and the user's HP is over 40%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -1 et arrêt",
          "Si l’attaque du lanceur est diminuée à -1 ou moins :\n\tScore -1 et arrêt\n\nSi le lanceur agit après la cible et que ses PV sont supérieurs à 59 % :\n\tScore -1 et arrêt\n\nSi le lanceur agit avant la cible et que ses PV sont supérieurs à 40 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  supersonic: {
    id: "supersonic",
    routine: {
      singles: {
        en: [
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the target is already confused:\n\tScore -5 and terminate\n\nIf the target's ability is Own Tempo:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is over 70%:\n\tNo scoring change and terminate\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the target's HP is under 51%:\n\tScore -1 and continue\n\nIf the target's HP is under 31%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si la cible est déjà confuse :\n\tScore -5 et arrêt\n\nSi le talent de la cible est Tempo Perso :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont supérieurs à 70 % :\n\tAucune modification du score et arrêt\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV de la cible sont inférieurs à 51 % :\n\tScore -1 et continuation\n\nSi les PV de la cible sont inférieurs à 31 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  surf: {
    id: "surf",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  swagger: {
    id: "swagger",
    routine: {
      singles: {
        en: [
          "If the target is already confused:\n\tScore -5 and terminate\n\nIf the target's ability is Own Tempo:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user knows the move Psych Up:\n\tIf the target's current attack is reduced to -3 or lower:\n\t\tIf this is the first turn of the battle:\n\t\t\tScore +5 and terminate\n\t\tElse:\n\t\t\tScore +3 and terminate\n\t\n\tElse:\n\t\tScore -5 and terminate",
          "Unconditionally:\n\t50% (128/256) chance of score +1 and continue",
          "If the target's HP is over 70%:\n\tNo scoring change and terminate\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the target's HP is under 51%:\n\tScore -1 and continue\n\nIf the target's HP is under 31%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la cible est déjà confuse :\n\tScore -5 et arrêt\n\nSi le talent de la cible est Tempo Perso :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur connaît Boost :\n\tSi l’attaque actuelle de la cible est diminuée à -3 ou moins :\n\t\tSi c’est le premier tour du combat :\n\t\t\tScore +5 et arrêt\n\t\tSinon :\n\t\t\tScore +3 et arrêt\n\t\n\tSinon :\n\t\tScore -5 et arrêt",
          "Sans condition :\n\t50 % (128/256) de chances d’avoir un score +1 et continuation",
          "Si les PV de la cible sont supérieurs à 70 % :\n\tAucune modification du score et arrêt\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV de la cible sont inférieurs à 51 % :\n\tScore -1 et continuation\n\nSi les PV de la cible sont inférieurs à 31 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the target holds a Persim Berry :\n\tIf the Attack stage of the target is above +1 :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore +3 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si la cible tient une Baie Kika :\n\tSi le niveau d’Attaque de la cible est supérieur à +1 :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore +3 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  swallow: {
    id: "swallow",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the user's Stockpile count is 0:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is full:\n\tScore -3 and terminate\n\nIf the user will move before the target:\n\tScore -8 and terminate\n\nIf the user's HP is over 69%:\n\tWith a 88.3% (226/256) chance:\n\t\tScore -3 and terminate\n\nIf the foe knows the move Snatch:\n\t56.2% (2301/4096) chance of score +2 and terminate\n\nOtherwise:\n\t92.2% (236/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le compteur de Stockage du lanceur est de 0 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont au maximum :\n\tScore -3 et arrêt\n\nSi le lanceur agit avant la cible :\n\tScore -8 et arrêt\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 88.3% (226/256) de chances :\n\t\tScore -3 et arrêt\n\nSi l’adversaire connaît Saisie :\n\t56,2 % (2301/4096) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\t92,2 % (236/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sweet_kiss: {
    id: "sweet_kiss",
    routine: {
      singles: {
        en: [
          "If the target is already confused:\n\tScore -5 and terminate\n\nIf the target's ability is Own Tempo:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's HP is over 70%:\n\tNo scoring change and terminate\n\nUnconditionally:\n\t50% (128/256) chance of score -1 and continue\n\nIf the target's HP is under 51%:\n\tScore -1 and continue\n\nIf the target's HP is under 31%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la cible est déjà confuse :\n\tScore -5 et arrêt\n\nSi le talent de la cible est Tempo Perso :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV de la cible sont supérieurs à 70 % :\n\tAucune modification du score et arrêt\n\nSans condition :\n\t50 % (128/256) de chances d’avoir un score -1 et continuation\n\nSi les PV de la cible sont inférieurs à 51 % :\n\tScore -1 et continuation\n\nSi les PV de la cible sont inférieurs à 31 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  sweet_scent: {
    id: "sweet_scent",
    routine: {
      singles: {
        en: [
          "If the target's evasion is reduced to -6:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's evasion is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si l’esquive de la cible est diminuée à -6 :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si l’esquive de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  swift: {
    id: "swift",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current accuracy is reduced to -5 or lower, or the target's current evasion is boosted to +5 or more:\n\tScore +1 and continue\n\nIf the user's current accuracy is reduced to -3 or lower, or the target's current evasion is boosted to +3 or more:\n\t60.9% (156/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la précision actuelle du lanceur est diminuée à -5 ou moins, ou si l’esquive actuelle de la cible est augmentée à +5 ou plus :\n\tScore +1 et continuation\n\nSi la précision actuelle du lanceur est diminuée à -3 ou moins, ou si l’esquive actuelle de la cible est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  swords_dance: {
    id: "swords_dance",
    routine: {
      singles: {
        en: [
          "If the user's current attack is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current attack is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current attack is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 39% and under 71%:\n\t84.4% (216/256) chance of score -2 and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa attaque actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 39 % et inférieurs à 71 % :\n\t84,4 % (216/256) de chances d’avoir un score -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  synthesis: {
    id: "synthesis",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the current weather is rain, sandstorm, or hail:\n\tScore -2 and continue",
          "If the user's HP is full:\n\tScore -3 and terminate\n\nIf the user will move before the target:\n\tScore -8 and terminate\n\nIf the user's HP is over 69%:\n\tWith a 88.3% (226/256) chance:\n\t\tScore -3 and terminate\n\nIf the foe knows the move Snatch:\n\t56.2% (2301/4096) chance of score +2 and terminate\n\nOtherwise:\n\t92.2% (236/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la météo actuelle est la pluie, la tempête de sable ou la grêle :\n\tScore -2 et continuation",
          "Si les PV du lanceur sont au maximum :\n\tScore -3 et arrêt\n\nSi le lanceur agit avant la cible :\n\tScore -8 et arrêt\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 88.3% (226/256) de chances :\n\t\tScore -3 et arrêt\n\nSi l’adversaire connaît Saisie :\n\t56,2 % (2301/4096) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\t92,2 % (236/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  tackle: {
    id: "tackle",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  tail_glow: {
    id: "tail_glow",
    routine: {
      singles: {
        en: [
          "If the user's current special attack is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current special attack is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current special attack is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 39% and under 71%:\n\t72.7% (186/256) chance of score -2 and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si l’attaque spéciale actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque spéciale actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa attaque spéciale actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 39 % et inférieurs à 71 % :\n\t72,7 % (186/256) de chances d’avoir un score -2 et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  tail_whip: {
    id: "tail_whip",
    routine: {
      singles: {
        en: [
          "If the target's defense is reduced to -6:\n\tScore -10 and terminate",
          "If the target's ability is Clear Body or White Smoke:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's HP is under 70%, or the target's defense is reduced to -3 or lower:\n\t80.5% (206/256) chance of score -2 and continue\n\nIf the target's HP is under 71%:\n\tScore -2 and terminate"
        ],
        fr: [
          "Si la défense de la cible est diminuée à -6 :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Corps Sain ou Écran Fumée :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si les PV du lanceur sont inférieurs à 70 % ou si la défense de la cible est diminuée à -3 ou moins :\n\t80,5 % (206/256) de chances d’avoir un score -2 et continuation\n\nSi les PV de la cible sont inférieurs à 71 % :\n\tScore -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  take_down: {
    id: "take_down",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  taunt: {
    id: "taunt",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  teeter_dance: {
    id: "teeter_dance",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  thrash: {
    id: "thrash",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  thunder: {
    id: "thunder",
    routine: {
      singles: {
        en: [
          "If the target has a Ground typing:\n\tIf the target also has a Flying, or Dragon Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Volt Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Sol :\n\tSi la cible possède aussi le type Vol ou Dragon :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Volt :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms the absence of Lightning Rod for the target’s ally :\n\tNo further score change and terminate\nOtherwise :\n\tScore -2 and continue\n\tIf the target’s ally does not have the Ground type :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore -8 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme l’absence de Paratonnerre pour l’allié de la cible :\n\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tScore -2 et continuation\n\tSi l’allié de la cible ne possède pas le type Sol :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore -8 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  thunder_wave: {
    id: "thunder_wave",
    routine: {
      singles: {
        en: [
          "If the target has a Ground typing:\n\tIf the target also has a Flying, or Dragon Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the target's ability is Limber:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user will move after the target:\n\t92.2% (236/256) chance of score +3 and terminate\n\nIf the user's HP is under 71%:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la cible possède le type Sol :\n\tSi la cible possède aussi le type Vol ou Dragon :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Échauffement :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur agit après la cible :\n\t92,2 % (236/256) de chances d’avoir un score +3 et arrêt\n\nSi les PV du lanceur sont inférieurs à 71 % :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms the absence of Lightning Rod for the target’s ally :\n\tNo further score change and terminate\nOtherwise :\n\tScore -2 and continue\n\tIf the target’s ally does not have the Ground type :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore -8 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme l’absence de Paratonnerre pour l’allié de la cible :\n\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tScore -2 et continuation\n\tSi l’allié de la cible ne possède pas le type Sol :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore -8 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  thunderbolt: {
    id: "thunderbolt",
    routine: {
      singles: {
        en: [
          "If the target has a Ground typing:\n\tIf the target also has a Flying, or Dragon Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Volt Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Sol :\n\tSi la cible possède aussi le type Vol ou Dragon :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Volt :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms the absence of Lightning Rod for the target’s ally :\n\tNo further score change and terminate\nOtherwise :\n\tScore -2 and continue\n\tIf the target’s ally does not have the Ground type :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore -8 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme l’absence de Paratonnerre pour l’allié de la cible :\n\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tScore -2 et continuation\n\tSi l’allié de la cible ne possède pas le type Sol :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore -8 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  thunderpunch: {
    id: "thunderpunch",
    routine: {
      singles: {
        en: [
          "If the target has a Ground typing:\n\tIf the target also has a Flying, or Dragon Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Volt Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Sol :\n\tSi la cible possède aussi le type Vol ou Dragon :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Volt :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms the absence of Lightning Rod for the target’s ally :\n\tNo further score change and terminate\nOtherwise :\n\tScore -2 and continue\n\tIf the target’s ally does not have the Ground type :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore -8 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme l’absence de Paratonnerre pour l’allié de la cible :\n\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tScore -2 et continuation\n\tSi l’allié de la cible ne possède pas le type Sol :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore -8 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  tickle: {
    id: "tickle",
    routine: {
      singles: {
        en: [
          "If the target's current attack is reduced to -6:\n\tScore -10 and terminate\n\nIf the target's current defense is reduced to -6:\n\tScore -8 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’attaque actuelle de la cible est diminuée à -6 :\n\tScore -10 et arrêt\n\nSi la défense actuelle de la cible est diminuée à -6 :\n\tScore -8 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  torment: {
    id: "torment",
    routine: {
      singles: {
        en: [
          "If the target is already under the effect of Torment:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible est déjà sous l’effet de Tourmente :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  toxic: {
    id: "toxic",
    routine: {
      singles: {
        en: [
          "If the target is Steel or Poison type:\n\tScore -10 and terminate\n\nIf the target's ability is Immunity:\n\tScore -10 and terminate",
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user has a move that inflicts damage:\n\tIf the user's HP is under 51%:\n\t\t80.5% (206/256) chance of score -3 and continue\n\t\n\tIf the target's HP is under 51%:\n\t\t80.5% (206/256) chance of score -3 and continue\n\nIf the user knows the move Protect or Detect:\n\t76.6% (196/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible est de type Acier ou Poison :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Vaccin :\n\tScore -10 et arrêt",
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur possède une capacité qui inflige des dégâts :\n\tSi les PV du lanceur sont inférieurs à 51 % :\n\t\t80,5 % (206/256) de chances d’avoir un score -3 et continuation\n\t\n\tSi les PV de la cible sont inférieurs à 51 % :\n\t\t80,5 % (206/256) de chances d’avoir un score -3 et continuation\n\nSi le lanceur connaît Abri ou Détection :\n\t76,6 % (196/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the ability of the target, as assessed by the AI, is Guts and the target does not have a major status condition and the following condition is not met (the HP percentage of the user, rounded down, is below 91%) :\n\tScore +5 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le talent de la cible, tel qu’évalué par l’IA, est Cran et la cible n’a pas une altération de statut principale et la condition suivante n’est pas remplie (le pourcentage de PV du lanceur, arrondi à l’entier inférieur, est inférieur à 91 %) :\n\tScore +5 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  transform: {
    id: "transform",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  tri_attack: {
    id: "tri_attack",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  trick: {
    id: "trick",
    routine: {
      singles: {
        en: [
          "If the target's ability is Sticky Hold:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user is holding a Choice Band:\n\tIf the target is holding a Choice Band:\n\t\tScore -3 and terminate\n\tElse:\n\t\tScore +5 and terminate\n\nIf the user is holding a flavor-confusing berry (Figy, Wiki, Mago, Aguav, Iapapa), Macho Brace, or Choice Band:\n\tIf the target is holding a flavor-confusing berry, Macho Brace, or Choice Band:\n\t\tScore -3 and terminate\n\tElse:\n\t\t80.5% (206/256) chance of score +2 and terminate\n\nOtherwise:\n\tScore -3 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Glue :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si le lanceur tient un Band. Choix :\n\tSi la cible tient un Band. Choix :\n\t\tScore -3 et arrêt\n\tSinon :\n\t\tScore +5 et arrêt\n\nSi le lanceur tient une baie pouvant rendre confus selon la nature (Figy, Wiki, Mago, Gowav, Papaya), un Bracelet Macho ou un Band. Choix :\n\tSi la cible tient une baie pouvant rendre confus selon la nature, un Bracelet Macho ou un Band. Choix :\n\t\tScore -3 et arrêt\n\tSinon :\n\t\t80,5 % (206/256) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\tScore -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  triple_kick: {
    id: "triple_kick",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  twineedle: {
    id: "twineedle",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  twister: {
    id: "twister",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  uproar: {
    id: "uproar",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the target's ability is Soundproof:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Anti-Bruit :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  vicegrip: {
    id: "vicegrip",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  water_gun: {
    id: "water_gun",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  water_pulse: {
    id: "water_pulse",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  water_spout: {
    id: "water_spout",
    routine: {
      singles: {
        en: [
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the effectiveness of the move is 1/2x, or 1/4x:\n\tScore -1 and terminate",
          "If the user will attack after the target:\n\tIf the target's HP is over 70%:\n\t\tNo scoring change and terminate\n\tElse:\n\t\tScore -1 and terminate\n\nIf the target's HP is over 50%:\n\tNo score change and terminate\n\nOtherwise:\n\tScore -1 and terminate"
        ],
        fr: [
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’efficacité de la capacité est de 1/2× ou 1/4× :\n\tScore -1 et arrêt",
          "Si le lanceur attaque après la cible :\n\tSi les PV de la cible sont supérieurs à 70 % :\n\t\tAucune modification du score et arrêt\n\tSinon :\n\t\tScore -1 et arrêt\n\nSi les PV de la cible sont supérieurs à 50 % :\n\tAucune modification du score et arrêt\n\nSinon :\n\tScore -1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  waterfall: {
    id: "waterfall",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  whirlpool: {
    id: "whirlpool",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Water Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Eau :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  whirlwind: {
    id: "whirlwind",
    routine: {
      singles: {
        en: [
          "If the target has no other living party members:\n\tScore -10 and terminate\n\nIf the target's ability is Suction Cups:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target's attack, defense, special attack, special defense, or evasion is boosted to +3 or more:\n\t50% (128/256) chance of score +2 and terminate\n\nOtherwise:\n\tScore -3 and terminate"
        ],
        fr: [
          "Si la cible n’a aucun autre Pokémon encore en état de combattre dans son équipe :\n\tScore -10 et arrêt\n\nSi le talent de la cible est Ventouse :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si l’attaque, la défense, l’attaque spéciale, la défense spéciale ou l’esquive de la cible est augmentée à +3 ou plus :\n\t50 % (128/256) de chances d’avoir un score +2 et arrêt\n\nSinon :\n\tScore -3 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  will_o_wisp: {
    id: "will_o_wisp",
    routine: {
      singles: {
        en: [
          "If the target's ability is Water Veil:\n\tScore -10 and terminate\n\nIf the effectiveness of the move is 1/2x, 1/4x, or 0x:\n\tScore -10 and terminate",
          "If the target is already statused:\n\tScore -10 and terminate",
          "If the target is protected by Safeguard:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si le talent de la cible est Ignifu-Voile :\n\tScore -10 et arrêt\n\nSi l’efficacité de la capacité est de 1/2×, 1/4× ou 0× :\n\tScore -10 et arrêt",
          "Si la cible a déjà un problème de statut :\n\tScore -10 et arrêt",
          "Si la cible est protégée par Rune Abri :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the Flash Fire boost of the user has been activated :\n\tScore +1 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le bonus de Torche du lanceur a été activé :\n\tScore +1 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "If the ability of the target, as assessed by the AI, is Guts and the target does not have a major status condition and the following condition is not met (the HP percentage of the user, rounded down, is below 91%) :\n\tScore +5 and terminate\nOtherwise :\n\tScore -30 and terminate"
        ],
        fr: [
          "Si le talent de la cible, tel qu’évalué par l’IA, est Cran et la cible n’a pas une altération de statut principale et la condition suivante n’est pas remplie (le pourcentage de PV du lanceur, arrondi à l’entier inférieur, est inférieur à 91 %) :\n\tScore +5 et arrêt\nSinon :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  wish: {
    id: "wish",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  withdraw: {
    id: "withdraw",
    routine: {
      singles: {
        en: [
          "If the user's current defense is boosted to +6:\n\tScore -10 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the user's current defense is boosted to +3 or more:\n\t60.9% (156/256) chance of score -1 and continue\n\nIf the user's HP is full and its current defense is boosted to under +3:\n\t50% (128/256) chance of score +2 and continue\n\nIf the user's HP is over 69%:\n\tWith a 78.1% (200/256) chance:\n\t\tNo scoring change and terminate\n\nIf the user's HP is under 40%:\n\tScore -2 and terminate\n\nIf the last move used by the foe is nondamaging, or the foe has not yet used a move:\n\t76.6% (196/256) chance of score -2 and terminate\n\nIf the last move used by the foe is a special move:\n\tScore -2 and terminate\n\nOtherwise:\n\t58.6% (2401/4096) chance of score -2 and terminate"
        ],
        fr: [
          "Si la défense actuelle du lanceur est augmentée à +6 :\n\tScore -10 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la défense actuelle du lanceur est augmentée à +3 ou plus :\n\t60,9 % (156/256) de chances d’avoir un score -1 et continuation\n\nSi les PV du lanceur sont au maximum et que sa défense actuelle est augmentée à moins de +3 :\n\t50 % (128/256) de chances d’avoir un score +2 et continuation\n\nSi les PV du lanceur sont supérieurs à 69 % :\n\tAvec 78.1% (200/256) de chances :\n\t\tAucune modification du score et arrêt\n\nSi les PV du lanceur sont inférieurs à 40 % :\n\tScore -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire n’infligeait pas de dégâts, ou si l’adversaire n’a pas encore utilisé de capacité :\n\t76,6 % (196/256) de chances d’avoir un score -2 et arrêt\n\nSi la dernière capacité utilisée par l’adversaire était spéciale :\n\tScore -2 et arrêt\n\nSinon :\n\t58,6 % (2401/4096) de chances d’avoir un score -2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  wrap: {
    id: "wrap",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 0x:\n\tScore -10 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate",
          "If the target is badly poisoned, or infatuated, or under the effect or Curse, or Perish Song:\n\t50% (128/256) chance of score +1 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 0× :\n\tScore -10 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt",
          "Si la cible est gravement empoisonnée, sous l’effet d’Attraction, de Malédiction ou de Requiem :\n\t50 % (128/256) de chances d’avoir un score +1 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts :\n\tIf the user has a major status condition :\n\t\tScore +1 and continue\n\t\tIf the move is one of the user’s highest-damage moves according to the AI’s calculation :\n\t\t\tScore +2 and terminate\n\t\tOtherwise :\n\t\t\tNo further score change and terminate\n\tOtherwise :\n\t\tNo further score change and terminate\nOtherwise :\n\tIf the user’s ally knows Helping Hand :\n\t\tScore +1 and terminate\n\tOtherwise :\n\t\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran :\n\tSi le lanceur a une altération de statut principale :\n\t\tScore +1 et continuation\n\t\tSi la capacité est parmi celles du lanceur infligeant le plus de dégâts selon le calcul de l’IA :\n\t\t\tScore +2 et arrêt\n\t\tSinon :\n\t\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tSi l’allié du lanceur connaît Coup d’Main :\n\t\tScore +1 et arrêt\n\tSinon :\n\t\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  yawn: {
    id: "yawn",
    routine: {
      singles: {
        en: [
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the ability of the user, as assessed by the AI, is not Guts and the user has a major status condition :\n\tScore -5 and terminate\nOtherwise :\n\tNo further score change and terminate"
        ],
        fr: [
          "Si le talent du lanceur, tel qu’évalué par l’IA, n’est pas Cran et le lanceur a une altération de statut principale :\n\tScore -5 et arrêt\nSinon :\n\tAucune modification supplémentaire du score et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  },
  zap_cannon: {
    id: "zap_cannon",
    routine: {
      singles: {
        en: [
          "If the target has a Ground typing:\n\tIf the target also has a Flying, or Dragon Typing:\n\t\tNo score change and continue\n\tElse:\n\t\tScore -10 and terminate",
          "If the target's ability is Volt Absorb:\n\tScore -12 and terminate",
          "If the target's ability is Wonder Guard, and the effectiveness of the move is not 2x:\n\tScore -10 and terminate",
          "If the move can KO the target:\n\tScore +4 and terminate",
          "If the move cannot KO the target, and a different move the user knows would do more damage to the target:\n\tScore -1 and terminate",
          "If the effectiveness of the move is 4x:\n\t68.8% (176/256) chance of score +2 and terminate"
        ],
        fr: [
          "Si la cible possède le type Sol :\n\tSi la cible possède aussi le type Vol ou Dragon :\n\t\tAucune modification du score et continuation\n\tSinon :\n\t\tScore -10 et arrêt",
          "Si le talent de la cible est Absorb Volt :\n\tScore -12 et arrêt",
          "Si le talent de la cible est Garde Mystik et que l’efficacité de la capacité n’est pas de 2× :\n\tScore -10 et arrêt",
          "Si la capacité peut mettre K.O. la cible :\n\tScore +4 et arrêt",
          "Si la capacité ne peut pas mettre K.O. la cible et qu’une autre capacité connue par le lanceur infligerait plus de dégâts à la cible :\n\tScore -1 et arrêt",
          "Si l’efficacité de la capacité est de 4× :\n\t68,8 % (176/256) de chances d’avoir un score +2 et arrêt"
        ]
      },
      doublesEnemy: {
        en: [
          "If the AI’s ability check confirms the absence of Lightning Rod for the target’s ally :\n\tNo further score change and terminate\nOtherwise :\n\tScore -2 and continue\n\tIf the target’s ally does not have the Ground type :\n\t\tNo further score change and terminate\n\tOtherwise :\n\t\tScore -8 and terminate"
        ],
        fr: [
          "Si le test de talent de l’IA confirme l’absence de Paratonnerre pour l’allié de la cible :\n\tAucune modification supplémentaire du score et arrêt\nSinon :\n\tScore -2 et continuation\n\tSi l’allié de la cible ne possède pas le type Sol :\n\t\tAucune modification supplémentaire du score et arrêt\n\tSinon :\n\t\tScore -8 et arrêt"
        ]
      },
      doublesAlly: {
        en: [
          "Unconditionally:\n\tScore -30 and terminate"
        ],
        fr: [
          "Sans condition :\n\tScore -30 et arrêt"
        ]
      }
    }
  }
};
