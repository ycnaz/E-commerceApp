<script setup>
import { defineAsyncComponent } from 'vue';
import { onMounted } from 'vue';
import { useMenStore } from '@/stores/menStore';
import { useWomenStore } from '@/stores/womenStore';

const HomeHeader = defineAsyncComponent(() => import('../components/HomeHeader.vue'))
const HomeLister = defineAsyncComponent(() => import('../components/HomeLister.vue'))
const HomeDiscount = defineAsyncComponent(() => import('../components/HomeDiscount.vue'))

const menStore = useMenStore()
const womenStore = useWomenStore()

onMounted(() => {
    menStore.fetchAll()
    womenStore.fetchAll()
})

</script>

<template>
  <HomeHeader />
  <div class="my-24">
    <HomeLister class="flex justify-center items-center" :loading="menStore.loading" :data="menStore.items" category="men's clothing" title="Men's Clothing" slicer="4"/>
    <HomeLister class="flex justify-center items-center" :loading="womenStore.loading" :data="womenStore.items" category="women's clothing" title="Women's Clothing" slicer="4"/>
  </div>
  <HomeDiscount />
</template>
