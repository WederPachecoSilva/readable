// @ts-check

import {
  FETCH_ALL_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  FETCH_POST_SUCCESS,
  VOTE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
} from '../actions/types';
import posts from './posts';

const getDefaultState = () => ({
  '1': {
    id: 1,
    timestamp: 2,
    title: 'as',
    body: 'asd',
    author: 'as',
    category: 'as',
    voteScore: 3,
    deleted: false,
    commentCount: 2,
  },
  '2': {
    id: 2,
    timestamp: 2,
    title: 'aass',
    body: 'asfdsdd',
    author: 'asdsds',
    category: 'asds',
    voteScore: 0,
    deleted: false,
    commentCount: 0,
  },
});

describe('Posts reducer', () => {
  it('Should return all posts', () => {
    const action = {
      type: FETCH_ALL_POSTS_SUCCESS,
      payload: getDefaultState(),
    };
    expect(
      posts(
        {
          a: 2,
        },
        action
      )
    ).toEqual(getDefaultState());
  });

  it('Should add a post', () => {
    const payload = {
      id: 3,
      timestamp: 2,
      title: 'afss',
      body: 'asfdsgfdd',
      author: 'asdsgfds',
      category: 'assdds',
      voteScore: 0,
      deleted: false,
      commentCount: 0,
    };
    const action = { type: ADD_POST_SUCCESS, payload };

    const expected = {
      '1': {
        id: 1,
        timestamp: 2,
        title: 'as',
        body: 'asd',
        author: 'as',
        category: 'as',
        voteScore: 3,
        deleted: false,
        commentCount: 2,
      },
      '2': {
        id: 2,
        timestamp: 2,
        title: 'aass',
        body: 'asfdsdd',
        author: 'asdsds',
        category: 'asds',
        voteScore: 0,
        deleted: false,
        commentCount: 0,
      },
      '3': {
        id: 3,
        timestamp: 2,
        title: 'afss',
        body: 'asfdsgfdd',
        author: 'asdsgfds',
        category: 'assdds',
        voteScore: 0,
        deleted: false,
        commentCount: 0,
      },
    };
    expect(posts(getDefaultState(), action)).toEqual(expected);
  });
});
