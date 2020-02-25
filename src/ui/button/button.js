import styled, { css } from 'styled-components'

const buttonStyle = css`
  display: block;
  padding: 0.9rem;
  width: 100%;
  border: 0.1rem solid #000;
  color: #fff;
  text-decoration: none;
  transition: all 0.25s ease;
`

export const ButtonDefault = styled.button`
  ${buttonStyle}

  background-color: #000;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`