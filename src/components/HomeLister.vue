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
    slicer: String
})
</script>

<template>
    <div class="h-[500px]">
        <figure class="w-full h-96 flex flex-col items-center">
            <div class="flex flex-col gap-y-5 min-w-[70%]">
                <figcaption class="self-start text-3xl font-medium">{{ props.title }}</figcaption>
                <ul v-if="!props.loading" class="flex gap-x-5">
                    <li v-for="item in props.data.slice(0, props.slicer)" :key="item.id" class="w-min min-h-96 bg-gray-100 p-5 flex flex-col items-center rounded-3xl shadow-lg text-black">
                        <h1 class="font-normal text-center line-clamp-2 mb-5">{{ item.title.toUpperCase() }}</h1>
                        <div class="size-64 bg-white rounded-full flex justify-center items-center shadow-lg mt-auto relative">
                            <img loading="lazy" alt="Product Image" :src="item.image" class="size-44 object-contain">
                            <strong class="text-2xl font-normal mt-auto bg-rose-500 w-20 shadow-lg text-center text-white absolute top-1/2 -translate-y-1/2 left-[77%] rounded-l-lg">${{ Math.round(item.price) }}</strong>
                        </div>
                        <button class="bg-gray-800 text-white w-24 h-10 rounded-3xl font-light mt-5 shadow-lg hover:ring hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-200 focus:ring focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-200 active:ring active:ring-gray-800 active:ring-offset-2 active:ring-offset-gray-200 transition-all">BUY</button>
                    </li>
                </ul>
                <span v-else-if="props.loading" class="loading loading-spinner text-rose-500 size-24 self-center"></span>
                <div v-else></div>
            </div>
        </figure>
    </div>
</template>