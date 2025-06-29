<template>
  <Header />
  <div
    class="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"
  >
    <!-- Animated Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Floating Spanish Elements Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="(item, index) in floatingElements"
          :key="index"
          class="absolute text-6xl opacity-10 animate-float"
          :style="{
            left: item.x + '%',
            top: item.y + '%',
            animationDelay: item.delay + 's',
            animationDuration: item.duration + 's',
          }"
        >
          {{ item.emoji }}
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Progress Ring -->
        <div class="mb-8 flex justify-center">
          <div class="relative w-32 h-32">
            <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#f3f4f6"
                stroke-width="8"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                stroke-width="8"
                fill="none"
                stroke-linecap="round"
                :stroke-dasharray="314"
                :stroke-dashoffset="314 - (learningProgress / 100) * 314"
                class="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color: #f59e0b" />
                  <stop offset="100%" style="stop-color: #ef4444" />
                </linearGradient>
              </defs>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="text-2xl font-bold text-orange-600">
                  {{ learningProgress }}%
                </div>
                <div class="text-xs text-gray-500">Mastered</div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 text-orange-800 rounded-full text-sm font-medium mb-8 shadow-lg"
        >
          <span class="text-2xl mr-2">🇪🇸</span>
          SPANISH ADVENTURE
        </div>

        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span
            class="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent"
          >
            ¡Hola Barcelona!
          </span>
        </h1>

        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
          Master Spanish essentials through interactive games, challenges, and
          immersive experiences. No prior knowledge needed – just bring your
          curiosity and let's make learning Spanish an adventure!
        </p>

        <!-- Learning Stats -->
        <div class="grid grid-cols-3 gap-6 max-w-md mx-auto mb-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">
              {{ totalPhrases }}
            </div>
            <div class="text-sm text-gray-500">Phrases</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-red-600">
              {{ masteredPhrasesCount }}
            </div>
            <div class="text-sm text-gray-500">Mastered</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-pink-600">
              {{ currentStreak }}
            </div>
            <div class="text-sm text-gray-500">Day Streak</div>
          </div>
        </div>

        <!-- Mode Selector -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button
            v-for="mode in learningModes"
            :key="mode.key"
            @click="currentMode = mode.key"
            class="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
            :class="
              currentMode === mode.key
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
            "
          >
            <span class="flex items-center">
              <span class="text-xl mr-2">{{ mode.emoji }}</span>
              {{ mode.name }}
            </span>
          </button>
        </div>

        <!-- Device Instructions -->
        <div class="text-lg text-orange-600 font-medium">
          <span class="hidden lg:block">{{
            currentModeInstructions.desktop
          }}</span>
          <span class="lg:hidden">{{ currentModeInstructions.mobile }}</span>
        </div>
      </div>
    </section>

    <!-- Learning Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Quiz Mode -->
        <div v-if="currentMode === 'quiz'" class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl p-8">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                🎯 Quiz Challenge
              </h2>
              <p class="text-gray-600">Test your Spanish knowledge!</p>
            </div>

            <div v-if="!quizStarted" class="text-center">
              <button
                @click="startQuiz"
                class="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Quiz
              </button>
            </div>

            <div v-else-if="currentQuizQuestion" class="space-y-6">
              <div class="text-center">
                <div class="text-sm text-gray-500 mb-2">
                  Question {{ quizCurrentIndex + 1 }} of
                  {{ quizQuestions.length }}
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div
                    class="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all duration-300"
                    :style="{
                      width:
                        ((quizCurrentIndex + 1) / quizQuestions.length) * 100 +
                        '%',
                    }"
                  ></div>
                </div>
              </div>

              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  What does "{{ currentQuizQuestion.spanish }}" mean in English?
                </h3>
                <button
                  @click="playPronunciation(currentQuizQuestion.spanish)"
                  class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-all"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
                    />
                  </svg>
                  Listen
                </button>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  v-for="(option, index) in currentQuizQuestion.options"
                  :key="index"
                  @click="selectQuizAnswer(option)"
                  class="p-4 text-left border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
                  :class="
                    quizSelectedAnswer === option
                      ? 'border-orange-500 bg-orange-50'
                      : ''
                  "
                >
                  {{ option }}
                </button>
              </div>

              <div class="text-center" v-if="quizSelectedAnswer">
                <button
                  @click="submitQuizAnswer"
                  class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Submit Answer
                </button>
              </div>
            </div>

            <div v-else class="text-center">
              <div class="text-6xl mb-4">🎉</div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Quiz Complete!
              </h3>
              <p class="text-gray-600 mb-6">
                You scored {{ quizScore }} out of {{ quizQuestions.length }}!
              </p>
              <button
                @click="resetQuiz"
                class="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>

        <!-- Memory Game Mode -->
        <div v-else-if="currentMode === 'memory'" class="max-w-6xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl p-8">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                🧠 Memory Game
              </h2>
              <p class="text-gray-600">
                Match Spanish phrases with their English translations!
              </p>
            </div>

            <div v-if="!memoryGameStarted" class="text-center">
              <button
                @click="startMemoryGame"
                class="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Memory Game
              </button>
            </div>

            <div v-else>
              <div class="text-center mb-6">
                <div class="text-sm text-gray-500">
                  Matches: {{ memoryMatches }} / {{ memoryCards.length / 2 }}
                </div>
                <div class="text-sm text-gray-500">
                  Attempts: {{ memoryAttempts }}
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div
                  v-for="(card, index) in memoryCards"
                  :key="index"
                  @click="flipMemoryCard(index)"
                  class="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
                  :class="{
                    'bg-gradient-to-br from-green-400 to-green-500':
                      card.matched,
                    'bg-gradient-to-br from-orange-400 to-red-500':
                      card.flipped && !card.matched,
                  }"
                >
                  <div class="h-full flex items-center justify-center p-2">
                    <div
                      v-if="card.flipped || card.matched"
                      class="text-white text-center"
                    >
                      <div class="font-bold text-sm">{{ card.text }}</div>
                      <div
                        v-if="card.type === 'spanish'"
                        class="text-xs opacity-75 mt-1"
                      >
                        {{ card.pronunciation }}
                      </div>
                    </div>
                    <div v-else class="text-white text-2xl">?</div>
                  </div>
                </div>
              </div>

              <div v-if="memoryGameComplete" class="text-center mt-8">
                <div class="text-6xl mb-4">🎉</div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">
                  Congratulations!
                </h3>
                <p class="text-gray-600 mb-6">
                  You completed the memory game in
                  {{ memoryAttempts }} attempts!
                </p>
                <button
                  @click="resetMemoryGame"
                  class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Story Mode -->
        <div v-else-if="currentMode === 'story'" class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl p-8">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                📚 Barcelona Story Mode
              </h2>
              <p class="text-gray-600">
                Learn Spanish through real Barcelona scenarios!
              </p>
            </div>

            <div
              class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6"
            >
              <div class="flex items-center mb-4">
                <div class="text-4xl mr-4">{{ currentStory.emoji }}</div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">
                    {{ currentStory.title }}
                  </h3>
                  <p class="text-gray-600">{{ currentStory.setting }}</p>
                </div>
              </div>

              <div class="bg-white rounded-xl p-4 mb-4">
                <p class="text-gray-700 leading-relaxed">
                  {{ currentStory.scenario }}
                </p>
              </div>

              <div class="space-y-3">
                <h4 class="font-semibold text-gray-900">
                  Key Phrases for this scenario:
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div
                    v-for="phrase in currentStory.phrases"
                    :key="phrase.english"
                    class="bg-white rounded-lg p-3 border border-gray-200"
                  >
                    <div class="font-medium text-gray-900">
                      {{ phrase.english }}
                    </div>
                    <div class="text-orange-600 font-semibold">
                      {{ phrase.spanish }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ phrase.pronunciation }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-between mt-6">
                <button
                  @click="previousStory"
                  :disabled="currentStoryIndex === 0"
                  class="px-4 py-2 bg-gray-200 text-gray-600 rounded-full font-medium disabled:opacity-50 hover:bg-gray-300 transition-all"
                >
                  ← Previous
                </button>
                <button
                  @click="nextStory"
                  :disabled="currentStoryIndex === stories.length - 1"
                  class="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium disabled:opacity-50 hover:shadow-lg transition-all"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Traditional Cards Mode (Enhanced) -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <SpanishCategoryCard
            v-for="category in spanishCategories"
            :key="category.name"
            :category="category"
            @phrase-mastered="onPhraseMastered"
          />
        </div>
      </div>
    </section>

    <!-- Achievement System -->
    <section
      class="py-16 bg-gradient-to-r from-orange-900 to-red-900"
      v-if="achievements.length > 0"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">
            🏆 Your Achievements
          </h2>
          <p class="text-orange-200 text-lg">
            Celebrate your Spanish learning milestones!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="achievement in achievements"
            :key="achievement.id"
            class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div class="text-4xl mb-3">{{ achievement.emoji }}</div>
            <h3 class="text-white font-bold mb-2">{{ achievement.title }}</h3>
            <p class="text-orange-200 text-sm">{{ achievement.description }}</p>
            <div class="text-xs text-orange-300 mt-2">
              {{ achievement.date }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Reactive data
const currentMode = ref("cards");
const learningProgress = ref(0);
const masteredPhrasesCount = ref(0);
const currentStreak = ref(1);
const achievements = ref([]);

// Quiz data
const quizStarted = ref(false);
const quizQuestions = ref([]);
const quizCurrentIndex = ref(0);
const quizSelectedAnswer = ref("");
const quizScore = ref(0);

// Memory game data
const memoryGameStarted = ref(false);
const memoryCards = ref([]);
const memoryFlippedCards = ref([]);
const memoryMatches = ref(0);
const memoryAttempts = ref(0);
const memoryGameComplete = ref(false);

// Story mode data
const currentStoryIndex = ref(0);

// Floating background elements
const floatingElements = ref([
  { emoji: "🇪🇸", x: 10, y: 20, delay: 0, duration: 8 },
  { emoji: "💃", x: 80, y: 10, delay: 2, duration: 10 },
  { emoji: "🥘", x: 15, y: 70, delay: 4, duration: 9 },
  { emoji: "🏛️", x: 85, y: 60, delay: 1, duration: 11 },
  { emoji: "🎸", x: 50, y: 15, delay: 3, duration: 7 },
  { emoji: "🌞", x: 70, y: 80, delay: 5, duration: 12 },
]);

// Learning modes
const learningModes = ref([
  { key: "cards", name: "Flash Cards", emoji: "🃏" },
  { key: "quiz", name: "Quiz Challenge", emoji: "🎯" },
  { key: "memory", name: "Memory Game", emoji: "🧠" },
  { key: "story", name: "Story Mode", emoji: "📚" },
]);

// Spanish categories with enhanced data
const spanishCategories = ref([
  {
    name: "Greetings",
    emoji: "👋",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-50 to-purple-50",
    phrases: [
      {
        english: "Hello",
        spanish: "Hola",
        pronunciation: "OH-lah",
        difficulty: 1,
      },
      {
        english: "Good Morning",
        spanish: "Buenos Días",
        pronunciation: "BWAY-nos DEE-ahs",
        difficulty: 1,
      },
      {
        english: "Good Afternoon",
        spanish: "Buenas Tardes",
        pronunciation: "BWAY-nas TAR-des",
        difficulty: 2,
      },
      {
        english: "Good Evening",
        spanish: "Buenas Noches",
        pronunciation: "BWAY-nas NO-ches",
        difficulty: 2,
      },
    ],
  },
  {
    name: "Basics",
    emoji: "🎯",
    color: "from-green-500 to-teal-600",
    bgColor: "from-green-50 to-teal-50",
    phrases: [
      {
        english: "My name is",
        spanish: "Me llamo",
        pronunciation: "meh YAH-mo",
        difficulty: 2,
      },
      {
        english: "I am ... years old",
        spanish: "Yo tengo ... años",
        pronunciation: "yo TEN-go ... AH-nyos",
        difficulty: 3,
      },
      {
        english: "I come from ...",
        spanish: "(Yo) soy de ...",
        pronunciation: "yo soy deh",
        difficulty: 2,
      },
      {
        english: "Thank you",
        spanish: "Gracias",
        pronunciation: "GRAH-see-ahs",
        difficulty: 1,
      },
      {
        english: "Thank you very much",
        spanish: "Muchas Gracias",
        pronunciation: "MOO-chas GRAH-see-ahs",
        difficulty: 2,
      },
      {
        english: "Please",
        spanish: "Por favor",
        pronunciation: "por fah-VOR",
        difficulty: 1,
      },
      {
        english: "Excuse me",
        spanish: "¡Perdón!",
        pronunciation: "per-DOHN",
        difficulty: 2,
      },
      {
        english: "I don't speak Spanish",
        spanish: "No hablo español",
        pronunciation: "no AH-blo es-pah-NYOL",
        difficulty: 3,
      },
      {
        english: "You're welcome",
        spanish: "De nada",
        pronunciation: "deh NAH-dah",
        difficulty: 1,
      },
    ],
  },
  {
    name: "Common Questions",
    emoji: "❓",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    phrases: [
      {
        english: "Where is ...?",
        spanish: "¿Dónde está ...?",
        pronunciation: "DOHN-deh es-TAH",
        difficulty: 3,
      },
      {
        english: "How much is it?",
        spanish: "¿Cuánto cuesta?",
        pronunciation: "KWAN-to KWES-tah",
        difficulty: 3,
      },
      {
        english: "What time is it?",
        spanish: "¿Qué hora es?",
        pronunciation: "keh OH-rah es",
        difficulty: 3,
      },
      {
        english: "Can you help me?",
        spanish: "¿Puede ayudarme?",
        pronunciation: "PWEH-deh ah-yu-DAR-meh",
        difficulty: 4,
      },
      {
        english: "Do you speak English?",
        spanish: "¿Habla inglés?",
        pronunciation: "AH-blah in-GLES",
        difficulty: 3,
      },
    ],
  },
  {
    name: "Directions",
    emoji: "🧭",
    color: "from-teal-500 to-green-600",
    bgColor: "from-teal-50 to-green-50",
    phrases: [
      {
        english: "Left",
        spanish: "Izquierda",
        pronunciation: "ees-kee-ER-dah",
        difficulty: 2,
      },
      {
        english: "Right",
        spanish: "Derecha",
        pronunciation: "deh-REH-chah",
        difficulty: 2,
      },
      {
        english: "Straight ahead",
        spanish: "Todo recto",
        pronunciation: "TO-do REK-to",
        difficulty: 2,
      },
      {
        english: "Near",
        spanish: "Cerca",
        pronunciation: "SER-kah",
        difficulty: 1,
      },
      {
        english: "Far",
        spanish: "Lejos",
        pronunciation: "LEH-hos",
        difficulty: 1,
      },
    ],
  },
]);

// Story scenarios
const stories = ref([
  {
    title: "Arriving at Barcelona Airport",
    emoji: "✈️",
    setting: "El Prat Airport, Barcelona",
    scenario:
      "You've just landed in Barcelona and need to navigate the airport, find transportation to the city, and communicate with airport staff.",
    phrases: [
      {
        english: "Where is the exit?",
        spanish: "¿Dónde está la salida?",
        pronunciation: "DOHN-deh es-TAH lah sah-LEE-dah",
      },
      {
        english: "How do I get to the city center?",
        spanish: "¿Cómo llego al centro de la ciudad?",
        pronunciation: "KO-mo YEH-go ahl SEN-tro deh lah see-yu-DAHD",
      },
      {
        english: "Where can I buy a metro ticket?",
        spanish: "¿Dónde puedo comprar un billete de metro?",
        pronunciation: "DOHN-deh PWEH-do kom-PRAR oon bee-YEH-teh deh MEH-tro",
      },
    ],
  },
  {
    title: "Checking into Your Accommodation",
    emoji: "🏨",
    setting: "Hotel or Apartment in Barcelona",
    scenario:
      "You're checking into your accommodation and need to communicate with the reception staff about your reservation and room details.",
    phrases: [
      {
        english: "I have a reservation",
        spanish: "Tengo una reserva",
        pronunciation: "TEN-go OO-nah reh-SER-vah",
      },
      {
        english: "What time is check-in?",
        spanish: "¿A qué hora es el check-in?",
        pronunciation: "ah keh OH-rah es el check-in",
      },
      {
        english: "Where is the elevator?",
        spanish: "¿Dónde está el ascensor?",
        pronunciation: "DOHN-deh es-TAH el ah-sen-SOR",
      },
    ],
  },
  {
    title: "Ordering Food at a Tapas Bar",
    emoji: "🍤",
    setting: "Traditional Tapas Bar in Gothic Quarter",
    scenario:
      "You're at a local tapas bar and want to order some traditional Spanish dishes. The menu is in Spanish and you need to communicate with the waiter.",
    phrases: [
      {
        english: "What do you recommend?",
        spanish: "¿Qué me recomienda?",
        pronunciation: "keh meh reh-ko-mee-EN-dah",
      },
      {
        english: "I would like...",
        spanish: "Me gustaría...",
        pronunciation: "meh goos-tah-REE-ah",
      },
      {
        english: "The bill, please",
        spanish: "La cuenta, por favor",
        pronunciation: "lah KWEN-tah por fah-VOR",
      },
    ],
  },
]);

// Cultural tips
const culturalTips = ref([
  {
    id: 1,
    emoji: "🤝",
    title: "Greeting Etiquette",
    description:
      "In Spain, people often greet with two kisses on the cheek (starting with the right). A handshake is common in formal situations.",
  },
  {
    id: 2,
    emoji: "🕐",
    title: "Meal Times",
    description:
      "Lunch is typically eaten between 2-4 PM, and dinner starts around 9-10 PM. Restaurants may be closed during siesta time (2-5 PM).",
  },
  {
    id: 3,
    emoji: "🗣️",
    title: "Speaking Volume",
    description:
      "Spanish people tend to speak more loudly and expressively than in other cultures. This is normal and shows engagement in conversation!",
  },
  {
    id: 4,
    emoji: "💰",
    title: "Tipping Culture",
    description:
      "Tipping is not mandatory in Spain. Rounding up the bill or leaving 5-10% is appreciated but not expected.",
  },
  {
    id: 5,
    emoji: "🚶",
    title: "Walking Pace",
    description:
      "Barcelona has a relaxed pace of life. Take time to enjoy your surroundings and don't rush through conversations.",
  },
  {
    id: 6,
    emoji: "🎉",
    title: "Enthusiasm",
    description:
      "Spanish people appreciate when foreigners try to speak their language, even if imperfect. Your effort will be warmly received!",
  },
]);

// Computed properties
const totalPhrases = computed(() => {
  return spanishCategories.value.reduce(
    (total, category) => total + category.phrases.length,
    0
  );
});

const currentModeInstructions = computed(() => {
  const instructions = {
    cards: {
      desktop: "Hover over cards to see translations and pronunciation",
      mobile: "Tap cards to see translations and pronunciation",
    },
    quiz: {
      desktop: "Test your knowledge with interactive quizzes",
      mobile: "Test your knowledge with interactive quizzes",
    },
    memory: {
      desktop: "Match Spanish phrases with their English translations",
      mobile: "Match Spanish phrases with their English translations",
    },
    story: {
      desktop: "Learn through immersive Barcelona scenarios",
      mobile: "Learn through immersive Barcelona scenarios",
    },
  };
  return instructions[currentMode.value] || instructions.cards;
});

const currentQuizQuestion = computed(() => {
  return quizQuestions.value[quizCurrentIndex.value] || null;
});

const currentStory = computed(() => {
  return stories.value[currentStoryIndex.value] || stories.value[0];
});

// Quiz Methods
const startQuiz = () => {
  quizStarted.value = true;
  generateQuizQuestions();
};

const generateQuizQuestions = () => {
  const allPhrases = spanishCategories.value.flatMap((cat) => cat.phrases);
  const selectedPhrases = allPhrases
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  quizQuestions.value = selectedPhrases.map((phrase) => {
    const wrongAnswers = allPhrases
      .filter((p) => p.english !== phrase.english)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((p) => p.english);

    const options = [phrase.english, ...wrongAnswers].sort(
      () => 0.5 - Math.random()
    );

    return {
      spanish: phrase.spanish,
      correct: phrase.english,
      options: options,
      pronunciation: phrase.pronunciation,
    };
  });

  quizCurrentIndex.value = 0;
  quizScore.value = 0;
};

const selectQuizAnswer = (answer) => {
  quizSelectedAnswer.value = answer;
};

const submitQuizAnswer = () => {
  if (quizSelectedAnswer.value === currentQuizQuestion.value.correct) {
    quizScore.value++;
  }

  quizSelectedAnswer.value = "";

  if (quizCurrentIndex.value < quizQuestions.value.length - 1) {
    quizCurrentIndex.value++;
  } else {
    // Quiz finished
    updateProgress(
      Math.round((quizScore.value / quizQuestions.value.length) * 100)
    );
  }
};

const resetQuiz = () => {
  quizStarted.value = false;
  quizQuestions.value = [];
  quizCurrentIndex.value = 0;
  quizSelectedAnswer.value = "";
  quizScore.value = 0;
};

// Memory Game Methods
const startMemoryGame = () => {
  memoryGameStarted.value = true;
  generateMemoryCards();
};

const generateMemoryCards = () => {
  const selectedPhrases = spanishCategories.value
    .flatMap((cat) => cat.phrases)
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);

  const cards = [];
  selectedPhrases.forEach((phrase) => {
    cards.push({
      id: phrase.english,
      text: phrase.english,
      type: "english",
      flipped: false,
      matched: false,
    });
    cards.push({
      id: phrase.english,
      text: phrase.spanish,
      type: "spanish",
      pronunciation: phrase.pronunciation,
      flipped: false,
      matched: false,
    });
  });

  memoryCards.value = cards.sort(() => 0.5 - Math.random());
  memoryFlippedCards.value = [];
  memoryMatches.value = 0;
  memoryAttempts.value = 0;
  memoryGameComplete.value = false;
};

