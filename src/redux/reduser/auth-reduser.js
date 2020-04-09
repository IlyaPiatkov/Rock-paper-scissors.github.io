import { stopSubmit } from "redux-form"
import { createSlice } from "@reduxjs/toolkit"

import Cookies from "browser-cookies"

import { authAPI, profileAPI } from "../../api/api"
import { setProfileData } from "./profile-reduser"

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
      userId: action.payload.userId.toString(),
      email: action.payload.email,
      access: action.payload.access,
      refresh: action.payload.refresh,
      tokenExpire: action.payload.tokenExpire,
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
      dispatch(setProfileData({ userId }))

      Cookies.set(TOKENS, JSON.stringify({ access, refresh, tokenExpire }))
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

export const logout = () => async dispatch => {
  try {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
      dispatch(
        setUserData({
          userId: null,
          email: null,
          access: null,
          refresh: null,
          tokenExpire: null,
          isAuth: false
        })
      )
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
      console.log("Date.now", Date.now())
      console.log("tokenExpire", tokenExpire)
      console.log("tokenExpire > Date.now()", tokenExpire > Date.now())
      // console.log("access", access)
      // console.log("token", tokens)
      // console.log("tokenExpire", tokenExpire)
      // console.log("refresh", refresh)

      if (tokenExpire > Date.now()) {
        const response = await profileAPI.getUser(access)

        if (response.data.resultCode === 0) {
          const { userId, username } = response.data.data

          dispatch(
            setUserData({
              userId,
              access,
              refresh,
              tokenExpire,
              isAuth: true
            })
          )
          dispatch(setProfileData({ userId, userName: username })) // TODO rename filed to userName
        } else if (response.data.resultCode === 0) {
          dispatch(relogin(refresh))
        } else {
          dispatch(errorServer(true))
          console.warn("error loadSession")
        }
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
