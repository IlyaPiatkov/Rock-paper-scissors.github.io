import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

import { CommonContentTemplate } from "../../features"
import { MainList, buttonStyle } from "../../ui"

const MainLink = styled(NavLink)`
  ${buttonStyle}
`

const Home = ({ isAuth }) => {
  return (
    <CommonContentTemplate>
      <MainList>
        <li>
          <MainLink to="game" default>
            Single game
          </MainLink>
        </li>
        <li>
          <MainLink to={isAuth ? "search" : "registration"} default>
            Multiplayer game
          </MainLink>
        </li>
        <li>
          <MainLink to="options" default>
            Options
          </MainLink>
        </li>
        <li>
          <MainLink to="rules" default>
            Rules
          </MainLink>
        </li>
        {/* {!isAuth && (
        )} */}
      </MainList>
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

// let mapDispatchToProps = (dispatch) => ({

// })

export const HomePage = connect(mapStateToProps)(Home)
