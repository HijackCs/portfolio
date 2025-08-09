<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <!-- Gradient Orbs -->
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-rose-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div class="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-400/20 to-red-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <!-- 3D Floating Elements -->
      <div class="absolute top-20 right-20 transform-gpu">
        <div class="w-20 h-20 bg-gradient-to-br from-red-400 to-rose-600 rounded-2xl shadow-2xl animate-float transform rotate-12 hover:rotate-45 transition-transform duration-700"></div>
      </div>
      <div class="absolute bottom-32 left-20 transform-gpu">
        <div class="w-16 h-16 bg-gradient-to-br from-rose-400 to-red-600 rounded-full shadow-2xl animate-float-reverse transform -rotate-12 hover:rotate-45 transition-transform duration-700" style="animation-delay: 1s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <!-- Glassmorphism Card -->
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in">
          <div class="text-center space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-sm border border-red-300/30 rounded-full">
              <span class="text-red-300 text-lg font-medium">👨‍💻 À propos de moi</span>
            </div>
            <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight">
              {{ profileData.name }}
              <span class="block bg-gradient-to-r from-red-400 via-rose-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                {{ profileData.title }}
              </span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
              {{ profileData.bio.short }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-rose-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Text Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <h2 class="text-4xl md:text-5xl font-bold text-white">
                Mon <span class="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">parcours</span>
              </h2>
              <div class="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                {{ profileData.bio.long }}
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-8">
              <div class="text-center p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div class="text-3xl font-bold text-red-400">{{ profileData.stats.projects }}+</div>
                <div class="text-gray-300 text-sm">Projets réalisés</div>
              </div>
              <div class="text-center p-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div class="text-3xl font-bold text-rose-400">{{ profileData.stats.experience }}+</div>
                <div class="text-gray-300 text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>

          <!-- Image/Visual -->
          <div class="relative">
            <div class="backdrop-blur-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div class="space-y-6">
                <div class="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-br from-emerald-400 to-cyan-600">
                  <img src="~/assets/images/selfie.jpg" alt="Hugo Schroder" class="w-full h-full object-cover">
                </div>
                <div class="text-center space-y-2">
                  <h3 class="text-2xl font-bold text-white">Hugo Schroder</h3>
                  <p class="text-emerald-300">Développeur Web Full-Stack</p>
                  <div class="flex justify-center space-x-4 pt-4">
                    <div class="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-rose-400 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
                    <div class="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-400/20 to-red-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-6 mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white">
            Mes <span class="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">compétences</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions web modernes et performantes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
            <div class="space-y-6">
              <div class="w-16 h-16 bg-gradient-to-br from-rose-400 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-rose-500/25 transition-shadow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Frontend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm">Vue.js</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Nuxt.js</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Quasar</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Tailwind</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Bootstrap</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">JavaScript</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-rose-400/50 transition-all duration-300 hover:scale-105">
            <div class="space-y-6">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-shadow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Backend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm">NestJS</span>
                  <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-sm">Node.js</span>
                  <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-sm">Symfony</span>
                  <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-sm">Twig</span>
                  <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-sm">Java</span>
                  <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-sm">Quarkus</span>
                  <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:border-violet-400/50 transition-all duration-300 hover:scale-105">
            <div class="space-y-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-shadow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">Outils</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Git</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Docker</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Figma</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Notion</span>
                  <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm">Office 365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recherche Section -->
    <section class="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
            🎯 Recherche Active
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Ouvert aux opportunités qui me permettront de contribuer à des projets innovants
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Freelance -->
          <div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white">Missions Freelance</h3>
              </div>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Projets courts à moyens termes
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Applications web & mobile
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Développement full-stack
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Télétravail ou hybride
                </li>
              </ul>
            </div>
          </div>

          <!-- CDI -->
          <div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white">Poste CDI</h3>
              </div>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Équipe dynamique & collaborative
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Stack technique moderne
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Projets à fort impact
                </li>
                <li class="flex items-center">
                  <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Télétravail partiel/total
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Disponibilité -->
        <div class="text-center mt-12">
          <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full">
            <div class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span class="text-green-300 font-semibold">Disponible dès septembre 2025</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-red-400/20 to-rose-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div class="space-y-8 text-white">
            <h2 class="text-4xl md:text-5xl font-bold">
              Travaillons ensemble !
            </h2>
            <p class="text-xl opacity-90 max-w-3xl mx-auto">
              Vous avez un projet en tête ? Discutons de vos besoins et créons quelque chose d'extraordinaire ensemble.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <NuxtLink to="/contact" class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span class="relative z-10 text-lg">Démarrer un projet</span>
                <svg class="relative z-10 w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/projects" class="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 hover:border-red-400/50 hover:shadow-red-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <span class="text-lg">Voir mes projets</span>
                <div class="ml-3 w-2 h-2 bg-gradient-to-r from-red-400 to-rose-500 rounded-full animate-pulse"></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { profile } from '../data/profile.js'

// Reactive data
const profileData = ref(profile)

// SEO Meta tags
useHead({
  title: `À propos - ${profile.name} | ${profile.title}`,
  meta: [
    {
      name: 'description',
      content: profile.bio.short
    },
    {
      property: 'og:title',
      content: `À propos - ${profile.name} | ${profile.title}`
    },
    {
      property: 'og:description',
      content: profile.bio.short
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>
