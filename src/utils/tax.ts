export const grossToNet = (gross: number, taxRatePercentage: number) =>
  gross / (1 + taxRatePercentage)

export const netToGross = (net: number, taxRate: number) => net * (1 + taxRate)

export const getTaxRateFromNetAndGross = (net: number, gross: number) =>
  gross / net - 1
