<template>
  <component :is="tag" :class="panelClasses">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  subtle: {
    type: Boolean,
    default: false
  },
  hover: {
    type: Boolean,
    default: true
  },
  padded: {
    type: Boolean,
    default: true
  }
})

const panelClasses = computed(() => {
  const base = [
    'backdrop-blur-xl border rounded-3xl shadow-2xl transition-all duration-500'
  ]

  if (props.subtle) {
    base.push('bg-white/5 border-white/10')
  } else {
    base.push('bg-white/10 border-white/20')
  }

  if (props.padded) {
    base.push('p-8 md:p-10')
  }

  if (props.hover) {
    if (props.subtle) {
      base.push('hover:bg-white/10 hover:border-cyan-400/40 transform hover:scale-[1.01]')
    } else {
      base.push('hover:bg-white/20 hover:border-cyan-400/50 transform hover:scale-[1.02]')
    }
  }

  return base
})
</script>
