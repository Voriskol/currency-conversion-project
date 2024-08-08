<script setup lang="ts">
const model = defineModel<any>()
</script>

<template>
  <input type="text" class="bg-white rounded p-2 max-w-[150px]" v-model="model" />
</template>
