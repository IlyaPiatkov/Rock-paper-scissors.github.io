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
    case CHOICE_ELEMENT:
      console.log(action.winner);
      state.userChoise = action.idButton
      state.winner = action.winner.textWins
      state.userCount = action.winner.userCount
      state.compCount = action.winner.compCount
      state.randomChoise = action.randomChoise
      return state

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
