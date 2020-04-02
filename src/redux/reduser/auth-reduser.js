import { stopSubmit } from "redux-form"
import { createSlice } from "@reduxjs/toolkit"

import { authAPI } from "../../api/api"
import { setUserId } from "./profile-reduser"

const auth = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    email: null,
    access: null,
    refresh: null,
    isAuth: false,
    isErrorServer: false,
    isLoad: false
  },
  reducers: {
    setUserData: (state, action) => ({
      ...state,
      userId: action.payload.userId.toString(),
      email: action.payload.email,
      access: action.payload.access,
      refresh: action.payload.refresh,
      isAuth: action.payload.isAuth
    }),
    errorServer: (state, action) => ({
      ...state,
      isErrorServer: action.payload
    }),
    initialization: (state, action) => ({
      ...state,
      isLoad: action.payload
    })
  }
})

const { actions, reducer } = auth

export const { setUserData, errorServer, initialization } = actions
export const authReducer = reducer

// Thunk
export const login = (email, password) => async dispatch => {
  try {
    const response = await authAPI.login(email, password)

    if (response.data.resultCode === 0) {
      const { userId, access, refresh } = response.data.data
      dispatch(setUserData({ userId, email, access, refresh, isAuth: true }))
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

export const relogin = () => async (dispatch, getState) => {
  try {
    const refresh = getState().auth.refresh
    const response = await authAPI.relogin(refresh)

    if (response.data.resultCode === 0) {
      const { access, refresh } = response.data.data
      dispatch(setUserData({ access, refresh, isAuth: true }))
    } else {
      console.warn("error relogin")
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
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
