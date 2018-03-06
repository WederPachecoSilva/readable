// @flow

import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';
import comments from './comments';
import failures from './failures';

const index = combineReducers({ categories, posts, comments, failures });

export default index;
