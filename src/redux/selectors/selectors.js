import { createSelector } from "@reduxjs/toolkit"

const rootOptionsSelector = state => state.options
const rootAuthSelector = state => state.auth
const rootProfileSelector = state => state.profile

export const getModeGameList = createSelector(
  rootOptionsSelector,
  state => state.dataGameList[state.modeGame]
)

export const getModeList = createSelector(rootOptionsSelector, state =>
  Object.keys(state.dataGameList)
)

export const getModeGame = createSelector(
  rootOptionsSelector,
  state => state.modeGame
)

export const getEnemies = createSelector(
  rootOptionsSelector,
  state => state.enemies
)

export const getUserName = createSelector(
  rootProfileSelector,
  state => state.userName
)
export const getUserId = createSelector(
  rootProfileSelector,
  state => state.userId
)
export const getAuth = createSelector(rootAuthSelector, state => state.isAuth)
export const getIsLoad = createSelector(rootAuthSelector, state => state.isLoad)
