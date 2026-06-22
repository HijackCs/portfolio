export type ProjectCategory = 'mobile' | 'web' | 'iot' | 'tools'
export type ProjectStatus = 'done' | 'ongoing'

export interface ProjectLink {
  label: string
  url: string
  icon?: 'appstore' | 'external' | 'play'
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  /** Accroche courte (cards) */
  tagline: string
  /** Description plus complète (sections featured + intro détail) */
  description: string
  stack: string[]
  duration: string
  status: ProjectStatus
  year?: string
  role?: string
  featured?: boolean
  /** Points techniques mis en avant (home + détail) */
  highlights?: string[]
  /** Paragraphes additionnels affichés sur la page détail */
  overview?: string[]
  features?: string[]
  repo?: string
  links?: ProjectLink[]
  images?: ProjectImage[]
}

export const categoryLabels: Record<ProjectCategory, string> = {
  mobile: 'Mobile',
  web: 'Web & SaaS',
  iot: 'IoT',
  tools: 'Outils'
}

export const statusLabels: Record<ProjectStatus, string> = {
  done: 'Terminé',
  ongoing: 'En cours'
}

export const projects: Project[] = [
  {
    slug: 'lenspot',
    title: 'Lenspot',
    category: 'mobile',
    tagline: 'App iOS pour repérer, organiser et retrouver ses spots photo. Développée et publiée en 30 jours.',
    description:
      'Lenspot est née d\'un défi simple: sortir une app iOS sur l\'App Store en 30 jours, '
      + 'seul, en partant de zéro en développement iOS. L\'idée : enregistrer un spot photo avec sa géolocalisation, '
      + 'des tags et une note, puis le retrouver sur une carte ou le partager. App 100% native '
      + 'en SwiftUI et SwiftData, avec des widgets WidgetKit sur l\'écran d\'accueil et une '
      + 'monétisation via StoreKit 2.',
    stack: ['SwiftUI', 'SwiftData', 'WidgetKit', 'StoreKit 2', 'App Store'],
    duration: '30 jours',
    year: '2026',
    role: 'Développement solo, défi "de 0 à l\'App Store en 30 jours"',
    status: 'done',
    featured: true,
    highlights: [
      'Sortie sur l\'App Store en 30 jours, seul, de zéro',
      'Documenté jour par jour en "build in public"',
      'Stack 100% native : SwiftUI, SwiftData, WidgetKit, StoreKit 2'
    ],
    overview: [
      'Le besoin est simple: un photographe ou un voyageur repère un spot, mais peut facilement oublier où il se trouve, et ne plus le retrouver. '
      + 'Lenspot sert de carnet de spots: on enregistre le lieu avec des tags, une note, et une photo, '
      + 'et on le retrouve sur une carte ou dans un dashboard qui résume ses stats (nombre '
      + 'de spots, villes visitées, tags les plus utilisés).',
      'Le projet a été mené comme un défi de 30 jours, en build in public: du '
      + 'modèle de données SwiftData jusqu\'aux widgets WidgetKit, en passant par le système '
      + 'de partage qui génère une image du spot, tout a été documenté sur mes réseaux sociaux.'
    ],
    features: [
      'Sauvegarde de spots avec géolocalisation, tags et notes',
      'Carte et dashboard (spots, villes visitées, tags utilisés)',
      'Partage d\'un spot sous forme d\'image générée (carte, photo, tags)',
      'Widgets écran d\'accueil avec WidgetKit',
      'Achats in-app via StoreKit 2',
      'Publiée et maintenue sur l\'App Store'
    ],
    repo: '',
    links: [
      { label: 'Voir sur l\'App Store', url: 'https://apps.apple.com/fr/app/lenspot/id6774511228', icon: 'appstore' }
    ],
    images: [
      { src: '/projects/lenspot/accueil.png', alt: 'Écran d\'accueil de Lenspot' },
      { src: '/projects/lenspot/carte.png', alt: 'Carte de Lenspot' },
      { src: '/projects/lenspot/detailSpot.png', alt: 'Détail d\'un spot' },
      { src: '/projects/lenspot/listeSpots.png', alt: 'Liste des spots photo enregistrés dans Lenspot' },
      { src: '/projects/lenspot/favoris.png', alt: 'Favoris' }
    ]
  },
  {
    slug: 'gfaim',
    title: 'GFaim',
    category: 'mobile',
    tagline: 'App Android de gestion des repas et du frigo.',
    description:
      'Projet de fin d\'études, réalisé en groupe de 4 : application Android permettant de '
      + 'gérer ses repas, son frigo, ses recettes et ses courses. L\'équipe était divisée en '
      + 'deux binômes, front Android et API. J\'étais sur la partie API : conception du modèle '
      + 'de données, contrat d\'API REST en Quarkus (imposé par le cadre du projet), '
      + 'authentification JWT et base PostgreSQL, consommés ensuite par le client Android '
      + 'natif en Java.',
    stack: ['Quarkus', 'Java', 'PostgreSQL', 'JWT', 'API REST', 'Android'],
    duration: '3 mois',
    year: '2025',
    role: 'Développement backend (Quarkus, JWT, PostgreSQL)',
    status: 'done',
    featured: true,
    highlights: [
      'Conception du modèle de données et du contrat d\'API REST',
      'API Quarkus sécurisée par JWT, consommée par le client Android',
      'Projet de fin d\'études, en groupe de 4 (2 API / 2 mobile)'
    ],
    overview: [
      'GFaim aide à organiser le quotidien autour des repas : ce qu\'il y a dans le frigo, '
      + 'les recettes possibles avec ce qu\'on a sous la main, la planification des repas '
      + 'de la semaine et la liste de courses qui en découle. Pensé pour un usage à l\'échelle '
      + 'd\'un foyer, avec gestion des préférences et allergies de chaque membre.',
      'Sur ce projet, j\'étais sur la partie API avec un autre membre de l\'équipe, pendant que '
      + 'les deux autres travaillaient sur le client Android. J\'ai conçu le modèle de données '
      + 'et le contrat d\'API REST, mis en place l\'authentification JWT et la base PostgreSQL, '
      + 'le tout en Quarkus, framework imposé par le cadre du projet.',
      'Réalisé dans le cadre du projet de fin d\'études à l\'Université d\'Artois, sur une '
      + 'durée de 3 mois.'
    ],
    features: [
      'Gestion des repas et du contenu du frigo',
      'Gestion des recettes',
      'Gestion de groupe/famille avec préférences et allergies',
      'Planification des repas et liste de courses',
      'Authentification sécurisée avec JWT',
      'Suggestions de recettes via API'
    ],
    repo: 'https://github.com/hijackcs/gfaim-api',
    links: [],
    images: [
      { src: '/projects/gfaim/gfaim.png', alt: 'Page d\'accueil de l\'application mobile GFaim' }
    ]
  },
  {
    slug: 'gestion-interne-alternance',
    title: 'Refonte d\'une application de gestion interne',
    category: 'web',
    tagline: 'Refonte complète d\'une app interne peu utilisée, du recueil de besoin à la mise en prod, en solo.',
    description:
      'Une application interne de gestion des temps et de génération de rapports existait '
      + 'déjà, mais était trop peu utilisée. On m\'a confié sa refonte complète, en autonomie : '
      + 'recueil des besoins auprès des utilisateurs, conception UX/UI, développement front '
      + '(Vue.js/Quasar) et back (Symfony, PostgreSQL), puis dockerisation et mise en place '
      + 'd\'une pipeline CI/CD avec GitLab CI, deux aspects qui n\'existaient pas et que j\'ai ajoutés de '
      + 'ma propre initiative.',
    stack: ['Symfony', 'Vue.js', 'Quasar', 'PostgreSQL', 'Docker', 'GitLab CI'],
    duration: '1 an',
    year: '2024',
    role: 'Conception, design, développement et infra, en autonomie totale (alternance)',
    status: 'done',
    featured: true,
    highlights: [
      'Adoption quotidienne après la refonte, contre un usage très irrégulier avant (parfois plusieurs mois sans connexion)',
      'Refonte complète en solo: recueil de besoin, design, dev full-stack et infra',
      'Dockerisation et pipeline CI/CD ajoutées de ma propre initiative'
    ],
    overview: [
      'L\'application existante centralisait la saisie des temps de travail'
      + ', mais était sous-utilisée. La mission donnée '
      + 'était ouverte: la refaire pour qu\'elle soit réellement adoptée.',
      'J\'ai commencé par recueillir les besoins directement auprès des agents qui '
      + 'utilisent l\'outil au quotidien, puis conçu l\'interface et l\'expérience '
      + 'utilisateur avant de développer l\'ensemble : front en Vue.js/Quasar, API en '
      + 'Symfony, base PostgreSQL.',
      'Résultat: avant la refonte, certains utilisateurs ne se connectaient parfois '
      + 'pendant plusieurs mois. Après mise en production, l\'usage est devenu quasi '
      + 'quotidien. J\'ai aussi profité du projet pour dockeriser l\'application et '
      + 'mettre en place une pipeline CI/CD avec GitLab CI, qui n\'existaient pas avant.'
    ],
    features: [
      'Recueil des besoins auprès des utilisateurs',
      'Conception UX/UI',
      'Saisie et gestion des temps de travail',
      'Génération automatisée de rapports mensuels',
      'Tableaux de bord analytiques',
      'Dockerisation de l\'application',
      'Pipeline CI/CD'
    ],
    repo: '',
    links: [],
    images: [
      { src: 'projects/gestion-interne-alternance/projet-caf.png', alt: 'Application de gestion interne' }
    ]
  },
  {
    slug: 'domotique-iot',
    title: 'Domotique IoT',
    category: 'iot',
    tagline: 'Serveur personnel auto-hébergé: domotique Zigbee via Home Assistant, automatisations via n8n.',
    description:
      'Infrastructure personnelle évolutive sur Raspberry Pi: Home Assistant pour la domotique '
      + '(capteurs/actionneurs Arduino, réseau Zigbee) et n8n pour des automatisations de workflows '
      + 'plus générales. Le projet évolue en continu depuis deux ans: nouveaux services, '
      + 'automatisations, fiabilisation du réseau,...',
    stack: ['Raspberry Pi', 'Arduino', 'Zigbee', 'Home Assistant', 'n8n'],
    duration: '2 ans, évolutif',
    year: '2025',
    role: 'Conception & administration (projet personnel)',
    status: 'ongoing',
    featured: false,
    highlights: [
      'Serveur personnel auto-hébergé sur Raspberry Pi (Home Assistant + n8n)',
      'Réseau Zigbee avec capteurs/actionneurs',
      'Projet évolutif depuis deux ans: nouveaux services, automatisations, fiabilisation,...'
    ],
    overview: [
      'Un Raspberry Pi fait office de serveur personnel, hébergeant plusieurs services: '
      + 'Home Assistant pour la domotique (réseau Zigbee, capteurs et actionneurs Arduino), '
      + 'et n8n pour des automatisations de workflows en dehors du périmètre domotique.',
      'Le projet est volontairement évolutif: l\'enjeu n\'est pas une fonctionnalité isolée '
      + 'mais la fiabilité de l\'ensemble, un réseau stable, des services qui tournent sans '
      + 'surveillance, et de nouveaux ajouts au fil du temps.'
    ],
    features: [
      'Raspberry Pi en serveur personnel auto-hébergé',
      'Home Assistant: supervision et automatisations domotique',
      'Réseau Zigbee avec capteurs/actionneurs',
      'n8n: automatisations de workflows personnels',
      'Projet évolutif avec ajouts réguliers'
    ],
    repo: '',
    links: [],
    images: [{ src: 'projects/domotique-iot/Home-Assistant.png', alt: 'Tableau de bord Home Assistant du système domotique IoT' }]
  },
  {
    slug: 'poc-quasar',
    title: 'POC Quasar cross-platform',
    category: 'tools',
    tagline: 'Web, mobile et desktop depuis une base de code unique, projet de master, choix de l\'outil libre.',
    description:
      'Dans le cadre d\'un projet de master où le choix de l\'outil à présenter était libre, '
      + 'j\'ai choisi Quasar, un framework peu connu mais que j\'utilisais déjà en alternance, '
      + 'pour démontrer mon expertise dessus. Proof of concept cross-platform: une seule base '
      + 'de code Vue.js déployée sur le web (SPA), le mobile (Capacitor) et le desktop (Electron).',
    stack: ['Quasar', 'Vue.js', 'Capacitor', 'Electron'],
    duration: '2 semaines',
    year: '2025',
    role: 'Conception & développement (solo), projet de master',
    status: 'done',
    featured: false,
    highlights: [
      'Choix libre de l\'outil à présenter: Quasar, framework déjà utilisé en alternance',
      'Une base de code Vue.js déployée sur web, mobile (Capacitor) et desktop (Electron)',
      'Évaluation critique: partage de code réel, divergences par plateforme, coût de maintenance'
    ],
    overview: [
      'Pour ce projet de master, le choix de l\'outil à présenter était libre. J\'ai choisi '
      + 'Quasar, un framework relativement peu connu, mais que j\'utilisais déjà '
      + 'professionnellement en alternance, pour approfondir et démontrer mon expertise '
      + 'dessus plutôt que de découvrir un nouvel outil en surface.',
      'Le POC consiste en une seule base de code Vue.js déployée sur trois cibles: web (SPA), '
      + 'mobile (Capacitor) et desktop (Electron). L\'objectif était d\'en mesurer les limites '
      + 'réelles, partage de code effectif, divergences par plateforme et coût de maintenance '
    ],
    features: [
      'Base de code Vue.js unique',
      'Cibles web (SPA), mobile (Capacitor) et desktop (Electron)',
      'Évaluation du partage de code et du coût de maintenance'
    ],
    repo: 'https://github.com/HijackCs/poc-quasar',
    links: [],
    images: [{ src: 'projects/poc-quasar/poc.png', alt: 'POC Quasar cross-platform sur mobile et desktop' }]
  },
  {
    slug: 'alternant-app',
    title: 'AlternantApp',
    category: 'tools',
    tagline: 'Outil perso de suivi des heures d\'alternance et du solde de récupération.',
    description:
      'Outil de suivi des heures d\'alternance: saisie des heures travaillées, calcul '
      + 'automatique du solde de bonus/malus, vue récapitulative. Construit pour un besoin personnel, '
      + 'utilisé pendant toute la durée de l\'alternance.',
    stack: ['Quasar', 'Vue.js'],
    duration: '1 semaine',
    year: '2024',
    role: 'Conception & développement (solo, initiative personnelle)',
    status: 'done',
    featured: false,
    highlights: [
      'Construit en 1 semaine pour un besoin personnel concret',
      'Utilisé quotidiennement pendant toute la durée de l\'alternance',
      'De l\'idée à l\'usage réel, sans intermédiaire'
    ],
    overview: [
      'AlternantApp est né d\'un besoin personnel: suivre précisément mes heures d\'alternance '
      + 'et mon solde de bonus/malus, sans tableur approximatif.',
      'Conçu et développé en une semaine, l\'outil m\'a accompagné au quotidien pendant toute '
      + 'la durée de l\'alternance.'
    ],
    features: [
      'Saisie des heures travaillées',
      'Calcul automatique du solde de bonus/malus',
      'Vue récapitulative du solde'
    ],
    repo: 'https://github.com/HijackCs/AlternantApp',
    links: [],
    images: [{ src: 'projects/alternant-app/alternantApp.png', alt: 'Interface de l\'application AlternantApp' }]
  },
  {
    slug: 'boutique-jcbb',
    title: 'Boutique Club Running JCBB',
    category: 'web',
    tagline: 'Boutique/catalogue pour un club de running, commande par email sans paiement en ligne.',
    description:
      'Boutique catalogue pour un club de running : consultation des produits et commande '
      + 'sans paiement en ligne, un choix adapté au volume et au fonctionnement associatif '
      + 'du club. Nuxt.js, Tailwind et Pinia, déployée sur Vercel en deux jours.',
    stack: ['Nuxt.js', 'Tailwind', 'Pinia', 'Vercel'],
    duration: '2 jours',
    year: '2026',
    role: 'Conception & développement (solo)',
    status: 'done',
    featured: false,
    highlights: [
      'Du catalogue à la commande, livré en 2 jours',
      'Parcours boutique complet sans paiement en ligne, dimensionné au besoin réel du club',
      'Notifications email automatiques (client + gestionnaire)'
    ],
    overview: [
      `Cette boutique a été réalisée pour le Jogging Club Billy-Berclau afin de simplifier la gestion des commandes d'équipements du club. Le site présente les vêtements disponibles, leurs prix et leurs variantes dans une interface claire et responsive.`,
      `L'utilisateur peut parcourir le catalogue, consulter une fiche produit, choisir son modèle, sa taille et la quantité souhaitée, puis ajouter ses articles au panier. Le parcours a été pensé comme une boutique en ligne, mais sans paiement intégré, la validation déclenche l'envoi d'un récapitulatif par email au client ainsi qu'une notification côté club pour traiter la demande.`
    ],
    features: [
      'Catalogue d\'équipements avec visuels et tarifs',
      'Sélection du modèle, de la taille et de la quantité',
      'Panier avant validation de la commande',
      'Envoi d\'un email récapitulatif au client',
      'Envoi d\'un email de notification au gestionnaire du club'
    ],
    repo: 'https://github.com/HijackCs/JCBB_club_shop',
    links: [{ label: 'Voir le site', url: 'https://jcbb-club-shop.vercel.app/', icon: 'external' }],
    images: [
      { src: '/projects/boutique-jcbb/JCBB-home.png', alt: 'page accueil de la boutique' },
      { src: '/projects/boutique-jcbb/JCBB-product.jpeg', alt: 'page produit' },
      { src: '/projects/boutique-jcbb/JCBB-cart.jpeg', alt: 'panier' }
    ]
  }
]

export const featuredProjects = projects.filter(p => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

/** Projet précédent / suivant pour la navigation en bas de page détail */
export function getAdjacentProjects(slug: string): { prev: Project | null, next: Project | null } {
  const index = projects.findIndex(p => p.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null
  }
}
