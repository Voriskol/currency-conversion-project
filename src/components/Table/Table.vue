<script setup lang="ts">
defineProps<{
  currentCurrency: string
  currencies: any
}>()
</script>

<template>
  <v-table
    :hover="true"
    :height="400"
    :fixed-header="true"
    class="rounded-lg border-sm h-[300px] w-[500px] m-auto"
  >
    <thead>
      <tr>
        <th class="text-left">Currency</th>
        <th class="text-left">{{ currentCurrency }}</th>
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
