import types from './types';
import * as API from '../utils/readableAPI';

const { FETCHING, FETCH_CATEGORIES, FAILURE } = types;
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
