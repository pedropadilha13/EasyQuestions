import {
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  FETCH_CURRENT_USER
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      console.log('SIGN_IN_SUCCESS');
      return { ...state, isSignedIn: true, ...action.payload };
    case SIGN_OUT:
      return { isSignedIn: false };
    case FETCH_CURRENT_USER:
      return { ...action.payload, isSignedIn: action.payload ? true : false };
    default:
      return state;
  }
};
