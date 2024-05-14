// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    '@nuxt/image',
    'nuxt-primevue',
    '@pinia/nuxt',
    'nuxt3-leaflet',
  ],

  css: [
    "mapbox-gl/dist/mapbox-gl.css",
    "v-mapbox/dist/v-mapbox.css"
  ],

  // plugins: [{ src: "~/plugins/v-mapbox", mode: "client" }]
});