import React, { useEffect } from "react"
import { connect } from "react-redux"

import { setResultGame, setPlayers } from "../../redux/reduser/rps-reduser"

import { RPSHeader, RPSButtons, RPSContainer, Loader } from "../../ui"
import { getModeGameList, getAuth } from "../../redux/selectors/selectors"
import {
  getWinnerText,
  getEnemyPlayers,
  getCurrentPlayer,
  getPlayersInfo,
  getRound,
  getCurrentWinner
} from "../../redux/selectors/rps-selector"
import { CommonContentTemplate } from "../../features"

const Game = ({
  ModeGameList,
  isLoading,
  isAuth,
  setResultGame,
  setPlayers,
  winnerText,
  enemyPlayers,
  currentPlayer,
  playersInfo,
  round,
  currentWinner
}) => {
  useEffect(() => {
    console.log(isAuth)
    if (isAuth) {
      setPlayers("2", currentPlayer)
    }
    // eslint-disable-next-line
  }, [isAuth, currentPlayer])

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
    isAuth: getAuth(state)
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
