import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore('modalStore', () => {
    const isOpen = ref(false)
    const product = ref('')

    const setProduct = (p) => {
        product.value = p
        isOpen.value = true
    }

    const resetProduct = () => {
        product.value = ''
        isOpen.value = false
    }

    return { isOpen, product, setProduct, resetProduct }
})