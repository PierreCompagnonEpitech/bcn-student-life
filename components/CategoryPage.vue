<template>
  <div class="min-h-screen bg-white">
    <Header />

    <!-- Hero Section -->
    <section class="relative py-16 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div class="mb-8 lg:mb-0">
            <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-800 rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              EXPLORE BARCELONA
            </div>
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {{ categoryTitle }}
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl leading-relaxed">
              {{ categoryDescription }}
            </p>
          </div>
          
          <!-- Favorites Button -->
          <div class="flex-shrink-0">
            <button
              @click="$router.push('/explore-barcelona/my-favorites')"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              My Favorites
              <span v-if="favoriteCount > 0" class="ml-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                {{ favoriteCount }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Items Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <CategoryCard
            v-for="item in items"
            :key="item.index"
            :index="item.index"
            :imageUrl="item.imageUrl"
            :title="item.title"
            :description="item.description"
            :redirectUrl="item.redirectUrl"
            :isLiked="item.isLiked"
            :category="categoryTitle"
            @likeState="handleLikeState"
          />
        </div>
        
        <!-- Empty State -->
        <div v-if="items.length === 0" class="text-center py-16">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No places found</h3>
          <p class="text-gray-600">Check back later for new additions.</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue'

const props = defineProps({
  categoryTitle: {
    type: String,
    required: true
  },
  categoryDescription: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

// Computed properties
const favoriteCount = computed(() => {
  return props.items.filter(item => item.isLiked).length
})

// Methods
const handleLikeState = (obj) => {
  const item = props.items.find(item => item.index === obj.index)
  if (item) {
    item.isLiked = obj.isLiked
  }
  
  // Save to cookie
  const cookie = useCookie(`favorite_${obj.index}`)
  cookie.value = obj.isLiked
}

const loadFavorites = () => {
  props.items.forEach(item => {
    const cookie = useCookie(`favorite_${item.index}`)
    if (cookie.value !== undefined) {
      item.isLiked = cookie.value
    }
  })
}

// Lifecycle
onBeforeMount(() => {
  loadFavorites()
})

onMounted(() => {
  loadFavorites()
})
</script>