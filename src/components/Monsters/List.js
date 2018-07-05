import React from 'react';
import {connect} from "react-redux";

import {BOSS_LIST, MONSTER_LIST} from "../../lib/monsters";
import {addMonstersAction, resetMonstersAction} from "../../store/actions/monsters";
import {setBossAction} from "../../store/actions/boss";
import {setLevelAdjustmentAction, selectors as playersSelectors} from "../../store/players";
import {toggleAllowIndividualMonsterLevels} from "../../store/monsters";

import "./List.css";

class ListComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            selectedMonsters: [],
            selectedBoss: BOSS_LIST[0],
        };
    }

    selectBoss(boss) {
        this.setState({selectedBoss: boss});
    }

    handleMonsterSelection(options) {
        const selectedMonsters = [];
        for (const o of options) {
            if (o.selected) {
                selectedMonsters.push(o.value)
            }
        }
        this.setState({selectedMonsters})
    }

    render() {
        const searchResults = MONSTER_LIST.filter((name) => name.toLowerCase().includes(this.state.search));
        return (<div className="Monsters--List">
            <div className="Monsters--List--LevelContainer">
                Level: {this.props.baseScenarioLevel}
                <select
                    className="Monsters--List--LevelSelect"
                    disabled={this.props.boss || this.props.monstersInPlay.length > 0}
                    value={this.props.levelAdjustment}
                    onChange={(event) => this.props.setLevelAdjustment(parseInt(event.target.value, 10))}
                >
                    {["-1", "+0", "+1", "+2"].map((value, i) => <option key={i - 1} value={i - 1}>{value}</option>)}
                </select>
            </div>
            <label className="Monsters--List--allowIndividualMonsterLevels">
                <input type="checkbox" checked={this.props.allowIndividualMonsterLevels} onChange={() => this.props.toggleAllowIndividualMonsterLevels()}/>
                Allow individual monster levels
            </label>
            <div className="Monsters--List--BossSelectorContainer">
                <select disabled={this.props.boss} value={this.state.selectedBoss} onChange={(event) => this.selectBoss(event.target.value)}>
                    {BOSS_LIST.map((b) => <option value={b} key={b}>{b}</option>)}
                </select>
                <button disabled={this.props.boss} onClick={() => this.props.addBoss(this.state.selectedBoss, this.props.scenarioLevel, this.props.numPlayers)}>Add Boss</button>
            </div>
            <input
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                placeholder="search..."
            />
            <select size="20" onChange={(e) => this.handleMonsterSelection(e.target.options)} multiple value={this.state.selectedMonsters}>
                {searchResults.map((name) => <option
                    value={name}
                    key={name}
                    disabled={this.props.monstersInPlay.includes(name)}
                >{name}</option>)}
            </select>
            <button onClick={() => this.props.addMonsters(this.state.selectedMonsters, this.props.scenarioLevel)}>Add Monster(s)</button>
            <button className="Monsters--List--ResetButton" onClick={() => this.props.resetMonsters()}>Reset</button>
            {(this.props.numPlayers === 0) && <div className="Monsters--List--Cover">Add Players</div>}
        </div>);
    }
}

export const List = connect(
    (state) => {
        return {
            levelAdjustment: state.players.levelAdjustment,
            monstersInPlay: Object.keys(state.monsters.monsters),
            allowIndividualMonsterLevels: state.monsters.allowIndividualMonsterLevels,
            boss: state.boss,
            baseScenarioLevel: playersSelectors.baseScenarioLevel(state),
            scenarioLevel: playersSelectors.scenarioLevel(state),
            numPlayers: playersSelectors.numPlayers(state),
        };
    },
    (dispatch, ownProps) => {
        return {
            setLevelAdjustment: (levelAdjustment) => setLevelAdjustmentAction(dispatch, levelAdjustment),
            toggleAllowIndividualMonsterLevels: () => toggleAllowIndividualMonsterLevels(dispatch),
            addBoss: (name, scenarioLevel, numPlayers) => {setBossAction(dispatch, name, scenarioLevel, numPlayers)},
            addMonsters: (monsterNames, scenarioLevel) => {addMonstersAction(dispatch, monsterNames, scenarioLevel)},
            resetMonsters: (monsterNames) => {resetMonstersAction(dispatch, monsterNames)},
        };
    },
)(ListComponent);
