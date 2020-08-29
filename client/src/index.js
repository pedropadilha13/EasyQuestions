import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import axios from 'axios';

import reducers from './reducers';

import App from './components/App';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

//window.axios = axios;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
    <NotificationContainer />
  </Provider>,
  document.querySelector('#root')
);
