import { stopSubmit } from "redux-form"
import { createSlice } from "@reduxjs/toolkit"

import { authAPI } from "../../api/api"
import { setUserId } from "./profile-reduser"

const auth = createSlice({
  name: "auth",
  initialState: {
    email: null,
    isAuth: false,
    isErrorServer: false,
    userId: null
  },
  reducers: {
    setUserData: (state, action) => ({
      ...state,
      userId: action.payload.userId,
      email: action.payload.email,
      isAuth: action.payload.isAuth
    }),
    errorServer: (state, action) => ({
      ...state,
      isErrorServer: action.payload
    })
  }
})

const { actions, reducer } = auth

export const { setUserData, errorServer } = actions
export const authReducer = reducer

// Thunk
export const login = (email, password) => async dispatch => {
  try {
    const response = await authAPI.login(email, password)

    if (response.data.resultCode === 0) {
      const { userId } = response.data.data
      dispatch(setUserData({ userId, email, isAuth: true }))
      dispatch(setUserId(userId))
    }
    if (response.data.resultCode === 1) {
      let messages =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Common errors"
      dispatch(stopSubmit("login", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}

export const logout = () => {
  return dispatch => {
    authAPI
      .logout()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setUserData({ userId: null, email: null, isAuth: false }))
        }
      })
      .catch(error => {
        dispatch(errorServer(true))
        console.warn(error)
      })
  }
}

export const registr = (email, password) => async dispatch => {
  try {
    const response = await authAPI.registr(email, password)

    if (response.data.resultCode === 0) {
      const { userId, email } = response.data.data
      dispatch(setUserData({ userId, email, isAuth: true }))
      dispatch(setUserId(userId))
    } else {
      let messages =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Common errors"
      dispatch(stopSubmit("registr", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}
