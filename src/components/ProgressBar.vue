<script setup>
const props = defineProps({
    loading: Boolean
})

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const progress = ref(0)
const route = useRoute()

watch(() => props.loading, (newVal) => {
  if (newVal) {
    progress.value = 0
    simulateProgress()
  } else {
    progress.value = 100
    setTimeout(() => {
      progress.value = 0
    }, 200)
  }
})

watch(() => route.fullPath, () => {
  if (props.loading) {
    progress.value = 0
    simulateProgress()
  }
})

function simulateProgress() {
  let interval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += 10
    } else {
      clearInterval(interval)
    }
  }, 200)
}
</script>

<template>
    <div class="fixed inset-0 w-full h-[3px] z-50">
        <div class="h-full bg-emerald-500 custom-transition" :style="{ width: `${progress}%`, opacity: props.loading ? 1 : 0 }">
        </div>
    </div>
</template>

<style scoped>
.custom-transition {
    transition: width 0.2s, opacity 0.6s;
}
</style>