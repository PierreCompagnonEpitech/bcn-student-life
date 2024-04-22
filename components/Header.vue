<template>
    <div class="flex h-20 shadow-2xl w-full justify-center">
        <div class="flex flex-row items-center h-full bg-white justify-between w-4/5">
         
            <div @click="$router.push('/')" id="Logo" class="cursor-pointer lg:text-2xl barlow-black">
                BCN Student Life
            </div>

            <div class="flex flex-row w-1/2 justify-around">
                <nav @click="$router.push('/live-in-barcelona')"
                  :class="{'text-pink-600 lg:text-base font-semibold text-xs cursor-pointer': live, 'hover:text-pink-600 lg:text-base text-xs hover:underline cursor-pointer': !live }">
                    Live in Barcelona
                </nav>
                <nav class="hover:text-pink-600 lg:text-base text-xs hover:underline cursor-pointer">Explore Barcelona</nav>
                <nav class="hover:text-pink-600 lg:text-base text-xs hover:underline cursor-pointer">Tips and Tricks</nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'nuxt/app';

const route = useRoute();

const live = computed(() => {
   return route.fullPath.includes('/live-in-barcelona');
//   return route.fullPath === '/live-in-barcelona';
});
    
</script>