import React, { useState } from "react"

import {
  Header,
  MainMenu,
  MainContainer,
  MainWrap,
  Hamburger
} from "../../../ui"

import { transition } from "../atom"

export const CommonContentTemplate = ({ children, footer }) => {
  const [openMenu, toggleMenu] = useState({
    isOpen: false,
    isClose: false,
    idDisabled: false
  })

  const handleClickMenu = () => {
    transition(openMenu, toggleMenu, 500)
  }

  return (
    <>
      <MainMenu handleClickMenu={handleClickMenu} openMenu={openMenu} />
      <Hamburger handleClickMenu={handleClickMenu} openMenu={openMenu} />
      <MainWrap isOpenMenu={openMenu.isOpen}>
        <Header />
        <MainContainer>{children}</MainContainer>
        {footer && footer}
      </MainWrap>
    </>
  )
}
