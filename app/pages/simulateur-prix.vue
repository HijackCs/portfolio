<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>
      
      <!-- 3D Floating Elements -->
      <div class="absolute top-20 left-20 transform-gpu">
        <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-2xl animate-float transform rotate-12 hover:rotate-45 transition-transform duration-700"></div>
      </div>
      <div class="absolute bottom-32 right-20 transform-gpu">
        <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full shadow-2xl animate-float-reverse transform -rotate-12 hover:rotate-45 transition-transform duration-700" style="animation-delay: 1s;"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in">
          <div class="text-center space-y-6">
            <h1 class="title-hero text-white">
              Estimez le prix de votre
              <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                site web en 2 minutes !
              </span>
            </h1>
            <p class="text-description text-gray-200 max-w-4xl mx-auto">
              Obtenez une estimation gratuite et instantanée du coût de votre projet web. 
              <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">Simple, rapide et sans engagement</span>
            </p>
            
            <!-- Trust Indicators -->
            <div class="flex flex-wrap justify-center gap-6 pt-4">
              <div class="flex items-center gap-2 text-green-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">100% Gratuit</span>
              </div>
              <div class="flex items-center gap-2 text-green-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">Sans engagement</span>
              </div>
              <div class="flex items-center gap-2 text-green-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium">Réponse immédiate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Simulator Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div class="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <!-- Simulator Card -->
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div class="space-y-8">
            <!-- Tally Embed -->
            <div class="w-full" style="min-height: fit-content;">
              <iframe data-tally-src="https://tally.so/embed/2EE2lj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" loading="lazy" width="100%" height="146" frameborder="0" marginheight="0" marginwidth="0" title="Simulateur de prix : votre site web en 60 secondes"></iframe>
            </div>
          </div>
        </div>

        <!-- Benefits Section -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 class="title-card text-white mb-3">Estimation instantanée</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Recevez une fourchette de prix détaillée en quelques clics, adaptée à vos besoins spécifiques.
            </p>
          </div>

          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 class="title-card text-white mb-3">Prix transparents</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Des tarifs clairs et justifiés, sans frais cachés. Vous savez exactement ce que vous payez.
            </p>
          </div>

          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 class="title-card text-white mb-3">Solution sur-mesure</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Chaque projet est unique. L'estimation s'adapte à vos fonctionnalités et objectifs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-4 mb-12">
          <h2 class="title-section text-white">
            Questions <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">fréquentes</span>
          </h2>
          <p class="text-paragraph text-gray-300 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur le coût de création d'un site web
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="faq in faqs" 
            :key="faq.question"
            class="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500"
          >
            <h3 class="title-card text-white mb-3 group-hover:text-cyan-300 transition-colors">
              {{ faq.question }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Info Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-4 mb-12">
          <h2 class="title-section text-white">
            Comprendre le <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">coût d'un site web</span>
          </h2>
          <p class="text-paragraph text-gray-300 max-w-3xl mx-auto">
            Le prix d'un site web varie selon plusieurs critères essentiels
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="factor in pricingFactors" 
            :key="factor.title"
            class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group"
          >
            <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ factor.icon }}</div>
            <h3 class="text-lg font-bold text-white mb-2">{{ factor.title }}</h3>
            <p class="text-gray-300 text-sm leading-relaxed">{{ factor.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 space-y-8">
          <h2 class="title-section text-white">
            Prêt à <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">concrétiser</span> votre projet ?
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Après votre estimation, discutons ensemble de votre projet pour affiner les détails et démarrer rapidement
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink to="/contact" class="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <span class="text-lg">Discuter de mon projet</span>
              <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/projects" class="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-cyan-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <span class="text-lg">Voir mes réalisations</span>
              <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta - Optimisé pour les recherches de prix de site web
useHead({
  title: 'Simulateur de Prix Site Web 2024 | Estimation Gratuite en 60 Secondes',
  meta: [
    { 
      name: 'description', 
      content: 'Estimez gratuitement le prix de votre site web en 60 secondes. Simulateur de coût pour site vitrine, e-commerce, application web. Tarifs transparents et devis instantané sans engagement.' 
    },
    { 
      name: 'keywords', 
      content: 'prix site web, coût site internet, tarif création site, estimation site web, devis site internet, combien coûte un site web, prix développement web, simulateur prix site, coût site vitrine, prix site e-commerce, tarif développeur web, budget site internet, prix création site web, estimation gratuite site, calculateur prix site web, coût application web, prix site sur mesure, tarif site responsive, développeur freelance prix, nuxt.js prix, vue.js tarif' 
    },
    { name: 'author', content: 'Hugo Schroder' },
    
    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Simulateur de Prix Site Web | Estimation Gratuite et Instantanée' },
    { property: 'og:description', content: 'Obtenez une estimation précise du coût de votre site web en quelques clics. Gratuit, sans engagement, réponse immédiate.' },
    { property: 'og:url', content: 'https://hugoschroder.dev/simulateur-prix' },
    { property: 'og:site_name', content: 'Hugo Schroder - Développeur Web' },
    { property: 'og:image', content: 'https://hugoschroder.dev/og-image-simulator.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Simulateur de prix pour site web - Estimation gratuite' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Simulateur de Prix Site Web | Estimation Gratuite' },
    { name: 'twitter:description', content: 'Estimez le coût de votre site web en 60 secondes. Gratuit et sans engagement.' },
    { name: 'twitter:image', content: 'https://hugoschroder.dev/og-image-simulator.png' },
    
    // Additional SEO
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'language', content: 'fr-FR' },
    { name: 'geo.region', content: 'FR' },
    { name: 'geo.placename', content: 'France' },
    
    // Schema.org structured data
    { 
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Simulateur de Prix Site Web',
        'description': 'Estimez gratuitement le prix de votre site web en 60 secondes. Simulateur de coût instantané et sans engagement.',
        'url': 'https://hugoschroder.dev/simulateur-prix',
        'applicationCategory': 'BusinessApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'EUR',
          'description': 'Estimation gratuite'
        },
        'author': {
          '@type': 'Person',
          'name': 'Hugo Schroder',
          'jobTitle': 'Développeur Web Full-Stack',
          'url': 'https://hugoschroder.dev'
        },
        'provider': {
          '@type': 'Person',
          'name': 'Hugo Schroder',
          'url': 'https://hugoschroder.dev'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Quels sont les facteurs qui influencent le prix d\'un site web ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Les principaux facteurs sont : le type de site (vitrine, e-commerce, application), le nombre de pages, les fonctionnalités spécifiques, le design sur-mesure, l\'optimisation SEO, la maintenance, et les technologies utilisées.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Le simulateur de prix est-il vraiment gratuit ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, le simulateur est 100% gratuit et sans engagement. Vous obtenez une estimation instantanée sans avoir à fournir vos coordonnées bancaires.'
            }
          }
        ]
      })
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://hugoschroder.dev/simulateur-prix' }
  ],
  script: [
    {
      src: 'https://tally.so/widgets/embed.js',
      async: true,
      defer: true
    }
  ]
})

