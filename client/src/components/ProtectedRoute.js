import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import Spinner from './common/Spinner';

const ProtectedRoute = ({ children, auth, ...rest }) => {
  console.log('ProtectedRoute :)');
  if (auth.isSignedIn === false) {
    return <Redirect to='/' />;
  } else if (auth.isSignedIn === true) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Spinner />;
  }
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(ProtectedRoute);
