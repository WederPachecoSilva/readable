// @flow

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

export interface Posts {
  [id: string]: Post;
}

export interface Category {
  name: string;
  path: string;
}

export interface Categories {
  [index: number]: Categories;
}

export interface Comment {
  id: string;
  parentId: string;
  timestamp: number;
  body: string;
  author: string;
  voteScore: number;
  deleted: boolean;
  parentDeleted: number;
}

export interface Comments {
  [id: string]: Comment;
}

// Actions that are still pending
export interface Pendings {
  fetchingCategories: boolean;
  fetchingPostsByCategory: boolean;
  fetchingAllPostas: boolean;
  addingPost: boolean;
  fetchingPost: boolean;
  votingPost: boolean;
  deletingPost: boolean;
  fetchingCommentsByPost: boolean;
  addingComment: boolean;
  fetchingComment: boolean;
  votingComment: boolean;
  updatingComment: boolean;
  deletingComment: boolean;
}

// Actions that were rejected
export interface Rejecteds {
  fetchCategoriesRejected: boolean;
  fetchPostsByCategoryRejected: boolean;
  fetchAllPostasRejected: boolean;
  addPostRejected: boolean;
  fetchPostRejected: boolean;
  votePostRejected: boolean;
  deletePostRejected: boolean;
  fetchCommentsByPostRejected: boolean;
  addCommentRejected: boolean;
  fetchCommentRejected: boolean;
  voteCommentRejected: boolean;
  updateCommentRejected: boolean;
  deleteCommentRejected: boolean;
}

/*
  how state is structured after normalization
  state = {
    categories: {
      byId: {
        "1": {
          id: "1",
          name: 'react',
          path: 'react',
          posts: ["8xf0y6ziyjabvozdd253nd"]
        },
        "2": {
          id: "2",
          name: 'redux',
          path: 'redux',
          posts: ["6ni6ok3ym7mf1p33lnez"]
        }
      },
      allIds: [1, 2],
    },
    posts: {
      byId: {
        "8xf0y6ziyjabvozdd253nd": {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2,
          comments: ["894tuq4ut84ut8v4t8wun89g", "8tu4bsun805n8un48ve89"]
        },
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0,
        comments: []
      },
      allIds: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez"],
    },
    comments: {
      byId: {
        "894tuq4ut84ut8v4t8wun89g": {
          id: '894tuq4ut84ut8v4t8wun89g',
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1468166872634,
          body: 'Hi there! I am a COMMENT.',
          author: 'thingtwo',
          voteScore: 6,
          deleted: false,
          parentDeleted: false
        },
        "8tu4bsun805n8un48ve89": {
          id: '8tu4bsun805n8un48ve89',
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1469479767190,
          body: 'Comments. Are. Cool.',
          author: 'thingone',
          voteScore: -5,
          deleted: false,
          parentDeleted: false
        }
      },
      allIds: ["894tuq4ut84ut8v4t8wun89g", "8tu4bsun805n8un48ve89"]
    }
  }
*/
