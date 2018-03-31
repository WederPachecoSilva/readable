// @flow

export interface Category {
  id: string;
  name: string;
  path: string;
  timestamp: number;
}

export interface Post {
  id: string;
  timestamp: number;
  title: string;
  body: string;
  author: string;
  category: string;
  upVote?: number;
  downVote?: number;
  deleted: boolean;
  commentCount: number;
}

export interface Comment {
  id: string;
  parentId: string;
  timestamp: number;
  body: string;
  author: string;
  upvote?: number;
  downVote?: number;
  deleted?: boolean;
  parentDeleted?: boolean;
}

export interface Posts {
  [id: string]: Post;
}

export interface Categories {
  [id: string]: Category;
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
