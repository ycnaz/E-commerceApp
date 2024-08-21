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
})

import ItemCard from './ItemCard.vue';
</script>

<template>
    <div class="h-[500px]">
        <figure class="w-full h-full flex flex-col items-center">
            <div class="flex flex-col gap-y-5 min-w-[74%] h-full">
                <div class="flex">
                    <figcaption class="self-start text-3xl font-medium">{{ props.title }}</figcaption>
                    <button class="underline ml-auto place-self-end cursor-pointer hover:text-gray-500 focus:text-gray-500 focus:outline-none">See all</button>
                </div>
                <ul v-if="!props.loading && props.data.length != 0" class="flex gap-x-5 justify-center">
                    <ItemCard v-for="item in props.data.slice(0, 4)" :key="item.id" :item />
                </ul>
                <span v-else-if="props.loading" class="loading loading-spinner text-rose-500 size-24 self-center my-auto mx-0"></span>
                <div v-else-if="props.data.length == 0" class="w-full h-full bg-rose-500 flex justify-center items-center">
                    <span>No items returned by API.</span> <!-- Fake store API returns an empty array if the request is sent to a wrong URL -->
                </div>
            </div>
        </figure>
    </div>
</template>