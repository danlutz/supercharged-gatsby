import { useState, useEffect } from 'react'

import isBrowser from '../utils/isBrowser'

const fallBackSize = 0

const getScrollPosition = () => ({
  scrollX: isBrowser() ? window.scrollX : fallBackSize,
  scrollY: isBrowser() ? window.scrollY : fallBackSize,
})

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition())

  const handleScroll = () => {
    setScrollPosition(getScrollPosition())
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

export default useScrollPosition
