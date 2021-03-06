// @flow

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import index from '../reducers/index';
import { loadState, saveState } from './localStorage';

const cachedState = loadState();

const store = createStore(index, cachedState, applyMiddleware(ReduxThunk));

// Ignores UI and failure state
store.subscribe(throttle(() => saveState(store.getState(), 1000)));

export default store;
