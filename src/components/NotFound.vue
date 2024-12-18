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
        <h1 class="text-7xl leading-snug max-md:text-6xl max-sm:text-5xl max-[520px]:text-4xl tracking-tighter">404 - Page Not Found :(</h1>
        <p class="text-3xl max-[720px]:text-2xl max-[560px]:text-xl max-[470px]:text-lg max-[420px]:text-base max-[370px]:text-sm">The page you are looking for does not exist. /{{ props.endpoint?.join('/') }}</p>
    </section>
</template>