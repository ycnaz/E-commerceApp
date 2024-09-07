<script setup>
import { ref } from 'vue';
import { useExchangeStore } from '@/stores/exchangeStore';

const exchangeStore = useExchangeStore()

const props = defineProps({
    products: {
        type: Object,
        required: true
    }
})

const changePrices = (price) => {
    if (exchangeStore.userPref) {
        return `${(price * exchangeStore.latest.rates[exchangeStore.userPref]).toFixed(2)}/${exchangeStore.userPref}`
    } else {
        return `${price}/USD`
    }
}

const imgIsLoading = ref(true)

const handleImageLoad = () => {
    imgIsLoading.value = false
}
</script>

<template>
    <section class="flex flex-col grow">
        <h1 class="text-4xl font-semibold mb-3">Shopping Cart</h1>
        <table class="table table-pin-rows rounded-none bg-gray-200">
            <thead>
                <tr class="border-bottom border-black bg-gray-200">
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody v-if="props.products">
                <tr v-for="product in props.products" :key="product.product.id" class="border-black">
                    <td class="p-5">
                        <div class="flex gap-x-5">
                            <div class="flex justify-center items-center bg-white size-40 rounded-lg">
                                <img :class="{'opacity-0 absolute': imgIsLoading, 'opacity-100': !imgIsLoading}" @load="handleImageLoad" loading="lazy" alt="Product Image" class="size-32 object-contain" :src="product.product.image">
                                <span v-show="imgIsLoading" class="loading loading-spinner text-rose-500"></span>
                            </div>
                            <section class="flex flex-col justify-center">
                                <span>{{ product.product.category.charAt(0).toUpperCase() + product.product.category.slice(1) }}</span>
                                <h4 class="min-w-max text-xl">{{ product.product.title }}</h4>
                            </section>
                        </div>
                    </td>
                    <td class="font-bold">{{ changePrices(product.product.price) }}</td>
                    <td class="font-bold">{{ product.quantity }}</td>
                    <td class="font-bold">{{ changePrices(product.product.price * product.quantity) }}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="!props.products.length" class="flex justify-center items-center grow">
            <span class="loading loading-spinner text-rose-500 size-32"></span>
        </div>
    </section>
</template>