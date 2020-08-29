import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default () => (
  <Spinner className='spinner-center' animation='border' role='status'>
    <span className='sr-only'>Loading...</span>
  </Spinner>
);
