import styled from 'styled-components'

export const MainContainer = styled.main`
  margin: 0 auto;
  padding: 50px 10px;
  max-width: 500px;
  min-height: 100vh;
`

export const MainContent = styled.div`
  > :nth-child(n+2) {
    margin-top: 2rem;
  }
`
