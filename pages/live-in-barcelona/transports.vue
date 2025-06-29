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
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-2a2 2 0 00-2-2H8z"
              ></path>
            </svg>
            LIVE IN BARCELONA
          </div>
          <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
            Getting Around
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >Barcelona</span
            >
          </h1>
          <div
            class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          >
            <p class="text-lg text-gray-700 leading-relaxed">
              Barcelona has excellent public transport links. Metro, bus,
              streetcar, bike... you'll have plenty of choice when it comes to
              getting around the city and discovering its different districts.
              The network is very well-developed with more than 230 bus lines
              and an additional 30 night bus lines, complemented by funiculars
              and cable cars.
            </p>
          </div>
        </div>

        <!-- Transport Options Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div
            class="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl">🚋</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Metro</h3>
            <p class="text-gray-600">11 lines covering the entire city</p>
          </div>
          <div
            class="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl">🚊</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Tram</h3>
            <p class="text-gray-600">6 routes connecting suburbs</p>
          </div>
          <div
            class="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl">🚌</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Bus</h3>
            <p class="text-gray-600">230+ lines plus night services</p>
          </div>
          <div
            class="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-white text-2xl">🚴</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Bike</h3>
            <p class="text-gray-600">Eco-friendly city exploration</p>
          </div>
        </div>

        <!-- Detailed Sections -->
        <div class="space-y-16">
          <!-- Metro Section -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-red-500 to-pink-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🚋</span>
                <h2 class="text-3xl font-bold">Metro System</h2>
              </div>
              <p class="text-red-100 text-lg">
                Barcelona's efficient underground network
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3
                    class="text-xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <svg
                      class="w-6 h-6 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Discovering Barcelona's Metro
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-6">
                    Barcelona's metro system comprises 11 lines with distinctive
                    colors and numbers, operated by TMB (8 lines) and FGC (4
                    lines). This extensive network provides easy access to
                    various parts of the city, praised for its safety,
                    efficiency, and reliability.
                  </p>
                  <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Operating hours: 05:00 to midnight</span
                      >
                    </div>
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Extended weekend services</span
                      >
                    </div>
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Accessibility features available</span
                      >
                    </div>
                  </div>
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-gray-900 mb-4 flex items-center"
                  >
                    <svg
                      class="w-6 h-6 mr-2 text-blue-600"
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
                    Zone System
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    The city is divided into six zones, with Zone 1 being the
                    most central and containing major attractions like Gothic
                    Quarter, Sagrada Familia, and FC Barcelona. Most tourist
                    destinations are in Zone 1.
                  </p>
                  <div class="bg-blue-50 rounded-xl p-4">
                    <p class="text-blue-800 font-medium">
                      💡 Recommended: T-jove pass
                    </p>
                    <p class="text-blue-700 text-sm mt-1">
                      Unlimited travel for 90 days.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <img
                  src="/metro-barcelona.png"
                  alt="Barcelona Metro Map"
                  class="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <!-- Recommended for EPITECH Students -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">💡</span>
                <h2 class="text-3xl font-bold">
                  Recommended for EPITECH Students
                </h2>
              </div>
              <p class="text-green-100 text-lg">
                These tips could be quite life-saving for a good journey in
                Barcelona.
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    What's best to buy?
                  </h3>
                  <div class="space-y-4">
                    <!-- T-Jove-->
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <a
                        href="https://www.tmb.cat/en/fares-metro-bus-barcelona/t-mobilitat/how-it-works/register"
                        class="text-gray-700 hover:underline hover:text-purple-900"
                        > T-Jove: Unlimited Travels for 90 days for €44 (Metro, Bus, Tram & Train).
                      </a>
                    </div>

                    <!-- Bicing--->
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <a
                        href="https://www.bicing.barcelona/es/alta-smou"
                        class="text-gray-700 hover:underline hover:text-purple-900"
                        > Bicing: Bikes well served around Barcelona for €50 per year.
                      </a>
                    </div>

                    <!-- Renfe--->
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <a
                        href="https://www.renfe.com/es/en"
                        class="text-gray-700 hover:underline hover:text-purple-900"
                        > Renfe: Renfe trains, you could either use your T-Jove card or buy a ticket.
                      </a>
                    </div>
                     <!-- Iryo--->
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <a
                        href="https://iryo.eu/en/home"
                        class="text-gray-700 hover:underline hover:text-purple-900"
                        > Iryo: Very cheap train tickets for long distances.
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="bg-purple-50 rounded-xl p-6">
                    <h4 class="font-bold text-purple-800 mb-2">
                      To make it at EPITECH Barcelona:
                    </h4>
                    <ul class="text-purple-700 text-md space-y-1">
                      <li>• Metro: Marina L1 (Red) Line</li>
                      <li>• Metro: Cuitadella L4 (Yellow) Line</li>
                      <li>• Tram: Sant Adrià T4 Line</li>
                      <li>• Bike: Bicing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tram Section -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🚊</span>
                <h2 class="text-3xl font-bold">Tram Network</h2>
              </div>
              <p class="text-blue-100 text-lg">
                Modern tram system connecting Barcelona's suburbs
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Tram Routes
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-6">
                    The trams operate on six routes: Trambaix (T1, T2, T3) and
                    Trambesos (T4, T5, T6). The network spans 15.1 km with 29
                    stops, averaging two minutes between stops.
                  </p>
                  <div class="bg-cyan-50 rounded-xl p-4">
                    <h4 class="font-bold text-cyan-800 mb-2">
                      Operating Hours:
                    </h4>
                    <ul class="text-cyan-700 text-sm space-y-1">
                      <li>• Monday-Thursday: 5am - midnight</li>
                      <li>• Friday-Saturday: 5am - 2am</li>
                      <li>• Sunday: 5am - midnight</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Ticketing
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    Integration tickets work across metro, bus, and tram. The
                    T-usual pass offers the best value for regular travelers
                    with unlimited 30-day access.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Available at self-service machines</span
                      >
                    </div>
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Cash or card payments accepted</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <img
                  src="/trambesos-map.png"
                  alt="Trambesos Map"
                  class="w-full rounded-2xl shadow-lg"
                />
                <img
                  src="/trambaix-map.png"
                  alt="Trambaix Map"
                  class="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <!-- Bus Section -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🚌</span>
                <h2 class="text-3xl font-bold">Bus Network</h2>
              </div>
              <p class="text-green-100 text-lg">
                Comprehensive bus system covering all Barcelona districts
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Bus System Overview
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-6">
                    Barcelona operates a fleet of 1,000 buses covering more than
                    100 routes. The buses are single-decker, suitable for people
                    with reduced mobility, and include high-speed lines,
                    conventional district connections, neighborhood buses, and
                    night-time services.
                  </p>
                  <div class="bg-green-50 rounded-xl p-4">
                    <h4 class="font-bold text-green-800 mb-2">
                      Service Types:
                    </h4>
                    <ul class="text-green-700 text-sm space-y-1">
                      <li>• High-speed cross-city lines</li>
                      <li>• District connecting routes</li>
                      <li>• Neighborhood short routes</li>
                      <li>• Night bus services</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Tickets & Schedule
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    Single tickets cost €2.40, or use multi-day passes like the
                    T-usual. Most buses operate between 5-8 AM to 10-11 PM, with
                    schedules varying by route.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Check schedules at bus stops</span
                      >
                    </div>
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Same tickets as metro and tram</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bike Section -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">🚴</span>
                <h2 class="text-3xl font-bold">Cycling in Barcelona</h2>
              </div>
              <p class="text-yellow-100 text-lg">
                Eco-friendly and affordable way to explore the city
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Why Choose Cycling?
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-6">
                    Cycling is an affordable way to navigate Barcelona,
                    especially as you don't have to worry about parking fees.
                    Many bike hire companies offer affordable rates and
                    discounts for longer rentals. Trams and metros have
                    designated areas for bikes.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700">No parking fees</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700">Affordable rental rates</span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                      >
                        <svg
                          class="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-gray-700"
                        >Bike areas in public transport</span
                      >
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Bicing System
                  </h3>
                  <p class="text-gray-600 leading-relaxed mb-4">
                    Barcelona's bike-sharing system allows subscribers to borrow
                    bikes from strategically located stations throughout the
                    city. Pick up at one station and drop off at another near
                    your destination.
                  </p>
                  <div class="bg-orange-50 rounded-xl p-4">
                    <h4 class="font-bold text-orange-800 mb-2">
                      🚴 Bicing Benefits:
                    </h4>
                    <ul class="text-orange-700 text-sm space-y-1">
                      <li>• Convenient city-wide stations</li>
                      <li>• Flexible pick-up and drop-off</li>
                      <li>• Perfect for short trips</li>
                      <li>• Environmentally friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Resources Section -->
        <div class="mt-16">
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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                ></path>
              </svg>
              Useful Transport Resources
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
              <a
                href="https://www.barcelona-tourist-guide.com/en/transport/00-transport.html"
                target="_blank"
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
                  <div>
                    <h3
                      class="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Barcelona Tourist Guide
                    </h3>
                    <p class="text-gray-600 text-sm mt-1">
                      Comprehensive transport information
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.barcelonaturisme.com/wv3/en/page/59/bus.html"
                target="_blank"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <svg
                      class="w-6 h-6 text-green-600"
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
                  <div>
                    <h3
                      class="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Barcelona Tourism
                    </h3>
                    <p class="text-gray-600 text-sm mt-1">
                      Official bus information
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.barcelona.cat/internationalwelcome/en/bicing-barcelona-public-bicycle-service"
                target="_blank"
                class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <svg
                      class="w-6 h-6 text-yellow-600"
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
                  <div>
                    <h3
                      class="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Bicing Barcelona
                    </h3>
                    <p class="text-gray-600 text-sm mt-1">
                      Public bicycle service info
                    </p>
                  </div>
                </div>
              </a>
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
