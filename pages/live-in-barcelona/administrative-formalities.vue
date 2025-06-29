<template>
  <div class="min-h-screen bg-white">
    <Header />

    <!-- Hero Section -->
    <section class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              LIVE IN BARCELONA
            </div>
            <h1 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Administrative
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                >Formalities</span
              >
            </h1>
            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">
                Preparing your administrative formalities before arriving in
                Barcelona will help you save time and get your stay off to a
                good start. This section guides you through the essential
                formalities for international students.
              </p>
              <p class="text-lg text-gray-700 leading-relaxed">
                Depending on your nationality and the length of your stay, the
                documents and procedures required may vary. Don't hesitate to
                contact the Spanish consulate or embassy in your home country
                for precise, up-to-date information.
              </p>
            </div>
          </div>
          <div class="relative">
            <div
              class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
            >
              <img
                src="/administrative-documents.jpg"
                alt="Administrative Documents"
                class="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <!-- Process Overview -->
        <div class="mb-16">
          <h2
            class="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Your Step-by-Step Guide
          </h2>
          <div
            class="grid md:grid-cols-5 grid-cols-3 gap-y-4 items-center justify-items-center"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-white font-bold text-xl">1</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Visa</h3>
              <p class="text-gray-600 text-sm">Check requirements</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-white font-bold text-xl">2</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Residence</h3>
              <p class="text-gray-600 text-sm">Get your permit</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-white font-bold text-xl">3</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Insurance</h3>
              <p class="text-gray-600 text-sm">Health coverage</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-white font-bold text-xl">4</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Social Security</h3>
              <p class="text-gray-600 text-sm">Register for benefits</p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span class="text-white font-bold text-xl">5</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Bank Account</h3>
              <p class="text-gray-600 text-sm">Open your account</p>
            </div>
          </div>
        </div>

        <!-- Detailed Sections -->
        <div class="space-y-12">
          <!-- Student Visa Section -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-white font-bold text-xl">1</span>
                </div>
                <h2 class="text-3xl font-bold">Student Visa</h2>
              </div>
              <p class="text-blue-100 text-lg">
                Entry requirements for studying in Spain
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Visa Requirements
                  </h3>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1"
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
                      <div>
                        <p class="text-gray-700">
                          Check if you need a visa to study in Spain
                        </p>
                        <p class="text-gray-600 text-sm mt-1">
                          EU students don't need a visa for stays under 3 months
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1"
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
                      <div>
                        <p class="text-gray-700">
                          Apply for university courses, master's, doctorate, or
                          short-term programs
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1"
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
                      <div>
                        <p class="text-gray-700">
                          EU citizens need valid ID card or passport
                        </p>
                        <p class="text-gray-600 text-sm mt-1">
                          Minors need valid passport and parental authorization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Required Documents
                  </h3>
                  <div class="bg-blue-50 rounded-xl p-6">
                    <h4 class="font-bold text-blue-800 mb-3">
                      Typical Requirements:
                    </h4>
                    <ul class="text-blue-700 space-y-2">
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Criminal record certificate</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>€10,000 bank statement</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Course enrollment proof (20+ hours/week)</span>
                      </li>
                    </ul>
                    <p class="text-blue-600 text-sm mt-3 font-medium">
                      💡 Contact your local Spanish consulate for specific
                      requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Residence Permit Section NIE -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-teal-500 to-emerald-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-white font-bold text-xl">2</span>
                </div>
                <h2 class="text-3xl font-bold">Residence Permit (NIE)</h2>
              </div>
              <p class="text-emerald-100 text-lg">
                For european citizens staying longer than 3 months
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Application Process
                  </h3>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <a
                          href=" https://sede.administracionespublicas.gob.es/icpplus/"
                          class="text-gray-700 font-medium hover:underline">
                          Book a Cita Previa (Appointment)
                        </a>
                        <p class="text-gray-600 text-sm">
                          Choose a police station with available appointments and book one.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <a
                          href="https://www.exteriores.gob.es/Embajadas/telaviv/en/ServiciosConsulares/Paginas/Consular/NIE.aspx"
                          class="text-gray-700 font-medium hover:underline">
                          Prepare the Required Documents
                        </a>
                        <p class="text-gray-600 text-sm">
                          Make sure that you have all necessary documents ready for your appointment.
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <a
                          class="text-gray-700 font-medium">
                          Go to Your Appointment (probably going to be in Madrid)
                        </a>
                        <p class="text-gray-600 text-sm">
                          You may receive the NIE on the spot or have to return in a few days to pick it up.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Why you need a NIE in Spain?
                  </h3>
                  <div class="bg-emerald-50 rounded-xl p-6">
                    <ul class="text-emerald-700 space-y-3">
                      <li class="flex items-start space-x-2">
                        <svg
                          class="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Working legally (needed for work contracts and payroll)</span>
                      </li>
                      <li class="flex items-start space-x-2">
                        <svg
                          class="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span
                          >Paying taxes and registering with the social security system</span
                        >
                      </li>
                      <li class="flex items-start space-x-2">
                        <svg
                          class="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Opening a bank account</span>
                      </li>
                      <li class="flex items-start space-x-2">
                        <svg
                          class="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Some memberships require a NIE</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Residence Permit Section -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-white font-bold text-xl">2</span>
                </div>
                <h2 class="text-3xl font-bold">Residence Permit (TIE)</h2>
              </div>
              <p class="text-purple-100 text-lg">
                For none european citizens staying longer than 3 months
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Application Process
                  </h3>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <a
                          href="https://mpt.gob.es/en/delegaciones_gobierno/delegaciones/madrid/servicios/extranjeria.html"
                          class="text-gray-700 font-medium hover:underline">
                          Apply at Oficina de Extranjeros
                        </a>
                        <p class="text-gray-600 text-sm">
                          Immigration office for residence permits
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <a
                          href="https://www.barcelona.cat/internationalwelcome/es/alta-en-el-padron-de-habitantes-de-barcelona"
                          class="text-gray-700 font-medium hover:underline">
                          Get "alta de empadronamiento"
                        </a>
                        <p class="text-gray-600 text-sm">
                          Official address registration
                        </p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <a
                          href="https://ajuntament.barcelona.cat/en/citizen-communication-channels/citizens-face/citizen-help-and-information-offices-oac"
                          class="text-gray-700 font-medium hover:underline">
                          Register at OAC offices
                        </a>
                        <p class="text-gray-600 text-sm">
                          Oficina d'Atenció al Ciutadà in Catalunya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Required Documents
                  </h3>
                  <div class="bg-purple-50 rounded-xl p-6">
                    <ul class="text-purple-700 space-y-3">
                      <li class="flex items-start space-x-2">
                        <svg
                          class="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Valid passport and/or NIE</span>
                      </li>
                      <li class="flex items-start space-x-2">
                        <svg
                          class="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span
                          >Housing contract (6+ months) with your name and
                          NIE</span
                        >
                      </li>
                      <li class="flex items-start space-x-2">
                        <svg
                          class="w-5 h-5 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Additional documents as required</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Insurance & Social Security Section -->
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div
                class="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white"
              >
                <div class="flex items-center mb-2">
                  <div
                    class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3"
                  >
                    <span class="text-white font-bold">3</span>
                  </div>
                  <h2 class="text-2xl font-bold">Insurance</h2>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-green-500 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p class="text-gray-700">
                      Complementary medical insurance required for internships
                    </p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-green-500 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p class="text-gray-700">
                      European Health Insurance Card recommended
                    </p>
                  </div>
                  <div class="bg-green-50 rounded-xl p-4">
                    <p class="text-green-800 font-medium text-sm">
                      Apply at least 2 weeks before departure via ameli.fr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div
                class="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white"
              >
                <div class="flex items-center mb-2">
                  <div
                    class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3"
                  >
                    <span class="text-white font-bold">4</span>
                  </div>
                  <h2 class="text-2xl font-bold">Social Security</h2>
                </div>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-blue-500 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p class="text-gray-700">
                      Get national insurance number at social security office
                    </p>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-blue-500 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p class="text-gray-700">
                      Apply for health card (TSI) at local health center
                    </p>
                  </div>
                  <div class="bg-blue-50 rounded-xl p-4">
                    <p class="text-blue-800 font-medium text-sm">
                      Requires NIE and address registration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bank Account Section -->
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div
              class="bg-gradient-to-r from-yellow-500 to-orange-500 p-8 text-white"
            >
              <div class="flex items-center mb-4">
                <div
                  class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-white font-bold text-xl">5</span>
                </div>
                <h2 class="text-3xl font-bold">Bank Account</h2>
              </div>
              <p class="text-yellow-100 text-lg">
                Essential for managing your finances in Spain
              </p>
            </div>
            <div class="p-8">
              <div class="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Steps to Follow
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-xs">1</span>
                      </div>
                      <p class="text-gray-700">
                        <strong>Choose a Bank:</strong> Compare student benefits
                      </p>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-xs">2</span>
                      </div>
                      <p class="text-gray-700">
                        <strong>Make Appointment:</strong> Schedule or apply
                        online
                      </p>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-xs">3</span>
                      </div>
                      <p class="text-gray-700">
                        <strong>Visit Bank:</strong> Bring required documents
                      </p>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div
                        class="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center"
                      >
                        <span class="text-white font-bold text-xs">4</span>
                      </div>
                      <p class="text-gray-700">
                        <strong>Activate Account:</strong> Set up card and
                        online banking
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Required Documents
                  </h3>
                  <div class="bg-orange-50 rounded-xl p-4">
                    <ul class="text-orange-700 space-y-2">
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Passport or National ID</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Certificate of Non-Residency</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Proof of Address</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>University Enrollment Proof</span>
                      </li>
                      <li class="flex items-center space-x-2">
                        <svg
                          class="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>NIE Number</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    Popular Student Banks
                  </h3>
                  <div class="space-y-3">
                    <div
                      class="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-yellow-500 transition-colors"
                    >
                      <h4 class="font-bold text-gray-900">La Caixa</h4>
                      <p class="text-gray-600 text-sm">
                        Student accounts with reduced fees
                      </p>
                    </div>
                    <div
                      class="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-yellow-500 transition-colors"
                    >
                      <h4 class="font-bold text-gray-900">BBVA</h4>
                      <p class="text-gray-600 text-sm">
                        Fee-free youth accounts
                      </p>
                    </div>
                    <div
                      class="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-yellow-500 transition-colors"
                    >
                      <h4 class="font-bold text-gray-900">Sabadell</h4>
                      <p class="text-gray-600 text-sm">
                        Youth account with university discounts
                      </p>
                    </div>
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
              Useful Administrative Resources
            </h2>
            <div class="flex justify-between items-center">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a
                  href="https://n26.com/en-fr/open-bank-account-in-spain"
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
                        N26 Bank Account
                      </h3>
                      <p class="text-gray-600 text-sm mt-1">
                        Open Spanish account online with zero paperwork
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.immigrationspain.es/en/visas-and-residence-permits-in-spain/"
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3
                        class="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Visas & Residence Permits
                      </h3>
                      <p class="text-gray-600 text-sm mt-1">
                        Complete guide to Spanish immigration
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.exteriores.gob.es/Consulados/paris/fr/ServiciosConsulares/Paginas/Consular/Visados-nacionales-Informacion-general.aspx"
                  target="_blank"
                  class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <svg
                        class="w-6 h-6 text-purple-600"
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
                      <h3
                        class="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Spanish Consulate
                      </h3>
                      <p class="text-gray-600 text-sm mt-1">
                        Official consular services information
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.spain.info/en/travel-tips/visa-passport/"
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3
                        class="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Visa Information
                      </h3>
                      <p class="text-gray-600 text-sm mt-1">
                        Official Spain travel and visa requirements
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.studying-in-spain.com/homepage/"
                  target="_blank"
                  class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-12 h-12 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <svg
                        class="w-6 h-6 text-red-600"
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
                    <div>
                      <h3
                        class="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Studying in Spain
                      </h3>
                      <p class="text-gray-600 text-sm mt-1">
                        Comprehensive student guide and resources
                      </p>
                    </div>
                  </div>
                </a>
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
