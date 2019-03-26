import React from 'react';
import withForm from '../../../components/withForm';
import Button from '../../../components/Button';

const formFields = [
  {
    id: 'name',
    type: 'text',
  },
  {
    id: 'email',
    type: 'email',
  },
  {
    id: 'message',
    type: 'text',
    componentClass: 'textarea'
  },
];

const validateRules = [
  {
    field: 'name',
    method: 'isAlpha',
    args: ['tr-TR'],
    validWhen: true,
  },
  {
    field: 'name',
    method: 'isByteLength',
    args: [{min: 2, max: 10}],
    validWhen: true,
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
  },
  {
    field: 'message',
    method: 'isByteLength',
    args: [{min: 2, max: 600}],
    validWhen: true,
  }
];

const state = {
  name: '',
  email: '',
  message: '',
};

const upFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const Form = ({
  FieldGroup,
  onChange,
  getValidationState,
  ...props,
}) => {
  const onSubmit = e => {
    e.preventDefault();
    document.getElementById("contact-form").reset();
    props.onSubmit();
  };
  const isValid = props.isValidate();
  return (
    <form id="contact-form" onChange={onChange} onSubmit={onSubmit}>
      {
        formFields.map((field, i) =>
          <FieldGroup
            key = {i}
            id={field.id}
            type={field.type}
            name={field.id}
            componentClass={field.componentClass}
            placeholder={upFirstLetter(field.id)}
            validationState={getValidationState(field.id)}
          />
        )
      }
      <Button disabled={!isValid} type="submit">SEND</Button>
      <Button type="reset">RESET</Button>
    </form>
  );
}

export default withForm(state)(validateRules)(Form);
