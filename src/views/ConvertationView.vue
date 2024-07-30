<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { CURRENCIES, CURRENCIES_KEYS, CURRENT_CURRENCY } from '@/constants'
import getCurrencies from '@/composables'

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
  <div>
    <div>
      <p>Amount</p>
      <div>
        <select name="currency" v-model="currentCurrency" @change="getCurrencies">
          <option v-for="currency in currenciesKeys" :key="currency">
            {{ currency }}
          </option>
        </select>
        <span>Выбрано: {{ currentCurrency }}</span>
        <input type="text" placeholder="0" class="bg-white" v-model="currentCurrencyValue" />
      </div>
    </div>
    <button class="bg-[#1F2261] text-white rounded cursor-pointer" @click="convertCurrency">
      Convert!
    </button>
    <div>
      <p>Converted Amount</p>
      <div>
        <select name="currency" v-model="resultCurrency">
          <option v-for="currency in currenciesKeys" :key="currency">
            {{ currency }}
          </option>
        </select>
        <span>Выбрано: {{ resultCurrency }}</span>
        <input
          type="text"
          placeholder="0"
          class="bg-white"
          v-model="resultCurrencyValue"
          placehoder="0"
        />
      </div>
    </div>
  </div>
</template>
