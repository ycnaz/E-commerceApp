<script setup>
import { ref, defineAsyncComponent } from 'vue';
import AuthInput from './AuthInput.vue';

const FacebookComp = defineAsyncComponent(() => import('../assets/svg/facebook.svg'))
const GoogleComp = defineAsyncComponent(() => import('../assets/svg/google.svg'))
const LinkedinComp = defineAsyncComponent(() => import('../assets/svg/linkedin.svg'))

const username = ref('')
const email = ref('')
const password = ref('')
const confirm_password = ref('')
</script>

<template>
    <div class="h-full flex flex-col justify-center items-center">
        <section>
            <h1 class="text-6xl mb-5 place-self-start">Register</h1>
            <div class="flex">
                <form class="flex flex-col justify-center space-y-3" @submit.prevent="">
                    <AuthInput v-model="username" type="text" input-id="username" label-for="username" label-text="Username"/>
                    <AuthInput v-model="email" type="email" input-id="email" label-for="email" label-text="Email"/>
                    <AuthInput v-model="password" type="password" input-id="password" label-for="password" label-text="Password"/>
                    <AuthInput v-model="confirm_password" type="password" input-id="confirm" label-for="confirm" label-text="Confirm Password"/>
                    <span>Already have an account? <RouterLink :to="{ name: 'sign-in'}" class="underline text-rose-500">Sign in</RouterLink></span>
                    <button type="submit" class="bg-rose-500 text-white w-full h-10 hover:bg-rose-400 focus:bg-rose-600 active:bg-rose-400 transition-all">Register</button>
                </form>
                <div class="divider divider-horizontal">OR</div>
                <div class="flex flex-col gap-y-5 justify-center">
                    <FacebookComp class="size-14" />
                    <GoogleComp class="size-14" />
                    <LinkedinComp class="size-14 scale-125" />
                </div>
            </div>
        </section>
    </div>
</template>