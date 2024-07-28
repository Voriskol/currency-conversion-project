<script setup lang="ts">
import { ref } from 'vue'
import { CURRENCY_API_KEY, CURRENCY_API_BASE_URL } from '@/constants'
import { onMounted } from 'vue'

const currencies = ref<number[]>([])

async function getCurrencies() {
  await fetch(`${CURRENCY_API_BASE_URL}/${CURRENCY_API_KEY}/latest/RUB`)
    .then((response) => response.json())
    .then((data) => (currencies.value = data.conversion_rates))
    .catch((error) => console.log(error))
}

onMounted(getCurrencies)
</script>

<template>
  <v-table :hover="true" :height="400" :fixed-header="true" class="rounded-lg border-sm">
    <thead>
      <tr>
        <th class="text-left">Currency</th>
        <th class="text-left">RUB</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(currency, index) in currencies" :key="index">
        <td>{{ index }}</td>
        <td>{{ currency.toFixed(2) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
