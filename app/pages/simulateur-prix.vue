<template>
  <div>
    <!-- Hero Section -->
    <AnimatedHero min-height="min-h-[60vh]">
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
    </AnimatedHero>

    <!-- Simulator Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div class="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <!-- Intro -->
        <div class="text-center space-y-6 mb-12">
          <p class="text-paragraph text-gray-300 leading-relaxed">
            Vous cherchez à estimer le prix d’un site vitrine, d’un e-commerce ou d’une application web ?
            Ce simulateur vous aide à obtenir une fourchette réaliste selon vos objectifs, vos fonctionnalités et votre
            niveau d’accompagnement. Je travaille avec des entreprises locales et des indépendants qui souhaitent un site
            rapide, clair et optimisé pour le SEO local (Lens, Lille, Hauts-de-France). En quelques minutes, vous obtenez
            un budget indicatif pour cadrer votre projet et préparer un échange concret.
          </p>
          <p class="text-paragraph text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Le prix d’un site dépend fortement du type de projet. Découvrez par exemple le
            <NuxtLink to="/prix-site-vitrine" class="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40">prix d’un site vitrine</NuxtLink>,
            le
            <NuxtLink to="/prix-site-ecommerce" class="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40">budget d’un site e-commerce</NuxtLink>,
            ou encore le
            <NuxtLink to="/prix-application-web" class="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40">coût d’une application web</NuxtLink>.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl shadow-xl hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Demander un audit gratuit
          </NuxtLink>
        </div>

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

    <!-- Pricing Ranges Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-4 mb-12">
          <h2 class="title-section text-white">
            Fourchettes de <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">prix indicatives</span>
          </h2>
          <p class="text-paragraph text-gray-300 max-w-3xl mx-auto">
            Ces montants sont indicatifs et varient selon la complexité, le volume de contenu et les délais. L’objectif :
            vous donner un ordre de grandeur clair avant un devis détaillé.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 class="title-card text-white mb-2">Site vitrine</h3>
            <p class="text-cyan-300 font-semibold mb-3">≈ 900€ – 2 500€</p>
            <p class="text-gray-300 text-sm leading-relaxed">
              Idéal pour présenter votre activité, vos services et générer des contacts. Comprend un design personnalisé,
              un contenu clair et une base SEO locale.
            </p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 class="title-card text-white mb-2">E-commerce</h3>
            <p class="text-cyan-300 font-semibold mb-3">≈ 3 000€ – 8 000€</p>
            <p class="text-gray-300 text-sm leading-relaxed">
              Catalogue, paiement en ligne, gestion des commandes et optimisation conversion. Adapté aux boutiques locales
              et marques qui veulent vendre efficacement.
            </p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 class="title-card text-white mb-2">Application web</h3>
            <p class="text-cyan-300 font-semibold mb-3">≈ 6 000€ – 15 000€+</p>
            <p class="text-gray-300 text-sm leading-relaxed">
              Plateforme sur-mesure avec logique métier, espace membre ou back-office. Conçue pour automatiser
              et faire gagner du temps à votre équipe.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Reading -->
    <section class="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
          <div class="text-center space-y-4 mb-8">
            <h2 class="title-section text-white">
              À lire aussi pour <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">affiner votre budget</span>
            </h2>
            <p class="text-paragraph text-gray-300 max-w-3xl mx-auto">
              Ces pages satellites détaillent les cas concrets et les facteurs de prix selon votre type de projet.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink
              v-for="link in pricingSatelliteLinks"
              :key="link.to"
              :to="link.to"
              class="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-200 hover:text-cyan-200 hover:border-cyan-400/40 hover:bg-white/10 transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
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

    <!-- FAQ Section -->
    <section class="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <FaqAccordion
        :items="faqs"
        title="Questions <span class='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>fréquentes</span>"
        description="Réponses concrètes sur les coûts, les délais et la manière dont je construis des sites performants."
      />
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
            <NuxtLink to="/developpeur-web-freelance-lens" class="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 hover:border-cyan-400/50 hover:shadow-cyan-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <span class="text-lg">Développeur web à Lens</span>
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
const faqs = ref([
  {
    question: 'Combien coûte un site vitrine ?',
    answer: 'Un site vitrine se situe souvent entre 900€ et 2 500€ selon le nombre de pages, le design et l\'optimisation SEO locale attendue.'
  },
  {
    question: 'Quel budget prévoir pour un e-commerce ?',
    answer: 'Un e-commerce démarre en général autour de 3 000€ et peut monter selon le catalogue, les moyens de paiement, la logistique et les fonctionnalités marketing.'
  },
  {
    question: 'Quels facteurs font varier le prix ?',
    answer: 'Le type de site, le nombre de pages, les fonctionnalités spécifiques (paiement, espace membre, automatisations), le niveau de design et l\'optimisation SEO sont déterminants.'
  },
  {
    question: 'Le simulateur est-il vraiment gratuit ?',
    answer: 'Oui, il est 100% gratuit et sans engagement. Il vous permet d\'obtenir un budget indicatif pour cadrer votre projet.'
  },
  {
    question: 'Où trouver le détail par type de projet ?',
    answerHtml: 'Consultez les guides dédiés : <a href=\"/prix-site-vitrine\" class=\"text-cyan-300 underline decoration-cyan-500/40\">prix site vitrine</a>, <a href=\"/prix-site-ecommerce\" class=\"text-cyan-300 underline decoration-cyan-500/40\">prix site e-commerce</a> et <a href=\"/prix-application-web\" class=\"text-cyan-300 underline decoration-cyan-500/40\">prix application web</a>.' 
  },
  {
    question: 'Qu\'est-ce qui est inclus dans une estimation ?',
    answer: 'La fourchette inclut la conception, le développement, l\'intégration de contenu, l\'optimisation SEO de base et la mise en ligne. Hébergement et maintenance sont généralement séparés.'
  },
  {
    question: 'Un design sur-mesure coûte-t-il plus cher ?',
    answer: 'Oui, un design personnalisé demande plus de conception et de validation, mais améliore la différenciation et la conversion.'
  },
  {
    question: 'Combien de temps faut-il pour créer un site ?',
    answer: 'Un site vitrine simple peut être prêt en 2 à 4 semaines. Un e-commerce ou une app web nécessitent souvent 6 à 12 semaines selon le périmètre.'
  },
  {
    question: 'Proposez-vous un accompagnement SEO local ?',
    answer: 'Oui, je travaille l\'optimisation locale (Lens, Lille, Hauts-de-France) via la structure des pages, les contenus et les bonnes balises.'
  },
  {
    question: 'Puis-je obtenir un devis personnalisé ?',
    answer: 'Oui. Une fois l\'estimation obtenue, on échange sur votre besoin pour établir un devis clair et adapté.'
  },
  {
    question: 'Puis-je faire évoluer mon site plus tard ?',
    answer: 'Bien sûr. Je conçois des sites évolutifs pour ajouter des pages, des fonctionnalités ou des optimisations au fil du temps.'
  }
])

