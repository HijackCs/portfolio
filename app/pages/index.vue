<template>
  <div>
    <!-- Hero Section -->
    <AnimatedHero min-height="min-h-screen" variant="index">
      <!-- Glassmorphism Card -->
      <div
        class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in">
        <!-- Hero Content -->
        <div class="text-center space-y-8">
          <div class="space-y-6">
            <h1 class="title-hero text-white">
              Votre site web doit vous apporter
              <span
                class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                plus de clients, pas des complications
              </span>
            </h1>
            <div class="space-y-4">
              <p class="text-description text-gray-200 max-w-4xl mx-auto">
                J’accompagne les artisans, PME et indépendants à créer un site
                <span
                  class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">clair,
                  visible et orienté résultats</span>.
              </p>

              <div class="flex flex-col items-center gap-4">
                <!-- Spécialisation -->
                <div
                  class="flex w-fit items-center gap-4 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-300/30 rounded-2xl">
                  <div class="flex items-center gap-3">
                    <div class="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                    <span class="text-cyan-300 text-lg font-semibold">Site vitrine, SEO local et application
                      métier</span>
                  </div>
                </div>

                <!-- Disponibilité Freelance (moved under specialization) -->
                <div
                  class="flex w-fit items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-green-300 text-lg font-medium">Disponible pour artisans, PME et indépendants</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
          <NuxtLink to="/simulateur-prix"
            class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
            <span class="relative z-10 text-button text-lg">Estimer mon budget</span>

          </NuxtLink>
          <NuxtLink to="/contact"
            class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
            <span class="relative z-10 text-button text-lg">Parler de mon projet</span>
          </NuxtLink>
        </div>

      </div>
    </AnimatedHero>

    <!-- About Section -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div
          class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-slide-up">
            <div class="space-y-4">
              <h2 class="title-section text-white">
                Un accompagnement
                <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">simple et
                  orienté résultats</span>
              </h2>
              <p class="text-paragraph text-gray-300">
                Vous avez besoin d’un site qui rassure, qui se positionne localement et qui génère de vrais contacts.
                Mon approche: cadrage clair, priorités business, livraison rapide et suivi après mise en ligne.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">10+</div>
                <div class="text-small text-gray-300">Projets livrés</div>
              </div>
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">2+</div>
                <div class="text-small text-gray-300">Années d'expérience</div>
              </div>
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">5+</div>
                <div class="text-small text-gray-300">Secteurs accompagnés</div>
              </div>
              <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div class="text-3xl font-bold text-cyan-400">24/7</div>
                <div class="text-small text-gray-300">Support de proximité</div>
              </div>
            </div>

            <NuxtLink to="/about"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all group shadow-lg hover:shadow-cyan-500/25">
              En savoir plus
            </NuxtLink>
          </div>

          <div class="relative group">
            <div
              class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 relative overflow-hidden lg:aspect-square hover:bg-white/15 hover:border-cyan-300/30 transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-600/20"></div>

              <div class="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-3">Accompagnement premium</p>
                  <h3 class="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                    Une méthode simple
                    <span class="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">pour
                      obtenir des demandes qualifiées</span>
                  </h3>
                  <p class="text-sm text-gray-300 leading-relaxed">
                    Vous avez une vision claire, un interlocuteur unique et une execution rapide.
                    L'objectif: transformer votre site en vrai levier commercial.
                  </p>
                </div>

                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div
                      class="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-300/30 text-cyan-300 text-sm font-bold flex items-center justify-center">
                      1</div>
                    <p class="text-sm text-gray-200"><span class="font-semibold text-white">Appel de cadrage:</span>
                      objectifs, cibles et priorités validés en 30 min.</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-300/30 text-blue-300 text-sm font-bold flex items-center justify-center">
                      2</div>
                    <p class="text-sm text-gray-200"><span class="font-semibold text-white">Production orientée
                        résultat:</span> design, messages et CTA pensés pour convertir.</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-300/30 text-purple-300 text-sm font-bold flex items-center justify-center">
                      3</div>
                    <p class="text-sm text-gray-200"><span class="font-semibold text-white">Suivi post-lancement:</span>
                      ajustements continus pour maintenir vos performances.</p>
                  </div>
                </div>

                <div class="pt-4 border-t border-white/15 space-y-4">
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-300/30 text-xs text-emerald-200">Réponse
                      sous 24h</span>
                    <span
                      class="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-300/30 text-xs text-cyan-200">Devis
                      clair en 48h</span>
                    <span
                      class="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-300/30 text-xs text-purple-200">Interlocuteur
                      unique</span>
                  </div>
                  <NuxtLink to="/contact"
                    class="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200 font-semibold transition-colors group/link">
                    Discuter de votre projet
                    <svg class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>

              <div
                class="absolute top-5 right-5 w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70 animate-pulse group-hover:rotate-6 transition-transform duration-300">
              </div>
              <div
                class="absolute bottom-6 left-5 w-6 h-6 rounded-md bg-gradient-to-r from-purple-400 to-pink-500 opacity-60 animate-pulse group-hover:-rotate-6 transition-transform duration-300"
                style="animation-delay: 1s;"></div>
              <div
                class="absolute top-1/2 left-6 w-4 h-4 rounded-sm bg-gradient-to-r from-blue-300 to-cyan-400 opacity-50 animate-pulse"
                style="animation-delay: 2s;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div
          class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center space-y-4 mb-16">
          <h2 class="title-section text-white">
            Services <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">pensés
              pour votre activité</span>
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            L’objectif: vous rendre visible, crédible et plus simple à contacter.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in servicesList" :key="service.title"
            class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</div>
            <h3 class="title-card text-white mb-4">{{ service.title }}</h3>
            <p class="text-gray-300 mb-6 leading-relaxed">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-center text-sm text-gray-300">
                <svg class="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Ma Vision Section -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center space-y-4 mb-16">
          <h2 class="title-section text-white">
            Ce que vous <span
              class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">gagnez</span>
          </h2>
          <p class="text-paragraph text-gray-300 max-w-2xl mx-auto">
            Un cadre de travail clair pour avancer vite, sans complexité inutile.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div class="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🧭</div>
            <h3 class="title-card text-white mb-4">Clarté du projet</h3>
            <p class="text-card text-gray-300">
              Vous savez ce qu’on fait, pourquoi on le fait et dans quel ordre.
              Moins d’aller-retours, plus d’efficacité.
            </p>
          </div>

          <div
            class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div class="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📈</div>
            <h3 class="title-card text-white mb-4">Un site utile commercialement</h3>
            <p class="text-card text-gray-300">
              Structure, contenu et appels à l’action sont pensés pour transformer
              les visiteurs en prises de contact.
            </p>
          </div>

          <div
            class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div class="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
            <h3 class="title-card text-white mb-4">Un vrai partenaire dans la durée</h3>
            <p class="text-card text-gray-300">
              Je reste disponible après la mise en ligne pour ajuster, améliorer
              et faire évoluer votre site selon vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Section -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center space-y-4 mb-16">
          <h2 class="title-section text-white">
            Exemples de <span
              class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">réalisations</span>
          </h2>
          <p class="text-paragraph text-gray-300 max-w-2xl mx-auto">
            Quelques projets concrets pour montrer la méthode, la qualité et l’impact.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div v-for="project in projects" :key="project.title"
            class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ project.emoji }}</div>
            <h3 class="title-card text-white mb-4">{{ project.title }}</h3>
            <p class="text-card text-gray-300 mb-6">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-badge">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/projects"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
            Voir tous mes projets
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 space-y-8">
          <h2 class="title-section text-white">
            Prêt à <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">passer à
              l’action</span> ?
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            En 20 minutes, on clarifie votre besoin, votre budget et la meilleure première version à lancer.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink to="/contact"
              class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <span class="text-lg">Demander un échange</span>
            </NuxtLink>
            <NuxtLink to="/simulateur-prix"
              class="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 hover:border-purple-400/50 hover:shadow-purple-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <span class="text-lg">Estimer mon budget</span>
            </NuxtLink>
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
    { name: 'description', content: homeMeta.description },
    { property: 'og:title', content: homeMeta.title },
    { property: 'og:description', content: homeMeta.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: homeMeta.title },
    { name: 'twitter:description', content: homeMeta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hugoschroder.dev' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hugoschroder.dev' }
  ]
})

// Reactive data
const servicesList = ref(services)
const projects = ref(featuredProjects)
</script>
