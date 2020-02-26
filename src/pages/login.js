import React from 'react';
import { connect } from 'react-redux';

import { login, errorServer } from '../redux/reduser/auth-reduser';

import { Title } from '../ui';
import { LoginReduxForm } from '../features/join/organism/login-form';
import { Modal } from '../features';

const Login = ({setLoginData, isErrorServer, errorServer}) => {
  const submit = values => {
    console.log(values)
    setLoginData(values.emeil, values.password)
  }

  const closeModal = () => {
    errorServer(false)
  }

  return (
    <>
      <Title large center>Login</Title>
      <LoginReduxForm onSubmit={submit}/>
      {isErrorServer &&
        <Modal
          title={'Oops'}
          text={'Something went wrong, try again later'}
          close={closeModal}
        />
      }
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    isErrorServer: state.auth.isErrorServer,
  }
}

let mapDispatchToProps = (dispatch) => ({
  setLoginData: (emeil, password) => {dispatch(login(emeil, password))},
  errorServer: (isErrorServer) => {dispatch(errorServer(isErrorServer))}
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
