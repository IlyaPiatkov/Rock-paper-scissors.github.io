import { createSlice } from "@reduxjs/toolkit"

type modeType = {
  classic: Array<string>
  extended: Array<string>
}

type initialStateType = {
  modeGame: string
  dataGameList: modeType
  enemies: string
}

const MODE = {
  classic: ["Rock", "Paper", "Scissors"],
  extended: ["Rock", "Paper", "Scissors", "Fire", "Water"]
}

const initialState: initialStateType = {
  modeGame: Object.keys(MODE)[0],
  dataGameList: MODE,
  enemies: "1"
}

const optionsGame = createSlice({
  name: "optionsGame",
  initialState,
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
