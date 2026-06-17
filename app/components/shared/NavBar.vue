<template>
  <header
    class="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/75 backdrop-blur-md"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <NuxtLink
        to="/"
        class="group flex items-center gap-3"
        aria-label="Accueil"
      >
        <span class="block size-3.5 rotate-45 bg-gradient-signature transition-transform duration-300 group-hover:rotate-[225deg]" />
        <span class="font-mono text-sm tracking-tight text-ink">hugo<span class="text-muted">.</span>schroder</span>
      </NuxtLink>

      <ul class="hidden items-center gap-8 font-mono text-[0.8rem] tracking-wide md:flex">
        <li
          v-for="item in links"
          :key="item.to"
        >
          <NuxtLink
            :to="item.to"
            class="text-muted transition-colors duration-200 hover:text-ink"
            active-class="text-ink"
          >
            <span class="text-primary/70">/</span>{{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <button
        class="flex flex-col gap-1.5 p-2 md:hidden"
        :aria-expanded="open"
        aria-label="Menu"
        @click="open = !open"
      >
        <span
          class="block h-px w-6 bg-ink transition-transform duration-300"
          :class="open ? 'translate-y-[3.5px] rotate-45' : ''"
        />
        <span
          class="block h-px w-6 bg-ink transition-transform duration-300"
          :class="open ? '-translate-y-[3.5px] -rotate-45' : ''"
        />
      </button>
    </nav>

    <Transition name="menu">
      <div
        v-if="open"
        class="border-t border-line/60 bg-bg/95 px-6 py-4 backdrop-blur-md md:hidden"
      >
        <ul class="flex flex-col gap-4 font-mono text-sm">
          <li
            v-for="item in links"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="block py-1 text-muted transition-colors hover:text-ink"
              active-class="text-ink"
              @click="open = false"
            >
              <span class="text-primary/70">/</span>{{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  open.value = false
})

const links = [
  { to: '/projects', label: 'projets' },
  { to: '/about', label: 'a-propos' },
  { to: '/contact', label: 'contact' }
]
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
