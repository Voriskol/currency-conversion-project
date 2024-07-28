<script setup lang="ts">
import { useCurrenciesStore } from '@/store/currencies'

const currenciesStore = useCurrenciesStore()
const currencies = currenciesStore.currenciesList
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
