<template>
  <CategoryPage
    category-title="Restaurants"
    category-description="Savor the flavors of Barcelona! From traditional Catalan cuisine to innovative modern gastronomy, the city's dining scene is a feast for all senses. Discover hidden tapas bars, authentic local favorites where you can taste Mediterranean flavors, fresh seafood, and experience the vibrant culinary culture of Catalonia."
    :items="restaurantsData"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useSightStore } from '~/stores/sights'
import { useCookie } from '#app'

const sights = useSightStore()
const restaurantsData = ref(sights.restaurantsTab)

const loadFavorites = () => {
  for (let i = 0; i < restaurantsData.value.length; i++) {
    const cookie = useCookie(restaurantsData.value[i].index.toString())
    if (cookie.value !== undefined) {
      restaurantsData.value[i].isLiked = cookie.value
    }
  }
}

onBeforeMount(() => {
  loadFavorites()
})

onMounted(() => {
  loadFavorites()
})
</script>