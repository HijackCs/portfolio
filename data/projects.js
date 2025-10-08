export const projects = [
  {
    id: 1,
    title: "Application Web - Gestion interne",
    description: "Application web de gestion développée dans le cadre de mon alternance avec Symfony et Vue.js pour optimiser les processus internes + divers projets comptable.",
    impact: "Application interne qui a réduit de 30% le temps de saisie des heures par les agents et automatisé la génération des rapports mensuels, améliorant significativement l'efficacité opérationnelle.",
    image: "/images/projet-caf.png",
    images: [
      "/images/projet-caf.png"
    ],
    technologies: ["Symfony", "Vue.js", "Postgres", "Quasar", "Docker", "Git"],
    category: "Web",
    sector: "Public",
    freelance: false,
    status: "Terminé",
    year: 2024,
    client: "CAF du Nord",
    duration: "2 ans (alternance)",
    features: [
      "Interface de gestion et de saisie des temps",
      "Système d'authentification sécurisé",
      "Tableaux de bord analytiques",
      "API REST pour intégrations",
      "Respect des normes RGPD"
    ],
    detailedDescription: `Cette application web complète a été développée dans le cadre de mon alternance à la CAF du Nord. Elle centralise la gestion des temps de travail et automatise de nombreux processus administratifs.

L'application comprend plusieurs modules interconnectés : gestion des utilisateurs, saisie des temps, génération de rapports, et tableaux de bord analytiques. L'interface utilisateur moderne développée avec Quasar (Vue.js) offre une expérience fluide et intuitive.

Le backend Symfony assure la robustesse et la sécurité des données, avec une architecture MVC claire et des API REST documentées. L'intégration avec PostgreSQL permet une gestion efficace des données volumineuses.`,
    challenges: [
      "Intégration avec les systèmes existants de la CAF",
      "Respect strict des normes RGPD et sécurité des données",
      "Performance avec de gros volumes de données",
      "Interface utilisateur intuitive pour tous les profils"
    ],
    results: [
      "Réduction de 30% du temps de saisie",
      "Automatisation complète des rapports mensuels",
      "Amélioration de la traçabilité des données",
      "Satisfaction utilisateur élevée (8.5/10)"
    ],
    links: {}
  },
  {
    id: 2,
    title: "GFaim",
    description: "Application mobile de gestion des repas et du frigo avec authentification et API REST sécurisée.",
    impact: "Réduction du gaspillage alimentaire grâce à la gestion des stocks et aux suggestions personnalisées.",
    image: "/images/gfaim.png",
    technologies: ["Java", "Quarkus", "Android", "JWT", "PostgreSQL", "Docker", "Git"],
    category: "Mobile", 
    sector: "Académique",
    freelance: false,
    status: "Terminé",
    year: 2025,
    client: "Université d'Artois",
    duration: "3 mois",
    features: [
        "Gestion des repas et du frigo",
        "Gestion des recettes",
        "Gestion de son groupe/sa famille",
        "Prise en charge des préférences alimentaires et des allergies",
        "Planification des repas",
        "Authentification sécurisée avec JWT",
        "API de suggestions de recette",
    ],
      detailedDescription: `GFaim est une application Android moderne designée pour aider les particuliers à suivre leurs repas, gérer les recettes, surveiller leur alimentation et coordonner leurs courses.
       
       Le backend est assuré par une API REST sécurisée écrite en utilisant Quarkus (Java) avec une authentification par token JWT et une base de données PostgreSQL.
       
       L'application a été réalisée dans le cadre de mon projet de fin d'etudes à l'Université d'Artois, en groupe de 4.
       `,

      links: {
      demo: "https://github.com/hijackcs/gfaim-app",
      github: "https://github.com/hijackcs/gfaim-api"
    }
  },
  {
    id: 3,
    title: "Portfolio Personnel - Site Vitrine",
    description: "Site portfolio moderne avec Nuxt.js, design 3D, système de blog intégré et approche data-driven pour présenter mes compétences.",
    image: "/images/portfolio.png",
    images: [
      "/images/portfolio.png",
      "/images/portfolio-about.png",
      "/images/portfolio-contact.png",
    ],
    technologies: ["Nuxt.js", "Tailwind CSS", "Markdown"],
    category: "Site Vitrine",
    sector: "Freelance",
    freelance: true,
    status: "Terminé",
    year: 2025,
    client: "Hugo Schroder",
    duration: "1 semaine",
    features: [
      "Design 3D moderne",
      "Système de blog intégré",
      "Approche data-driven"
    ],
    detailedDescription: `Ce portfolio moderne a été conçu pour présenter mes compétences et projets de manière professionnelle et engageante. Développé avec Nuxt.js pour des performances optimales, il intègre des animations 3D subtiles et un design glassmorphism tendance.

L'approche data-driven permet une gestion centralisée du contenu via des fichiers JSON, facilitant les mises à jour. Le système de blog intégré utilise Markdown pour une rédaction simple et efficace.

L'optimisation SEO et les performances garantissent une excellente visibilité et expérience utilisateur.`,
    challenges: [
      "Optimisation des performances avec animations 3D",
      "Design responsive sur tous les appareils",
      "SEO optimal pour le référencement",
      "Système de contenu flexible et maintenable"
    ],
    results: [
      "Score Lighthouse > 90/100",
      "Temps de chargement < 2 secondes",
      "Augmentation de 25% des prises de contact",
      "Design moderne et professionnel"
    ],
    links: {
      github: "https://github.com/hijackcs/portfolio"
    }
  },
  {
    id: 4,
    title: "AlternantApp",
    description: "Application pour enregistrer facilement les heures réalisées chaque jour en alternance, avec historique détaillé et gestion automatique du bonus/malus.",
    impact: "Gain de ~15 min/jour sur la saisie et suppression des erreurs de calcul grâce à l'automatisation.",
    image: "/images/alternantApp.png",
    images: [
      "/images/alternantApp.png"
    ],
    technologies: ["Quasar", "Vue.js", "Localstorage"],
    category: "Outil",
    sector: "Web",
    freelance: false,
    status: "Terminé",
    year: 2024,
    client: "Hugo Schroder",
    duration: "1 semaine",
    features: [
      "Saisie des heures effectuées",
      "Historique de saisie",
      "Bonus/Malus"
    ],
    detailedDescription: `AlternantApp est un outil personnel développé pour simplifier le suivi des heures d'alternance. Cette application web progressive permet un enregistrement rapide et précis du temps de travail quotidien.

L'interface intuitive développée avec Quasar Framework offre une expérience utilisateur fluide sur desktop et mobile. Le système de calcul automatique du bonus/malus évite les erreurs manuelles et fournit un suivi en temps réel.

Les données sont stockées localement pour garantir la confidentialité et permettre un fonctionnement hors ligne.`,
    challenges: [
      "Interface utilisateur rapide et intuitive",
      "Calculs automatiques fiables",
      "Fonctionnement hors ligne",
      "Responsive design pour mobile et desktop"
    ],
    results: [
      "Gain de 15 min/jour sur la saisie",
      "Suppression des erreurs de calcul",
      "Interface utilisateur fluide",
      "Adoption quotidienne pendant mes 2 ans d'alternance"
    ],
    links: {
      github: "https://github.com/hijackcs/alternantApp"
    }
  },
  {
    id: 5,
    title: "POC Quasar",
    description: "Proof of concept démontrant comment Quasar permet de créer des applications web et mobiles performantes à partir d’une base de code unique.",
    image: "/images/poc.png",
    technologies: ["Quasar", "Vue.js", "Localstorage"],
    category: "Académique",
    sector: "Académique",
    freelance: false,
    status: "Terminé",
    year: 2025,
    client: "Hugo Schroder",
    duration: "2 semaines",
    features: [
      "Showcase de composents Quasar",
      "Build multi-plateforme (Web, Mobile, Desktop)",
      "Interface responsive adaptative"
    ],
    images: [
      "/images/poc.png"
    ],
    detailedDescription: `Ce proof of concept explore les capacités du framework Quasar pour le développement multi-plateforme. L'objectif était d'évaluer la faisabilité technique et les performances d'une approche "write once, run anywhere".

Le POC démontre l'utilisation des composants Quasar les plus courants, les patterns de développement recommandés, et les spécificités de chaque plateforme cible. Les tests de performance ont été réalisés sur web, mobile et desktop.

Il a été réalisé dans le cadre de mon master, le but était de mettre en avant une technologie peu connue et de montrer ses avantages par rapport aux autres frameworks.`,
    challenges: [
      "Évaluation des performances cross-platform",
      "Test des composants sur différents devices",
      "Optimisation du bundle size",
      "Documentation des bonnes pratiques"
    ],
    results: [
      "50% de temps de dev économisé sur projets suivants",
      "Architecture technique validée",
      "Guide de bonnes pratiques créé",
      "Base de composants réutilisables"
    ],
    links: {
      github: "https://github.com/hijackcs/poc-quasar"
    }
  },
  
  {
    id: 6,
    title: "Projet Domotique IoT – Raspberry & Zigbee",
    description: "Mise en place d’un système domotique personnel basé sur Raspberry Pi, Arduino et réseau Zigbee, supervisé via Home Assistant. Intégration de capteurs (température, luminosité, météo), automatisations (allumage, alertes, scénarios) et configuration du réseau local sécurisé.",
    impact: "Baisse d'environ 20% de la consommation énergétique grâce aux automatisations et à la supervision centralisée.",
    image: "/images/Home-Assistant.png",
    technologies: ["Raspberry Pi", "Arduino", "Zigbee", "Home Assistant", "Node-RED", "ESP32", "MQTT"],
    category: "IoT / Domotique",
    sector: "Freelance",
    freelance: true,
    status: "En cours d'évolution",
    year: 2025,
    client: "Projet personnel",
    duration: "1 an (évolutif)",
    features: [
      "Intégration de capteurs connectés (température, luminosité, météo)",
      "Automatisations avancées (scénarios, alertes, routines)",
      "Supervision centralisée avec Home Assistant",
      "Communication Zigbee et MQTT",
      "Dashboard personnalisé et notifications en temps réel",
      "Configuration réseau local sécurisé"
    ],
    images: [
      "/images/Home-Assistant.png",
      "/images/domotique-dashboard.png",
      "/images/domotique-sensors.png",
      "/images/domotique-automation.png"
    ],
    detailedDescription: `Ce projet domotique personnel combine plusieurs technologies IoT pour créer un écosystème connecté intelligent. Basé sur Raspberry Pi comme hub central, il intègre des capteurs Arduino et ESP32 communicant via protocole Zigbee.

Home Assistant sert de plateforme de supervision centrale, orchestrant les automatisations et fournissant une interface utilisateur moderne.

Le système évolue continuellement avec l'ajout de nouveaux capteurs et l'optimisation des automatisations.`,
    challenges: [
      "Intégration de protocoles IoT hétérogènes",
      "Optimisation de la consommation énergétique",
      "Sécurisation du réseau local",
      "Interface utilisateur intuitive et responsive",
      "Fiabilité et maintenance du système"
    ],
    results: [
      "Automatisation de scénarios quotidiens",
      "Dashboard temps réel avec les différents capteurs",
      "Système stable fonctionnant 24h/24",
      "Interface mobile responsive"
    ],
    links: {}
  }
]

export const projectCategories = [
  "Tous",
  "Mobile",
  "Web",
  "Académique",
  "Site Vitrine",
  "Outil",
  "IoT / Domotique",
  "Freelance"
]

export const projectSectors = [
  "Tous",
  "Public",
  "Académique", 
  "Freelance"
]