import { STATUS_EFFECTS } from '../lib/statusEffects';
import { BOSS_STATS } from '../lib/monsters';
import { LOAD_PARTY } from './actions/party';
import { SET_BOSS, REMOVE_BOSS } from './actions/boss';
import { RESET_MONSTERS } from './actions/monsters';
import { END_SCENARIO } from './actions/turn';

function newBoss(name, level, numPlayers) {
    const stats = BOSS_STATS[name][level](numPlayers);
    return {
        name,
        maxHP: stats.maxHP,
        currentHP: stats.maxHP,
        statusEffects: STATUS_EFFECTS.reduce((acc, s) => {
            acc[s] = false;
            return acc;
        }, {})
    };
}

const defaultState = null;
const DEAL_DAMAGE = 'boss/hp/damage';

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_PARTY: {
            return defaultState;
        }
        case RESET_MONSTERS: {
            return defaultState;
        }
        case SET_BOSS: {
            if (action.name === 'Inox Bodyguard') {
                return [
                    newBoss(action.name, action.level, action.numPlayers),
                    newBoss(action.name, action.level, action.numPlayers)
                ];
            }
            return [newBoss(action.name, action.level, action.numPlayers)];
        }
        case REMOVE_BOSS: {
            return defaultState;
        }
        case DEAL_DAMAGE: {
            var boss = state[action.index];
            var currentHP = boss.currentHP - action.damage;
            if (currentHP > boss.maxHP) {
                return state;
            }
            if (currentHP > 0) {
                boss.currentHP = currentHP;
                if (state.length === 1) {
                    return [boss];
                }
                else {
                    if (action.index === 0) {
                        return [boss, state[1]];
                    }
                    else {
                        return [state[0], boss];
                    }
                }
            }
            else {
                if (state[1 - action.index] !== undefined) {
                    return [state[1 - action.index]];
                }
                else {
                    action.asyncDispatch({ type: "monsters/boss/remove" });
                    return defaultState;
                }
            }
        }
        case END_SCENARIO: {
            return defaultState;
        }
        default:
            return state;
    }
};

export function dealDamageAction(dispatch, index, damage) {
    dispatch({ type: DEAL_DAMAGE, index, damage });
}

export const selectors = {};
