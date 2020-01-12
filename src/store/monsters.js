import { STATUS_EFFECTS, newStatusEffectTracker } from '../lib/statusEffects';
import { MONSTERS } from '../lib/monsters';
import { LOAD_PARTY } from './actions/party';
import {
    RESET_MONSTERS,
    ADD_MONSTERS,
    REMOVE_MONSTER
} from './actions/monsters';

function newMonster(name, level, alive, elite) {
    const monsterStats = MONSTERS[name].stats[level];
    const stats = elite ? monsterStats.elite : monsterStats.normal;
    return {
        alive: alive,
        elite: elite,
        level,
        maxHP: stats.maxHP,
        currentHP: stats.maxHP,
        statusEffects: newStatusEffectTracker()
    };
}

function newMonsters(name, level) {
    const monster = MONSTERS[name];
    return {
        monsters: new Array(monster.tokenCount).fill(
            newMonster(name, level, false, false)
        )
    };
}

function getAllStatusEffects(monsters) {
    const aliveMonsters = monsters.filter(m => m.alive);
    return STATUS_EFFECTS.reduce((acc, s) => {
        if (aliveMonsters.length === 0) {
            acc[s] = false;
            return acc;
        }
        acc[s] = true;
        aliveMonsters.forEach(m => {
            acc[s] = acc[s] && m.statusEffects[s];
        });
        return acc;
    }, {});
}

const defaultState = {
    allowIndividualMonsterLevels: false,
    monsters: {}
};

const TOGGLE_ELITE = 'monsters/toggleElite';
const TOGGLE_ALIVE = 'monsters/toggleAlive';
const TOGGLE_ALLOW_INDIVIDUAL_MONSTER_LEVELS =
    'monsters/level/allowSetting/toggle';
