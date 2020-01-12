import React from 'react';
import { connect } from 'react-redux';
import Modal from "react-modal"

import { BOSS_LIST, MONSTER_LIST } from '../../lib/monsters';
import {
    addMonstersAction,
    resetMonstersAction
} from '../../store/actions/monsters';
import { setBossAction } from '../../store/actions/boss';
import {
    setLevelAdjustmentAction,
    selectors as playersSelectors
} from '../../store/players';
import { toggleAllowIndividualMonsterLevels } from '../../store/monsters';

import './ListModal.css';

class ListModalComponent extends React.Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content : {
                top                   : '40px',
                left                  : '40%',
                right                 : 'auto',
                bottom                : '10px',
                marginRight           : '-50%',
                padding               : '10px 20px',
                overflowY             : 'hidden',
              }
        };

        this.state = {
            selectedMonsters: [],
            selectedBoss: BOSS_LIST[0]
        };
    }

    selectBoss(boss) {
        this.setState({ selectedBoss: boss });
    }

    handleMonsterSelection(options) {
        const selectedMonsters = [];
        for (const o of options) {
            if (o.selected) {
                selectedMonsters.push(o.value);
            }
        }
        this.setState({ selectedMonsters });
    }

    render() {
        return (
            <Modal isOpen onRequestClose={() => this.props.onClose()} contentLabel="Monsters" style={this.customStyles}>
                <div className="Monsters--ListModal">
                    <div className="Monsters--ListModal--LevelContainer">
                        Level: {this.props.baseScenarioLevel}
                        <select
                            className="Monsters--ListModal--LevelSelect"
                            disabled={
                                this.props.hasBoss ||
                                this.props.monstersInPlay.length > 0
                            }
                            value={this.props.levelAdjustment}
                            onChange={event =>
                                this.props.setLevelAdjustment(
                                    parseInt(event.target.value, 10)
                                )
                            }
                        >
                            {['-1', '+0', '+1', '+2'].map((value, i) => (
                                <option key={i - 1} value={i - 1}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="Monsters--ListModal--BossSelectorContainer">
                        <select
                            disabled={this.props.hasBoss}
                            value={this.state.selectedBoss}
                            onChange={event => this.selectBoss(event.target.value)}
                        >
                            {BOSS_LIST.map(b => (
                                <option value={b} key={b}>
                                    {b}
                                </option>
                            ))}
                        </select>
                        <button
                            disabled={this.props.hasBoss}
                            onClick={() =>
                                this.props.addBoss(
                                    this.state.selectedBoss,
                                    this.props.scenarioLevel,
                                    this.props.numPlayers
                                )
                            }
                        >
                            Add Boss
                        </button>
                    </div>
                    <select
                        size="19"
                        onChange={e =>
                            this.handleMonsterSelection(e.target.options)
                        }
                        multiple
                        value={this.state.selectedMonsters}
                        className="Monsters--ListModal--Monsters"
                    >
                        {MONSTER_LIST.map(name => (
                            <option value={name} key={name} disabled={this.props.monstersInPlay.includes(name)}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() =>
                            this.props.addMonsters(
                                this.state.selectedMonsters,
                                this.props.scenarioLevel
                            )
                        }
                    >
                        Add Monster(s)
                    </button>
                    {this.props.numPlayers === 0 && (
                        <div className="Monsters--ListModal--Cover">Add Players</div>
                    )}
                </div>
            </Modal>
        );
    }
}

export const ListModal = connect(
    state => {
        return {
            levelAdjustment: state.players.levelAdjustment,
            monstersInPlay: Object.keys(state.monsters.monsters),
            allowIndividualMonsterLevels:
                state.monsters.allowIndividualMonsterLevels,
            hasBoss: state.boss != null,
            baseScenarioLevel: playersSelectors.baseScenarioLevel(state),
            scenarioLevel: playersSelectors.scenarioLevel(state),
            numPlayers: playersSelectors.numPlayers(state)
        };
    },
    (dispatch, ownProps) => {
        return {
            setLevelAdjustment: levelAdjustment =>
                setLevelAdjustmentAction(dispatch, levelAdjustment),
            toggleAllowIndividualMonsterLevels: () =>
                toggleAllowIndividualMonsterLevels(dispatch),
            addBoss: (name, scenarioLevel, numPlayers) => {
                setBossAction(dispatch, name, scenarioLevel, numPlayers);
            },
            addMonsters: (monsterNames, scenarioLevel) => {
                addMonstersAction(dispatch, monsterNames, scenarioLevel);
            },
            resetMonsters: monsterNames => {
                resetMonstersAction(dispatch, monsterNames);
            }
        };
    }
)(ListModalComponent);
