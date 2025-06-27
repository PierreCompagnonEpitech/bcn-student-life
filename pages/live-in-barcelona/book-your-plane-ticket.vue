<template>
  <div class="min-h-screen bg-white">
    <Header />
    
    <!-- Hero Section -->
    <section class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              LIVE IN BARCELONA
            </div>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Book Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Flight</span> to Barcelona
            </h1>
            <p class="text-xl text-gray-700 leading-relaxed">
              We've put together a selection of airlines serving Barcelona to help you find the flight that best suits your needs and budget.
            </p>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <img src="/airplane-booking.jpg" alt="Airplane booking" class="w-full rounded-2xl shadow-lg">
            </div>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid md:grid-cols-4 gap-6 mb-16">
          <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-1">Budget-Friendly</h3>
            <p class="text-gray-600 text-sm">Low-cost options available</p>
          </div>
          <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-1">Multiple Airlines</h3>
            <p class="text-gray-600 text-sm">9+ airline options</p>
          </div>
          <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-1">Easy Booking</h3>
            <p class="text-gray-600 text-sm">Direct airline links</p>
          </div>
          <div class="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-1">Expert Tips</h3>
            <p class="text-gray-600 text-sm">Money-saving advice</p>
          </div>
        </div>

        <!-- Airlines Sections -->
        <div class="space-y-16">
          <!-- Low Cost Airlines -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold">Low Cost Airlines</h2>
              </div>
              <p class="text-green-100 text-lg">Budget-friendly options for student travelers</p>
            </div>
            <div class="p-8">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  v-for="airline in lowCostAirlines" 
                  :key="airline.name"
                  class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </div>
                    <div class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Budget
                    </div>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ airline.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4">{{ airline.description }}</p>
                  <a 
                    :href="airline.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors group-hover:shadow-lg"
                  >
                    Book Now
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Traditional Airlines -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold">Traditional Airlines</h2>
              </div>
              <p class="text-blue-100 text-lg">Premium service with additional amenities</p>
            </div>
            <div class="p-8">
              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div 
                  v-for="airline in traditionalAirlines" 
                  :key="airline.name"
                  class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </div>
                    <div class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      Premium
                    </div>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{{ airline.name }}</h3>
                  <p class="text-gray-600 text-sm mb-4">{{ airline.description }}</p>
                  <a 
                    :href="airline.url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors group-hover:shadow-lg"
                  >
                    Book Now
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Money-Saving Tips -->
        <div class="mt-16">
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-12">
            <div class="text-center mb-8">
              <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                💡 Tips for Finding Cheap Flights
              </h2>
              <p class="text-gray-600 text-lg">Follow these expert tips to save money on your Barcelona flight</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white rounded-2xl p-6 shadow-sm">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-3">Compare Prices</h3>
                <p class="text-gray-600 mb-4">Use multiple comparison websites like Skyscanner, Kayak, and Google Flights to find the best deals.</p>
                <div class="space-y-2">
                  <a href="https://www.skyscanner.com" target="_blank" class="block text-blue-600 hover:text-blue-800 text-sm">→ Skyscanner.com</a>
                  <a href="https://www.kayak.com" target="_blank" class="block text-blue-600 hover:text-blue-800 text-sm">→ Kayak.com</a>
                  <a href="https://www.google.com/flights" target="_blank" class="block text-blue-600 hover:text-blue-800 text-sm">→ Google Flights</a>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-6 shadow-sm">
                <div class="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-3">Book in Advance</h3>
                <p class="text-gray-600 mb-4">The earlier you book, the better your chances of getting a good price. Aim for 6-8 weeks before travel.</p>
                <div class="bg-green-50 rounded-lg p-3">
                  <p class="text-green-800 text-sm font-medium">💡 Best booking window: 6-8 weeks ahead</p>
                </div>
              </div>
              
              <div class="bg-white rounded-2xl p-6 shadow-sm">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4.828 7l2.828 2.828L5.828 12l2.828 2.828L6.828 17H2v-4.828L4.828 12 2 9.172V4.828L4.828 7z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-3">Set Price Alerts</h3>
                <p class="text-gray-600 mb-4">Sign up for airline price alerts to stay informed about promotions and price drops.</p>
                <div class="bg-purple-50 rounded-lg p-3">
                  <p class="text-purple-800 text-sm font-medium">🔔 Get notified of price changes instantly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Message -->
        <div class="mt-16 text-center">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Fly to Barcelona? ✈️
            </h2>
            <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              If you follow these tips, you should be able to find a flight to Barcelona at a great price! 
              Start comparing prices and book your adventure today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center">
                Compare Flight Prices
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </button>
              <button class="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-400 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center">
                Get Travel Support
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
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
import { ref } from 'vue'

const lowCostAirlines = ref([
  {
    name: 'Ryanair',
    description: 'Europe\'s largest low-cost airline with frequent Barcelona flights',
    url: 'https://www.ryanair.com/gb/en'
  },
  {
    name: 'Vueling',
    description: 'Spanish low-cost carrier based in Barcelona',
    url: 'https://www.vueling.com/en'
  },
  {
    name: 'EasyJet',
    description: 'British low-cost airline with extensive European network',
    url: 'https://www.easyjet.com/en'
  },
  {
    name: 'Transavia',
    description: 'Dutch low-cost airline offering competitive prices',
    url: 'https://www.transavia.com/destinations/en-eu'
  },
  {
    name: 'Volotea',
    description: 'Spanish airline connecting smaller European cities',
    url: 'https://www.volotea.com/en/flight-offers/'
  }
])

const traditionalAirlines = ref([
  {
    name: 'Air France',
    description: 'French flag carrier with premium service',
    url: 'https://wwws.airfrance.es/en'
  },
  {
    name: 'Iberia',
    description: 'Spanish national airline with extensive network',
    url: 'https://www.iberia.com/en/'
  },
  {
    name: 'Lufthansa',
    description: 'German airline known for quality and reliability',
    url: 'https://www.lufthansa.com/en'
  },
  {
    name: 'KLM',
    description: 'Dutch airline with excellent European connections',
    url: 'https://www.klm.es/en'
  }
])
</script>