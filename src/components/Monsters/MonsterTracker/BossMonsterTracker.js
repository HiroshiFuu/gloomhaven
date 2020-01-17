import React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import { BOSS_STATS } from '../../../lib/monsters';
import { STATUS_EFFECTS } from '../../../lib/statusEffects';
import { HPTracker } from '../../UnitTracking/HPTracker';
import { StatusEffectTracker } from '../../UnitTracking/StatusEffectTracker';
import { MonsterStats } from './MonsterStats';
import { iconForStatusEffect } from '../../../lib/statusEffects';
import { selectors as playersSelectors } from '../../../store/players';
import { removeBossAction } from '../../../store/actions/boss';
import { dealDamageAction } from '../../../store/boss';

import damage1Icon from './damage-1.png';
import damage5Icon from './damage-5.png';

import './MonsterTracker.css';

export class BossMonsterTrackerComponent extends React.Component {
    onToggleAlive(index) {
        const activeChange = this.props.monsters
            .filter((_, i) => i !== index)
            .every(m => !m.alive);
        if (activeChange) {
            this.props.toggleActive(this.props.name);
        }
        this.props.toggleAlive(index);
    }

    constructor(props) {
        super(props);

        const statusEffects = STATUS_EFFECTS.reduce((acc, s) => {
            acc[s] = false;
            return acc;
        }, {});
        this.state = {
            statusEffects,
            boss: this.props.boss,
        };
    }

    toggleStatusEffect(statusEffect) {
        this.setState({
            statusEffects: {
                ...this.state.statusEffects,
                [statusEffect]: !this.state.statusEffects[statusEffect]
            }
        });
    }

    render() {
        const { dealDamage } = this.props;
        const stats = BOSS_STATS[this.props.boss.name][
            this.props.scenarioLevel
        ](this.props.numPlayers);
        return (
            <div className="MonsterTracker--Container">
                <h5 className="MonsterTracker--Name">
                    {this.props.boss.name}
                    <button
                        onClick={() =>
                            this.props.removeBoss(this.props.boss.name)
                        }
                    >
                        X
                    </button>
                </h5>
                <div className="MonsterTracker">
                    <div>
                        <MonsterStats
                            className="MonsterTracker--Boss--Stats"
                            stats={stats}
                        />
                        <div
                            className={classNames(
                                'MonsterTracker--Boss--Stats',
                                'MonsterTracker--Boss--ImmunitiesContainer'
                            )}
                        >
                            <div>Immunities:</div>
                            <div className="MonsterTracker--Boss--Immunities">
                                {stats.immunities &&
                                    stats.immunities.map(s => (
                                        <div
                                            key={s}
                                            className="MonsterTracker--Boss--ImmunityContainer"
                                        >
                                            <img
                                                className="MonsterTracker--Boss--Immunity"
                                                src={iconForStatusEffect(s)}
                                                alt={`immune - ${s}`}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="MonsterTracker--Monster">
                        <div className="MonsterTracker--Monster--Controls">
                            <div>
                                <button onClick={() => this.onToggleAlive()}>
                                    Kill
                                </button>
                            </div>
                            <img
                                className="MonsterTracker--Damage--Icon damage-1"
                                src={damage1Icon}
                                alt="damage-1"
                                onClick={() => dealDamage(1)}
                            />
                            <img
                                className="MonsterTracker--Damage--Icon damage-5"
                                src={damage5Icon}
                                alt="damage-5"
                                onClick={() => dealDamage(5)}
                            />
                        </div>
                        <StatusEffectTracker
                            statusEffects={this.state.statusEffects}
                            immunities={stats.immunities}
                            onToggle={s => this.toggleStatusEffect(s)}
                        />
                        {/* set unique key so it rerenders on maxHP change */}
                        <HPTracker
                            key={stats.maxHP}
                            maxHP={stats.maxHP}
                            onHPChange={hp => {}}
                        />
                        {this.props.numPlayers === 0 && (
                            <div className="MonsterTracker--Boss--Cover">
                                Add players
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export const BossMonsterTracker = connect(
    state => {
        return {
            numPlayers: playersSelectors.numPlayers(state),
            scenarioLevel: playersSelectors.scenarioLevel(state),
        };
    },
    (dispatch, ownProps) => {
        return {
            removeBoss: name => removeBossAction(dispatch, name),
            dealDamage: (damage) => {
                dealDamageAction(dispatch, ownProps.boss.name, damage)
            }
        };
    }
)(BossMonsterTrackerComponent);
