import React from 'react'

import { FormBlock, FormLabel, FormError, FormLabelRadio, InputBlock } from '../../../ui';

export const ElementInput = Element => ({ 
  input,
  meta,
  label,
  ...props
  }) => {

  const hasError = meta.touched && meta.error;

  return (
    <FormBlock>
      {label && <FormLabel medium>{label}</FormLabel>}
      <InputBlock error={hasError}>
        <Element {...input} {...props}/>
      </InputBlock>
      { hasError && <FormError small> { meta.error } </FormError> }
    </FormBlock>
  )
}

export const ElementRadio = Element => ({ input, meta, label, ...props }) => {

  return (
    <FormLabelRadio medium isChecked={input.checked}>
      <Element {...input} {...props} />
      <svg viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9"></circle>
        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"></path>
        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"></path>
      </svg>
      <span>{label}</span>
    </FormLabelRadio>
  )
}
