import React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import { Header } from './Header/Header';
import { PartyManager } from './PartyManager';
// import { List as MonsterList } from './Monsters/List';
import { ListModal as MonstersListModal } from './Monsters/ListModal';
import { PlayerTrackers } from './Players/PlayerTrackers';
import { MonsterDecks } from './Monsters/MonsterDecks';
import { MonsterTrackers } from './Monsters/MonsterTrackers';
import { selectors as playersSelectors } from '../store/players';
import { selectors as monstersSelectors } from '../store/monsters';
import { addPlayerAction } from '../store/actions/players';

import { EndTurnButton } from './Header/EndTurnButton';
import { endTurnAction } from '../store/actions/turn';
import {
    revealNextCardsAction,
    selectors as monstersDecksSelectors
} from '../store/monsterDecks';

import SimpleStorage from 'react-simple-storage';

import './Game.css';

class GameComponent extends React.Component {
    static getDerivedStateFromProps(props, state) {
        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            playerNameInput: '',
            selectedClass: '',
            duplicateNameWarning: false,
            showSections: {
                players: true,
                monsterList: true,
                monsterDecks: true,
                monsters: true
            },
            showStats: true,
            showMonstersListModal: false,
        };
        // console.log('GameComponent', this.state);
    }

    toggleSection(section) {
        this.setState({
            showSections: {
                ...this.state.showSections,
                [section]: !this.state.showSections[section]
            }
        });
    }

    handleHasActiveCardsChanged(hasActiveCardsChanged) {
        console.log('handleHasActiveCardsChanged', hasActiveCardsChanged);
    }

    toggleMonstersListModal(showMonstersListModal) {
        this.setState({
            showMonstersListModal
        });
    }

    render() {
        const { decks, hasActiveCards, revealNextCards, endTurn } = this.props;
        const deckNames = Object.keys(decks);
        return (
            <div>
                <SimpleStorage parent={this} prefix={'Gloomhaven_Data'} />
                <Header />
                <div className="Game--container">
                    <div className="Game--leftSection">
                        <div className="Game--Section">
                            <h3
                                className="Game--Section--Toggle"
                            >
                                Monsters{' '}
                        <button
                            className="Game--MonsterList--Button"
                            onClick={() =>
                                this.toggleMonstersListModal(!this.state.showMonstersListModal)
                            }
                        >
                            Add Monsters
                        </button>
                        {this.state.showMonstersListModal && (
                            <MonstersListModal
                                name={this.props.name}
                                onClose={() => this.toggleMonstersListModal(false)}
                            />
                        )}
                            </h3>
                            <div
                                className={classNames({
                                    'Game--Section--hideSection': !this.state
                                        .showSections.monsters
                                })}
                            >
                                <MonsterTrackers />
                            </div>
                        </div>
                    </div>
                    <div className="Game--rightSection">
                        <div className="Game--Section">
                            <h3
                                className="Game--Section--Toggle"
                                onClick={() => this.toggleSection('players')}
                            >
                                Players{' '}
                                <span className="Game--Section--ToggleSymbol">
                                    {this.state.showSections.players
                                        ? '▾'
                                        : '▸'}
                                </span>
                            </h3>
                            <div
                                className={classNames({
                                    'Game--Section--hideSection': !this.state
                                        .showSections.players
                                })}
                            >
                                <PartyManager />
                                <PlayerTrackers />
                            </div>
                        </div>
                        <div className="Game--Section">
                            <h3
                                className="Game--Section--Toggle"
                            >
                                Monster Cards{' '}
                                <button
                                    className="MonsterDecks--Header--Button"
                                    disabled={
                                        !deckNames.some(
                                            m => decks[m].active
                                        ) || hasActiveCards
                                    }
                                    onClick={() =>
                                        revealNextCards(deckNames)
                                    }
                                >
                                    翻怪物行动卡
                                </button>
                                <EndTurnButton
                                    className={classNames({
                                        'MonsterDecks--Header--Button': true,
                                        'MonsterDecks--Header--ButtonReady': hasActiveCards
                                    })}
                                    endTurnReady={hasActiveCards}
                                    endTurn={() => endTurn()}
                                />
                            </h3>
                            <div
                                className={classNames({
                                    'Game--Section--hideSection': !this.state
                                        .showSections.monsterDecks
                                })}
                            >
                                <MonsterDecks
                                    showStats={false}
                                    showTimeline={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const Game = connect(
    (state, ownProps) => {
        return {
            selectableClasses: playersSelectors.selectableClasses(state),
            playerNames: Object.keys(state.players.players),
            hasMonstersInPlay: monstersSelectors.hasMonstersInPlay(state),
            decks: state.monsterDecks,
            hasActiveCards: monstersDecksSelectors.hasActiveCards(state)
        };
    },
    (dispatch, ownProps) => ({
        addPlayer: (name, characterClass) =>
            addPlayerAction(dispatch, name, characterClass, 0),
        endTurn: () => endTurnAction(dispatch),
        revealNextCards: () => {
            revealNextCardsAction(dispatch);
        }
    })
)(GameComponent);
