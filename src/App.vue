<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col max-w-[600px] m-auto h-[500px] border mt-10 rounded-3xl bg-zinc-300 justify-between "
  >
    <header class="pt-5 pb-2 border-b">
      <h1 class="text-3xl font-bold text-center text-[#1F2261]">Currency Converter</h1>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="flex justify-center gap-10 p-3">
      <RouterLink class="p-2 bg-slate-500 rounded-2xl text-white" to="/currencies"
        >Currencies</RouterLink
      >
      <RouterLink class="p-2 bg-slate-500 rounded-2xl text-white" to="/">Convertation</RouterLink>
    </footer>
  </div>
</template>
