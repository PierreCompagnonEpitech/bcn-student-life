<template>
    <Header />
    
    <div class="flex flex-col justify-center w-5/6 m-auto items-center">
        <div id="Text1" class="flex flex-col lg:justify-start m-auto  lg:mt-12 barlow-bold justify-center">
            <div class="text-blue-600 font-normal mt-2">
                EXPLORE BARCELONA
            </div>
            <div class="text-2xl font-extrabold lg:text-4xl">
                Barcelona must-sees: Your guide to <b class="font-bold text-blue-500">the best</b> adresses 
            </div>
        </div>

        <Map class="mt-12"/>
        <!-- <NuxtImg class="mt-10" src="/Rectangle5.png" width="1120" height="335" loading="lazy" preload/> -->

        <div class="mt-14 text-gray-500 text-center">
            Barcelona is a feast for the senses, and that includes its incredible culinary scene and vibrant nightlife.
            Barcelona rocks! From hidden tapas gems to trendy cocktail bars, from mind-blowing art by Gaudí to hidden
            tapas gems, chill parks, and charming streets, this city's got it all. This section will be your guide to 
            the must-visit addresses for students in the city. Relax in the sun, chow down on global flavors, and dive 
            into Barcelona's cool past, present, and future.
        </div>

        <div class= "flex flex-wrap justify-between">
            <Card
            class="lg:m-0 m-auto mt-20"
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
        imageUrl: '/Rectangle 22.png',
        title: 'Sights and Landmarks',
        redirectUrl: 'explore-barcelona/sights-and-landmarks',
    },
    {
        imageUrl: '/Rectangle 23.png',
        title: 'Museums',
        redirectUrl: 'explore-barcelona/museums',
    },
    {
        imageUrl: '/Rectangle 24.png',
        title: 'Parks',
        redirectUrl: 'explore-barcelona/parks',
    },
    {
        imageUrl: '/Rectangle 31.png',
        title: 'Restaurants',
        redirectUrl: 'explore-barcelona/restaurants',
    },
]);

</script>