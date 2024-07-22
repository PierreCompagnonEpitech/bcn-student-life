<template>
    <div id="card" class="flex lg:bg-gray-100 rounded-3xl justify-between items-center m-auto flex-col lg:flex-row">
        
        <div class="relative">
         <img :src="props.imageUrl" class="lg:w-5/6"/>
         <div class="absolute inset-0 right-28 flex items-center text-center justify-center text-white">
                <h5 class="relative text-3xl ">{{ props.title_image }}</h5>
            </div>
        </div>

        <div class="flex justify-center lg:mr-32 lg:w-1/3 flex-col">
            <div class="text-xl mx-auto lg:mx-0 lg:mt-0 mt-4 text-center text-blue-600 ">{{ props.title }}</div>

            <div class=" mx-auto lg:mx-0 text-center mt-4">{{ props.desc }}</div>

            <a  @click="redirect(props.redirectUrl)"
                class="w-24 cursor-pointer mx-auto mt-4 mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
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
  title_image: String,
  desc: String,
  redirectUrl: String
});

const redirect = (url) => {
    window.open(url, '_blank');   
}

</script>