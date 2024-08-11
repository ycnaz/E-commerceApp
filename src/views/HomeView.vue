<script setup>
import { defineAsyncComponent } from 'vue';

const HomeHeader = defineAsyncComponent(() => import('../components/HomeHeader.vue'))
</script>

<template>
  <HomeHeader />
</template>
