import React from 'react';
import { connect } from 'react-redux';

import { setUserName } from '../redux/reduser/profile-reduser'

import { RPSOptionsReduxForm } from '../features'
import { Title, RPSOptions } from '../ui';

const OptionsRPS = ({setUserName, name}) => {

  const submit = values => {
    setUserName(values.firstName)
  }

  return (
    <RPSOptions>
      <Title large center>Options RPS</Title>
      <RPSOptionsReduxForm onSubmit={submit} userName={name}/>
    </RPSOptions>
  )
}

let mapStateToProps = (state) => {
  return {
    name: state.profile.name,
  }
}

let mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => {dispatch(setUserName(name))},
})

export const OptionsRPSContainer = connect(mapStateToProps, mapDispatchToProps)(OptionsRPS)
