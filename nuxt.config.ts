// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
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
        { property: 'og:description', content: 'Portfolio de Hugo Schroder, développeur web freelance spécialisé dans les technologies modernes.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://hugoschroder.dev/sitemap.xml',
  },
  sitemap: {
    siteUrl: 'https://hugoschroder.dev',
    trailingSlash: true,
    xslUrl: 'https://hugoschroder.dev/sitemap.xsl', 
    credits: false, 
    routes: async () => {
      return [];
    },
    sitemapName: 'sitemap.xml',
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  },
})