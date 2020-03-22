import React from "react"
import { connect } from "react-redux"

import { errorServer, login } from "../../../redux/reduser/auth-reduser"

import { Title, MainContent } from "../../../ui"
import {
  Modal,
  withAuthRedirect,
  LoginReduxForm,
  CommonContentTemplate
} from "../../../features"

const Login = ({ setUserData, isErrorServer, errorServer }) => {
  const submit = values => {
    setUserData(values.email, values.password)
  }

  const closeModal = () => {
    errorServer(false)
  }

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          Login
        </Title>
        <LoginReduxForm onSubmit={submit} />
        {isErrorServer && (
          <Modal
            title={"Oops"}
            text={"Something went wrong, try again later"}
            close={closeModal}
          />
        )}
      </MainContent>
    </CommonContentTemplate>
  )
}

let LoginRedirect = withAuthRedirect(Login)

let mapStateToProps = state => {
  return {
    isErrorServer: state.auth.isErrorServer
  }
}

let mapDispatchToProps = dispatch => ({
  setUserData: (email, password) => {
    dispatch(login(email, password))
  },
  errorServer: isErrorServer => {
    dispatch(errorServer(isErrorServer))
  }
})

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRedirect)
