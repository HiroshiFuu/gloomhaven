import React from "react";
import {connect} from "react-redux";

import {PlayerTracker} from "./PlayerTracker";
import {AddPlayer} from "./AddPlayer";
import {selectors as monstersSelectors} from "../../store/monsters";
import {selectors as playersSelectors} from "../../store/players";

import "./PlayerTrackers.css";

function PlayerTrackersComponentFunction({playerNames, hasMonstersInPlay, selectableClasses}) {
    {
        var lastPlayerKey = 0
        if (playerNames.length > 0)
            lastPlayerKey = parseInt(playerNames[playerNames.length - 1].split(" ")[1])
    }
    return (<div className="PlayerTrackers">
        {playerNames.map((p) => {
            return (<PlayerTracker key={p} name={p} />)
        })}
        {/* use key to force re-render on new player */}
        {!hasMonstersInPlay && selectableClasses.length > 0 && playerNames.length < 5 &&
            <AddPlayer
                key={lastPlayerKey + 1}
                initialPlayerNumber={lastPlayerKey + 1}
            />
        }
    </div>);
}

export const PlayerTrackers = connect(
    (state) => {
        return {
            playerNames: Object.keys(state.players.players),
            hasMonstersInPlay: monstersSelectors.hasMonstersInPlay(state),
            selectableClasses: playersSelectors.selectableClasses(state),
        };
    }
)(PlayerTrackersComponentFunction);
