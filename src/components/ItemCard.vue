<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    disabled: {
        type: Boolean,
    }
})

import { useExchangeStore } from '@/stores/exchangeStore';
import { useUserAuthStore } from '@/stores/userAuthStore';
import { useModalStore } from '@/stores/modalStore';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';

const exchangeStore = useExchangeStore()
const userAuthStore = useUserAuthStore()
const modalStore = useModalStore()
const router = useRouter()

const changePrices = (price) => {
    return Math.round(price * exchangeStore.latest.rates[exchangeStore.userPref])
}

const imgIsLoading = ref(true)

const handleImageLoad = () => {
    imgIsLoading.value = false
}

const editCheck = computed(() => {
    if (userAuthStore.isAuth && userAuthStore.userId === props.item.userId) {
        return true
    } else return false
})

const openProductModal = () => {
    if (editCheck.value) {
        router.push({ name: 'sell', params: { id: props.item.id } })
    } else {
        if (userAuthStore.isAuth) {
            modalStore.setProduct(props.item)
        } else {
            router.push({ name: 'sign-in' })
        }
    }
}
</script>

<template>
    <li class="w-auto min-h-96 bg-gray-100 p-5 flex flex-col items-center rounded-3xl shadow-lg text-black">
        <h1 class="font-normal text-center line-clamp-2 mb-5 tracking-wider">{{ props.item.title.toUpperCase() }}</h1>
        <div @click="openProductModal" class="size-64 bg-white rounded-full flex justify-center items-center shadow-lg mt-auto relative cursor-pointer">
            <img :class="{'opacity-0 absolute': imgIsLoading, 'opacity-100': !imgIsLoading}" @load="handleImageLoad" loading="lazy" alt="Product Image" :src="props.item.image" class="size-44 object-contain">
            <span v-show="imgIsLoading" class="loading loading-spinner text-rose-500"></span>
            <strong class="text-2xl font-light mt-auto bg-rose-500 w-48 shadow-lg text-center text-white absolute bottom-0">{{ exchangeStore.userPref ? changePrices(props.item.price) : Math.round(props.item.price) }} / <span class="tracking-wide">{{ exchangeStore.userPref ? exchangeStore.userPref : 'USD' }}</span></strong>
        </div>
        <button @click="openProductModal" :disabled="props.disabled" class="bg-gray-800 text-white w-24 h-10 rounded-3xl font-medium mt-5 shadow-lg tracking-widest hover:ring hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-200 focus:ring focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-200 active:ring active:ring-gray-800 active:ring-offset-2 active:ring-offset-gray-200 transition-all">{{ editCheck ? 'EDIT' : 'BUY' }}</button>
    </li>
</template>