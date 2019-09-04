const replaceUmlauts = (string: string) =>
  string
    .replace('ä', 'ae')
    .replace('ö', 'oe')
    .replace('ü', 'ue')
    .replace('ß', 'ss')

export default replaceUmlauts
