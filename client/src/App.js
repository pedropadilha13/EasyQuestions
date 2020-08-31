import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/common/Header';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

import Sets from './pages/Sets';

import './css/style.css';

class App extends React.Component {
  render() {
    console.log(history);
    return (
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <Route path='/profile' exact component={Profile} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/sets' exact component={Sets} />
          <Route path='/' exact component={Home} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}

export default App;
