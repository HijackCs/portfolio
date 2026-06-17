import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Hugo Schroder - Ingénieur logiciel',
      meta: [
        { name: 'description', content: 'Ingénieur logiciel - applications mobiles, SaaS, IoT et systèmes embarqués. Conception et développement de produits logiciels de bout en bout.' },
        { name: 'theme-color', content: '#0D1117' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] }
    ]
  },

  routeRules: {
    '/': { prerender: true },
    '/projects': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/mentions-legales': { prerender: true }
  },

  // Suit les liens depuis les pages prerendues pour générer
  // statiquement chaque page projet (/projects/<slug>)
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
