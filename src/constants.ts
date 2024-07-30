import { ref } from 'vue'

export const CURRENCY_API_KEY = 'a7a047c685eb0a2fab1ec25a'
export const CURRENCY_API_BASE_URL = 'https://v6.exchangerate-api.com/v6'

export const CURRENCIES = ref<any[]>([])
export const CURRENCIES_KEYS = ref<string[]>([])
export const CURRENT_CURRENCY = ref<string>('RUB')
