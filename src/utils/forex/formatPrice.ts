import getUserLocale from '../getUserLocale'
import getCurrencySymbol from './getCurrencySymbol'
import getNumberOfCurrencyFractionsDigits from './getNumberOfCurrencyFractionsDigits'

import { CurrencyCode } from '../../typings/Forex'

const formatPrice = (
  priceInSmallestFraction: number,
  locale?: string,
  currencyCode: CurrencyCode = 'EUR',
) => {
  const numberOfFractionDigits = getNumberOfCurrencyFractionsDigits(
    currencyCode,
  )
  const currencySymbol = getCurrencySymbol(currencyCode)
  const userLocale = getUserLocale(locale)

  const localizedPrice = new Intl.NumberFormat(userLocale, {
    minimumFractionDigits: 2,
  }).format(priceInSmallestFraction / 10 ** numberOfFractionDigits)
  const formattedPrice = `${localizedPrice} ${currencySymbol}`

  return formattedPrice
}

export default formatPrice
