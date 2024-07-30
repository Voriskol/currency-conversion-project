<script setup lang="ts">
import { CURRENCIES, CURRENT_CURRENCY } from '@/constants'
import { onMounted } from 'vue'
import getCurrencies from '@/composables'

onMounted(getCurrencies)
</script>

<template>
  <input type="text" v-model="CURRENT_CURRENCY" />
  <button @click="getCurrencies">Get Currencies</button>
  <v-table :hover="true" :height="400" :fixed-header="true" class="rounded-lg border-sm">
    <thead>
      <tr>
        <th class="text-left">Currency</th>
        <th class="text-left">RUB</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(currency, index) in CURRENCIES" :key="index">
        <td>{{ index }}</td>
        <td>{{ currency.toFixed(2) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
