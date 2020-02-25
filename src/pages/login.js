import React from 'react';
import { connect } from 'react-redux';

import { Title } from '../ui';
import { LoginReduxForm } from '../features/join/organism/login-form';
import { login } from '../redux/reduser/auth-reduser';

const Login = ({setLoginData}) => {
  const submit = values => {
    console.log(values)
    setLoginData(values.emeil, values.password)
  }

  return (
    <>
      <Title large center>Login</Title>
      <LoginReduxForm onSubmit={submit}/>
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    name: state.profile.name,
    isAuth: state.profile.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => ({
  setLoginData: (emeil, password) => {dispatch(login(emeil, password))},
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)
