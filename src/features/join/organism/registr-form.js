import React from "react"
import { Field, reduxForm } from "redux-form"
import { useTranslation } from "react-i18next"

import { FormContainer, ButtonDefault, FormError } from "../../../ui"
import {
  ElementInput,
  required,
  minLength,
  email,
  ElementCheckbox
} from "../../common"

const DefaultInput = ElementInput("input")
const Checkbox = ElementCheckbox("input")

const minLength5 = minLength(5)

const RegistrForm = ({ handleSubmit, error }) => {
  const [t] = useTranslation(["common", "auth"])

  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && <FormError small> {error} </FormError>}

      <Field
        label={t("auth:label.email")}
        name="email"
        id="email"
        component={DefaultInput}
        type="email"
        placeholder={t("auth:placeholder.exampleEmail")}
        validate={[required, email]}
      />

      <Field
        label={t("auth:label.password")}
        name="password"
        id="password"
        component={DefaultInput}
        type="password"
        placeholder={t("auth:placeholder.password")}
        validate={[required, minLength5]}
      />

      <Field
        label={t("auth:termsAndConditions")}
        name="rules"
        component={Checkbox}
        validate={[required]}
      />

      <ButtonDefault type="submit">{t("common:registration")}</ButtonDefault>
    </FormContainer>
  )
}

export const RegistrReduxForm = reduxForm({ form: "registr" })(RegistrForm)
