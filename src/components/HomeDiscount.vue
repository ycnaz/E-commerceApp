<script setup>
import { defineAsyncComponent } from 'vue';

const DiscountComp = defineAsyncComponent(() => import('../assets/svg/discount.svg'))
</script>

<template>
    <div class="w-full h-96 bg-gray-800 text-white flex justify-around items-center">
        <div class="flex flex-col gap-y-3">
            <strong class="text-5xl min-w-max">20% Discount For You!</strong>
            <span class="text-gray-300 text-xl">Get a discount on your first purchase</span>
            <button class="border border-rose-500 text-rose-500 py-3 px-10 grow-0 place-self-start mt-10 hover:bg-rose-500 hover:text-white focus:bg-rose-700 focus:text-white active:bg-rose-500 active:text-white focus:outline-none transition-all">GET COUPON</button>
        </div>
        <DiscountComp class="size-48" />
    </div>
</template>