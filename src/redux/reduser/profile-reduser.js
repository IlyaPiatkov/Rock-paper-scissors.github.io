import { createSlice } from "@reduxjs/toolkit"

const profile = createSlice({
  name: "profile",
  initialState: {
    userId: "player",
    userName: null
  },
  reducers: {
    setUserName: (state, action) => ({
      // TODO breakingChange
      ...state,
      userName: action.payload
    }),
    setUserId: (state, action) => ({
      // TODO breakingChange
      ...state,
      userId: action.payload.toString()
    }),
    setProfileData: (state, action) => ({
      ...state,
      userId: action.payload.userId.toString(),
      userName: action.payload.userName
    })
  }
})

const { actions, reducer } = profile

export const { setUserName, setUserId, setProfileData } = actions
export const profileReducer = reducer