const SET_LEVEL = 'monsters/level/set';
const TOGGLE_ALL_STATUS_EFFECTS = 'monsters/statusEffect/setAll';
const TOGGLE_STATUS_EFFECT = 'monsters/statusEffect/toggle';
const SET_HP = 'monsters/hp/set';
const DEAL_DAMAGE = 'monsters/hp/damage';

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_PARTY: {
            const loadedMonsters = Object.entries(action.party[1]).reduce(
                (acc, [monsterName, monstersData]) => {
                    acc[monsterName] = monstersData;
                    return acc;
                },
                {}
            );
            return {
                ...defaultState,
                monsters: loadedMonsters
            };
        }
        case RESET_MONSTERS:
            return defaultState;
        case ADD_MONSTERS: {
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    ...action.monsters.reduce((acc, name) => {
                        acc[name] = newMonsters(
                            name,
                            action.level,
                            action.numPlayers
                        );
                        return acc;
                    }, {})
                }
            };
        }
        case REMOVE_MONSTER: {
            const newState = {
                ...state,
                monsters: { ...state.monsters }
            };
            delete newState.monsters[action.name];
            return newState;
        }
        case TOGGLE_ELITE: {
            const monsters = state.monsters[action.name].monsters;
            const monster = monsters[action.index];
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    [action.name]: {
                        monsters: [
                            ...monsters.slice(0, action.index),
                            newMonster(
                                action.name,
                                monster.level,
                                monster.alive,
                                !monster.elite
                            ),
                            ...monsters.slice(action.index + 1)
                        ]
                    }
                }
            };
        }
        case TOGGLE_ALIVE: {
            const monsters = state.monsters[action.name].monsters;
            const monster = monsters[action.index];
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    [action.name]: {
                        monsters: [
                            ...monsters.slice(0, action.index),
                            newMonster(
                                action.name,
                                monster.level,
                                !monster.alive,
                                monster.elite
                            ),
                            ...monsters.slice(action.index + 1)
                        ]
                    }
                }
            };
        }
        case TOGGLE_ALLOW_INDIVIDUAL_MONSTER_LEVELS: {
            return {
                ...state,
                allowIndividualMonsterLevels: !state.allowIndividualMonsterLevels
            };
        }
        case SET_LEVEL: {
            const monsters = state.monsters[action.name].monsters;
            const monster = monsters[action.index];
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    [action.name]: {
                        monsters: [
                            ...monsters.slice(0, action.index),
                            newMonster(
                                action.name,
                                action.level,
                                monster.alive,
                                monster.elite
                            ),
                            ...monsters.slice(action.index + 1)
                        ]
                    }
                }
            };
        }
        case TOGGLE_ALL_STATUS_EFFECTS: {
            const monsters = state.monsters[action.name].monsters;
            const allStatusEffects = getAllStatusEffects(monsters);
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    [action.name]: {
                        monsters: monsters.map(m => {
                            if (!m.alive) {
                                return m;
                            }
                            return {
                                ...m,
                                statusEffects: {
                                    ...m.statusEffects,
                                    [action.statusEffect]: !allStatusEffects[
                                        action.statusEffect
                                    ]
                                }
                            };
                        })
                    }
                }
            };
        }
        case TOGGLE_STATUS_EFFECT: {
            const monsters = state.monsters[action.name].monsters;
            const monster = monsters[action.index];
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    [action.name]: {
                        monsters: [
                            ...monsters.slice(0, action.index),
                            {
                                ...monster,
                                statusEffects: {
                                    ...monster.statusEffects,
                                    [action.statusEffect]: !monster
                                        .statusEffects[action.statusEffect]
                                }
                            },
                            ...monsters.slice(action.index + 1)
                        ]
                    }
                }
            };
        }
        case SET_HP: {
            const monsters = state.monsters[action.name].monsters;
            const monster = monsters[action.index];
            return {
                ...state,
                monsters: {
                    ...state.monsters,
                    [action.name]: {
                        monsters: [
                            ...monsters.slice(0, action.index),
                            {
                                ...monster,
                                currentHP: action.hp
                            },
                            ...monsters.slice(action.index + 1)
                        ]
                    }
                }
            };
        }
        case DEAL_DAMAGE: {
            const monsters = state.monsters[action.name].monsters;
            const monster = monsters[action.index];
            const currentHP = monster.currentHP - action.damage;
            console.log('DEAL_DAMAGE', monster, monster.currentHP, action.damage, currentHP);
            if (currentHP > 0) {
                return {
                    ...state,
                    monsters: {
                        ...state.monsters,
                        [action.name]: {
                            monsters: [
                                ...monsters.slice(0, action.index),
                                {
                                    ...monster,
                                    currentHP: currentHP
                                },
                                ...monsters.slice(action.index + 1)
                            ]
                        }
                    }
                };
            }
            else {
                return {
                    ...state,
                    monsters: {
                        ...state.monsters,
                        [action.name]: {
                            monsters: [
                                ...monsters.slice(0, action.index),
                                newMonster(
                                    action.name,
                                    monster.level,
                                    !monster.alive,
                                    monster.elite
                                ),
                                ...monsters.slice(action.index + 1)
                            ]
                        }
                    }
                };
            }
        }
        default:
            return state;
    }
};

export function toggleAliveAction(dispatch, name, index) {
    dispatch({ type: TOGGLE_ALIVE, name, index });
}

export function toggleEliteAction(dispatch, name, index) {
    dispatch({ type: TOGGLE_ELITE, name, index });
}

export function toggleAllowIndividualMonsterLevels(dispatch) {
    dispatch({ type: TOGGLE_ALLOW_INDIVIDUAL_MONSTER_LEVELS });
}

export function setLevelAction(dispatch, name, index, level) {
    dispatch({ type: SET_LEVEL, name, index, level });
}

export function toggleAllStatusEffectsAction(dispatch, name, statusEffect) {
    dispatch({ type: TOGGLE_ALL_STATUS_EFFECTS, name, statusEffect });
}

export function toggleStatusEffectAction(dispatch, name, index, statusEffect) {
    dispatch({ type: TOGGLE_STATUS_EFFECT, name, index, statusEffect });
}

export function setHPAction(dispatch, name, index, hp) {
    dispatch({ type: SET_HP, name, index, hp });
}

export function dealDamageAction(dispatch, name, index, damage) {
    dispatch({ type: DEAL_DAMAGE, name, index, damage });
}

export const selectors = {
    // status effects across all monsters
    allStatusEffects: (state, name) =>
        getAllStatusEffects(state.monsters.monsters[name].monsters),
    isActive: (state, name) =>
        state.monsters.monsters[name].monsters.some(m => m.alive),
    hasMonstersInPlay: state =>
        state.boss != null || Object.keys(state.monsters.monsters).length > 0
};
