import React from 'react';
import { connect } from 'react-redux';

import { errorServer, registr } from '../redux/reduser/auth-reduser';

import { Title, MainContent } from '../ui';
import { Modal, withAuthRedirect, RegistrReduxForm } from '../features';

const Registr = ({setLoginData, isErrorServer, errorServer}) => {
  const submit = values => {
    console.log(values)
    setLoginData(values.email, values.password)
  }

  const closeModal = () => {
    errorServer(false)
  }

  return (
    <MainContent>
      <Title large center>Registration</Title>
      <RegistrReduxForm onSubmit={submit}/>
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

let RegistrRedirect = withAuthRedirect(Registr)

let mapStateToProps = (state) => {
  return {
    isErrorServer: state.auth.isErrorServer,
  }
}

let mapDispatchToProps = (dispatch) => ({
  setLoginData: (email, password) => {dispatch(registr(email, password))},
  errorServer: (isErrorServer) => {dispatch(errorServer(isErrorServer))}
})

export const RegistrContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrRedirect)
