<template>
  <PricingSatellitePage
    title="Prix d’un site vitrine : combien investir pour être visible ?"
    description="Le budget d’un site vitrine dépend moins du nombre de pages que de la clarté du message, de la structure SEO locale et de la qualité de l’expérience mobile."
    :intro-paragraphs="introParagraphs"
    :sections="sections"
    :faqs="faqs"
    faq-title="FAQ <span class='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>prix site vitrine</span>"
    faq-description="Les réponses utiles pour cadrer un site vitrine rentable, sans surcoût inutile."
    :related-links="relatedLinks"
  />
</template>

<script setup>
const introParagraphs = [
  'Un site vitrine est souvent le premier investissement digital d’une entreprise locale, d’un artisan ou d’un indépendant. L’objectif n’est pas uniquement de “présenter” l’activité, mais de créer un support capable de rassurer, de se positionner sur des recherches utiles et de déclencher des prises de contact. C’est pour cela qu’un budget vitrine varie : deux sites peuvent avoir le même nombre de pages tout en offrant des performances commerciales très différentes.',
  'En 2026, un site vitrine professionnel bien structuré se situe généralement entre 900 et 2 500 euros, parfois plus si le contenu est dense ou si l’image de marque nécessite un design plus poussé. Cette fourchette inclut en général la conception, l’intégration responsive, les pages clés et une base SEO. Le tarif monte surtout quand le projet exige une vraie stratégie éditoriale locale, des pages géographiques ou un tunnel de conversion plus travaillé.',
  'La meilleure logique consiste à construire un site vitrine comme un outil d’acquisition. On priorise donc les pages qui répondent aux intentions de recherche, les appels à l’action visibles et les éléments de preuve qui réduisent la friction. Cette approche permet de maîtriser le budget tout en maximisant l’impact.'
]

const sections = [
  {
    title: 'Ce qui est inclus dans un site vitrine professionnel',
    paragraphs: [
      'Le socle comprend généralement une page d’accueil claire, une page services, une page à propos, un formulaire de contact et des mentions légales. À cela s’ajoutent un design cohérent, une adaptation mobile, l’optimisation des performances et une configuration SEO de base : balises, structure des titres, maillage interne et indexation propre. Ces éléments ne sont pas des extras, ils conditionnent la crédibilité et la visibilité du site.',
      'Selon votre activité, il est souvent pertinent d’ajouter des pages “intentionnelles” : prestations détaillées, zones d’intervention, tarifs indicatifs ou FAQ métier. Ce type de contenu améliore le référencement local et facilite la conversion. Un site vitrine peu détaillé coûte moins cher au départ, mais il demande souvent des reprises rapides car il ne répond pas assez aux attentes des visiteurs.'
    ]
  },
  {
    title: 'Pourquoi le prix peut passer de 1 000€ à 2 500€',
    paragraphs: [
      'La différence se joue d’abord sur la phase de cadrage. Un projet avec objectifs clairs, arborescence validée et contenus prêts avance vite. À l’inverse, des décisions prises en cours de route multiplient les allers-retours. Le temps de conception augmente, ce qui impacte directement le coût. Ce n’est pas un problème de prestataire, mais de pilotage projet et de niveau de précision au démarrage.',
      'Le deuxième levier est le niveau de personnalisation. Un design standard peut suffire pour un lancement rapide. Un design sur mesure, aligné sur une identité forte, demande plus de recherche UX/UI, de maquettes et de validations. Cela augmente l’investissement, mais peut améliorer nettement la perception de qualité et le taux de transformation si votre marché est concurrentiel.'
    ]
  },
  {
    title: 'Site vitrine et SEO local : le poste souvent sous-estimé',
    paragraphs: [
      'Beaucoup de projets vitrines échouent à cause d’un contenu trop générique. Pour remonter sur des requêtes locales, il faut des textes ciblés, des pages utiles et une sémantique cohérente avec vos services. Le SEO local ne se limite pas à placer une ville dans un titre. Il s’appuie sur une structure éditoriale solide, des éléments de confiance et une navigation qui guide vers la prise de contact.',
      'Intégrer ce travail dès la V1 coûte moins cher que corriger plus tard un site mal structuré. Une bonne base SEO réduit les dépendances aux campagnes payantes et crée un flux organique durable. C’est souvent le meilleur compromis pour les TPE/PME qui veulent un site rentable sans budget marketing illimité.'
    ]
  },
  {
    title: 'Comment dimensionner une V1 efficace',
    paragraphs: [
      'Pour rester dans un budget maîtrisé, concentrez la V1 sur les pages qui répondent aux questions clés de vos prospects : qui vous êtes, ce que vous faites, pour qui, à quel prix indicatif, et comment vous contacter. Ce cadrage limite les effets “catalogue” inutiles et vous donne une base rapide à mettre en ligne.',
      'Ensuite, planifiez une phase d’optimisation sur 2 à 3 mois : enrichissement des pages, ajustements SEO, amélioration du copywriting et tests de CTA. Cette logique progressive évite de gonfler le devis initial tout en gardant une trajectoire claire vers la performance commerciale.'
    ]
  }
]

