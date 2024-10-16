import { defineStore } from "pinia";
import { ref } from "vue";
import { fetcher } from "@/api/storeApi"

export const useUserAuthStore = defineStore('userAuthStore', () => {
    
    const token = ref(localStorage.getItem('ycn-authToken') || null)
    const username = ref(localStorage.getItem('ycn-username') || null)
    const isAuth = ref(localStorage.getItem('ycn-authToken') ? true : false)

    const userId = ref(null)
    const userCart = ref([])
    const loading = ref(false)
    const error = ref(null)
    const isCartFetched = ref(false)

    const response = ref('')

    const signIn = async (data , newUsername) => {
        loading.value = true
        error.value = null
        try {
            if (!isAuth.value){
                response.value = await fetcher('/auth/login', 'POST', data)
            }
            isAuth.value = true
            token.value = response.value.token
            username.value = newUsername
            localStorage.setItem('ycn-authToken', token.value)
            localStorage.setItem('ycn-username', newUsername)
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
            isCartFetched.value = false
            username.value = null
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
        if (!isCartFetched.value) {
            const cart = await getCart()
            if (cart) {
                userCart.value = [...cart.products]
            }
            isCartFetched.value = true
        }
    }

    const addToCart = (product) => {
        const itemIndex = userCart.value.findIndex(item => item.productId === product.productId)

        if (itemIndex === -1) {
            userCart.value.push(product)
        } else {
            userCart.value[itemIndex].quantity += product.quantity
        }
    }

    const removeFromCart = (id) => {
        userCart.value = userCart.value.filter(item => item.productId != id)
    }

    return { isAuth, token, userId, username, response, error, loading, userCart, signIn, signOut, fetchUserId, fetchCart, addToCart, removeFromCart }
})