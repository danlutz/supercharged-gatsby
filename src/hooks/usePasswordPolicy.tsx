import { useState, useEffect } from 'react'
import useDebounce from './useDebounce'

interface ValidationErrors {
  minLength: boolean
  maxLength: boolean
  minNumbers: boolean
  minSpecialChars: boolean
}

const defaultMinLength = 8
const defaultMaxLength = 100
const defaultMinNumbers = 0
const defaultMinSpecialChars = 8

const getNumberOfIntegers = (string = '') =>
  string.replace(/[^0-9]/g, '').length

const getNumberOfSpecialChars = (string = '') =>
  string.replace(/[a-zA-Z0-9]/g, '').length

const usePasswordPolicy = (
  password: string,
  passwordPolicy = {
    minLength: defaultMinLength,
    maxLength: defaultMaxLength,
    minNumbers: defaultMinNumbers,
    minSpecialChars: defaultMinSpecialChars,
  },
) => {
  const {
    minLength = defaultMinLength,
    maxLength = defaultMaxLength,
    minNumbers = defaultMinNumbers,
    minSpecialChars = defaultMinSpecialChars,
  } = passwordPolicy

  const debouncedPassword = useDebounce(password)
  const [isValid, setIsValid] = useState(null)
  const [validationErrors, setValidationErrors] = useState({})

  useEffect(() => {
    let didCancel = false
    const errors: AnyObject = {}
    if (debouncedPassword.length < minLength) errors.minLength = true
    if (debouncedPassword.length > maxLength) errors.maxLength = true

    if (getNumberOfIntegers(debouncedPassword) < minNumbers)
      errors.minNumbers = true

    if (getNumberOfSpecialChars(debouncedPassword) < minSpecialChars)
      errors.minSpecialChars = true

    if (!didCancel) {
      setIsValid(Object.keys(errors).length === 0)
      setValidationErrors(errors)
    }

    return () => {
      didCancel = true
    }
  }, [debouncedPassword, minLength, maxLength, minNumbers, minSpecialChars])

  return [isValid as boolean, validationErrors as ValidationErrors]
}

export default usePasswordPolicy
