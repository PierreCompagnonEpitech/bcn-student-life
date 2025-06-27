<template>
  <div class="min-h-screen bg-white">
    <Header />

    <!-- Hero Section -->
    <section class="relative py-16 lg:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-800 rounded-full text-sm font-medium mb-8 shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            LIVE IN BARCELONA
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Barcelona <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lifestyle</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the vibrant, affordable Mediterranean lifestyle that makes Barcelona one of Europe's most desirable student destinations
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Content Column -->
          <div class="lg:col-span-2">
            <!-- Introduction -->
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-12">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                Barcelona: A Vibrant, Affordable City
              </h2>
              <p class="text-gray-700 text-lg leading-relaxed">
                Barcelona, the capital of Catalonia, attracts millions of visitors and expatriates every year for 
                its dynamism, rich culture and Mediterranean lifestyle. But what about the cost of living in this 
                cosmopolitan city? And what are the job opportunities for foreigners wishing to settle here?
              </p>
            </div>

            <!-- Cost of Living Overview -->
            <div class="mb-12">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">Cost of Living</h2>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mb-8">
                Barcelona offers a relatively moderate cost of living compared to other major European cities. 
                However, costs can vary significantly based on lifestyle choices and specific needs.
              </p>
            </div>

            <!-- Housing Section -->
            <div class="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Housing</h3>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                  <h4 class="font-bold text-lg text-blue-900 mb-3">City Center</h4>
                  <p class="text-blue-800">
                    Renting an apartment in the city center can range from <span class="font-bold">€900 to €1,500</span> per month for a one-bedroom apartment.
                  </p>
                </div>
                <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                  <h4 class="font-bold text-lg text-green-900 mb-3">Outside City Center</h4>
                  <p class="text-green-800">
                    Outside the city center, rents are more affordable, typically ranging from <span class="font-bold">€700 to €1,100</span> for a one-bedroom apartment.
                  </p>
                </div>
              </div>
            </div>

            <!-- Utilities Section -->
            <div class="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Utilities</h3>
              </div>
              <div class="space-y-4">
                <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div class="w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Basic Utilities</h4>
                    <p class="text-gray-600">Electricity, heating, cooling, water, garbage: <span class="font-bold text-yellow-600">€120 to €180</span> per month</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div class="w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Internet</h4>
                    <p class="text-gray-600">High-speed internet: <span class="font-bold text-yellow-600">€30 to €50</span> per month</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Food Section -->
            <div class="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Food & Dining</h3>
              </div>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                  <h4 class="font-bold text-lg text-orange-900 mb-3">Groceries</h4>
                  <p class="text-orange-800 text-sm">Monthly grocery bill: <span class="font-bold">€150 to €300</span></p>
                </div>
                <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
                  <h4 class="font-bold text-lg text-red-900 mb-3">Casual Dining</h4>
                  <p class="text-red-800 text-sm">Inexpensive restaurant: <span class="font-bold">€10 to €15</span></p>
                </div>
                <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                  <h4 class="font-bold text-lg text-purple-900 mb-3">Fine Dining</h4>
                  <p class="text-purple-800 text-sm">Mid-range restaurant (2 people): <span class="font-bold">€40 to €70</span></p>
                </div>
              </div>
            </div>

            <!-- Entertainment Section -->
            <div class="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">
              <div class="flex items-center mb-6">
                <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v18a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h18a2 2 0 012 2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Leisure & Entertainment</h3>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Gym Membership</h4>
                    <p class="text-gray-600">Monthly membership: <span class="font-bold text-purple-600">€30 to €60</span></p>
                  </div>
                </div>
                <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">Cinema Ticket</h4>
                    <p class="text-gray-600">Movie ticket: <span class="font-bold text-purple-600">€8 to €12</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-8">
              <!-- Image -->
              <div class="relative overflow-hidden rounded-3xl shadow-2xl mb-8">
                <img
                  src="/barcelona-birdeye-view.jpg"
                  alt="Barcelona Lifestyle"
                  class="w-full h-96 object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div class="absolute bottom-6 left-6 right-6">
                  <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                    <h3 class="font-bold text-gray-900 mb-2">Living in Barcelona</h3>
                    <p class="text-gray-700 text-sm">Experience the Mediterranean lifestyle in one of Europe's most vibrant cities</p>
                  </div>
                </div>
              </div>

              <!-- Quick Stats -->
              <div class="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Average Rent (1BR)</span>
                    <span class="font-bold text-blue-600">€700-€1,500</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Monthly Utilities</span>
                    <span class="font-bold text-yellow-600">€120-€180</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Groceries</span>
                    <span class="font-bold text-orange-600">€150-€300</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-600">Gym Membership</span>
                    <span class="font-bold text-purple-600">€30-€60</span>
                  </div>
                </div>
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
// Component logic can be added here if needed
</script>