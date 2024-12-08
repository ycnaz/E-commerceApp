<script setup>
import { ref, defineAsyncComponent } from 'vue';
import AuthInput from './AuthInput.vue';
import { useToast } from 'vue-toastification';

const FacebookComp = defineAsyncComponent(() => import('../assets/svg/facebook.svg'))
const GoogleComp = defineAsyncComponent(() => import('../assets/svg/google.svg'))
const LinkedinComp = defineAsyncComponent(() => import('../assets/svg/linkedin.svg'))

const username = ref('')
const email = ref('')
const password = ref('')
const confirm_password = ref('')

const toast = useToast()

const notImplemented = () => {
    toast.warning('Not implemented')
}
</script>

<template>
    <div class="h-full flex flex-col justify-center items-center max-sm:py-5">
        <section>
            <h1 class="text-6xl mb-5 place-self-start">Register</h1>
            <div class="flex max-sm:flex-col">
                <form class="flex flex-col justify-center space-y-3" @submit.prevent="notImplemented">
                    <AuthInput v-model="username" type="text" input-id="username" label-for="username" label-text="Username" min-length="3" auto-complete="username" max-length="15"/>
                    <AuthInput v-model="email" type="email" input-id="email" label-for="email" label-text="Email" min-length="3"/>
                    <AuthInput v-model="password" type="password" input-id="password" label-for="password" label-text="Password" min-length="6" auto-complete="password"/>
                    <AuthInput v-model="confirm_password" type="password" input-id="confirm" label-for="confirm" label-text="Confirm Password" min-length="6" auto-complete="off"/>
                    <span>Already have an account? <RouterLink :to="{ name: 'sign-in'}" class="underline text-rose-500">Sign in</RouterLink></span>
                    <button type="submit" class="bg-rose-500 text-white w-full h-10 hover:bg-rose-400 focus:bg-rose-600 active:bg-rose-400 transition-all">Register</button>
                </form>
                <div class="divider divider-horizontal max-sm:divider-vertical">OR</div>
                <div class="flex flex-col gap-y-5 justify-center max-sm:flex-row max-sm:gap-x-5" @click="notImplemented">
                    <FacebookComp class="size-14 hover:scale-110 cursor-pointer transition-all" />
                    <GoogleComp class="size-14 hover:scale-110 cursor-pointer transition-all" />
                    <LinkedinComp class="size-14 scale-110 hover:scale-125 cursor-pointer transition-all" />
                </div>
            </div>
        </section>
    </div>
</template>