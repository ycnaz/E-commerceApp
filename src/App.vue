<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import { defineAsyncComponent } from 'vue';

  const CartComp = defineAsyncComponent(() => import('./assets/svg/cart.svg'))
</script>

<template>
  <header class="w-full h-20 text-white absolute z-50">
    <nav class="flex h-full justify-around items-center">
      <strong class="text-5xl cursor-pointer">YCN</strong>
      <div class="flex h-full">
        <RouterLink to="/" class="flex items-center justify-center w-28 h-full hover:bg-rose-400 transition-all duration-300">Home</RouterLink>
        <RouterLink to="/" class="flex items-center justify-center w-28 h-full hover:bg-rose-400 transition-all duration-300">About</RouterLink>
        <RouterLink to="/" class="flex items-center justify-center w-28 h-full hover:bg-rose-400 transition-all duration-300">Men's</RouterLink>
        <RouterLink to="/" class="flex items-center justify-center w-28 h-full hover:bg-rose-400 transition-all duration-300">Women's</RouterLink>
      </div>
      <CartComp class="size-12 p-2 rounded-full hover:bg-rose-400 cursor-pointer transition-all duration-300" />
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>