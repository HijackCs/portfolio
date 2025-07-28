<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-32 md:py-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-violet-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/20 to-indigo-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <!-- Floating 3D Elements -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-violet-600/30 rounded-2xl backdrop-blur-sm transform rotate-12 animate-float"></div>
        <div class="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-violet-400/30 to-indigo-600/30 rounded-full backdrop-blur-sm animate-float delay-1000"></div>
        <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-indigo-400/30 to-purple-600/30 rounded-lg backdrop-blur-sm transform -rotate-12 animate-float delay-500"></div>

        <div class="relative z-10 space-y-8">
          <h1 class="text-5xl md:text-7xl font-bold">
            <span class="block bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Blog
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes réflexions sur le développement web, les nouvelles technologies 
            et les tendances du secteur.
          </p>
          

        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-violet-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center ">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105',
              selectedCategory === category 
                ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/25' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:border-violet-400/50 hover:text-violet-300'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Featured Article -->
        <div v-if="featuredArticle" class="mb-20">
          <h2 class="text-3xl font-bold text-white mb-8 text-center">Article à la une</h2>
          <div class="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-violet-400/30 transition-all duration-500">
            <div class="lg:flex">
              <div class="lg:w-1/2 p-8 lg:p-12 space-y-6">
                <div class="flex items-center gap-4 text-sm text-gray-400">
                  <span class="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full border border-violet-400/30">
                    {{ featuredArticle.category }}
                  </span>
                  <span>{{ formatDate(featuredArticle.published) }}</span>
                  <span>{{ featuredArticle.readingTime }} min de lecture</span>
                </div>
                
                <h3 class="text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {{ featuredArticle.title }}
                </h3>
                
                <p class="text-gray-300 text-lg leading-relaxed">
                  {{ featuredArticle.description }}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in featuredArticle.tags" 
                    :key="tag"
                    class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-sm border border-gray-400/30"
                  >
                    #{{ tag }}
                  </span>
                </div>
                
                <NuxtLink 
                  :to="featuredArticle._path"
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-medium hover:from-violet-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
                >
                  Lire l'article
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </NuxtLink>
              </div>
              
              <div class="lg:w-1/2 bg-gradient-to-br from-violet-400/20 to-indigo-600/20 flex items-center justify-center p-12">
                <div class="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                  <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!articles || articles.length === 0" class="text-center py-20">
          <div class="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 max-w-2xl mx-auto">
            <!-- Background Effects -->
            <div class="absolute inset-0 overflow-hidden rounded-3xl">
              <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-400/10 to-indigo-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-emerald-400/10 to-teal-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>
            
            <div class="relative z-10 space-y-6">
              <!-- Icon -->
              <div class="flex justify-center mb-6">
                <div class="w-20 h-20 bg-gradient-to-r from-violet-500/20 to-indigo-600/20 rounded-3xl flex items-center justify-center border border-violet-400/30">
                  <svg class="w-10 h-10 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              
              <!-- Title -->
              <h3 class="text-3xl font-bold text-white mb-4">
                Blog en construction
              </h3>
              
              <!-- Description -->
              <p class="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto">
                Je prépare actuellement du contenu technique de qualité. Les premiers articles arriveront bientôt !
              </p>
              
              <!-- Features list -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
                <div class="flex items-center gap-3 text-gray-300">
                  <div class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                  <span>Retours d'expérience</span>
                </div>
                <div class="flex items-center gap-3 text-gray-300">
                  <div class="w-2 h-2 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full"></div>
                  <span>Tutoriels techniques</span>
                </div>
                <div class="flex items-center gap-3 text-gray-300">
                  <div class="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                  <span>Case studies</span>
                </div>
                <div class="flex items-center gap-3 text-gray-300">
                  <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <span>Veille technologique</span>
                </div>
              </div>
              
              <!-- CTA -->
              <div class="pt-6">
                <NuxtLink 
                  to="/contact" 
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-medium hover:from-violet-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
                >
                  <span>Me contacter en attendant</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Articles Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="article in filteredArticles" 
            :key="article._path"
            class="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden hover:bg-white/20 hover:border-violet-400/50 transition-all duration-500 hover:scale-105"
          >
            <div class="p-8 space-y-6">
              <div class="flex items-center justify-between text-sm text-gray-400">
                <span class="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full border border-violet-400/30">
                  {{ article.category }}
                </span>
                <span v-if="article.featured" class="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                  ⭐ Featured
                </span>
              </div>
              
              <h3 class="text-xl font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2">
                {{ article.title }}
              </h3>
              
              <p class="text-gray-300 leading-relaxed line-clamp-3">
                {{ article.description }}
              </p>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in article.tags.slice(0, 3)" 
                  :key="tag"
                  class="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs border border-gray-400/30"
                >
                  #{{ tag }}
                </span>
                <span v-if="article.tags.length > 3" class="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs border border-gray-400/30">
                  +{{ article.tags.length - 3 }}
                </span>
              </div>
              
              <div class="flex items-center justify-between pt-4 border-t border-white/10">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-gradient-to-r from-violet-400 to-indigo-600 rounded-full flex items-center justify-center">
                    <span class="text-white text-sm font-medium">{{ (article.author?.name || 'Hugo Schroder').charAt(0) }}</span>
                  </div>
                  <div class="text-sm">
                    <div class="text-gray-300">{{ article.author?.name || 'Hugo Schroder' }}</div>
                    <div class="text-gray-500">{{ formatDate(article.published) }}</div>
                  </div>
                </div>
                <div class="text-sm text-gray-400">
                  {{ article.readingTime }} min
                </div>
              </div>
              
              <NuxtLink 
                :to="article._path"
                class="block w-full bg-gradient-to-r from-violet-500/20 to-indigo-600/20 border border-violet-400/30 text-violet-300 px-6 py-3 rounded-xl font-medium hover:from-violet-500/30 hover:to-indigo-600/30 hover:border-violet-400/50 transition-all duration-300 text-center"
              >
                Lire l'article
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: articles } = await useAsyncData('blog-articles', async () => {
  try {
    const data = await $fetch('/api/blog')
    console.log('Successfully loaded articles from API:', data?.length || 0)
    return data || []
  } catch (error) {
    console.error('Error fetching articles from API:', error)
    return []
  }
})

