import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserCatStore = defineStore('userCatStore', () => {
    const category = ref('')

    const setCategory = (newCategory) => {
        category.value = newCategory
    }

    return { category, setCategory }
})