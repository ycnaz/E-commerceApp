<script setup>
const props = defineProps({
    category: {
        required: false
    }
})

import { useProductStore } from '@/stores/productStore';
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import ItemCard from '@/components/ItemCard.vue';

const productStore = useProductStore()

const filteredItems = computed(() => {
    if (props.category !== 'all') {
        return productStore.items.filter(item => item.category === props.category)
    }
    return productStore.items
})

onMounted(() => productStore.fetchAll())
</script>

<template>
    <figure class="pb-24 pt-10 px-5 flex flex-col gap-y-5">
        <RouterLink :to="{ name: 'sell' }" class="bg-gray-800 h-16 rounded-lg flex justify-center items-center text-white tracking-widest text-lg hover:bg-gray-700 active:bg-gray-600 focus:bg-gray-700 focus:ring-0 transition-all">SELL YOUR PRODUCT</RouterLink>
        <figcaption class="text-5xl pl-10 font-extralight tracking-wider">{{ props.category.toUpperCase() }}</figcaption>
        <ul v-if="filteredItems.length !== 0 && !productStore.loading" class="grid grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))] gap-5">
            <ItemCard v-for="item in filteredItems" :key="item.id" :item />
        </ul>
        <span v-else-if="productStore.loading" class="loading loading-spinner text-rose-500 size-24 self-center my-auto mx-0"></span>
        <div v-else class="w-full h-full bg-rose-500 flex justify-center items-center">
            <span>No items returned by API.</span> <!-- Fake store API returns an empty array if the request is sent to a wrong URL -->
        </div>
    </figure>
</template>