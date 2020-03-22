import React from "react"

import { HeaderContainer, MainMenuContainer, MainContainer } from "../../../ui"
import { FooterContainer } from "../molecule"

export const CommonContentTemplate = ({ menu, header, children, footer }) => (
  <>
    {menu ? menu : <MainMenuContainer />}
    {header ? header : <HeaderContainer />}
    <MainContainer>{children}</MainContainer>
    {footer ? footer : <FooterContainer />}
  </>
)
