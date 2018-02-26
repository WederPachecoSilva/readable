// @flow
import { Action } from 'redux';

import {
  FETCH_ALL_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  FETCH_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
} from '../actions/types';
import type { Posts } from '../utils/flowTypes';

export default function posts(state: Posts | {} = {}, action: Action) {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return action.payload;

    case ADD_POST_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_POST_SUCCESS:
    // return Object.assign({}, state, !state.[id].deleted )

    default:
      return state;
  }
}
