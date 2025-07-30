<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
      <Analytics />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>