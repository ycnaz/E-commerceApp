import { defineStore } from "pinia";
import { ref } from "vue";
import { fetcher } from "@/api/exchangeApi"

export const useExchangeStore = defineStore('exchangeStore', () => {
    const latest = ref([])
    const currencies = ref([])
    const userPref = ref('')
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

    fetchHandler('latest')
    fetchHandler('currencies')

    return { latest, currencies, userPref, loading, error, fetchHandler }
})

// /currencies.json