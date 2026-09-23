<template>
  <div class="mx-auto max-w-4xl px-6 pb-24 pt-32">
    <p class="font-mono text-xs tracking-[0.25em] text-primary uppercase">
      // curriculum vitae
    </p>
    <h1 class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
      Mon CV
    </h1>
    <p class="mt-4 text-muted">
      Consultez mon parcours et mes compétences ou téléchargez mon CV au format PDF.
    </p>

    <div class="mt-8 flex flex-wrap items-center gap-4">
      <a
        href="/CV.pdf"
        download="CV-Hugo-Schroder.pdf"
        class="inline-flex items-center justify-center rounded-lg bg-gradient-signature px-6 py-3 font-medium text-white transition-shadow hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        Télécharger le CV (PDF)
      </a>
      <a
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        Ouvrir le PDF dans un nouvel onglet
      </a>
    </div>

    <div class="mt-10 overflow-hidden rounded-xl border border-line bg-surface">
      <object
        data="/CV.pdf"
        type="application/pdf"
        title="CV de Hugo Schroder"
        class="block h-[75vh] min-h-[32rem] w-full"
      >
        <p class="p-8 leading-relaxed text-muted">
          Votre navigateur ne permet pas d'afficher le PDF ici.
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary underline underline-offset-4"
          >
            Ouvrir le CV dans un nouvel onglet
          </a>
          ou utilisez le bouton de téléchargement ci-dessus.
        </p>
      </object>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'CV - Hugo Schroder'
const description = 'Consultez et téléchargez le CV de Hugo Schroder, ingénieur logiciel, au format PDF.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>
