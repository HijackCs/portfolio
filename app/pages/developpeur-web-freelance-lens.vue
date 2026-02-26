<template>
  <div>
    <!-- Hero -->
    <AnimatedHero min-height="min-h-[66vh]" container-class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8 md:py-12 relative z-10">
      <GlassPanel class="text-center space-y-8 animate-fade-in">
        <h1 class="title-hero text-white">
          Développeur web freelance à Lens pour
          <span class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            artisans, PME et indépendants
          </span>
        </h1>
        <p class="text-description text-gray-200 max-w-3xl mx-auto">
          Je crée des sites vitrines, applications web et outils sur-mesure qui vous aident à être visible localement,
          inspirer confiance et générer plus de demandes. Basé dans les Hauts-de-France, j'accompagne aussi des clients partout en France en remote.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/simulateur-prix" class="inline-flex w-full sm:w-auto items-center justify-center text-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
            Estimer mon budget
          </NuxtLink>
          <NuxtLink to="/contact" class="inline-flex w-full sm:w-auto items-center justify-center text-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all">
            Échanger sur mon projet
          </NuxtLink>
        </div>
      </GlassPanel>
    </AnimatedHero>

    <!-- Services -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-4 mb-12">
          <h2 class="title-section text-white">
            Services web à <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Lens</span>
          </h2>
          <p class="text-paragraph text-gray-300 max-w-3xl mx-auto">
            Des solutions adaptées aux indépendants, PME et structures locales qui veulent plus de visibilité et plus de prises de contact.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 class="title-card text-white mb-3">Site vitrine qui convertit</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Un site rapide, clair et rassurant pour présenter votre offre, vos preuves et faciliter la prise de contact.
            </p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 class="title-card text-white mb-3">Application web utile au quotidien</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Outils internes, espaces clients et automatisations pour gagner du temps et fluidifier vos opérations.
            </p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 class="title-card text-white mb-3">SEO local & performance</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Optimisation technique et contenu pour mieux ressortir sur Google à Lens et dans les villes autour.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-4 mb-12">
          <h2 class="title-section text-white">
            Une méthode <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">claire pour avancer vite</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <p class="text-cyan-300 text-sm font-semibold mb-2">01. Cadrage</p>
            <p class="text-gray-300 text-sm">Objectifs, cible, message et périmètre du projet.</p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <p class="text-cyan-300 text-sm font-semibold mb-2">02. Design & UX</p>
            <p class="text-gray-300 text-sm">Wireframes et maquettes adaptés à votre identité.</p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <p class="text-cyan-300 text-sm font-semibold mb-2">03. Développement</p>
            <p class="text-gray-300 text-sm">Code propre, performant et SEO-friendly.</p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <p class="text-cyan-300 text-sm font-semibold mb-2">04. Livraison</p>
            <p class="text-gray-300 text-sm">Mise en ligne, suivi et évolutions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-4 mb-12">
          <h2 class="title-section text-white">
            Budget <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">indicatif</span>
          </h2>
          <p class="text-paragraph text-gray-300">
            Chaque projet est différent. Ces fourchettes donnent un ordre de grandeur avant devis.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 class="title-card text-white mb-2">Vitrine locale</h3>
            <p class="text-cyan-300 font-semibold mb-3">≈ 900€ – 2 500€</p>
            <p class="text-gray-300 text-sm">Idéal pour artisans, professions libérales et TPE.</p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 class="title-card text-white mb-2">E-commerce</h3>
            <p class="text-cyan-300 font-semibold mb-3">≈ 3 000€ – 8 000€</p>
            <p class="text-gray-300 text-sm">Boutique en ligne avec paiement et gestion des produits.</p>
          </div>
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 class="title-card text-white mb-2">Application sur-mesure</h3>
            <p class="text-cyan-300 font-semibold mb-3">sur devis uniquement</p>
            <p class="text-gray-300 text-sm">Back-office, automatisations ou outils métier.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Zone d'intervention -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
        <h2 class="title-section text-white">
          Zone d’intervention
        </h2>
        <p class="text-paragraph text-gray-300">
          Lens, Lille, Arras et l’ensemble des Hauts-de-France. Et si besoin, accompagnement à distance partout en France.
        </p>
        <div>
          <NuxtLink to="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all">
            Discuter de votre projet
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <FaqAccordion
        :items="faqs"
        title="FAQ <span class='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>freelance à Lens</span>"
        description="Questions fréquentes sur mes services de développement web local."
      />
    </section>
  </div>
</template>

<script setup>
const faqs = [
  {
    question: 'Travaillez-vous uniquement à Lens ?',
    answer: 'Je travaille principalement dans la région des Hauts-de-France, mais j’accompagne aussi des clients partout en France.'
  },
  {
    question: 'Pouvez-vous optimiser un site existant ?',
    answer: 'Oui, j’optimise la performance, l’accessibilité et le SEO local sans casser le design.'
  },
  {
    question: 'Quel est le délai moyen pour un site vitrine ?',
    answer: 'En général 2 à 4 semaines selon le contenu, le design et les validations.'
  },
  {
    question: 'Proposez-vous un audit SEO local ?',
    answer: 'Oui, je peux analyser votre visibilité locale et proposer un plan d’amélioration.'
  }
]

useHead({
  title: 'Développeur Web Freelance à Lens | Site vitrine, SEO local et application web',
  meta: [
    { name: 'description', content: 'Freelance web à Lens pour artisans, PME et indépendants : site vitrine, SEO local et application web sur-mesure. Hauts-de-France et remote partout en France.' },
    
    //Open Graph
    { property: 'og:title', content: 'Développeur Web Freelance à Lens | Site vitrine, SEO local et application web' },
    { property: 'og:description', content: 'Freelance web à Lens : j’aide artisans, PME et indépendants à obtenir un site utile et visible localement.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hugoschroder.dev/developpeur-web-freelance-lens' },
    
    //Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Développeur Web Freelance à Lens | Site vitrine, SEO local et application web' },
    { name: 'twitter:description', content: 'Freelance web à Lens : site vitrine, SEO local et application web pour TPE/PME.' },

    //additional SEO
    { name: 'robots', content: 'index, follow, max-image-preview:none' },
    { name: 'googlebot', content: 'index, follow, max-image-preview:none' },
    { name: 'language', content: 'fr-FR' },
    { name: 'geo.region', content: 'FR' },
    { name: 'geo.placename', content: 'France' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hugoschroder.dev/developpeur-web-freelance-lens' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Hugo Schroder',
        url: 'https://hugoschroder.dev',
        image: 'https://hugoschroder.dev/og-image.png',
        description: 'Développeur web freelance à Lens. Création de sites vitrines, applications web et SEO local.',
        areaServed: ['Lens', 'Lille', 'Arras', 'Hauts-de-France'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lens',
          addressRegion: 'Hauts-de-France',
          addressCountry: 'FR'
        },
        sameAs: [
          'https://www.linkedin.com/in/hugo-schroder/',
          'https://github.com/hijackcs',
          'https://twitter.com/hijack_dev'
        ],
        makesOffer: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création de site vitrine' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Développement d’application web' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Optimisation SEO local' } }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://hugoschroder.dev' },
          { '@type': 'ListItem', position: 2, name: 'Développeur web freelance à Lens', item: 'https://hugoschroder.dev/developpeur-web-freelance-lens' }
        ]
      })
    }
  ]
})
</script>
