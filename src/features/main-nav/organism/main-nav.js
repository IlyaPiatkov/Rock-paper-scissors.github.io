import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { MainList, MainItem, buttonStyle } from '../../../ui'
import styled from 'styled-components'

const MainLink = styled(NavLink)`
  ${buttonStyle}
`

const MainNav = ({isAuth}) => {
  return (
    <MainList>
      <MainItem>
        <MainLink to='rock-paper-scissors' default>Rock Paper Scissors</MainLink>
      </MainItem>
      <MainItem>
        <MainLink to='rps-options' default>RPS options</MainLink>
      </MainItem>
      <MainItem>
        <MainLink to='rps-rules' default>RPS rules</MainLink>
      </MainItem>
      {!isAuth && (
        <MainItem>
          <MainLink to='login' default>Login</MainLink>
        </MainItem>
      )}
      
    </MainList>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => ({
  // choiceElement: (id, getResultGame, name) => {dispatch(choiceElement(id, getResultGame, name))},
})

export const MainNavContainer = connect(mapStateToProps, mapDispatchToProps)(MainNav)
