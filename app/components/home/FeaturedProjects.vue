<template>
  <section
    ref="root"
    class="mx-auto max-w-6xl px-6 py-24"
  >
    <p
      data-reveal
      class="font-mono text-xs tracking-[0.25em] text-primary uppercase"
    >
      // sélection
    </p>
    <div
      data-reveal
      class="mt-3 flex flex-wrap items-end justify-between gap-4"
    >
      <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Projets en vedette
      </h2>
      <NuxtLink
        to="/projects"
        class="group font-mono text-xs text-muted transition-colors hover:text-ink"
      >
        tous les projets <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
      </NuxtLink>
    </div>

    <div class="mt-14 flex flex-col gap-20">
      <article
        v-for="(project, index) in featuredProjects"
        :key="project.slug"
        data-reveal
        class="grid items-center gap-8 lg:grid-cols-12"
      >
        <ProjectsProjectMedia
          is-featured
          :to="`/projects/${project.slug}`"
          :src="project.images?.[0]?.src"
          :alt="project.images?.[0]?.alt"
          :label="project.slug"
          aspect="aspect-[4/3]"
          :flip="index % 2 === 1"
          class="lg:col-span-7 lg:transition-transform lg:duration-500 lg:hover:-translate-y-1"
          :class="index % 2 === 1 ? 'lg:order-2' : ''"
        />

        <!-- Détails -->
        <div
          class="lg:col-span-5"
          :class="index % 2 === 1 ? 'lg:order-1' : ''"
        >
          <div class="flex items-center gap-3 font-mono text-xs text-muted">
            <span class="text-primary">{{ String(index + 1).padStart(2, '0') }}</span>
            <span>{{ categoryLabels[project.category] }}</span>
            <span aria-hidden="true">·</span>
            <span>{{ project.duration }}</span>
          </div>

          <h3 class="mt-3 font-display text-2xl font-bold tracking-tight">
            {{ project.title }}
          </h3>

          <p class="mt-4 text-sm leading-relaxed text-muted">
            {{ project.description }}
          </p>

          <ul
            v-if="project.highlights"
            class="mt-5 flex flex-col gap-2"
          >
            <li
              v-for="highlight in project.highlights"
              :key="highlight"
              class="flex items-start gap-2.5 text-sm text-ink/90"
            >
              <span class="mt-[7px] block size-1.5 shrink-0 rotate-45 bg-gradient-signature" />
              {{ highlight }}
            </li>
          </ul>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="badge"
            >{{ tech }}</span>
          </div>

          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="group/link mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
          >
            voir le projet
            <span class="inline-block transition-transform group-hover/link:translate-x-1">→</span>
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { featuredProjects, categoryLabels } from '~/data/projects'

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>
