import React from "react"
import { connect } from "react-redux"

import { setResultGame } from "../redux/reduser/rps-reduser"

import { RPSHeader, RPSButtons, RPSContainer, Loader } from "../ui"
import { getModeGameList } from "../redux/selectors/selectors"
import {
  getCurrentChoice,
  getWinnerText,
  getEnemyPlayers,
  getCurrentPlayer,
  getPlayersInfo
} from "../redux/selectors/rps-selector"

const GameRPS = ({
  userName,
  ModeGameList,
  isLoading,
  setResultGame,
  currentChoice,
  winnerText,
  enemyPlayers,
  currentPlayer,
  playersInfo
}) => {
  let clickHandler = event => {
    const choiceUser = event.target.id
    setResultGame(choiceUser, ModeGameList, currentPlayer, enemyPlayers)
  }

  return (
    <>
      <RPSContainer>
        <RPSHeader
          playersInfo={playersInfo}
          userName={userName}
          currentChoice={currentChoice}
          winnerText={winnerText}
        />
        <RPSButtons names={ModeGameList} onClick={clickHandler} />
      </RPSContainer>
      {isLoading && <Loader />}
    </>
  )
}

let mapStateToProps = state => {
  return {
    userName: state.profile.name,
    isLoading: state.game.isLoading,
    ModeGameList: getModeGameList(state),
    currentChoice: getCurrentChoice(state),
    winnerText: getWinnerText(state),
    enemyPlayers: getEnemyPlayers(state),
    currentPlayer: getCurrentPlayer(state),
    playersInfo: getPlayersInfo(state)
  }
}

let mapDispatchToProps = dispatch => ({
  setResultGame: (choiceUser, ModeGameList, currentPlayer, enemyPlayers) =>
    dispatch(
      setResultGame(choiceUser, ModeGameList, currentPlayer, enemyPlayers)
    )
})

export const GameRPSContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRPS)
