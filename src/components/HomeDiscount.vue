<script setup>
import { defineAsyncComponent, ref } from 'vue';

const DiscountComp = defineAsyncComponent(() => import('../assets/svg/discount.svg'))

const COUPON = import.meta.env.VITE_COUPON_CODE

const showCoupon = ref(false)
</script>

<template>
    <div class="w-full h-96 bg-gray-800 text-white flex justify-around items-center">
        <div class="flex flex-col gap-y-3">
            <strong class="text-5xl min-w-max max-sm:text-4xl max-[400px]:text-3xl tracking-tight">20% Discount For You!</strong>
            <span class="text-gray-300 text-xl tracking-wider">Get a discount on your first purchase</span>
            <button @click="showCoupon = !showCoupon" class="border border-rose-500 text-rose-500 py-3 px-10 grow-0 place-self-start mt-10 tracking-wide hover:bg-rose-500 hover:text-white focus:bg-rose-700 focus:text-white active:bg-rose-500 active:text-white focus:outline-none transition-all">GET COUPON</button>
            <span class="select-all" v-if="showCoupon">{{ COUPON }}</span>
        </div>
        <DiscountComp class="size-48 shrink-0 max-md:hidden" />
    </div>
</template>