<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-green-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <!-- 3D Floating Elements -->
      <div class="absolute top-20 left-20 transform-gpu">
        <div class="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-3xl shadow-2xl animate-float transform rotate-45 hover:rotate-90 transition-transform duration-700"></div>
      </div>
      <div class="absolute bottom-32 right-20 transform-gpu">
        <div class="w-20 h-20 bg-gradient-to-br from-teal-400 to-green-600 rounded-2xl shadow-2xl animate-float-reverse transform -rotate-12 hover:rotate-45 transition-transform duration-700" style="animation-delay: 1.5s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in">
          <div class="text-center space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-300/30 rounded-full">
              <span class="text-emerald-300 text-lg font-medium">🚀 Portfolio</span>
            </div>
            <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight">
              Mes
              <span class="block bg-gradient-to-r from-emerald-400 via-teal-500 to-green-600 bg-clip-text text-transparent animate-pulse">
                réalisations
              </span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
              Découvrez une sélection de mes projets les plus 
              <span class="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-semibold">remarquables</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105',
              selectedCategory === category 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:border-emerald-400/50 hover:text-emerald-300'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105"
          >
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">{{ project.category }}</span>
                  <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">{{ project.status }}</span>
                </div>
                <div class="mt-2 text-sm text-white/80">
                  {{ project.year }} • {{ project.duration }}
                </div>
              </div>
            </div>
            
            <div class="p-8 space-y-6">
              <div class="space-y-4">
                <h4 class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {{ project.title }}
                </h4>
                <p class="text-gray-300 leading-relaxed">
                  {{ project.description }}
                </p>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies.slice(0, 4)" 
                  :key="tech"
                  class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-400/30"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 4" class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-sm border border-gray-400/30">
                  +{{ project.technologies.length - 4 }}
                </span>
              </div>
              
              <div class="flex gap-4 pt-4">
                <a 
                  v-if="project.links.demo" 
                  :href="project.links.demo" 
                  target="_blank"
                  class="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Voir le projet
                </a>
                <a 
                  v-if="project.links.github" 
                  :href="project.links.github" 
                  target="_blank"
                  class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 flex items-center justify-center"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- GitHub CTA Section -->
      <div class="py-16 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <div class="space-y-6 text-white">
            <div class="flex items-center justify-center mb-4">
              <svg class="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold">
              Découvrez tous mes projets
            </h3>
            <p class="text-lg opacity-80 max-w-2xl mx-auto">
              Explorez l'ensemble de mes réalisations et expérimentations sur GitHub.
            </p>
            <div class="pt-4">
              <a 
                href="https://github.com/hijackcs" 
                target="_blank" 
                rel="noopener noreferrer"
                class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-2xl shadow-xl hover:from-gray-600 hover:to-gray-700 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-gray-600/50 hover:border-gray-500"
              >
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span class="text-lg">Voir plus sur GitHub</span>
                <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-800 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute bottom-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div class="space-y-8 text-white">
            <h2 class="text-4xl md:text-5xl font-bold">
              Prêt à créer votre projet ?
            </h2>
            <p class="text-xl opacity-90 max-w-3xl mx-auto">
              Transformons ensemble votre vision en réalité digitale exceptionnelle.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <NuxtLink to="/contact" class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="relative z-10 text-lg">Discutons de votre projet</span>
                <svg class="relative z-10 w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/blog" class="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 hover:border-emerald-400/50 hover:shadow-emerald-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <span class="text-lg">Voir le blog</span>
                <div class="ml-3 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse"></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects, projectCategories } from '../data/projects.js'

// Reactive data
const projectsList = ref(projects)
const categories = ref(projectCategories)
const selectedCategory = ref('Tous')

// Computed filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return projectsList.value
  }
  return projectsList.value.filter(project => project.category === selectedCategory.value)
})

// SEO Meta tags
useHead({
  title: 'Portfolio - Hugo Schroder | Développeur Web Full-Stack',
  meta: [
    {
      name: 'description',
      content: 'Découvrez mes projets de développement web : applications Vue.js, React, Node.js, e-commerce et solutions sur mesure.'
    }
  ]
})
</script>
