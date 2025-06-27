<template>
  <div
    class="flex h-20 shadow-2xl xs:w-full justify-center sticky top-0 z-50 bg-white/95 backdrop-blur-lg"
  >
    <div
      class="flex flex-row items-center h-full bg-white justify-between w-4/5"
    >
      <div id="Logo" class="flex sm:text-2xl text-base barlow-black group">
        <b
          @click="$router.push('/')"
          class="mt-1 sm:block hidden cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold"
        >
          BCN Student Life
        </b>
        <NuxtImg
          @click="$router.push('/')"
          src="/epilogo.png"
          class="ml-2 h-7 w-7 md:w-10 md:h-10 cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-3"
        />
      </div>

      <Menu class="lg:hidden" />

      <div
        class="lg:flex lg:flex-row lg:block hidden w-1/2 justify-around items-center"
      >
        <nav
          @click="$router.push('/live-in-barcelona')"
          :class="{
            'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer relative':
              live,
            'hover:text-blue-600 lg:text-base text-xs cursor-pointer transition-all duration-300 relative group':
              !live,
          }"
        >
          Live in Barcelona
          <div
            v-if="live"
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          ></div>
          <div
            v-else
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"
          ></div>
        </nav>
        <nav
          @click="$router.push('/explore-barcelona')"
          :class="{
            'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer relative':
              explore,
            'hover:text-blue-600 lg:text-base text-xs cursor-pointer transition-all duration-300 relative group':
              !explore,
          }"
        >
          Explore Barcelona
          <div
            v-if="explore"
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          ></div>
          <div
            v-else
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"
          ></div>
        </nav>
        <nav
          @click="$router.push('/spanish-essentials')"
          :class="{
            'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer relative':
              spanish,
            'hover:text-blue-600 lg:text-base text-xs cursor-pointer transition-all duration-300 relative group':
              !spanish,
          }"
        >
          Spanish Essentials
          <div
            v-if="spanish"
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          ></div>
          <div
            v-else
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"
          ></div>
        </nav>
        <nav
          @click="$router.push('/tips-and-tricks')"
          :class="{
            'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer relative':
              tips,
            'hover:text-blue-600 lg:text-base text-xs cursor-pointer transition-all duration-300 relative group':
              !tips,
          }"
        >
          Tips & Tricks
          <div
            v-if="tips"
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          ></div>
          <div
            v-else
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"
          ></div>
        </nav>
        <nav
          @click="$router.push('/epitech-barcelona')"
          :class="{
            'text-blue-600 lg:text-base font-semibold text-xs cursor-pointer relative':
              epitech,
            'hover:text-blue-600 lg:text-base text-xs cursor-pointer transition-all duration-300 relative group':
              !epitech,
          }"
        >
          About EPITECH
          <div
            v-if="epitech"
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          ></div>
          <div
            v-else
            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"
          ></div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute();
const favoriteCount = ref(0);

const live = computed(() => {
  return route.fullPath.includes("/live-in-barcelona");
});

const explore = computed(() => {
  return route.fullPath.includes("/explore-barcelona");
});

const spanish = computed(() => {
  return route.fullPath.includes("/spanish-essentials");
});

const epitech = computed(() => {
  return route.fullPath.includes("/about-epitech");
});

const favorites = computed(() => {
  return route.fullPath.includes("/my-favorites");
});

// Load favorite count from localStorage
const loadFavoriteCount = () => {
  try {
    let count = 0;
    // Count favorites from all categories
    const categories = ["sights", "museums", "parks", "restaurants"];
    categories.forEach((category) => {
      const saved = localStorage.getItem(`mastered-${category}`);
      if (saved) {
        const mastered = JSON.parse(saved);
        count += mastered.length;
      }
    });
    favoriteCount.value = count;
  } catch (error) {
    favoriteCount.value = 0;
  }
};

onMounted(() => {
  loadFavoriteCount();

  // Update favorite count when localStorage changes
  window.addEventListener("storage", loadFavoriteCount);

  // Also check periodically for updates
  setInterval(loadFavoriteCount, 2000);
});
</script>

<style scoped>
.barlow-black {
  font-family: "Barlow", sans-serif;
}
</style>
