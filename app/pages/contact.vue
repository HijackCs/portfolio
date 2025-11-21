<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <!-- 3D Floating Elements -->
      <div class="absolute top-20 left-20 transform-gpu">
        <div class="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl animate-float transform rotate-45 hover:rotate-90 transition-transform duration-700"></div>
      </div>
      <div class="absolute bottom-32 right-20 transform-gpu">
        <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl shadow-2xl animate-float-reverse transform -rotate-12 hover:rotate-45 transition-transform duration-700" style="animation-delay: 1.5s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in">
          <div class="text-center space-y-6">
            <h1 class="title-hero text-white">
              Vous avez une idée de
              <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                projet ?
              </span>
            </h1>
            <p class="text-description text-gray-200 max-w-4xl mx-auto">
              Discutons-en ensemble. Je peux vous aider à transformer votre idée en
              <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">produit concret, performant et bien conçu</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-12">
          
          <!-- Main Contact Info -->
          <div class="space-y-8">
            <h2 class="title-section text-white">
              Transformons votre <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">vision en réalité</span>
            </h2>
            <p class="text-paragraph text-gray-300 max-w-3xl mx-auto">
              Startup, PME ou entrepreneur : je vous accompagne dans la création de solutions digitales 
              innovantes, performantes et adaptées à vos besoins. Parlons de votre projet dès aujourd'hui.
            </p>
          </div>

          <!-- Contact Methods Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500 group">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="title-card text-white mb-3 group-hover:text-cyan-300 transition-colors text-center">Email</h3>
              <p class="text-card text-gray-300 text-center">{{ contact.contact.email }}</p>
            </div>

            <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500 group">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="title-card text-white mb-3 group-hover:text-cyan-300 transition-colors text-center">Temps de réponse</h3>
              <p class="text-card text-gray-300 text-center">Sous 24h</p>
            </div>

            <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500 group">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="title-card text-white mb-3 group-hover:text-cyan-300 transition-colors text-center">Zone d'intervention</h3>
              <p class="text-card text-gray-300 text-center">France & Remote</p>
            </div>
          </div>

          <!-- Main CTA -->
          <div class="max-w-2xl mx-auto">
            <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl animate-fade-in">
              <div class="text-center space-y-8">
                <div class="space-y-4">
                  <h3 class="title-subsection text-white">
                    Créons quelque chose d'exceptionnel ensemble
                  </h3>
                  <p class="text-paragraph text-gray-300">
                    Une idée, un besoin, un projet ? Contactez-moi directement pour en discuter.
                    <br>
                    <span class="text-cyan-300 font-medium">Réponse sous 24h garantie !</span>
                  </p>
                </div>
                
                <a 
                  href="mailto:contact@hugoschroder.dev?subject=Contact%20depuis%20le%20portfolio&body=Bonjour%20Hugo,%0D%0A%0D%0AJe%20souhaiterais%20discuter%20d'un%20projet%20avec%20vous.%0D%0A%0D%0AType%20de%20projet%20:%20%0D%0ABudget%20estimé%20:%20%0D%0ADescription%20:%20%0D%0A%0D%0AMerci%20!" 
                  class="group inline-flex items-center gap-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <svg class="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="text-button">Envoyer un email</span>
                  <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="space-y-6">
            <h3 class="title-subsection text-white text-center">Retrouvez-moi aussi sur</h3>
            <div class="flex justify-center space-x-6">
              <a 
                v-for="social in socials" 
                :key="social.name"
                :href="social.url" 
                class="group w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg v-if="social.name === 'LinkedIn'" class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <svg v-else-if="social.name === 'GitHub'" class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <svg v-else-if="social.name === 'Twitter'" class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <svg v-else-if="social.name === 'Instagram'" class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <svg v-else-if="social.name === 'Email'" class="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-6 mb-16">
          <h2 class="title-section text-white">
            Questions <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">fréquentes</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="faq in faqs" 
            :key="faq.question"
            class="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500"
          >
            <h3 class="title-card text-white mb-3 group-hover:text-cyan-300 transition-colors">
              {{ faq.question }}
            </h3>
            <p class="text-gray-300 leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { contactData, socialLinks, faqItems, contactMeta } from '../data/contact.js'

const contact = contactData
const socials = socialLinks
const faqs = faqItems

useHead({
  title: contactMeta.title,
  meta: [
    {
      name: 'description',
      content: contactMeta.description
    }
  ]
})
</script>
