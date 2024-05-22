<template>
    <div class="flex h-20 shadow-2xl w-full justify-center">
        <div class="flex flex-row items-center h-full bg-white justify-between w-4/5">
         
            <div id="Logo" class="flex lg:text-2xl barlow-black">
                <b @click="$router.push('/')" class="mt-1 cursor-pointer">BCN Student Life</b>
                <!-- <b class="font-light ml-2">by</b> -->
                <NuxtImg src="/epilogo.png" class="bg- ml-2 w-10 h-10"/>
            </div>

            <div class="flex flex-row w-1/2 justify-around">
                <nav @click="$router.push('/live-in-barcelona')"
                  :class="{'text-pink-600 lg:text-base font-semibold text-xs cursor-pointer': live, 'hover:text-pink-600 lg:text-base text-xs hover:underline cursor-pointer': !live }"
                >
                    Live in Barcelona
                </nav>
                <nav  @click="$router.push('/explore-barcelona')"
                :class="{'text-pink-600 lg:text-base font-semibold text-xs cursor-pointer': explore, 'hover:text-pink-600 lg:text-base text-xs hover:underline cursor-pointer': !explore }"
                >
                    Explore Barcelona
                </nav>
                <nav @click="$router.push('/tips-and-tricks')"
                :class="{'text-pink-600 lg:text-base font-semibold text-xs cursor-pointer': tips, 'hover:text-pink-600 lg:text-base text-xs hover:underline cursor-pointer': !tips }"
                >
                    Tips and Tricks
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'nuxt/app';

const route = useRoute();

const live = computed(() => {
   return route.fullPath.includes('/live-in-barcelona');
});

const explore = computed(() => {
   return route.fullPath.includes('/explore-barcelona');
});

const tips = computed(() => {
   return route.fullPath.includes('/tips-and-tricks');
});
</script>