<script setup>
const props = defineProps({
    loading: {
        type: Boolean,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        required: true
    },
})

import { RouterLink } from 'vue-router';
import ItemCard from './ItemCard.vue';
</script>

<template>
    <div class="h-[500px] max-xl:w-full">
        <figure class="w-full h-full flex flex-col items-center">
            <div class="flex flex-col gap-y-5 min-w-[74%] max-w-full h-full">
                <div class="flex max-xl:px-5">
                    <figcaption class="self-start text-3xl font-medium">{{ props.title }}</figcaption>
                    <RouterLink :to="{ name: 'products', params: { category: props.category }}" class="underline ml-auto place-self-end cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:outline-none">See all</RouterLink>
                </div>
                <div class="horizontal-scroll-container flex justify-center items-center h-full w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500">
                    <ul v-if="!props.loading && props.data.length != 0" class="flex gap-x-5 min-w-full pb-4 max-xl:px-5">
                        <ItemCard v-for="item in props.data.slice(0, 4)" :key="item.id" class="w-min flex-shrink-0" :item />
                    </ul>
                    <span v-else-if="props.loading" class="loading loading-spinner text-rose-500 size-24 self-center my-auto mx-0"></span>
                    <div v-else-if="props.data.length == 0" class="w-full h-full bg-rose-500 flex justify-center items-center">
                        <span>No items returned by API.</span> <!-- Fake store API returns an empty array if the request is sent to a wrong URL -->
                    </div>
                </div>
            </div>
        </figure>
    </div>
</template>

<style scoped>
.horizontal-scroll-container {
  scrollbar-width: thin;
  scrollbar-color: #6b7280 #e5e7eb;
}

.horizontal-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.horizontal-scroll-container::-webkit-scrollbar-track {
  background: #f3f4f6;
}

.horizontal-scroll-container::-webkit-scrollbar-thumb {
  background-color: #6b7280;
  border-radius: 4px;
}
</style>