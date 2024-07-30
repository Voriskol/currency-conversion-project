<script setup lang="ts"></script>

<template>
  <header class="mx-auto max-w-96 pt-5 pb-3">
    <h1 class="text-3xl font-bold text-center text-[#1F2261]">Currency Converter</h1>
  </header>
  <main class="mx-auto max-w-[768px] h-96 bg-slate-400">
    <RouterView />
  </main>
  <footer class="flex justify-around pt-10 mx-auto max-w-96">
    <RouterLink class="p-5 bg-slate-500 rounded-2xl text-white" to="/currencies"
      >Currencies</RouterLink
    >
    <RouterLink class="p-5 bg-slate-500 rounded-2xl text-white" to="/">Convertation</RouterLink>
  </footer>
</template>
