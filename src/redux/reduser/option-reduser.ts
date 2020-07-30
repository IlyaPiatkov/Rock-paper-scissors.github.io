import { createSlice } from "@reduxjs/toolkit"

type ModeType = {
  classic: Array<string>
  extended: Array<string>
}

type InitialStateType = {
  modeGame: string
  dataGameList: ModeType
  enemies: string
}

const MODE = {
  classic: ["Rock", "Paper", "Scissors"],
  extended: ["Rock", "Paper", "Scissors", "Fire", "Water"]
}

const initialState: InitialStateType = {
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
