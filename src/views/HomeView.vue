<script setup>
import { defineAsyncComponent } from 'vue';

const HomeHeader = defineAsyncComponent(() => import('../components/HomeHeader.vue'))
const HomeProducts = defineAsyncComponent(() => import('../components/HomeProducts.vue'))
</script>

<template>
  <HomeHeader />
  <HomeProducts />
</template>
