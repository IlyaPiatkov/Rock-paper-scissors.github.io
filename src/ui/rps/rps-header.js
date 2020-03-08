import React from "react"
import styled, { css } from "styled-components"
import { UserMen, Computer } from "../icon"

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 10px;
`

const Block = styled.div`
  display: grid;
  grid-gap: 20px 10px;

  ${props =>
    props.left &&
    css`
      grid-template-areas:
        "name name"
        "counter avatar"
        "choise choise";
    `}
  ${props =>
    props.right &&
    css`
      grid-template-areas:
        "name name"
        "avatar counter"
        "choise choise";
    `}
`

const Avatar = styled.div`
  grid-area: avatar;
`

const Counter = styled.div`
  grid-area: counter;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`

const Choice = styled.div`
  grid-area: choise;
  text-align: center;
`

const Name = styled.span`
  grid-area: name;
  text-align: center;
  font-size: 2rem;
`

const Winner = styled.span`
  grid-area: 2 / 1 / 3 / 3;
  font-size: 2.5rem;
  text-align: center;
`

export const RPSHeader = ({
  userCount,
  userChoice,
  userName,
  winnerText,
  compScore,
  currentChoice
}) => {
  return (
    <Header>
      <Block right>
        <Name>{userName}</Name>
        <Avatar>
          <UserMen />
        </Avatar>
        <Counter>{userCount}</Counter>
        <Choice>{userChoice}</Choice>
      </Block>
      <Block left>
        <Name>Comp</Name>
        <Avatar>
          <Computer />
        </Avatar>
        <Counter>{compScore}</Counter>
        <Choice>{currentChoice}</Choice>
      </Block>
      <Winner>{winnerText}</Winner>
    </Header>
  )
}
