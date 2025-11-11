<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Overlay -->
    <div 
      class="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      @click="closeModal"
    ></div>
    
    <!-- Modal Content -->
    <div class="flex min-h-screen items-center justify-center p-4">
      <div 
        class="relative w-full max-w-6xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl transform transition-all duration-300 scale-100"
        @click.stop
      >
        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
        >
          <svg class="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div v-if="project" class="p-8">
          <!-- Header -->
          <div class="mb-8">
            <div class="flex items-center gap-4 mb-4">
              <span class="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium">
                {{ project.category }}
              </span>
              <span v-if="project.freelance" class="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium">
                Freelance
              </span>
              <span class="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 text-sm">
                {{ project.year }} • {{ project.duration }}
              </span>
            </div>
            
            <h2 class="title-section text-white mb-4">{{ project.title }}</h2>
            <p class="text-xl text-gray-300 leading-relaxed">{{ project.description }}</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Left Column: Images Carousel -->
            <div class="space-y-6">
              <!-- Main Image -->
              <div class="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
                <img 
                  :src="project.images?.[currentImageIndex] || project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                >
                
                <!-- Navigation Arrows -->
                <div v-if="project.images && project.images.length > 1" class="absolute inset-0 flex items-center justify-between p-4">
                  <button 
                    @click="previousImage"
                    class="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  >
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    @click="nextImage"
                    class="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  >
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Thumbnails -->
              <div v-if="project.images && project.images.length > 1" class="flex gap-2 overflow-x-auto pb-2">
                <button
                  v-for="(image, index) in project.images"
                  :key="index"
                  @click="currentImageIndex = index"
                  :class="[
                    'flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300',
                    currentImageIndex === index 
                      ? 'border-emerald-400 ring-2 ring-emerald-400/50' 
                      : 'border-white/20 hover:border-white/40'
                  ]"
                >
                  <img :src="image" :alt="`${project.title} ${index + 1}`" class="w-full h-full object-cover">
                </button>
              </div>

              <!-- Technologies -->
              <div class="space-y-3">
                <h3 class="title-card text-white">Technologies utilisées</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-400/30"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column: Details -->
            <div class="space-y-6">
              <!-- Impact -->
              <div v-if="project.impact" class="p-4 bg-emerald-500/10 border border-emerald-400/20 rounded-xl">
                <h3 class="title-card text-emerald-300 mb-2">Impact client</h3>
                <p class="text-emerald-200 leading-relaxed">{{ project.impact }}</p>
              </div>

              <!-- Detailed Description -->
              <div v-if="project.detailedDescription" class="space-y-3">
                <h3 class="title-card text-white">Description détaillée</h3>
                <div class="text-gray-300 leading-relaxed whitespace-pre-line">{{ project.detailedDescription }}</div>
              </div>

              <!-- Features -->
              <div v-if="project.features?.length" class="space-y-3">
                <h3 class="title-card text-white">Fonctionnalités principales</h3>
                <ul class="space-y-2">
                  <li v-for="feature in project.features" :key="feature" class="flex items-start gap-3 text-gray-300">
                    <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Challenges -->
              <div v-if="project.challenges?.length" class="space-y-3">
                <h3 class="title-card text-white">Défis techniques</h3>
                <ul class="space-y-2">
                  <li v-for="challenge in project.challenges" :key="challenge" class="flex items-start gap-3 text-gray-300">
                    <svg class="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {{ challenge }}
                  </li>
                </ul>
              </div>

              <!-- Results -->
              <div v-if="project.results?.length" class="space-y-3">
                <h3 class="title-card text-white">Résultats obtenus</h3>
                <ul class="space-y-2">
                  <li v-for="result in project.results" :key="result" class="flex items-start gap-3 text-gray-300">
                    <svg class="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    {{ result }}
                  </li>
                </ul>
              </div>

              <!-- Project Info -->
              <div class="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div>
                  <div class="text-sm text-gray-400">Client</div>
                  <div class="text-white font-medium">{{ project.client }}</div>
                </div>
                <div>
                  <div class="text-sm text-gray-400">Statut</div>
                  <div class="text-white font-medium">{{ project.status }}</div>
                </div>
              </div>

              <!-- Links -->
              <div v-if="project.links && (project.links.demo || project.links.github)" class="flex gap-4">
                <a 
                  v-if="project.links.demo" 
                  :href="project.links.demo" 
                  target="_blank"
                  class="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Voir le projet
                </a>
                <a 
                  v-if="project.links.github" 
                  :href="project.links.github" 
                  target="_blank"
                  class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>

              <!-- CTA -->
              <div class="pt-4">
                <NuxtLink 
                  to="/contact" 
                  @click="closeModal"
                  class="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 rounded-xl font-medium hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                >
                  Besoin d'un projet similaire ? Contactez-moi
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const currentImageIndex = ref(0)

// Reset image index when project changes
watch(() => props.project, () => {
  currentImageIndex.value = 0
})

// Close modal
const closeModal = () => {
  emit('close')
}

// Image navigation
const nextImage = () => {
  if (props.project?.images) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.project.images.length
  }
}

const previousImage = () => {
  if (props.project?.images) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? props.project.images.length - 1 
      : currentImageIndex.value - 1
  }
}

// Handle image loading errors
const handleImageError = (event) => {
  console.warn('Image failed to load:', event.target.src)
  // Could set a fallback image here
}

// Close modal on Escape key
onMounted(() => {
  const handleEscape = (event) => {
    if (event.key === 'Escape' && props.isOpen) {
      closeModal()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})

// Prevent body scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})
</script>
