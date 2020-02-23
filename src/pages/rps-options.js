import React from 'react';
import { connect } from 'react-redux';

import { setUserName } from '../redux/reduser/profile-reduser'

import { RPSOptionsReduxForm } from '../features'
import { Title, RPSOptions } from '../ui';

const OptionsRPS = ({setUserName, name, isAuth}) => {

  const submit = values => {
    console.log(values)
    setUserName(values.firstName)
  }

  return (
    <RPSOptions>
      <Title large center>Options RPS</Title>
      {isAuth
        ? ""
        : <RPSOptionsReduxForm onSubmit={submit} userName={name}/>
      }
    </RPSOptions>
  )
}

let mapStateToProps = (state) => {
  return {
    name: state.profile.name,
    isAuth: state.profile.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => {dispatch(setUserName(name))},
})

const OptionsRPSContainer = connect(mapStateToProps, mapDispatchToProps)(OptionsRPS)

export default OptionsRPSContainer