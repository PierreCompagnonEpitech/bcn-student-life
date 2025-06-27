<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <Header />

    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 lg:py-32">
      <div class="absolute inset-0 bg-white"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <div
              class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Study Abroad Program
            </div>
            <h1
              class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                >Barcelona:</span
              >
              <br />Your Dream
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                >Student Adventure</span
              >
              Awaits!
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              <em>Studying at EPITECH Barcelona?</em> Your ultimate guide to
              settling in, integrating, and making the most of this incredible
              Mediterranean city.
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <a
                  href="https://www.youtube.com/watch?v=k8wFUbpFp1Y&pp=ygURZXBpdGVjaCBiYXJjZWxvbmHSBwkJwwkBhyohjO8%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </button>
            </div>
          </div>
          <div class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"
            ></div>
            <div class="relative bg-white rounded-3xl shadow-2xl p-4">
              <img
                src="/barcelona-hero.png"
                alt="Barcelona Student Life"
                class="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Live in Barcelona Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative order-2 lg:order-1">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div
                  class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div
                    class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4"
                  >
                    <svg
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
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Housing</h3>
                  <p class="text-gray-600 text-sm">Find your perfect home</p>
                </div>
                <div
                  class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div
                    class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Jobs</h3>
                  <p class="text-gray-600 text-sm">Student opportunities</p>
                </div>
              </div>
              <div class="space-y-4">
                <div
                  class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div
                    class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-white"
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
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Transport</h3>
                  <p class="text-gray-600 text-sm">Navigate the city</p>
                </div>
                <div
                  class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div
                    class="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Culture</h3>
                  <p class="text-gray-600 text-sm">Immerse yourself</p>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <div
              class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            >
              LIFE IN BARCELONA
            </div>
            <h2
              class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Barcelona opens its doors to you: Get
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                >ready</span
              >
              for student life!
            </h2>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover everything you need to make the most of your stay in
              Barcelona. From finding accommodation and jobs to discovering the
              city's best restaurants, bars, and attractions.
            </p>
            <button
              @click="$router.push('live-in-barcelona')"
              class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
            >
              Explore Living Guide
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Fun Facts Section -->
    <section class="py-20 bg-white overflow-hidden relative">
      <!-- Floating Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 text-6xl opacity-10 animate-bounce">
          🍺
        </div>
        <div class="absolute top-20 right-20 text-5xl opacity-10 animate-pulse">
          🥘
        </div>
        <div
          class="absolute bottom-20 left-20 text-4xl opacity-10 animate-spin"
        >
          ⚽
        </div>
        <div
          class="absolute bottom-10 right-10 text-6xl opacity-10 animate-bounce"
        >
          🏖️
        </div>
        <div class="absolute top-1/2 left-20 text-5xl opacity-10 animate-pulse">
          🎉
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200 text-orange-800 rounded-full text-sm font-medium mb-8 shadow-lg"
          >
            MIND-BLOWING BARCELONA FACTS
          </div>
          <h2 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span class="text-gray-900">Did You Know</span>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600"
            >
              Barcelona</span
            >
            <span class="text-gray-900"> was That</span>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600"
            >
              AMAZING?!</span
            >
          </h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get ready to have your mind blown! These incredible facts will make
            you pack your bags for Barcelona faster than you can say "¡Hola!"
          </p>
        </div>

        <!-- Fun Facts Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Beer Fact -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
          >
            <div class="text-center">
              <div class="text-6xl mb-4 group-hover:animate-bounce">🍺</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Beer Paradise!
              </h3>
              <div
                class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-4 mb-4"
              >
                <div class="text-3xl font-bold">€2-3</div>
                <div class="text-sm opacity-90">Average beer price</div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                A beer in Barcelona costs less than a coffee in Paris! Your
                student budget will thank you while you enjoy the best cerveza
                on sunny terraces!
              </p>
            </div>
          </div>

          <!-- Beach Fact -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1"
          >
            <div class="text-center">
              <div class="text-6xl mb-4 group-hover:animate-pulse">🏖️</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Beach Study Sessions!
              </h3>
              <div
                class="bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-2xl p-4 mb-4"
              >
                <div class="text-3xl font-bold">10min away</div>
                <div class="text-sm opacity-90">From the beach</div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Imagine coding with your toes in the sand! Barcelona has more
                beach than most Caribbean islands... and it's all FREE!
              </p>
            </div>
          </div>

          <!-- Food Fact -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
          >
            <div class="text-center">
              <div class="text-6xl mb-4 group-hover:animate-spin">🥘</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Tapas Heaven!
              </h3>
              <div
                class="bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-2xl p-4 mb-4"
              >
                <div class="text-3xl font-bold">€1-4</div>
                <div class="text-sm opacity-90">Per tapas dish</div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Forget expensive student meals! In Barcelona, you can feast like
                a king on authentic tapas for the price of a sandwich elsewhere!
              </p>
            </div>
          </div>

          <!-- Transport Fact -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1"
          >
            <div class="text-center">
              <div class="text-6xl mb-4 group-hover:animate-bounce">🚇</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Metro Magic!
              </h3>
              <div
                class="bg-gradient-to-r from-purple-400 to-indigo-500 text-white rounded-2xl p-4 mb-4"
              >
                <div class="text-3xl font-bold">€20</div>
                <div class="text-sm opacity-90">Monthly student pass</div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Get anywhere in the city for less than a Netflix subscription!
                The metro runs until 2 AM on weekends, perfect for those
                late-night coding sessions!
              </p>
            </div>
          </div>

          <!-- Weather Fact -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
          >
            <div class="text-center">
              <div class="text-6xl mb-4 group-hover:animate-pulse">☀️</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Sunshine Overload!
              </h3>
              <div
                class="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-2xl p-4 mb-4"
              >
                <div class="text-3xl font-bold">300+</div>
                <div class="text-sm opacity-90">Sunny days per year</div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                Say goodbye to seasonal depression! Barcelona has more sunny
                days than California - your Instagram will never look better!
              </p>
            </div>
          </div>

          <!-- Nightlife Fact -->
          <div
            class="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1"
          >
            <div class="text-center">
              <div class="text-6xl mb-4 group-hover:animate-bounce">🎉</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Party Till Dawn!
              </h3>
              <div
                class="bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-2xl p-4 mb-4"
              >
                <div class="text-3xl font-bold">6 AM</div>
                <div class="text-sm opacity-90">Clubs close time</div>
              </div>
              <p class="text-gray-600 leading-relaxed">
                The party never stops! Barcelona's nightlife is legendary,
                you'll make friends from around the world while dancing until
                sunrise!
              </p>
            </div>
          </div>
        </div>

        <!-- Mind-Blowing Facts -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <div
            class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div class="absolute top-4 right-4 text-6xl opacity-20">🤯</div>
            <h4 class="text-2xl font-bold mb-4">Can You Believe This?!</h4>
            <ul class="space-y-3 text-lg">
              <li class="flex items-start">
                <span class="text-yellow-300 mr-3">🍕</span>
                <span
                  >A full pizza costs less than a movie ticket in most
                  cities!</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-yellow-300 mr-3">🏠</span>
                <span
                  >You can rent a room in the city center for
                  €400-600/month!</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-yellow-300 mr-3">🎓</span>
                <span
                  >Student discounts are EVERYWHERE - museums, transport,
                  food!</span
                >
              </li>
            </ul>
          </div>

          <div
            class="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div class="absolute top-4 right-4 text-6xl opacity-20">🚀</div>
            <h4 class="text-2xl font-bold mb-4">Your Future Awaits!</h4>
            <ul class="space-y-3 text-lg">
              <li class="flex items-start">
                <span class="text-yellow-300 mr-3">💼</span>
                <span
                  >Barcelona is Europe's startup capital - internships
                  galore!</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-yellow-300 mr-3">🌐</span>
                <span
                  >Everyone speaks English + Spanish + Catalan = trilingual
                  you!</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-yellow-300 mr-3">✈️</span>
                <span
                  >Flights to anywhere in Europe from €20 with Ryanair!</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore Barcelona Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6"
          >
            EXPLORE BARCELONA
          </div>
          <h2
            class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Barcelona Must-sees: Your guide to
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
              >the best</span
            >
            addresses
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a wild night out, a cultural gateway, or
            just a coffee to brush up on your lessons, you'll find what you're
            looking for in our guide.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div
            class="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src="/casa-batllo.png"
              alt="Casa Batlló"
              class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-white font-bold text-xl mb-2">Casa Batlló</h3>
              <p class="text-white/80 text-sm">
                Gaudí's architectural masterpiece
              </p>
              <div class="flex items-center mt-3 text-blue-300">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-sm">Eixample District</span>
              </div>
            </div>
          </div>

          <div
            class="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src="/arc-de-triomphe.png"
              alt="Arc de Triomf"
              class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-white font-bold text-xl mb-2">Arc de Triomf</h3>
              <p class="text-white/80 text-sm">Historic triumphal arch</p>
              <div class="flex items-center mt-3 text-blue-300">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-sm">Ciutat Vella</span>
              </div>
            </div>
          </div>

          <div
            class="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <img
              src="/parc-guell.jpg"
              alt="Park Güell"
              class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-white font-bold text-xl mb-2">Park Güell</h3>
              <p class="text-white/80 text-sm">Colorful mosaic wonderland</p>
              <div class="flex items-center mt-3 text-blue-300">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-sm">Gràcia District</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button
            @click="$router.push('/explore-barcelona')"
            class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:underlinehover:-translate-y-1 transition-all duration-300 inline-flex items-center"
          >
            Discover All Locations
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Tips and Tricks Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div
              class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-lg"
            >
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl p-6 shadow-sm">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4"
                  >
                    <span class="text-white font-bold text-lg">¡</span>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">Basic Phrases</h4>
                  <p class="text-gray-600 text-sm">Essential Spanish words</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-sm">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-white"
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
                  <h4 class="font-bold text-gray-900 mb-2">Conversations</h4>
                  <p class="text-gray-600 text-sm">Practice dialogues</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-sm">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">Culture Tips</h4>
                  <p class="text-gray-600 text-sm">Local customs</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-sm">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4"
                  >
                    <svg
                      class="w-6 h-6 text-white"
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
                  <h4 class="font-bold text-gray-900 mb-2">Quick Tips</h4>
                  <p class="text-gray-600 text-sm">Survival guide</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6"
            >
              TIPS AND TRICKS
            </div>
            <h2
              class="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
            >
              Want to get by in Spanish?
            </h2>
            <h2
              class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600"
                >This</span
              >
              is the place!
            </h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover the language and learn the basics to make yourself
              understood and live like a true Barcelonian. From essential
              phrases to cultural insights.
            </p>
            <div class="space-y-4 mb-8">
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
                  >Essential Spanish phrases for daily life</span
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
                  >Cultural etiquette and local customs</span
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
                <span class="text-gray-700">Practical communication tips</span>
              </div>
            </div>
            <button
              @click="$router.push('/tips-and-tricks')"
              class="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
            >
              Learn Spanish Basics
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
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

<script setup></script>
