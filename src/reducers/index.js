// @flow

import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';
import comments from './comments';
import failure from './failure';
import filterBy from './filterBy';

const index = combineReducers({
  categories,
  posts,
  comments,
  failure,
  filterBy,
});

export default index;
