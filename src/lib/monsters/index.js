import aoeCircle from "./aoe-circle.svg";
import aoeCircleWithMiddleBlack from "./aoe-circle-with-middle-black.svg";
import aoeCircleWithSideBlack from "./aoe-circle-with-side-black.svg";
import aoeTriangle2 from "./aoe-triangle-2.svg";
import aoeTriangle2WithBlack from "./aoe-triangle-2-with-black.svg";
import aoeTriangle3WithCornerBlack from "./aoe-triangle-3-with-corner-black.svg";
import aoeLine3WithBlack from "./aoe-line-3-with-black.svg";
import aoeLine4WithBlack from "./aoe-line-4-with-black.svg";
import aoeLine6WithBlack from "./aoe-line-6-with-black.svg";
import aoe4WithBlack from "./aoe-4-with-black.svg";
import elderDrakeSpecial1Area from "./elderDrakeSpecial1Area.svg";
import inoxBodyguardSpecial1Area from "./inoxBodyguardSpecial1Area.svg";
import sightlessEyeSpecial1Area from "./sightlessEyeSpecial1Area.svg";
import sightlessEyeSpecial2Area from "./sightlessEyeSpecial2Area.svg";

import { END_ACTIONS } from "../cards";
import * as elements from "../elements";
import {POISON, WOUND, IMMOBILIZE, MUDDLE, DISARM, STUN, INVISIBLE, PUSH, PULL, CURSE, STRENGTHEN } from "../statusEffects"
import { action, ATTACK, MOVE, RANGE, HEAL, TARGET, SHIELD, RETALIATE, PIERCE } from "../actions";

