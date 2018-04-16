/**
 *  Pure function that returns a new object without the property passed as
 *  second parameter.
 * @param {any} object
 * @param {string} property
 * @returns {any}
 */
export const deleteProperty = (object, property) =>
  Object.keys(object).reduce(
    (acc, key) =>
      key !== property
        ? {
            ...acc,
            [key]: object[key],
          }
        : acc,
    {}
  );

/**
 * Sort an array of dates
 * @param {'ascendant' | 'descendant'} type
 * @param {object[]} posts
 */
export const sortByDate = (type, posts) => {
  switch (type) {
    case 'descendant':
      return posts.sort(
        (post1, post2) => (post1.timestamp > post2.timestamp ? 1 : -1)
      );

    case 'ascendant':
      return posts.sort(
        (post1, post2) => (post1.timestamp < post2.timestamp ? -1 : 1)
      );

    default:
      return;
  }
};

/**
 * Sort an array by likes
 * @param {object[]} posts
 */
export const sortByLikes = posts =>
  posts.sort((post1, post2) => (post1.likeCount < post2.likeCount ? 1 : -1));
