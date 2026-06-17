<template>
  <div
    ref="root"
    class="mx-auto max-w-6xl px-6 pb-24 pt-32"
  >
    <p
      data-reveal
      class="font-mono text-xs tracking-[0.25em] text-primary uppercase"
    >
      // portfolio
    </p>
    <h1
      data-reveal
      class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
    >
      Projets
    </h1>
    <p
      data-reveal
      class="mt-4 max-w-2xl text-muted"
    >
      Applications mobiles publiées, produits web en production, systèmes embarqués
      et outils construits pour des besoins réels.
    </p>

    <div
      data-reveal
      class="mt-10"
    >
      <ProjectsProjectFilter v-model="activeCategory" />
    </div>

    <TransitionGroup
      name="grid"
      tag="div"
      class="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      <ProjectsProjectCard
        v-for="project in filtered"
        :key="project.slug"
        :project="project"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { projects, type ProjectCategory } from '~/data/projects'

useSeoMeta({
  title: 'Projets - Hugo Schroder',
  description: 'Applications mobiles, SaaS, systèmes IoT et outils, les projets de Hugo Schroder, ingénieur logiciel.'
})

const activeCategory = ref<ProjectCategory | null>(null)

const filtered = computed(() =>
  activeCategory.value
    ? projects.filter(p => p.category === activeCategory.value)
    : projects
)

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>

<style scoped>
.grid-move,
.grid-enter-active,
.grid-leave-active {
  transition: opacity 0.25s ease, transform 0.3s ease;
}

.grid-enter-from,
.grid-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.grid-leave-active {
  position: absolute;
}
</style>
