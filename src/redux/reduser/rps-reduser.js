import { createSlice } from '@reduxjs/toolkit'
import * as R from 'ramda'

const CHOICE_ELEMENT = 'USER-CHOICE'
const GAME_OPTIONS = 'GAME-OPTIONS'
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'



// const rps = createSlice({
//   name: 'players',
//   initialState: {},
//   reducers: {
//     addPlayers: (_, player) => player.reduce((acc, item) => ({ ...acc, [item]: { score: 0, currentChoice: null, } }), {}),
//     removePlayers: () => {},
//     resetPlayer: (state) => Object.keys(state).reduce((acc, keyPlayer) => ({ ...acc, [keyPlayer]: { score: 0, currentChoice: null, } }), {}),
//     incrementScorePlayer: (state, keyPlayer) => R.over(R.lensPath([keyPlayer, 'score']), R.inc, state),
//     setChoicePlayer: (state, [keyPlayer, element]) => R.set(R.lensPath([keyPlayer, 'currentChoice']), element, state),
//   }
// })

// const rps = createSlice({
//   name: 'currentGame',
//   initialState: {
//     currentWinner: null,
//     rounds: 0
//   },
//   reducers: {
//     resetWinners: () => ({currentWinner: null, rounds: 0}),
//     setWinners: (state, [keyPlayer, element]) => 
//   }
// })

let initialState = {
  userChoice: 'no choise',
  compChoice: 'no choise',
  winner: 'no winner default',
  userCount: 0,
  compCount: 0,

  gameElements: ['Rock', 'Paper', 'Scissors'],
  isLoading: false,
}

const rpsReduser = (state = initialState, action) => {

  switch(action.type) {
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
        gameElements: action.newElements,
      }
      return stateCopy
    }

    case TOGGLE_IS_LOADING: {
      let stateCopy = { 
        ...state,
        isLoading: action.isLoading,
      }
      return stateCopy
    }

    default:
      return state
  }
}

// Action
const getChoiceElement = (buttonId, result, compChoice) => {
  return (
    {
      type: CHOICE_ELEMENT,
      buttonId,
      result,
      compChoice,
    }
  )
}

export const rpsOptions = () => {
  return (
    {
      type: GAME_OPTIONS,
    }
  )
}

const toggleIsLoading = (isLoading) => {
  return (
    {
      type: TOGGLE_IS_LOADING,
      isLoading,
    }
  )
}

// Thunk
export const choiceElement = (buttonId, result, compChoice) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true))

    setTimeout(() => {
      dispatch(getChoiceElement(buttonId, result, compChoice))
      dispatch(toggleIsLoading(false))
    }, 3000);
  }

}

export default rpsReduser
