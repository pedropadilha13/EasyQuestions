import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { NotificationManager } from 'react-notifications';

import { fetchCurrentUser, updateProfile } from '../actions';

import UserForm from '../components/forms/UserForm';

import Container from 'react-bootstrap/Container';

class Profile extends Component {
  state = {};

  componentDidMount() {
    console.log('profile mounted');
    this.props.fetchCurrentUser();
  }

  componentWillUnmount() {
    console.log('profile will unmount');
  }

  handleSubmit = newValues => {
    this.props.updateProfile(newValues);
  };

  render() {
    console.log('PROFILE RENDEEEEEEEER');
    return (
      <Container className='w-25 mt-15'>
        <h1 className='text-center'>Profile</h1>
        <UserForm
          initialValues={this.props.auth}
          onSubmit={this.handleSubmit}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { fetchCurrentUser, updateProfile })(
  Profile
);
