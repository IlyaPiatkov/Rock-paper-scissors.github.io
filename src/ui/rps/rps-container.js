import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "footer";
  align-content: space-between;
  
  // TODO del
  min-height: calc(100vh - 100px);

  > :first-child {
    grid-area: header;
  }

  > :last-child {
    grid-area: footer;
  }
`

export const RPSContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}