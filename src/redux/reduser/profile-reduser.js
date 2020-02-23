const USER_NAME = 'USER-NAME'

let initialState = {
  name: "",
  isAuth: false,
}

const profileReduser = (state = initialState, action) => {
  switch(action.type) {
    case USER_NAME:
      let stateCopy = {
        ...state,
        name: action.name,
        isAuth: true,
      }

      return stateCopy

    default:
      return state
  }
}

export const setUserName = (name) => ({type: USER_NAME, name})

export default profileReduser