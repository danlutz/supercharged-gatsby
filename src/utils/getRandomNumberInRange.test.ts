/* eslint-disable @typescript-eslint/no-namespace */

import getRandomNumberInRange from './getRandomNumberInRange'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(floor: number, ceiling: number): R
    }
  }
}

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling

    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      }
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      }
    }
  },
})

it('Creates random numbers in provided range', () => {
  expect(getRandomNumberInRange(0, 10)).toBeWithinRange(0, 10)
  expect(getRandomNumberInRange(1, 2)).toBeWithinRange(1, 2)
})
