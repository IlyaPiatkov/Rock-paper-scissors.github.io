import { createSelector } from "@reduxjs/toolkit"

const rootOptionsSelector = (state) => state.options

export const getModeGameList = createSelector(
  rootOptionsSelector,
  (state) => state.dataGameList[state.modeGame],
)

export const getModeGame = createSelector(
  rootOptionsSelector,
  (state) => Object.keys(state.dataGameList),
)