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
export const sortDate = (type, dates) => {
  switch (type) {
    case 'ascendent':
      return dates.sort((date1, date2) => (date1 > date2 ? 1 : -1));

    case 'descendent':
      return dates.sort((date1, date2) => (date1 > date2 ? -1 : 1));

    default:
      return;
  }
};
