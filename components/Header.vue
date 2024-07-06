<template>
    <div class="flex h-20 shadow-2xl xs:w-full justify-center">
        <div class="flex flex-row items-center h-full bg-white justify-between w-4/5">
         
            <div id="Logo" class="flex sm:text-2xl text-base barlow-black">
                <b @click="$router.push('/')" class="mt-1 sm:block hidden cursor-pointer">BCN Student Life</b>
                <NuxtImg @click="$router.push('/')" src="/epilogo.png" class="bg- ml-2 h-7 w-7 md:w-10 md:h-10"/>
            </div>

            <Menu class="lg:hidden" />

            <div class="lg:flex lg:flex-row lg:block hidden w-1/2 justify-around">
                <nav @click="$router.push('/live-in-barcelona')"
                  :class="{'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer': live, 'hover:text-blue-600 lg:text-base text-xs hover:underline cursor-pointer': !live }"
                >
                    Live in Barcelona
                </nav>
                <nav  @click="$router.push('/explore-barcelona')"
                :class="{'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer': explore, 'hover:text-blue-600 lg:text-base text-xs hover:underline cursor-pointer': !explore }"
                >
                    Explore Barcelona
                </nav>
                <nav @click="$router.push('/tips-and-tricks')"
                :class="{'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer': tips, 'hover:text-blue-600 lg:text-base text-xs hover:underline cursor-pointer': !tips }"
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