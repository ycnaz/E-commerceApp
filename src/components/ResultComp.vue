<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

import { ref } from 'vue';

const imgIsLoading = ref(true)

const handleImageLoad = () => {
  imgIsLoading.value = false
}

const wordLimit = 7

const truncatedTitle = (title) => {
  return title.split(' ').slice(0, wordLimit).join(' ') + (title.split(' ').length > wordLimit ? '...' : '')
}
</script>

<template>
    <div class="flex items-center gap-x-2 cursor-pointer">
        <div class="size-10 bg-white relative">
          <img :class="{'opacity-0 absolute': imgIsLoading, 'opacity-100': !imgIsLoading}" @load="handleImageLoad" class="object-contain size-full" loading="lazy" alt="Product Image in Search" :src="props.product.image">
          <span v-show="imgIsLoading" class="loading loading-spinner text-rose-500"></span>
        </div>
        <span class="tracking-wider font-light">{{ truncatedTitle(props.product.title) }}</span>
    </div>
</template>
