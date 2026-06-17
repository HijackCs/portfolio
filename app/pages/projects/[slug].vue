<template>
  <div
    ref="root"
    class="mx-auto max-w-6xl px-6 pb-24 pt-28"
  >
    <!-- Retour -->
    <NuxtLink
      to="/projects"
      class="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
    >
      <span class="inline-block transition-transform group-hover:-translate-x-1">←</span>
      tous les projets
    </NuxtLink>

    <!-- En-tête -->
    <header
      data-reveal
      class="mt-8"
    >
      <div class="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
        <span class="text-primary">{{ categoryLabels[project.category] }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ project.year ?? project.duration }}</span>
        <span aria-hidden="true">·</span>
        <span
          class="inline-flex items-center gap-1.5"
          :class="project.status === 'ongoing' ? 'text-secondary' : 'text-muted'"
        >
          <span
            class="block size-1.5 rounded-full"
            :class="project.status === 'ongoing' ? 'animate-pulse bg-secondary' : 'bg-muted/60'"
          />
          {{ statusLabels[project.status] }}
        </span>
      </div>

      <h1 class="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {{ project.title }}
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-muted">
        {{ project.tagline }}
      </p>

      <!-- Liens externes -->
      <div
        v-if="hasLinks"
        class="mt-7 flex flex-wrap gap-3"
      >
        <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="group inline-flex items-center gap-2 rounded-lg bg-gradient-signature px-5 py-2.5 font-display text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-glow"
        >
          <!-- paths SVG statiques, pas d'input utilisateur -->
          <!-- eslint-disable vue/no-v-html -->
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            v-html="linkIcon(link.icon)"
          />
          <!-- eslint-enable vue/no-v-html -->
          {{ link.label }}
        </a>
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 font-display text-sm font-semibold text-ink transition-colors duration-300 hover:border-primary/60 hover:text-primary"
        >
          <!-- icône statique GitHub -->
          <!-- eslint-disable vue/no-v-html -->
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            v-html="githubIcon"
          />
          <!-- eslint-enable vue/no-v-html -->
          Code source
        </a>
      </div>
    </header>

    <!-- Visuel principal -->
    <div
      data-reveal
      class="mt-12"
    >
      <ProjectsProjectMedia
        :src="primaryImage?.src"
        :alt="primaryImage?.alt"
        :label="project.slug"
        aspect="aspect-[16/9]"
        @open="lightboxIndex = 0"
      />
    </div>

    <!-- Corps : overview + méta -->
    <div class="mt-16 grid gap-12 lg:grid-cols-12">
      <div
        data-reveal
        class="lg:col-span-7"
      >
        <h2 class="font-display text-2xl font-bold tracking-tight">
          Le projet
        </h2>
        <div class="mt-5 space-y-4 leading-relaxed text-muted">
          <p
            v-for="(para, i) in overviewParagraphs"
            :key="i"
          >
            {{ para }}
          </p>
        </div>

        <template v-if="project.features?.length">
          <h2 class="mt-12 font-display text-2xl font-bold tracking-tight">
            Ce que j’ai construit
          </h2>
          <ul class="mt-5 flex flex-col gap-3">
            <li
              v-for="feature in project.features"
              :key="feature"
              class="flex items-start gap-3 text-sm text-ink/90"
            >
              <span class="mt-[7px] block size-1.5 shrink-0 rotate-45 bg-gradient-signature" />
              {{ feature }}
            </li>
          </ul>
        </template>
      </div>

      <!-- Carte méta -->
      <aside
        data-reveal
        class="lg:col-span-5"
      >
        <div class="rounded-xl border border-line bg-surface p-6 lg:sticky lg:top-24">
          <dl class="flex flex-col divide-y divide-line">
            <div class="flex items-center justify-between py-3 first:pt-0">
              <dt class="font-mono text-xs text-muted">
                catégorie
              </dt>
              <dd class="text-sm">
                {{ categoryLabels[project.category] }}
              </dd>
            </div>
            <div class="flex items-center justify-between py-3">
              <dt class="font-mono text-xs text-muted">
                durée
              </dt>
              <dd class="text-sm">
                {{ project.duration }}
              </dd>
            </div>
            <div
              v-if="project.year"
              class="flex items-center justify-between py-3"
            >
              <dt class="font-mono text-xs text-muted">
                période
              </dt>
              <dd class="text-sm">
                {{ project.year }}
              </dd>
            </div>
            <div
              v-if="project.role"
              class="flex items-start justify-between gap-4 py-3"
            >
              <dt class="font-mono text-xs text-muted">
                rôle
              </dt>
              <dd class="text-right text-sm">
                {{ project.role }}
              </dd>
            </div>
            <div class="flex items-center justify-between py-3 last:pb-0">
              <dt class="font-mono text-xs text-muted">
                statut
              </dt>
              <dd
                class="text-sm"
                :class="project.status === 'ongoing' ? 'text-secondary' : 'text-ink'"
              >
                {{ statusLabels[project.status] }}
              </dd>
            </div>
          </dl>

          <div class="mt-5 border-t border-line pt-5">
            <p class="font-mono text-xs text-muted">
              stack
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="badge"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- Galerie -->
    <section
      v-if="galleryImages.length"
      data-reveal
      class="mt-20"
    >
      <h2 class="font-display text-2xl font-bold tracking-tight">
        Aperçus
      </h2>
      <div class="mt-6 grid gap-5 sm:grid-cols-2">
        <ProjectsProjectMedia
          v-for="(image, i) in galleryImages"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          :flip="i % 2 === 1"
          @open="lightboxIndex = i + 1"
        />
      </div>
    </section>

    <!-- Lightbox : navigue sur l'ensemble des images du projet -->
    <ProjectsProjectLightbox
      v-model="lightboxIndex"
      :images="images"
    />

    <!-- Navigation prev / next -->
    <nav class="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
      <NuxtLink
        v-if="prev"
        :to="`/projects/${prev.slug}`"
        class="group rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
      >
        <span class="font-mono text-xs text-muted">← précédent</span>
        <p class="mt-1 font-display font-semibold">{{ prev.title }}</p>
      </NuxtLink>
      <span v-else />

      <NuxtLink
        v-if="next"
        :to="`/projects/${next.slug}`"
        class="group rounded-xl border border-line bg-surface p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow sm:col-start-2"
      >
        <span class="font-mono text-xs text-muted">suivant →</span>
        <p class="mt-1 font-display font-semibold">{{ next.title }}</p>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {
  getProject,
  getAdjacentProjects,
  categoryLabels,
  statusLabels,
  type ProjectLink
} from '~/data/projects'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const project = computed(() => getProject(slug.value))

