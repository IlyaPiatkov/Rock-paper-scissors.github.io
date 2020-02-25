import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const MainList = styled.ul`
  list-style: none;

  > :nth-child(n+2) {
    margin-top: 1rem;
  }
`

const MainItem = styled.li`
  text-align: center;
`

const MainLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  color: #fff;
  background-color: #000;
  text-decoration: none;

  &:hover {
    background-color: #2d2d2d;
  }
`

export const MainNav = () => {
  return (
    <MainList>
      <MainItem>
        <MainLink to='rock-paper-scissors'>Rock Paper Scissors</MainLink>
      </MainItem>
      <MainItem>
        <MainLink to='rps-options'>rps options</MainLink>
      </MainItem>
      <MainItem>
        <MainLink to='login'>Login</MainLink>
      </MainItem>
    </MainList>
  )
}