import React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';

import { Header } from './Header/Header';
import { PartyManager } from './PartyManager';
import { List as MonsterList } from './Monsters/List';
import { PlayerTrackers } from './Players/PlayerTrackers';
import { Deck as AttackModifierDeck } from './AttackModifierDecks/Deck';
import curseCard from './AttackModifierDecks/curse.jpg';
import blessCard from './AttackModifierDecks/bless.jpg';
import { MonsterDecks } from './Monsters/MonsterDecks';
import { MonsterTrackers } from './Monsters/MonsterTrackers';
import { selectors as attackModifierDecksSelectors } from '../store/attackModifierDecks';
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
        if (
            props.playerNames &&
            !props.playerNames.includes(state.selectedAttackModifierDeck)
        ) {
            return {
                selectedAttackModifierDeck: 'Monsters'
            };
        }

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
                attackModifierDecks: true,
                monsterList: true,
                monsterDecks: true,
                monsters: true
            },
            showStats: true,
            showInitiativeTimeline: false,
            selectedAttackModifierDeck: 'Monsters',
        };
        console.log('GameComponent', this.state);
    }

    toggleSection(section) {
        this.setState({
            showSections: {
                ...this.state.showSections,
                [section]: !this.state.showSections[section]
            }
        });
    }

    toggleInitiativeTimeline() {
        this.setState({
            showInitiativeTimeline: !this.state.showInitiativeTimeline
        });
    }

    handleHasActiveCardsChanged(hasActiveCardsChanged) {
        console.log('handleHasActiveCardsChanged', hasActiveCardsChanged);
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
                        <h3
                            className="Game--Section--Toggle"
                            onClick={() => this.toggleSection('monsterList')}
                        >
                            Add Monsters{' '}
                            <span className="Game--Section--ToggleSymbol">
                                {this.state.showSections.monsterList
                                    ? '▾'
                                    : '▸'}
                            </span>
                        </h3>
                        <div
                            className={classNames({
                                'Game--Section--monsterList': true,
                                'Game--Section--hideSection': !this.state
                                    .showSections.monsterList
                            })}
                        >
                            <MonsterList />
                        </div>
                        <div className="Game--Section">
                            <h3
                                className="Game--Section--Toggle"
                                onClick={() => this.toggleSection('monsters')}
                            >
                                Monsters{' '}
                                <span className="Game--Section--ToggleSymbol">
                                    {this.state.showSections.monsters
                                        ? '▾'
                                        : '▸'}
                                </span>
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
                            <PartyManager />
                            <div
                                className={classNames({
                                    'Game--Section--hideSection': !this.state
                                        .showSections.players
                                })}
                            >
                                <PlayerTrackers />
                            </div>
                        </div>
                        <div className="Game--Section">
                            <h3
                                className="Game--Section--Toggle"
                                onClick={() =>
                                    this.toggleSection('monsterDecks')
                                }
                            >
                                Monster Cards{' '}
                                <span className="Game--Section--ToggleSymbol">
                                    {this.state.showSections.monsterDecks
                                        ? '▾'
                                        : '▸'}
                                </span>
                            </h3>
                            {/*
                            <ul className={classNames({"Game--original": true, "Game--test": this.state.showStats})}>
                                {this.state.showStats && new Array(9).fill().map((_, i) => {
                                    return (<li key={i}>item {i}</li>);
                                })}
                            </ul>
                            */}
                            <div className="Game--Monsters--StatsToggleContainer">
                                <label
                                    className={classNames({
                                        'Game--Monsters--StatsToggle': true,
                                        'Game--select': true,
                                        'Game--select--active': !this.state
                                            .showStats
                                    })}
                                >
                                    <input
                                        type="radio"
                                        checked={!this.state.showStats}
                                        onChange={() =>
                                            this.setState({ showStats: false })
                                        }
                                    />
                                    隱藏數據
                                </label>
                                <label
                                    className={classNames({
                                        'Game--Monsters--StatsToggle': true,
                                        'Game--select': true,
                                        'Game--select--active': this.state
                                            .showStats
                                    })}
                                >
                                    <input
                                        type="radio"
                                        checked={this.state.showStats}
                                        onChange={() =>
                                            this.setState({ showStats: true })
                                        }
                                    />
                                    顯示數據
                                </label>
                                <div className="MonsterDecks--Header">
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
                                        翻怪物行動卡
                                    </button>
                                    <EndTurnButton
                                        className={classNames({
                                            'MonsterDecks--Header--Button': true,
                                            'MonsterDecks--Header--ButtonReady': hasActiveCards
                                        })}
                                        endTurnReady={hasActiveCards}
                                        endTurn={() => endTurn()}
                                    />
                                </div>
                            </div>
                            <div
                                className={classNames({
                                    'Game--Section--hideSection': !this.state
                                        .showSections.monsterDecks
                                })}
                            >
                                <MonsterDecks
                                    showStats={this.state.showStats}
                                    showTimeline={
                                        this.state.showInitiativeTimeline
                                    }
                                    toggleTimeline={() =>
                                        this.toggleInitiativeTimeline()
                                    }
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
            totalCurses: attackModifierDecksSelectors.totalCurses(state),
            totalBlessings: attackModifierDecksSelectors.totalBlessings(state),
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
