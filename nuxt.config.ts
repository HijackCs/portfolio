// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  
  app: {
    head: {
      title: 'Hugo Schroder - Développeur Web full-stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de Hugo Schroder, développeur web full-stack spécialisé dans les technologies modernes. Services de développement web sur mesure.' },
        { name: 'keywords', content: 'développeur web, freelance, Vue.js, Nuxt.js, React, JavaScript, TypeScript' },
        { name: 'author', content: 'Hugo Schroder' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Hugo Schroder - Développeur Web Freelance' },
        { property: 'og:description', content: 'Portfolio de Hugo Schroder, développeur web freelance spécialisé dans les technologies modernes.' },
        { property: 'og:url', content: 'https://hugoschroder.dev' },
        { property: 'og:site_name', content: 'Hugo Schroder' },
        { property: 'og:image', content: 'https://hugoschroder.dev/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Hugo Schroder - Développeur Web Full-Stack' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Hugo Schroder - Développeur Web Full-Stack' },
        { name: 'twitter:description', content: 'Portfolio de Hugo Schroder, développeur web full-stack spécialisé dans les technologies modernes.' },
        { name: 'twitter:image', content: 'https://hugoschroder.dev/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://hugoschroder.dev' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  }
})