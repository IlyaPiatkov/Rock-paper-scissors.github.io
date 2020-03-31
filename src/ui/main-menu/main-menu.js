import React from "react"
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem 5rem 35%;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #262626;
  // background-color: #000;
  opacity: 0;
  transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: scale(0);

  ${props =>
    props.isOpenMenu &&
    css`
      && {
        opacity: 1;
        transform: scale(1);

        li {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}
`

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`
  padding: 8px 0;
  transition: all 400ms 510ms;
  opacity: 0;

  &:nth-child(odd) {
    transform: translateX(30%);
  }

  &:nth-child(even) {
    transform: translateX(-30%);
  }
`

const Link = styled(NavLink)`
  color: #19b698;
  display: inline-block;
  font-size: 18px;
`
export const MainMenu = ({ openMenu }) => {
  return openMenu.isClose ? (
    <NavBar isOpenMenu={openMenu}>
      <List>
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
    </NavBar>
  ) : (
    ""
  )
}
