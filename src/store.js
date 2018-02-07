import { createStore } from 'redux';
import index from './reducers/index';

const store = createStore(index);

export default store;
