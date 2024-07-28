import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrenciesStore = defineStore('currencies', () => {
  const currenciesList = ref<number[]>([])

  return { currenciesList }
})
