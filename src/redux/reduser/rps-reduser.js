const CHOICE_ELEMENT = 'USER-CHOICE'
const GAME_OPTIONS = 'GAME-OPTIONS'
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'

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
