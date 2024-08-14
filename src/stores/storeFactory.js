import { defineStore } from "pinia"
import { ref } from "vue"
import { fetcher } from "@/api/apiService"

// To eliminate code redundancy I created a function that creates dynamic stores
export function createFetchStore(storeName, endpoint) {
    return defineStore(storeName, () => {
        const items = ref([])
        const loading = ref(false)
        const error = ref(null)

        const fetchAll = async () => {
            loading.value = true;
            error.value = null;

            try {
                items.value = await fetcher(endpoint, 'get');
            } catch (err) {
                error.value = err;
            } finally {
                setTimeout(() => {
                    loading.value = false;
                }, 3000)
            }
        }

        return { items, loading, error, fetchAll }
    });
}