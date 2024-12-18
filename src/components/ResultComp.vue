<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

import { onMounted, onUnmounted, computed, ref } from 'vue';

const imgIsLoading = ref(true)

const handleImageLoad = () => {
  imgIsLoading.value = false
}

const wordLimit = ref(7)

const originalTitle = ref(props.product.title)

const truncatedTitle = computed(() => {
  const words = originalTitle.value.split(' ')
  return words.slice(0, wordLimit.value).join(' ') + 
    (words.length > wordLimit.value ? '...' : '')
})

const checkScreenSize = () => {
  wordLimit.value = window.innerWidth <= 1280 ? 3 : 7
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
    <div class="flex items-center gap-x-2 cursor-pointer">
        <div class="size-10 bg-white relative">
          <img :class="{'opacity-0 absolute': imgIsLoading, 'opacity-100': !imgIsLoading}" @load="handleImageLoad" class="object-contain size-full" loading="lazy" alt="Product Image in Search" :src="props.product.image">
          <span v-show="imgIsLoading" class="loading loading-spinner text-rose-500"></span>
        </div>
        <span class="tracking-wider font-light">{{ truncatedTitle }}</span>
    </div>
</template>
