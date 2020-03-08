import { createSelector } from "@reduxjs/toolkit"

const rootPlayersSelector = state => state.players
const rootGameSelector = state => state.game

// export const getScore = createSelector(rootPlayersSelector, state =>
//   Object.keys(state)
// )

export const getWinnerText = createSelector(
  rootGameSelector,
  state => state.winnerText
)

export const getPlayers = createSelector(rootPlayersSelector, state => state)
export const getScore = state => state.players.bot1.score
export const getCurrentChoice = state => state.players.bot1.currentChoice
