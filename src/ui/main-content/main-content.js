import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  padding: 50px 10px;
  height: 100vh;
`

const MainContent = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default MainContent;