const flipMemoryCard = (index) => {
  if (
    memoryCards.value[index].flipped ||
    memoryCards.value[index].matched ||
    memoryFlippedCards.value.length >= 2
  ) {
    return;
  }

  memoryCards.value[index].flipped = true;
  memoryFlippedCards.value.push(index);

  if (memoryFlippedCards.value.length === 2) {
    memoryAttempts.value++;
    setTimeout(checkMemoryMatch, 1000);
  }
};

const checkMemoryMatch = () => {
  const [first, second] = memoryFlippedCards.value;
  const firstCard = memoryCards.value[first];
  const secondCard = memoryCards.value[second];

  if (firstCard.id === secondCard.id) {
    firstCard.matched = true;
    secondCard.matched = true;
    memoryMatches.value++;

    if (memoryMatches.value === memoryCards.value.length / 2) {
      memoryGameComplete.value = true;
      updateProgress(Math.min(100, learningProgress.value + 10));
    }
  } else {
    firstCard.flipped = false;
    secondCard.flipped = false;
  }

  memoryFlippedCards.value = [];
};

const resetMemoryGame = () => {
  memoryGameStarted.value = false;
  memoryCards.value = [];
  memoryFlippedCards.value = [];
  memoryMatches.value = 0;
  memoryAttempts.value = 0;
  memoryGameComplete.value = false;
};

