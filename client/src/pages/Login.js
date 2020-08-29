import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import LoginForm from '../forms/LoginForm';

import { connect } from 'react-redux';

import { signIn, fetchCurrentUser } from '../../actions';

const Login = ({ fetchCurrentUser, signIn, auth }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleSubmit = values => {
    signIn(values);
  };

  if (auth === null) {
    return (
      <Spinner className='spinner-center' animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  } else if (auth !== null && auth.isSignedIn === true) {
    return <Redirect to='/dashboard' />;
  } else {
    return (
      <Container className='w-25 mt-15'>
        <LoginForm
          onSubmit={handleSubmit}
          errorMessage={auth && auth.errorMessage}
        />
      </Container>
    );
  }
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { signIn, fetchCurrentUser })(Login);
