<script setup>
  import { RouterView, RouterLink, useRouter, useRoute } from 'vue-router'
  import { computed, defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useExchangeStore } from './stores/exchangeStore';
  import { useCategoryStore } from './stores/categoryStore';
  import { useUserAuthStore } from './stores/userAuthStore';
  import { useProgressStore } from './stores/progressStore';
  import { useProductStore } from './stores/productStore';
  import { useBurgerStore } from './stores/burgerStore';
  import { useModalStore } from './stores/modalStore';
  import ProgressBar from './components/ProgressBar.vue';
  import ModalComp from './components/ModalComp.vue';
  import ResultComp from './components/ResultComp.vue';

  const CartComp = defineAsyncComponent(() => import('./assets/svg/cart.svg'))
  const MagnifyingComp = defineAsyncComponent(() => import('./assets/svg/magnifying.svg'))
  const ChevronComp = defineAsyncComponent(() => import('./assets/svg/chevron-down-w.svg'))

  const toast = useToast()
  const exchangeStore = useExchangeStore()
  const categoryStore = useCategoryStore()
  const userAuthStore = useUserAuthStore()
  const progressStore = useProgressStore()
  const productStore = useProductStore()
  const burgerStore = useBurgerStore()
  const modalStore = useModalStore()

  const userCartItemNum = computed(() => userAuthStore.userCart.length)

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

  const getUserData = async () => {
    await userAuthStore.fetchUserId()
    await userAuthStore.fetchCart()
  }

  const query = ref('')
  const resultStatus = ref(false)

  const productsBasedOnQuery = computed(() => {
    return productStore.items.filter(product => product.title.toLowerCase().includes(query.value.toLowerCase()))
  })

  const showSearchResult = () => {
    if (query.value.trim && query.value.length > 0 && productsBasedOnQuery.value.length) {
      resultStatus.value = true
    } else {
      resultStatus.value = false
    }
  }

  const redirectToProduct = (product) => {
    query.value = ''
    resultStatus.value = false

    if (!userAuthStore.isAuth) return router.push({ name: 'sign-in' })
    
    modalStore.setProduct(product)
  }

  const toggleHamburger = () => {
    burgerStore.toggle()
  }

  const isLargeScreen = ref(true)

  const checkScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1280
    if (isLargeScreen.value)
      burgerStore.close()
  }

  const categoryPopUp = ref(false)
  const currencyPopUp = ref(false)

  const toggleCategoryPopUp = () => {
    if (!categoryPopUp.value && currencyPopUp.value) {
      currencyPopUp.value = false
    }
    categoryPopUp.value = !categoryPopUp.value
  }

  const toggleCurrencyPopUp = () => {
    if (categoryPopUp.value && !currencyPopUp.value) {
      categoryPopUp.value = false
    }
    currencyPopUp.value = !currencyPopUp.value
  }

  onMounted(() => {
    categoryStore.fetchAll()
    productStore.fetchAll()
    checkScreenSize()
  
    window.addEventListener('resize', checkScreenSize)
    if (userAuthStore.isAuth) {
      getUserData()
    }
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize)
  })
</script>

