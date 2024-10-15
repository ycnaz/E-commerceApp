<script setup>
import { computed, ref } from 'vue';
import { useExchangeStore } from '@/stores/exchangeStore';
import { useToast } from 'vue-toastification';

const exchangeStore = useExchangeStore()
const toast = useToast()

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
        return `${price.toFixed(2)}/USD`
    }
}

const products = computed(() => props.products)

const imgIsLoading = ref(true)

const handleImageLoad = () => {
    imgIsLoading.value = false
}

const handleQuantity = (action, id) => {
    const itemIndex = products.value.findIndex(item => item.product.id === id)
    const item = products.value[itemIndex]

    if (action === '-') {
        if (item.quantity > 1){
            item.quantity -= 1 
        } else {
            toast.warning("Can't reduce further. Please delete the item")
        }
    } else {
        item.quantity += 1
    }
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
            <tbody v-if="products">
                <tr v-for="product in products" :key="product.product.id" class="border-black">
                    <td class="p-5">
                        <div class="flex gap-x-5 items-center">
                            <span @click="$emit('removeProduct', product.product.id)" class="text-2xl cursor-pointer">&times;</span>
                            <div class="flex justify-center items-center bg-white size-40 rounded-lg">
                                <img :class="{'opacity-0 absolute': imgIsLoading, 'opacity-100': !imgIsLoading}" @load="handleImageLoad" loading="lazy" alt="Product Image" class="size-32 object-contain" :src="product.product.image">
                                <span v-show="imgIsLoading" class="loading loading-spinner text-rose-500"></span>
                            </div>
                            <section class="flex flex-col justify-center">
                                <span class="font-semibold underline">{{ product.product.category.charAt(0).toUpperCase() + product.product.category.slice(1) }}</span>
                                <h4 class="max-w-96 line-clamp-3 text-xl">{{ product.product.title }}</h4>
                            </section>
                        </div>
                    </td>
                    <td class="font-bold">{{ changePrices(product.product.price) }}</td>
                    <td class="font-bold">
                        <div class="flex gap-x-5 items-center">
                            <div @click="handleQuantity('-', product.product.id)" class="rounded-full size-8 flex justify-center items-center cursor-pointer">
                                <span class="text-2xl">-</span>
                            </div>
                            <span>{{ product.quantity }}</span>
                            <div @click="handleQuantity('+', product.product.id)" class="rounded-full size-8 flex justify-center items-center cursor-pointer">
                                <span class="text-2xl">+</span>
                            </div>
                        </div>
                    </td>
                    <td class="font-bold">{{ changePrices(product.product.price * product.quantity) }}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="!products.length" class="flex justify-center items-center grow">
            <span class="loading loading-spinner text-rose-500 size-32"></span>
        </div>
    </section>
</template>