// @flow

/**
 *  Pure function that returns a new object without the property passed as
 *  second parameter.
 */
export const deleteProperty = (object: any, property: string) =>
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
