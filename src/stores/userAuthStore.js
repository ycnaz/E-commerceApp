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
            fetchUserId()
            fetchCart()
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
            localStorage.removeItem('ycn-authToken')
            localStorage.removeItem('ycn-username')
        }
    }

    const getUsers = computed(() => {
        const users = useUserStore()
        users.fetchAll()
        return users.items
    })

    const getCarts = computed(() => {
        const carts = useCartStore()
        carts.fetchAll()
        console.log(carts.items)
        return carts.items
    })

    const fetchUserId = () => {
        if (!userId.value) {
            userId.value = getUsers.value.find(user => user.username === username.value)
        }
    }

    const fetchCart = () => {
        const products = getCarts.value.find(cart => cart.id === userId.value).products
        userCart.value = [...products]
    }

    return { isAuth, token, userId, username, response, error, loading, userCart, signIn, signOut, fetchUserId, fetchCart }
})