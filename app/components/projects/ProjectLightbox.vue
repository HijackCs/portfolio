<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Galerie d’images"
        @click.self="close"
      >
        <!-- Fermer -->
        <button
          ref="closeBtn"
          class="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-line bg-surface/80 text-ink transition-colors hover:border-primary/60 hover:text-primary sm:right-6 sm:top-6"
          aria-label="Fermer"
          @click="close"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <!-- Précédent -->
        <button
          v-if="images.length > 1"
          class="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-ink transition-colors hover:border-primary/60 hover:text-primary sm:left-6"
          aria-label="Image précédente"
          @click="prev"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <!-- Suivant -->
        <button
          v-if="images.length > 1"
          class="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-ink transition-colors hover:border-primary/60 hover:text-primary sm:right-6"
          aria-label="Image suivante"
          @click="next"
        >
          <svg
            class="size-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Image -->
        <figure class="flex max-h-full max-w-full flex-col items-center gap-4">
          <NuxtImg
            v-if="active"
            :key="active.src"
            :src="active.src"
            :alt="active.alt"
            class="max-h-[82vh] max-w-full rounded-xl border border-line object-contain shadow-2xl"
            @click.stop
          />
          <figcaption
            v-if="active?.alt || images.length > 1"
            class="flex items-center gap-3 font-mono text-xs text-muted"
          >
            <span v-if="active?.alt">{{ active.alt }}</span>
            <span
              v-if="active?.alt && images.length > 1"
              aria-hidden="true"
            >·</span>
            <span v-if="images.length > 1">{{ index + 1 }} / {{ images.length }}</span>
          </figcaption>
        </figure>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { ProjectImage } from '~/data/projects'

const props = defineProps<{
  modelValue: number | null
  images: ProjectImage[]
}>()

const emit = defineEmits<{ 'update:modelValue': [value: number | null] }>()

const isOpen = computed(() => props.modelValue !== null)
const index = computed(() => props.modelValue ?? 0)
const active = computed(() => props.images[index.value])

const closeBtn = ref<HTMLButtonElement | null>(null)

function close() {
  emit('update:modelValue', null)
}

function prev() {
  if (props.images.length < 2) return
  emit('update:modelValue', (index.value - 1 + props.images.length) % props.images.length)
}

function next() {
  if (props.images.length < 2) return
  emit('update:modelValue', (index.value + 1) % props.images.length)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

watch(isOpen, (open) => {
  if (!import.meta.client) return
  if (open) {
    document.addEventListener('keydown', onKeydown)
    document.documentElement.style.overflow = 'hidden'
    nextTick(() => closeBtn.value?.focus())
  } else {
    document.removeEventListener('keydown', onKeydown)
    document.documentElement.style.overflow = ''
  }
})

onUnmounted(() => {
  if (!import.meta.client) return
  document.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
