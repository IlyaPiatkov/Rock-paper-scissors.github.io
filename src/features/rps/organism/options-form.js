import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  required,
  maxLength,
  minLength,
  ElementInput, 
  ElementRadio 
} from '../../common'

const maxLength15 = maxLength(15)
const minLength2 = minLength(2)

const FirstName = ElementInput("input")
const numberParticipants = ElementRadio("input")

const RPSOptionsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
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
      </div>
      <span>number of Participants</span>
      <div>
        <Field
          label="Comp 1"
          name="numberParticipants"
          component={numberParticipants}
          type="radio"
          value="2"
          checked
        />
        <Field
          label="Comp 2"
          name="numberParticipants"
          component={numberParticipants}
          type="radio"
          value="3"
          checked
        />
        <Field
          label="Comp 3"
          name="numberParticipants"
          component={numberParticipants}
          type="radio"
          value="4"
          checked
        />
      </div>
      
      <button>go</button>
    </form>
  )
}

export const RPSOptionsReduxForm = reduxForm({
  form: "rpsOptions"
})(RPSOptionsForm)
