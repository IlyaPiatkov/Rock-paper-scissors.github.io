import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import { FooterWrap, buttonStyle, FooterButtons } from "../../../ui"

const MainLink = styled(NavLink)`
  ${buttonStyle}
`

const Footer = ({ isAuth }) => {
  const [t] = useTranslation(["common"])
  return (
    <>
      {!isAuth && (
        <FooterWrap>
          <FooterButtons>
            <MainLink to="login" primary="true" small="true">
              {t("common:login")}
            </MainLink>
            <MainLink to="registration" primary="true" small="true">
              {t("common:registration")}
            </MainLink>
          </FooterButtons>
        </FooterWrap>
      )}
    </>
  )
}

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

// let mapDispatchToProps = (dispatch) => ({})

export const FooterContainer = connect(mapStateToProps)(Footer)
