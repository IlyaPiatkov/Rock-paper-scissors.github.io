import { stopSubmit } from "redux-form"
import { createSlice, Dispatch } from "@reduxjs/toolkit"

import Cookies from "browser-cookies"

import { authAPI, ResultCodeEnum } from "../../api/api"
import { setProfileData, getProfileData } from "./profile-reduser"

const TOKENS = "token-access"

type InitialStateType = {
  userId: number | null
  email: string | null
  access: string | null
  refresh: string | null
  tokenExpire: number | null
  isAuth: boolean
  isErrorServer: boolean
  isLoad: boolean
}

const initialState: InitialStateType = {
  userId: null,
  email: null,
  access: null,
  refresh: null,
  tokenExpire: null,
  isAuth: false,
  isErrorServer: false,
  isLoad: false
}

const auth = createSlice({
  name: "auth",
  initialState,
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
export const login = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: Dispatch<any>) => {
  try {
    const data = await authAPI.login(email, password)

    if (data.resultCode === ResultCodeEnum.Success) {
      const { userId, access, refresh, tokenExpire } = data.data
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
    if (data.resultCode === ResultCodeEnum.Error) {
      let messages =
        data.messages.length > 0 ? data.messages[0] : "Common errors"
      dispatch(stopSubmit("login", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}

export const logout = () => async (dispatch: Dispatch<any>, getState: any) => {
  try {
    const authToken = getState().auth.access
    const data = await authAPI.logout(authToken)

    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(setUserData({}))
      dispatch(setProfileData({}))

      Cookies.erase(TOKENS)
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}

export const relogin = (oldRefresh: string) => async (
  dispatch: Dispatch<any>
) => {
  try {
    const data = await authAPI.relogin(oldRefresh)

    if (data.resultCode === ResultCodeEnum.Success) {
      const { access, refresh, tokenExpire } = data.data
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

export const registr = (email: string, password: string) => async (
  dispatch: Dispatch<any>
) => {
  try {
    const data = await authAPI.registr(email, password)

    if (data.resultCode === ResultCodeEnum.Success) {
      const { userId, email } = data.data
      dispatch(setUserData({ userId, email, isAuth: true }))
      dispatch(setProfileData({ userId }))
    } else {
      let messages =
        data.messages.length > 0 ? data.messages[0] : "Common errors"
      dispatch(stopSubmit("registr", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}

export const loadSession = () => async (dispatch: Dispatch<any>) => {
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
