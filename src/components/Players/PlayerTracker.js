import React from 'react';
import { connect } from 'react-redux';

import xpIcon from './xp.svg';
//import xpIcon from "./xp_white.svg";
// import { PerksModal } from './PerksModal';
// import { SummonModal } from './SummonModal';
// import { SummonTrackers } from '../Summons/SummonTrackers';
// import { BonusSelectors } from '../UnitTracking/BonusSelectors';
// import { StatusEffectTracker } from '../UnitTracking/StatusEffectTracker';
// import { HPTracker } from '../UnitTracking/HPTracker';
import {
    setXPAction,
    setLevelAction,
    toggleStatusEffectAction,
    setHPAction
} from '../../store/players';
import { removePlayerAction } from '../../store/actions/players';
import { selectors as monstersSelectors } from '../../store/monsters';
import { getLevel } from '../../lib/players';

import './PlayerTracker.css';

const ESCAPE_KEY = 27;

class PlayerTrackerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            xp: this.props.player.xp,
            level: this.props.player.level,
            nextLevel: this.props.player.level,
        };
    }

    setXP(xp) {
        if (xp < 0) {
            return;
        }
        this.setState({
            xp
        });
        this.props.setXP(xp);
        this.setLevel(getLevel(xp));
    }

    setLevel(nextLevel) {
        this.setState({
            nextLevel
        });
        // this.props.selectLevel(parseInt(level, 10));
    }

    togglePerksModal(showPerksModal) {
        this.setState({
            showPerksModal
        });
    }

    toggleSummonModal(showSummonModal) {
        this.setState({
            showSummonModal
        });
    }

    render() {
        return (
            <div className="PlayerTracker--Container">
                <h5 className="PlayerTracker--Name">
                    {this.props.name}
                    {!this.props.hasMonstersInPlay && (
                        <button onClick={() => this.props.removePlayer()}>
                            X
                        </button>
                    )}
                </h5>
                <div className="PlayerTracker--Class">
                    {this.props.player.class}
                </div>
                <div className="PlayerTracker--Description">
                    <div className="PlayerTracker--Stats">
                        <div className="PlayerTracker--XP">
                            <img
                                className="PlayerTracker--XP--Icon"
                                src={xpIcon}
                                alt="xp"
                            />
                            <div className="PlayerTracker--XP--Buttons">
                                <button
                                    disabled={this.state.xp === 0}
                                    onClick={() =>
                                        this.setXP(this.state.xp - 1)
                                    }
                                >
                                    -
                                </button>
                                {this.state.xp}
                                <button
                                    onClick={event => {
                                        if (event.shiftKey) {
                                            this.setXP(this.state.xp + 10);
                                        } else {
                                            this.setXP(this.state.xp + 1);
                                        }
                                    }}
                                >
                                    +
                                </button>
                                L:{this.state.nextLevel} 
                            </div>
                        </div>
                    </div>
                    <div className="PlayerTracker--LevelSelector">
                        <label>
                            Level:
                            <select
                                disabled={this.props.hasMonstersInPlay}
                                value={this.state.level}
                                onChange={event =>
                                    this.setLevel(
                                        parseInt(event.target.value, 10)
                                    )
                                }
                            >
                                {new Array(9).fill().map((_, i) => {
                                    const level = i + 1;
                                    return (
                                        <option key={level} value={level}>
                                            {level}
                                        </option>
                                    );
                                })}
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export const PlayerTracker = connect(
    (state, ownProps) => {
        return {
            player: state.players.players[ownProps.name],
            hasMonstersInPlay: monstersSelectors.hasMonstersInPlay(state),
            xp: state.players.players[ownProps.name].xp,
            level: state.players.players[ownProps.name].level,
            nextLevel: state.players.players[ownProps.name].level,
        };
    },
    (dispatch, ownProps) => {
        return {
            setXP: xp => setXPAction(dispatch, ownProps.name, xp),
            selectLevel: level =>
                setLevelAction(dispatch, ownProps.name, level),
            removePlayer: () => removePlayerAction(dispatch, ownProps.name),
            toggleStatusEffect: statusEffect =>
                toggleStatusEffectAction(dispatch, ownProps.name, statusEffect),
            setHP: hp => setHPAction(dispatch, ownProps.name, hp)
        };
    }
)(PlayerTrackerComponent);
