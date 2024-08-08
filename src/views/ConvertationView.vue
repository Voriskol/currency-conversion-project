<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { CURRENCIES, CURRENCIES_KEYS, CURRENT_CURRENCY } from '@/constants'
import getCurrencies from '@/composables'
import Input from '@/components/Input/Input.vue'

const currencies = CURRENCIES
const currenciesKeys = CURRENCIES_KEYS

const currentCurrency = CURRENT_CURRENCY
const currentCurrencyValue = ref<number>(1)

const resultCurrency = ref<any>('USD')
const resultCurrencyValue = ref<number>(0)

function convertCurrency(): Ref<number> {
  resultCurrencyValue.value = currentCurrencyValue.value * currencies.value[resultCurrency.value]
  return resultCurrencyValue
}

onMounted(getCurrencies)
</script>

<template>
  <div class="flex flex-col justify-center">
    <div>
      <h3 class="text-[#1F2261] text-center font-mono font-bold text-xl pb-3">Amount</h3>
      <div class="flex justify-center gap-4 border-b-2 pb-3">
        <select
          name="currency"
          v-model="currentCurrency"
          @change="getCurrencies"
          class="bg-white rounded p-2 cursor-pointer"
        >
          <option v-for="currency in currenciesKeys" :key="currency">
            {{ currency }}
          </option>
        </select>
        <Input v-model="currentCurrencyValue" />
      </div>
    </div>
    <div class="flex justify-center bg-slate-400">
      <button
        class="bg-[#1F2261] text-white rounded cursor-pointer m-10 max-w-[100px] p-2 font-bold text-xl"
        @click="convertCurrency"
      >
        Convert!
      </button>
    </div>
    <div class="border-t-2 pt-2">
      <h3 class="text-[#1F2261] text-center font-mono font-bold text-xl pb-3">Converted Amount</h3>
      <div class="flex justify-center gap-4">
        <select
          name="currency"
          v-model="resultCurrency"
          class="bg-white rounded p-2 cursor-pointer"
        >
          <option v-for="currency in currenciesKeys" :key="currency">
            {{ currency }}
          </option>
        </select>
        <Input v-model="resultCurrencyValue" />
      </div>
    </div>
  </div>
</template>
