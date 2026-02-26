<template>
  <PricingSatellitePage
    title="Combien coûte un site internet ? La réponse selon votre objectif"
    description="Le coût d’un site internet varie selon ce que vous attendez réellement : être trouvé localement, vendre en ligne ou automatiser des processus métier."
    :intro-paragraphs="introParagraphs"
    :sections="sections"
    :faqs="faqs"
    faq-title="FAQ <span class='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>combien coûte un site internet</span>"
    faq-description="Des réponses directes pour décider vite et éviter les erreurs de budget."
    :related-links="relatedLinks"
  />
</template>

<script setup>
const introParagraphs = [
  'La question “combien coûte un site internet ?” revient dans presque tous les projets. Pourtant, il n’existe pas de prix unique. Le coût dépend d’abord de votre objectif principal : générer des contacts, vendre des produits, ou créer un outil métier. Sans cet objectif, les chiffres restent abstraits et mènent souvent à de mauvaises décisions, comme sous-investir dans le contenu ou sur-investir dans des options peu utiles au démarrage.',
  'En règle générale, un site vitrine professionnel se situe entre 900 et 2 500 euros, un e-commerce entre 3 000 et 8 000 euros, et une application web sur-mesure au-delà de 6 000 euros. Ces montants évoluent avec le volume, les intégrations et le niveau de personnalisation. Ce qui compte n’est pas de trouver “le moins cher”, mais de financer les éléments qui créent de la valeur rapidement.',
  'La bonne stratégie consiste à transformer cette question en plan d’action : quel est votre périmètre minimum, quel résultat attendez-vous dans 3 mois, et quels lots peuvent être différés. Avec cette méthode, le budget devient lisible, pilotable, et surtout cohérent avec vos priorités business.'
]

const sections = [
  {
    title: 'Prix d’un site internet : des fourchettes utiles, pas des promesses',
    paragraphs: [
      'Les fourchettes de prix servent à cadrer, pas à figer un devis. Elles permettent d’identifier rapidement la zone budgétaire compatible avec votre besoin. Un projet simple avec contenu prêt et objectifs clairs restera dans la fourchette basse. Un projet avec contenu à produire, stratégie SEO locale et parcours conversion évolué glissera vers la fourchette haute. Cette logique évite les comparaisons trompeuses entre offres qui ne couvrent pas le même périmètre.',
      'Pour décider correctement, vérifiez ce qui est inclus : conception, développement, optimisation mobile, base SEO, recette, mise en ligne, maintenance initiale. Deux devis au même prix peuvent avoir des niveaux de qualité très différents. Le prix n’est pertinent que s’il est relié à un périmètre clair et à un niveau d’accompagnement défini.'
    ]
  },
  {
    title: 'Les 5 questions qui déterminent le coût final',
    paragraphs: [
      'Première question : quel type de site voulez-vous vraiment ? Vitrine, e-commerce ou application web ne mobilisent pas les mêmes compétences ni le même temps. Deuxième question : quel volume de contenu faut-il produire ? Troisième question : quels outils externes faut-il connecter ? Quatrième question : quel niveau d’exigence SEO et performance attendez-vous ? Cinquième question : quelle cadence d’évolution prévoyez-vous après lancement ?',
      'Répondre à ces cinq points permet d’obtenir un budget réaliste en quelques échanges. Sans ces réponses, le risque est de démarrer sur une estimation floue, puis de multiplier les ajustements coûteux. Une estimation solide réduit les allers-retours et améliore la qualité finale, car elle donne un cadre clair à toutes les décisions du projet.'
    ]
  },
  {
    title: 'Comment éviter de payer trop cher',
    paragraphs: [
      'Le meilleur levier d’économie n’est pas la négociation agressive, c’est la priorisation. Définissez une V1 qui traite votre besoin principal avec un niveau de qualité sérieux, puis planifiez les fonctionnalités secondaires en phase 2. Cette approche évite le “tout maintenant”, qui gonfle les coûts et rallonge les délais sans garantie de retour immédiat.',
      'Autre point clé : exiger de la transparence sur le temps passé par poste. Quand le devis détaille clairement cadrage, design, développement, contenu, SEO et recette, vous pouvez arbitrer intelligemment. Vous savez où investir, où alléger, et ce qui peut être déplacé plus tard sans fragiliser l’ensemble.'
    ]
  },
  {
    title: 'Construire un budget orienté résultats',
    paragraphs: [
      'Un budget web utile est un budget relié à des indicateurs : nombre de demandes entrantes, taux de conversion, trafic qualifié, temps gagné en interne, chiffre d’affaires additionnel. Dès que ces indicateurs sont définis, les choix techniques deviennent plus simples. On investit dans les éléments qui ont un impact mesurable, plutôt que dans des options “confort” peu rentables.',
      'C’est exactement l’intérêt d’un simulateur : obtenir une base chiffrée rapide, puis affiner selon vos objectifs réels. En procédant ainsi, vous évitez les décisions à l’aveugle et vous transformez la création de site en projet piloté, avec une trajectoire claire entre coût initial, mise en ligne et performance.'
    ]
  }
]

