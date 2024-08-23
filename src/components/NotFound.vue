<script setup>
const props = defineProps({
    endpoint: {
        type: String,
        required: true
    }
})
</script>

<template>
    <section class="flex flex-col justify-center items-center h-full">
        <h1 class="text-7xl leading-snug">404 - Page Not Found :(</h1>
        <p class="text-3xl">The page you are looking for does not exist. /{{ props.endpoint?.join('/') }}</p>
    </section>
</template>