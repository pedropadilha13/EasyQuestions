import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './common/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

import '../css/style.css';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
