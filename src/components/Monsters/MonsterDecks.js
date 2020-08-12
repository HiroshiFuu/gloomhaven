import React from 'react';
import { connect } from 'react-redux';
// import * as classNames from 'classnames';

import { Deck } from './Deck';
import { MONSTERS, BOSS_STATS } from '../../lib/monsters';
import { selectors as playersSelectors } from '../../store/players';

import { FutureModal } from './FutureModal';

import './MonsterDecks.css';

class MonsterDecksComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showFutureModal: false
        };
    }

    toggleFutureModal(showFutureModal) {
        this.setState({
            showFutureModal
        });
    }

    peekFuture = (name, number) => {
        let deck = this.props.decks[name];
        console.log(deck.cards);
        let cards = deck.cards;
        let startIndex = deck.currentIndex + 1;
        if (startIndex == -1)
            startIndex = 0;
        let endIndex = startIndex + number;
        if (endIndex <= cards.length)
            console.log('Ok', cards.slice(startIndex, endIndex));
        else {
            endIndex = endIndex - cards.length;
            console.log('Nok', cards.slice(startIndex, cards.length).concat(cards.slice(0, endIndex)));
        }
        this.toggleFutureModal(!this.state.showFutureModal);
    }

    onSubmitAction = (test) => {
        console.log('onSubmitAction', test);
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
                {this.state.showFutureModal && (
                    <FutureModal
                        onClose={() =>
                            this.toggleFutureModal(false)
                        }
                        submitAction={(test) =>
                            this.onSubmitAction(test)
                        }
                    />
                )}
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
                                    peekFutureSmallFunc={this.peekFuture}
                                    peekFutureBigFunc={this.peekFuture}
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
                                peekFutureFunc={this.peekFuture}
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
