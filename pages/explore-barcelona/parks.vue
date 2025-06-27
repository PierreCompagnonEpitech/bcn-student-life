<template>
  <CategoryPage
    category-title="Parks"
    category-description="Escape the bustling city streets and discover Barcelona's green oases! From the iconic Park Güell to hidden neighborhood gems, these parks offer the perfect spots for relaxation, picnics, and outdoor activities. Breathe in the fresh air and enjoy nature in the heart of this vibrant Mediterranean city."
    :items="parksData"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useSightStore } from '~/stores/sights'
import { useCookie } from '#app'

const sights = useSightStore()
const parksData = ref(sights.parksTab)

const loadFavorites = () => {
  for (let i = 0; i < parksData.value.length; i++) {
    const cookie = useCookie(parksData.value[i].index.toString())
    if (cookie.value !== undefined) {
      parksData.value[i].isLiked = cookie.value
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