import { useState } from 'react'

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue)

  const toggler = () => setValue(!value)

  return [value, toggler]
}

export default useToggle
