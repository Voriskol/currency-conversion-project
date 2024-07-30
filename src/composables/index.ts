import { CURRENCY_API_BASE_URL, CURRENCY_API_KEY } from '@/constants'
import { CURRENT_CURRENCY, CURRENCIES, CURRENCIES_KEYS } from '@/constants'

export default async function getCurrencies(): Promise<void> {
  try {
    const response = await fetch(
      `${CURRENCY_API_BASE_URL}/${CURRENCY_API_KEY}/latest/${CURRENT_CURRENCY.value}`
    )
    const data = await response.json()
    CURRENCIES.value = data.conversion_rates
    CURRENCIES_KEYS.value = Object.keys(CURRENCIES.value)
  } catch (error) {
    console.log(error)
  }
}
