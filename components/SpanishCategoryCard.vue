<template>
  <div class="group relative">
    <!-- Category Header -->
    <div class="text-center mb-6">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 text-3xl"
           :class="`bg-gradient-to-r ${category.bgColor}`">
        {{ category.emoji }}
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ category.name }}</h3>
      <div class="flex items-center justify-center space-x-2">
        <div class="text-sm text-gray-500">{{ category.phrases.length }} phrases</div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div class="text-sm text-green-600 font-medium">{{ masteredCount }}/{{ category.phrases.length }} mastered</div>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
        <div class="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
             :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>

    <!-- Interactive Phrase Cards -->
    <div class="space-y-3">
      <div 
        v-for="(phrase, index) in category.phrases" 
        :key="index"
        class="relative group/card"
      >
        <!-- Flip Card Container -->
        <div class="flip-card h-24 cursor-pointer" @click="toggleCard(index)">
          <div class="flip-card-inner" :class="{ 'flipped': flippedCards[index] }">
            <!-- Front Side (English) -->
            <div class="flip-card-front">
              <div class="h-full bg-white rounded-xl border-2 border-gray-200 p-4 flex items-center justify-between hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <div class="flex-1">
                  <div class="text-gray-900 font-medium">{{ phrase.english }}</div>
                  <div class="flex items-center mt-2">
                    <div class="flex space-x-1 mr-3">
                      <div 
                        v-for="i in 5" 
                        :key="i"
                        class="w-2 h-2 rounded-full"
                        :class="i <= phrase.difficulty ? 'bg-orange-400' : 'bg-gray-200'"
                      ></div>
                    </div>
                    <div class="text-xs text-gray-500">Difficulty</div>
                  </div>
                </div>
                <div class="text-orange-500 opacity-60 group-hover/card:opacity-100 transition-opacity">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Back Side (Spanish) -->
            <div class="flip-card-back">
              <div class="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 flex flex-col justify-center text-white relative overflow-hidden">
                <!-- Background Pattern -->
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute inset-0"></div>
                </div>
                
                <div class="relative">
                  <div class="text-xl font-bold mb-2">{{ phrase.spanish }}</div>
                  <div class="text-orange-100 text-sm mb-3">{{ phrase.pronunciation }}</div>
                  
                  <!-- Action Buttons -->
                  <div class="flex items-center justify-between">
                    <button 
                      @click.stop="playPronunciation(phrase.spanish)"
                      class="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs hover:bg-white/30 transition-all"
                    >
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                      <span>Listen</span>
                    </button>
                    
                    <button 
                      @click.stop="markAsMastered(phrase, index)"
                      class="flex items-center space-x-1 bg-green-500/80 px-3 py-1 rounded-full text-xs hover:bg-green-600 transition-all"
                      :class="{ 'bg-green-600': masteredPhrases.includes(index) }"
                    >
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{{ masteredPhrases.includes(index) ? 'Mastered' : 'Got it!' }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Completion Celebration -->
    <div v-if="isCompleted" class="mt-6 text-center">
      <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
        <span class="text-lg mr-2">🎉</span>
        Category Completed!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  masteredPhrases: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['phrase-mastered'])

// Reactive data
const flippedCards = ref({})
const masteredPhrases = ref([])

// Computed properties
const masteredCount = computed(() => masteredPhrases.value.length)
const progressPercentage = computed(() => 
  (masteredCount.value / props.category.phrases.length) * 100
)
const isCompleted = computed(() => 
  masteredCount.value === props.category.phrases.length
)

// Methods
const toggleCard = (index) => {
  flippedCards.value[index] = !flippedCards.value[index]
}

const playPronunciation = (text) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'es-ES'
    utterance.rate = 0.8
    speechSynthesis.speak(utterance)
  }
}

const markAsMastered = (phrase, index) => {
  if (!masteredPhrases.value.includes(index)) {
    masteredPhrases.value.push(index)
    emit('phrase-mastered', phrase)
    
    // Save to localStorage
    const key = `mastered-${props.category.name.toLowerCase()}`
    localStorage.setItem(key, JSON.stringify(masteredPhrases.value))
  }
}

// Lifecycle
onMounted(() => {
  // Load mastered phrases from localStorage
  const key = `mastered-${props.category.name.toLowerCase()}`
  const saved = localStorage.getItem(key)
  if (saved) {
    masteredPhrases.value = JSON.parse(saved)
  }
})
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

@media (hover: hover) {
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card:hover .flip-card-inner.flipped {
    transform: rotateY(360deg);
  }
}
</style>