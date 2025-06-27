<template>
  <div class="min-h-screen bg-white">
    <Header />

    <!-- Hero Section -->
    <section class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              ></path>
            </svg>
            EPITECH BARCELONA
          </div>
          <h1
            class="text-3xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            <span class="text-blue-300">{ </span> THE BEST OF
            <span class="text-blue-600">INNOVATION</span>
            <span class="text-blue-300"></span>
            <br class="hidden lg:block" />
            <span class="text-blue-300"></span> THE FUTURE OF
            <span class="text-blue-600">SOFTWARE</span>
            <span class="text-blue-300"> }</span>
          </h1>
        </div>

        <!-- Hero Image -->
        <div class="relative mb-8">
          <div class="text-center p-6">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Epitech: it's not just your education, but a revolution
            </h2>
            <p class="text-gray-700 text-lg">
              Founded in 1999 in Paris, Epitech is a world-leading educational
              institution in computer science and technology. With a unique
              focus on hands-on learning and collaboration, Epitech empowers its
              students to become leaders in the technology industry.
            </p>
          </div>
          <div class="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/Campus-EPITECH-Bcn.png"
              alt="EPITECH Barcelona Campus"
              class="w-full lg:h-[650px]"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
            <div class="absolute bottom-8 left-8 right-8"></div>
          </div>
        </div>

        <!-- Mission Statement -->
        <div class="text-center mb-16">
          <div
            class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
          >
            <blockquote
              class="text-xl lg:text-2xl italic text-blue-600 font-bold max-w-4xl mx-auto"
            >
              "At Epitech, we train innovators and technology leaders with a
              unique focus on hands-on learning, collaboration and real-world
              problem solving."
            </blockquote>
          </div>
        </div>

        <!-- Programs Section -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Different programmes that respond to multidisciplinary motivations
            </p>
          </div>

          <div class="space-y-8">
            <!-- Bachelor + Master's Program -->
            <div
              class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div class="grid lg:grid-cols-2 gap-0">
                <div class="relative overflow-hidden">
                  <img
                    src="/ep3.jpg"
                    alt="EPITECH Program"
                    class="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute top-4 left-4">
                    <div
                      class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      EPITECH
                    </div>
                  </div>
                </div>
                <div class="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Bachelor + Master's Degree in Software Development
                  </h3>
                  <p class="text-gray-600 text-lg leading-relaxed mb-6">
                    Students with a High School Diploma or Middle and Higher
                    Vocational training can study to become an expert in IT,
                    computer science and web programming.
                  </p>
                  <a
                    href="https://www.epitech-it.es/en/programmes/bachelor-masters-degree-in-computer-science/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More
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
                </div>
              </div>
            </div>

            <!-- Coding Academy Program -->
            <div
              class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div class="grid lg:grid-cols-2 gap-0">
                <div
                  class="p-8 lg:p-12 flex flex-col justify-center lg:order-1"
                >
                  <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Web and Mobile Development Programme
                  </h3>
                  <p class="text-gray-600 text-lg leading-relaxed mb-6">
                    Full or part time course for adults with a high school
                    diploma or a minimum of 5 years' professional experience.
                  </p>
                  <a
                    href="https://www.epitech-it.es/en/programmes/coding-academy-in-barcelona/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More
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
                </div>
                <div class="relative overflow-hidden lg:order-2">
                  <img
                    src="/coding-academy.jpg"
                    alt="Coding Academy Program"
                    class="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute top-4 left-4">
                    <div
                      class="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      CODING ACADEMY
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Data Science Bootcamp -->
            <div
              class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div class="grid lg:grid-cols-2 gap-0">
                <div class="relative overflow-hidden">
                  <img
                    src="/schneider-electrics.png"
                    alt="Data Science Bootcamp"
                    class="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute top-4 left-4">
                    <div
                      class="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      SCHNEIDER ELECTRIC
                    </div>
                  </div>
                </div>
                <div class="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Data Science & AI Bootcamp
                  </h3>
                  <p class="text-gray-600 text-lg leading-relaxed mb-6">
                    Transform your career in just 4 months with our immersive
                    Data Science Bootcamp, 50% sponsored by Schneider Electric.
                  </p>
                  <a
                    href="https://www.epitech-it.es/epitech-schneider/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Learn More
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Discover More Section -->
        <div class="mb-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Discover More
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore additional resources and connect with our community
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Hub Projects -->
            <div
              class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div class="relative overflow-hidden">
                <img
                  src="/sc.png"
                  alt="Epitech Spain Hub"
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div
                    class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block"
                  >
                    HUB
                  </div>
                  <h3 class="text-white font-bold text-lg">
                    Epitech Spain Hub
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">
                  Dive into our curated collection of student projects from
                  recent years, showcasing creativity, collaboration, and
                  innovation.
                </p>
                <a
                  href="https://www.notion.so/hub-barcelona/Hub-Projects-Experiences-Gallery-bb0003062df14619b98f54e29de39959"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Explore Hub
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
              </div>
            </div>

            <!-- YouTube Channel -->
            <div
              class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div class="relative overflow-hidden">
                <img
                  src="/youtube.png"
                  alt="YouTube Channel"
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div
                    class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block"
                  >
                    YOUTUBE
                  </div>
                  <h3 class="text-white font-bold text-lg">
                    Epitech Spain YouTube
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">
                  Discover the official YouTube channel of Epitech Spain with
                  student stories, campus tours, and more.
                </p>
                <a
                  href="https://www.youtube.com/@Epitech-Spain"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
                >
                  Watch Videos
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
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v18a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h18a2 2 0 012 2z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Student Council -->
            <div
              class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div class="relative overflow-hidden">
                <img
                  src="/sc.png"
                  alt="Student Council"
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                ></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div
                    class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block"
                  >
                    STUDENT COUNCIL
                  </div>
                  <h3 class="text-white font-bold text-lg">Student Council</h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 mb-4">
                  Follow the Instagram account of the student council for the
                  latest campus news and events.
                </p>
                <a
                  href="https://www.instagram.com/epitech.sc.bcn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
                >
                  Follow Us
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
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white"
          >
            <h2 class="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join the EPITECH Community?
            </h2>
            <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards your future in technology. Discover
              our programs and start your journey with us.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                class="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Programs
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </button>
              <button
                class="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-400 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Admissions
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
      </div>
    </section>

    <Footer />
  </div>
</template>
