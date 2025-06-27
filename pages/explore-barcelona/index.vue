<template>
  <div class="min-h-screen bg-white">
    <Header />

    <!-- Hero Section -->
    <section class="relative p-10 lg:py-24 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      ></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-800 rounded-full text-sm font-medium mb-8 shadow-lg"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
              ></path>
            </svg>
            EXPLORE BARCELONA
          </div>
          <h1
            class="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Barcelona Must-Sees:
            <br />
            <span>Your Guide to </span>
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >the Best</span
            >
            Addresses
          </h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Barcelona is a feast for the senses! From hidden tapas gems to
            trendy cocktail bars, from mind-blowing art by Gaudí to charming
            streets, this city's got it all. This section will be your guide to
            the must-visit addresses for students.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="p-10 bg-gradient-to-bl from-purple-50 via-white to-blue-50">
      <div class="max-w-7xl mx-auto px-8 sm:px-6 lg:px-2">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your adventure and discover what Barcelona has to offer
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div class="relative overflow-hidden h-64">
              <img
                :src="category.imageUrl"
                :alt="category.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              ></div>

              <!-- Category Title -->
              <div class="absolute bottom-6 left-6 right-6">
                <h3 class="text-white font-bold text-2xl mb-2">
                  {{ category.title }}
                </h3>
                <p class="text-white/90 text-sm">{{ category.description }}</p>
              </div>
            </div>
            <div class="relative">
              <div class="py-8 px-6 pb-20">
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ category.longDescription }}
                </p>
                <div class="absolute inset-x-0 pl-6 pb-6">
                  <a
                    :href="category.redirectUrl"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Explore
                    <svg
                      class="w-4 h-4 ml-2"
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl">
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
          ></div>
          <div class="absolute inset-0"></div>
          <div class="relative text-center p-12 lg:p-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Explore Barcelona?
            </h2>
            <p
              class="text-blue-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Start your Barcelona adventure today and discover why this city is
              the perfect place for students
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                class="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Plan Your Visit
                <svg
                  class="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                  ></path>
                </svg>
              </button>
              <button
                class="px-8 py-4 bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                <a
                  href="https://www.spain.info/export/sites/segtur/.content/Folletos/folletos/Barcelona_EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the Guide
                </a>
              </button>
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

const categories = ref([
  {
    imageUrl: "/Rectangle 22.png",
    title: "Sights and Landmarks",
    description: "Iconic Barcelona attractions",
    longDescription:
      "Discover Barcelona's most famous landmarks including Sagrada Familia, and Park Güell.",
    redirectUrl: "explore-barcelona/sights-and-landmarks",
  },
  {
    imageUrl: "/Rectangle 23.png",
    title: "Museums",
    description: "Art and culture destinations",
    longDescription:
      "Explore world-class museums featuring Picasso, Miró, and contemporary Catalan art.",
    redirectUrl: "explore-barcelona/museums",
  },
  {
    imageUrl: "/Rectangle 24.png",
    title: "Parks",
    description: "Green spaces and relaxation",
    longDescription:
      "Find peaceful retreats in Barcelona's beautiful parks and gardens throughout the city.",
    redirectUrl: "explore-barcelona/parks",
  },
  {
    imageUrl: "/Rectangle 31.png",
    title: "Restaurants",
    description: "Culinary adventures await",
    longDescription:
      "Taste authentic Catalan cuisine and international flavors in Barcelona's diverse dining scene.",
    redirectUrl: "explore-barcelona/restaurants",
  },
]);
</script>
