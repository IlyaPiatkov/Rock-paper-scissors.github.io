import React from 'react';
import styled from 'styled-components'
import { Icon } from '../icon';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
`

const IconStyle = styled(Icon)`
  pointer-events: none;
`

export const RPSButtons = ({names, onClick}) => {
  return (
    <Container>
      {names.map(name => {
        return (
          <Button
            id={name}
            key={name}
            type='button'
            onClick={onClick}
          >
            <IconStyle name={name}/>
            {name}
          </Button>
        )
      })}
    </Container>
  )
}
