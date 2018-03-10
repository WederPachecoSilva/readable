// @flow

import type { Action } from 'redux';

import {
  FETCH_CATEGORIES_FAILURE,
  ADD_CATEGORY_FAILURE,
  DELETE_CATEGORY_FAILURE,
  FETCH_POSTS_BY_CATEGORY_FAILURE,
  FETCH_ALL_POSTS_FAILURE,
  ADD_POST_FAILURE,
  FETCH_POST_FAILURE,
  VOTE_POST_FAILURE,
  UPDATE_POST_FAILURE,
  DELETE_POST_FAILURE,
  FETCH_COMMENTS_BY_POST_FAILURE,
  ADD_COMMENT_FAILURE,
  FETCH_COMMENT_FAILURE,
  VOTE_COMMENT_FAILURE,
  DELETE_COMMENT_FAILURE,
} from '../actions/types';
import type { Failures } from '../utils/flowTypes';

const failures = (state: Failures | {} = {}, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES_FAILURE:
    case ADD_CATEGORY_FAILURE:
    case DELETE_CATEGORY_FAILURE:
    case FETCH_POSTS_BY_CATEGORY_FAILURE:
    case FETCH_ALL_POSTS_FAILURE:
    case ADD_POST_FAILURE:
    case FETCH_POST_FAILURE:
    case VOTE_POST_FAILURE:
    case UPDATE_POST_FAILURE:
    case DELETE_POST_FAILURE:
    case FETCH_COMMENTS_BY_POST_FAILURE:
    case ADD_COMMENT_FAILURE:
    case FETCH_COMMENT_FAILURE:
    case VOTE_COMMENT_FAILURE:
    case DELETE_COMMENT_FAILURE:
      return { ...state, payload };

    default:
      return state;
  }
};

export default failures;
