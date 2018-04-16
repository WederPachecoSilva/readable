import { FAILURE } from '../actions/types';

const failure = (state = { failure: false }, action) => {
  const { type, payload } = action;

  if (type === FAILURE) {
    return payload;
  }

  return state;
};

export default failure;
