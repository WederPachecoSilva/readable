// @flow

import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from './types';
import { Dispatch } from 'redux';
import * as API from '../utils/readableAPI';

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.getCategories();
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        payload: { fetchCategoriesFailure: true },
      });
    }
  };
};
