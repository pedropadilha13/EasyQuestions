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
  FETCH_RESULT,
  FETCH_SET,
  CREATE_SET,
  EDIT_SET,
  DELETE_SET
} from './types';

import api from '../utils/api';
import history from '../history';

// AUTH ACTIONS
export const signIn = googleId => ({
  type: SIGN_IN_SUCCESS,
  payload: { googleId }
});

export const signOut = () => async dispatch => {
  await api.get('auth/logout');
  dispatch({ type: SIGN_OUT });
};

// USER ACTIONS
export const fetchCurrentUser = () => async dispatch => {
  const { data } = await api.get('/user');
  dispatch({ type: FETCH_CURRENT_USER, payload: data });
};

export const updateProfile = userData => async dispatch => {
  const { data } = await api.put('/user', { ...userData });
  dispatch({ type: FETCH_CURRENT_USER, payload: data });
};

// SET ACTIONS
export const fetchSet = id => async dispatch => {
  const { data } = await api.get(`/sets/${id}`);
  dispatch({ type: FETCH_SET, payload: data });
};

export const fetchSets = () => async dispatch => {
  const { data } = await api.get('/sets');
  dispatch({ type: FETCH_SETS, payload: data });
};

export const createSet = set => async dispatch => {
  const { data } = await api.post('/sets', set);
  dispatch({ type: CREATE_SET, payload: data });
};

export const editSet = (id, set) => async dispatch => {
  const { data } = await api.put(`/sets/${id}`, set);
  dispatch({ type: EDIT_SET, payload: data });
};

export const deleteSet = id => async dispatch => {
  await api.delete(`/sets/${id}`);
  dispatch({ type: DELETE_SET, payload: id });
};

// QUESTION ACTIONS
export const fetchQuestion = id => async dispatch => {
  const { data } = await api.get(`/questions/${id}`);
  dispatch({ type: FETCH_QUESTION, payload: data });
};

export const fetchQuestions = id => async dispatch => {
  const { data } = await api.get('/questions');
  dispatch({ type: FETCH_QUESTIONS, payload: data });
};

export const createQuestion = question => async dispatch => {
  const { data } = await api.post('/questions', question);
  dispatch({ type: CREATE_QUESTION, payload: data });
};

export const editQuestion = (id, question) => async dispatch => {
  const { data } = await api.put(`/questions/${id}`, question);
  dispatch({ type: EDIT_QUESTION, payload: data });
};

export const deleteQuestion = id => async dispatch => {
  await api.delete(`/questions/${id}`);
  dispatch({ type: DELETE_QUESTION, payload: id });
};
