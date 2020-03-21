import { createSelector } from "@reduxjs/toolkit"

const rootPlayersSelector = state => state.players
const rootGameSelector = state => state.game
const rootProfileSelector = state => state.profile

export const getWinnerText = createSelector(
  rootGameSelector,
  state => state.winnerText
)

export const getPlayers = createSelector(rootPlayersSelector, state =>
  Object.keys(state)
)
export const getRound = createSelector(rootGameSelector, state => state.rounds)
export const getCurrentWinner = createSelector(
  rootGameSelector,
  state => state.currentWinner
)
export const getPlayersInfo = createSelector(
  rootPlayersSelector,
  rootProfileSelector,
  (players, profile) => {
    let userId = profile.userId
    let info = {
      ...players,
      [userId]: { ...players[userId], name: profile.name }
    }
    return Object.entries(info)
  }
)
export const getEnemyPlayers = createSelector(
  rootPlayersSelector,
  rootProfileSelector,
  (players, profile) =>
    Object.keys(players).filter(player => player !== profile.userId)
)
export const getCurrentPlayer = createSelector(
  rootProfileSelector,
  state => state.userId
)

export const getCurrentChoice = state => state.players.bot1.currentChoice
