// @flow
import { Dispatch } from 'redux';

import { Comment } from '../utils/flowTypes';
import * as API from '../utils/readableAPI';
import {
  FETCH_COMMENTS_BY_POST_SUCCESS,
  ADD_COMMENT_SUCCESS,
  FETCH_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  FAILURE,
} from './types';

export function fetchCommentsByPost(postId: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.getCommentsByPost(postId);
      dispatch({
        type: FETCH_COMMENTS_BY_POST_SUCCESS,
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

export function fetchComment(id: string) {
  return (dispatch: Dispatch) => {
    API.getComment(id)
      .then(response => {
        dispatch({
          type: FETCH_COMMENT_SUCCESS,
          payload: response,
        });
      })
      .catch(err =>
        dispatch({
          type: FAILURE,
          payload: { failure: true },
        })
      );
  };
}

export function addComment(comment: Comment) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.addComment(comment);
      dispatch({ type: ADD_COMMENT_SUCCESS, payload: response });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}

export function voteComment(id: string, vote: 'upVote' | 'downVote') {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.voteComment(id, vote);
      dispatch({ type: VOTE_COMMENT_SUCCESS, payload: response });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}

export function updateComment(
  id: string,
  commentUpdate: { author: string, body: string }
) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.updateComment(id, commentUpdate);
      dispatch({ type: UPDATE_COMMENT_SUCCESS, payload: response });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}

export function deleteComment(id: string) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.deleteComment(id);
      dispatch({ type: DELETE_COMMENT_SUCCESS, payload: response });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: { failure: true },
      });
    }
  };
}
