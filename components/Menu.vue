<template>
  <div class="lg:hidden">
    <!-- Mobile Menu Button -->
    <button
      @click="toggleMenu"
      class="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 focus:outline-none"
      :class="{ 'text-blue-600': isOpen }"
    >
      <div class="w-6 h-6 relative">
        <span
          class="absolute block h-0.5 w-6 bg-current transform transition-all duration-300"
          :class="isOpen ? 'rotate-45 top-2.5' : 'top-1'"
        ></span>
        <span
          class="absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-2.5"
          :class="isOpen ? 'opacity-0' : 'opacity-100'"
        ></span>
        <span
          class="absolute block h-0.5 w-6 bg-current transform transition-all duration-300"
          :class="isOpen ? '-rotate-45 top-2.5' : 'top-4'"
        ></span>
      </div>
    </button>

    <!-- Mobile Menu Overlay -->
    <div v-if="isOpen" class="fixed inset-0 lg:hidden" @click="closeMenu">
      <div class="fixed inset-0"></div>

      <!-- Mobile Menu Panel -->
      <div
        class="fixed top-20 left-0 right-0 bg-white backdrop-blur-2xl shadow-2xl border-t border-gray-100"
        @click.stop
      >
        <div class="px-6 py-8 space-y-6">
          <!-- Navigation Links -->
          <div class="space-y-4">
            <button
              @click="navigateTo('/live-in-barcelona')"
              :class="
                live
                  ? 'text-blue-600 bg-blue-50 border-blue-200'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-200'
              "
              class="w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left"
            >
              <div class="flex items-center space-x-3">
                <div
                  :class="
                    live
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  "
                  class="w-10 h-10 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Live in Barcelona</div>
                  <div class="text-sm text-gray-500">
                    Housing, transport & jobs
                  </div>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <button
              @click="navigateTo('/explore-barcelona')"
              :class="
                explore
                  ? 'text-blue-600 bg-blue-50 border-blue-200'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-200'
              "
              class="w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left"
            >
              <div class="flex items-center space-x-3">
                <div
                  :class="
                    explore
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  "
                  class="w-10 h-10 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Explore Barcelona</div>
                  <div class="text-sm text-gray-500">
                    Attractions & restaurants
                  </div>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <button
              @click="navigateTo('/spanish-essentials')"
              :class="
                spanish
                  ? 'text-blue-600 bg-blue-50 border-blue-200'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-200'
              "
              class="w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left"
            >
              <div class="flex items-center space-x-3">
                <div
                  :class="
                    spanish
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  "
                  class="w-10 h-10 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Spanish Essentials</div>
                  <div class="text-sm text-gray-500">Learn basic Spanish</div>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <button
              @click="navigateTo('/tips-and-tricks')"
              :class="
                tips
                  ? 'text-blue-600 bg-blue-50 border-blue-200'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-200'
              "
              class="w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left"
            >
              <div class="flex items-center space-x-3">
                <div
                  :class="
                    tips
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  "
                  class="w-10 h-10 rounded-lg flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Tips and tricks</div>
                  <div class="text-sm text-gray-500">
                    There are some things you need to know...
                  </div>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <button
              @click="navigateTo('/epitech-barcelona')"
              :class="
                epitech
                  ? 'text-blue-600 bg-blue-50 border-blue-200'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-gray-200'
              "
              class="w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left"
            >
              <div class="flex items-center space-x-3">
                <div
                  :class="
                    epitech
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  "
                  class="w-10 h-10 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold">Explore Epitech</div>
                  <div class="text-sm text-gray-500">Campus & programs</div>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "nuxt/app";

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);
const favoriteCount = ref(0);

// Menu functions
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const navigateTo = (path) => {
  router.push(path);
  closeMenu();
};

// Route checks
const live = computed(() => route.fullPath.includes("/live-in-barcelona"));
const explore = computed(() => route.fullPath.includes("/explore-barcelona"));
const spanish = computed(() => route.fullPath.includes("/spanish-essentials"));
const epitech = computed(() => route.fullPath.includes("/about-epitech"));
const favorites = computed(() => route.fullPath.includes("/my-favorites"));

// Load favorite count
const loadFavoriteCount = () => {
  try {
    let count = 0;
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
  window.addEventListener("storage", loadFavoriteCount);
  setInterval(loadFavoriteCount, 2000);
});
</script>
