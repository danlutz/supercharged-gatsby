import isBrowser from './isBrowser'

const fallBackLocale = 'de-DE'

const getUserLocale = (locale?: string) =>
  locale || (isBrowser() ? navigator.language : fallBackLocale)

export default getUserLocale
