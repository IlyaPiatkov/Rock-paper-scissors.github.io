const USER_NAME = 'USER-NAME'

let initialState = {
  name: "No name",
}

const profileReduser = (state = initialState, action) => {
  switch(action.type) {
    case USER_NAME:
      let stateCopy = {
        ...state,
        name: action.name,
      }

      return stateCopy

    default:
      return state
  }
}

export const setUserName = (name) => ({type: USER_NAME, name})

export default profileReduser