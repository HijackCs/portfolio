<template>
  <component
    :is="rootIs"
    :to="isFeatured ? to : undefined"
    :type="zoomable ? 'button' : undefined"
    class="group relative block w-full overflow-hidden rounded-xl border border-line bg-surface text-left"
    :class="[
      orientation === 'portrait' ? [portraitAspect, 'max-h-[640px]'] : aspect,
      zoomable ? 'cursor-zoom-in' : ''
    ]"
    :aria-label="zoomable ? `Agrandir : ${alt || label}` : undefined"
    @click="zoomable && emit('open')"
  >
    <template v-if="src">

      <NuxtImg
        :src="src"
        alt=""
        aria-hidden="true"
        loading="lazy"
        class="absolute inset-0 size-full scale-110 object-cover opacity-25 blur-2xl"
      />
      <NuxtImg
        ref="imgEl"
        :src="src"
        :alt="alt"
        loading="lazy"
        class="relative z-10 size-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        @load="onLoad"
      />
      <!-- Indicateur d'agrandissement (mode zoom uniquement) -->
      <span
        v-if="zoomable"
        class="absolute right-3 top-3 z-20 flex size-9 items-center justify-center rounded-full border border-line bg-bg/70 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <svg
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
          />
          <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
        </svg>
      </span>
    </template>
    <template v-else>
      <div class="absolute inset-0 bg-blueprint opacity-60" />
      <div
        class="absolute inset-0 bg-gradient-to-br opacity-[0.12]"
        :class="flip ? 'from-secondary to-primary' : 'from-primary to-secondary'"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span class="block size-4 rotate-45 bg-gradient-signature transition-transform duration-500 group-hover:rotate-[135deg]" />
        <span class="font-mono text-xs text-muted">{{ label }}</span>
      </div>
    </template>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src?: string
  alt?: string
  label?: string
  aspect?: string
  portraitAspect?: string
  flip?: boolean
  /**
   * Mode vedette (home) : le visuel devient un lien vers la page détail
   * (`to`) au lieu d'ouvrir la lightbox au clic.
   */
  isFeatured?: boolean
  /** Cible du lien en mode vedette */
  to?: string
}>(), {
  src: '',
  alt: '',
  label: 'visuel à venir',
  aspect: 'aspect-[16/10]',
  portraitAspect: 'aspect-[3/4]',
  flip: false,
  isFeatured: false,
  to: ''
})

const emit = defineEmits<{ open: [] }>()

const NuxtLink = resolveComponent('NuxtLink')

// Mode vedette → lien ; sinon image cliquable (zoom) ou simple placeholder
const rootIs = computed(() => {
  if (props.isFeatured) return NuxtLink
  return props.src ? 'button' : 'div'
})
// Clic = ouverture lightbox (uniquement hors mode vedette, et avec une image)
const zoomable = computed(() => !props.isFeatured && !!props.src)

// 'landscape' par défaut pour éviter un saut de mise en page avant chargement
const orientation = ref<'landscape' | 'portrait'>('landscape')
const imgEl = ref<{ $el?: HTMLImageElement } | null>(null)

function detect(el?: HTMLImageElement | null) {
  if (el && el.naturalWidth && el.naturalHeight) {
    orientation.value = el.naturalHeight > el.naturalWidth ? 'portrait' : 'landscape'
  }
}

function onLoad(event: Event) {
  detect(event.target as HTMLImageElement | null)
}

onMounted(() => {
  // L'image peut être déjà en cache : l'événement load a alors pu
  // se déclencher avant l'hydratation, on relit donc l'élément monté.
  detect(imgEl.value?.$el)
})
</script>
