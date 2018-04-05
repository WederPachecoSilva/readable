// @flow

import { Action } from 'redux';

import {
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_POSTS_BY_CATEGORY_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  FETCH_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
} from '../actions/types';
import type { Posts } from '../utils/flowTypes';

export default function posts(state: Posts | {} = {}, action: Action) {
  const { payload, type } = action;

  switch (type) {
    case FETCH_ALL_POSTS_SUCCESS:
    case FETCH_POSTS_BY_CATEGORY_SUCCESS:
      return payload.reduce((acc, post) => {
        acc[post.id] = post;
        return acc;
      }, {});

    case DELETE_POST_SUCCESS:
    case ADD_POST_SUCCESS:
    case VOTE_POST_SUCCESS:
    case FETCH_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        [payload.id]: payload,
      };

    default:
      return state;
  }
}
