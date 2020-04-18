import { createSlice } from "@reduxjs/toolkit"

import { profileAPI } from "../../api/api"

const profile = createSlice({
  name: "profile",
  initialState: {
    userId: "player",
    userName: null,
    userLastName: null,
    gender: null
  },
  reducers: {
    setProfileData: (state, action) => ({
      ...state,
      userId: action.payload.userId
        ? action.payload.userId.toString()
        : "player",
      userName: action.payload.userName ?? null,
      userLastName: action.payload.userLastName ?? null,
      gender: action.payload.gender ?? null
    })
  }
})

const { actions, reducer } = profile

export const { setProfileData } = actions
export const profileReducer = reducer

// Thunk

export const sendProfileData = userData => async (dispatch, getState) => {
  try {
    const authToken = getState().auth.access
    const response = await profileAPI.setUser(authToken, userData)

    if (response.data.resultCode === 0) {
      const { userId, username } = response.data.data // TODO rename filed to userName

      dispatch(setProfileData({ userId, userName: username })) // TODO rename filed to userName
    } else {
      console.warn("error sendProfileData")
    }
  } catch (error) {
    console.warn(error)
  }
}

export const getProfileData = () => async (dispatch, getState) => {
  try {
    const authToken = getState().auth.access
    const response = await profileAPI.getUser(authToken)

    if (response.data.resultCode === 0) {
      const { userId, username } = response.data.data // TODO rename filed to userName

      dispatch(setProfileData({ userId, userName: username })) // TODO rename filed to userName
    } else {
      console.warn("error getProfileData")
    }
  } catch (error) {
    console.warn(error)
  }
}
