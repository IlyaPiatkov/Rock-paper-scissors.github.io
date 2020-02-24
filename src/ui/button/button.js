import styled, { css } from 'styled-components'

const buttonStyle = css`
  display: block;
  padding: 1rem;
  width: 100%;
  border: none;
  color: #fff;
  text-decoration: none;

  &:hover {
    background-color: #2d2d2d;
  }
`

export const ButtonDefault = styled.button`
  ${buttonStyle}

  background-color: #000;
`