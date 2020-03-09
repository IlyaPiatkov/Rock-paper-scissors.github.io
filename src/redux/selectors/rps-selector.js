import { createSelector } from "@reduxjs/toolkit"

const rootPlayersSelector = state => state.players
const rootGameSelector = state => state.game
const rootProfileSelector = state => state.profile

export const getWinnerText = createSelector(
  rootGameSelector,
  state => state.winnerText
)

export const getPlayers = createSelector(
  rootPlayersSelector,
  state => Object.keys(state)
  // state
)
export const getFullInfoPlayers = createSelector(
  rootPlayersSelector,
  rootProfileSelector,
  (players, profile) => {
    let arr = players
    // player: {
    //   score: 1,
    //   currentChoice: 'Paper'
    // },
    // bot1: {
    //   score: 0,
    //   currentChoice: 'Rock'
    // }

    for (let key in arr) {
      // ключи
      // console.log(key) // name, age, isAdmin
      // значения ключей
      // console.log(arr[key]) // John, 30, true
    }
    return arr
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
