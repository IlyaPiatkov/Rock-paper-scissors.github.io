import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  isOpenMenu: false,
}

const mainMenu = createSlice({
  name: "mainMenu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      let stateCopy = { ...state }
      state.isOpenMenu
        ? stateCopy.isOpenMenu = false
        : stateCopy.isOpenMenu = true

      return stateCopy
    }
  }
})

const { actions, reducer } = mainMenu

export const { toggleMenu } = actions
export const mainMenuReducer = reducer