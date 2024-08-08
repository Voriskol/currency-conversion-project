const convertCurrency = require('./convert.js')

test('Converts currency correctly', () => {
  const mockCurrentCurrencyValue = { value: 10 }
  const mockCurrencies = { value: { USD: 1, RUB: 85.6013 } }
  const mockResultCurrency = { value: 'RUB' }
  const result = convertCurrency(mockCurrentCurrencyValue, mockCurrencies, mockResultCurrency)
  expect(result.value).toBe(856.013)
})

test('Returns correct resultCurrencyValue', () => {
  const mockCurrentCurrencyValue = { value: 10 }
  const mockCurrencies = { value: { USD: 1, RUB: 85.6013 } }
  const mockResultCurrency = { value: 'RUB' }
  const result = convertCurrency(mockCurrentCurrencyValue, mockCurrencies, mockResultCurrency)
  expect(result).toEqual({ value: 856.013 })
})
