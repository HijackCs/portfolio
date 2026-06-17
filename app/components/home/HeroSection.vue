<template>
  <section
    ref="root"
    class="relative flex min-h-svh items-center overflow-hidden"
  >
    <!-- Fond : grille blueprint + orbes gradient -->
    <div
      data-hero-bg
      class="absolute inset-0"
    >
      <div class="absolute inset-0 bg-blueprint mask-fade-edges" />
      <div
        class="orb absolute -left-32 top-1/4 size-96 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        class="orb-slow absolute -right-24 bottom-1/4 size-80 rounded-full bg-secondary/20 blur-[120px]"
      />
    </div>

    <div class="relative mx-auto w-full max-w-6xl px-6 pt-16">
      <p
        data-hero-kicker
        class="mb-6 font-mono text-xs tracking-[0.25em] text-primary uppercase"
      >
        hugoschroder.dev
      </p>

      <h1 class="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
        <span class="block overflow-hidden">
          <span
            v-for="(char, i) in line1"
            :key="`l1-${i}`"
            data-hero-char
            class="inline-block whitespace-pre"
          >{{ char }}</span>
        </span>
        <span class="block overflow-hidden">
          <span
            v-for="(char, i) in line2"
            :key="`l2-${i}`"
            data-hero-char
            class="inline-block whitespace-pre"
            :class="i >= gradientStart ? 'text-gradient' : ''"
          >{{ char }}</span>
        </span>
      </h1>

      <p
        data-hero-sub
        class="mt-8 max-w-xl text-lg text-muted"
      >
        Ingénieur logiciel - Applications mobiles · SaaS · IoT
      </p>

      <div
        data-hero-cta
        class="mt-10 flex flex-wrap items-center gap-4"
      >
        <NuxtLink
          to="/projects"
          class="group inline-flex items-center gap-2 rounded-lg bg-gradient-signature px-6 py-3 font-display text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-glow"
        >
          Voir mes projets
          <svg
            class="size-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              d="M2 8h11M9 4l4 4-4 4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center rounded-lg border border-line px-6 py-3 font-display text-sm font-semibold text-ink transition-colors duration-300 hover:border-primary/60 hover:text-primary"
        >
          Me contacter
        </NuxtLink>
      </div>
    </div>

    <div
      data-hero-scroll
      class="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div class="h-10 w-px bg-gradient-to-b from-muted/0 via-muted/60 to-muted/0" />
    </div>
  </section>
</template>

<script setup lang="ts">
const root = ref<HTMLElement | null>(null)

const line1 = 'Je construis des apps.'.split('')
const line2Text =  'Du mobile au web.'
const line2 = line2Text.split('')
// "production." en gradient
const gradientStart = line2Text.indexOf('mobile')

const { gsap, prefersReducedMotion } = useGsap()
let ctx: gsap.Context | undefined

onMounted(() => {
  if (!root.value || prefersReducedMotion()) return

  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('[data-hero-bg]', { opacity: 0, duration: 0.5 })
      .from('[data-hero-kicker]', { opacity: 0, y: 12, duration: 0.35 }, '-=0.2')
      .from('[data-hero-char]', {
        yPercent: 110,
        opacity: 0,
        duration: 0.45,
        stagger: 0.012
      }, '-=0.15')
      .from('[data-hero-sub]', { opacity: 0, y: 16, duration: 0.4 }, '-=0.25')
      .from('[data-hero-cta]', { opacity: 0, y: 16, duration: 0.4 }, '-=0.25')
      .from('[data-hero-scroll]', { opacity: 0, duration: 0.3 }, '-=0.1')
  }, root.value)
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.orb {
  animation: drift 14s ease-in-out infinite alternate;
}

.orb-slow {
  animation: drift 18s ease-in-out infinite alternate-reverse;
}

@keyframes drift {
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(40px, -30px);
  }
}
</style>
