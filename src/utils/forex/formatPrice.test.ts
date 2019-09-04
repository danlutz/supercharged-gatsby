/* eslint-disable jest/no-disabled-tests */
// Gatsby-Jest can somehow not import the Intl polyfill, find a fix for this later

import IntlPolyfill from 'intl'

import formatPrice from './formatPrice'

describe.skip('Formats prices', () => {
  Intl.NumberFormat = IntlPolyfill.NumberFormat

  it('Formats prices in EUR with detected locale when no options are provided', () => {
    // Jest has locale "en-US"
    expect(formatPrice(10005)).toBe('100.05 €')
  })

  it('Formats prices in EUR with provided locale when no currencyCode is provided', () => {
    expect(formatPrice(10005, 'de')).toBe('100,05 €')
    expect(formatPrice(10005, 'en')).toBe('100.05 €')
  })

  it('Renders currencySymbols of most important fiat currencies', () => {
    expect(formatPrice(10005, 'de', 'CHF')).toBe('100,05 ₣')
    expect(formatPrice(10005, 'de', 'CNY')).toBe('100,05 ¥')
    expect(formatPrice(10005, 'de', 'CZK')).toBe('100,05 Kč')
    expect(formatPrice(10005, 'de', 'EUR')).toBe('100,05 €')
    expect(formatPrice(10005, 'de', 'GBP')).toBe('100,05 ￡')
    expect(formatPrice(10005, 'de', 'JPY')).toBe('100,05 ¥')
    expect(formatPrice(10005, 'de', 'PLN')).toBe('100,05 zł')
    expect(formatPrice(10005, 'de', 'RUB')).toBe('100,05 ₽')
    expect(formatPrice(10005, 'de', 'TRY')).toBe('100,05 ₺')
    expect(formatPrice(10005, 'de', 'USD')).toBe('100,05 $')
  })

  it('Renders prices with currencyCode as fallback if no symbol is defined', () => {
    expect(formatPrice(10005, 'de', 'XDR')).toBe('100,05 XDR')
  })
})
