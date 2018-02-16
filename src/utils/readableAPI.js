const BASE_URL = 'http://localhost:3001';

/**
 * Get all post categories available
 * @returns {Promise}
 */
function getCategories() {
  return fetch(BASE_URL + '/categories', {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Get all of the posts for a particular category
 * @param {string} category
 * @returns {Promise}
 */
function getPostsByCategory(category) {
  return fetch(BASE_URL + '/' + category + '/posts', {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Get all of the posts
 * @returns {Promise}
 */
function getPosts() {
  return fetch(BASE_URL + '/posts', {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Add a new port
 * @param {{id: string, timestamp: Date, title: string, body: string, author: string, category: string}} post
 * @returns {Promise}
 */
function addPost(post) {
  return fetch(BASE_URL + '/posts', {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => res.json());
}

/**
 * Get the details of a single post
 * @param {string} id
 * @returns {Promise}
 */
function getPost(id) {
  return fetch(BASE_URL + '/posts' + id, {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Used for voting on a post
 * @param {string} id
 * @param {"upvote" | "downvote"} vote
 * @returns {Promise}
 */
function votePost(id, vote) {
  return fetch(BASE_URL + '/posts/' + id, {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(res => res.json());
}

/**
 * Edit the details of an existing post
 * @param {string} id
 * @param {{title: string, body: string}} postUpdate
 * @returns {Promise}
 */
function updatePost(id, postUpdate) {
  return fetch(BASE_URL + '/posts' + id, {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'PUT',
  }).then(res => res.json());
}

/**
 * Sets the deleted flag for a post to 'true'.
 * Sets the parentDeleted flag for all child comments to 'true'
 * @param {string} id
 * @returns {Promise}
 */
function deletePost(id) {
  return fetch(BASE_URL + '/posts' + id, {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'DELETE',
  }).then(res => res.json());
}

/**
 * Get all the comments for a single post.
 * @param {string} postId
 * @returns {Promise}
 */
function getCommentsByPost(postId) {
  return fetch(BASE_URL + '/posts' + postId + '/comments', {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Add a comment to a post
 * @param {string} id
 * @param {{id: string, timestamp: Date, body: string, author: string, postId: string}} comment
 * @returns {Promise}
 */
function addComment(id, comment) {
  return fetch(BASE_URL + '/comments', {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': "application/json"
    },
    method: 'POST',

  }).then(res => res.json());
}

/**
 * Get the details for a single comment
 * @param {string} id
 * @returns {Promise}
 */
function getComment(id) {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: {
      Authorization: 'readable-app'
    },
    method: 'GET',
  }).then(res => res.json());
}

/**
 * Add a comment to a post
 * @param {string} id
 * @param {"downVote" | "upVote"} vote
 * @returns {Promise}
 */
function voteComment(id, vote) {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json'
    },
    method: 'POST',
  }).then(res => res.json());
}

/**
 * Add a comment to a post
 * @param {string} id
 * @param {{timestamp: string, body: string}} commentUpdate
 * @returns {Promise}
 */
function updateComment(id, commentUpdate) {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: {
      Authorization: 'readable-app',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
  }).then(res => res.json());
}

/**
 * Sets a comment's deleted flag to true
 * @param {string} id
 * @returns {Promise}
 */
function deleteComment(id) {
  return fetch(BASE_URL + '/comments/' + id, {
    headers: {
      Authorization: 'readable-app'
    },
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