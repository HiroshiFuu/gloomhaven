import React from "react";
import {connect} from "react-redux";

import {BOSS_STATS} from "../../../lib/monsters";
import {STATUS_EFFECTS} from "../../../lib/statusEffects";
import {HPTracker} from "../../UnitTracking/HPTracker";
import {StatusEffectTracker} from "../../UnitTracking/StatusEffectTracker";
import {MonsterStats} from "./MonsterStats";
import {iconForStatusEffect} from "../../../lib/statusEffects";
import { selectors as playersSelectors } from "../../../store/players";
import {removeBossAction} from "../../../store/actions/boss";

import "./MonsterTracker.css";

export class BossMonsterTrackerComponent extends React.Component {
    constructor(props) {
        super(props);

        const statusEffects = STATUS_EFFECTS.reduce((acc, s) => {acc[s] = false; return acc;}, {});
        this.state = {
            hp: props.boss.maxHP,
            statusEffects,
        };
    }

    setHP(hp) {
        //this.setState({hp: hp <= this.state.hp ? hp - 1 : hp});
        this.setState({hp});
    }

    toggleStatusEffect(statusEffect) {
        this.setState({
            statusEffects: {
                ...this.state.statusEffects,
                [statusEffect]: !this.state.statusEffects[statusEffect],
            },
        });
    }


    render() {
        const stats = BOSS_STATS[this.props.boss.name][this.props.scenarioLevel](this.props.numPlayers);

        return (<div>
            <h5 className="MonsterTracker--Name">{this.props.boss.name}<button onClick={() => this.props.removeBoss(this.props.boss.name)}>X</button></h5>
            <div className="MonsterTracker">
                <div className="MonsterTracker--Boss--StatsContainer">
                    <div>
                        <MonsterStats stats={stats} />
                    </div>
                    <div className="MonsterTracker--Boss--ImmunitiesContainer">
                        <div>Immunities:</div>
                        <div className="MonsterTracker--Boss--Immunities">
                            {stats.immunities && stats.immunities.map((s) =>
                                <div key={s} className="MonsterTracker--Boss--ImmunityContainer">
                                    <img className="MonsterTracker--Boss--Immunity" src={iconForStatusEffect(s)} alt={`immune - ${s}`} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="MonsterTracker--Monster">
                    <StatusEffectTracker statusEffects={this.state.statusEffects} immunities={stats.immunities} onToggle={(s) => this.toggleStatusEffect(s)} />
                    <HPTracker currentHP={this.state.hp} maxHP={stats.maxHP} onHPClick={(hp) => this.setHP(hp)} />
                    {(this.props.numPlayers === 0) && <div className="MonsterTracker--Boss--Cover">Add players</div>}
                </div>
            </div>
        </div>);
    }
}

export const BossMonsterTracker = connect(
    (state) => {
        return {
            boss: state.boss,
            numPlayers: playersSelectors.numPlayers(state),
            scenarioLevel: playersSelectors.scenarioLevel(state),
        };
    },
    (dispatch, ownProps) => {
        return {
            removeBoss: (name) => dispatch(removeBossAction(name)),
        }
    },
)(BossMonsterTrackerComponent);
