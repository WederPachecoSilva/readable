// @flow

import fetch from 'node-fetch';

import { BASE_URL } from '../../config';

/**
 * Get all post categories available
 */
async function getCategories() {
  const categories = await fetch(BASE_URL + '/categories', {
    headers: { Authorization: 'readable-app' },
    method: 'GET',
  }).then(res => res.json());
  return categories;
}

/**
 * Get all of the posts for a particular category
 */
function getPostsByCategory(category: string) {
  return fetch(BASE_URL + '/' + category + '/posts', {
    headers: {
      Authorization: 'readable-app',
    },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Get all of the posts
 */
function getPosts() {
  return fetch(BASE_URL + '/posts', {
    headers: { Authorization: 'readable-app' },
    method: 'GET',
  }).then(res => res.json());
}

export interface Post {
  id: string;
  timestamp: number;
  title: string;
  body: string;
  author: string;
  category: string;
}
/**
 * Add a new port
 */
function addPost(post: Post) {
  return fetch(BASE_URL + '/posts', {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(post),
  }).then(res => res.json());
}

/**
 * Get the details of a single post
 */
function getPost(id: string) {
  return fetch(BASE_URL + '/posts/' + id, {
    headers: { Authorization: 'readable-app' },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Used for voting on a post
 */
function votePost(id: string, vote: 'upVote' | 'downVote') {
  return fetch(BASE_URL + '/posts/' + id, {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(vote),
  }).then(res => res.json());
}

/**
 * Edit the details of an existing post
 */
function updatePost(id: string, postUpdate: { title: string, body: string }) {
  return fetch(BASE_URL + '/posts/' + id, {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'put',
    body: JSON.stringify(postUpdate),
  }).then(res => res.json());
}

/**
 * Sets the deleted flag for a post to 'true'.
 * Sets the parentDeleted flag for all child comments to 'true'
 */
function deletePost(id: string) {
  return fetch(BASE_URL + '/posts' + id, {
    headers: { Authorization: 'readable-app' },
    method: 'DELETE',
  }).then(res => res.json());
}

/**
 * Get all the comments for a single post.
 */
function getCommentsByPost(postId: string) {
  return fetch(BASE_URL + '/posts' + postId + '/comments', {
    headers: { Authorization: 'readable-app' },
    method: 'GET',
  }).then(res => res.json());
}

export interface Comment {
  id: string;
  timestamp: number;
  body: string;
  author: string;
  postId: string;
}

/**
 * Add a comment to a post
 */
function addComment(id: string, comment: Comment) {
  return fetch(BASE_URL + '/comments', {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(comment),
  }).then(res => res.json());
}

/**
 * Get the details for a single comment
 */
function getComment(id: string) {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: { Authorization: 'readable-app' },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Add a comment to a post
 */
function voteComment(id: string, vote: 'downVote' | 'upVote') {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(vote),
  }).then(res => res.json());
}

/**
 * Add a comment to a post
 */
function updateComment(
  id: string,
  commentUpdate: { timestamp: number, body: string }
) {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(commentUpdate),
  }).then(res => res.json());
}

/**
 * Sets a comment's deleted flag to true
 */
function deleteComment(id: string) {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: { Authorization: 'readable-app' },
    method: 'DELETE',
  }).then(res => res.json());
}

export {
  getCategories,
  getPostsByCategory,
  getPosts,
  addPost,
  getPost,
  votePost,
  updatePost,
  deletePost,
  getCommentsByPost,
  getComment,
  addComment,
  voteComment,
  updateComment,
  deleteComment,
};