const selectedCategory = ref('Tous')

const categories = computed(() => {
  const cats = ['Tous', ...new Set(articles.value?.map(article => article.category) || [])]
  return cats
})

const filteredArticles = computed(() => {
  if (!articles.value) return []
  
  let filtered = articles.value
  if (selectedCategory.value !== 'Tous') {
    filtered = filtered.filter(article => article.category === selectedCategory.value)
  }
  
  return filtered.sort((a, b) => new Date(b.published) - new Date(a.published))
})

const featuredArticle = computed(() => {
  return articles.value?.find(article => article.featured) || null
})

const totalViews = computed(() => {
  return articles.value?.reduce((total, article) => total + (article.views || 0), 0) || 0
})

// Utility functions
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO Meta tags
useHead({
  title: 'Blog - Hugo Schroder | Développeur Web Full-Stack',
  meta: [
    {
      name: 'description',
      content: 'Découvrez mes articles sur le développement web, les frameworks JavaScript, les bonnes pratiques et les tendances technologiques.'
    },
    {
      property: 'og:title',
      content: 'Blog - Hugo Schroder | Développeur Web Full-Stack'
    },
    {
      property: 'og:description',
      content: 'Découvrez mes articles sur le développement web, les frameworks JavaScript, les bonnes pratiques et les tendances technologiques.'
    }
  ]
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float.delay-500 {
  animation-delay: 0.5s;
}

.animate-float.delay-1000 {
  animation-delay: 1s;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
