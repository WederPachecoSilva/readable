import { FETCHING, FETCH_CATEGORIES, FAILURE } from './types';
import * as API from '../utils/readableAPI';

export const fetchCategories = () => {
  return async dispatch => {
    dispatch({ type: FETCHING });
    try {
      const response = await API.getCategories();
      dispatch({
        type: FETCH_CATEGORIES,
        payload: response,
      });
    } catch (error) {
      dispatch({ type: FAILURE, payload: error });
    }
  };
};
