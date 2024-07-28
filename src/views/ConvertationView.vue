<script setup lang="ts">
import { useCurrenciesStore } from '@/store/currencies'
import { ref } from 'vue';

const currenciesStore = useCurrenciesStore()
const baseCurrency = ref<string>('RUB')
</script>

<template>
  <div>
    <div>
      <p>Amount</p>
      <div>
        <select name="currency" v-model="baseCurrency">
          <option
            v-for="(currency, index) in currenciesStore.currenciesList"
            :value="currency"
            :key="index"
          >
            {{ index }}
          </option>
        </select>
        <input type="text" placeholder="0" class="bg-white" />
      </div>
    </div>
    <button class="bg-[#1F2261] text-white rounded cursor-pointer">Convert!</button>
    <div>
      <p>Converted Amount</p>
      <div>
        <select name="currency">
          <option
            v-for="(currency, index) in currenciesStore.currenciesList"
            :value="currency"
            :key="index"
          >
            {{ index }}
          </option>
        </select>
        <input type="text" placeholder="0" class="bg-white" />
      </div>
    </div>
  </div>
</template>
