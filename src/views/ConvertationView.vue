<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <p>Amount</p>
      <div>
        <select name="currency" id="">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="JPY">JPY</option>
          <option value="CNY">CNY</option>
          <option value="GBP">GBP</option>
        </select>
        <input type="text" placeholder="0" />
      </div>
    </div>
    <button>Convert!</button>
    <div>
      <p>Converted Amount</p>
      <div>
        <select name="currency" id="">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="JPY">JPY</option>
          <option value="CNY">CNY</option>
          <option value="GBP">GBP</option>
        </select>
        <input type="text" placeholder="0" />
      </div>
    </div>
  </div>
</template>
