import { stopSubmit } from "redux-form"
import { createSlice } from "@reduxjs/toolkit"

import Cookies from "browser-cookies"

import { authAPI } from "../../api/api"
import { setProfileData, getProfileData } from "./profile-reduser"

const TOKENS = "token-access"

const auth = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    email: null,
    access: null,
    refresh: null,
    tokenExpire: null,
    isAuth: false,
    isErrorServer: false,
    isLoad: false
  },
  reducers: {
    setUserData: (state, action) => ({
      ...state,
      userId: action.payload.userId ? action.payload.userId.toString() : null,
      email: action.payload.email ?? null,
      access: action.payload.access ?? null,
      refresh: action.payload.refresh ?? null,
      tokenExpire: action.payload.tokenExpire ?? null,
      isAuth: action.payload.isAuth ?? false
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
export const login = (email, password, rememberMe) => async dispatch => {
  try {
    const response = await authAPI.login(email, password)

    if (response.data.resultCode === 0) {
      const { userId, access, refresh, tokenExpire } = response.data.data
      dispatch(
        setUserData({
          userId,
          email,
          access,
          refresh,
          tokenExpire,
          isAuth: true
        })
      )
      dispatch(getProfileData())

      if (rememberMe) {
        Cookies.set(TOKENS, JSON.stringify({ access, refresh, tokenExpire }), {
          expires: 1
          // httponly: true
        })
      } else {
        Cookies.erase(TOKENS)
      }
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

export const logout = () => async (dispatch, getState) => {
  try {
    const authToken = getState().auth.access
    const response = await authAPI.logout(authToken)

    if (response.data.resultCode === 0) {
      dispatch(setUserData({}))
      dispatch(setProfileData({}))

      Cookies.erase(TOKENS)
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}

export const relogin = oldRefresh => async dispatch => {
  try {
    const response = await authAPI.relogin(oldRefresh)

    if (response.data.resultCode === 0) {
      const { access, refresh, tokenExpire } = response.data.data
      dispatch(setUserData({ access, refresh, tokenExpire, isAuth: true }))

      Cookies.set(TOKENS, JSON.stringify({ access, refresh, tokenExpire }), {
        expires: 1
        // httponly: true
      })
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
      dispatch(setProfileData({ userId }))
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

export const loadSession = () => async dispatch => {
  try {
    const tokens = Cookies.get(TOKENS) || null

    if (tokens) {
      const { access, refresh, tokenExpire } = JSON.parse(tokens)

      if (tokenExpire > Date.now()) {
        dispatch(
          setUserData({
            access,
            refresh,
            tokenExpire,
            isAuth: true
          })
        )
        dispatch(getProfileData())
      } else {
        dispatch(relogin(refresh))
      }
    } else {
      return null
    }
  } catch (error) {
    console.warn(error)
  }
}
