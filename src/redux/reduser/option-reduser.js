import { createSlice } from '@reduxjs/toolkit'

const MODE = {
  classic: ['Rock', 'Paper', 'Scissors'],
  extended: ['Rock', 'Paper', 'Scissors', 'Fire', 'Water'],
}

const optionsGame = createSlice({
  name: "optionsGame",
  initialState: {
    modeGame: Object.keys(MODE)[0],
    dataGameList: MODE,
  },
  reducers: {
    setModeGame: (state, action) => ({
      ...state,
      modeGame: action.payload,
    })
  }
})

const { actions, reducer } = optionsGame

export const {
  setModeGame,
} = actions
export const optionsReducer = reducer

// Thunk
