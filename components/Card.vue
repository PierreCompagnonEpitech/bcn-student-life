<template>
    <div class="max-w-md bg-gray-200 border border-gray-200 rounded-3xl shadow ">
        <a @click="$router.push(props.redirectUrl)">
            <img class="rounded-t-lg" :src="props.imageUrl" alt="" />
        </a>
        <div class="p-2 flex flex-col items-center justify-center">
            <a @click="$router.push(props.redirectUrl)">
                <h5 class="mt-2 text-2xl font-bold tracking-tight text-gray-900">{{ props.title }}</h5>
            </a>
            <a  @click="$router.push(props.redirectUrl)"
                class="cursor-pointer mt-4 mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-full hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300">
                    Explore
                <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
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