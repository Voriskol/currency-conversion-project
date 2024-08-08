<script setup lang="ts">
import { CURRENCIES, CURRENT_CURRENCY } from '@/constants'
import { onMounted } from 'vue'
import getCurrencies from '@/composables'
import Table from '@/components/Table/Table.vue'
import Input from '@/components/Input/Input.vue'

onMounted(getCurrencies)
</script>

<template>
  <div class="flex justify-around p-3">
    <Input v-model="CURRENT_CURRENCY" />
    <button @click="getCurrencies" class="bg-[#1F2261] text-white rounded w-20">Convert</button>
  </div>
  <Table :current-currency="CURRENT_CURRENCY" :currencies="CURRENCIES" />
</template>
