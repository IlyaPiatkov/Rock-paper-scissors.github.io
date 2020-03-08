import { createSlice } from "@reduxjs/toolkit"
import * as R from "ramda"

import { generatorName, resultGame } from "../../features/rps"

const CHOICE_ELEMENT = "USER-CHOICE"
const GAME_OPTIONS = "GAME-OPTIONS"
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING"

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
    winnerText: ""
  },
  reducers: {
    resetWinners: () => ({ currentWinner: null, rounds: 0 }),
    setWinners: (state, action) =>
      R.set(R.lensProp("currentWinner"), action.payload.userId, state),
    setRounds: state => R.over(R.lensProp("rounds"), R.inc, state),
    setWinnerText: (state, action) => ({
      ...state,
      winnerText: action.payload
    })
  }
})

const { actions: actions1, reducer: reducer1 } = game

export const { setWinners, setRounds, setWinnerText } = actions1
export const gameReducer = reducer1

let initialState = {
  userChoice: "no choise",
  compChoice: "no choise",
  winner: "no winner default",
  userCount: 0,
  compCount: 0,

  gameElements: ["Rock", "Paper", "Scissors"],
  isLoading: false
}

const rpsReduser = (state = initialState, action) => {
  switch (action.type) {
    case CHOICE_ELEMENT: {
      let stateCopy = {
        ...state,
        userChoice: action.buttonId,
        winner: action.result.textWins,
        userCount: action.result.userCount,
        compCount: action.result.compCount,
        compChoice: action.compChoice
      }
      return stateCopy
    }

    case GAME_OPTIONS: {
      let stateCopy = {
        ...state,
        gameElements: action.newElements
      }
      return stateCopy
    }

    case TOGGLE_IS_LOADING: {
      let stateCopy = {
        ...state,
        isLoading: action.isLoading
      }
      return stateCopy
    }

    default:
      return state
  }
}

// Action
const getChoiceElement = (buttonId, result, compChoice) => {
  return {
    type: CHOICE_ELEMENT,
    buttonId,
    result,
    compChoice
  }
}

const toggleIsLoading = isLoading => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading
  }
}

// Thunk
export const choiceElement = (buttonId, result, compChoice) => {
  return dispatch => {
    dispatch(toggleIsLoading(true))

    setTimeout(() => {
      dispatch(getChoiceElement(buttonId, result, compChoice))
      dispatch(toggleIsLoading(false))
    }, 0)
  }
}

export const setPlayers = arrPlayers => {
  return dispatch => {
    dispatch(addPlayers(arrPlayers))
  }
}

export const setResultGame = (choiceUser, modeGame, players) => {
  return dispatch => {
    const choiceComp = generatorName(modeGame)
    const winners = resultGame(
      { userId: "player", choice: choiceUser },
      { userId: "bot1", choice: choiceComp }
    )
    let winnerText = winners ? `Winner ${winners}` : `No winner`
    let arr = [
      { userId: "player", choice: choiceUser },
      { userId: "bot1", choice: choiceComp }
    ]
    arr.map(item => dispatch(setChoicePlayer(item)))

    dispatch(setWinners({ userId: winners }))
    dispatch(setRounds())
    if (winners) {
      dispatch(incrementScorePlayer({ userId: winners }))
    }
    dispatch(setWinnerText(winnerText))
  }
}

export default rpsReduser
