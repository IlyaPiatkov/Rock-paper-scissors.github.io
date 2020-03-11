import { createSlice } from "@reduxjs/toolkit"
import * as R from "ramda"

import { generatorName, resultGame } from "../../features/rps"

const players = createSlice({
  name: "players",
  initialState: {
    player: { score: 0, currentChoice: null },
    bot1: { score: 0, currentChoice: null }
  },
  reducers: {
    addPlayers: (state, action) =>
      action.payload.reduce(
        (acc, item) => ({ ...acc, [item]: { score: 0, currentChoice: null } }),
        {}
      ),
    removePlayers: () => {},
    resetPlayer: state =>
      Object.keys(state).reduce(
        (acc, keyPlayer) => ({
          ...acc,
          [keyPlayer]: { score: 0, currentChoice: null }
        }),
        {}
      ),
    incrementScorePlayer: (state, action) =>
      R.over(R.lensPath([action.payload.userId, "score"]), R.inc, state),
    setChoicePlayer: (state, action) =>
      R.set(
        R.lensPath([action.payload.userId, "currentChoice"]),
        action.payload.choice,
        state
      )
  }
})

const { actions, reducer } = players

export const { addPlayers, incrementScorePlayer, setChoicePlayer } = actions
export const playersReducer = reducer

const game = createSlice({
  name: "currentGame",
  initialState: {
    currentWinner: null,
    rounds: 0,
    winnerText: "",
    isLoading: false
  },
  reducers: {
    resetWinners: () => ({ currentWinner: null, rounds: 0 }),
    setWinners: (state, action) =>
      R.set(R.lensProp("currentWinner"), action.payload.userId, state),
    setRounds: state => R.over(R.lensProp("rounds"), R.inc, state),
    setWinnerText: (state, action) => ({
      ...state,
      winnerText: action.payload
    }),
    toggleIsLoading: (state, action) => ({
      ...state,
      isLoading: action.payload
    })
  }
})

const { actions: actions1, reducer: reducer1 } = game

export const {
  setWinners,
  setRounds,
  setWinnerText,
  toggleIsLoading
} = actions1
export const gameReducer = reducer1

export const setPlayers = (players, currentPlayer) => {
  return dispatch => {
    let arrPlayers = [currentPlayer]

    for (let i = 1; i < players; i++) {
      arrPlayers.push(`bot${i}`)
    }
    dispatch(addPlayers(arrPlayers))
  }
}

export const setResultGame = (
  choiceUser,
  ModeGameList,
  currentPlayer,
  enemyPlayers
) => {
  return dispatch => {
    // dispatch(toggleIsLoading(true))
    // debugger

    let choiceEnemyPlayers = enemyPlayers.map(item => ({
      userId: item,
      choice: generatorName(ModeGameList)
    }))

    choiceEnemyPlayers.push({
      userId: currentPlayer,
      choice: choiceUser
    })

    const winners = resultGame(choiceEnemyPlayers, ModeGameList)

    choiceEnemyPlayers.map(item => dispatch(setChoicePlayer(item)))

    dispatch(setWinners({ userId: winners }))
    dispatch(setRounds())
    if (winners) {
      winners.map(item => dispatch(incrementScorePlayer({ userId: item })))
    }
    dispatch(setWinnerText(winners ? `Winner ${winners}` : `No winner`))
    // dispatch(toggleIsLoading(false))
  }
}
