import React from 'react';
import { connect } from 'react-redux';

import { login, errorServer } from '../redux/reduser/auth-reduser';

import { Title, MainContent } from '../ui';
import { Modal, withAuthRedirect, LoginReduxForm } from '../features';

const Login = ({setUserData, isErrorServer, errorServer}) => {
  const submit = values => {
    console.log(values)
    setUserData(values.email, values.password)
  }

  const closeModal = () => {
    errorServer(false)
  }

  return (
    <MainContent>
      <Title large center>Login</Title>
      <LoginReduxForm onSubmit={submit}/>
      {isErrorServer &&
        <Modal
          title={'Oops'}
          text={'Something went wrong, try again later'}
          close={closeModal}
        />
      }
    </MainContent>
  )
}

let LoginRedirect = withAuthRedirect(Login)

let mapStateToProps = (state) => {
  return {
    isErrorServer: state.auth.isErrorServer,
  }
}

let mapDispatchToProps = (dispatch) => ({
  setUserData: (email, password) => {dispatch(login(email, password))},
  errorServer: (isErrorServer) => {dispatch(errorServer(isErrorServer))}
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginRedirect)
