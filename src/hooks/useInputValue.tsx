import { useState } from 'react'

const numberRegex = /^\d+$/g

export const useNumberInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const [number, setNumber] = useState(Number(initialValue))

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = e.target.value.replace(/\./g, '')
    if (numberValue === '') {
      setNumber(0)
      setValue('0')
    } else if (numberValue.match(numberRegex)) {
      const formattedNumber = Number(numberValue).toLocaleString('de-DE')
      setNumber(Number(numberValue))
      setValue(formattedNumber)
    }
  }

  return {
    value,
    onChange,
    number,
  }
}

const defaultFormatter = (value: string) => value

const useInputValue = (initialValue = '', formatter = defaultFormatter) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(formatter(e.target.value))

  return {
    value,
    onChange,
  }
}

export default useInputValue
