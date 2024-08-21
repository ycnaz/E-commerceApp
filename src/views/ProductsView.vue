<script setup>
import { useProductStore } from '@/stores/productStore';
import { onMounted } from 'vue';
import ItemCard from '@/components/ItemCard.vue';

const productStore = useProductStore()

onMounted(() => productStore.fetchAll())
</script>

<template>
    <figure class="pb-24 pt-10 px-5 flex flex-col">
        <figcaption class="text-5xl pl-10 mb-5">Products</figcaption>
        <ul v-if="productStore.items.length !== 0 && !productStore.loading" class="flex flex-wrap gap-5 justify-center">
            <ItemCard v-for="item in productStore.items" :key="item.id" :item />
        </ul>
        <span v-else-if="productStore.loading" class="loading loading-spinner text-rose-500 size-24 self-center my-auto mx-0"></span>
        <div v-else class="w-full h-full bg-rose-500 flex justify-center items-center">
            <span>No items returned by API.</span> <!-- Fake store API returns an empty array if the request is sent to a wrong URL -->
        </div>
    </figure>
</template>