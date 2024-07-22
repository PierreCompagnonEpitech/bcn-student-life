<template>
    <Header />
    
    <div class="flex flex-col justify-center w-5/6 m-auto items-center">
        <div id="Text1" class="flex flex-col lg:justify-start m-auto lg:mt-12 barlow-bold justify-center">
            <div class="text-blue-600 font-normal mt-2">
                LIVE IN BARCELONA
            </div>
            <div class="text-2xl font-extrabold lg:text-4xl">
                Barcelona opens its doors to you: Get <b class="font-bold text-blue-500">ready</b> for student life !
            </div>
        </div>

        <NuxtImg class="mt-10" src="/Rectangle4.png" width="1120" height="335" loading="lazy" preload/>

        <div class="mt-14 text-gray-500 text-center">
            Moving to Barcelona is an extraordinary adventure, but it requires a certain amount of preparation. 
            From your plane ticket to your accommodation and administrative formalities, there are many steps to 
            take before you can enjoy life in Barcelona. In this section you'll find all you need to do and to 
            finalize to enjoy your stay.
        </div>

        <div class="flex flex-wrap w-full justify-between">
            <Card
                class="lg:mx-0 mx-auto mt-20"
                v-for="index in tab" 
                :imageUrl="index.imageUrl"
                :title="index.title"
                :redirectUrl="index.redirectUrl"
            />
        </div>
    </div>

    <Footer />
</template>

<script setup>
import { ref } from 'vue';

const tab = ref([
    {
        imageUrl: '/Rectangle23.png',
        title: 'Administrative formalities',
        redirectUrl: 'live-in-barcelona/administrative-formalities',
    },
    {
        imageUrl: '/Rectangle24.png',
        title: 'Accomodation',
        redirectUrl: 'live-in-barcelona/accomodations',
    },
    {
        imageUrl: '/Rectangle25.png',
        title: 'Transport',
        redirectUrl: 'live-in-barcelona/transports',
    },
    {
        imageUrl: '/Rectangle444.png',
        title: 'Lifestyle',
        redirectUrl: 'live-in-barcelona/lifestyle',
    },
]);

</script>