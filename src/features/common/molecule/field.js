import React from 'react'

import { FormBlock, FormLabel, FormError, InputBlock } from '../../../ui';

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

export const ElementRadio = Element => ({ input, label, ...props }) => {

  return (
    <div>
      {label && <FormLabel>{label}</FormLabel>}
      <div>
        <Element {...input} {...props} />
      </div>
    </div>
  )
}
