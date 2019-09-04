import replaceUmlauts from './replaceUmlauts'

it('Replaces umlauts', () => {
  expect(replaceUmlauts('äöüß')).toBe('aeoeuess')
})
