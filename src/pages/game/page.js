import React, { useEffect } from "react"
import { connect } from "react-redux"

import { setResultGame, setPlayers } from "../../redux/reduser/rps-reduser"

import { getModeGameList, getEnemies } from "../../redux/selectors/selectors"
import {
  getWinnerText,
  getEnemyPlayers,
  getCurrentPlayer,
  getPlayersInfo,
  getRound,
  getCurrentWinner
} from "../../redux/selectors/rps-selector"

import { RPSHeader, RPSButtons, RPSContainer, Loader } from "../../ui"
import { CommonContentTemplate } from "../../features"

const Game = ({
  ModeGameList,
  isLoading,
  setResultGame,
  setPlayers,
  winnerText,
  enemyPlayers,
  currentPlayer,
  playersInfo,
  round,
  currentWinner,
  enemies
}) => {
  useEffect(() => {
    setPlayers(enemies, currentPlayer)
  }, [setPlayers, enemies, currentPlayer])

  let clickHandler = event => {
    const choiceUser = event.target.id
    setResultGame(
      choiceUser,
      ModeGameList,
      currentPlayer,
      enemyPlayers,
      currentWinner
    )
  }

  return (
    <CommonContentTemplate>
      <RPSContainer>
        <RPSHeader
          playersInfo={playersInfo}
          winnerText={winnerText}
          round={round}
        />
        <RPSButtons names={ModeGameList} onClick={clickHandler} />
      </RPSContainer>
      {isLoading && <Loader />}
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    isLoading: state.game.isLoading,
    ModeGameList: getModeGameList(state),
    winnerText: getWinnerText(state),
    enemyPlayers: getEnemyPlayers(state),
    currentPlayer: getCurrentPlayer(state),
    playersInfo: getPlayersInfo(state),
    round: getRound(state),
    currentWinner: getCurrentWinner(state),
    enemies: getEnemies(state)
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
    ),
  setPlayers: (players, currentPlayer) =>
    dispatch(setPlayers(players, currentPlayer))
})

export const GamePage = connect(mapStateToProps, mapDispatchToProps)(Game)
