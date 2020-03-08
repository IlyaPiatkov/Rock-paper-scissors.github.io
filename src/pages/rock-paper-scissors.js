import React from "react"
import { connect } from "react-redux"

import {
  choiceElement,
  setPlayers,
  setResultGame
} from "../redux/reduser/rps-reduser"

import { RPSHeader, RPSButtons, RPSContainer, Loader } from "../ui"
import { getModeGameList } from "../redux/selectors/selectors"
import {
  getScore,
  getCurrentChoice,
  getWinnerText,
  getPlayers
} from "../redux/selectors/rps-selector"

const GameRPS = ({
  compChoice,
  userChoice,
  userCount,
  userName,
  modeGame,
  isLoading,
  setResultGame,
  compScore,
  currentChoice,
  winnerText,
  players
}) => {
  let clickHandler = event => {
    const choiceUser = event.target.id

    setResultGame(choiceUser, modeGame, players)
  }

  return (
    <>
      <RPSContainer>
        <RPSHeader
          userChoice={userChoice}
          userCount={userCount}
          userName={userName}
          compChoice={compChoice}
          compScore={compScore}
          currentChoice={currentChoice}
          winnerText={winnerText}
        />
        <RPSButtons names={modeGame} onClick={clickHandler} />
      </RPSContainer>
      {isLoading && <Loader />}
    </>
  )
}

let mapStateToProps = state => {
  return {
    compCount: state.rps.compCount,
    compChoice: state.rps.compChoice,
    userChoice: state.rps.userChoice,
    userCount: state.rps.userCount,
    userName: state.profile.name,
    winner: state.rps.winner,
    isLoading: state.rps.isLoading,
    modeGame: getModeGameList(state),
    compScore: getScore(state),
    currentChoice: getCurrentChoice(state),
    winnerText: getWinnerText(state),
    players: getPlayers(state)
  }
}

let mapDispatchToProps = dispatch => ({
  choiceElement: (id, getResultGame, name) =>
    dispatch(choiceElement(id, getResultGame, name)),
  setPlayers: arrPlayers => dispatch(setPlayers(arrPlayers)),
  setResultGame: (choiceUser, modeGame) =>
    dispatch(setResultGame(choiceUser, modeGame))
})

export const GameRPSContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRPS)
