import styled, { css } from 'styled-components'

export const buttonStyle = css`
  display: block;
  padding: 0.9rem;
  width: 100%;
  border: 0.1rem solid #000;
  font-size: 1.4rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.25s ease;

  ${p => p.default && css`
    background-color: #000;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  `}
`

export const ButtonDefault = styled.button`
  ${buttonStyle}

  background-color: #000;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`