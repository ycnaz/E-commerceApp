<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

import { useExchangeStore } from '@/stores/exchangeStore';
import { useUserAuthStore } from '@/stores/userAuthStore';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const exchangeStore = useExchangeStore()
const userAuthStore = useUserAuthStore()
const router = useRouter()
const toast = useToast()

const changePrices = (price) => {
    return Math.round(price * exchangeStore.latest.rates[exchangeStore.userPref])
}

const imgIsLoading = ref(true)
const isModalOpen = ref(false)
const productQuantity = ref(0)

const handleImageLoad = () => {
    imgIsLoading.value = false
}

const openProductModal = () => {
    if (userAuthStore.isAuth) {
        isModalOpen.value = true
    } else {
        router.push({ name: 'sign-in' })
    }
}

const closeProductModal = () => {
    isModalOpen.value = false
}

const handleQuantity = (action) => {
    if (action === '-' && productQuantity.value !== 0) {
        productQuantity.value -= 1
    } else if (action === '+') {
        productQuantity.value += 1
    } else {
        return
    }
}

const addToCart = () => {
    if (!productQuantity.value) return

    toast.success('Item added to cart successfully')
    userAuthStore.addToCart({ "productId": props.item.id, "quantity": productQuantity.value })
}
</script>

<template>
    <li class="w-auto min-h-96 bg-gray-100 p-5 flex flex-col items-center rounded-3xl shadow-lg text-black">
        <h1 class="font-normal text-center line-clamp-2 mb-5">{{ props.item.title.toUpperCase() }}</h1>
        <div class="size-64 bg-white rounded-full flex justify-center items-center shadow-lg mt-auto relative">
            <img :class="{'opacity-0 absolute': imgIsLoading, 'opacity-100': !imgIsLoading}" @load="handleImageLoad" loading="lazy" alt="Product Image" :src="props.item.image" class="size-44 object-contain">
            <span v-show="imgIsLoading" class="loading loading-spinner text-rose-500"></span>
            <strong class="text-2xl font-normal mt-auto bg-rose-500 w-48 shadow-lg text-center text-white absolute bottom-0">{{ exchangeStore.userPref ? changePrices(props.item.price) : Math.round(props.item.price) }}/{{ exchangeStore.userPref ? exchangeStore.userPref : 'USD' }}</strong>
        </div>
        <button @click="openProductModal" class="bg-gray-800 text-white w-24 h-10 rounded-3xl font-light mt-5 shadow-lg hover:ring hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-200 focus:ring focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-200 active:ring active:ring-gray-800 active:ring-offset-2 active:ring-offset-gray-200 transition-all">BUY</button>
        <Teleport to="body">
            <div v-if="isModalOpen" class="fixed inset-0 z-50 size-full bg-black opacity-50"></div>
            <div v-if="isModalOpen" class="fixed inset-0 size-full z-50 flex justify-center items-center">
                <div class="h-96 w-1/2 bg-rose-500 rounded-xl text-white p-5 relative">
                    <section class="flex justify-between">
                        <h5>{{ props.item.title.toUpperCase() }}</h5>
                        <span @click="closeProductModal" class="text-2xl cursor-pointer">&times;</span>
                    </section>
                    <div class="flex">
                        <img loading="lazy" alt="Product Image" :src="props.item.image" class="size-72 object-contain bg-white rounded">
                        <div class="flex flex-col grow items-center px-5">
                            <section class="w-full flex items-center">
                                <h6>Quantity:</h6>
                                <div class="flex w-full gap-x-5 ml-28">
                                    <div @click="handleQuantity('-')" class="flex justify-center items-center size-10 cursor-pointer text-3xl rounded-full hover:bg-rose-400 transition-all">-</div>
                                    <span class=" text-3xl">{{ productQuantity }}</span>
                                    <div @click="handleQuantity('+')" class="flex justify-center items-center size-10 cursor-pointer text-3xl rounded-full hover:bg-rose-400 transition-all">+</div>
                                </div>
                            </section>
                            <span>Total price: {{ exchangeStore.userPref ? changePrices(props.item.price) * productQuantity : props.item.price * productQuantity }}/{{ exchangeStore.userPref ? exchangeStore.userPref : 'USD' }}</span>
                            <button @click="addToCart" class="w-full h-10 bg-gray-800 hover:bg-gray-700 transition-all">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </li>
</template>