const faqs = [
  {
    question: 'Quel est le prix moyen d’un site vitrine ?',
    answer: 'La plupart des sites vitrines professionnels se situent entre 900€ et 2 500€, selon le contenu, le design et le niveau d’optimisation SEO.'
  },
  {
    question: 'Un site vitrine à bas prix peut-il être efficace ?',
    answer: 'Oui, si le périmètre est clair et centré sur l’essentiel. En revanche, un budget trop faible sans stratégie de contenu risque de limiter fortement la visibilité.'
  },
  {
    question: 'Combien de temps faut-il pour le livrer ?',
    answer: 'En général 2 à 4 semaines pour une V1 bien cadrée, avec contenus disponibles et validation fluide.'
  },
  {
    question: 'Le SEO local est-il inclus ?',
    answer: 'Une base SEO est généralement incluse. Une stratégie locale plus poussée (pages satellites, maillage et contenus ciblés) peut faire l’objet d’un lot dédié.'
  },
  {
    question: 'Que faire après la mise en ligne ?',
    answer: 'Suivre les performances, enrichir les pages clés et itérer sur les appels à l’action pour améliorer les conversions.'
  }
]

const relatedLinks = [
  { to: '/prix-site-internet', label: 'Prix d’un site internet : vue globale' },
  { to: '/prix-site-ecommerce', label: 'Prix d’un site e-commerce' },
  { to: '/prix-application-web', label: 'Prix d’une application web' },
  { to: '/combien-coute-un-site-internet', label: 'Combien coûte un site internet ?' }
]

useHead({
  title: 'Prix Site Vitrine 2026 : Budget, Détails et Conseils | Hugo Schroder',
  meta: [
    { name: 'description', content: 'Prix d’un site vitrine en 2026 : fourchettes réalistes, ce qui est inclus, facteurs de variation et méthode pour lancer une V1 efficace.' },
    { name: 'keywords', content: 'prix site vitrine, tarif site vitrine, coût site vitrine, budget site vitrine, devis site vitrine' },
    { property: 'og:title', content: 'Prix d’un site vitrine : combien prévoir ?' },
    { property: 'og:description', content: 'Guide pratique pour estimer le budget d’un site vitrine professionnel et visible localement.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://hugoschroder.dev/prix-site-vitrine' },
    { property: 'og:image', content: 'https://hugoschroder.dev/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hugoschroder.dev/prix-site-vitrine' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Prix d’un site vitrine : combien investir pour être visible ?',
        description: 'Estimer le prix d’un site vitrine avec une approche orientée résultats.',
        author: { '@type': 'Person', name: 'Hugo Schroder' },
        mainEntityOfPage: 'https://hugoschroder.dev/prix-site-vitrine'
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
          { '@type': 'ListItem', position: 2, name: 'Prix site vitrine', item: 'https://hugoschroder.dev/prix-site-vitrine' }
        ]
      })
    }
  ]
})
</script>
