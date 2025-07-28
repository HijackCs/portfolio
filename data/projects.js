export const projects = [
  {
    id: 1,
    title: "Application Web - Gestion interne",
    description: "Application web de gestion développée dans le cadre de mon alternance avec Symfony et Vue.js pour optimiser les processus internes + divers projets comptable.",
    image: "/images/projet-caf.png",
    technologies: ["Symfony", "Vue.js", "Postgres", "Quasar", "Docker", "Git"],
    category: "Web App",
    status: "En cours",
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
    links: {}
  },
  {
    id: 2,
    title: "GFaim",
    description: "Application mobile de gestion des repas et du frigo avec authentification et API REST sécurisée.",
    image: "/images/gfaim.png",
    technologies: ["Java", "Quarkus", "Android", "JWT", "PostgreSQL", "Docker", "Git"],
    category: "Mobile", 
    status: "Terminé",
    year: 2025,
    client: "Université d'Artois",
    duration: "3 mois",
    features: [
      "Gestion des repas et du frigo",
      "Authentification sécurisée avec JWT",
      "API de suggestions de recette",
    ],
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
    technologies: ["Nuxt.js", "Tailwind CSS", "Markdown"],
    category: "Site Vitrine",
    status: "Terminé",
    year: 2025,
    client: "Hugo Schroder",
    duration: "1 semaine",
    features: [
      "Design 3D moderne",
      "Système de blog intégré",
      "Approche data-driven"
    ],
    links: {
      github: "https://github.com/hijackcs/portfolio"
    }
  },
  {
    id: 4,
    title: "AlternantApp",
    description: "Application pour enregistrer facilement les heures réalisées chaque jour en alternance, avec historique détaillé et gestion automatique du bonus/malus.",
    image: "/images/alternantApp.png",
    technologies: ["Quasar", "Vue.js", "Localstorage"],
    category: "Outil",
    status: "Terminé",
    year: 2024,
    client: "Hugo Schroder",
    duration: "1 semaine",
    features: [
      "Saisie des heures effectuées",
      "Historique de saisie",
      "Bonus/Malus"
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
    status: "Terminé",
    year: 2025,
    client: "Hugo Schroder",
    duration: "2 semaines",
    features: [
      "Showcase de composents Quasar",
    ],
    links: {
      github: "https://github.com/hijackcs/poc-quasar"
    }
  },
  
  {
    id: 6,
    title: "Projet Domotique IoT – Raspberry & Zigbee",
    description: "Mise en place d’un système domotique personnel basé sur Raspberry Pi, Arduino et réseau Zigbee, supervisé via Home Assistant. Intégration de capteurs (température, luminosité, météo), automatisations (allumage, alertes, scénarios) et configuration du réseau local sécurisé.",
    image: "/images/Home-Assistant.png",
    technologies: ["Raspberry Pi", "Arduino", "Zigbee", "Home Assistant", "Node-RED", "ESP32", "MQTT"],
    category: "IoT / Domotique",
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
    links: {}
  }
]

export const projectCategories = [
  "Tous",
  "Mobile",
  "Web App",
  "Académique",
  "Site Vitrine",
  "Outil",
  "IoT / Domotique"
]