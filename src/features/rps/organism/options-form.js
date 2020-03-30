import React from "react"
import { Field, reduxForm } from "redux-form"
import { useTranslation } from "react-i18next"

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

const RPSOptionsForm = ({ handleSubmit, modeList }) => {
  const [t] = useTranslation(["common"])

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Field
        label={t("common:label.firstName")}
        name="firstName"
        id="firstName"
        component={defaultInput}
        type="text"
        placeholder={t("common:placeholder.firstName")}
        validate={[required, maxLength15, minLength2]}
      />

      <FormFieldset>
        <FormLabel as="legend" medium>
          {t("common:label.participants")}
        </FormLabel>
        <FormRadioWrap>
          <Field
            label="1"
            name="enemies"
            component={RadioInput}
            type="radio"
            value="1"
          />
          <Field
            label="2"
            name="enemies"
            component={RadioInput}
            type="radio"
            value="2"
          />
          <Field
            label="3"
            name="enemies"
            component={RadioInput}
            type="radio"
            value="3"
          />
        </FormRadioWrap>
      </FormFieldset>
      <FormFieldset>
        <FormLabel as="legend" medium>
          {t("common:label.modeGame")}
        </FormLabel>
        <FormRadioWrap>
          {modeList.map((item, key) => (
            <Field
              label={t(`common:label.${item}`)}
              name="modeGame"
              component={RadioInput}
              type="radio"
              value={item}
              key={key}
            />
          ))}
        </FormRadioWrap>
      </FormFieldset>

      <ButtonDefault>{t("common:save")}</ButtonDefault>
    </FormContainer>
  )
}

export const RPSOptionsReduxForm = reduxForm({
  form: "rpsOptions"
})(RPSOptionsForm)
