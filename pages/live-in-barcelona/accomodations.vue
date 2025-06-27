<template>
  <div class="min-h-screen bg-white">
    <Header />

    <!-- Hero Section -->
    <section class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <div
            class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            LIVE IN BARCELONA
          </div>
          <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
            Student
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >Accommodation</span
            >
          </h1>
          <div
            class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          >
            <p class="text-lg text-gray-700 leading-relaxed">
              <strong>Finding accommodation</strong> is often a headache for
              students arriving in Barcelona. That's why we've put together a
              selection of quality student residences in convenient
              neighborhoods close to the universities. Whether you're looking
              for a self-contained studio or a shared room, you're bound to find
              the solution that's right for you.
            </p>
            <p class="text-lg text-gray-700 mt-6 font-medium">
              Here are some recommended student residences in Barcelona:
            </p>
          </div>
        </div>

        <!-- Accommodation Cards -->
        <div class="space-y-12">
          <div
            v-for="(item, index) in accommodations"
            :key="index"
            class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div class="grid lg:grid-cols-2 gap-0">
              <div
                class="relative overflow-hidden"
                :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
              >
                <img
                  :src="
                    item.imageUrl || '/placeholder.svg?height=400&width=600'
                  "
                  :alt="item.title"
                  class="w-full rounded-l-3xl h-64 lg:h-96"
                />
                <div class="absolute top-4 left-4">
                  <div
                    class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    Featured
                  </div>
                </div>
              </div>
              <div
                class="p-8 lg:p-12 flex flex-col justify-center"
                :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
              >
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {{ item.title }}
                </h3>
                <p class="text-gray-600 text-lg leading-relaxed mb-6">
                  {{ item.location }}
                </p>
                <div class="flex items-center space-x-4">
                  <a
                    :href="item.redirectUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
                  >
                    Explore Options
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                  <button
                    class="p-3 border-2 border-gray-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Resources Section -->
        <div class="mt-20">
          <div class="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h2
              class="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <svg
                class="w-8 h-8 mr-3 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Additional Housing Resources
            </h2>
            <p class="text-gray-600 text-lg mb-8">
              Explore these trusted platforms to find more accommodation options
              in Barcelona:
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(resource, index) in housingResources"
                :key="index"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <svg
                      class="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <a
                      :href="resource.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {{ resource.name }}
                    </a>
                    <p class="text-gray-600 text-sm mt-1">
                      {{ resource.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Help Section -->
        <div class="mt-16 text-center">
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white"
          >
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">
              Need Help Finding Accommodation?
            </h2>
            <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our student support team is here to help you find the perfect
              place to call home in Barcelona.
            </p>
            <button
              class="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
            >
              Contact Support Team
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";

const accommodations = ref([
  {
    imageUrl: "/accomodations/yugo.png",
    title: "Beyoo Accomodation",
    location:
      "Two (02) properties : Poble Sec, Marina;\t Gym Central Location;15 min away from the beach Furnished accomodations, Private bathroom, Wifi,Kitchens.",
    redirectUrl: "https://www.beyoo-living.es/en/",
  },
  {
    imageUrl: "/accomodations/vitastudent.png",
    title: "Vita Student",
    location:
      "Two (02)properties: Poblenou, Pédralbes, Central location, near the beach.",
    redirectUrl: "https://www.vitastudent.com/es/ciudades/barcelona/",
  },
  {
    imageUrl: "/accomodations/livensaliving.jpg",
    title: "Livensa Living",
    location:
      "Two (02)properties: Marina, Diagonal Alto; Bedrooms with kitchen, Rooftop, 01 min from Bus stop.",
    redirectUrl: "https://www.livensaliving.com/en/student-accommodation-barcelona/",
  },
  {
    imageUrl: "/accomodations/xior.png",
    title: "Xior Student Housing",
    location:
      "Three (03)properties : Diagonal Besos, Collblanc, Paseo de gracia.",
    redirectUrl: "https://www.xior.be/en/city/barcelona",
  },
  {
    imageUrl: "/accomodations/thesocialhub.png",
    title: "The Social Hub",
    location:
      "04 min from the bus stop; Central Location. Bikes upon availability.",
    redirectUrl: "https://www.thesocialhub.co/barcelona-poblenou/",
  },
  {
    imageUrl: "/accomodations/onix.jpg",
    title: "Onix Residencia",
    location:
      "Discount with universities. Great flexibility when it comes to booking types.",
    redirectUrl: "https://www.residenciaonix.com/en/",
  },
  {
    imageUrl: "/accomodations/resa.png",
    title: "Resa Residence",
    location:
      "Eight (08) well located residences,  Discount with many universities.",
    redirectUrl: "https://resa.es/en/",
  },
  {
    imageUrl: "/accomodations/grupo.png",
    title: "Grupo mestral",
    location:
      "Well located in a very central area., Affordable prices, Discount with universities.",
    redirectUrl: "https://grupomestral.com",
  },
]);
</script>
