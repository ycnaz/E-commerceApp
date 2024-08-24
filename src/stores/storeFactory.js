import { defineStore } from "pinia"
import { ref } from "vue"
import { fetcher } from "@/api/storeApi"

// To eliminate code redundancy I created a function that creates dynamic stores
export function createFetchStore(storeName, endpoint) {
    return defineStore(storeName, () => {
        const items = ref([])
        const loading = ref(false)
        const error = ref(null)
        const isDataFetched = ref(false)

        const fetchAll = async () => {
            if (!isDataFetched.value) {
                loading.value = true;
                error.value = null;
    
                try {
                    items.value = await fetcher(endpoint, 'get');
                    isDataFetched.value = true
                } catch (err) {
                    error.value = err;
                } finally {
                    setTimeout(() => {
                        loading.value = false;
                    }, 1000)
                }
            }
        }

        return { items, loading, error, fetchAll }
    });
}