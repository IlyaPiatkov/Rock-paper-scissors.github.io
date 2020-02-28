import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { MainList, buttonStyle } from '../../../ui'
import styled from 'styled-components'

const MainLink = styled(NavLink)`
  ${buttonStyle}
`

const MainNav = ({isAuth}) => {
  return (
    <MainList>
      <li>
        <MainLink to='rock-paper-scissors' default>Rock Paper Scissors</MainLink>
      </li>
      <li>
        <MainLink to='rps-options' default>RPS options</MainLink>
      </li>
      <li>
        <MainLink to='rps-rules' default>RPS rules</MainLink>
      </li>
      {/* {!isAuth && (
      )} */}
      
    </MainList>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

// let mapDispatchToProps = (dispatch) => ({

// })

export const MainNavContainer = connect(mapStateToProps)(MainNav)
