import React from "react"
import { connect } from "react-redux"

import { setResultGame } from "../redux/reduser/rps-reduser"

import { RPSHeader, RPSButtons, RPSContainer, Loader } from "../ui"
import { getModeGameList } from "../redux/selectors/selectors"
import {
  getCurrentChoice,
  getWinnerText,
  getPlayers,
  getEnemyPlayers,
  getCurrentPlayer,
  getFullInfoPlayers
} from "../redux/selectors/rps-selector"

const GameRPS = ({
  userName,
  modeGame,
  isLoading,
  setResultGame,
  currentChoice,
  winnerText,
  players,
  enemyPlayers,
  currentPlayer,
  fullInfoPlayers
}) => {
  let clickHandler = event => {
    const choiceUser = event.target.id
    setResultGame(choiceUser, modeGame, currentPlayer, enemyPlayers)
  }

  console.log(fullInfoPlayers)

  return (
    <>
      <RPSContainer>
        <RPSHeader
          players={players}
          userName={userName}
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
    userName: state.profile.name,
    isLoading: state.game.isLoading,
    modeGame: getModeGameList(state),
    currentChoice: getCurrentChoice(state),
    winnerText: getWinnerText(state),
    players: getPlayers(state),
    enemyPlayers: getEnemyPlayers(state),
    currentPlayer: getCurrentPlayer(state),
    fullInfoPlayers: getFullInfoPlayers(state)
  }
}

let mapDispatchToProps = dispatch => ({
  setResultGame: (choiceUser, modeGame, currentPlayer, enemyPlayers) =>
    dispatch(setResultGame(choiceUser, modeGame, currentPlayer, enemyPlayers))
})

export const GameRPSContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRPS)
