// @flow

export interface Category {
  name: string;
  path: string;
}

export interface Post {
  id: string;
  timestamp: number;
  title: string;
  body: string;
  author: string;
  category: string;
  voteScore: number;
  deleted: boolean;
  commentCount: number;
}

export interface Comment {
  id: string;
  parentId: string;
  timestamp: number;
  body: string;
  author: string;
  voteScore: number;
  deleted: boolean;
  parentDeleted: boolean;
}

export interface Posts {
  [id: string]: Post;
}

export interface Categories {
  [index: number]: Category;
}

export interface Comments {
  [id: string]: Comment;
}

// Actions that were rejected
export interface Failures {
  fetchCategoriesFailure: boolean;
  fetchPostsByCategoryFailure: boolean;
  fetchAllPostasFailure: boolean;
  addPostFailure: boolean;
  fetchPostFailure: boolean;
  votePostFailure: boolean;
  deletePostFailure: boolean;
  fetchCommentsByPostFailure: boolean;
  addCommentFailure: boolean;
  fetchCommentFailure: boolean;
  voteCommentFailure: boolean;
  updateCommentFailure: boolean;
  deleteCommentFailure: boolean;
}
