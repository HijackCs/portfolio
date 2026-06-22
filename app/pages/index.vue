<template>
  <div>
    <HomeHeroSection />
    <HomePillarsSection />
    <HomeFeaturedProjects />
    <HomeAboutTeaser />
  </div>
</template>

<script setup lang="ts">
const title = 'Hugo Schroder - Ingénieur logiciel'
const description = 'Ingénieur logiciel - applications mobiles, SaaS, IoT et systèmes embarqués. Conception et développement de produits logiciels de bout en bout.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

// Person + WebSite + WebPage sont injectés automatiquement (schemaOrg.identity).
useSchemaOrg([
  defineWebPage({ '@type': ['WebPage', 'ProfilePage'] })
])
</script>
