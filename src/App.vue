<script setup>
  import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router'
  import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useExchangeStore } from './stores/exchangeStore';
  import { useCategoryStore } from './stores/categoryStore';
  import { useUserAuthStore } from './stores/userAuthStore';
  import { useProgressStore } from './stores/progressStore';
  import { useProductStore } from './stores/productStore';
  import { useCartStore } from './stores/cartStore';
  import { useUserStore } from './stores/userStore';
  import ProgressBar from './components/ProgressBar.vue';

  const CartComp = defineAsyncComponent(() => import('./assets/svg/cart.svg'))
  const MagnifyingComp = defineAsyncComponent(() => import('./assets/svg/magnifying.svg'))
  const ChevronComp = defineAsyncComponent(() => import('./assets/svg/chevron-down-w.svg'))

  const toast = useToast()
  const exchangeStore = useExchangeStore()
  const categoryStore = useCategoryStore()
  const userAuthStore = useUserAuthStore()
  const progressStore = useProgressStore()
  const productStore = useProductStore()
  const cartStore = useCartStore()
  const users = useUserStore()

  const userCartItemNum = computed(() => userAuthStore.userCart.length)

  watch(() => userAuthStore.userCart.length, (newVal) => console.log(newVal))

  const navLinks = ref([
    {id: 1, name: 'Home', url: '/'},
    {id: 2, name: 'Products', url: '/products'},
  ])

  const footerToast = () => {
    toast.warning('Footer links not implemented')
  }

  const selectedCurrency = (curr) => {
    exchangeStore.userPref = curr
  }

  const router = useRouter()
  const route = useRoute()

  const navigate = (category) => {
    router.push({ name: 'products', params: { category }})
  }

  const isActive = (url) => {
    if (url != '/') {
      return route.path.startsWith(url)
    } else {
      return route.path == '/'
    }
  }

  const fetchUsers = async () => {
    await users.fetchAll()
    userAuthStore.fetchUserId(users.items)
    await cartStore.fetchAll()
  }

  const getUserData = async () => {
    await userAuthStore.fetchUserId()
    await userAuthStore.fetchCart()
  }

  onMounted(() => {
    categoryStore.fetchAll()
    productStore.fetchAll()
    fetchUsers()
    if (userAuthStore.isAuth) {
      getUserData()
    }
  })
</script>

<template>
  <header class="w-full h-20 text-white z-50 bg-rose-500 shrink-0">
    <ProgressBar :loading="progressStore.loading" />
    <nav class="flex h-full justify-around items-center">

      <strong class="text-5xl cursor-pointer">YCN</strong>

      <div class="flex grow max-w-[40%]">
        <input class="text-black border-none rounded-ss-3xl w-auto flex grow text-xl rounded-es-3xl focus:ring-0 focus:outline-none pl-5">
        <MagnifyingComp class="size-12 p-3 bg-gray-100 rounded-se-3xl rounded-ee-3xl cursor-pointer"/>
      </div>

      <div class="flex h-full relative">

        <RouterLink v-for="link in navLinks" :class="{ 'active': isActive(link.url) }" :key="link.id" :to="link.url" class="group flex items-center justify-center hover:bg-rose-400 focus:outline-none w-28 h-full relative transition-all duration-300">
          <div class="max-w-max relative">
            <span class="focus:outline-none before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full group-focus:before:w-full group-active:before:w-full before:transition-all before:duration-300">{{ link.name }}</span>
          </div>
        </RouterLink>

        <button class="group flex justify-center items-center gap-2 h-full w-28 hover:bg-rose-400 transition-all duration-300 relative">
          <span class="relative focus:outline-none before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full group-focus:before:w-full group-active:before:w-full before:transition-all before:duration-300">Categories</span>
          <ChevronComp class="size-5 group-focus:rotate-180 transition-all" />
          <section class="flex flex-col items-center custom-shadow absolute top-24 right-0 p-3 rounded-md cursor-default gap-y-1 bg-white text-black size-fit min-w-40 scale-0 group-focus:scale-100 transition-all origin-top-right">
            <h3 class="underline text-xl text-rose-500 text-start">Categories</h3>
            <div class="flex flex-col items-center flex-wrap h-full">
              <span v-for="item in categoryStore.items" :key="item" @click="navigate(item)" class="max-w-max cursor-pointer text-gray-500">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</span>
            </div>
          </section>
        </button>

        <button class="group flex justify-center items-center gap-2 h-full w-28 hover:bg-rose-400 transition-all duration-300 relative">
          <span class="relative focus:outline-none before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full group-focus:before:w-full group-active:before:w-full before:transition-all before:duration-300">{{ exchangeStore.userPref ? exchangeStore.userPref : 'Currency' }}</span>
          <ChevronComp class="size-5 group-focus:rotate-180 transition-all" />
          <section class="custom-shadow absolute top-24 right-0 p-3 rounded-md cursor-default gap-y-1 bg-white text-black h-[500px] w-[800px] scale-0 group-focus:scale-100 transition-all origin-top-right">
            <h3 class="underline text-xl text-rose-500 text-start">Currencies</h3>
            <div class="flex flex-col flex-wrap h-full">
              <span @click="selectedCurrency(code)" v-for="(name, code) in exchangeStore.currencies" :key="code" class="max-w-max cursor-pointer text-gray-500">{{ code }}</span>
            </div>
          </section>
        </button>

      </div>
      
      <RouterLink :to="{ name: 'cart' }" :class="{ 'indicator': userCartItemNum }" class="rounded-full hover:bg-rose-400 transition-all duration-300 focus:outline-none focus:bg-rose-400 active:bg-rose-400">
        <span v-if="userCartItemNum" class="indicator-item badge bg-amber-500">{{ userCartItemNum }}</span>
        <CartComp class="size-12 p-2 rounded-full cursor-pointer" />
      </RouterLink>

      <RouterLink @mousedown="userAuthStore.signOut" :to="{ name: 'sign-in' }" class="rounded px-3 py-2 hover:bg-rose-400 focus:bg-rose-600 focus:outline-none transition-all duration-300">
        {{ userAuthStore.isAuth ? 'Sign out' : 'Sign in' }}
      </RouterLink>
    </nav>
  </header>

  <main class="flex flex-col grow">
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

.custom-shadow {
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
}
</style>