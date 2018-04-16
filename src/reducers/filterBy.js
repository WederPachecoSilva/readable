import {
  FILTER_BY_LIKES,
  FILTER_BY_OLDER,
  FILTER_BY_YOUNGER,
} from '../actions/types';

const filterBy = (state = FILTER_BY_OLDER, action) => {
  switch (action.type) {
    case FILTER_BY_OLDER:
    case FILTER_BY_YOUNGER:
    case FILTER_BY_LIKES:
      return action.type;

    default:
      return state;
  }
};

export default filterBy;
