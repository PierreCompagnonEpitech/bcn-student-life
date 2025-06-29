<template>
  <div class="min-h-screen bg-white">
    <!-- Header Component -->
    <Header />

    <!-- Hero Section -->
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div
            class="inline-flex tabs-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            LIVE IN BARCELONA
          </div>
          <h1
            class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto"
          >
            Barcelona opens its doors to you: Get
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >ready</span
            >
            for student life!
          </h1>
        </div>

        <!-- Hero Image -->
        <div class="relative mb-16">
          <div>
            <p class="text-gray-700 text-lg text-center leading-relaxed mb-8">
              Moving to Barcelona is an extraordinary adventure, but it requires
              preparation. From your plane ticket to accommodation and
              administrative formalities, there are many steps to take before
              you can enjoy life in Barcelona. Find everything you need to
              finalize your stay.
            </p>
          </div>
          <div class="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/barcelona.png"
              alt="Barcelona Student Life"
              class="w-full h-80 lg:h-96 object-cover"
            />
            <div class="absolute inset-0"></div>
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in tab"
            :key="index"
            class="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            @click="navigateTo(item.redirectUrl)"
          >
            <div class="aspect-w-16 aspect-h-12">
              <img
                :src="item.imageUrl || '/Rectangle23.png'"
                :alt="item.title"
                class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            ></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white font-bold text-xl mb-3 transition-colors">
                {{ item.title }}
              </h3>
              <div class="flex tabs-center text-blue-300">
                <span class="text-sm font-medium">Learn more</span>
                <svg
                  class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>

            <!-- Category Icons -->
            <div class="absolute top-4 right-4">
              <div
                class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex tabs-center items-center justify-center"
              >
                <svg
                  v-if="index === 0"
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                <svg
                  v-else-if="index === 1"
                  class="w-6 h-6 text-white"
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
                <svg
                  v-else-if="index === 2"
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";

const tab = ref([
  {
    imageUrl: "/Rectangle23.png",
    title: "Administrative formalities",
    redirectUrl: "live-in-barcelona/administrative-formalities",
  },
  {
    imageUrl: "/Rectangle24.png",
    title: "Accomodation",
    redirectUrl: "live-in-barcelona/accomodations",
  },
  {
    icon: "Bus",
    imageUrl: "/Rectangle25.png",
    title: "Transport",
    redirectUrl: "live-in-barcelona/transports",
  },
  {
    imageUrl: "/Rectangle444.png",
    title: "Lifestyle",
    redirectUrl: "live-in-barcelona/lifestyle",
  },
]);
</script>
