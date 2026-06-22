import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/seo'
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
        { name: 'theme-color', content: '#0D1117' },
        // Image OG/Twitter par défaut (statique, générée via scripts/generate-og.mjs).
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Hugo Schroder' },
        { property: 'og:image', content: 'https://hugoschroder.dev/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Hugo Schroder — Ingénieur logiciel' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://hugoschroder.dev/og-image.png' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  // --- SEO (@nuxtjs/seo : site config, sitemap, robots, schema.org) ---
  site: {
    url: 'https://hugoschroder.dev',
    name: 'Hugo Schroder',
    description: 'Ingénieur logiciel - applications mobiles, SaaS, IoT et systèmes embarqués. Conception et développement de produits logiciels de bout en bout.',
    defaultLocale: 'fr'
  },

  routeRules: {
    '/': { prerender: true },
    '/projects': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
    '/mentions-legales': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  // Suit les liens depuis les pages prerendues pour générer
  // statiquement chaque page projet (/projects/<slug>)
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] }
    ]
  },

  // nuxt-link-checker (embarqué) injecte un overlay dev en position:fixed qui
  // passe au-dessus du curseur custom. On coupe l'overlay, on garde les checks au build.
  linkChecker: {
    showLiveInspections: false
  },

  ogImage: {
    enabled: false
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Hugo Schroder',
      url: 'https://hugoschroder.dev',
      image: 'https://hugoschroder.dev/hugo.jpg',
      jobTitle: 'Ingénieur logiciel',
      description: 'Ingénieur logiciel indépendant - applications mobiles, SaaS, IoT et systèmes embarqués.',
      sameAs: [
        'https://github.com/HijackCs',
        'https://www.linkedin.com/in/hugo-schroder'
      ]
    }
  },

  sitemap: {
    autoLastmod: true,
    exclude: ['/mentions-legales']
  }
})
