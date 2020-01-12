import { LOAD_PARTY } from './actions/party';
import { END_TURN } from './actions/turn';
import { END_SCENARIO } from './actions/turn';

const defaultState = 1;

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_PARTY: {
            return defaultState;
        }
        case END_TURN: {
            return state + 1;
        }
        case END_SCENARIO: {
            return 1;
        }
        default:
            return state;
    }
};
