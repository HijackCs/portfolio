<template>
  <footer class="border-t border-line/60">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div class="flex items-center gap-3">
          <span class="block size-3 rotate-45 bg-gradient-signature" />
          <p class="font-mono text-xs text-muted">
            © {{ year }} Hugo Schroder - Ingénieur logiciel
          </p>
        </div>
        <span
          class="hidden text-muted/50 sm:inline"
          aria-hidden="true"
        >·</span>
        <NuxtLink
          to="/mentions-legales"
          class="font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          Mentions légales
        </NuxtLink>
      </div>

      <ul class="flex items-center gap-6 font-mono text-xs">
        <li>
          <a
            href="mailto:contact@hugoschroder.dev"
            class="text-muted transition-colors hover:text-ink"
          >contact@hugoschroder.dev</a>
        </li>
        <li>
          <a
            href="https://github.com/HijackCs"
            target="_blank"
            rel="noopener"
            class="text-muted transition-colors hover:text-ink"
          >GitHub</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hugo-schroder"
            target="_blank"
            rel="noopener"
            class="text-muted transition-colors hover:text-ink"
          >LinkedIn</a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@HijackDev"
            target="_blank"
            rel="noopener"
            class="text-muted transition-colors hover:text-ink"
          >Youtube</a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/hijack_dev"
            target="_blank"
            rel="noopener"
            class="text-muted transition-colors hover:text-ink"
          >Instagram</a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@hijack_dev"
            target="_blank"
            rel="noopener"
            class="text-muted transition-colors hover:text-ink"
          >TikTok</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
