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
  background-color: red;
`

export const RPSButtons = (props) => {
  return (
    <Container>
      {props.names.map(name => {
        return (
          <Button
            id={name}
            type='button'
            onClick={props.onClick}
          >
            <IconStyle name={name}/>
            {name}
          </Button>
        )
      })}
    </Container>
  )
}
