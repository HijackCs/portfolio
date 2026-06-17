<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="card group relative flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
  >
    <div class="flex items-start justify-between gap-3">
      <span class="font-mono text-xs text-primary">{{ categoryLabels[project.category] }}</span>
      <span
        class="inline-flex items-center gap-1.5 font-mono text-[0.68rem]"
        :class="project.status === 'ongoing' ? 'text-secondary' : 'text-muted'"
      >
        <span
          class="block size-1.5 rounded-full"
          :class="project.status === 'ongoing' ? 'animate-pulse bg-secondary' : 'bg-muted/60'"
        />
        {{ statusLabels[project.status] }}
      </span>
    </div>

    <h3 class="mt-4 font-display text-xl font-semibold tracking-tight">
      {{ project.title }}
    </h3>

    <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">
      {{ project.tagline }}
    </p>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="tech in project.stack"
        :key="tech"
        class="badge"
      >{{ tech }}</span>
    </div>

    <div class="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-xs text-muted">
      <span>durée — {{ project.duration }}</span>
      <span class="inline-flex items-center gap-1 text-muted transition-colors group-hover:text-primary">
        détail
        <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { categoryLabels, statusLabels, type Project } from '~/data/projects'

defineProps<{ project: Project }>()
</script>
