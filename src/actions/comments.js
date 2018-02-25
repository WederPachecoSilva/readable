// @flow
import { Dispatch } from 'redux';

import { Comment } from '../utils/flowTypes';
import * as API from '../utils/readableAPI';
import {
  FETCH_COMMENTS_BY_POST,
  FETCH_COMMENTS_BY_POST_SUCCESS,
  FETCH_COMMENTS_BY_POST_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  FETCH_COMMENT,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  VOTE_COMMENT,
  VOTE_COMMENT_SUCCESS,
  VOTE_COMMENT_FAILURE,
  UPDATE_COMMENT,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FALURE,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from './types';

export function fetchCommentsByPost(postId: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FETCH_COMMENTS_BY_POST });
      const response = await API.getCommentsByPost(postId);
      dispatch({
        type: FETCH_COMMENTS_BY_POST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_COMMENTS_BY_POST_FAILURE,
        payload: error,
      });
    }
  };
}

export function fetchComment(id: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_COMMENT,
    });
    API.getComment(id)
      .then(response => {
        dispatch({
          type: FETCH_COMMENT_SUCCESS,
          payload: response,
        });
      })
      .catch(err =>
        dispatch({
          type: FETCH_COMMENT_FAILURE,
          payload: err,
        })
      );
  };
}

export function addComment(id: string, comment: Comment) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ADD_COMMENT });
      const response = API.addComment(id, comment);
      dispatch({ type: ADD_COMMENT_SUCCESS, paylaod: response });
    } catch (error) {
      dispatch({ type: ADD_COMMENT_FAILURE, payload: error });
    }
  };
}

export function voteComment(id: string, vote: 'upVote' | 'downVote') {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: VOTE_COMMENT });
      const response = API.voteComment(id, vote);
      dispatch({ type: VOTE_COMMENT_SUCCESS, paylaod: response });
    } catch (error) {
      dispatch({ type: VOTE_COMMENT_FAILURE, payload: error });
    }
  };
}

export function updateComment(
  id: string,
  commentUpdate: { timestamp: number, body: string }
) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UPDATE_COMMENT });
      const response = API.updateComment(id, commentUpdate);
      dispatch({ type: UPDATE_COMMENT_SUCCESS, paylaod: response });
    } catch (error) {
      dispatch({ type: UPDATE_COMMENT_FALURE, payload: error });
    }
  };
}

export function deleteComment(id: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: DELETE_COMMENT });
      const response = API.deleteComment(id);
      dispatch({ type: DELETE_COMMENT_SUCCESS, paylaod: response });
    } catch (error) {
      dispatch({ type: DELETE_COMMENT_FAILURE, payload: error });
    }
  };
}
