// @flow

import { Dispatch } from 'redux';

import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_ALL_POSTS,
  FETCHING,
  FAILURE,
} from './types';
import { getPosts, getPostsByCategory } from '../utils/readableAPI';

export function fetchPostsByCategory(category: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FETCHING });
      const response = await getPostsByCategory(category);
      dispatch({
        type: FETCH_POSTS_BY_CATEGORY,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: FAILURE });
    }
  };
}

export function fetchAllPosts() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FETCHING });
      const response = await getPosts();
      dispatch({
        type: FETCH_ALL_POSTS,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: FAILURE });
    }
  };
}
