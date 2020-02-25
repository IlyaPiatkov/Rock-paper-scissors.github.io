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

export const email = value => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address'
  return undefined
}
