import React from 'react';
import { connect } from 'react-redux';
// import * as classNames from 'classnames';

import { Deck } from './Deck';
import { MONSTERS, BOSS_STATS } from '../../lib/monsters';
import { selectors as playersSelectors } from '../../store/players';

import './MonsterDecks.css';

class MonsterDecksComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const {
            decks,
            showStats,
            numPlayers,
            scenarioLevel,
            boss,
        } = this.props;
        const deckNames = Object.keys(decks);
        const activeDecks = deckNames.filter(m => decks[m].active);
        const inactiveDecks = deckNames.filter(m => !decks[m].active);
        const deckOrder = activeDecks
            .sort((a, b) => {
                const deckA = decks[a];
                const deckB = decks[b];
                if (!deckA.currentCard && !deckB.currentCard) {
                    return 0;
                }
                return (
                    deckA.currentCard.initiative - deckB.currentCard.initiative
                );
            })
            .concat(inactiveDecks);
        return (
            <div>
                <div className="MonsterDecks">
                    {deckOrder.map(name => {
                        const deck = decks[name];
                        if (!showStats) {
                            return (
                                <Deck
                                    key={name}
                                    name={name}
                                    card={deck.currentCard}
                                    active={deck.active}
                                />
                            );
                        }
                        let monsterStats;
                        if (name === 'Boss') {
                            monsterStats = BOSS_STATS[boss[0].name][
                                scenarioLevel
                            ](numPlayers);
                        } else {
                            monsterStats = MONSTERS[name].stats[scenarioLevel];
                        }
                        return (
                            <Deck
                                key={name}
                                name={name}
                                card={deck.currentCard}
                                active={deck.active}
                                stats={monsterStats}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export const MonsterDecks = connect(
    (state, ownProps) => {
        return {
            decks: state.monsterDecks,
            numPlayers: playersSelectors.numPlayers(state),
            scenarioLevel: playersSelectors.scenarioLevel(state),
            boss: state.boss,
        };
    }
)(MonsterDecksComponent);
