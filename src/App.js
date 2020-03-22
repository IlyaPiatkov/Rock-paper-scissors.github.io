import React from "react"

import GlobalStyle from "./global-style"
import { Routes } from "./pages/routers"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App
