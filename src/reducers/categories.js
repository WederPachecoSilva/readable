// @flow

import { Action } from 'redux';

import { Comment, Comments } from '../utils/flowTypes';
import { FETCH_CATEGORIES_SUCCESS } from '../actions/types';

const categories = (state: Comments | [] = [], action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default categories;
