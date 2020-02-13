const CHOICE_ELEMENT = 'USER-CHOICE'
const GAME_OPTIONS = 'GAME-OPTIONS'

let initialState = {
  userChoice: 'no choise',
  compChoice: 'no choise',
  winner: 'no winner default',
  userCount: 0,
  compCount: 0,
  gameElements: ['Rock', 'Paper', 'Scissors'],
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

    default:
      return state
  }
}

export const choiceElement = (buttonId, result, compChoice) => {
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


export default rpsReduser
