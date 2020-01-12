import React from "react";
import {connect} from "react-redux";
import * as classNames from "classnames";

import {MONSTERS} from "../../../lib/monsters";
import {Monster} from "./Monster";
import {MonsterStats} from "./MonsterStats";
import {StatusEffectTracker} from "../../UnitTracking/StatusEffectTracker";
import {
    toggleAliveAction,
    toggleEliteAction,
    setLevelAction,
    toggleAllStatusEffectsAction,
    dealDamageAction,
    selectors as monstersSelectors,
} from "../../../store/monsters";
import {selectors as playersSelectors, } from "../../../store/players";
import {removeMonsterAction} from "../../../store/actions/monsters";
import {toggleActiveAction} from "../../../store/monsterDecks";

import damage1Icon from './damage-1.png';
import damage5Icon from './damage-5.png';

import "./MonsterTracker.css";

class MonsterTrackerComponent extends React.Component {
    onToggleAlive(index) {
        const activeChange = this.props.monsters.filter((_, i) => i !== index).every((m) => !m.alive);
        if (activeChange) {
            this.props.toggleActive(this.props.name);
        }
        this.props.toggleAlive(index);
    }

    render() {
        const {name, monsters, scenarioLevel, removeMonster, allStatusEffects, toggleElite, toggleAllStatusEffects, dealDamage} = this.props;
        const monsterStats = MONSTERS[name].stats[scenarioLevel];
        return (<div className="MonsterTracker--Container">
            <h5 className="MonsterTracker--Name">{name}<button onClick={() => removeMonster()}>X</button></h5>
            <div className="MonsterTracker">
                <div className="MonsterTracker--StatsContainer">
                    <MonsterStats stats={monsterStats.normal} />
                    <MonsterStats stats={monsterStats.elite} elite />
                </div>
                <div className="MonsterTracker--Controls">
                    <div className="MonsterTracker--StatusEffects--ToggleAll">
                        Toggle All:
                        <StatusEffectTracker statusEffects={allStatusEffects} onToggle={(s) => toggleAllStatusEffects(s)} />
                    </div>
                    <div className="MonsterTracker--MonsterSelectors">
                        {monsters.map(({alive, elite}, i) =>
                            <button key={i}
                                disabled={alive}
                                className={classNames({
                                    "MonsterTracker--MonsterSelector": true,
                                    "MonsterTracker--MonsterSelector--Alive": !alive,
                                })}
                                onClick={() => this.onToggleAlive(i)}
                            >
                                {i + 1}
                            </button>
                        )}
                    </div>
                </div>
                {monsters.map(({alive, elite, level}, i) => {
                    const individualMonsterStats = (level !== scenarioLevel) && MONSTERS[name].stats[level];
                    return alive && (<React.Fragment key={i}>
                        {individualMonsterStats && <div className="MonsterTracker--StatsContainer">
                            {elite ? 
                                <MonsterStats stats={individualMonsterStats.elite} elite /> :
                                <MonsterStats stats={individualMonsterStats.normal} />
                            }
                        </div>
                        }
                        <div className={classNames({"MonsterTracker--Monster": true, "MonsterTracker--Monster--Elite": elite})}>
                            <div className="MonsterTracker--Monster--Controls">
                                <div>
                                    <span className="MonsterTracker--Monster--Number">{`${i + 1}`}</span>
                                    <button onClick={() => this.onToggleAlive(i)}>Kill</button>
                                    <button onClick={() => toggleElite(i)}>Normal/Elite</button>
                                </div>
                                <img
                                    className="MonsterTracker--Damage--Icon damage-1"
                                    src={damage1Icon}
                                    alt="damage-1"
                                    onClick={() => dealDamage(i, 1)}
                                />
                                <img
                                    className="MonsterTracker--Damage--Icon damage-5"
                                    src={damage5Icon}
                                    alt="damage-5"
                                    onClick={() => dealDamage(i, 5)}
                                />
                            </div>
                            {alive && <Monster name={name} index={i} />}
                        </div>
                    </React.Fragment>);
                })}
            </div>
        </div>);
    }
}

export const MonsterTracker = connect(
    (state, ownProps) => {
        return {
            monsters: state.monsters.monsters[ownProps.name].monsters,
            allowIndividualMonsterLevels: state.monsters.allowIndividualMonsterLevels,
            // global status effects across all monsters
            allStatusEffects: monstersSelectors.allStatusEffects(state, ownProps.name),
            scenarioLevel: playersSelectors.scenarioLevel(state),
        };
    },
    (dispatch, ownProps) => {
        return {
            removeMonster: () => {removeMonsterAction(dispatch, ownProps.name)},
            toggleAlive: (i) => toggleAliveAction(dispatch, ownProps.name, i),
            toggleElite: (i) => toggleEliteAction(dispatch, ownProps.name, i),
            toggleActive: (active) => {toggleActiveAction(dispatch, ownProps.name, active)},
            toggleAllStatusEffects: (statusEffect) =>
                toggleAllStatusEffectsAction(dispatch, ownProps.name, statusEffect),
            dealDamage: (i, damage) => dealDamageAction(dispatch, ownProps.name, i, damage),
        };
    },
)(MonsterTrackerComponent);
