<script setup>
const props = defineProps({
    id: {
        required: false
    }
})

import { useCategoryStore } from '@/stores/categoryStore';
import { useUserAuthStore } from '@/stores/userAuthStore';
import { useProductStore } from '@/stores/productStore';
import { useRouter } from 'vue-router';
import ItemCard from '@/components/ItemCard.vue';
import { computed, onMounted, ref } from 'vue';

const categoryStore = useCategoryStore()
const userAuthStore = useUserAuthStore()
const productStore = useProductStore()
const router = useRouter()

const productTitle = ref('')
const productPrice = ref(0)
const productCategory = ref('')
const productDescription = ref('')
const productImage = ref(null)
const productImageURL = ref('')

const editing = ref(false)
const preview = ref(false)

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        productImage.value = file
        productImageURL.value = URL.createObjectURL(file)
    }
}

const item = computed(() => {
    return { title: productTitle.value, price: productPrice.value, category: productCategory.value, description: productDescription.value, image: productImageURL.value}
})

const handleProduct = () => {
    if (!preview.value) {
        preview.value = true
    } else {
        if (!editing.value) {
            productStore.addToItems(item.value)
        } else {
            productStore.editAnItem(props.id, item.value)
        }
        router.push({ name: 'products' })
    }
}

const getProductWithId = (id) => {
    const item = productStore.items.find(item => item.id == id)
    if (item && userAuthStore.userId === item.userId) {
        editing.value = true
        productTitle.value = item.title
        productPrice.value = item.price
        productCategory.value = item.category
        productDescription.value = item.description
        productImageURL.value = item.image
    }
}

const buttonTitle = computed(() => {
    if (!editing.value && !preview.value) return 'Preview'
    else if (editing.value && !preview.value) return 'Update'
    else return 'Publish' 
})

onMounted(() => {
    if (props.id) getProductWithId(props.id)
})
</script>

<template>
    <div class="h-full flex gap-x-20 justify-center items-center max-xl:flex-col max-xl:pb-5">
        <form @submit.prevent="handleProduct" class="flex flex-col text-black gap-y-5 py-5 max-[430px]:w-full max-[430px]:px-5">
            <h2 class="text-5xl font-semibold border-b border-b-black w-full">Sell</h2>
            <div class="flex gap-x-10 max-md:flex-col">
                <div class="flex flex-col">
                    <label for="title">Title</label>
                    <input v-model="productTitle" class="w-96 max-[430px]:w-full" type="text" id="title" aria-label="Product Title" required>
            
                    <label for="price">Price</label>
                    <input v-model="productPrice" class="w-96 max-[430px]:w-full" type="number" min="1" max="100000000" step="0.01" id="price" aria-label="Product Price" required>
            
                    <label for="category">Category</label>
                    <select v-model="productCategory" class="w-96 max-[430px]:w-full" id="category" aria-label="Product Category" required>
                        <option disabled value="">Choose...</option>
                        <option v-for="category in categoryStore.items" :key="category" :value="category">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</option>
                    </select>
                </div>

                <div class="flex flex-col">
                    <label for="description">Description</label>
                    <textarea v-model="productDescription" class="min-h-10 max-h-[115px]" id="description" aria-label="Product Description" maxlength="500" required></textarea>
            
                    <label for="image">Image</label>
                    <input @change="handleImageUpload" type="file" id="image" accept="image/*" aria-label="Product Image" :required="!editing">
                </div>
            </div>
            <button class="bg-rose-500 h-10 text-white hover:bg-rose-400 focus:bg-rose-400 active:bg-rose-600 transition-all">{{ buttonTitle }}</button>
        </form>

        <ItemCard v-if="preview" :item :disabled="true" />

    </div>
</template>