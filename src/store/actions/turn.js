export const END_TURN = 'endTurn';
export const END_SCENARIO = 'endScenario';

export function endTurnAction(dispatch) {
	dispatch({ type: END_TURN });
}

export function endScenarioAction(dispatch) {
	dispatch({ type: END_SCENARIO });
}
