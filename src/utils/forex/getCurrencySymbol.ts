import { CurrencyCode } from '../../typings/Forex'

const getCurrencySymbol = (currencyCode: CurrencyCode) => {
  switch (currencyCode) {
    // Fiat
    case 'AMD':
      return 'դր.'
    case 'AZN':
      return '₼'
    case 'BGN':
      return 'лв'
    case 'CHF':
      return '₣'
    case 'CNY':
      return '¥'
    case 'CZK':
      return 'Kč'
    case 'EUR':
      return '€'
    case 'GEL':
      return '₾'
    case 'GBP':
      return '￡'
    case 'JPY':
      return '¥'
    case 'MKD':
      return 'ден'
    case 'PLN':
      return 'zł'
    case 'UAH':
      return '₴'
    case 'USD':
      return '$'
    case 'RUB':
      return '₽'
    case 'TRY':
      return '₺'

    // Crypto
    case 'BTC':
      return '₿'
    case 'ETH':
      return 'Ξ'

    default:
      return currencyCode
  }
}

export default getCurrencySymbol