const ARCHER_CARDS = [
    {
        initiative: 29,
        actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(RANGE, "+1"), action(IMMOBILIZE)])],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 16,
        actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
    },
    {
        initiative: 56,
        actions: [action(ATTACK, "-1", [action(TARGET, "2")])],
    },
    {
        initiative: 68,
        actions: [action(ATTACK, "+1", [action(RANGE, "+1")])],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 32,
        actions: [action(MOVE, "+0"), action(ATTACK, "+1", [action(RANGE, "-1")])],
    },
    {
        initiative: 44,
        actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
    },
    {
        initiative: 14,
        actions: [action(MOVE, "-1"), action(ATTACK, "-1"), "Create a 3 damage trap in an adjacent empty hex closest to an enemy."],
    },
    {
        initiative: 31,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
];
const GUARD_CARDS = [
    {
        initiative: 70,
        actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
    },
    {
        initiative: 30,
        actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
    },
    {
        initiative: 50,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
    {
        initiative: 15,
        actions: [action(SHIELD, "1"), action(RETALIATE, "2")],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 15,
        actions: [action(SHIELD, "1"), action(ATTACK, "+0", [action(POISON)])],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 55,
        actions: [action(MOVE, "-1"), action(ATTACK, "+0"), action(STRENGTHEN, null, ["self"])],
    },
    {
        initiative: 50,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
];
const IMP_CARDS = [
    {
        initiative: 24,
        actions: [action(STRENGTHEN, null, ["Affect all allies within range 2"]), action(MUDDLE, null, ["Target all enemies within range 2"])],
    },
    {
        initiative: 43,
        actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(TARGET, "2"), action(CURSE)])],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 76,
        actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
    },
    {
        initiative: 43,
        actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(TARGET, "2"), action(POISON)])],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 42,
        actions: [action(MOVE, "+1"), action(HEAL, "2", [action(RANGE, "3")])],
    },
    {
        initiative: 5,
        actions: [action(SHIELD, "5"), action(HEAL, "1", ["self"])],
    },
    {
        initiative: 37,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
    {
        initiative: 37,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
];
const SHAMAN_CARDS = [
    {
        initiative: 8,
        actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(DISARM)])],
    },
    {
        initiative: 9,
        actions: [action(MOVE, "+1"), action(ATTACK, "-1", [action(CURSE), action(TARGET, "2")])],
    },
    {
        initiative: 23,
        actions: [action(MOVE, "+0"), action(HEAL, "3", [action(RANGE, "3")])],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 89,
        actions: [action(MOVE, "-1"), action(HEAL, "1", ["Affect all adjacent allies"]), "bless self"],
    },
    {
        initiative: 62,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
    {
        initiative: 23,
        actions: [action(MOVE, "+0"), action(HEAL, "3", [action(RANGE, "3")])],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 8,
        actions: [action(MOVE, "-1"), action(ATTACK, "+0"), action(IMMOBILIZE)],
    },
    {
        initiative: 74,
        actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
    },
];
const SCOUT_CARDS = [
    {
        initiative: 29,
        actions: [action(MOVE, "-1"), action(ATTACK, "-1", [action(RANGE, "3")])],
    },
    {
        initiative: 35,
        actions: [action(MOVE, "+1", ["jump"]), "loot 1"],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 40,
        actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
    },
    {
        initiative: 53,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
    {
        initiative: 54,
        actions: [action(MOVE, "-2"), action(ATTACK, "+0", [action(RANGE, "3"), action(POISON)])],
    },
    {
        initiative: 69,
        actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
    },
    {
        initiative: 79,
        actions: [action(ATTACK, "-1", [action(RANGE, "4"), action(TARGET, "2")])],
    },
    {
        initiative: 92,
        actions: [action(ATTACK, "+2", [action(POISON)])],
        endAction: END_ACTIONS.SHUFFLE,
    },
];

export const MONSTERS = {
    "Ancient Artillery": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 4,
                    move: 0,
                    attack: 2,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 7,
                    move: 0,
                    attack: 3,
                    range: 5,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 0,
                    attack: 2,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 0,
                    attack: 3,
                    range: 5,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 0,
                    attack: 2,
                    range: 5,
                    extra: [],
                },
                elite: {
                    maxHP: 11,
                    move: 0,
                    attack: 3,
                    range: 6,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 0,
                    attack: 3,
                    range: 5,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 0,
                    attack: 4,
                    range: 6,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 0,
                    attack: 4,
                    range: 5,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 0,
                    attack: 4,
                    range: 6,
                    extra: [action(TARGET, "2")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 0,
                    attack: 4,
                    range: 6,
                    extra: [],
                },
                elite: {
                    maxHP: 15,
                    move: 0,
                    attack: 4,
                    range: 7,
                    extra: [action(TARGET, "2")],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 0,
                    attack: 4,
                    range: 6,
                    extra: [],
                },
                elite: {
                    maxHP: 16,
                    move: 0,
                    attack: 5,
                    range: 7,
                    extra: [action(TARGET, "2")],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 0,
                    attack: 4,
                    range: 7,
                    extra: [],
                },
                elite: {
                    maxHP: 20,
                    move: 0,
                    attack: 5,
                    range: 7,
                    extra: [action(TARGET, "2")],
                },
            },
        ],
        cards: [
            {
                initiative: 17,
                actions: [action(PUSH, "2", ["Target all adjacent enemies"]), action(SHIELD, "2"), action(ATTACK, "-2")],
            },
            {
                initiative: 37,
                actions: [action(PUSH, "1", ["Target all adjacent enemies"]), action(ATTACK, "-1", [action(RANGE, "-1")], aoeCircle)],
            },
            {
                initiative: 37,
                actions: [action(PUSH, "1", ["Target all adjacent enemies"]), action(ATTACK, "-1", [action(RANGE, "-1")], aoeTriangle2)],
            },
            {
                initiative: 46,
                actions: [action(ATTACK, "-1", [action(IMMOBILIZE)], aoeTriangle2)],
            },
            {
                initiative: 46,
                actions: [action(ATTACK, "-1", [action(RANGE, "+2")])],
            },
            {
                initiative: 71,
                actions: [action(ATTACK, "+0", ["All adjacent enemies suffer 2 damage"])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 71,
                actions: [action(ATTACK, "+0", ["All adjacent enemies suffer 2 damage"])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 95,
                actions: [action(ATTACK, "+1")],
            },
        ],
    },
    "Bandit Archer": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 4,
                    move: 2,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 6,
                    move: 2,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 7,
                    move: 2,
                    attack: 3,
                    range: 5,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 2,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 3,
                    attack: 3,
                    range: 5,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 3,
                    attack: 4,
                    range: 5,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 3,
                    attack: 4,
                    range: 6,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 3,
                    range: 5,
                    extra: [],
                },
                elite: {
                    maxHP: 12,
                    move: 4,
                    attack: 4,
                    range: 6,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 4,
                    range: 5,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 4,
                    attack: 5,
                    range: 6,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 3,
                    attack: 4,
                    range: 5,
                    extra: [],
                },
                elite: {
                    maxHP: 17,
                    move: 4,
                    attack: 5,
                    range: 6,
                    extra: [action(POISON)],
                },
            },
        ],
        cards: ARCHER_CARDS,
    },
    "Bandit Guard": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 2,
                    attack: 4,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 3,
                    attack: 4,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 4,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 11,
                    move: 3,
                    attack: 4,
                    extra: [action(MUDDLE), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 12,
                    move: 3,
                    attack: 5,
                    extra: [action(MUDDLE), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 14,
                    move: 4,
                    attack: 5,
                    extra: [action(MUDDLE), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 5,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 5,
                    extra: [action(MUDDLE), action(SHIELD, "3")],
                },
            },
        ],
        cards: GUARD_CARDS,
    },
    "Black Imp": {
        tokenCount: 10,
        stats: [
            {
                normal: {
                    maxHP: 3,
                    move: 1,
                    attack: 1,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 4,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 1,
                    attack: 1,
                    range: 3,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 6,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 1,
                    attack: 1,
                    range: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 8,
                    move: 1,
                    attack: 2,
                    range: 4,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 1,
                    attack: 2,
                    range: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 8,
                    move: 1,
                    attack: 3,
                    range: 4,
                    extra: ["Attackers gain disadvantage", action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 1,
                    attack: 2,
                    range: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 11,
                    move: 1,
                    attack: 3,
                    range: 4,
                    extra: ["Attackers gain disadvantage", action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 1,
                    attack: 2,
                    range: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 12,
                    move: 1,
                    attack: 3,
                    range: 5,
                    extra: ["Attackers gain disadvantage", action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 1,
                    attack: 3,
                    range: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 14,
                    move: 1,
                    attack: 4,
                    range: 5,
                    extra: ["Attackers gain disadvantage", action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 1,
                    attack: 3,
                    range: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 17,
                    move: 1,
                    attack: 4,
                    range: 5,
                    extra: ["Attackers gain disadvantage", action(POISON)],
                },
            },
        ],
        cards: IMP_CARDS,
    },
    "Cave Bear": {
        tokenCount: 4,
        stats: [
            {
                normal: {
                    maxHP: 7,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 11,
                    move: 3,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 4,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 17,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 20,
                    move: 4,
                    attack: 5,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 21,
                    move: 5,
                    attack: 5,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 17,
                    move: 5,
                    attack: 4,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 24,
                    move: 5,
                    attack: 6,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 19,
                    move: 5,
                    attack: 5,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 28,
                    move: 5,
                    attack: 7,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 22,
                    move: 5,
                    attack: 5,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 33,
                    move: 5,
                    attack: 7,
                    extra: [action(WOUND)],
                },
            },
        ],
        cards: [
            {
                initiative: 3,
                actions: [action(SHIELD, "1"), action(RETALIATE, "2"), action(HEAL, "2", ["self"])],
            },
            {
                initiative: 13,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 14,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", [action(IMMOBILIZE)])],
            },
            {
                initiative: 34,
                actions: [action(ATTACK, "+1", [action(WOUND)])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 41,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 60,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
            },
            {
                initiative: 61,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(TARGET, "2")])],
            },
            {
                initiative: 80,
                actions: [action(ATTACK, "-1"), action(MOVE, "-2"), action(ATTACK, "-1", [action(WOUND)])],
                endAction: END_ACTIONS.SHUFFLE,
            },
        ],
    },
    "City Archer": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 4,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 6,
                    move: 1,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 1,
                    attack: 2,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 6,
                    move: 1,
                    attack: 3,
                    range: 5,
                    extra: [action(PIERCE, "1"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 1,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 7,
                    move: 1,
                    attack: 4,
                    range: 5,
                    extra: [action(PIERCE, "2"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 2,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 8,
                    move: 2,
                    attack: 4,
                    range: 5,
                    extra: [action(PIERCE, "2"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 2,
                    attack: 3,
                    range: 5,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 10,
                    move: 2,
                    attack: 4,
                    range: 6,
                    extra: [action(PIERCE, "2"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 2,
                    attack: 4,
                    range: 5,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 2,
                    attack: 5,
                    range: 6,
                    extra: [action(PIERCE, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 4,
                    range: 5,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 12,
                    move: 3,
                    attack: 6,
                    range: 6,
                    extra: [action(PIERCE, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 4,
                    range: 6,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 13,
                    move: 3,
                    attack: 6,
                    range: 7,
                    extra: [action(PIERCE, "3"), action(SHIELD, "3")],
                },
            },
        ],
        cards: ARCHER_CARDS,
    },
    "City Guard": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 6,
                    move: 2,
                    attack: 3,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 6,
                    move: 2,
                    attack: 3,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 2,
                    attack: 2,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 2,
                    attack: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 4,
                    extra: [action(RETALIATE, "1"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 10,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "2"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 12,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "2"), action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 4,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 13,
                    move: 3,
                    attack: 5,
                    extra: [action(RETALIATE, "3"), action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 3,
                    attack: 4,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 6,
                    extra: [action(RETALIATE, "3"), action(SHIELD, "3")],
                },
            },
        ],
        cards: GUARD_CARDS,
    },
    "Cultist": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 4,
                    move: 2,
                    attack: 1,
                    extra: [],
                },
                elite: {
                    maxHP: 7,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 1,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 2,
                    attack: 1,
                    extra: [],
                },
                elite: {
                    maxHP: 12,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 1,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 3,
                    attack: 2,
                    extra: [action(CURSE)],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 15,
                    move: 3,
                    attack: 3,
                    extra: [action(CURSE)],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 2,
                    extra: [action(CURSE)],
                },
                elite: {
                    maxHP: 18,
                    move: 3,
                    attack: 3,
                    extra: [action(CURSE)],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 3,
                    attack: 2,
                    extra: [action(CURSE)],
                },
                elite: {
                    maxHP: 22,
                    move: 3,
                    attack: 3,
                    extra: [action(CURSE)],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 3,
                    attack: 3,
                    extra: [action(CURSE)],
                },
                elite: {
                    maxHP: 25,
                    move: 3,
                    attack: 4,
                    extra: [action(CURSE)],
                },
            },
        ],
        cards: [
            {
                initiative: 39,
                actions: [action(MOVE, "-1"), action(ATTACK, "+0"), action(HEAL, "1", ["self"])],
            },
            {
                initiative: 10,
                //TODO
                actions: [action(MOVE, "-1"), action(ATTACK, "+0"), { action: "on death: attack +2", image: aoeCircleWithMiddleBlack }],
            },
            {
                initiative: 10,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1"), { action: "on death: attack +2", image: aoeCircleWithMiddleBlack }],
            },
            {
                initiative: 31,
                actions: [action(MOVE, "-1"), action(HEAL, "3", [action(RANGE, "3")])],
            },
            {
                initiative: 63,
                actions: ["Summon normal Living Bones", "Cultist suffers 2 damage."],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 63,
                actions: ["Summon normal Living Bones", "Cultist suffers 2 damage."],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 27,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 27,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
        ],
    },
    "Deep Terror": {
        tokenCount: 10,
        stats: [
            {
                normal: {
                    maxHP: 3,
                    move: 0,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 5,
                    move: 0,
                    attack: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 0,
                    attack: 2,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 6,
                    move: 0,
                    attack: 3,
                    extra: [action(RETALIATE, "1")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 0,
                    attack: 3,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 7,
                    move: 0,
                    attack: 4,
                    extra: [action(RETALIATE, "1")],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 0,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 8,
                    move: 0,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 0,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 9,
                    move: 0,
                    attack: 5,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 0,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
                elite: {
                    maxHP: 11,
                    move: 0,
                    attack: 5,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 0,
                    attack: 5,
                    extra: [action(RETALIATE, "3")],
                },
                elite: {
                    maxHP: 13,
                    move: 0,
                    attack: 6,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 0,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
                elite: {
                    maxHP: 15,
                    move: 0,
                    attack: 6,
                    extra: [action(RETALIATE, "4")],
                },
            },
        ],
        cards: [
            {
                initiative: 65,
                actions: [action(ATTACK, "+0", [action(RANGE, "3"), action(TARGET, "3"), action(CURSE)])],
            },
            {
                initiative: 60,
                actions: [action(ATTACK, "+0", [action(PIERCE, "3")], aoeLine6WithBlack)],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 60,
                actions: [action(ATTACK, "+0", [action(PIERCE, "3")], aoeLine6WithBlack)],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 84,
                actions: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "4"), action(WOUND)])],
            },
            {
                initiative: 75,
                actions: [action(ATTACK, "+0", [action(POISON)]), action(ATTACK, "-1", [action(RANGE, "5"), action(IMMOBILIZE)])],
            },
            {
                initiative: 75,
                actions: [action(ATTACK, "-2", ["Target all adjacent enemies", action(DISARM)]), action(ATTACK, "+0", [action(RANGE, "3"), action(TARGET, "2")])],
            },
            {
                initiative: 96,
                actions: [action(ATTACK, "-2", [action(RANGE, "6"), "Summon normal Deep Terror in a hex adjacent to the target"])],
            },
            {
                initiative: 54,
                actions: ["wound and poison, Target all adjacent enemies", action(ATTACK, "+0", [action(RANGE, "4")])],
            },
        ],
    },
    "Earth Demon": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 7,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 2,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 2,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 18,
                    move: 2,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 2,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 20,
                    move: 2,
                    attack: 4,
                    extra: [action(IMMOBILIZE)],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 2,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 21,
                    move: 3,
                    attack: 5,
                    extra: [action(IMMOBILIZE)],
                },
            },
            {
                normal: {
                    maxHP: 17,
                    move: 2,
                    attack: 4,
                    extra: [action(IMMOBILIZE)],
                },
                elite: {
                    maxHP: 25,
                    move: 3,
                    attack: 5,
                    extra: [action(IMMOBILIZE)],
                },
            },
            {
                normal: {
                    maxHP: 20,
                    move: 2,
                    attack: 4,
                    extra: [action(IMMOBILIZE)],
                },
                elite: {
                    maxHP: 27,
                    move: 3,
                    attack: 6,
                    extra: [action(IMMOBILIZE)],
                },
            },
            {
                normal: {
                    maxHP: 22,
                    move: 3,
                    attack: 4,
                    extra: [action(IMMOBILIZE)],
                },
                elite: {
                    maxHP: 32,
                    move: 3,
                    attack: 6,
                    extra: [action(IMMOBILIZE)],
                },
            },
        ],
        cards: [
            {
                initiative: 93,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", ["Target all adjacent enemies"]), { type: "element", use: elements.EARTH, action: action(PUSH, "1") }],
            },
            {
                initiative: 79,
                actions: [action(MOVE, "+1"), action(ATTACK, "+0"), { type: "element", use: elements.AIR, action: "-2 attack" }],
            },
            {
                initiative: 40,
                actions: [action(HEAL, "3", ["self"]), { type: "element", use: elements.EARTH, action: action(IMMOBILIZE, null, ["Target all enemies within range 3"]) }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 42,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 62,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0"), { type: "element", create: elements.EARTH }],
            },
            {
                initiative: 71,
                actions: [action(ATTACK, "+0", [action(RANGE, "4")]), { type: "element", use: elements.EARTH, action: action(TARGET, "2") }],
            },
            {
                initiative: 83,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1"), { type: "element", create: elements.EARTH }],
            },
            {
                initiative: 87,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [], aoe4WithBlack), { type: "element", use: elements.ANY, create: elements.EARTH }],
            },
        ],
    },
    "Flame Demon": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 2,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: ["flying", action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: ["flying", action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 2,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: ["flying", action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    range: 4,
                    extra: ["flying", action(RETALIATE, "2", [action(RANGE, "2")]), action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: ["flying", action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 4,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: ["flying", action(RETALIATE, "3", [action(RANGE, "2")]), action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: ["flying", action(RETALIATE, "2", [action(RANGE, "2")]), action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 5,
                    move: 3,
                    attack: 3,
                    range: 5,
                    extra: ["flying", action(RETALIATE, "3", [action(RANGE, "3")]), action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: ["flying", action(RETALIATE, "3", [action(RANGE, "2")]), action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 5,
                    move: 4,
                    attack: 4,
                    range: 5,
                    extra: ["flying", action(RETALIATE, "4", [action(RANGE, "3")]), action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: ["flying", action(RETALIATE, "3", [action(RANGE, "2")]), action(SHIELD, "4")],
                },
                elite: {
                    maxHP: 6,
                    move: 4,
                    attack: 4,
                    range: 5,
                    extra: ["flying", action(RETALIATE, "4", [action(RANGE, "3")]), action(SHIELD, "5")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: ["flying", action(RETALIATE, "4", [action(RANGE, "2")]), action(SHIELD, "4")],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 5,
                    range: 5,
                    extra: ["flying", action(RETALIATE, "5", [action(RANGE, "3")]), action(SHIELD, "5")],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 4,
                    attack: 4,
                    range: 5,
                    extra: ["flying", action(RETALIATE, "4", [action(RANGE, "3")]), action(SHIELD, "4")],
                },
                elite: {
                    maxHP: 8,
                    move: 4,
                    attack: 5,
                    range: 6,
                    extra: ["flying", action(RETALIATE, "5", [action(RANGE, "4")]), action(SHIELD, "5")],
                },
            },
        ],
        cards: [
            {
                initiative: 8,
                actions: [action(MOVE, "-1"), "Create a 4 damage trap in an adjacent empty hex closest to an enemy.", { type: "element", use: elements.ANY, create: elements.FIRE }],
            },
            {
                initiative: 67,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1", [action(RANGE, "-1")]), { type: "element", create: elements.FIRE }],
            },
            {
                initiative: 3,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1"), { type: "element", create: elements.FIRE }],
            },
            {
                initiative: 77,
                actions: [action(ATTACK, "+0", ["Target all adjacent enemies"]), { type: "element", use: elements.ICE, action: "Flame Demon suffers 1 damage" }],
            },
            {
                initiative: 24,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0"), { type: "element", create: elements.FIRE }],
            },
            {
                initiative: 30,
                actions: [{ type: "element", use: elements.FIRE, action: "All adjacent enemies suffer 2 damage." }, action(MOVE, "+0"), action(ATTACK, "-2", [action(WOUND), action(TARGET, "2")])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 46,
                actions: [action(ATTACK, "+0"), { type: "element", use: elements.FIRE, image: aoeCircle }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 49,
                actions: [action(ATTACK, "+0", [], aoeLine3WithBlack), { type: "element", use: elements.FIRE, action: action(ATTACK, "+1", [action(WOUND)]) }],
            },
        ],
    },
    "Frost Demon": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 2,
                    attack: 3,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 10,
                    move: 3,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 3,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 12,
                    move: 4,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 14,
                    move: 4,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 18,
                    move: 4,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
                elite: {
                    maxHP: 20,
                    move: 4,
                    attack: 5,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 5,
                    extra: [action(RETALIATE, "3")],
                },
                elite: {
                    maxHP: 22,
                    move: 4,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 3,
                    attack: 5,
                    extra: [action(RETALIATE, "3")],
                },
                elite: {
                    maxHP: 25,
                    move: 4,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
            },
        ],
        cards: [
            {
                initiative: 18,
                actions: [action(IMMOBILIZE, null, ["Target all enemies within range 2"]), { type: "element", use: elements.ICE, action: action(HEAL, "3", ["self"]) }],
            },
            {
                initiative: 18,
                actions: [action(SHIELD, "2"), action(MOVE, "+1"), { type: "element", use: elements.FIRE, action: "Frost Demon suffers 1 damage" }],
            },
            {
                initiative: 38,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 58,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 58,
                actions: [action(MOVE, "-1"), action(ATTACK, "+0", [action(RANGE, "2")]), { type: "element", use: elements.ICE, action: "+2 attack, +1 range" }],
            },
            {
                initiative: 58,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", [action(PIERCE, "3")]), { type: "element", use: elements.ANY, create: elements.ICE }],
            },
            {
                initiative: 78,
                actions: [action(MOVE, "-1"), action(ATTACK, "+0", [], aoeTriangle2WithBlack), { type: "element", create: elements.ICE }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 78,
                actions: [action(MOVE, "-1"), action(ATTACK, "+0", [], aoeTriangle2WithBlack), { type: "element", create: elements.ICE }],
                endAction: END_ACTIONS.SHUFFLE,
            },
        ],
    },
    "Forest Imp": {
        tokenCount: 10,
        stats: [
            {
                normal: {
                    maxHP: 1,
                    move: 3,
                    attack: 1,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 4,
                    move: 3,
                    attack: 1,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 2,
                    move: 3,
                    attack: 1,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 5,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 2,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 6,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(CURSE), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 4,
                    attack: 2,
                    range: 4,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 2,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 4,
                    attack: 2,
                    range: 4,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 2,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 4,
                    attack: 2,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 8,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 9,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 11,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(CURSE), action(SHIELD, "2")],
                },
            },
        ],
        cards: IMP_CARDS,
    },
    "Giant Viper": {
        tokenCount: 10,
        stats: [
            {
                normal: {
                    maxHP: 2,
                    move: 2,
                    attack: 1,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 3,
                    move: 2,
                    attack: 2,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 2,
                    attack: 1,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 3,
                    attack: 1,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 7,
                    move: 3,
                    attack: 2,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 3,
                    attack: 2,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 8,
                    move: 3,
                    attack: 3,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 2,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 11,
                    move: 3,
                    attack: 3,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 3,
                    attack: 3,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 13,
                    move: 4,
                    attack: 3,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 4,
                    attack: 3,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 14,
                    move: 4,
                    attack: 4,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 4,
                    attack: 3,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 17,
                    move: 4,
                    attack: 4,
                    extra: [action(POISON)],
                },
            },
        ],
        cards: [
            {
                initiative: 23,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", [action(IMMOBILIZE)]), action(ATTACK, "-1")],
            },
            {
                initiative: 43,
                actions: [action(MOVE, "-1", ["jump"]), action(ATTACK, "+0", [action(TARGET, "2")])],
            },
            {
                initiative: 43,
                actions: [action(MOVE, "+1", ["jump"]), action(ATTACK, "-1", ["Target all adjacent enemies"])],
            },
            {
                initiative: 32,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0"), "Add +2 attack if the target is adjacent to any of the Giant Viper's allies."],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 32,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0"), "Add +2 attack if the target is adjacent to any of the Giant Viper's allies."],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 11,
                actions: [action(SHIELD, "1"), action(ATTACK, "-1")],
            },
            {
                initiative: 58,
                actions: [action(MOVE, "-1", ["jump"]), action(ATTACK, "+1")],
            },
            {
                initiative: 58,
                actions: [action(MOVE, "+1", ["jump"]), action(ATTACK, "-1"), "All attacks targeting Giant Viper this round gain Disadvantage."],
            },
        ],
    },
    "Harrower Infester": {
        tokenCount: 4,
        stats: [
            {
                normal: {
                    maxHP: 6,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 12,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 2,
                    attack: 2,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 12,
                    move: 3,
                    attack: 2,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 2,
                    attack: 2,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 2,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 17,
                    move: 3,
                    attack: 3,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 19,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
                elite: {
                    maxHP: 21,
                    move: 3,
                    attack: 5,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
                elite: {
                    maxHP: 22,
                    move: 4,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
            },
            {
                normal: {
                    maxHP: 17,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "4")],
                },
                elite: {
                    maxHP: 26,
                    move: 4,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
            },
        ],
        cards: [
            {
                initiative: 2,
                actions: [action(SHIELD, "2"), action(RETALIATE, "2", [action(RANGE, "3")])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 7,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(POISON)]), { type: "element", create: elements.DARK }],
            },
            {
                initiative: 7,
                actions: [action(ATTACK, "-1", [action(RANGE, "3"), action(MUDDLE)]), action(HEAL, "3", ["self"])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 16,
                actions: [action(ATTACK, "+2", [action(IMMOBILIZE)]), action(RETALIATE, "2")],
            },
            {
                initiative: 16,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1"), action(HEAL, "5", ["self"])],
            },
            {
                initiative: 30,
                actions: [action(MOVE, "-1"), action(ATTACK, "+0", [], aoeLine4WithBlack), { type: "element", use: elements.DARK, action: 'Perform "heal 2 self" for each target damaged' }],
            },
            {
                initiative: 38,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1", [action(TARGET, "2")])],
            },
            {
                initiative: 38,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(TARGET, "2")]), { type: "element", use: elements.DARK, action: "+2 attack, disarm" }],
            },
        ],
    },
    "Hound": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 4,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 6,
                    move: 5,
                    attack: 2,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 4,
                    attack: 2,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 6,
                    move: 5,
                    attack: 2,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 4,
                    attack: 2,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 7,
                    move: 5,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 4,
                    attack: 2,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 8,
                    move: 5,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 4,
                    attack: 3,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 5,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 4,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 12,
                    move: 5,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 5,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 15,
                    move: 6,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 5,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 15,
                    move: 6,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
            },
        ],
        cards: [
            {
                initiative: 72,
                actions: [action(ATTACK, "-1", [action(PIERCE, "2")]), action(MOVE, "-2"), action(ATTACK, "-1", [action(PIERCE, "2")])],
            },
            {
                initiative: 26,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 83,
                actions: [action(MOVE, "-2"), action(ATTACK, "+1")],
            },
            {
                initiative: 26,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 19,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0"), "Add +2 attack if the target is adjacent to any of the Hound's allies."],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 19,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0"), "Add +2 attack if the target is adjacent to any of the Hound's allies."],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 7,
                actions: [action(MOVE, "+0"), action(MUDDLE, null, ["Target all adjacent enemies"])],
            },
            {
                initiative: 8,
                actions: [action(MOVE, "-1"), action(ATTACK, "+0", [action(IMMOBILIZE)])],
            },
        ],
    },
    "Inox Archer": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    range: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 7,
                    move: 2,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 2,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 8,
                    move: 2,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 2,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 11,
                    move: 2,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 2,
                    attack: 4,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 17,
                    move: 3,
                    attack: 4,
                    range: 5,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 19,
                    move: 3,
                    attack: 5,
                    range: 5,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 23,
                    move: 3,
                    attack: 5,
                    range: 5,
                    extra: [action(WOUND)],
                },
            },
        ],
        cards: ARCHER_CARDS,
    },
    "Inox Guard": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 1,
                    attack: 3,
                    extra: [action(RETALIATE, "1")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 2,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 2,
                    attack: 3,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 12,
                    move: 2,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 15,
                    move: 2,
                    attack: 4,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 3,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 17,
                    move: 2,
                    attack: 5,
                    extra: [action(RETALIATE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 19,
                    move: 2,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "1")],
                },
                elite: {
                    maxHP: 21,
                    move: 3,
                    attack: 5,
                    extra: [action(RETALIATE, "4")],
                },
            },
            {
                normal: {
                    maxHP: 19,
                    move: 3,
                    attack: 4,
                    extra: [action(RETALIATE, "2")],
                },
                elite: {
                    maxHP: 23,
                    move: 3,
                    attack: 6,
                    extra: [action(RETALIATE, "4")],
                },
            },
        ],
        cards: GUARD_CARDS,
    },
    "Inox Shaman": {
        tokenCount: 4,
        stats: [
            {
                normal: {
                    maxHP: 4,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 6,
                    move: 2,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 2,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 11,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 2,
                    attack: 2,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 2,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 16,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 2,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 20,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 24,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 27,
                    move: 4,
                    attack: 5,
                    range: 4,
                    extra: [],
                },
            },
        ],
        cards: SHAMAN_CARDS,
    },
    "Living Bones": {
        tokenCount: 10,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 1,
                    extra: [action(TARGET, "2")],
                },
                elite: {
                    maxHP: 6,
                    move: 4,
                    attack: 2,
                    extra: [action(TARGET, "2")],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 3,
                    attack: 1,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 6,
                    move: 4,
                    attack: 2,
                    extra: [action(TARGET, "3"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 3,
                    attack: 2,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 3,
                    extra: [action(TARGET, "3"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 3,
                    attack: 2,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 10,
                    move: 4,
                    attack: 3,
                    extra: [action(TARGET, "3"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 3,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 4,
                    attack: 4,
                    extra: [action(TARGET, "3"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 4,
                    attack: 4,
                    extra: [action(TARGET, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 4,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 6,
                    attack: 4,
                    extra: [action(TARGET, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 4,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 14,
                    move: 6,
                    attack: 4,
                    extra: [action(TARGET, "3"), action(SHIELD, "2")],
                },
            },
        ],
        cards: [
            {
                initiative: 81,
                actions: [action(ATTACK, "+2")],
            },
            {
                initiative: 45,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 64,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
            },
            {
                initiative: 12,
                actions: [action(SHIELD, "1"), action(HEAL, "2", ["self"])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 45,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 74,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", ["Target one enemy with all attacks"])],
            },
            {
                initiative: 25,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 20,
                actions: [action(MOVE, "-2"), action(ATTACK, "+0"), action(HEAL, "2", ["self"])],
                endAction: END_ACTIONS.SHUFFLE,
            },
        ],
    },
    "Living Corpse": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 1,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 1,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 1,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 2,
                    attack: 5,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 2,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 15,
                    move: 2,
                    attack: 5,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 2,
                    attack: 4,
                    extra: [],
                },
                elite: {
                    maxHP: 17,
                    move: 2,
                    attack: 6,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 2,
                    attack: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 21,
                    move: 2,
                    attack: 6,
                    extra: [action(POISON)],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 2,
                    attack: 5,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 25,
                    move: 2,
                    attack: 6,
                    extra: [action(POISON)],
                },
            },
        ],
        cards: [
            {
                initiative: 66,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 66,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 47,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 21,
                actions: [action(MOVE, "+1"), "muddle and immobilize, Target one adjacent enemy"],
            },
            {
                initiative: 66,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 71,
                actions: [action(MOVE, "+0"), action(ATTACK, "+1"), action(POISON, null, ["Target all adjacent enemies"])],
            },
            {
                initiative: 32,
                actions: [action(ATTACK, "+2", [action(PUSH, "1")]), "Living Corpse suffers 1 damage"],
            },
            {
                initiative: 91,
                actions: [action(MOVE, "+1"), "Living Corpse suffers 1 damage"],
            },
        ],
    },
    "Living Spirit": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 2,
                    move: 2,
                    attack: 2,
                    range: 2,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 3,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 2,
                    move: 2,
                    attack: 2,
                    range: 2,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 3,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 2,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 3,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 4,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 4,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 6,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 5,
                    range: 5,
                    extra: [action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 9,
                    move: 4,
                    attack: 5,
                    range: 5,
                    extra: [action(SHIELD, "4")],
                },
            },
        ],
        cards: [
            {
                initiative: 22,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", [action(MUDDLE)])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 33,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", ["Target all enemies in range"])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 48,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 48,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 55,
                actions: [action(MOVE, "+0"), action(CURSE, null, ["Target all enemies in range"]), { type: "element", create: elements.ICE }],
            },
            {
                initiative: 61,
                actions: [action(ATTACK, "+0", [action(RANGE, "-1"), action(TARGET, "2")])],
            },
            {
                initiative: 67,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1"), { type: "element", use: elements.ICE, action: action(STUN) }],
            },
            {
                initiative: 75,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1", [action(RANGE, "-1")]), action(HEAL, "1", ["self"])],
            },
        ],
    },
    "Lurker": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    extra: [action(TARGET, "2")],
                },
                elite: {
                    maxHP: 7,
                    move: 2,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 2,
                    attack: 2,
                    extra: [action(TARGET, "2"), action(PIERCE, "1")],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(PIERCE, "1"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 2,
                    extra: [action(TARGET, "2"), action(PIERCE, "1")],
                },
                elite: {
                    maxHP: 12,
                    move: 3,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(PIERCE, "2"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(PIERCE, "2")],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 4,
                    extra: [action(TARGET, "2"), action(PIERCE, "2"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 3,
                    attack: 3,
                    extra: [action(TARGET, "2"), action(PIERCE, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 14,
                    move: 3,
                    attack: 4,
                    extra: [action(TARGET, "2"), action(PIERCE, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 4,
                    extra: [action(TARGET, "2"), action(PIERCE, "2"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 15,
                    move: 3,
                    attack: 5,
                    extra: [action(TARGET, "2"), action(PIERCE, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 4,
                    attack: 4,
                    extra: [action(TARGET, "2"), action(PIERCE, "3"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 16,
                    move: 4,
                    attack: 5,
                    extra: [action(TARGET, "2"), action(PIERCE, "4"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 4,
                    attack: 4,
                    extra: [action(TARGET, "2"), action(PIERCE, "3"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 18,
                    move: 4,
                    attack: 5,
                    extra: [action(TARGET, "2"), action(PIERCE, "4"), action(SHIELD, "2")],
                },
            },
        ],
        cards: [
            {
                initiative: 11,
                actions: [action(SHIELD, "1"), { type: "element", use: elements.ICE, action: action(SHIELD, "2 instead") }, action(WOUND, null, ["Target all adjacent enemies"])],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 23,
                actions: [action(SHIELD, "1"), action(MOVE, "+0"), action(ATTACK, "-1"), { type: "element", create: elements.ICE }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 28,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 38,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 38,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", ["Target one enemy with all attacks"])],
            },
            {
                initiative: 41,
                actions: [{ type: "element", use: elements.ICE, action: action(STRENGTHEN, null, ["self"]) }, action(MOVE, "+0"), action(ATTACK, "-1", [action(WOUND)])],
            },
            {
                initiative: 61,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
            },
            {
                initiative: 64,
                actions: [action(ATTACK, "+1", ["Target all adjacent enemies"])],
            },
        ],
    },
    "Night Demon": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 3,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 5,
                    move: 4,
                    attack: 4,
                    extra: ["Attackers gain disadvantage"],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 3,
                    attack: 3,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 8,
                    move: 4,
                    attack: 4,
                    extra: ["Attackers gain disadvantage"],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 4,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 11,
                    move: 4,
                    attack: 4,
                    extra: ["Attackers gain disadvantage"],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 4,
                    attack: 4,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 13,
                    move: 4,
                    attack: 5,
                    extra: ["Attackers gain disadvantage"],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 4,
                    attack: 5,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 15,
                    move: 5,
                    attack: 5,
                    extra: ["Attackers gain disadvantage"],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 4,
                    attack: 5,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 17,
                    move: 5,
                    attack: 6,
                    extra: ["Attackers gain disadvantage"],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 4,
                    attack: 5,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 21,
                    move: 5,
                    attack: 6,
                    extra: ["Attackers gain disadvantage"],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 4,
                    attack: 6,
                    extra: ["Attackers gain disadvantage"],
                },
                elite: {
                    maxHP: 21,
                    move: 5,
                    attack: 8,
                    extra: ["Attackers gain disadvantage"],
                },
            },
        ],
        cards: [
            {
                initiative: 35,
                actions: [action(ATTACK, "-1"), action(ATTACK, "-1", [action(PIERCE, "2")]), { type: "element", use: elements.LIGHT, action: action(CURSE, null, ["self"]) }],
            },
            {
                initiative: 15,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1"), "All adjacent enemies and allies suffer 1 damage", { type: "element", use: elements.ANY, create: elements.DARK }],
            },
            {
                initiative: 41,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1"), { type: "element", create: elements.DARK }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 46,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1"), { type: "element", use: elements.DARK, action: "+2 attack" }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 7,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1"), { type: "element", use: elements.DARK, action: action(INVISIBLE, null, ["self"]) }],
            },
            {
                initiative: 26,
                actions: [action(ATTACK, "-2", [action(RANGE, "3"), action(TARGET, "3")]), { type: "element", use: elements.DARK, action: action(MUDDLE) }],
            },
            {
                initiative: 4,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1"), { type: "element", create: elements.DARK }],
            },
            {
                initiative: 22,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0"), { type: "element", create: elements.DARK }],
            },
        ],
    },
    "Ooze": {
        tokenCount: 10,
        stats: [
            {
                normal: {
                    maxHP: 4,
                    move: 1,
                    attack: 2,
                    range: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 8,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 1,
                    attack: 2,
                    range: 2,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 9,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 1,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 1,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 1,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 2,
                    attack: 3,
                    range: 4,
                    extra: [action(POISON), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 13,
                    move: 2,
                    attack: 4,
                    range: 4,
                    extra: [action(POISON), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 2,
                    attack: 3,
                    range: 3,
                    extra: [action(POISON), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 15,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(POISON), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 2,
                    attack: 4,
                    range: 3,
                    extra: [action(POISON), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 16,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(POISON), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 2,
                    attack: 4,
                    range: 3,
                    extra: [action(POISON), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 18,
                    move: 3,
                    attack: 5,
                    range: 4,
                    extra: [action(POISON), action(SHIELD, "2")],
                },
            },
        ],
        cards: [
            {
                initiative: 36,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 57,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 59,
                actions: [action(ATTACK, "+0", [action(TARGET, "2"), action(POISON)])],
            },
            {
                initiative: 66,
                actions: [action(MOVE, "-1"), "loot 1", action(HEAL, "2", ["self"])],
            },
            {
                initiative: 66,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1", [action(RANGE, "+1")])],
            },
            {
                initiative: 85,
                actions: ["push 1 and poison, Target all adjacent enemies", action(ATTACK, "+1", [action(RANGE, "-1")])],
            },
            {
                initiative: 94,
                actions: ["Ooze suffers 2 damage", "Summon normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)"],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 94,
                actions: ["Ooze suffers 2 damage", "Summon normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)"],
                endAction: END_ACTIONS.SHUFFLE,
            },
        ],
    },
    "Rending Drake": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 3,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 5,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 4,
                    attack: 3,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 9,
                    move: 5,
                    attack: 5,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 4,
                    attack: 4,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 10,
                    move: 5,
                    attack: 6,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 4,
                    attack: 4,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 11,
                    move: 6,
                    attack: 6,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 4,
                    attack: 5,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 14,
                    move: 6,
                    attack: 6,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 5,
                    attack: 5,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 15,
                    move: 6,
                    attack: 7,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 5,
                    attack: 5,
                    extra: [action(WOUND)],
                },
                elite: {
                    maxHP: 18,
                    move: 6,
                    attack: 7,
                    extra: [action(WOUND)],
                },
            },
        ],
        cards: [
            {
                initiative: 6,
                actions: [action(SHIELD, "2"), action(HEAL, "2", ["self"]), action(STRENGTHEN, null, ["self"])],
            },
            {
                initiative: 12,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 13,
                actions: [action(ATTACK, "-1"), action(MOVE, "-1"), action(ATTACK, "-1")],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 25,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 39,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
            },
            {
                initiative: 54,
                actions: [action(MOVE, "-2"), action(ATTACK, "-1", [action(RANGE, "3"), action(TARGET, "2"), action(POISON)])],
            },
            {
                initiative: 59,
                actions: [action(MOVE, "-2"), action(ATTACK, "+1", [action(TARGET, "2")])],
            },
            {
                initiative: 72,
                actions: [action(ATTACK, "-1"), action(ATTACK, "-1"), action(ATTACK, "-2")],
                endAction: END_ACTIONS.SHUFFLE,
            },
        ],
    },
    "Savvas Lavaflow": {
        tokenCount: 4,
        stats: [
            {
                normal: {
                    maxHP: 7,
                    move: 2,
                    attack: 2,
                    range: 3,
                    extra: [action(PIERCE, "3")],
                },
                elite: {
                    maxHP: 12,
                    move: 2,
                    attack: 3,
                    range: 4,
                    extra: [action(PIERCE, "3")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 2,
                    attack: 2,
                    range: 4,
                    extra: [action(PIERCE, "3")],
                },
                elite: {
                    maxHP: 12,
                    move: 2,
                    attack: 3,
                    range: 5,
                    extra: [action(PIERCE, "3"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 2,
                    range: 4,
                    extra: [action(PIERCE, "3")],
                },
                elite: {
                    maxHP: 15,
                    move: 3,
                    attack: 3,
                    range: 5,
                    extra: [action(PIERCE, "3"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [action(PIERCE, "3"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 18,
                    move: 3,
                    attack: 4,
                    range: 6,
                    extra: [action(PIERCE, "3"), action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 3,
                    attack: 3,
                    range: 5,
                    extra: [action(PIERCE, "3"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 19,
                    move: 4,
                    attack: 4,
                    range: 6,
                    extra: [action(PIERCE, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 3,
                    attack: 4,
                    range: 5,
                    extra: [action(PIERCE, "3"), action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 21,
                    move: 4,
                    attack: 5,
                    range: 6,
                    extra: [action(PIERCE, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 3,
                    attack: 4,
                    range: 5,
                    extra: [action(PIERCE, "3"), action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 23,
                    move: 4,
                    attack: 6,
                    range: 6,
                    extra: [action(PIERCE, "3"), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 17,
                    move: 4,
                    attack: 4,
                    range: 6,
                    extra: [action(PIERCE, "3"), action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 24,
                    move: 4,
                    attack: 6,
                    range: 6,
                    extra: [action(PIERCE, "4"), action(SHIELD, "3")],
                },
            },
        ],
        cards: [
            {
                initiative: 22,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1", ["Target all adjacent enemies"]), { type: "element", use: elements.FIRE, action: action(RETALIATE, "3") }],
            },
            {
                initiative: 31,
                actions: [action(HEAL, "4", [action(RANGE, "3")]), { type: "element", use: elements.EARTH, action: action(TARGET, "3") }],
            },
            {
                initiative: 41,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [], aoeLine4WithBlack), { type: "element", use: elements.EARTH, action: "+2 attack, immobilize" }],
            },
            {
                initiative: 51,
                actions: ["All enemies suffer 2 damage", { type: "element", use: elements.FIRE, action: "Wound all enemies" }, { type: "element", use: elements.EARTH, action: "disarm all enemies" }],
            },
            {
                initiative: 68,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1", [action(RANGE, "3"), "All allies and enemies adjacent to the target suffer 2 damage."]), { type: "element", create: elements.EARTH }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 68,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", [action(RANGE, "3"), action(TARGET, "2")]), { type: "element", create: elements.FIRE }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 97,
                actions: ["Summon normal Flame Demon", { type: "element", create: elements.FIRE }],
            },
            {
                initiative: 97,
                actions: ["Summon normal Earth Demon", { type: "element", create: elements.EARTH }],
            },
        ],
    },
    "Savvas Icestorm": {
        tokenCount: 4,
        stats: [
            {
                normal: {
                    maxHP: 8,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 13,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 3,
                    attack: 2,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 15,
                    move: 3,
                    attack: 3,
                    extra: [action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 3,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 18,
                    move: 3,
                    attack: 3,
                    extra: [action(POISON), action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 14,
                    move: 3,
                    attack: 3,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 21,
                    move: 3,
                    attack: 4,
                    extra: [action(POISON), action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 3,
                    attack: 4,
                    extra: [action(POISON)],
                },
                elite: {
                    maxHP: 24,
                    move: 4,
                    attack: 4,
                    extra: [action(POISON), action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 18,
                    move: 3,
                    attack: 4,
                    extra: [action(POISON), action(WOUND)],
                },
                elite: {
                    maxHP: 27,
                    move: 4,
                    attack: 5,
                    extra: [action(POISON), action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 20,
                    move: 4,
                    attack: 4,
                    extra: [action(POISON), action(WOUND)],
                },
                elite: {
                    maxHP: 30,
                    move: 4,
                    attack: 6,
                    extra: [action(POISON), action(WOUND)],
                },
            },
            {
                normal: {
                    maxHP: 24,
                    move: 4,
                    attack: 4,
                    extra: [action(POISON), action(WOUND)],
                },
                elite: {
                    maxHP: 35,
                    move: 4,
                    attack: 6,
                    extra: [action(POISON), action(WOUND)],
                },
            },
        ],
        cards: [
            {
                initiative: 14,
                actions: [action(ATTACK, "+0"), { type: "element", use: elements.ICE, action: "+2 attack, immobiilize" }, action(RETALIATE, "2"), { type: "element", create: elements.AIR }],
            },
            {
                initiative: 14,
                actions: [action(SHIELD, "4"), action(HEAL, "2", [action(RANGE, "3")]), { type: "element", use: elements.ICE, action: "+3 heal" }, { type: "element", use: elements.AIR, action: action(ATTACK, "+0") }],
            },
            {
                initiative: 19,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(RANGE, "-1")]), action(SHIELD, "1, Affect self and all allies within range 2"), { type: "element", create: elements.ICE }],
            },
            {
                initiative: 35,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", [], aoeTriangle3WithCornerBlack), { type: "element", create: elements.ICE }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 47,
                actions: [action(DISARM, null, ["Target all adjacent enemies"]), action(MOVE, "+0"), action(ATTACK, "-1"), { type: "element", create: elements.AIR }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 70,
                actions: [action(PUSH, "2", ["Target all adjacent enemies"]), { type: "element", use: elements.AIR, action: "push 4 instead" }, action(ATTACK, "+1", [action(RANGE, "+1")])],
            },
            {
                initiative: 98,
                actions: ["Summon normal Wind Demon", { type: "element", create: elements.AIR }],
            },
            {
                initiative: 98,
                actions: ["Summon normal Frost Demon", { type: "element", create: elements.ICE }],
            },
        ],
    },
    "Spitting Drake": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 8,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 9,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE)],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 3,
                    attack: 3,
                    range: 3,
                    extra: [action(MUDDLE)],
                },
                elite: {
                    maxHP: 10,
                    move: 3,
                    attack: 5,
                    range: 4,
                    extra: [action(MUDDLE)],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE)],
                },
                elite: {
                    maxHP: 12,
                    move: 3,
                    attack: 5,
                    range: 5,
                    extra: [action(MUDDLE)],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE)],
                },
                elite: {
                    maxHP: 14,
                    move: 4,
                    attack: 5,
                    range: 5,
                    extra: [action(MUDDLE)],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE)],
                },
                elite: {
                    maxHP: 16,
                    move: 4,
                    attack: 6,
                    range: 5,
                    extra: [action(MUDDLE)],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 4,
                    attack: 5,
                    range: 4,
                    extra: [action(MUDDLE)],
                },
                elite: {
                    maxHP: 19,
                    move: 4,
                    attack: 6,
                    range: 5,
                    extra: [action(MUDDLE)],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 4,
                    attack: 5,
                    range: 4,
                    extra: [action(MUDDLE)],
                },
                elite: {
                    maxHP: 21,
                    move: 4,
                    attack: 7,
                    range: 5,
                    extra: [action(MUDDLE)],
                },
            },
        ],
        cards: [
            {
                initiative: 27,
                actions: [action(ATTACK, "+0", [action(TARGET, "2"), action(POISON)])],
            },
            {
                initiative: 6,
                actions: [action(SHIELD, "2"), action(HEAL, "2", ["self"]), action(STRENGTHEN, null, ["self"])],
            },
            {
                initiative: 32,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
            },
            {
                initiative: 52,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 87,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
            },
            {
                initiative: 89,
                actions: [action(ATTACK, "-2", [action(STUN)])],
            },
            {
                initiative: 57,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(RANGE, "-1")], aoeTriangle2)],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 89,
                actions: [action(MOVE, "-1"), action(ATTACK, "-2", [action(RANGE, "-2"), action(POISON)], aoeCircle)],
                endAction: END_ACTIONS.SHUFFLE,
            },
        ],
    },
    "Stone Golem": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 10,
                    move: 1,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 10,
                    move: 2,
                    attack: 4,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 1,
                    attack: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 11,
                    move: 2,
                    attack: 4,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 1,
                    attack: 4,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 14,
                    move: 2,
                    attack: 5,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 1,
                    attack: 4,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 15,
                    move: 2,
                    attack: 5,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 2,
                    attack: 4,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 17,
                    move: 2,
                    attack: 6,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 13,
                    move: 2,
                    attack: 5,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 19,
                    move: 3,
                    attack: 6,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 2,
                    attack: 5,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 20,
                    move: 3,
                    attack: 7,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 16,
                    move: 2,
                    attack: 5,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 21,
                    move: 3,
                    attack: 7,
                    extra: [action(SHIELD, "4")],
                },
            },
        ],
        cards: [
            {
                initiative: 51,
                actions: [action(MOVE, "+1"), action(ATTACK, "-1")],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 65,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
            },
            {
                initiative: 90,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1")],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 11,
                actions: [action(RETALIATE, "3", [action(RANGE, "3")])],
            },
            {
                initiative: 28,
                actions: [action(MOVE, "+1"), action(ATTACK, "+0"), "Stone Golem suffers 1 damage"],
            },
            {
                initiative: 72,
                actions: [action(ATTACK, "+1", [action(RANGE, "3")]), "Stone Golem suffers 2 damage"],
            },
            {
                initiative: 83,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", ["Target all adjacent enemies"])],
            },
            {
                initiative: 28,
                actions: [action(MOVE, "+1"), action(ATTACK, "-2", [action(RANGE, "3"), action(PULL, "2"), action(IMMOBILIZE)])],
            },
        ],
    },
    "Sun Demon": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 5,
                    move: 2,
                    attack: 2,
                    extra: ["advantage", action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 9,
                    move: 2,
                    attack: 3,
                    extra: ["advantage", action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 2,
                    attack: 2,
                    extra: ["advantage", action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 12,
                    move: 2,
                    attack: 3,
                    extra: ["advantage", action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 2,
                    attack: 2,
                    extra: ["advantage", action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 13,
                    move: 2,
                    attack: 4,
                    extra: ["advantage", action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 2,
                    attack: 3,
                    extra: ["advantage", action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 15,
                    move: 3,
                    attack: 4,
                    extra: ["advantage", action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 3,
                    extra: ["advantage", action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 16,
                    move: 3,
                    attack: 5,
                    extra: ["advantage", action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 3,
                    attack: 3,
                    extra: ["advantage", action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 16,
                    move: 3,
                    attack: 5,
                    extra: ["advantage", action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 12,
                    move: 3,
                    attack: 4,
                    extra: ["advantage", action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 18,
                    move: 4,
                    attack: 5,
                    extra: ["advantage", action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 15,
                    move: 3,
                    attack: 4,
                    extra: ["advantage", action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 22,
                    move: 4,
                    attack: 5,
                    extra: ["advantage", action(SHIELD, "2")],
                },
            },
        ],
        cards: [
            {
                initiative: 95,
                actions: [action(MOVE, "-1"), action(ATTACK, "+0", [action(RANGE, "4")]), { type: "element", use: elements.LIGHT, action: "Target all enemies within range" }],
            },
            {
                initiative: 88,
                actions: [action(MOVE, "-1"), action(ATTACK, "-1", ["Target all adjacent enemies"]), { type: "element", use: elements.DARK, action: action(MUDDLE, null, ["self"]) }],
            },
            {
                initiative: 17,
                actions: [action(HEAL, "3", [action(RANGE, "3")]), { type: "element", use: elements.LIGHT, action: "Target all allies within range" }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 73,
                actions: [action(MOVE, "+0"), action(ATTACK, "+1"), { type: "element", use: elements.LIGHT, action: action(HEAL, "3", ["self"]) }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 68,
                actions: [action(MOVE, "+0"), action(ATTACK, "+1"), { type: "element", create: elements.LIGHT }],
            },
            {
                initiative: 36,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", ["Target all adjacent enemies"]), { type: "element", create: elements.LIGHT }],
            },
            {
                initiative: 36,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", ["Target all adjacent enemies"]), { type: "element", create: elements.LIGHT }],
            },
            {
                initiative: 50,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", [action(RANGE, "3")]), { type: "element", use: elements.ANY, create: elements.LIGHT }],
            },
        ],
    },
    "Vermling Scout": {
        tokenCount: 10,
        stats: [
            {
                normal: {
                    maxHP: 2,
                    move: 3,
                    attack: 1,
                    extra: [],
                },
                elite: {
                    maxHP: 4,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 1,
                    extra: [],
                },
                elite: {
                    maxHP: 5,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 5,
                    move: 4,
                    attack: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 3,
                    attack: 2,
                    extra: [],
                },
                elite: {
                    maxHP: 7,
                    move: 4,
                    attack: 3,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 6,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 8,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 8,
                    move: 3,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 11,
                    move: 4,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 4,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 12,
                    move: 5,
                    attack: 4,
                    extra: [],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 4,
                    attack: 3,
                    extra: [],
                },
                elite: {
                    maxHP: 15,
                    move: 5,
                    attack: 4,
                    extra: [],
                },
            },
        ],
        cards: SCOUT_CARDS,
    },
    "Vermling Shaman": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 2,
                    move: 2,
                    attack: 1,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 2,
                    move: 2,
                    attack: 1,
                    range: 3,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 2,
                    attack: 1,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 4,
                    move: 3,
                    attack: 2,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 2,
                    attack: 2,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 5,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 5,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 3,
                    attack: 3,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 6,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "4")],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 6,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "5")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 8,
                    move: 3,
                    attack: 4,
                    range: 4,
                    extra: [action(MUDDLE), action(SHIELD, "5")],
                },
            },
        ],
        cards: SHAMAN_CARDS,
    },
    "Wind Demon": {
        tokenCount: 6,
        stats: [
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "1")],
                },
                elite: {
                    maxHP: 5,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "1")],
                },
            },
            {
                normal: {
                    maxHP: 3,
                    move: 3,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 5,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 4,
                    move: 4,
                    attack: 2,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 7,
                    move: 5,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 5,
                    move: 4,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 8,
                    move: 5,
                    attack: 4,
                    range: 4,
                    extra: [action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 7,
                    move: 4,
                    attack: 3,
                    range: 3,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 8,
                    move: 5,
                    attack: 4,
                    range: 4,
                    extra: [action(DISARM), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 9,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "2")],
                },
                elite: {
                    maxHP: 11,
                    move: 5,
                    attack: 4,
                    range: 4,
                    extra: [action(DISARM), action(SHIELD, "2")],
                },
            },
            {
                normal: {
                    maxHP: 10,
                    move: 4,
                    attack: 3,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 12,
                    move: 5,
                    attack: 4,
                    range: 4,
                    extra: [action(DISARM), action(SHIELD, "3")],
                },
            },
            {
                normal: {
                    maxHP: 11,
                    move: 4,
                    attack: 4,
                    range: 4,
                    extra: [action(SHIELD, "3")],
                },
                elite: {
                    maxHP: 13,
                    move: 5,
                    attack: 5,
                    range: 4,
                    extra: [action(DISARM), action(SHIELD, "3")],
                },
            },
        ],
        cards: [
            {
                initiative: 37,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", [], aoe4WithBlack), { type: "element", use: elements.AIR, action: "+1 attack", image: aoeCircleWithSideBlack }],
            },
            {
                initiative: 9,
                actions: [action(ATTACK, "-1"), action(HEAL, "1", ["self"]), { type: "element", use: elements.AIR, action: action(INVISIBLE, null, ["self"]) }],
            },
            {
                initiative: 21,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", [action(PULL, "1")]), { type: "element", create: elements.AIR }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 21,
                actions: [action(MOVE, "+0"), action(ATTACK, "+0", [action(PULL, "1")]), { type: "element", create: elements.AIR }],
                endAction: END_ACTIONS.SHUFFLE,
            },
            {
                initiative: 29,
                actions: [action(MOVE, "+0"), action(ATTACK, "-1", [action(TARGET, "2")]), { type: "element", use: elements.AIR, action: action(PUSH, "2") }],
            },
            {
                initiative: 43,
                actions: [action(MOVE, "-1"), action(ATTACK, "+1"), { type: "element", use: elements.AIR, action: action(TARGET, "2") }],
            },
            {
                initiative: 43,
                actions: [action(PUSH, "1", ["Target all adjacent enemies"]), action(ATTACK, "+0"), { type: "element", use: elements.EARTH, action: "-2 range" }],
            },
            {
                initiative: 2,
                actions: [action(SHIELD, "1"), action(MOVE, "-1"), action(ATTACK, "+1"), { type: "element", use: elements.ANY, create: elements.AIR }],
            },
        ],
    },
};
export const MONSTER_LIST = Object.keys(MONSTERS);

export const BOSS_STATS = {
    "Bandit Commander": [
        (numPlayers) => ({
            maxHP: 8 * numPlayers,
            move: 3,
            attack: 3,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            move: 3,
            attack: 3,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 4,
            attack: 3,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 13 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 15 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 19 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 23 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: ["Move to next door and reveal room"],
            specialTwo: ["Summon Living Bones"],
            immunities: [IMMOBILIZE, STUN, CURSE],
        }),
    ],
    "The Betrayer": [
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            move: 3,
            attack: 4,
            range: 3,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 3,
            attack: 5,
            range: 3,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 14 * numPlayers,
            move: 3,
            attack: 6,
            range: 4,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            move: 4,
            attack: 7,
            range: 4,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 18 * numPlayers,
            move: 4,
            attack: 8,
            range: 4,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 20 * numPlayers,
            move: 5,
            attack: 8,
            range: 5,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 23 * numPlayers,
            move: 5,
            attack: 9,
            range: 5,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 27 * numPlayers,
            move: 5,
            attack: 9,
            range: 5,
            specialOne: ["Summon Giant Viper and Fear"],
            specialTwo: ["Mind Control"],
            immunities: [POISON, WOUND, DISARM, STUN, CURSE],
        }),
    ],
    "Captain of the Guard": [
        (numPlayers) => ({
            maxHP: 7 * numPlayers,
            move: 2,
            attack: 3,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [WOUND, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 9 * numPlayers,
            move: 2,
            attack: 3,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [WOUND, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 11 * numPlayers,
            move: 2,
            attack: 4,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [WOUND, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 14 * numPlayers,
            move: 3,
            attack: 4,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [WOUND, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            move: 3,
            attack: 5,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [WOUND, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 20 * numPlayers,
            move: 3,
            attack: 5,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [DISARM, WOUND, MUDDLE, STUN],
        }),
        (numPlayers) => ({
            maxHP: 21 * numPlayers,
            move: 4,
            attack: 6,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [WOUND, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 25 * numPlayers,
            move: 4,
            attack: 6,
            range: 0,
            specialOne: [action(HEAL, "2", ["Affect self and all allies"])],
            specialTwo: ["All allies add +1 attack to all attacks this round"],
            immunities: [WOUND, DISARM, STUN, MUDDLE],
        }),
    ],
    "The Colorless": [
        (numPlayers) => ({
            maxHP: 9 * numPlayers,
            move: 3,
            attack: 2,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "4", ["self"]), "sheld 1"],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            move: 3,
            attack: 3,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "4", ["self"]), action(SHIELD, "1")],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 11 * numPlayers,
            move: 4,
            attack: 3,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "5", ["self"]), action(SHIELD, "1")],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "5", ["self"]), action(SHIELD, "1")],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 14 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "6", ["self"]), action(SHIELD, "1")],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 15 * numPlayers,
            move: 4,
            attack: 5,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "6", ["self"]), action(SHIELD, "1")],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 17 * numPlayers,
            move: 4,
            attack: 6,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "7", ["self"]), action(SHIELD, "1")],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 19 * numPlayers,
            move: 5,
            attack: 7,
            range: 0,
            specialOne: [{ type: "element", use: elements.DARK, action: "Summon Night Demon" }, action(INVISIBLE, null, ["self"])],
            specialTwo: [{ type: "element", use: elements.LIGHT, action: "Summon Sun Demon" }, action(HEAL, "7", ["self"]), action(SHIELD, "1")],
            immunities: [WOUND, DISARM, STUN, MUDDLE, CURSE],
        }),
    ],
    "Dark Rider": [
        (numPlayers) => ({
            maxHP: 9 * numPlayers,
            move: 2,
            attack: "3+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            move: 3,
            attack: "3+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 3,
            attack: "3+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
        (numPlayers) => ({
            maxHP: 13 * numPlayers,
            move: 3,
            attack: "4+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
        (numPlayers) => ({
            maxHP: 15 * numPlayers,
            move: 3,
            attack: "4+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            move: 3,
            attack: "5+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            move: 4,
            attack: "5+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
        (numPlayers) => ({
            maxHP: 18 * numPlayers,
            move: 4,
            attack: "6+X",
            range: 0,
            specialOne: ["move +2, attack +0"],
            specialTwo: ["move +0, Summon Imp, attack -1"],
            extra: ["X = Hexes moved"],
            immunities: [POISON, IMMOBILIZE, DISARM, STUN],
        }),
    ],
    "Elder Drake": [
        (numPlayers) => ({
            maxHP: 11 * numPlayers,
            attack: 3,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            attack: 4,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 15 * numPlayers,
            attack: 4,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            attack: 5,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 20 * numPlayers,
            attack: 5,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 22 * numPlayers,
            attack: 6,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 27 * numPlayers,
            attack: 6,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 29 * numPlayers,
            attack: 7,
            range: 0,
            specialOne: [action(ATTACK, "+0", [], elderDrakeSpecial1Area)],
            specialTwo: ["Move and summon 2 Zephyrs"],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, PULL, PUSH],
        }),
    ],
    "The Gloom": [
        (numPlayers) => ({
            maxHP: 20 * numPlayers,
            move: 2,
            attack: 5,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 25 * numPlayers,
            move: 2,
            attack: 5,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 29 * numPlayers,
            move: 2,
            attack: 6,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 35 * numPlayers,
            move: 2,
            attack: 6,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 39 * numPlayers,
            move: 3,
            attack: 7,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 46 * numPlayers,
            move: 3,
            attack: 7,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 50 * numPlayers,
            move: 3,
            attack: 8,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 56 * numPlayers,
            move: 3,
            attack: 9,
            range: 0,
            specialOne: [action(MOVE, "+9"), action(ATTACK, "+9")],
            specialTwo: ["Teleport", action(ATTACK, "+1"), action(RANGE, "5"), action(POISON), action(WOUND), action(STUN)],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE, CURSE],
        }),
    ],
    "Inox Bodyguard": [
        (numPlayers) => ({
            maxHP: 6 * numPlayers,
            move: 2,
            attack: numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "3")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 7 * numPlayers,
            move: 2,
            attack: 1 + numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "3")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 9 * numPlayers,
            move: 2,
            attack: 1 + numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "3")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            move: 3,
            attack: 2 + numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "4")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 11 * numPlayers,
            move: 3,
            attack: 2 + numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "4")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 13 * numPlayers,
            move: 3,
            attack: 3 + numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "5")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 15 * numPlayers,
            move: 4,
            attack: 3 + numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "5")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 17 * numPlayers,
            move: 4,
            attack: 4 + numPlayers,
            range: 0,
            specialOne: [action(MOVE, "-1"), action(ATTACK, "-1", [], inoxBodyguardSpecial1Area)],
            specialTwo: [action(MOVE, "+0"), action(ATTACK, "+0"), action(RETALIATE, "5")],
            immunities: [POISON, DISARM, STUN, MUDDLE],
        }),
    ],
    "Jekserah": [
        (numPlayers) => ({
            maxHP: 6 * numPlayers,
            move: 2,
            attack: 2,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 7 * numPlayers,
            move: 2,
            attack: 3,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 9 * numPlayers,
            move: 3,
            attack: 3,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 13 * numPlayers,
            move: 4,
            attack: 5,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 15 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 18 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 22 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: ["Summon Living Bones", action(ATTACK, "-1", ["Target all adjacent enemies"])],
            specialTwo: ["Summon Living Corpse", action(MOVE, "-1"), action(ATTACK, "+2")],
            immunities: [WOUND, DISARM, STUN, CURSE],
        }),
    ],
    "Merciless Overseer": [
        (numPlayers) => ({
            maxHP: 6 * numPlayers,
            move: 2,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
        (numPlayers) => ({
            maxHP: 8 * numPlayers,
            move: 2,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
        (numPlayers) => ({
            maxHP: 9 * numPlayers,
            move: 3,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
        (numPlayers) => ({
            maxHP: 11 * numPlayers,
            move: 3,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 4,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
        (numPlayers) => ({
            maxHP: 14 * numPlayers,
            move: 4,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            move: 4,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
        (numPlayers) => ({
            maxHP: 19 * numPlayers,
            move: 4,
            attack: "V",
            range: 0,
            specialOne: ["All Scouts act again"],
            specialTwo: ["Summon Vermling Scout"],
            immunities: [WOUND, STUN, CURSE],
            extra: ["V = Number of Scouts present"],
        }),
    ],
    "Prime Demon": [
        (numPlayers) => ({
            maxHP: 8 * numPlayers,
            move: 3,
            attack: 4,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 9 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            move: 4,
            attack: 5,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 4,
            attack: 6,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 14 * numPlayers,
            move: 5,
            attack: 6,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 16 * numPlayers,
            move: 5,
            attack: 7,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 20 * numPlayers,
            move: 5,
            attack: 7,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
        (numPlayers) => ({
            maxHP: 22 * numPlayers,
            move: 5,
            attack: 8,
            range: 0,
            specialOne: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            specialTwo: ["Throne moves", "Summon Demon", action(MOVE, "+2"), action(ATTACK, "-1")],
            immunities: [POISON, WOUND, IMMOBILIZE, DISARM, STUN, MUDDLE],
        }),
    ],
    "The Sightless Eye": [
        (numPlayers) => ({
            maxHP: 7 * numPlayers,
            attack: 5,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 8 * numPlayers,
            attack: 6,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            attack: 6,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 11 * numPlayers,
            attack: 7,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 14 * numPlayers,
            attack: 7,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 15 * numPlayers,
            attack: 8,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 18 * numPlayers,
            attack: 8,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
        (numPlayers) => ({
            maxHP: 20 * numPlayers,
            attack: 9,
            range: 3,
            specialOne: ["Summon Deep Terror", action(ATTACK, "-3", [], sightlessEyeSpecial1Area)],
            specialTwo: ["Summon Deep Terror", action(ATTACK, "-2", [], sightlessEyeSpecial2Area)],
            immunities: [DISARM, STUN, MUDDLE, CURSE, PUSH, PULL],
        }),
    ],
    "Winged Horror": [
        (numPlayers) => ({
            maxHP: 6 * numPlayers,
            move: 3,
            attack: 3,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 7 * numPlayers,
            move: 4,
            attack: 3,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 8 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 10 * numPlayers,
            move: 4,
            attack: 4,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 12 * numPlayers,
            move: 5,
            attack: 4,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 14 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 17 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
        (numPlayers) => ({
            maxHP: 20 * numPlayers,
            move: 5,
            attack: 5,
            range: 0,
            specialOne: [action(ATTACK, "-1", ["Target all adjacent enemies"]), action(ATTACK, "+0", [action(RANGE, "3")]), "Hatch eggs"],
            specialTwo: [`Summon ${numPlayers} eggs`, action(MOVE, "-1"), action(ATTACK, "+0")],
            immunities: [POISON, DISARM, STUN, MUDDLE, CURSE],
        }),
    ],
}

export const BOSS_CARDS = [
    {
        initiative: 85,
        actions: ["Special 1"],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 73,
        actions: ["Special 1"],
    },
    {
        initiative: 52,
        actions: [action(MOVE, "-1"), action(ATTACK, "-1", [action(RANGE, "3"), action(TARGET, "2")])],
    },
    {
        initiative: 11,
        actions: ["Special 2"],
    },
    {
        initiative: 17,
        actions: ["Special 2"],
        endAction: END_ACTIONS.SHUFFLE,
    },
    {
        initiative: 36,
        actions: [action(MOVE, "+0"), action(ATTACK, "+0")],
    },
    {
        initiative: 79,
        actions: ["Special 1"],
    },
    {
        initiative: 14,
        actions: ["Special 2"],
    },
];

export const BOSS_LIST = Object.keys(BOSS_STATS);
