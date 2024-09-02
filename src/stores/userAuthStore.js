import { defineStore } from "pinia";
import { ref } from "vue";
import { fetcher } from "@/api/storeApi"

export const useUserAuthStore = defineStore('userAuthStore', () => {
    const isAuth = ref(false)
    const token = ref(localStorage.getItem('ycn-authToken') || null)
    const loading = ref(false)
    const error = ref(null)

    const response = ref('')

    const signIn = async (data) => {
        loading.value = true
        error.value = null

        try {
            response.value = await fetcher('/auth/login', 'POST', data)
            if (!token.value) {
                token.value = response.value.token
                isAuth.value = true
                localStorage.setItem('ycn-authToken', token.value)
            }
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    const signOut = () => {
        token.value = null
        isAuth.value = false
        localStorage.removeItem('ycn-authToken')
    }

    return { isAuth, token, response, error, loading, signIn, signOut }
})