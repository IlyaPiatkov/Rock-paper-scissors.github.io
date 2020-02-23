import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddileware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import rpsReduser from './reduser/rps-reduser'
import mainMenuReduser from './reduser/main-menu-reduser'

let redusers = combineReducers({
  mainMenu: mainMenuReduser,
  rps: rpsReduser,
  form: formReducer,
})

let store = createStore(redusers, applyMiddleware(thunkMiddileware))

export default store
window.store = store