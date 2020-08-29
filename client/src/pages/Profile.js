import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchCurrentUser, updateProfile } from '../../actions';

import UserForm from '../forms/UserForm';

import Container from 'react-bootstrap/Container';
import Spinner from '../common/Spinner';
import Alert from 'react-bootstrap/Alert';

class Profile extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  handleSubmit = newValues => {
    this.props.updateProfile(newValues);
  };

  render() {
    if (this.props.auth) {
      return (
        <Container className='w-25 mt-15'>
          <h1 className='text-center'>Profile</h1>
          <UserForm
            initialValues={this.props.auth}
            onSubmit={this.handleSubmit}
          />
        </Container>
      );
    } else if (this.props.auth === false) {
      return <Redirect to='/' />;
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { fetchCurrentUser, updateProfile })(
  Profile
);
