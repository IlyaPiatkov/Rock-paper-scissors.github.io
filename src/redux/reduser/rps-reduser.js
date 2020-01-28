const CHOICE_ELEMENT = 'USER-CHOICE'

let initialState = {
  userChoise: 'no choise',
  randomChoise: 'no choise',
  winner: 'no winner default',
  userCount: 0,
  compCount: 0,
}

const rpsReduser = (state = initialState, action) => {

  switch(action.type) {
    case CHOICE_ELEMENT: {
      console.log(action.winner.win);
      
      let stateCopy = { 
        ...state,
        userChoise: action.idButton,
        winner: action.winner.textWins,
        userCount: action.winner.win 
          ? ++action.winner.userCount 
          : action.winner.userCount,
        compCount: action.winner.win 
        ? action.winner.compCount 
        : ++action.winner.compCount,
        randomChoise: action.randomChoise
      }
      return stateCopy
    }

    default:
      return state
  }
}

export const choiceElement = (id, result, randomChoise) => {
  return (
    {
      type: CHOICE_ELEMENT,
      idButton: id,
      winner: result,
      randomChoise,
    }
  )
}


export default rpsReduser
