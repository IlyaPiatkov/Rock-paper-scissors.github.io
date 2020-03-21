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
  getPlayersInfo,
  getRound,
  getCurrentWinner
} from "../redux/selectors/rps-selector"

const GameRPS = ({
  ModeGameList,
  isLoading,
  setResultGame,
  currentChoice,
  winnerText,
  enemyPlayers,
  currentPlayer,
  playersInfo,
  round,
  currentWinner
}) => {
  let clickHandler = event => {
    const choiceUser = event.target.id
    setResultGame(
      choiceUser,
      ModeGameList,
      currentPlayer,
      enemyPlayers,
      round,
      currentWinner
    )
  }

  return (
    <>
      <RPSContainer>
        <RPSHeader
          playersInfo={playersInfo}
          winnerText={winnerText}
          round={round}
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
    playersInfo: getPlayersInfo(state),
    round: getRound(state),
    currentWinner: getCurrentWinner(state)
  }
}

let mapDispatchToProps = dispatch => ({
  setResultGame: (
    choiceUser,
    ModeGameList,
    currentPlayer,
    enemyPlayers,
    round,
    currentWinner
  ) =>
    dispatch(
      setResultGame(
        choiceUser,
        ModeGameList,
        currentPlayer,
        enemyPlayers,
        round,
        currentWinner
      )
    )
})

export const GameRPSContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRPS)
