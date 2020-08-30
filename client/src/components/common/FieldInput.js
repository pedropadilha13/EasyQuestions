import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

const FieldInput = ({
  input,
  meta: { touched, error, warning },
  type,
  placeholder,
  min,
  max,
  id
}) => {
  return (
    <div>
      <FormControl
        {...input}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        value={input.value}
        onChange={input.onChange}
        isInvalid={touched && (error || warning)}
        id={id}
      />
      {touched &&
        ((error && <span className='text-danger'>{error}</span>) ||
          (warning && <span className='text-warning'>{warning}</span>))}
    </div>
  );
};

export default FieldInput;
