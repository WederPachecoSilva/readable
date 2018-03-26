// @flow

import type { Action } from 'redux';

import {
  FETCH_COMMENTS_BY_POST_SUCCESS,
  ADD_COMMENT_SUCCESS,
  FETCH_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
} from '../actions/types';
import type { Comments } from '../utils/flowTypes';

const comments = (state: Comments | {} = {}, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_COMMENTS_BY_POST_SUCCESS:
      return payload.reduce((acc, comment) => {
        acc[comment.id] = comment;
        return acc;
      }, {});

    case DELETE_COMMENT_SUCCESS:
    case FETCH_COMMENT_SUCCESS:
    case UPDATE_COMMENT_SUCCESS:
    case VOTE_COMMENT_SUCCESS:
    case ADD_COMMENT_SUCCESS:
      return { ...state, [payload.id]: payload };

    default:
      return state;
  }
};

export default comments;
