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
    // '@twicpics/components/nuxt3',
  ],

  // "twicpics": {
  //   "domain": `https://<your-domain>.twic.pics`,
  // },
  css: [
    "mapbox-gl/dist/mapbox-gl.css",
    "v-mapbox/dist/v-mapbox.css"
  ],

});