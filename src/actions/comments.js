// @flow
import { Dispatch } from 'redux';

import { getCommentsByPost } from '../utils/readableAPI';
import {
  FETCH_COMMENTS_BY_POST,
  FETCH_COMMENTS_BY_POST_SUCCESS,
  FETCH_COMMENTS_BY_POST_FAILURE,
} from './types';

export function fetchCommentsByPost(postId: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: FETCH_COMMENTS_BY_POST });
      const response = await getCommentsByPost(postId);
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
