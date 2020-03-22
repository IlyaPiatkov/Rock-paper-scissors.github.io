import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { buttonStyle } from "../../ui"

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 50rem;
`

const Container = styled.div`
  margin: 2rem 0;
  line-height: 1;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: #000;
`

const WrapText = styled.div`
  font-size: 20rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -2rem;
  text-shadow: -0.8rem 0 0 #fff;
`

const Text = styled.p`
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
`

const ButtonBack = styled(NavLink)`
  ${buttonStyle}

  margin: 3rem auto 0;
  width: 70%;
`

export const NotFoundPage = () => {
  return (
    <Wrap>
      <Container>
        <Title>Oops! Page not found</Title>
        <WrapText>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </WrapText>
        <Text>we are sorry, but the page you requested was not found</Text>
        <ButtonBack default to="/">
          Homepage
        </ButtonBack>
      </Container>
    </Wrap>
  )
}
