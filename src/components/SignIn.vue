<script setup>
import { ref, defineAsyncComponent } from 'vue';
import AuthInput from './AuthInput.vue';
import { useToast } from 'vue-toastification';
import { useUserAuthStore } from '@/stores/userAuthStore';
import { useRoute, useRouter } from 'vue-router';

const FacebookComp = defineAsyncComponent(() => import('../assets/svg/facebook.svg'))
const GoogleComp = defineAsyncComponent(() => import('../assets/svg/google.svg'))
const LinkedinComp = defineAsyncComponent(() => import('../assets/svg/linkedin.svg'))

const username = ref('')
const password = ref('')

const toast = useToast()
const userAuthStore = useUserAuthStore()
const route = useRoute()
const router = useRouter()

const redirectPath = route.query.redirect || '/'

const notImplemented = () => {
    toast.warning('Not implemented')
}

const signIn = async () => {
    await userAuthStore.signIn({
        username: username.value,
        password: password.value
    }, username.value)

    if (userAuthStore.isAuth) {
        redirectAfterLogin()
    }
}

// cart.value = cartStore.items.find(cart => cart.id === userAuthStore.userId)

const redirectAfterLogin = () => {
    router.push(redirectPath)
}
</script>

<template>
    <div class="h-full flex flex-col justify-center items-center">
        <span v-if="userAuthStore.error" class="text-rose-500">{{ userAuthStore.error }}</span>
        <section>
            <h1 class="text-6xl mb-5 place-self-start">Sign in</h1>
            <div class="flex flex-col">
                <form @submit.prevent="signIn" class="flex flex-col justify-center space-y-3">
                    <AuthInput v-model="username" type="text" input-id="username" label-for="username" label-text="Username" min-length="3" auto-complete="username" max-length="15"/>
                    <AuthInput v-model="password" type="password" input-id="password" label-for="password" label-text="Password" min-length="6" auto-complete="password"/>
                    <span>Don't have an account? <RouterLink :to="{ name: 'register'}" class="underline text-rose-500">Register</RouterLink></span>
                    <button type="submit" class="bg-rose-500 text-white w-full h-10 hover:bg-rose-400 focus:bg-rose-600 active:bg-rose-400 transition-all">
                        <span v-if="!userAuthStore.loading">Sign in</span>
                        <span v-else class="loading loading-spinner text-black"></span>
                    </button>
                </form>
                <div class="divider">OR</div>
                <div class="flex gap-x-5 justify-center" @click="notImplemented">
                    <FacebookComp class="size-14 hover:scale-110 cursor-pointer transition-all" />
                    <GoogleComp class="size-14 hover:scale-110 cursor-pointer transition-all" />
                    <LinkedinComp class="size-14 scale-110 hover:scale-125 cursor-pointer transition-all" />
                </div>
            </div>
        </section>
    </div>
</template>