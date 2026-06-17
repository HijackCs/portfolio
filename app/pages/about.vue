<template>
  <div ref="root" class="mx-auto max-w-4xl px-6 pb-24 pt-32">
    <p data-reveal class="font-mono text-xs tracking-[0.25em] text-primary uppercase">
      // à propos
    </p>
    <h1 data-reveal class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
      Parcours
    </h1>
    <p data-reveal class="mt-4 max-w-2xl text-muted">
      Master en ingénierie logicielle pour l'internet, deux ans d'alternance
      dans une administration publique où j'ai travaillé en autonomie sur
      plusieurs projets, dont une refonte complète de zéro. Curieux de nature,
      autant en informatique qu'en dehors: trail, vélo, et tout ce qui demande
      de s'obstiner un peu.
    </p>

    <!-- Timeline -->
    <section class="mt-16">
      <h2 data-reveal class="font-display text-2xl font-bold tracking-tight">
        Timeline
      </h2>
      <ol class="relative mt-8 border-l border-line">
        <li v-for="step in timeline" :key="step.title" data-reveal class="relative pb-10 pl-8 last:pb-0">
          <span class="absolute -left-[5px] top-1.5 block size-2.5 rotate-45 bg-gradient-signature" />
          <span class="font-mono text-xs text-primary">{{ step.period }}</span>
          <h3 class="mt-1 font-display text-lg font-semibold">
            {{ step.title }}
          </h3>
          <p class="mt-1.5 text-sm leading-relaxed text-muted">
            {{ step.description }}
          </p>
        </li>
      </ol>
    </section>

    <!-- Stack par domaine -->
    <section class="mt-20">
      <h2 data-reveal class="font-display text-2xl font-bold tracking-tight">
        Stack maîtrisée
      </h2>
      <div class="mt-8 grid gap-5 sm:grid-cols-2">
        <div v-for="domain in stack" :key="domain.name" data-reveal
          class="rounded-xl border border-line bg-surface p-6">
          <h3 class="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            {{ domain.name }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in domain.items" :key="tech" class="badge">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- En dehors du code -->
    <section class="mt-20">
      <h2 data-reveal class="font-display text-2xl font-bold tracking-tight">
        En dehors du code
      </h2>
      <p data-reveal class="mt-8 rounded-xl border border-line bg-surface p-8 text-base leading-relaxed text-ink/90">
        Beaucoup de trail et de vélo, le genre d'activités où on finit toujours
        par se demander pourquoi on a commencé, et où on recommence quand même.
        Curiosité assez généraliste: ce qui m'intéresse en informatique (comprendre
        toute la chaîne, ne pas rester dans une seule couche) déborde assez naturellement
        sur le reste.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'À propos - Hugo Schroder',
  description: 'Parcours et stack de travail de Hugo Schroder, ingénieur logiciel - mobile, web, IoT et DevOps.'
})

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)

const timeline = [
  {
    period: '2023 - 2025',
    title: 'Master ingénierie logicielle pour l\'internet',
    description: 'Formation en alternance: architecture logicielle, développement web et mobile, Docker, intégration continue.'
  },
  {
    period: '2023 - 2025',
    title: 'Alternance - développeur full-stack',
    description: 'Travail sur plusieurs application web interne en production, dont une refonte complète en autonomie, du recueil de besoin au déploiement. Symfony, Vue.js, PostgreSQL, Docker, GitLab CI.'
  },
  {
    period: 'Depuis 2025',
    title: 'Projets IoT & self-hosting',
    description: 'Système domotique évolutif sur Raspberry Pi (Arduino, Zigbee, Home Assistant, n8n) et infrastructure auto-hébergée.'
  },
  {
    period: '2026',
    title: 'Lenspot - publication App Store',
    description: 'Application iOS native conçue et développée seul en 30 jours, de zéro à l\'App Store, le tout documenté en "build in public" sur mes réseaux sociaux. SwiftUI, SwiftData, StoreKit 2, WidgetKit.'
  }
]

const stack = [
  { name: 'Mobile', items: ['Swift / SwiftUI', 'Java / Android', 'StoreKit 2', 'WidgetKit'] },
  { name: 'Web', items: ['Vue.js', 'Nuxt.js', 'Quasar', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Quarkus', 'Symfony', 'PostgreSQL', 'API REST', 'JWT'] },
  { name: 'Infra / DevOps', items: ['Docker', 'GitLab CI', 'Raspberry Pi', 'Vercel', 'Home Assistant'] },
  { name: 'Langages', items: ['TypeScript', 'Java', 'Swift', 'PHP'] }
]
</script>
