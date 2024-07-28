<script setup lang="ts">
import { CURRENCY_API_KEY, CURRENCY_API_BASE_URL } from '@/constants'
import { useCurrenciesStore } from '@/store/currencies.store'
import { onMounted } from 'vue'

const currenciesStore = useCurrenciesStore()

async function getCurrencies() {
  await fetch(`${CURRENCY_API_BASE_URL}/${CURRENCY_API_KEY}/latest/RUB`)
    .then((response) => response.json())
    .then((data) => (currenciesStore.currenciesList = data.conversion_rates))
    .catch((error) => console.log(error))
}

onMounted(getCurrencies)
</script>

<template>
  <div class="max-w-3xl mx-auto p-10 min-h-screen bg-[#F6F6F6]">
    <h1 class="text-3xl font-bold text-center text-[#1F2261] mb-20">Currency Converter</h1>
    <RouterView />
    <div>
      <RouterLink to="/currencies">Currencies</RouterLink>
      <RouterLink to="/">Convertation</RouterLink>
    </div>
  </div>
</template>
