import { useState, useEffect } from 'react'

import isBrowser from '../utils/isBrowser'

const fallBackSize = 0

const getDocumentHeight = () => {
  const body = document.body
  const html = document.documentElement

  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  )

  return documentHeight
}

const getWindowSize = () => ({
  innerWidth: isBrowser() ? window.innerWidth : fallBackSize,
  innerHeight: isBrowser() ? window.innerHeight : fallBackSize,
  outerWidth: isBrowser() ? window.outerWidth : fallBackSize,
  outerHeight: isBrowser() ? window.outerHeight : fallBackSize,
  documentHeight: isBrowser() ? getDocumentHeight() : fallBackSize,
})

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  const handleResize = () => {
    setWindowSize(getWindowSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
