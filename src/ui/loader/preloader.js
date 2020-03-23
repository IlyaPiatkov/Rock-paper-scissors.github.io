import React from "react"
import styled, { keyframes } from "styled-components"

import { Icon } from "../icon"

const run = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
`

const Container = styled.div`
  width: 70%;
  max-width: 30rem;
  animation: ${run} 30s linear infinite;
`

export const Preloader = () => {
  return (
    <Overlay>
      <Container>
        <Icon name="RPS" />
      </Container>
    </Overlay>
  )
}
