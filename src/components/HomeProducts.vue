<script setup>
import { onMounted, computed } from 'vue';
import { useMenStore } from '@/stores/menStore';
import { useWomenStore } from '@/stores/womenStore';

const menStore = useMenStore()
const womenStore = useWomenStore()

const menItems = computed(() => menStore.items)
const womenItems = computed(() => womenStore.items)

onMounted(() => {
    menStore.fetchAll()
    womenStore.fetchAll()
})
</script>

<template>
    <div class="mt-5">
        <figure class="bg-rose-500 w-full h-96">
            <figcaption>Men's clothing</figcaption>
            <ul v-if="menItems" class="flex">
                <li v-for="item in menItems" :key="item.id" class="w-64 h-[90%]">
                    <div class="size-64 bg-white">
                        <img loading="lazy" alt="Product Image" :src="item.image" class="h-full w-full object-contain">
                    </div>
                </li>
            </ul>
        </figure>

        <figure class="bg-rose-500 w-full h-96 mt-5">
            <figcaption>Women's clothing</figcaption>
            <ul v-if="womenItems" class="flex">
                <li v-for="item in womenItems.slice(0, 4)" :key="item.id" class="w-64 h-[90%]">
                    <div class="size-64 bg-white">
                        <img loading="lazy" alt="Product Image" :src="item.image" class="h-full w-full object-contain">
                    </div>
                </li>
            </ul>
        </figure>
    </div>
</template>