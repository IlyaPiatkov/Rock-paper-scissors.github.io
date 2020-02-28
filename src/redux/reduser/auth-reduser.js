import { authAPI } from "../../api/api"

const SET_LODIN_DATA = 'SET_LODIN_DATA'
const ERROR_SERVER = 'ERROR_SERVER'

let initialState = {
  email: null,
  isAuth: false,
  isErrorServer: false,
}

const authReduser = (state = initialState, action) => {
  switch(action.type) {
    case SET_LODIN_DATA: {
      let stateCopy = {
        ...state,
        userId: action.userId,
        isAuth: action.isAuth,
        email: action.email,
      }

      return stateCopy
    }

    case ERROR_SERVER: {
      let stateCopy = {
        ...state,
        isErrorServer: action.isErrorServer,
      }

      return stateCopy
    }

    default:
      return state
  }
}

// action
const setLoginData = (userId, email, isAuth) => ({type: SET_LODIN_DATA, userId, email, isAuth})
export const errorServer = (isErrorServer) => ({type: ERROR_SERVER, isErrorServer})

// Thunk
export const login = (email, password) => {
  return (dispatch) => {
    authAPI.login(email, password)
      .then((response) => {
        if (response.data.resultCode === 0) {
          const {userId} = response.data.data
          dispatch(setLoginData(userId, email, true))
        }
      })
      .catch((error) => {
        dispatch(errorServer(true))
        console.warn(error);
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setLoginData(null, null, false))
        }
      })
      .catch((error) => {
        dispatch(errorServer(true))
        console.warn(error);
      })
  }
}

export default authReduser