// Story Methods
const nextStory = () => {
  if (currentStoryIndex.value < stories.value.length - 1) {
    currentStoryIndex.value++;
  }
};

const previousStory = () => {
  if (currentStoryIndex.value > 0) {
    currentStoryIndex.value--;
  }
};

// General Methods
const updateProgress = (progress) => {
  learningProgress.value = Math.min(
    100,
    Math.max(learningProgress.value, progress)
  );
  saveProgress();
};

const onPhraseMastered = (phrase) => {
  masteredPhrasesCount.value++;
  updateProgress(
    Math.round((masteredPhrasesCount.value / totalPhrases.value) * 100)
  );

  // Add achievements
  if (masteredPhrasesCount.value === 1) {
    addAchievement(
      "first-phrase",
      "🎉",
      "First Steps",
      "Mastered your first Spanish phrase!"
    );
  } else if (masteredPhrasesCount.value === 10) {
    addAchievement(
      "ten-phrases",
      "🔥",
      "Getting Hot",
      "Mastered 10 Spanish phrases!"
    );
  } else if (masteredPhrasesCount.value === 25) {
    addAchievement(
      "quarter-master",
      "⭐",
      "Quarter Master",
      "Mastered 25 Spanish phrases!"
    );
  }
};

const addAchievement = (id, emoji, title, description) => {
  if (!achievements.value.find((a) => a.id === id)) {
    achievements.value.push({
      id,
      emoji,
      title,
      description,
      date: new Date().toLocaleDateString(),
    });
    saveProgress();
  }
};

const playPronunciation = (text) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
};

const saveProgress = () => {
  const data = {
    progress: learningProgress.value,
    masteredPhrases: masteredPhrasesCount.value,
    streak: currentStreak.value,
    achievements: achievements.value,
  };
  localStorage.setItem("spanish-learning-progress", JSON.stringify(data));
};

const loadProgress = () => {
  const saved = localStorage.getItem("spanish-learning-progress");
  if (saved) {
    const data = JSON.parse(saved);
    learningProgress.value = data.progress || 0;
    masteredPhrasesCount.value = data.masteredPhrases || 0;
    currentStreak.value = data.streak || 1;
    achievements.value = data.achievements || [];
  }
};

// Lifecycle
onMounted(() => {
  loadProgress();
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(-10px) rotate(-5deg);
  }
  75% {
    transform: translateY(-15px) rotate(3deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #f59e0b, #ef4444);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #d97706, #dc2626);
}
</style>
