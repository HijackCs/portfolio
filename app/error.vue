<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
    <div class="max-w-2xl text-center space-y-6">
      <p class="text-cyan-300 text-sm font-semibold uppercase tracking-widest">Erreur {{ error?.statusCode || 404 }}</p>
      <h1 class="text-4xl md:text-5xl font-bold text-white">Page introuvable</h1>
      <p class="text-gray-300">
        La page demandée n’existe pas ou a été déplacée. Vous pouvez revenir à l’accueil ou explorer mes projets.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
          Retour à l’accueil
        </NuxtLink>
        <NuxtLink to="/projects" class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all">
          Voir les projets
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: null
  }
})

useHead({
  title: '404 - Page introuvable | Hugo Schroder',
  meta: [
    { name: 'robots', content: 'noindex, follow' }
  ]
})
</script>
