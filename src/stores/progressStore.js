import { defineStore } from "pinia";
import { ref } from "vue";

export const useProgressStore = defineStore('progressStore', () => {
    const loading = ref(false)

    const setLoading = (value) => {
        loading.value = value
    }

    return { loading, setLoading }
})