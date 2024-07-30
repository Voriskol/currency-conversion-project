<script setup lang="ts">
import { CURRENCIES, CURRENT_CURRENCY } from '@/constants'
import { onMounted } from 'vue'
import getCurrencies from '@/composables'

onMounted(getCurrencies)
</script>

<template>
  <div class="flex justify-around p-3">
    <input type="text" v-model="CURRENT_CURRENCY" class="bg-white p-2 rounded w-20 text-center" />
    <button @click="getCurrencies" class="bg-[#1F2261] text-white rounded w-20">Convert</button>
  </div>

  <v-table
    :hover="true"
    :height="400"
    :fixed-header="true"
    class="rounded-lg border-sm h-[300px] w-[500px] m-auto"
  >
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
