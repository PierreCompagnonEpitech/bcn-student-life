<template>
  <div class="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full max-w-sm">
    <!-- Image Section -->
    <div class="relative overflow-hidden h-64">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      <!-- Like Button -->
      <button
        @click="toggleLike"
        class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        :class="{ 'bg-red-500/80 hover:bg-red-500': isLiked }"
      >
        <svg 
          class="w-5 h-5 transition-colors duration-300" 
          :class="isLiked ? 'text-white' : 'text-white/80'"
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>

      <!-- Category Badge -->
      <div class="absolute top-4 left-4">
        <div class="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {{ category }}
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
        {{ description }}
      </p>
      
      <!-- Action Button -->
      <div class="flex items-center justify-between">
        <a
          :href="redirectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Visit Website
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  redirectUrl: {
    type: String,
    required: true
  },
  isLiked: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: 'Barcelona'
  }
})

const emit = defineEmits(['likeState'])

const liked = ref(props.isLiked)

// Watch for changes in props.isLiked to sync with parent
watch(() => props.isLiked, (newValue) => {
  liked.value = newValue
})

const toggleLike = () => {
  liked.value = !liked.value
  emit('likeState', {
    index: props.index,
    isLiked: liked.value
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>