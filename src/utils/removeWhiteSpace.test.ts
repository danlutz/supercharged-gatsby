import removeWhiteSpace from './removeWhiteSpace'

it('Removes whiteSpace', () => {
  expect(removeWhiteSpace('A B C D      E')).toBe('ABCDE')
})
