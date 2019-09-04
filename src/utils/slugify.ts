import removeWhiteSpace from './removeWhiteSpace'
import replaceUmlauts from './replaceUmlauts'

const slugify = (string: string) =>
  encodeURI(removeWhiteSpace(replaceUmlauts(string)).toLowerCase())

export default slugify
