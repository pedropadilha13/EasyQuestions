import {
  NOTIFICATION,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
  FETCH_CURRENT_USER,
  UPDATE_PROFILE,
  FETCH_QUESTION,
  FETCH_QUESTIONS,
  CREATE_QUESTION,
  EDIT_QUESTION,
  DELETE_QUESTION,
  START,
  STOP,
  FETCH_RESULT
} from './types';

import api from '../utils/api';

export const signIn = googleId => ({
  type: SIGN_IN_SUCCESS,
  payload: { googleId }
});

export const signOut = () => async dispatch => {
  await api.get('auth/logout');
  dispatch({ type: SIGN_OUT });
};

export const fetchCurrentUser = () => async dispatch => {
  const { data } = await api.get('/user');
  dispatch({ type: FETCH_CURRENT_USER, payload: data });
};

export const updateProfile = userData => async dispatch => {
  const { data } = await api.put('/user', { ...userData });
  dispatch({ type: FETCH_CURRENT_USER, payload: data });
};
