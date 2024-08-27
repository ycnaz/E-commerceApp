<script setup>
const props = defineProps({
    category: {
        required: false
    }
})

import { useProductStore } from '@/stores/productStore';
import { computed, onMounted } from 'vue';
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
    <figure class="pb-24 pt-10 px-5 flex flex-col">
        <figcaption class="text-5xl pl-10 mb-5">{{ props.category.charAt(0).toUpperCase() + props.category.slice(1) }}</figcaption>
        <ul v-if="filteredItems.length !== 0 && !productStore.loading" class="flex flex-wrap gap-5 justify-center">
            <ItemCard v-for="item in filteredItems" :key="item.id" :item />
        </ul>
        <span v-else-if="productStore.loading" class="loading loading-spinner text-rose-500 size-24 self-center my-auto mx-0"></span>
        <div v-else class="w-full h-full bg-rose-500 flex justify-center items-center">
            <span>No items returned by API.</span> <!-- Fake store API returns an empty array if the request is sent to a wrong URL -->
        </div>
    </figure>
</template>