<template>
  <ModalComp />
  <header class="w-full h-20 text-white z-50 bg-rose-500 shrink-0">
    <ProgressBar :loading="progressStore.loading" />
    <div v-if="burgerStore.isOpen" class="fixed top-0 h-screen w-screen bg-black z-[60] opacity-60"></div>
    <nav class="flex h-full items-center px-5 gap-x-5 max-xl:justify-between">

      <RouterLink :to="{ name: 'home' }" class="text-5xl cursor-pointer min-w-max font-bold tracking-tighter">E-Shop</RouterLink>

      <div :class="['flex justify-between items-center w-full xl:h-full xl:gap-x-5 max-xl:flex-col max-xl:fixed max-xl:w-96 max-xl:h-full max-xl:bg-black max-xl:gap-y-5 max-xl:top-0 max-[384px]:w-full transition-all', burgerStore.isOpen ? 'max-xl:right-0 z-[70]' : 'max-xl:-right-96']">
        <div class="flex order-1 grow relative max-xl:order-3">
          <input @input="showSearchResult" v-model="query" class="text-black border-none rounded-ss-3xl w-auto flex grow text-xl rounded-es-3xl focus:ring-0 focus:outline-none pl-5">
          <MagnifyingComp class="size-12 p-3 bg-gray-100 rounded-se-3xl rounded-ee-3xl cursor-pointer"/>
  
          <div :class="resultStatus ? 'scale-100' : 'scale-0'" class="absolute bg-gray-900 custom-shadow custom-scrollbar w-full max-h-96 overflow-y-scroll top-20 px-5 py-3 origin-top flex flex-col gap-y-2 transition-all max-xl:-top-[400px] max-xl:z-10 max-xl:origin-bottom">
            <ResultComp v-for="product in productsBasedOnQuery" :key="product.id" @click="redirectToProduct(product)" :product />
          </div>
        </div>
  
        <div class="flex order-2 h-full relative max-xl:flex-col max-xl:order-1">
  
          <RouterLink v-for="link in navLinks" :class="{ 'active': isActive(link.url) }" :key="link.id" :to="link.url" class="group flex items-center justify-center hover:bg-rose-400 focus:outline-none w-28 h-full relative transition-all duration-300 max-xl:h-12">
            <div class="max-w-max relative">
              <span class="tracking-wide focus:outline-none before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full group-focus:before:w-full group-active:before:w-full before:transition-all before:duration-300">{{ link.name }}</span>
            </div>
          </RouterLink>
  
          <button @click="toggleCategoryPopUp" class="group flex justify-center items-center gap-2 h-full w-28 hover:bg-rose-400 transition-all duration-300 relative max-xl:h-12 max-xl:hover:bg-inherit">
            <span class="relative tracking-wide focus:outline-none before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full group-focus:before:w-full group-active:before:w-full before:transition-all before:duration-300">Categories</span>
            <ChevronComp :class="['size-5 transition-all', { 'rotate-180': categoryPopUp }]" />
            <section :class="['flex flex-col items-center custom-shadow absolute top-24 right-0 p-3 rounded-md cursor-default gap-y-1 bg-white text-black size-fit min-w-40 scale-0 transition-all origin-top-right', { 'scale-100': categoryPopUp }]">
              <h3 class="underline text-xl text-rose-500 text-start">Categories</h3>
              <div class="flex flex-col items-center flex-wrap h-full">
                <span v-for="item in categoryStore.items" :key="item" @click="navigate(item)" class="max-w-max cursor-pointer text-gray-500">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</span>
              </div>
            </section>
          </button>
  
          <button @click="toggleCurrencyPopUp" class="group flex justify-center items-center gap-2 h-full w-28 hover:bg-rose-400 transition-all duration-300 relative max-xl:h-12 max-xl:hover:bg-inherit">
            <span class="relative tracking-wide focus:outline-none before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-white before:-translate-x-1/2 group-hover:before:w-full group-focus:before:w-full group-active:before:w-full before:transition-all before:duration-300">{{ exchangeStore.userPref ? exchangeStore.userPref : 'Currency' }}</span>
            <ChevronComp :class="['size-5 transition-all', { 'rotate-180': currencyPopUp }]" />
            
            <section :class="['custom-shadow absolute top-24 right-0 p-3 rounded-md cursor-default gap-y-1 bg-white text-black h-[500px] w-[800px] scale-0 transition-all origin-top-right max-lg:w-screen max-lg:-right-32 max-xl:z-10', { 'scale-100': currencyPopUp }]">
              <h3 class="underline text-xl text-rose-500 text-start">Currencies</h3>
              <div class="flex flex-col flex-wrap h-full">
                <span @click="selectedCurrency(code)" v-for="(name, code) in exchangeStore.currencies" :key="code" class="max-w-max cursor-pointer text-gray-500">{{ code }}</span>
              </div>
            </section>

          </button>
  
        </div>
        
        <RouterLink :to="{ name: 'cart' }" :class="{ 'indicator': userCartItemNum }" class="rounded-full order-3 hover:bg-rose-400 transition-all duration-300 focus:outline-none focus:bg-rose-400 active:bg-rose-400 max-xl:order-2">
          <span v-if="userCartItemNum" class="indicator-item badge bg-amber-500">{{ userCartItemNum }}</span>
          <CartComp class="size-12 p-2 rounded-full cursor-pointer" />
        </RouterLink>
  
        <RouterLink @mousedown="userAuthStore.signOut" :to="{ name: 'sign-in' }" class="rounded order-4 px-3 py-2 hover:bg-rose-400 focus:bg-rose-600 focus:outline-none transition-all duration-300">
          {{ userAuthStore.isAuth ? 'Sign out' : 'Sign in' }}
        </RouterLink>
      </div>

      <div @click="toggleHamburger" :class="['flex flex-col px-2 py-3 gap-y-2 cursor-pointer xl:hidden z-20', {'fixed top-4 right-4 z-[70]': burgerStore.isOpen}]">
        <div :class="['w-10 bg-white h-1 rounded-lg transition-all', burgerStore.isOpen ? 'rotate-45 translate-y-[6px]' : '' ]"></div>
        <div :class="['w-10 bg-white h-1 rounded-lg transition-all', burgerStore.isOpen ? 'hidden' : '' ]"></div>
        <div :class="['w-10 bg-white h-1 rounded-lg transition-all', burgerStore.isOpen ? '-rotate-45 -translate-y-[6px]' : '' ]"></div>
      </div>

    </nav>
  </header>

  <main class="flex flex-col grow">
    <RouterView />
  </main>

  <footer class="w-full h-auto p-5 min-h-64 bg-gray-300 flex items-center mt-auto shrink-0">
    <div class="w-full grid grid-cols grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-y-5" id="footer">
      <nav @click="footerToast" class="flex flex-col items-center">
        <h6>BUY</h6>
        <p>Registration</p>
        <p>Bidding & buying help</p>
        <p>Stores</p>
        <p>Seasonal Sales and events</p>
        <p>Gift Cards</p>      
      </nav>
      <nav @click="footerToast" class="flex flex-col items-center">
        <h6>SELL</h6>
        <p>Start selling</p>
        <p>How to sell</p>
        <p>Business sellers</p>
        <p>Affiliates</p>
      </nav>
      <nav @click="footerToast" class="flex flex-col items-center">
        <h6>ABOUT US</h6>
        <p>Company info</p>
        <p>News</p>
        <p>Investors</p>
        <p>Careers</p>
        <p>Policies</p>
      </nav>
      <nav @click="footerToast" class="flex flex-col items-center">
        <h6>HELP & CONTACT</h6>
        <p>Seller Center</p>
        <p>Contact Us</p>
        <p>Returns</p>
        <p>Money Back Guarantee</p>    
      </nav>
      <nav @click="footerToast" class="flex flex-col items-center">
        <h6>FOLLOW US</h6>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
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

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4b5563 !important;
}

#footer > nav > p {
  @apply text-gray-500 min-w-max
}

#footer > nav > h6 {
  @apply min-w-max
}
</style>