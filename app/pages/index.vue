<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <!-- Gradient Orbs -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <!-- 3D Floating Elements -->
      <div class="absolute top-20 left-20 transform-gpu">
        <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-2xl animate-float transform rotate-12 hover:rotate-45 transition-transform duration-700"></div>
      </div>
      <div class="absolute bottom-32 right-20 transform-gpu">
        <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full shadow-2xl animate-float-reverse transform -rotate-12 hover:rotate-45 transition-transform duration-700" style="animation-delay: 1s;"></div>
      </div>
      <div class="absolute top-1/3 right-32 transform-gpu">
        <div class="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl shadow-2xl animate-float transform rotate-45 hover:rotate-90 transition-transform duration-700" style="animation-delay: 2s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <!-- Glassmorphism Card -->
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in">
          <!-- Hero Content -->
          <div class="text-center space-y-8">
            <div class="space-y-6">
              <h1 class="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight">
                Hugo
                <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Schroder
                </span>
              </h1>
              <div class="space-y-4">
                <p class="text-2xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
                  Développeur web fullstack passionné par la création d'expériences digitales 
                  <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">extraordinaires et innovantes</span>
                </p>
                
                <!-- Spécialisation -->
                <div class="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-300/30 rounded-2xl">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                    <span class="text-cyan-300 text-lg font-semibold">Développeur Quarkus & Vue.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <NuxtLink to="/projects" class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="relative z-10 text-lg">Voir mes projets</span>
              <svg class="relative z-10 w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/contact" class="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 hover:border-purple-400/50 hover:shadow-purple-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <span class="text-lg">Discutons de votre projet</span>
              <div class="ml-3 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-slide-up">
            <div class="space-y-4">
              <h2 class="text-3xl md:text-4xl font-bold text-white">
                Créons ensemble votre 
                <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">projet digital</span>
              </h2>
              <p class="text-lg text-gray-300 leading-relaxed">
                Avec plus de 2 ans d'expérience, je transforme vos idées 
                en solutions digitales performantes et sur mesure. Mon approche combine expertise 
                technique et vision créative pour créer des expériences utilisateur exceptionnelles.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">10+</div>
                <div class="text-sm text-gray-300">Projets réalisés</div>
              </div>
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">2+</div>
                <div class="text-sm text-gray-300">Années d'expérience</div>
              </div>
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">5+</div>
                <div class="text-sm text-gray-300">Technologies maîtrisées</div>
              </div>
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">24/7</div>
                <div class="text-sm text-gray-300">Support disponible</div>
              </div>
            </div>

            <NuxtLink to="/about" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all group shadow-lg hover:shadow-cyan-500/25">
              En savoir plus
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>

          <div class="relative">
            <div class="aspect-square backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 relative overflow-hidden hover:bg-white/20 transition-all duration-300">
              <!-- Animated background -->
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-50"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-6xl animate-bounce">👨‍💻</div>
              </div>
              <!-- Floating decorative elements -->
              <div class="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div class="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-40 animate-pulse" style="animation-delay: 1s;"></div>
              <div class="absolute top-1/2 left-4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30 animate-pulse" style="animation-delay: 2s;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center space-y-4 mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Mes <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">services</span>
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Des solutions complètes pour donner vie à vos projets digitaux
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in servicesList" :key="service.title" class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</div>
            <h3 class="text-xl font-bold text-white mb-4">{{ service.title }}</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center text-sm text-gray-300">
                <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-6000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center space-y-4 mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Projets <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">récents</span>
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations les plus récentes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div v-for="project in projects" :key="project.title" class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ project.emoji }}</div>
            <h3 class="text-xl font-bold text-white mb-4">{{ project.title }}</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm font-medium">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/projects" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
            Voir tous mes projets
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-8000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Prêt à <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">démarrer</span> votre projet ?
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink to="/contact" class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <span class="text-lg">Démarrer un projet</span>
              <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a 
            href="mailto:contact@hugoschroder.dev?subject=Contact%20depuis%20le%20portfolio&body=Bonjour%20Hugo,%0D%0A%0D%0AJe%20souhaiterais%20discuter%20d'un%20projet%20avec%20vous.%0D%0A%0D%0AType%20de%20projet%20:%20%0D%0ABudget%20estimé%20:%20%0D%0ADescription%20:%20%0D%0A%0D%0AMerci%20!" 
             class="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 hover:border-purple-400/50 hover:shadow-purple-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-lg">contact@hugoschroder.dev</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { services, featuredProjects, homeMeta } from '../data/home.js'

// SEO Meta
useHead({
  title: homeMeta.title,
  meta: [
    { name: 'description', content: homeMeta.description }
  ]
})

// Reactive data
const servicesList = ref(services)
const projects = ref(featuredProjects)
</script>
