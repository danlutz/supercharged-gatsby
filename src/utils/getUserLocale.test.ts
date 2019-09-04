import getUserLocale from './getUserLocale'

describe('Gets locale for formatters', () => {
  it('Returns locale if locale is provided', () => {
    expect(getUserLocale('de-AT')).toBe('de-AT')
  })

  it('Gets locale from Javascript engine if no locale is provided', () => {
    // Jest has locale "en-US"
    expect(getUserLocale()).toBe('en-US')
  })
})
