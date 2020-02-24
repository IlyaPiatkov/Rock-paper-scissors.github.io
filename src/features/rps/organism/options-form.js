import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  required,
  maxLength,
  minLength,
  ElementInput,
  ElementRadio
} from '../../common'
import {
  FormContainer,
  FormLabel,
  FormFieldset,
  FormRadioWrap,
  ButtonDefault
} from '../../../ui';

const maxLength15 = maxLength(15)
const minLength2 = minLength(2)

const FirstName = ElementInput("input")
const numberParticipants = ElementRadio("input")

const RPSOptionsForm = (props) => {

  return (
    <FormContainer onSubmit={props.handleSubmit}>
      <Field
        label="First Name"
        name="firstName"
        id="firstName"
        component={FirstName}
        type="text"
        placeholder="Name"
        value={props.userName}
        validate={[required, maxLength15, minLength2]}
      />

      <FormFieldset>
        <FormLabel as="legend" medium>Number of Participants</FormLabel>
        <FormRadioWrap>
          <Field
            label="1"
            name="numberParticipants"
            component={numberParticipants}
            type="radio"
            value="2"
          />
          <Field
            label="2"
            name="numberParticipants"
            component={numberParticipants}
            type="radio"
            value="3"
          />
          <Field
            label="3"
            name="numberParticipants"
            component={numberParticipants}
            type="radio"
            value="4"
          />
        </FormRadioWrap>
      </FormFieldset>

      <ButtonDefault>go</ButtonDefault>
    </FormContainer>
  )
}

export const RPSOptionsReduxForm = reduxForm({
  form: "rpsOptions"
})(RPSOptionsForm)
