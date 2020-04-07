import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"
import styled, { css, keyframes } from "styled-components"

import { buttonStyle } from "../button"

const run = keyframes`
  0% {
    transform: translate(100%);
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
`

const runBack = keyframes`
  0% {
    transform: translate(0);
    opacity: 1;
  }
  100% {
    transform: translate(100%);
    opacity: 0;
  }
`

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-areas:
    "header"
    "list"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  justify-content: center;
  align-items: center;
  padding: 4rem 4rem 4rem 35%;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #262626;

  ${props =>
    props.isOpen &&
    css`
      && {
      }
    `}
`

const List = styled.ul`
  grid-area: list;
  list-style: none;
  animation: ${p => (p.isOpen ? run : runBack)} 0.5s;
`

const Item = styled.li`
  padding: 8px 0;
  text-align: right;
`

const Link = styled(NavLink)`
  color: #fff;
  display: inline-block;
  font-size: 18px;
`

const Overlay = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  width: 35%;
  height: 100%;
  border: none;
  background-color: transparent;
`

const Header = styled.header`
  grid-area: header;
  animation: ${p => (p.isOpen ? run : runBack)} 0.5s;
`

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  animation: ${p => (p.isOpen ? run : runBack)} 0.5s;
`

const ButtonJoin = styled(NavLink)`
  ${buttonStyle}

  color: #fff;
`

const Menu = ({ isAuth, openMenu, handleClickMenu }) => {
  const [t] = useTranslation(["common"])

  return openMenu.isClose ? (
    <>
      <Overlay button="button" onClick={handleClickMenu} />
      <NavBar>
        <Header isOpen={openMenu.isOpen}></Header>
        <List isOpen={openMenu.isOpen}>
          <Item>
            <Link to="/Intro">Intro</Link>
          </Item>
          <Item>
            <Link to="/Services">Services</Link>
          </Item>
          <Item>
            <Link to="/Team">Team</Link>
          </Item>
          <Item>
            <Link to="/Pricing">Pricing</Link>
          </Item>
        </List>
        <Footer isOpen={openMenu.isOpen}>
          {isAuth ? (
            <ButtonJoin as="button" ghost>
              logout
            </ButtonJoin>
          ) : (
            <>
              <ButtonJoin to="login">{t("common:login")}</ButtonJoin>
              <ButtonJoin to="registration">
                {t("common:registration")}
              </ButtonJoin>
            </>
          )}
        </Footer>
      </NavBar>
    </>
  ) : (
    ""
  )
}

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const MainMenu = connect(mapStateToProps)(Menu)