const faqs = [
  {
    question: 'Combien coûte un site internet en moyenne en 2026 ?',
    answer: 'Comptez en général 900€ à 2 500€ pour un site vitrine, 3 000€ à 8 000€ pour un e-commerce, et 6 000€+ pour une application web.'
  },
  {
    question: 'Pourquoi est-ce difficile d’avoir un prix exact immédiatement ?',
    answer: 'Parce que le coût dépend du périmètre, du contenu, des fonctionnalités et du niveau d’accompagnement. Une estimation précise demande un minimum de cadrage.'
  },
  {
    question: 'Peut-on démarrer avec un petit budget puis évoluer ?',
    answer: 'Oui, avec une V1 bien pensée et un plan d’évolution clair. C’est souvent la stratégie la plus efficace pour limiter le risque financier.'
  },
  {
    question: 'Quel est le premier pas recommandé ?',
    answer: 'Utiliser le simulateur pour obtenir une fourchette, puis affiner selon vos objectifs business et votre niveau de priorité.'
  }
]

const relatedLinks = [
  { to: '/prix-site-internet', label: 'Prix site internet : guide complet' },
  { to: '/prix-site-vitrine', label: 'Prix site vitrine : approche locale' },
  { to: '/prix-site-ecommerce', label: 'Prix site e-commerce : coûts réels' },
  { to: '/prix-application-web', label: 'Prix application web : estimation par lots' }
]

useHead({
  title: 'Combien Coûte un Site Internet en 2026 ? | Hugo Schroder',
  meta: [
    { name: 'description', content: 'Combien coûte un site internet en 2026 ? Fourchettes réalistes, facteurs de coût et méthode simple pour définir un budget adapté à votre projet.' },
    { name: 'keywords', content: 'combien coûte un site internet, coût site web, prix création site, tarif développeur web, budget site internet' },
    { property: 'og:title', content: 'Combien coûte un site internet ?' },
    { property: 'og:description', content: 'La réponse dépend de vos objectifs : vitrine, e-commerce ou application web.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://hugoschroder.dev/combien-coute-un-site-internet' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hugoschroder.dev/combien-coute-un-site-internet' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Combien coûte un site internet ? La réponse selon votre objectif',
        description: 'Repères concrets pour estimer le coût d’un site internet.',
        author: { '@type': 'Person', name: 'Hugo Schroder' },
        mainEntityOfPage: 'https://hugoschroder.dev/combien-coute-un-site-internet'
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
          { '@type': 'ListItem', position: 2, name: 'Combien coûte un site internet', item: 'https://hugoschroder.dev/combien-coute-un-site-internet' }
        ]
      })
    }
  ]
})
</script>
