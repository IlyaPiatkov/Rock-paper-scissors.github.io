export const required = value => {
  if (value) return undefined
  return "Required"
}

export const maxLength = max => value => {
  if (value && value.length > max) return `Must be ${max} characters or less`
  return undefined
}

export const minLength = min => value => {
  if (value && value.length < min) return `Must be ${min} characters or more`
  return undefined
}
