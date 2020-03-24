import { createSelector } from "@reduxjs/toolkit"

const rootOptionsSelector = state => state.options
const rootAuthSelector = state => state.auth

export const getModeGameList = createSelector(
  rootOptionsSelector,
  state => state.dataGameList[state.modeGame]
)

export const getModeGame = createSelector(rootOptionsSelector, state =>
  Object.keys(state.dataGameList)
)

export const getAuth = createSelector(rootAuthSelector, state => state.isAuth)
export const getIsLoad = createSelector(rootAuthSelector, state => state.isLoad)
