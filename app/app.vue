<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  htmlAttrs: { lang: 'fr' },
  meta: [
    { name: 'robots', content: 'index, follow, max-image-preview:none' },
    { name: 'googlebot', content: 'index, follow, max-image-preview:none' }
  ],
  link: [
    { rel: 'alternate', type: 'application/rss+xml', title: 'Blog RSS', href: 'https://hugoschroder.dev/rss.xml' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Hugo Schroder',
        url: 'https://hugoschroder.dev',
        jobTitle: 'Développeur Web Freelance',
        sameAs: [
          'https://www.linkedin.com/in/hugo-schroder/',
          'https://github.com/hijackcs',
          'https://twitter.com/hijack_dev',
          'https://instagram.com/hijack_dev'
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Hugo Schroder',
        url: 'https://hugoschroder.dev',
        logo: 'https://hugoschroder.dev/og-image.png',
        sameAs: [
          'https://www.linkedin.com/in/hugo-schroder/',
          'https://github.com/hijackcs',
          'https://twitter.com/hijack_dev',
          'https://instagram.com/hijack_dev'
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Hugo Schroder',
        url: 'https://hugoschroder.dev',
        inLanguage: 'fr-FR'
      })
    }
  ]
})
</script>