// 404 propre si le slug n'existe pas
if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable', fatal: true })
}

// Non-null à partir d'ici (garde au-dessus)
const current = project as ComputedRef<NonNullable<typeof project.value>>

const overviewParagraphs = computed(() =>
  current.value.overview?.length ? current.value.overview : [current.value.description]
)

const images = computed(() => current.value.images ?? [])
const primaryImage = computed(() => images.value[0] ?? null)
const galleryImages = computed(() => images.value.slice(1))
const hasLinks = computed(() => !!current.value.links?.length || !!current.value.repo)

// Index de l'image ouverte en lightbox (null = fermée)
const lightboxIndex = ref<number | null>(null)
// On referme la lightbox si on change de projet
watch(slug, () => {
  lightboxIndex.value = null
})

const adjacent = computed(() => getAdjacentProjects(slug.value))
const prev = computed(() => adjacent.value.prev)
const next = computed(() => adjacent.value.next)

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)

useSeoMeta({
  title: () => `${current.value.title} - Hugo Schroder`,
  description: () => current.value.tagline,
  ogTitle: () => `${current.value.title} - Hugo Schroder`,
  ogDescription: () => current.value.tagline
})

const githubIcon
  = '<path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.52.1.71-.23.71-.5v-1.76c-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.66-1.4-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.07a9.9 9.9 0 0 1 5.24 0c2-1.35 2.88-1.07 2.88-1.07.57 1.45.21 2.52.1 2.79.67.74 1.08 1.67 1.08 2.82 0 4.02-2.45 4.9-4.79 5.16.38.33.71.97.71 1.96v2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5Z"/>'

function linkIcon(icon?: ProjectLink['icon']): string {
  if (icon === 'appstore') {
    return '<path d="M16.5 3.5c.2 1.2-.3 2.4-1 3.2-.8.9-2 1.5-3.2 1.4-.2-1.1.4-2.3 1.1-3.1.8-.9 2-1.4 3.1-1.5Z"/><path d="M19.5 17c-.5 1.2-.8 1.7-1.5 2.7-1 1.5-2.4 3.3-4.1 3.3-1.5 0-1.9-1-4-1-2 0-2.5 1-4 1-1.7 0-3-1.6-4-3.1-2.8-4-3.1-8.8-1.4-11.3 1-1.5 2.5-2.3 4-2.3 1.5 0 2.5 1 3.8 1 1.2 0 2-1 3.8-1 1.3 0 2.7.7 3.7 2-3.3 1.8-2.7 6.4 0 7.7Z"/>'
  }
  if (icon === 'play') {
    return '<polygon points="6 4 20 12 6 20 6 4"/>'
  }
  // external
  return '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>'
}
</script>
