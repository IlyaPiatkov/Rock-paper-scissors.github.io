import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { FormContainer, ButtonDefault } from '../../../ui';
import {
  ElementInput,
  required,
  minLength,
  email,
} from '../../common';

const DefaultInput = ElementInput("input")

const minLength5 = minLength(5)

const LoginForm = ({handleSubmit}) => {

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Field
        label="You email"
        name="email"
        id="email"
        component={DefaultInput}
        type="email"
        placeholder="example@domain.com"
        validate={[required, email]}
      />

      <Field
        label="You password"
        name="password"
        id="password"
        component={DefaultInput}
        type="password"
        placeholder="Password"
        validate={[required, minLength5]}
      />

      <ButtonDefault type="submit">
        Enter
      </ButtonDefault>

    </FormContainer>
  )
}

export const LoginReduxForm = reduxForm(
  {form: "login"}
)(LoginForm)