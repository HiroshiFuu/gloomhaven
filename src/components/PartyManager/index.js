import React from 'react';
import { connect } from 'react-redux';

import { loadPartyAction } from '../../store/actions/party';

import './index.css';

class PartyManagerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            savedData: JSON.parse(localStorage.getItem('party')),
            partyNameInput: '',
            selectedParty: ''
        };
        console.log('PartyManagerComponent', this.props);
    }

    saveParty() {
        console.log('saveParty this.props', this.props);
        const partyData = Object.entries(this.props.players).reduce(
            (acc, [playerName, player]) => {
                console.log('saveParty player', player);
                const deck = this.props.attackModifierDecks[playerName];
                acc[playerName] = {
                    name: playerName,
                    class: player.class,
                    level: player.level,
                    perkUsage: deck.perkUsage,
                    minusOneCards: deck.minusOneCards,
                    xp: player.xp
                };
                return acc;
            },
            {}
        );
        const monstersData = Object.entries(this.props.monsters).reduce(
            (acc, [monsterName, monsters]) => {
                console.log('saveParty monsters', monsters);
                acc[monsterName] = monsters;
                return acc;
            },
            {}
        );
        const partyName = `${
            this.state.partyNameInput
        } - ${new Date().toLocaleDateString()}`;
        const newSavedData = {
            ...this.state.savedData,
            [partyName]: [partyData, monstersData]
        };
        console.log('saveParty newSavedData', newSavedData);
        localStorage.setItem('party', JSON.stringify(newSavedData));
        this.setState({
            savedData: newSavedData,
            selectedParty: this.state.selectedParty
                ? this.state.selectedParty
                : partyName
        });
    }

    selectParty(selectedParty) {
        this.setState({ selectedParty });
    }

    loadParty() {
        this.setState({
            partyNameInput: this.state.selectedParty.split(' - ')[0]
        });
        this.props.loadParty(this.state.savedData[this.state.selectedParty]);
    }

    deleteParty() {
        const newSavedData = { ...this.state.savedData };
        delete newSavedData[this.state.selectedParty];
        localStorage.setItem('party', JSON.stringify(newSavedData));
        this.setState({
            savedData: newSavedData,
            selectedParty: ''
        });
    }

    render() {
        return (
            <div>
                <div className="PartyManager--section">
                    <input
                        placeholder="團隊名稱"
                        value={this.state.partyNameInput}
                        onChange={e =>
                            this.setState({ partyNameInput: e.target.value })
                        }
                    />
                    <button onClick={() => this.saveParty()}>保存团队</button>
                    <select
                        value={this.state.selectedParty}
                        onChange={event => this.selectParty(event.target.value)}
                    >
                        <option value="">選擇一個團隊</option>
                        {this.state.savedData &&
                            Object.keys(this.state.savedData).map(partyName => (
                                <option value={partyName} key={partyName}>
                                    {partyName}
                                </option>
                            ))}
                    </select>
                    <button
                        disabled={!this.state.selectedParty}
                        onClick={() => this.loadParty()}
                    >
                        讀取團隊
                    </button>
                    <button
                        disabled={!this.state.selectedParty}
                        onClick={() => this.deleteParty()}
                    >
                        刪除團隊
                    </button>
                </div>
            </div>
        );
    }
}

export const PartyManager = connect(
    state => {
        return {
            players: state.players.players,
            attackModifierDecks: state.attackModifierDecks,
            monsters: state.monsters.monsters,
            monsterDecks: state.monsterDecks,
        };
    },
    dispatch => {
        return {
            loadParty: party => loadPartyAction(dispatch, party)
        };
    }
)(PartyManagerComponent);
