import { reducer as formReducer } from 'redux-form'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rpsReduser from './reduser/rps-reduser'
import { mainMenuReducer } from './reduser/main-menu-reduser'
import { profileReducer } from './reduser/profile-reduser'
import { authReducer } from './reduser/auth-reduser'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    mainMenu: mainMenuReducer,
    rps: rpsReduser,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

window.store = store
