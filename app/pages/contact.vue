<template>
  <div
    ref="root"
    class="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 pb-24 pt-32"
  >
    <p
      data-reveal
      class="font-mono text-xs tracking-[0.25em] text-primary uppercase"
    >
      // contact
    </p>
    <h1
      data-reveal
      class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
    >
      Travaillons <SharedGradientText>ensemble</SharedGradientText>
    </h1>
    <p
      data-reveal
      class="mt-5 max-w-xl text-muted"
    >
      Ouvert aux missions et opportunités autour des applications mobiles, des produits
      SaaS et des systèmes IoT, en startup ou en équipe produit.
    </p>

    <div class="mt-12 flex flex-col gap-4">
      <a
        v-for="channel in channels"
        :key="channel.label"
        data-reveal
        :href="channel.href"
        :target="channel.external ? '_blank' : undefined"
        :rel="channel.external ? 'noopener' : undefined"
        class="group flex items-center justify-between rounded-xl border border-line bg-surface px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
      >
        <div class="flex items-center gap-4">
          <span class="font-mono text-xs text-primary">{{ channel.label }}</span>
          <span class="font-display text-base font-semibold sm:text-lg">{{ channel.value }}</span>
        </div>
        <span class="font-mono text-muted transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Hugo Schroder',
  description: 'Contacter Hugo Schroder, ingénieur logiciel — missions mobiles, SaaS et IoT.'
})

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)

const channels = [
  { label: 'email', value: 'contact@hugoschroder.dev', href: 'mailto:contact@hugoschroder.dev', external: false },
  { label: 'github', value: 'github.com/HijackCs', href: 'https://github.com/HijackCs', external: true },
  { label: 'linkedin', value: 'linkedin.com/in/hugo-schroder', href: 'https://www.linkedin.com/in/hugo-schroder', external: true }
]
</script>
