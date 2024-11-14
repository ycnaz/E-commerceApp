<script setup>
import { useExchangeStore } from '@/stores/exchangeStore';
import { useUserAuthStore } from '@/stores/userAuthStore';
import { useModalStore } from '@/stores/modalStore';
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

const exchangeStore = useExchangeStore()
const userAuthStore = useUserAuthStore()
const modalStore = useModalStore()
const toast = useToast()

const productQuantity = ref(0)
const selectedRating = ref(null)

const imgIsLoading = ref(true)

const handleImageLoad = () => {
    imgIsLoading.value = false
}

const closeProductModal = () => {
    modalStore.resetProduct()
    productQuantity.value = 0
    imgIsLoading.value = true
}

const changePrices = (price) => {
    return Math.round(price * exchangeStore.latest.rates[exchangeStore.userPref])
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
    userAuthStore.addToCart({ "productId": modalStore.product.id, "quantity": productQuantity.value })
}

const submitRating = () => {
    const product = modalStore.product
    if (selectedRating.value) {
        const totalRatingScore = product.rating.rate * product.rating.count
        product.rating.count += 1
        product.rating.rate = (totalRatingScore + selectedRating.value) / product.rating.count
        selectedRating.value = null
        closeProductModal()
    }
}
</script>

<template>
    <Teleport to="body">
        <div v-if="modalStore.isOpen" class="fixed inset-0 z-50 size-full bg-black opacity-50"></div>
        <div v-if="modalStore.isOpen" class="fixed inset-0 size-full z-50 flex justify-center items-center">
            <div class="h-96 w-1/2 bg-rose-500 rounded-xl text-white p-5 relative">
                <section class="flex justify-between">
                    <h5>{{ modalStore.product.title.toUpperCase() }}</h5>
                    <span @click="closeProductModal" class="text-2xl cursor-pointer">&times;</span>
                </section>
                <div class="flex">
                    <div class="relative size-72 rounded bg-white flex justify-center items-center">
                        <img :class="{'opacity-0 absolute': imgIsLoading, 'opacity-100': !imgIsLoading}" @load="handleImageLoad" loading="lazy" alt="Product Image" :src="modalStore.product.image" class="size-72 object-contain">
                        <span v-show="imgIsLoading" class="loading loading-spinner text-rose-500"></span>
                    </div>
                    <div class="flex flex-col grow items-center px-5">
                        <section class="w-full h-full flex flex-col justify-center items-center">
                            <h6>Quantity:</h6>
                            <div class="flex w-full gap-x-5 justify-center">
                                <div @click="handleQuantity('-')" class="flex justify-center items-center size-10 cursor-pointer text-3xl rounded-full hover:bg-rose-400 transition-all">-</div>
                                <span class=" text-3xl">{{ productQuantity }}</span>
                                <div @click="handleQuantity('+')" class="flex justify-center items-center size-10 cursor-pointer text-3xl rounded-full hover:bg-rose-400 transition-all">+</div>
                            </div>
                        </section>
                        <span>Rating: {{ modalStore.product.rating.rate.toFixed(1) }}/5 ({{ modalStore.product.rating.count }})</span>
                        <div class="rating">
                            <input type="radio" v-model="selectedRating" :value="1" name="rating-1" class="mask mask-star-2 text-amber-600" />
                            <input type="radio" v-model="selectedRating" :value="2" name="rating-1" class="mask mask-star-2 text-amber-600" checked="checked" />
                            <input type="radio" v-model="selectedRating" :value="3" name="rating-1" class="mask mask-star-2 text-amber-600" />
                            <input type="radio" v-model="selectedRating" :value="4" name="rating-1" class="mask mask-star-2 text-amber-600" />
                            <input type="radio" v-model="selectedRating" :value="5" name="rating-1" class="mask mask-star-2 text-amber-600" />
                        </div>
                        <button @click="submitRating" class="bg-gray-800 py-2 px-3 rounded-lg">Rate</button>
                        <span class="mt-auto mb-5 text-3xl">Total price: {{ exchangeStore.userPref ? changePrices(modalStore.product.price) * productQuantity : modalStore.product.price * productQuantity }}/{{ exchangeStore.userPref ? exchangeStore.userPref : 'USD' }}</span>
                        <button @click="addToCart" class="w-full shrink-0 h-10 bg-gray-800 hover:bg-gray-700 transition-all">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>