<script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import { defineAsyncComponent, ref, watch } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useExchangeStore } from './stores/exchangeStore';

  const CartComp = defineAsyncComponent(() => import('./assets/svg/cart.svg'))
  const MagnifyingComp = defineAsyncComponent(() => import('./assets/svg/magnifying.svg'))

  const toast = useToast()
  const exchangeStore = useExchangeStore()

  const navLinks = ref([
    {id: 1, name: 'Home', url: '/'},
    {id: 2, name: 'About', url: '/about'},
    {id: 3, name: 'Products', url: '/products'},
    {id: 4, name: 'Categories', url: '/categories'},
  ])

  const footerToast = () => {
    toast.warning('Footer links not implemented')
  }

  const selectedCurrency = ref('')

  watch(selectedCurrency, (newCurrency) => exchangeStore.userPref = newCurrency)
</script>

<template>
  <header class="w-full h-20 text-white z-50 bg-rose-500 shrink-0">
    <nav class="flex h-full justify-around items-center">
      <strong class="text-5xl cursor-pointer">YCN</strong>
      <div class="flex">
        <input class="text-black rounded-ss-3xl w-96 text-xl rounded-es-3xl focus:outline-none pl-5">
        <MagnifyingComp class="size-12 p-3 bg-gray-100 rounded-se-3xl rounded-ee-3xl cursor-pointer"/>
      </div>
      <div class="flex h-full relative">
        <RouterLink v-for="link in navLinks" active-class="active" :key="link.id" :to="link.url" class="group flex items-center justify-center hover:bg-rose-400 focus:outline-none w-28 h-full relative transition-all duration-300 cursor-pointer">
          <div class="max-w-max relative">
            <span class="focus:outline-none before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full group-focus:before:w-full group-active:before:w-full before:transition-all before:duration-300">{{ link.name }}</span>
          </div>
        </RouterLink>
        <select v-model="selectedCurrency" aria-label="Select Currency" class="bg-rose-500 border-none hover:bg-rose-600 focus:bg-rose-600 focus:outline-none focus:ring-0 transition-all duration-300 cursor-pointer relative">
          <option value="" disabled selected>Currency</option>
          <option v-for="(name, code) in exchangeStore.currencies" :key="code" :value="code">{{ code }}</option>
        </select>
      </div>
      <RouterLink to="/" class="rounded-full hover:bg-rose-400 transition-all duration-300 focus:outline-none focus:bg-rose-400 active:bg-rose-400">
        <CartComp class="size-12 p-2 rounded-full cursor-pointer" />
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="w-full h-64 bg-gray-300 flex items-center mt-auto shrink-0">
    <div class="w-full flex justify-evenly">
      <nav @click="footerToast" class="flex flex-col">
        <h6>BUY</h6>
        <span>Registration</span>
        <span>Bidding & buying help</span>
        <span>Stores</span>
        <span>Seasonal Sales and events</span>
        <span>Gift Cards</span>      
      </nav>
      <nav @click="footerToast" class="flex flex-col">
        <h6>SELL</h6>
        <span>Start selling</span>
        <span>How to sell</span>
        <span>Business sellers</span>
        <span>Affiliates</span>
      </nav>
      <nav @click="footerToast" class="flex flex-col">
        <h6>ABOUT US</h6>
        <span>Company info</span>
        <span>News</span>
        <span>Investors</span>
        <span>Careers</span>
        <span>Policies</span>
      </nav>
      <nav @click="footerToast" class="flex flex-col">
        <h6>HELP & CONTACT</h6>
        <span>Seller Center</span>
        <span>Contact Us</span>
        <span>Returns</span>
        <span>Money Back Guarantee</span>    
      </nav>
      <nav @click="footerToast" class="flex flex-col">
        <h6>FOLLOW US</h6>
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Twitter</span>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
nav > h6 {
  @apply underline
}

nav > span {
  @apply cursor-pointer place-self-start text-gray-500
}

.active span::before {
  @apply w-full
}
</style>