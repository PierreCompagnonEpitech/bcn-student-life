<template>
  <CategoryPage
    category-title="Museums"
    category-description="Immerse yourself in Barcelona's rich cultural heritage! From world-renowned art collections to fascinating historical exhibits, the city's museums offer incredible insights into Catalan culture, modern art, and centuries of history. Discover masterpieces by Picasso, Miró, and many other celebrated artists."
    :items="museumsData"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useSightStore } from '~/stores/sights'

const sights = useSightStore()
const museumsData = ref(sights.museumsTab)

const loadFavorites = () => {
  for (let i = 0; i < museumsData.value.length; i++) {
    const cookie = useCookie(museumsData.value[i].index.toString())
    if (cookie.value !== undefined) {
      museumsData.value[i].isLiked = cookie.value
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