import { useState, useEffect } from 'react'

const useDebounce = (value = null, delayMs = 100) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delayMs)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, delayMs])

  return debouncedValue
}

export default useDebounce
