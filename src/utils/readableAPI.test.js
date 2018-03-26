/**
 * Considering that all data provided by the server
 * is static (hard coded, not stored in a database)
 * there is no problem in hard coding all expectation data
 * instead of mocking http requests. In fact, it gives the
 * oportunity to have a much better precision of result,
 * considering we are using the actual request, not a fake
 * one. It worths mention that these tests will only work
 * the first time we start the serverTo reset the data
 * you just need to restart the server.
 */

import * as API from './readableAPI';
import fetchMock from 'fetch-mock';

import extend from './matchers';

describe('Readable API calls', () => {
  const { arrayContaining, objectContaining } = expect;

  expect.extend(extend);

  it('Should get all categories', async () => {
    const response = await API.getCategories();
    // @ts-ignore
    expect(response).toHaveProperties(['categories']);
  });

  it('Should get the right posts by category', async () => {
    const posts = await API.getPostsByCategory('react');
    expect(posts).toEqual([
      {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
      },
    ]);
  });

  it('Should get all posts', async () => {
    const posts = await API.getPosts();
    expect(posts).toEqual([
      {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2,
      },
      {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
      },
    ]);
  });

  it('Should add a post', async () => {
    const time = Date.now();
    const postObj = {
      id: '35435sd46',
      timestamp: time,
      title: 'teste',
      body: 'testando',
      author: 'weder',
      category: 'react',
    };
    // const post = JSON.stringify(...postObj);
    const response = await API.addPost(postObj);
    // @ts-ignore
    expect(response).toHaveProperties([
      'commentCount',
      'voteScore',
      'deleted',
      'id',
      'timestamp',
      'title',
      'body',
      'author',
      'category',
    ]);
  });

  it('Shoud get a specific post', async () => {
    const id = '6ni6ok3ym7mf1p33lnez';
    const post = await API.getPost(id);
    expect(post).toEqual({
      id: '6ni6ok3ym7mf1p33lnez',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology.',
      author: 'thingone',
      category: 'redux',
      voteScore: -5,
      deleted: false,
      commentCount: 0,
    });
  });
});
