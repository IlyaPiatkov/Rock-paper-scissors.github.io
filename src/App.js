import React from "react"

import GlobalStyle from "./global-style"
import { Routes } from "./pages/routers"
import { AccountLoader } from "./features"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AccountLoader>
        <Routes />
      </AccountLoader>
    </>
  )
}

export default App
