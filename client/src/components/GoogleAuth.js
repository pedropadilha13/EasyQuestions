import React from 'react';
import GoogleButton from 'react-google-button';

const GoogleAuth = props => {
  return (
    <GoogleButton
      {...props}
      onClick={() => (window.location = '/api/auth/google')}
    />
  );
};

export default GoogleAuth;
