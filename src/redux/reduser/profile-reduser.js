import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  name: "No name",
}

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserName: (state, action) => ({
      ...state,
      name: action.payload,
    })
  }
})

const { actions, reducer } = profile

export const { setUserName } = actions
export const profileReducer = reducer