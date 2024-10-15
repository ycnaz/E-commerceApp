<script setup>
import { useProductStore } from '@/stores/productStore';
import { useUserAuthStore } from '@/stores/userAuthStore';
import { onMounted, ref, computed } from 'vue';
import { useToast } from 'vue-toastification';
import ProductTable from '@/components/ProductTable.vue';
import { useExchangeStore } from '@/stores/exchangeStore';

const exchangeStore = useExchangeStore()
const productStore = useProductStore()
const userAuthStore = useUserAuthStore()
const toast = useToast()

const products = ref([])

const fetchCartItems = async () => {
    for (const cartItem of userAuthStore.userCart) {
        const product = productStore.items.find(product => product.id === cartItem.productId)
        if (product) {
            products.value.push({
                product: product,
                quantity: cartItem.quantity
            })
        }
    }
}

const cartTotalPrice = computed(() => {
    return products.value.map(product => product.product.price * product.quantity).reduce((acc, curr) => acc + curr, 0)
})

const COUPON = import.meta.env.VITE_COUPON_CODE

const couponUsed = ref(false)
const userCoupon = ref('')
const couponAmount = computed(() => {
    return couponUsed.value ? cartTotalPrice.value * 0.2 : 0
})

const handleCoupon = () => {
    if (userCoupon.value.trim()) {
        if (userCoupon.value === COUPON) {
            toast.success('Coupon used!')
            couponUsed.value = true
            userCoupon.value = ''
        } else {
            toast.warning('Coupon is not correct')
        }
    }
}


const changePrices = (price) => {
    if (exchangeStore.userPref) {
        return `${(price * exchangeStore.latest.rates[exchangeStore.userPref]).toFixed(2)}/${exchangeStore.userPref}`
    } else {
        return `${price.toFixed(2)}/USD`
    }
}

const removeCoupon = () => {
    couponUsed.value = false
    userCoupon.value = ''
    couponAmount.value = 0
    toast.success('Coupon removed!')
}

const removeProduct = (id) => {
    userAuthStore.removeFromCart(id)

    products.value = products.value.filter(item => item.product.id != id)
    toast.success('Item removed from your cart')
}

onMounted(async () => {
    await userAuthStore.fetchUserId()
    await userAuthStore.fetchCart()

    fetchCartItems()
})
</script>

<template>
    <div class="h-full flex p-5 gap-x-5">

        <ProductTable :products @removeProduct="removeProduct" />

        <div class="flex flex-col w-96">
            <div class="flex flex-col h-1/2 max-h-96 items-start justify-between">
                <div>
                    <h2 class="text-2xl font-semibold">Coupon Code</h2>
                    <p class="mt-3">Enter your coupon code to get a discount</p>
                </div>
                <div class="w-full">
                    <input v-model="userCoupon" class="mb-3 w-full rounded-3xl bg-gray-200 border-none focus:ring-0" type="text" placeholder="Coupon Code...">
                    <button @click="handleCoupon" class="w-full bg-black text-white py-3 rounded-3xl hover:ring hover:ring-black hover:ring-offset-2 transition-all">Apply</button>
                </div>
            </div>
            <div class="w-full divider"></div>
            <section class="flex flex-col h-1/2 max-h-96 bg-amber-300 p-3 rounded-lg">
                <h2 class="text-2xl font-semibold mb-3">Cart Total</h2>
                <div class="flex justify-between">
                    <span>Items:</span>
                    <span class="text-red-500">{{ changePrices(cartTotalPrice) }}</span>
                </div>
                <div class="flex justify-between">
                    <span>Coupon:</span>
                    <span class="text-emerald-500">{{ changePrices(couponAmount) }}</span>
                </div>
                <div class="flex justify-between font-semibold text-xl">
                    <span>Total:</span>
                    <span>{{ changePrices(couponUsed ? cartTotalPrice - couponAmount : cartTotalPrice) }}</span>
                </div>
                <div class="flex flex-col gap-y-2 mt-auto">
                    <button v-if="couponUsed" @click="removeCoupon" class="w-full bg-white text-rose-500 py-3 rounded-3xl hover:bg-slate-100 transition-all">Remove Coupon</button>
                    <button class="w-full bg-white font-bold text-black py-3 rounded-3xl hover:bg-slate-100 transition-all">Purchase</button>
                </div>
            </section>
        </div>

    </div>
</template>