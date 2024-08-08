function convertCurrency() {
  resultCurrencyValue.value = currentCurrencyValue.value * currencies.value[resultCurrency.value]
  return resultCurrencyValue
}

module.exports = convertCurrency
