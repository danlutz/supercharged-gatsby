import { useState } from 'react'

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)

  const toggler = () => setValue(!value)

  return [value, toggler] as [boolean, () => void]
}

export default useToggle
