import React from 'react';

import { reduxForm, Field } from 'redux-form';

import FieldInput from '../common/FieldInput';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

const UserForm = props => {
  const onSubmit = e => {
    e.preventDefault();
    if (props.valid) {
      props.submit();
    }
  };

  const renderErrorMessage = () => {
    if (props.errorMessage) {
      return <span className='text-danger mt-1'>{props.errorMessage}</span>;
    }

    return null;
  };

  return (
    <Form name='userForm' onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label htmlFor='firstName'>Nome</Form.Label>
        <Field
          component={FieldInput}
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Nome'
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Sobrenome</Form.Label>
        <Field
          component={FieldInput}
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Sobrenome'
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Field
          component={FieldInput}
          name='email'
          id='email'
          type='text'
          placeholder='exemplo@gmail.com'
        />
      </Form.Group>

      <Button variant='primary' type='submit' block>
        Atualizar Perfil
      </Button>
      {renderErrorMessage()}
    </Form>
  );
};

const validate = values => {
  const errors = {};

  if (!values.name || values.name.trim().length === 0) {
    errors.name = 'Name required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!values.email.match(EMAIL_REGEX)) {
    errors.email = 'Invalid email';
  }

  return errors;
};

export default reduxForm({
  form: 'userForm',
  validate
})(UserForm);
