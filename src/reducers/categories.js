// @flow

import { Action } from 'redux';

import { Categories } from '../utils/flowTypes';
import {
  FETCH_CATEGORIES_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
} from '../actions/types';

const categories = (state: Categories | {} = {}, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      return payload;

    case DELETE_CATEGORY_SUCCESS:
    case ADD_CATEGORY_SUCCESS:
      return { ...state, [payload.id]: payload };

    default:
      return state;
  }
};

export default categories;
