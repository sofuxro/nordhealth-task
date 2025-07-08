// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils'],

  future: {
    compatibilityVersion: 4,
  },
  // eslint: {
  //   config: {
  //     stylistic: {
  //       quotes: 'single', // TODO - check if it is needed
  //     },
  //   },
  // },
})