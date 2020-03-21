import React from "react"
import styled, { css, keyframes } from "styled-components"
import { Icon } from "../icon"

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 10px;
`

const Block = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px 10px;

  ${p =>
    p.left &&
    css`
      grid-template-areas:
        "name name"
        "counter avatar"
        "choise choise";
    `}
  ${p =>
    p.right &&
    css`
      grid-template-areas:
        "name name"
        "avatar counter"
        "choise choise";
    `}

  ${p =>
    p.disabled &&
    css`
      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 8rem;
        width: 1rem;
        height: 100%;
        background-color: #000;
      }

      &::after {
        transform: rotate(45deg);
      }

      &::before {
        transform: rotate(-45deg);
      }
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

const roundScale = keyframes`
  from {
    font-size: 0rem;
    opacity: 1;
  }
  to {
    font-size: 10rem;
    opacity: 0;
  }
`

const Round = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  max-width: 32rem;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: ${roundScale} 2s ease forwards;
`

export const RPSHeader = ({ playersInfo, winnerText, round }) => {
  return (
    <Header>
      {playersInfo.map((item, key) => {
        let positionBlock = key === 0 || key === 2 ? true : false
        let iconName = item[0] !== `bot${key}` ? "user" : "bot"
        let disabled = !item[1].isWinPrevRound && round !== 1 ? true : false

        return (
          <Block
            right={positionBlock}
            left={!positionBlock}
            key={key}
            disabled={disabled}
          >
            <Name>{item[1].name ? item[1].name : item[0]}</Name>
            <Avatar>
              <Icon name={iconName} />
            </Avatar>
            <Counter>{item[1].score}</Counter>
            <Choice>{item[1].currentChoice}</Choice>
          </Block>
        )
      })}
      <Winner>{winnerText}</Winner>
      <Round>
        Round <br />
        {round}
      </Round>
    </Header>
  )
}
