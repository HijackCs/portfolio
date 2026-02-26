<template>
  <PricingSatellitePage
    title="Prix d’un site internet : budget réel, options et priorités"
    description="Vous voulez savoir combien coûte un site internet en 2026 ? Voici une méthode claire pour estimer un budget cohérent selon vos objectifs, vos contraintes et le niveau d’accompagnement attendu."
    :intro-paragraphs="introParagraphs"
    :sections="sections"
    :faqs="faqs"
    faq-title="FAQ <span class='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>prix d’un site internet</span>"
    faq-description="Questions fréquentes avant de lancer un projet web côté budget, périmètre et délais."
    :related-links="relatedLinks"
  />
</template>

<script setup>
const introParagraphs = [
  'Parler du prix d’un site internet sans contexte mène souvent à des chiffres trompeurs. Un même besoin peut coûter 1 200 euros chez un prestataire, 3 500 euros chez un autre, puis 8 000 euros si le niveau d’exigence augmente. La différence ne vient pas uniquement du taux journalier. Elle dépend surtout de la clarté du cahier des charges, de la qualité de l’interface, de la profondeur SEO, du volume de contenu et du niveau de suivi après mise en ligne.',
  'Pour éviter les mauvaises surprises, la meilleure approche consiste à raisonner par objectifs métiers. Si votre but est de générer des demandes qualifiées localement, la structure éditoriale, les pages de service et la vitesse mobile deviennent prioritaires. Si vous cherchez surtout à présenter une activité et rassurer, le périmètre peut rester plus simple. Cette logique permet de distinguer ce qui est indispensable dès la V1 de ce qui peut être planifié dans une phase 2.',
  'Un budget web solide n’est pas celui qui est le plus bas, mais celui qui transforme un besoin en résultat mesurable. En pratique, cela signifie un socle technique fiable, un contenu lisible, une expérience mobile propre et une base SEO saine. Le simulateur vous donne une fourchette rapide, puis un échange projet permet d’affiner les choix pour aligner coût, délai et retour attendu.'
]

const sections = [
  {
    title: 'Quel budget prévoir selon le type de site',
    paragraphs: [
      'Pour un site vitrine simple de 5 à 8 pages, avec design personnalisé léger, formulaire de contact et optimisation SEO de base, la plupart des projets se situent entre 900 et 2 500 euros. Cette fourchette couvre généralement la conception, l’intégration, les contenus principaux et la mise en ligne. Elle évolue rapidement si vous ajoutez des pages locales, des animations avancées ou des besoins de conversion plus poussés.',
      'Un site e-commerce demande un investissement supérieur car il inclut des briques critiques : catalogue, fiches produits, tunnel de paiement, gestion des commandes, emails transactionnels et conformité. Selon le volume produit et les automatisations attendues, on observe souvent une base entre 3 000 et 8 000 euros. Au-delà, les coûts montent avec les connexions externes, la stratégie marketing et l’optimisation continue du taux de conversion.'
    ]
  },
  {
    title: 'Les facteurs qui font varier le prix',
    paragraphs: [
      'Le premier facteur est la complexité fonctionnelle. Un site qui affiche des informations statiques coûte moins cher qu’un site connecté à des outils tiers, avec espace membre, synchronisation de données ou workflows métier. Chaque fonctionnalité introduit du design, du développement, des tests et de la maintenance potentielle. Réduire le périmètre initial aux fonctions réellement utiles permet souvent d’économiser sans nuire à l’impact business.',
      'Le deuxième facteur est le contenu. Beaucoup de projets sous-estiment le temps nécessaire pour rédiger des textes clairs, structurer l’arborescence et préparer des visuels pertinents. Pourtant, c’est ce contenu qui porte le SEO et la conversion. Un site techniquement propre mais pauvre éditorialement performera moins bien. Prévoir un budget contenu dès le départ améliore la visibilité et évite de repousser des tâches essentielles à “plus tard”.'
    ]
  },
  {
    title: 'Coûts visibles et coûts cachés à anticiper',
    paragraphs: [
      'Le coût de création n’est qu’une partie de l’équation. Il faut aussi intégrer l’hébergement, le nom de domaine, les outils tiers éventuels, la maintenance et les évolutions fonctionnelles. Un projet qui démarre rapidement mais sans plan de maintenance peut coûter plus cher à long terme, notamment en cas de bugs, de ralentissements ou de dette technique. Une feuille de route trimestrielle limite ce risque.',
      'La transparence budgétaire repose sur un découpage clair des postes : conception, développement, contenu, SEO, recette, mise en ligne et support. Ce découpage permet de comparer des propositions de manière objective et d’éviter les devis “globaux” difficiles à piloter. Il facilite aussi la priorisation : vous pouvez protéger le budget sur les éléments qui génèrent de la valeur immédiate et décaler le reste en phase d’optimisation.'
    ]
  },
  {
    title: 'Comment fixer un budget cohérent sans surpayer',
    paragraphs: [
      'Une bonne méthode consiste à définir trois scénarios budgétaires : minimum viable, cible réaliste et version ambitieuse. Le scénario minimum garantit la mise en ligne avec un niveau de qualité professionnel. Le scénario cible ajoute les leviers d’acquisition les plus rentables. Le scénario ambitieux inclut automatisations, contenu étendu et optimisation conversion avancée. Cette approche vous aide à décider rapidement selon vos priorités et vos contraintes de trésorerie.',
      'Le prix le plus bas n’est pas forcément le plus rentable. Un site peu performant qui ne génère ni trafic ni demandes est un faux gain. À l’inverse, un budget un peu plus élevé avec une structure SEO propre, une UX claire et un accompagnement de lancement peut produire des résultats plus rapides. L’enjeu n’est pas de dépenser plus, mais de dépenser juste, au bon endroit, au bon moment.'
    ]
  }
]

