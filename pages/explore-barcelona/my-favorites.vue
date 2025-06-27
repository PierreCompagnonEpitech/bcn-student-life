<template>
  <div class="min-h-screen bg-white">
    <Header />

    <!-- Hero Section -->
    <section class="relative py-16 lg:py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-red-50"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-800 rounded-full text-sm font-medium mb-8 shadow-lg">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            MY FAVORITES
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your <span class="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Favorite</span> Places
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            All your saved places in Barcelona, organized by category for easy planning
          </p>
        </div>

        <!-- Stats Overview -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div class="text-3xl font-bold text-blue-600 mb-2">{{ favoriteStats.sights }}</div>
            <div class="text-gray-600 font-medium">Sights</div>
          </div>
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div class="text-3xl font-bold text-purple-600 mb-2">{{ favoriteStats.museums }}</div>
            <div class="text-gray-600 font-medium">Museums</div>
          </div>
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div class="text-3xl font-bold text-green-600 mb-2">{{ favoriteStats.parks }}</div>
            <div class="text-gray-600 font-medium">Parks</div>
          </div>
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div class="text-3xl font-bold text-orange-600 mb-2">{{ favoriteStats.restaurants }}</div>
            <div class="text-gray-600 font-medium">Restaurants</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-8 bg-gray-50" v-if="allFavorites.length > 0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="tab in filterTabs"
            :key="tab.key"
            @click="activeFilter = tab.key"
            class="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
            :class="activeFilter === tab.key 
              ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'"
          >
            <span class="flex items-center">
              <component :is="tab.icon" class="w-5 h-5 mr-2" />
              {{ tab.label }}
              <span v-if="tab.count > 0" class="ml-2 px-2 py-1 text-xs rounded-full"
                :class="activeFilter === tab.key ? 'bg-white/20' : 'bg-gray-200'">
                {{ tab.count }}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Favorites Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Empty State -->
        <div v-if="allFavorites.length === 0" class="text-center py-20">
          <div class="w-24 h-24 bg-gradient-to-r from-pink-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg class="w-12 h-12 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">No favorites yet</h3>
          <p class="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Start exploring Barcelona and save your favorite places to see them here!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="$router.push('/explore-barcelona/sights-and-landmarks')"
              class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Sights
            </button>
            <button 
              @click="$router.push('/explore-barcelona/restaurants')"
              class="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Find Restaurants
            </button>
          </div>
        </div>

        <!-- Favorites Grid -->
        <div v-else>
          <!-- Category Sections -->
          <div v-for="category in categorizedFavorites" :key="category.name" class="mb-16">
            <div v-if="category.items.length > 0 && (activeFilter === 'all' || activeFilter === category.key)">
              <div class="flex items-center mb-8">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                  :class="category.bgColor">
                  <component :is="category.icon" class="w-6 h-6" :class="category.iconColor" />
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-gray-900">{{ category.name }}</h2>
                  <p class="text-gray-600">{{ category.items.length }} favorite{{ category.items.length !== 1 ? 's' : '' }}</p>
                </div>
              </div>

              <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <FavoriteCard
                  v-for="item in category.items"
                  :key="item.index"
                  :index="item.index"
                  :imageUrl="item.imageUrl"
                  :title="item.title"
                  :description="item.description"
                  :redirectUrl="item.redirectUrl"
                  :category="category.name"
                  :isLiked="item.isLiked"
                  @likeState="handleLikeState"
                  @remove="removeFromFavorites"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Action Section -->
    <section class="py-20 bg-gray-900" v-if="allFavorites.length > 0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-3xl">
          <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600"></div>
          <div class="absolute inset-0 opacity-20"></div>
          <div class="relative text-center p-12 lg:p-16">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Explore Your Favorites?
            </h2>
            <p class="text-pink-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              You have {{ allFavorites.length }} amazing places saved. Start planning your Barcelona adventure!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                @click="exportFavorites"
                class="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Export List
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4h8"></path>
                </svg>
              </button>
              <button 
                @click="clearAllFavorites"
                class="px-8 py-4 bg-pink-500/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                Clear All
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
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
import { ref, computed, onMounted } from 'vue'
import { useSightStore } from '~/stores/sights'
import { useCookie } from '#app'

// Store
const sights = useSightStore()

// Reactive data
const activeFilter = ref('all')

// Icons as template components
const AllIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>`
}

const SightIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`
}

const MuseumIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path></svg>`
}

const ParkIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`
}

const RestaurantIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path></svg>`
}

// Computed properties
const allFavorites = computed(() => {
  const favorites = []
  
  // Load favorites from each category
  sights.sightsTab.forEach(item => {
    if (item.isLiked) {
      favorites.push({ ...item, category: 'sights' })
    }
  })
  
  sights.museumsTab.forEach(item => {
    if (item.isLiked) {
      favorites.push({ ...item, category: 'museums' })
    }
  })
  
  sights.parksTab.forEach(item => {
    if (item.isLiked) {
      favorites.push({ ...item, category: 'parks' })
    }
  })
  
  sights.restaurantsTab.forEach(item => {
    if (item.isLiked) {
      favorites.push({ ...item, category: 'restaurants' })
    }
  })
  
  return favorites
})

const favoriteStats = computed(() => {
  return {
    sights: allFavorites.value.filter(item => item.category === 'sights').length,
    museums: allFavorites.value.filter(item => item.category === 'museums').length,
    parks: allFavorites.value.filter(item => item.category === 'parks').length,
    restaurants: allFavorites.value.filter(item => item.category === 'restaurants').length,
  }
})

const categorizedFavorites = computed(() => {
  return [
    {
      key: 'sights',
      name: 'Sights & Landmarks',
      items: allFavorites.value.filter(item => item.category === 'sights'),
      icon: SightIcon,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      key: 'museums',
      name: 'Museums',
      items: allFavorites.value.filter(item => item.category === 'museums'),
      icon: MuseumIcon,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      key: 'parks',
      name: 'Parks',
      items: allFavorites.value.filter(item => item.category === 'parks'),
      icon: ParkIcon,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      key: 'restaurants',
      name: 'Restaurants',
      items: allFavorites.value.filter(item => item.category === 'restaurants'),
      icon: RestaurantIcon,
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ]
})

const filterTabs = computed(() => {
  return [
    {
      key: 'all',
      label: 'All Favorites',
      icon: AllIcon,
      count: allFavorites.value.length
    },
    {
      key: 'sights',
      label: 'Sights',
      icon: SightIcon,
      count: favoriteStats.value.sights
    },
    {
      key: 'museums',
      label: 'Museums',
      icon: MuseumIcon,
      count: favoriteStats.value.museums
    },
    {
      key: 'parks',
      label: 'Parks',
      icon: ParkIcon,
      count: favoriteStats.value.parks
    },
    {
      key: 'restaurants',
      label: 'Restaurants',
      icon: RestaurantIcon,
      count: favoriteStats.value.restaurants
    }
  ]
})

// Methods
const loadFavorites = () => {
  // Load sights favorites
  sights.sightsTab.forEach(item => {
    const cookie = useCookie(item.index.toString())
    if (cookie.value !== undefined) {
      item.isLiked = cookie.value
    }
  })
  
  // Load museums favorites
  sights.museumsTab.forEach(item => {
    const cookie = useCookie(item.index.toString())
    if (cookie.value !== undefined) {
      item.isLiked = cookie.value
    }
  })
  
  // Load parks favorites
  sights.parksTab.forEach(item => {
    const cookie = useCookie(item.index.toString())
    if (cookie.value !== undefined) {
      item.isLiked = cookie.value
    }
  })
  
  // Load restaurants favorites
  sights.restaurantsTab.forEach(item => {
    const cookie = useCookie(item.index.toString())
    if (cookie.value !== undefined) {
      item.isLiked = cookie.value
    }
  })
}

const handleLikeState = (obj) => {
  // Find and update the item in the appropriate store tab
  const allTabs = [
    sights.sightsTab,
    sights.museumsTab,
    sights.parksTab,
    sights.restaurantsTab
  ]
  
  for (const tab of allTabs) {
    const item = tab.find(item => item.index === obj.index)
    if (item) {
      item.isLiked = obj.isLiked
      break
    }
  }
  
  // Save to cookie
  const cookie = useCookie(obj.index.toString())
  cookie.value = obj.isLiked
}

const removeFromFavorites = (index) => {
  handleLikeState({ index, isLiked: false })
}

const clearAllFavorites = () => {
  if (confirm('Are you sure you want to remove all favorites? This action cannot be undone.')) {
    allFavorites.value.forEach(item => {
      handleLikeState({ index: item.index, isLiked: false })
    })
  }
}

const exportFavorites = () => {
  const favoritesText = allFavorites.value.map(item => 
    `${item.title} (${item.category})\n${item.description}\n${item.redirectUrl}\n`
  ).join('\n')
  
  const blob = new Blob([favoritesText], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'barcelona-favorites.txt'
  a.click()
  URL.revokeObjectURL(url)
}

// Lifecycle
onMounted(() => {
  loadFavorites()
})
</script>