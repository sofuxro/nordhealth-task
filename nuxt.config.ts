// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/test-utils', 'nuxt-auth-utils'],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nordhealth', // default fallback title
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  css: ['~/assets/css/main.css'],

  vue: {
    compilerOptions: {
      // treat all tags with a dash as custom elements
      isCustomElement: tag => tag.startsWith('nord-'),
    },
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-05-15',
})