import { combineReducers, createStore } from 'redux';
import { applyMiddleware } from 'redux'
import { reducer as players } from './players';
import { reducer as summons } from './summons';
import { reducer as attackModifierDecks } from './attackModifierDecks';
import { reducer as elements } from './elements';
import { reducer as boss } from './boss';
import { reducer as monsters } from './monsters';
import { reducer as monsterDecks } from './monsterDecks';
import { reducer as turn } from './turn';

const asyncDispatchMiddleware = store => next => action => {
  let syncActivityFinished = false;
  let actionQueue = [];

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });

  const res = next(actionWithAsyncDispatch);
  // console.log('next(actionWithAsyncDispatch)', res);
  syncActivityFinished = true;
  flushQueue();
  return res;
};

export const store = createStore(
  combineReducers({
    players,
    summons,
    attackModifierDecks,
    elements,
    boss,
    monsters,
    monsterDecks,
    turn
  }), applyMiddleware(asyncDispatchMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
