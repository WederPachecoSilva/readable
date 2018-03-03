// @ts-check

import { Action } from 'redux';

import categories from './categories';
import { FETCH_CATEGORIES_SUCCESS } from '../actions/types';

const defaultState = {
  categories: [
    {
      name: 'react',
      path: 'react',
    },
    {
      name: 'redux',
      path: 'redux',
    },
    {
      name: 'udacity',
      path: 'udacity',
    },
  ],
};

describe('Categories reducer', () => {
  it('Should fetch all categories', () => {
    const payload = {
      categories: [
        {
          name: 'react',
          path: 'react',
        },
        {
          name: 'redux',
          path: 'redux',
        },
        {
          name: 'udacity',
          path: 'udacity',
        },
      ],
    };

    const expectation = {
      categories: [
        {
          name: 'react',
          path: 'react',
        },
        {
          name: 'redux',
          path: 'redux',
        },
        {
          name: 'udacity',
          path: 'udacity',
        },
      ],
    };

    const action = { type: FETCH_CATEGORIES_SUCCESS, payload };
    expect(categories(defaultState, action)).toEqual(expectation);
  });

  it('Should return default state', () => {
    const action = { type: 'NO_EXISTING_ACTION' };

    expect(categories(defaultState, action)).toEqual(defaultState);
  });
});
