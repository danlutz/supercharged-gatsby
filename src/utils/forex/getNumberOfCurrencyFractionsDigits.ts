import { CurrencyCode } from '../../typings/Forex'

const getNumberOfCurrencyFractionsDigits = (currencyCode: CurrencyCode) => {
  switch (currencyCode) {
    case 'BTC':
      return 8
    case 'ETH':
      return 18
    default:
      return 2
  }
}

export default getNumberOfCurrencyFractionsDigits
