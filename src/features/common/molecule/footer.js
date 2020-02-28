import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import {
  FooterWrap,
  buttonStyle,
  FooterButtons
} from '../../../ui'

const MainLink = styled(NavLink)`
  ${buttonStyle}
`

const Footer = ({isAuth}) => {
  return (
    <>
      {!isAuth && (
        <FooterWrap>
          <FooterButtons>
            <MainLink to="login" primary="true" small="true">Login</MainLink>
            <MainLink to="registration" primary="true" small="true">Registration</MainLink>
          </FooterButtons>
        </FooterWrap>
      )}
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

// let mapDispatchToProps = (dispatch) => ({})

export const FooterContainer = connect(mapStateToProps)(Footer)