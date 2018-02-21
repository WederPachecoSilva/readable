import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import index from './reducers/index';

const store = createStore(index, applyMiddleware(ReduxThunk));

export default store;
