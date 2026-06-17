<template>
  <section
    ref="root"
    class="mx-auto max-w-6xl px-6 py-24"
  >
    <p
      data-reveal
      class="font-mono text-xs tracking-[0.25em] text-primary uppercase"
    >
      // domaines
    </p>
    <h2
      data-reveal
      class="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
    >
      Ce que je construis
    </h2>

    <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="pillar in pillars"
        :key="pillar.title"
        data-reveal
        class="group rounded-xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-primary/40"
      >
        <div
          class="flex size-11 items-center justify-center rounded-lg border border-line text-primary transition-colors duration-300 group-hover:border-primary/40"
        >
          <!-- eslint-disable vue/no-v-html -->
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="pillar.icon"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
        <h3 class="mt-5 font-display text-lg font-semibold">
          {{ pillar.title }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          {{ pillar.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
useScrollReveal(root)

// Icônes : paths SVG inline custom (stroke 24x24)
const pillars = [
  {
    title: 'Applications mobiles',
    description: 'iOS natif en SwiftUI et Android en Java. Du prototype à la publication sur les stores.',
    icon: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 5h3M12 18.5h.01"/>'
  },
  {
    title: 'SaaS & Web Apps',
    description: 'Applications web métier avec Vue.js, Nuxt et Symfony. Architecture API-first, données PostgreSQL.',
    icon: '<rect x="2.5" y="4" width="19" height="16" rx="2"/><path d="M2.5 9h19M6 6.5h.01M8.5 6.5h.01"/>'
  },
  {
    title: 'IoT & Systèmes embarqués',
    description: 'Capteurs, Raspberry Pi, Arduino et réseaux Zigbee. Supervision et automatisation Home Assistant.',
    icon: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/>'
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Conteneurisation Docker, pipelines CI/CD, déploiements.',
    icon: '<path d="M4 17l5-5-5-5M11 19h9"/>'
  }
]
</script>
