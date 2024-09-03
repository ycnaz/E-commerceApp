<script setup>
import { useUserAuthStore } from '@/stores/userAuthStore';
import { useCartStore } from '@/stores/cartStore';
import { onMounted, ref } from 'vue';

const userAuthStore = useUserAuthStore()
const cartStore = useCartStore()
const cart = ref(null)

const fetchCartItems = async () => {
    await cartStore.fetchAll()
    cart.value = cartStore.items.filter(cart => cart.id === userAuthStore.userId)
}

onMounted(() => fetchCartItems())
</script>

<template>
    <div class="h-full flex p-5 gap-x-5">

        <section class="flex flex-col grow">
            <h1 class="text-4xl font-semibold mb-3">Shopping Cart</h1>
            <strong>X items </strong><span>in your cart</span>
            <table class="bg-gray-200 grow rounded-lg">
                <tbody>
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    <tr>
                        <td class="p-5">
                            <div class="flex justify-center items-center bg-white size-40 rounded-lg">
                                <img class="size-32" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
                            </div>
                            <section>
                                <span>Clothing</span>
                                <h4 class="min-w-max text-xl">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                            </section>
                        </td>
                        <td>yo</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <div class="flex flex-col w-96">
            <div class="flex flex-col h-1/2 max-h-96 items-start justify-between">
                <div>
                    <h2 class="text-2xl font-semibold">Coupon Code</h2>
                    <p class="mt-3">Enter your coupon code to get a discount</p>
                </div>
                <div class="w-full">
                    <input class="mb-3 w-full rounded-3xl bg-gray-200 border-none focus:ring-0" type="text" placeholder="Coupon Code...">
                    <button class="w-full bg-black text-white py-3 rounded-3xl hover:ring hover:ring-black hover:ring-offset-2 transition-all">Apply</button>
                </div>
            </div>
            <div class="w-full divider"></div>
            <section class="flex flex-col h-1/2 max-h-96 bg-amber-300 p-3 rounded-lg">
                <h2 class="text-2xl font-semibold mb-3">Cart Total</h2>
                <div class="flex justify-between">
                    <span>Items:</span>
                    <span>2000/USD</span>
                </div>
                <div class="flex justify-between">
                    <span>Coupon:</span>
                    <span>-150/USD</span>
                </div>
                <div class="flex justify-between font-semibold text-xl">
                    <span>Total:</span>
                    <span>1850/USD</span>
                </div>
                <button class="w-full bg-white text-black py-3 rounded-3xl mt-auto hover:bg-slate-100 transition-all">Purchase</button>
            </section>
        </div>

    </div>
</template>