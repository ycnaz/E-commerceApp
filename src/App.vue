<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import { defineAsyncComponent } from 'vue';

  const CartComp = defineAsyncComponent(() => import('./assets/svg/cart.svg'))
</script>

<template>
  <header class="w-full h-20 text-white absolute z-50">
    <nav class="flex h-full justify-around items-center">
      <strong class="text-5xl cursor-pointer">YCN</strong>
      <div class="flex h-full relative">
        <div class="group flex items-center justify-center hover:bg-rose-400 w-28 h-full relative transition-all duration-300 cursor-pointer">
          <div class="max-w-max relative">
            <RouterLink to="/" class="before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full before:transition-all before:duration-300">Home</RouterLink>
          </div>
        </div>
        <div class="group flex items-center justify-center hover:bg-rose-400 w-28 h-full relative transition-all duration-300 cursor-pointer">
          <div class="max-w-max relative">
            <RouterLink to="/" class="before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full before:transition-all before:duration-300">About</RouterLink>
          </div>
        </div>
        <div class="group flex items-center justify-center hover:bg-rose-400 w-28 h-full relative transition-all duration-300 cursor-pointer">
          <div class="max-w-max relative">
            <RouterLink to="/" class="before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full before:transition-all before:duration-300">Men's</RouterLink>
          </div>
        </div>
        <div class="group flex items-center justify-center hover:bg-rose-400 w-28 h-full relative transition-all duration-300 cursor-pointer">
          <div class="max-w-max relative">
            <RouterLink to="/" class="before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full before:transition-all before:duration-300">Women's</RouterLink>
          </div>
        </div>
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