// Load Tally script on mount
onMounted(() => {
  // Ensure Tally embeds are loaded
  if (typeof window !== 'undefined') {
    const checkTally = setInterval(() => {
      if (window.Tally) {
        window.Tally.loadEmbeds()
        clearInterval(checkTally)
      }
    }, 100)
    
    setTimeout(() => clearInterval(checkTally), 5000)
  }
})

const faqs = ref([
  {
    question: 'Quels sont les facteurs qui influencent le prix ?',
    answer: 'Les principaux facteurs sont : le type de site (vitrine, e-commerce, application), le nombre de pages, les fonctionnalités spécifiques (paiement en ligne, espace membre, etc.), le design sur-mesure, l\'optimisation SEO, et les technologies utilisées.'
  },
  {
    question: 'Le simulateur est-il vraiment gratuit ?',
    answer: 'Oui, le simulateur est 100% gratuit et sans engagement. Vous obtenez une estimation instantanée de votre projet sans avoir à fournir vos coordonnées bancaires. C\'est un outil pour vous aider à budgétiser votre projet.'
  },
  {
    question: 'Qu\'est-ce qui est inclus dans le prix ?',
    answer: 'Le prix inclut : la conception et le design, le développement, l\'intégration du contenu, l\'optimisation SEO de base, les tests, la mise en ligne, et la formation. La maintenance et l\'hébergement sont facturés séparément.'
  },
  {
    question: 'Puis-je obtenir un devis personnalisé ?',
    answer: 'Absolument ! Après avoir utilisé le simulateur, vous pouvez me contacter directement pour discuter de votre projet en détail et obtenir un devis personnalisé et précis adapté à vos besoins spécifiques.'
  }
])

// Pricing Factors
const pricingFactors = ref([
  {
    icon: '🎨',
    title: 'Design',
    description: 'Template ou design sur-mesure, nombre de maquettes, animations et interactions personnalisées.'
  },
  {
    icon: '⚙️',
    title: 'Fonctionnalités',
    description: 'Formulaires, paiement en ligne, espace membre, API tierces, fonctionnalités métier spécifiques.'
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Adaptation mobile, tablette et desktop. Optimisation pour tous les appareils et navigateurs.'
  },
  {
    icon: '🚀',
    title: 'Performance',
    description: 'Optimisation SEO, vitesse de chargement, accessibilité, sécurité et hébergement performant.'
  },
  {
    icon: '📄',
    title: 'Contenu',
    description: 'Nombre de pages, rédaction, traduction multilingue, intégration de médias et optimisation.'
  },
  {
    icon: '🔧',
    title: 'Maintenance',
    description: 'Mises à jour, corrections de bugs, support technique, sauvegardes et monitoring.'
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Catalogue produits, gestion des stocks, paiement sécurisé, livraison et gestion des commandes.'
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Suivi des performances, statistiques détaillées, tableaux de bord et rapports personnalisés.'
  }
])
</script>

<style scoped>
:deep(iframe) {
  border-radius: 1rem;
}
</style>
