import { grossToNet, netToGross, getTaxRateFromNetAndGross } from './tax'

it('Converts gross to net', () => {
  expect(grossToNet(120, 0.2)).toBe(100)
})

it('Converts net to gross', () => {
  expect(netToGross(100, 0.2)).toBe(120)
})

it('Calculates taxRate from net and gross', () => {
  expect(getTaxRateFromNetAndGross(100, 150)).toBe(0.5)
})
