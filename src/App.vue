<template>
  <div class="max-w-3xl mx-auto p-10 min-h-screen bg-[#F6F6F6]">
    <h1 class="text-3xl font-bold text-center text-[#1F2261] mb-20">Currency Converter</h1>
    <RouterView />
    <div>
      <RouterLink to="/currencies">Currencies</RouterLink>
      <RouterLink to="/">Convertation</RouterLink>
    </div>
  </div>
</template>
