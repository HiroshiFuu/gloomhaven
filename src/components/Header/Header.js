import React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import { ElementTracker } from '../ElementTracker/ElementTracker';
import { EndTurnButton } from './EndTurnButton';
import { EndScenarioButton } from './EndScenarioButton';
import { endTurnAction } from '../../store/actions/turn';
import { endScenarioAction } from '../../store/actions/turn';
import { selectors as monsterDecksSelectors } from '../../store/monsterDecks';
import { selectors as monstersSelectors } from '../../store/monsters';

import './Header.css';

function HeaderComponent({
    turn,
    hasActiveCards,
    endTurnReady,
    endTurn,
    endScenario
}) {
    return (
        <div>
            <div className="Header">
                <div className="Header--Content">
                    <ElementTracker className="Header--Content--Section" />
                    <EndTurnButton
                        className={classNames({
                            'Header--EndTurnButton': true,
                            'Header--EndTurnButton--Ready': hasActiveCards
                        })}
                        turn={turn}
                        endTurnReady={endTurnReady}
                        endTurn={() => endTurn()}
                    />
                    <EndScenarioButton
                        className={classNames({
                            'Header--EndScenarioButton': true,
                        })}
                        endScenario={() => endScenario()}
                    />
                </div>
            </div>
            <div className="Header--HeightOffset"></div>
        </div>
    );
}

export const Header = connect(
    state => {
        return {
            hasActiveCards: monsterDecksSelectors.hasActiveCards(state),
            endTurnReady: monsterDecksSelectors.hasActiveCards(state) || !monstersSelectors.hasMonstersAlive(state),
            turn: state.turn
        };
    },
    dispatch => ({
        endTurn: () => endTurnAction(dispatch),
        endScenario: () => endScenarioAction(dispatch),
    })
)(HeaderComponent);
