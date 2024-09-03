import { defineStore } from "pinia";
import { ref } from "vue";
import { fetcher } from "@/api/storeApi"

export const useUserAuthStore = defineStore('userAuthStore', () => {
    
    const token = ref(localStorage.getItem('ycn-authToken') || null)
    const username = ref(localStorage.getItem('ycn-username') || null)
    const isAuth = ref(token.value ? true : false)

    const userId = ref(null)

    const loading = ref(false)
    const error = ref(null)

    const response = ref('')

    const signIn = async (data, username) => {
        loading.value = true
        error.value = null

        try {
            response.value = await fetcher('/auth/login', 'POST', data)
            if (!token.value) {
                token.value = response.value.token
                isAuth.value = true
                localStorage.setItem('ycn-authToken', token.value)
                localStorage.setItem('ycn-username', username)
            }
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    const signOut = () => {
        if (isAuth.value) {
            token.value = null
            isAuth.value = false
            localStorage.removeItem('ycn-authToken')
            localStorage.removeItem('ycn-username')
        }
    }

    const fetchUserId = (users) => {
        userId.value = users.filter(user => user.username === username.value)[0].id
    }

    return { isAuth, token, userId, username, response, error, loading, signIn, signOut, fetchUserId }
})