const faqs = [
  {
    question: 'Combien coûte en moyenne un site internet professionnel ?',
    answer: 'Pour une majorité de projets vitrine, la fourchette se situe autour de 900€ à 2 500€. Un e-commerce démarre souvent vers 3 000€, et une application web sur-mesure peut dépasser 6 000€ selon la complexité.'
  },
  {
    question: 'Pourquoi deux devis peuvent-ils être très différents ?',
    answer: 'Parce que le périmètre n’est pas toujours identique : qualité du design, profondeur SEO, nombre de pages, niveau de tests, accompagnement et maintenance influencent fortement le prix final.'
  },
  {
    question: 'Le simulateur donne-t-il un vrai budget ?',
    answer: 'Le simulateur donne une fourchette réaliste pour cadrer le projet rapidement. Le devis final est ensuite affiné selon vos contenus, vos priorités métier et les fonctionnalités choisies.'
  },
  {
    question: 'Faut-il prévoir un budget après la mise en ligne ?',
    answer: 'Oui. Hébergement, maintenance, ajustements SEO et améliorations de conversion font partie du cycle de vie normal d’un site professionnel.'
  },
  {
    question: 'Quel est le meilleur point de départ ?',
    answer: 'Commencer par une V1 claire et performante, puis améliorer de façon continue. Cette stratégie réduit le risque et accélère le retour sur investissement.'
  }
]

const relatedLinks = [
  { to: '/prix-site-vitrine', label: 'Prix d’un site vitrine : fourchettes et exemples' },
  { to: '/prix-site-ecommerce', label: 'Prix d’un site e-commerce : ce qui impacte vraiment le budget' },
  { to: '/prix-application-web', label: 'Prix d’une application web : méthode d’estimation' },
  { to: '/combien-coute-un-site-internet', label: 'Combien coûte un site internet selon votre objectif' }
]

useHead({
  title: 'Prix Site Internet 2026 : Combien Prévoir Réellement ? | Hugo Schroder',
  meta: [
    { name: 'description', content: 'Prix d’un site internet : fourchettes 2026, postes de coût, erreurs à éviter et méthode pour estimer un budget cohérent selon votre projet.' },
    { name: 'keywords', content: 'prix site internet, coût site internet, budget création site web, tarif site internet, devis site web' },
    { property: 'og:title', content: 'Prix d’un site internet : budget réel et conseils' },
    { property: 'og:description', content: 'Comprendre le coût d’un site internet selon le type de projet, les fonctionnalités et les objectifs SEO.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://hugoschroder.dev/prix-site-internet' },
    { property: 'og:image', content: 'https://hugoschroder.dev/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hugoschroder.dev/prix-site-internet' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Prix d’un site internet : budget réel, options et priorités',
        description: 'Guide complet pour estimer le prix d’un site internet en 2026.',
        author: { '@type': 'Person', name: 'Hugo Schroder' },
        publisher: { '@type': 'Person', name: 'Hugo Schroder' },
        mainEntityOfPage: 'https://hugoschroder.dev/prix-site-internet'
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://hugoschroder.dev' },
          { '@type': 'ListItem', position: 2, name: 'Prix site internet', item: 'https://hugoschroder.dev/prix-site-internet' }
        ]
      })
    }
  ]
})
</script>