const pricingSatelliteLinks = [
  { to: '/prix-site-internet', label: 'Prix d’un site internet : guide complet' },
  { to: '/prix-site-vitrine', label: 'Prix d’un site vitrine' },
  { to: '/prix-site-ecommerce', label: 'Prix d’un site e-commerce' },
  { to: '/prix-application-web', label: 'Prix d’une application web' },
  { to: '/combien-coute-un-site-internet', label: 'Combien coûte un site internet ?' }
]

// SEO Meta - Optimisé pour les recherches de prix de site web
useHead({
  title: 'Simulateur de Prix Site Web | Estimation Gratuite en 60 Secondes',
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
    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Simulateur de Prix Site Web | Estimation Gratuite' },
    { name: 'twitter:description', content: 'Estimez le coût de votre site web en 60 secondes. Gratuit et sans engagement.' },
    
    // Additional SEO
    { name: 'robots', content: 'index, follow, max-image-preview:none' },
    { name: 'googlebot', content: 'index, follow, max-image-preview:none' },
    { name: 'language', content: 'fr-FR' },
    { name: 'geo.region', content: 'FR' },
    { name: 'geo.placename', content: 'France' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hugoschroder.dev/simulateur-prix' }
  ],
  script: [
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
      children: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.value.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }))
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://hugoschroder.dev' },
          { '@type': 'ListItem', position: 2, name: 'Simulateur de prix', item: 'https://hugoschroder.dev/simulateur-prix' }
        ]
      })
    },
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
