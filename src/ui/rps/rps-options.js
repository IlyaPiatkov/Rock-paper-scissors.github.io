import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  > :nth-child(n+2) {
    margin-top: 2rem;
  }
`

export const RPSOptions = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}