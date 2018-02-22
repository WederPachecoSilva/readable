// @flow

import { Dispatch } from 'redux';

import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS_BY_CATEGORY_SUCCESS,
  FETCH_POSTS_BY_CATEGORY_FAILURE,
  FETCH_ALL_POSTS,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_FAILURE,
} from './types';
import { getPosts, getPostsByCategory } from '../utils/readableAPI';

export function fetchPostsByCategory(category: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FETCH_POSTS_BY_CATEGORY });
      const response = await getPostsByCategory(category);
      dispatch({
        type: FETCH_POSTS_BY_CATEGORY_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: FETCH_POSTS_BY_CATEGORY_FAILURE });
    }
  };
}

export function fetchAllPosts() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FETCH_ALL_POSTS });
      const response = await getPosts();
      dispatch({
        type: FETCH_ALL_POSTS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: FETCH_ALL_POSTS_FAILURE });
    }
  };
}
