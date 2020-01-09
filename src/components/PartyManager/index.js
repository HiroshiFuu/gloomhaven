import React from "react";
import {connect} from "react-redux";

import {loadPartyAction} from "../../store/actions/party";

import "./index.css";

class PartyManagerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            savedData: JSON.parse(localStorage.getItem("party")),
            partyNameInput: "",
            selectedParty: "",
        };
    }

    saveParty() {
        const partyData = Object.entries(this.props.players).reduce((acc, [playerName, player]) => {
            const deck = this.props.attackModifierDecks[playerName];
            acc[playerName] = {
                name: playerName,
                class: player.class,
                level: player.level,
                perkUsage: deck.perkUsage,
                minusOneCards: deck.minusOneCards,
            };
            return acc;
        }, {});
        const partyName = `${this.state.partyNameInput} - ${new Date().toLocaleDateString()}`;
        const newSavedData = {
            ...this.state.savedData,
            [partyName]: partyData,
        };
        localStorage.setItem("party", JSON.stringify(newSavedData));
        this.setState({
            savedData: newSavedData,
            selectedParty: this.state.selectedParty ? this.state.selectedParty : partyName,
        })
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
        const newSavedData = {...this.state.savedData};
        delete newSavedData[this.state.selectedParty];
        localStorage.setItem("party", JSON.stringify(newSavedData));
        this.setState({
            savedData: newSavedData,
            selectedParty: "",
        })
    }

    render() {
        return (<div>
            <div className="PartyManager--section">
                <input
                    placeholder="Party name"
                    value={this.state.partyNameInput}
                    onChange={(e) => this.setState({partyNameInput: e.target.value})}
                />
                <button onClick={() => this.saveParty()}>Save Party</button>
                <select
                    value={this.state.selectedParty}
                    onChange={(event) => this.selectParty(event.target.value)}
                >
                    <option value="">Select a party...</option>
                    {this.state.savedData && Object.keys(this.state.savedData).map((partyName) => 
                        <option value={partyName} key={partyName}>{partyName}</option>
                    )}
                </select>
                <button disabled={!this.state.selectedParty} onClick={() => this.loadParty()}>
                    Load Party
                </button>
                <button disabled={!this.state.selectedParty} onClick={() => this.deleteParty()}>
                    Delete Party
                </button>
                </div>
        </div>);
    }
}

export const PartyManager = connect(
    (state) => {
        return {
            players: state.players.players,
            attackModifierDecks: state.attackModifierDecks,
        };
    },
    (dispatch) => {
        return {
            loadParty: (party) => loadPartyAction(dispatch, party),
        }
    }
)(PartyManagerComponent);

