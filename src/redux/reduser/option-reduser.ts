import { createSlice } from "@reduxjs/toolkit"

const MODE = {
  classic: ["Rock", "Paper", "Scissors"] as Array<string>,
  extended: ["Rock", "Paper", "Scissors", "Fire", "Water"]
}

const optionsGame = createSlice({
  name: "optionsGame",
  initialState: {
    modeGame: Object.keys(MODE)[0],
    dataGameList: MODE,
    enemies: "1"
  },
  reducers: {
    setModeGame: (state, action) => ({
      ...state,
      modeGame: action.payload
    }),
    setEnemies: (state, action) => ({
      ...state,
      enemies: action.payload
    })
  }
})

const { actions, reducer } = optionsGame

export const { setModeGame, setEnemies } = actions
export const optionsReducer = reducer

// Thunk
