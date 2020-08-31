import _ from 'lodash';

import {
  FETCH_SET,
  FETCH_SETS,
  CREATE_SET,
  EDIT_SET,
  DELETE_SET
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SET:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_SETS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_SET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SET:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SET:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
