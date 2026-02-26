<template>
  <section :class="sectionClasses">
    <div v-if="effects" class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div class="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
    </div>

    <div :class="containerClasses">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  sectionClass: {
    type: String,
    default: ''
  },
  containerClass: {
    type: String,
    default: ''
  },
  effects: {
    type: Boolean,
    default: true
  }
})

const sectionClasses = computed(() => [
  'relative overflow-hidden',
  props.sectionClass
])

const containerClasses = computed(() => [
  'max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10',
  props.containerClass
])
</script>
