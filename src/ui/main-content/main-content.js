import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  margin: 0 auto;
  padding: 50px 10px;
  max-width: 500px;
  min-height: 100vh;
`

const MainContent = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default MainContent;
