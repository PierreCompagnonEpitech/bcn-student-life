<template>
    <div @click="$router.push(props.redirectUrl)" 
        class="relative max-w-md cursor-pointer transform transition duration-500 hover:scale-105"
    >
        <img :src="props.imageUrl"/>
        <div class="absolute rounded-b-2xl bottom-0 left-0 w-full bg-gray-50 text-center bg-opacity-50 text-white p-4">
            <h5 class="relative text-2xl font- text-black">{{ props.title }}</h5>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: String,
  title: String,
  redirectUrl: String
});

</script>