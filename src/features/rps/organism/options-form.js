import React from "react"
import { Field, reduxForm } from "redux-form"

import {
  required,
  maxLength,
  minLength,
  ElementInput,
  ElementRadio
} from "../../common"
import {
  FormContainer,
  FormLabel,
  FormFieldset,
  FormRadioWrap,
  ButtonDefault
} from "../../../ui"

const maxLength15 = maxLength(15)
const minLength2 = minLength(2)

const defaultInput = ElementInput("input")
const RadioInput = ElementRadio("input")

const RPSOptionsForm = ({ handleSubmit, userName, modeGame }) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Field
        label="First Name"
        name="firstName"
        id="firstName"
        component={defaultInput}
        type="text"
        placeholder="Name"
        value={userName}
        validate={[required, maxLength15, minLength2]}
      />

      <FormFieldset>
        <FormLabel as="legend" medium>
          Number of Participants
        </FormLabel>
        <FormRadioWrap>
          <Field
            label="1"
            name="numberParticipants"
            component={RadioInput}
            type="radio"
            value="2"
          />
          <Field
            label="2"
            name="numberParticipants"
            component={RadioInput}
            type="radio"
            value="3"
          />
          <Field
            label="3"
            name="numberParticipants"
            component={RadioInput}
            type="radio"
            value="4"
          />
        </FormRadioWrap>
      </FormFieldset>
      <FormFieldset>
        <FormLabel as="legend" medium>
          Mode game
        </FormLabel>
        <FormRadioWrap>
          {modeGame.map((item, key) => (
            <Field
              label={item}
              name="modeGame"
              component={RadioInput}
              type="radio"
              value={item}
              key={key}
            />
          ))}
        </FormRadioWrap>
      </FormFieldset>

      <ButtonDefault>Save</ButtonDefault>
    </FormContainer>
  )
}

export const RPSOptionsReduxForm = reduxForm({
  form: "rpsOptions"
})(RPSOptionsForm)
