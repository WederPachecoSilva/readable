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
 * @param {'ascendet' | 'descendent'} type
 * @param {string[]} dates
 * @returns {string[]}
 */
export const sortByDate = (type, dates) => {
  switch (type) {
    case type === 'ascendent':
      return dates.sort((date1, date2) => (date1 > date2 ? 1 : -1));

    case type === 'descendent':
      return dates.sort((date1, date2) => (date1 < date2 ? -1 : 1));

    default:
      return;
  }
};

export const sortByLikes = (type, votes) => {
  switch (type) {
    case type === 'upVote':
      return votes.sort((vote1, vote2) => (vote1 > vote2 ? 1 : -1));

    case type === 'downVote':
      return votes.sort((vote1, vote2) => (vote1 < vote2 ? -1 : 1));

    default:
      return;
  }
};
