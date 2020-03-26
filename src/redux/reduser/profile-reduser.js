import { createSlice } from "@reduxjs/toolkit"

const profile = createSlice({
  name: "profile",
  initialState: {
    userId: "player",
    userName: null
  },
  reducers: {
    setUserName: (state, action) => ({
      ...state,
      userName: action.payload
    }),
    setUserId: (state, action) => ({
      ...state,
      userId: action.payload.toString()
    })
  }
})

const { actions, reducer } = profile

export const { setUserName, setUserId } = actions
export const profileReducer = reducer
