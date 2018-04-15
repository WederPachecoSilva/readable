// @flow

import { Dispatch } from 'redux';

import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
} from './types';
import * as API from '../utils/readableAPI';
import { Category } from '../utils/flowTypes';

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
        payload: {
          fetchCategoriesFailure: true,
        },
      });
    }
  };
};

export const addCategory = (category: Category) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.addCategory(category);
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: ADD_CATEGORY_FAILURE,
        payload: {
          addCategoryFailure: true,
        },
      });
    }
  };
};

export const deleteCategory = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.deleteCategory(id);
      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CATEGORY_FAILURE,
        payload: {
          deleteCategoryFailure: true,
        },
      });
    }
  };
};
