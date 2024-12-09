<script setup>
const props = defineProps({
    endpoint: {
        type: [String, Array],
        required: true
    }
})
</script>

<template>
    <section class="flex flex-col justify-center items-center h-full">
        <h1 class="text-7xl leading-snug max-md:text-6xl max-sm:text-5xl max-[520px]:text-4xl">404 - Page Not Found :(</h1>
        <p class="text-3xl max-[660px]:text-2xl max-[520px]:text-xl max-[440px]:text-lg">The page you are looking for does not exist. /{{ props.endpoint?.join('/') }}</p>
    </section>
</template>