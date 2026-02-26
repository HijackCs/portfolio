<template>
  <section :class="sectionClasses">
    <div class="absolute inset-0">
      <div :class="orbOneClasses"></div>
      <div :class="orbTwoClasses"></div>
      <div :class="orbThreeClasses"></div>
      <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
    </div>

    <div v-if="floating !== 'none'" class="absolute top-20 left-20 transform-gpu">
      <div :class="primaryFloatingClasses"></div>
    </div>

    <div v-if="floating !== 'none'" class="absolute bottom-32 right-20 transform-gpu">
      <div :class="secondaryFloatingClasses" :style="floatingDelayStyle"></div>
    </div>

    <div v-if="showThirdFloating" class="absolute top-1/3 right-32 transform-gpu">
      <div :class="tertiaryFloatingClasses" style="animation-delay: 2s;"></div>
    </div>

    <div :class="containerClasses">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  minHeight: {
    type: String,
    default: 'min-h-[60vh]'
  },
  floating: {
    type: String,
    default: 'standard' // standard | large | none
  },
  variant: {
    type: String,
    default: 'default' // default | index | gray
  },
  containerClass: {
    type: String,
    default: 'max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'
  }
})

const sectionClasses = computed(() => {
  const gradient = props.variant === 'gray'
    ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900'
    : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'

  return [
    'relative flex items-center justify-center overflow-hidden',
    gradient,
    props.minHeight
  ]
})

const containerClasses = computed(() => props.containerClass)

const orbOneClasses = computed(() => {
  if (props.variant === 'index') {
    return 'absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'
  }

  if (props.variant === 'gray') {
    return 'absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-400/20 to-slate-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob'
  }

  return 'absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob'
})

const orbTwoClasses = computed(() => {
  if (props.variant === 'index') {
    return 'absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'
  }

  if (props.variant === 'gray') {
    return 'absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-400/20 to-gray-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000'
  }

  return 'absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000'
})

const orbThreeClasses = computed(() => {
  if (props.variant === 'index') {
    return 'absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'
  }

  if (props.variant === 'gray') {
    return 'absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000'
  }

  return 'absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000'
})

const primaryFloatingClasses = computed(() => {
  if (props.floating === 'large') {
    return 'w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl shadow-2xl animate-float transform rotate-45 hover:rotate-90 transition-transform duration-700'
  }

  return 'w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg shadow-2xl animate-float transform rotate-12 hover:rotate-45 transition-transform duration-700'
})

const secondaryFloatingClasses = computed(() => {
  if (props.floating === 'large') {
    return 'w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl shadow-2xl animate-float-reverse transform -rotate-12 hover:rotate-45 transition-transform duration-700'
  }

  return 'w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full shadow-2xl animate-float-reverse transform -rotate-12 hover:rotate-45 transition-transform duration-700'
})

const floatingDelayStyle = computed(() => {
  return props.floating === 'large' ? 'animation-delay: 1.5s;' : 'animation-delay: 1s;'
})

const showThirdFloating = computed(() => props.variant === 'index')

const tertiaryFloatingClasses = computed(() => {
  return 'w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl shadow-2xl animate-float transform rotate-45 hover:rotate-90 transition-transform duration-700'
})
</script>
