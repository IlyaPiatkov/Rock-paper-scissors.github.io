import { createSlice } from "@reduxjs/toolkit"

const profile = createSlice({
  name: "profile",
  initialState: {
    name: "No name",
    userId: "player"
  },
  reducers: {
    setUserName: (state, action) => ({
      ...state,
      name: action.payload
    }),
    setUserId: (state, action) => ({
      ...state,
      userId: action.payload
    })
  }
})

const { actions, reducer } = profile

export const { setUserName, setUserId } = actions
export const profileReducer = reducer
