import { createStore, combineReducers } from 'redux'

import rpsReduser from './reduser/rps-reduser'
import mainMenuReduser from './reduser/main-menu-reduser'

let redusers = combineReducers({
  mainMenu: mainMenuReduser,
  rps: rpsReduser,
})

let store = createStore(redusers)

export default store
window.store = store