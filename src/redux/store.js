import { reducer as formReducer } from "redux-form"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import { playersReducer, gameReducer } from "./reduser/rps-reduser"
import { profileReducer } from "./reduser/profile-reduser"
import { authReducer } from "./reduser/auth-reduser"
import { optionsReducer } from "./reduser/option-reduser"
import { searchReducer } from "./reduser/search-reduser"

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
})

export const store = configureStore({
  reducer: {
    game: gameReducer,
    search: searchReducer,
    players: playersReducer,
    profile: profileReducer,
    options: optionsReducer,
    auth: authReducer,
    form: formReducer
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production"
})

window.store = store
