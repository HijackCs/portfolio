<template>
  <section
    ref="root"
    class="mx-auto max-w-6xl px-6 py-24"
  >
    <div
      data-reveal
      class="grid items-center gap-10 rounded-2xl border border-line bg-surface p-8 sm:p-12 md:grid-cols-[auto_1fr]"
    >
      <div class="relative mx-auto size-40 shrink-0 md:size-48">
        <div class="absolute -inset-1.5 rounded-2xl bg-gradient-signature opacity-40 blur-lg" />
        <div
          class="relative flex size-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface-raised"
        >
          <span class="font-display text-4xl font-bold text-gradient">HS</span>
          <NuxtImg
            v-if="!imgError"
            src="/hugo.webp"
            alt="Hugo Schroder"
            sizes="160px md:192px"
            class="absolute inset-0 size-full object-cover object-center"
            @error="imgError = true"
          />
        </div>
      </div>

      <div>
        <p class="font-mono text-xs tracking-[0.25em] text-primary uppercase">
          // à propos
        </p>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-ink/90">
          Master en ingénierie logicielle pour l'internet, deux ans d'alternance
          dans une administration publique, en autonomie sur plusieurs projets,
          dont une refonte complète de zéro. Curieux autant en informatique qu'en
          dehors: du natif iOS à la domotique, et un peu de trail entre les deux.
        </p>
        <NuxtLink
          to="/about"
          class="group mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          parcours complet <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
useScrollReveal(root)

const imgError = ref(false)
</script>
