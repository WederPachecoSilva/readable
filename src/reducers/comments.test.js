// @ts-check

import {
  FETCH_COMMENTS_BY_POST_SUCCESS,
  ADD_COMMENT_SUCCESS,
  FETCH_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
} from '../actions/types';
import comments from './comments';

const defaultState = {
  '894tuq4ut84ut8v4t8wun89g': {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false,
  },
  '8tu4bsun805n8un48ve89': {
    id: '8tu4bsun805n8un48ve89',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false,
  },
};

describe('Comments reducer', () => {
  it('Should add a comment', () => {
    const payload = {
      id: '123qwer',
      parentId: 'werq',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'weder',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const expectation = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
      '123qwer': {
        id: '123qwer',
        parentId: 'werq',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'weder',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
    };
    const action = { type: ADD_COMMENT_SUCCESS, payload };
    expect(comments(defaultState, action)).toEqual(expectation);
  });

  it('Should fetch comments by post', () => {
    const payload = [
      {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
    ];

    const expectation = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
    };

    const action = { type: FETCH_COMMENTS_BY_POST_SUCCESS, payload };
    expect(comments(defaultState, action)).toEqual(expectation);
  });

  it('Should fetch a comment', () => {
    const payload = {
      id: '123qwer',
      parentId: 'werq',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'weder',
      voteScore: -5,
      deleted: false,
      parentDeleted: false,
    };

    const expectation = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
      '123qwer': {
        id: '123qwer',
        parentId: 'werq',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'weder',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
    };

    const action = { type: FETCH_COMMENT_SUCCESS, payload };
    expect(comments(defaultState, action)).toEqual(expectation);
  });

  it('Should vote a comment', () => {
    const payload = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: 0,
      deleted: false,
      parentDeleted: false,
    };

    const expectation = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: 0,
        deleted: false,
        parentDeleted: false,
      },
    };

    const action = { type: VOTE_COMMENT_SUCCESS, payload };
    expect(comments(defaultState, action)).toEqual(expectation);
  });

  it('Should update a comment', () => {
    const payload = {
      id: '894tuq4ut84ut8v4t8wun89g',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1468166872634,
      body: 'Hi.',
      author: 'thingtwo',
      voteScore: 6,
      deleted: false,
      parentDeleted: false,
    };

    const expectation = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
      '8tu4bsun805n8un48ve89': {
        id: '8tu4bsun805n8un48ve89',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false,
      },
    };

    const action = { type: UPDATE_COMMENT_SUCCESS, payload };
    expect(comments(defaultState, action)).toEqual(expectation);
  });

  it('Should delete a comment', () => {
    const payload = {
      id: '8tu4bsun805n8un48ve89',
      parentId: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: true,
      parentDeleted: false,
    };

    const expectation = {
      '894tuq4ut84ut8v4t8wun89g': {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false,
      },
    };
    const action = { type: DELETE_COMMENT_SUCCESS, payload };
    expect(comments(defaultState, action)).toEqual(expectation);
  });
});
