<template>
  <CategoryPage
    category-title="Sights and Landmarks"
    category-description="Barcelona bursts with iconic sights beyond Gaudi's masterpieces! From the labyrinthine streets of the Gothic Quarter to the panoramic views from Montjuïc Hill, we've curated a must-see list to ensure your trip is unforgettable. Get ready to soak in history, stunning architecture, and the vibrant energy that makes Barcelona unique!"
    :items="sightsData"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useSightStore } from '~/stores/sights'
import { useCookie } from '#app'

const sights = useSightStore()
const sightsData = ref(sights.sightsTab)

const loadFavorites = () => {
  for (let i = 0; i < sightsData.value.length; i++) {
    const cookie = useCookie(sightsData.value[i].index.toString())
    if (cookie.value !== undefined) {
      sightsData.value[i].isLiked = cookie.value
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