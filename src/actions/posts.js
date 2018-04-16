// @flow

import { Dispatch } from 'redux';

import {
  FETCH_POSTS_BY_CATEGORY_SUCCESS,
  FETCH_ALL_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  ADD_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  FAILURE,
} from './types';
import { getPosts, getPostsByCategory } from '../utils/readableAPI';
import * as API from '../utils/readableAPI';
import type { Post } from '../utils/flowTypes';

export function fetchPostsByCategory(category: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getPostsByCategory(category);
      dispatch({
        type: FETCH_POSTS_BY_CATEGORY_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}

export function fetchAllPosts() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getPosts();
      dispatch({
        type: FETCH_ALL_POSTS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        paylaod: { failure: true },
      });
    }
  };
}

export function fetchPost(id: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.getPost(id);
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}

export function addPost(post: Post) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.addPost(post);
      dispatch({
        type: ADD_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}

export function votePost(id: string, vote: 'downVote' | 'upVote') {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.votePost(id, vote);
      dispatch({
        type: VOTE_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
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
      const response = await API.updatePost(id, postUpdate);
      dispatch({
        type: UPDATE_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}

export function deletePost(id: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.deletePost(id);
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}
