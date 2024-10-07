import { defineStore } from "pinia"
import { ref } from "vue"
import { fetcher } from "@/api/storeApi"
import { useUserAuthStore } from "./userAuthStore";

// To eliminate code redundancy I created a function that dynamically creates stores
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

        const addToItems = async (item) => {
            const userAuthStore = useUserAuthStore()
            const newItem = await fetcher(endpoint,'post', item)
            if (userAuthStore.userId) {
                newItem.userId = userAuthStore.userId
                items.value.push(newItem)
                console.log(newItem)
            }
        }

        return { items, loading, error, fetchAll, addToItems }
    });
}