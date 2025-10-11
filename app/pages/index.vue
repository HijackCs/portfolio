<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <AppHeader />

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-16 md:py-24">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <div class="space-y-4">
          <UBadge color="primary" variant="subtle" size="lg">
            Nuxt 3 + Tailwind CSS + Nuxt UI
          </UBadge>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Votre Starter
            <span class="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Nuxt
            </span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un template moderne et prêt à l'emploi pour démarrer rapidement vos projets Nuxt avec Tailwind CSS et Nuxt UI.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <UButton size="xl" color="primary" icon="i-heroicons-rocket-launch">
            Commencer
          </UButton>
          <UButton size="xl" color="gray" variant="outline" icon="i-heroicons-code-bracket">
            Documentation
          </UButton>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Fonctionnalités incluses
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Tout ce dont vous avez besoin pour démarrer rapidement
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard v-for="feature in features" :key="feature.title">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <UIcon :name="feature.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ feature.title }}
                </h4>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-400">
              {{ feature.description }}
            </p>
          </UCard>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Nuxt 3',
    icon: 'i-heroicons-rocket-launch',
    description: 'Framework Vue.js moderne avec SSR, SSG et plus encore.'
  },
  {
    title: 'Tailwind CSS',
    icon: 'i-heroicons-paint-brush',
    description: 'Utility-first CSS framework pour un styling rapide et flexible.'
  },
  {
    title: 'Nuxt UI',
    icon: 'i-heroicons-cube',
    description: 'Composants UI magnifiques et accessibles prêts à l\'emploi.'
  },
  {
    title: 'TypeScript',
    icon: 'i-heroicons-code-bracket',
    description: 'Support TypeScript complet pour un code type-safe.'
  },
  {
    title: 'Dark Mode',
    icon: 'i-heroicons-moon',
    description: 'Mode sombre intégré avec transition fluide.'
  },
  {
    title: 'Responsive',
    icon: 'i-heroicons-device-phone-mobile',
    description: 'Design responsive qui fonctionne sur tous les appareils.'
  }
]
</script>
