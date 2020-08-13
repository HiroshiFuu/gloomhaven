import React from 'react';
import { connect } from 'react-redux';
// import * as classNames from 'classnames';

import { Deck } from './Deck';
import { MONSTERS, BOSS_STATS } from '../../lib/monsters';
import { selectors as playersSelectors } from '../../store/players';

import { FutureModal } from './FutureModal';

import './MonsterDecks.css';

var peekingCards;
var peekingDeckName;

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
        peekingDeckName = name;
        let deck = this.props.decks[name];
        console.log(deck.cards, deck.currentIndex);
        let cards = deck.cards;
        let startIndex = deck.currentIndex + 1;
        let endIndex = startIndex + number;
        if (endIndex <= cards.length) {
            peekingCards = cards.slice(startIndex, endIndex);
            console.log("Ok", peekingCards);
        }
        else {
            endIndex = endIndex - cards.length;
            peekingCards = cards.slice(startIndex, cards.length).concat(cards.slice(0, endIndex));
            console.log("Nok", peekingCards);
        }
        this.toggleFutureModal(!this.state.showFutureModal);
    }

    onSubmitAction = (seqs) => {
        let deck = this.props.decks[peekingDeckName];
        console.log("seqs", seqs, deck);
        let cards = deck.cards;
        let startIndex = deck.currentIndex + 1;
        let offset = 0;
        let seq_length = Object.keys(seqs).length;
        if (startIndex + seq_length > cards.length)
            offset = startIndex + seq_length - cards.length
        console.log('offset', offset);
        let new_cards = cards.slice(0 + offset, startIndex);
        // for (let i = 0; i < seq_length; i++) {
        //     console.log(i, startIndex, seqs[i], offset);
        //     console.log(cards[startIndex + seqs[i] - 1], peekingCards[i]);
        //     // cards[startIndex + seqs[i]] = peekingCards[i];
        // }
        for (let i = 0; i < seq_length; i++) {
            new_cards.push({});
        }
        for (let i = 0; i < seq_length; i++) {
            new_cards[startIndex - offset + seqs[i] - 1] = peekingCards[i];
        }
        if (offset == 0)
            new_cards = new_cards.concat(cards.slice(startIndex + seq_length, cards.length + 1));
        console.log("onSubmitAction", cards, new_cards);
        this.props.decks[peekingDeckName].cards = new_cards;
        this.props.decks[peekingDeckName].currentIndex -= offset;
    }

    render() {
        const {
            decks,
            showStats,
            numPlayers,
            scenarioLevel,
            boss
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
                        submitAction={(seqs) =>
                            this.onSubmitAction(seqs)
                        }
                        peekingDeckName={peekingDeckName}
                        peekingCards={peekingCards}
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
