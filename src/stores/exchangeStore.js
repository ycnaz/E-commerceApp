import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { fetcher } from "@/api/exchangeApi"

export const useExchangeStore = defineStore('exchangeStore', () => {
    const latest = ref([])
    const currencies = ref([])
    watchEffect(() => console.log(currencies.value))
    const loading = ref(false)
    const error = ref(null)

    const fetchHandler = async (endpoint) => {
        loading.value = true
        error.value = null
        
        try {

            if (endpoint === 'latest') {
                latest.value = await fetcher(`/latest.json?app_id=${import.meta.env.VITE_API_KEY}`)
            }
            if (endpoint === 'currencies') {
                currencies.value = await fetcher('/currencies.json')
            }

        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    return { latest, currencies, loading, error, fetchHandler }
})

// /currencies.json