import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { fetcher } from "@/api/storeApi"
import { useCartStore } from "./cartStore";
import { useUserStore } from "./userStore";

export const useUserAuthStore = defineStore('userAuthStore', () => {
    
    const token = ref(localStorage.getItem('ycn-authToken') || null)
    const username = ref(localStorage.getItem('ycn-username') || null)
    const isAuth = ref(localStorage.getItem('ycn-authToken') ? true : false)

    const userId = ref(null)
    const userCart = ref([])
    const loading = ref(false)
    const error = ref(null)

    const response = ref('')

    const signIn = async (data , username) => {
        loading.value = true
        error.value = null
        try {
            if (!isAuth.value){
                response.value = await fetcher('/auth/login', 'POST', data)
            }
            isAuth.value = true
            token.value = response.value.token
            localStorage.setItem('ycn-authToken', token.value)
            localStorage.setItem('ycn-username', username)
            await fetchUserId()
            await fetchCart()
        } catch (err) {
            error.value = err
            console.error(err)
        } finally {
            loading.value = false
        }
    }

    const signOut = () => {
        if (isAuth.value) {
            token.value = null
            isAuth.value = false
            userId.value = null
            userCart.value = []
            localStorage.removeItem('ycn-authToken')
            localStorage.removeItem('ycn-username')
        }
    }

    const getUsers = async () => {
        try {
            const response = await fetcher(`/users`, 'GET')
            return response
        } catch (err) {
            console.log(err)
        }
    }

    const getCart = async () => {
        if (userId.value) {
            try {
                const response = await fetcher(`/carts/${userId.value}`, 'GET')
                console.log(response)
                return response
            } catch (err) {
                console.log(err)
            }
        }
    }

    const fetchUserId = async () => {
        if (!userId.value) {
            const users = await getUsers()
            const user = users.find(user => user.username === username.value)
            
            if (user) {
                userId.value = user.id
            }
        }
        return userId.value
    }

    const fetchCart = async () => {
        const cart = await getCart()
        console.log(userId.value)
        if (cart) {
            userCart.value = [...cart.products]
        }
    }

    return { isAuth, token, userId, username, response, error, loading, userCart, signIn, signOut, fetchUserId, fetchCart }
})

// https://chatgpt.com/share/66f84ab1-95c4-8006-b5bc-8ac661091bc7