// @flow

import { Dispatch } from 'redux';

import {
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POSTS_BY_CATEGORY_SUCCESS,
  FETCH_POSTS_BY_CATEGORY_FAILURE,
  FETCH_ALL_POSTS,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_ALL_POSTS_FAILURE,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  VOTE_POST,
  VOTE_POST_SUCCESS,
  VOTE_POST_FAILURE,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from './types';
import { getPosts, getPostsByCategory } from '../utils/readableAPI';
import * as API from '../utils/readableAPI';
import type { Post } from '../utils/flowTypes';

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

export function fetchPost(id: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ FETCH_POST });
      const response = await API.getPost(id);
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POST_FAILURE,
        payload: error,
      });
    }
  };
}

export function addPost(post: Post) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ADD_POST,
      });
      const response = await API.addPost(post);
      dispatch({
        type: ADD_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        ADD_POST_FAILURE,
      });
    }
  };
}

export function votePost(id: string, vote: 'downVote' | 'upVote') {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        VOTE_POST,
      });
      const response = await API.votePost(id, vote);
    } catch (error) {
      dispatch({
        type: VOTE_POST_FAILURE,
        payload: error,
      });
    }
  };
}

export function updatePost(
  id: string,
  postUpdate: { title: string, body: string }
) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ UPDATE_POST });
      const response = await API.updatePost(id, postUpdate);
      dispatch({
        type: UPDATE_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_POST_FAILURE,
        payload: error,
      });
    }
  };
}

export function deletePost(id: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ DELETE_POST });
      const response = await API.deletePost(id);
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: DELETE_POST_FAILURE,
        payload: error,
      });
    }
  };
}
