// import React from 'react';
import styled, { keyframes } from 'styled-components'
import { mixinTypography } from '../typography'

export const FormBlock = styled.div`
  position: relative;
`

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;

  ${mixinTypography}
`
const animationError = keyframes`
  0% {
    font-size: 0;
  }
  100% {
    font-size: 1.4rem;
  }
`

export const FormError = styled.span`
  display: block;
  color: #e20012;
  animation: ${animationError} 0.25s ease;
  ${mixinTypography}
`

export const InputBlock = styled.div`
  position: relative;

  > input {
    width: 100%;
    min-height: 3.5rem;
    padding: 0 1rem;
    border: 0.1rem solid #000;
    transition: border-color 0.25s ease;

    ${p => p.error && `
      border-color: #e20012;
    `}
  }
`