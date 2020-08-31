import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import setsReducer from './setsReducer';
import questionsReducer from './questionsReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  sets: setsReducer,
  questions: questionsReducer
});
