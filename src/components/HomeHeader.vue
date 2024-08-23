<script setup>
import { defineAsyncComponent } from 'vue';

const ChevronDown = defineAsyncComponent(() => import('../assets/svg/chevron-down.svg'))

const scrollDown = () => {
    window.scrollTo({
        top: 680,
        behavior: 'smooth'
    });
}
</script>

<template>
    <section class="bg-rose-500 h-[600px] w-full relative flex justify-center">
        <div class="text-white w-1/2 h-full flex flex-col justify-center">
            <strong class="text-6xl text-white">Present your products<br> to millions</strong>
            <span class="text-xl">And buy the best products from all over the world</span>
        </div>
        <img loading="lazy" src="../assets/images/shoe-bg.png">
        <button class="group">
            <ChevronDown @click="scrollDown" class="size-12 shadow-xl bg-white rounded-full p-2 absolute cursor-pointer group-hover:scale-110 group-focus:scale-110 -bottom-6 left-1/2 -translate-x-1/2 transition-all"/>
        </button>
    </section>
</template>


<!-- Shoe bg hero -->
<!-- Photo by <a href="https://unsplash.com/@miladamasio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Camila Damásio</a> on <a href="https://unsplash.com/photos/black-and-black-and-white-converse-all-star-high-top-sneakers-mWYhrOiAgmA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
  