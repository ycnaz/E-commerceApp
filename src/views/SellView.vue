<script setup>
import { useCategoryStore } from '@/stores/categoryStore';
import { useProductStore } from '@/stores/productStore';
import { useRouter } from 'vue-router';
import ItemCard from '@/components/ItemCard.vue';
import { computed, ref } from 'vue';

const categoryStore = useCategoryStore()
const productStore = useProductStore()
const router = useRouter()

const productTitle = ref('')
const productPrice = ref(0)
const productCategory = ref('')
const productDescription = ref('')
const productImage = ref(null)
const productImageUrl = ref('')

const preview = ref(false)

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        productImage.value = file
        productImageUrl.value = URL.createObjectURL(file)
    }
}

const item = computed(() => {
    return { title: productTitle.value, price: productPrice.value, category: productCategory.value, description: productDescription.value, image: productImageUrl.value}
})

const handleProduct = () => {
    if (!preview.value) {
        preview.value = true
    } else {
        productStore.addToItems(item.value)
        router.push({ name: 'products' })
    }
}
</script>

<template>
    <div class="h-full flex gap-x-20 justify-center items-center">
        <form @submit.prevent="handleProduct" class="flex flex-col text-black gap-y-5">
            <h2 class="text-5xl font-semibold border-b border-b-black w-full">Sell</h2>
            <div class="flex gap-x-10">
                <div class="flex flex-col">
                    <label for="title">Title</label>
                    <input v-model="productTitle" class="w-96" type="text" id="title" required>
            
                    <label for="price">Price</label>
                    <input v-model="productPrice" class="w-96" type="number" id="price" required>
            
                    <label for="category">Category</label>
                    <select v-model="productCategory" class="w-96" id="category" required>
                        <option disabled value="">Choose...</option>
                        <option v-for="category in categoryStore.items" :key="category" :value="category">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</option>
                    </select>
                </div>

                <div class="flex flex-col">
                    <label for="description">Description</label>
                    <textarea v-model="productDescription" class="min-h-10 max-h-[115px]" id="description" required></textarea>
            
                    <label for="image">Image</label>
                    <input @change="handleImageUpload" type="file" id="image" accept="image/*" required>
                </div>
            </div>
            <button class="bg-rose-500 h-10 text-white hover:bg-rose-400 focus:bg-rose-400 active:bg-rose-600 transition-all">{{ preview ? 'Publish' : 'Preview' }}</button>
        </form>

        <ItemCard v-if="preview" :item :disabled="true" />

    </div>
</template>