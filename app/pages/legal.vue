<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-400/20 to-slate-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-400/20 to-gray-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in">
          <div class="text-center space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500/20 to-slate-500/20 backdrop-blur-sm border border-gray-300/30 rounded-full">
              <span class="text-gray-300 text-lg font-medium">⚖️ Mentions Légales</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Informations
              <span class="block bg-gradient-to-r from-gray-400 via-slate-500 to-gray-600 bg-clip-text text-transparent">
                légales
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal Content -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="space-y-12">
          
          <!-- Éditeur du site -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>👤</span> Éditeur du site
            </h2>
            <div class="space-y-3 text-gray-300 leading-relaxed">
              <p><strong class="text-white">Directeur de publication :</strong> Hugo Schroder</p>
              <p><strong class="text-white">Email :</strong> <a href="mailto:contact@hugoschroder.dev" class="text-cyan-400 hover:text-cyan-300 transition-colors">contact@hugoschroder.dev</a></p>
              <p><strong class="text-white">Site web :</strong> <a href="https://hugoschroder.dev" class="text-cyan-400 hover:text-cyan-300 transition-colors">https://hugoschroder.dev</a></p>
              
              <div class="mt-6 pt-6 border-t border-white/10">
                <p><strong class="text-white">Bénéficiaire d'un CAPE</strong> (Contrat d'Appui au Projet d'Entreprise) jusqu'au 2 novembre 2026</p>
                <p class="mt-2"><strong class="text-white">Structure d'accompagnement :</strong> Espace des Entrepreneurs - Incubatest</p>
                <p><strong class="text-white">SIRET :</strong> 418 541 553 000 32</p>
                <p><strong class="text-white">TVA intracommunautaire :</strong> FR 23 418 541 553</p>
                <p><strong class="text-white">Code NAF :</strong> 8899B</p>
              </div>
            </div>
          </div>

          <!-- Réalisation du site -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>🎨</span> Réalisation du site
            </h2>
            <div class="space-y-3 text-gray-300 leading-relaxed">
              <p><strong class="text-white">Conception et développement :</strong> Hugo Schroder</p>
              <p><strong class="text-white">Technologies :</strong> Nuxt.js, Vue.js, TailwindCSS</p>
            </div>
          </div>

          <!-- Hébergement -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>🖥️</span> Hébergement
            </h2>
            <div class="space-y-3 text-gray-300 leading-relaxed">
              <p><strong class="text-white">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong class="text-white">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong class="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 transition-colors">https://vercel.com</a></p>
            </div>
          </div>

          <!-- Propriété intellectuelle -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>©</span> Propriété intellectuelle
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, design, code source) est la propriété exclusive 
                de <strong class="text-white">Hugo Schroder</strong>, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents 
                éléments est strictement interdite sans l'accord écrit préalable de Hugo Schroder.
              </p>
              <p>
                Les marques, logos et autres signes distinctifs reproduits sur ce site sont la propriété de leurs titulaires respectifs.
              </p>
            </div>
          </div>

          <!-- Données personnelles (RGPD) -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>🔒</span> Protection des données personnelles (RGPD)
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed">
              <h3 class="text-xl font-semibold text-white mt-6">Collecte des données</h3>
              <p>
                Ce site ne collecte aucune donnée personnelle de manière automatique. Les seules données collectées 
                sont celles que vous nous transmettez volontairement par email.
              </p>

              <h3 class="text-xl font-semibold text-white mt-6">Utilisation des données</h3>
              <p>
                Les données que vous nous communiquez sont utilisées uniquement pour :
              </p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous fournir les informations demandées</li>
                <li>Établir un devis ou une proposition commerciale</li>
              </ul>

              <h3 class="text-xl font-semibold text-white mt-6">Conservation des données</h3>
              <p>
                Vos données sont conservées uniquement le temps nécessaire au traitement de votre demande et 
                conformément aux obligations légales.
              </p>

              <h3 class="text-xl font-semibold text-white mt-6">Vos droits</h3>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et 
                d'opposition au traitement de vos données personnelles. Pour exercer ces droits, contactez-nous à : 
                <a href="mailto:contact@hugoschroder.dev" class="text-cyan-400 hover:text-cyan-300 transition-colors">contact@hugoschroder.dev</a>
              </p>
            </div>
          </div>

          <!-- Cookies -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>🍪</span> Cookies et outils d'analyse
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Ce site utilise des outils d'analyse pour améliorer l'expérience utilisateur et optimiser les performances. 
                Aucune donnée n'est utilisée à des fins publicitaires ou commerciales.
              </p>

              <h3 class="text-xl font-semibold text-white mt-6">Vercel Analytics</h3>
              <p>
                Nous utilisons <strong class="text-white">Vercel Analytics</strong> pour collecter des données anonymisées sur :
              </p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Les pages visitées</li>
                <li>Les performances du site</li>
                <li>Les données de navigation (anonymisées)</li>
              </ul>
              <p>
                Ces données sont collectées de manière respectueuse de la vie privée, sans identification personnelle. 
                Pour plus d'informations : 
                <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Politique de confidentialité Vercel Analytics
                </a>
              </p>

              <h3 class="text-xl font-semibold text-white mt-6">Google Search Console</h3>
              <p>
                Nous utilisons <strong class="text-white">Google Search Console</strong> pour :
              </p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Analyser le référencement du site</li>
                <li>Comprendre comment les visiteurs trouvent notre site</li>
                <li>Améliorer la visibilité dans les résultats de recherche</li>
              </ul>
              <p>
                Cet outil ne collecte pas de données personnelles identifiables. 
                Pour plus d'informations : 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Politique de confidentialité Google
                </a>
              </p>

              <h3 class="text-xl font-semibold text-white mt-6">Gestion des cookies</h3>
              <p>
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. 
                Cependant, cela peut affecter certaines fonctionnalités du site.
              </p>
            </div>
          </div>

          <!-- Responsabilité -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>⚠️</span> Limitation de responsabilité
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hugo Schroder s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
                Toutefois, il ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à 
                disposition sur ce site.
              </p>
              <p>
                Hugo Schroder ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès 
                au site ou de l'utilisation de celui-ci.
              </p>
            </div>
          </div>

          <!-- Droit applicable -->
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span>⚖️</span> Droit applicable
            </h2>
            <div class="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut 
                d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de 
                compétence en vigueur.
              </p>
            </div>
          </div>

          <!-- Dernière mise à jour -->
          <div class="text-center text-gray-400 text-sm pt-8">
            <p>Dernière mise à jour : Octobre 2025</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta tags
useHead({
  title: 'Mentions Légales - Hugo Schroder',
  meta: [
    {
      name: 'description',
      content: 'Mentions légales du site Hugo Schroder. Informations sur l\'éditeur, l\'hébergement, la protection des données personnelles (RGPD) et les conditions d\'utilisation.'
    },
    {
      property: 'og:title',
      content: 'Mentions Légales - Hugo Schroder'
    },
    {
      property: 'og:description',
      content: 'Mentions légales du site Hugo Schroder. Informations légales et protection des données.'
    },
    {
      name: 'robots',
      content: 'noindex, follow'
    }
  ]
})
</script>
