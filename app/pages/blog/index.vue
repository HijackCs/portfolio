<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center space-y-6 mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-white">
            Blog
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes articles sur le développement web, les technologies modernes et mon parcours de freelance.
          </p>
          

        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-xl font-medium transition-all duration-300',
              selectedCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Featured Article -->
        <div v-if="featuredArticle && selectedCategory === 'Tous'" class="mb-16">
          <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Article en vedette
          </h2>
          <NuxtLink 
            :to="featuredArticle.path"
            class="group block backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-3xl overflow-hidden hover:from-cyan-500/20 hover:to-blue-600/20 transition-all duration-300"
          >
            <div class="grid md:grid-cols-2 gap-0">
              <!-- Image -->
              <div v-if="featuredArticle.image" class="relative h-64 md:h-auto overflow-hidden">
                <img 
                  :src="featuredArticle.image" 
                  :alt="featuredArticle.title"
                  class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent md:bg-gradient-to-r"></div>
              </div>
              
              <!-- Content -->
              <div class="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div class="flex flex-wrap items-center gap-4">
                  <span class="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30">
                    {{ featuredArticle.category }}
                  </span>
                  <span class="text-gray-400 text-sm">{{ formatDate(featuredArticle.published) }}</span>
                  <span class="text-gray-400 text-sm">{{ featuredArticle.readingTime }} min de lecture</span>
                </div>
                
                <h3 class="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {{ featuredArticle.title }}
                </h3>
                
                <p class="text-xl text-gray-300 leading-relaxed line-clamp-3">
                  {{ featuredArticle.description }}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in featuredArticle.tags?.slice(0, 5)" 
                    :key="tag"
                    class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-sm border border-gray-400/30"
                  >
                    #{{ tag }}
                  </span>
                </div>
                
                <div class="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-4 transition-all duration-300 pt-4">
                  Lire l'article
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="article in filteredArticles" 
            :key="article.path"
            class="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 flex flex-col"
          >
            <NuxtLink :to="article.path" class="flex-1 flex flex-col">
              <!-- Image -->
              <div v-if="article.image" class="relative h-48 overflow-hidden">
                <img 
                  :src="article.image" 
                  :alt="article.title"
                  class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              <div class="p-6 space-y-4 flex-1 flex flex-col">
                <div class="flex items-center justify-between">
                  <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-400/30">
                    {{ article.category }}
                  </span>
                  <span class="text-gray-500 text-xs">{{ formatDate(article.published) }}</span>
                </div>
                
                <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {{ article.title }}
                </h3>
                
                <p class="text-gray-300 leading-relaxed line-clamp-3 flex-1">
                  {{ article.description }}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in article.tags?.slice(0, 3)" 
                    :key="tag"
                    class="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs border border-gray-400/30"
                  >
                    #{{ tag }}
                  </span>
                  <span v-if="article.tags && article.tags.length > 3" class="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs border border-gray-400/30">
                    +{{ article.tags.length - 3 }}
                  </span>
                </div>
                
                <div class="flex items-center justify-between pt-4 border-t border-white/10">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
                      <img 
                        v-if="article.author?.avatar" 
                        :src="article.author.avatar" 
                        :alt="article.author.name"
                        class="w-full h-full object-cover"
                      />
                      <span v-else class="text-white text-sm font-medium">{{ article.author?.name?.charAt(0) || 'H' }}</span>
                    </div>
                    <div class="text-sm">
                      <div class="text-gray-300 font-medium">{{ article.author?.name || 'Hugo Schroder' }}</div>
                    </div>
                  </div>
                  <span class="text-gray-400 text-sm">{{ article.readingTime }} min</span>
                </div>
                
                <div class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:gap-4 duration-300 pt-2">
                  Lire
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredArticles.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4">📝</div>
          <h3 class="text-2xl font-bold text-white mb-2">Aucun article trouvé</h3>
          <p class="text-gray-400">Essayez de sélectionner une autre catégorie</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-3xl p-8 md:p-12 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Envie de collaborer ?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Je suis disponible pour vos projets freelance. Discutons de vos besoins !
          </p>
          <NuxtLink 
            to="/contact"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Me contacter
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch all articles with Nuxt Content v3
const { data: articles } = await useAsyncData('blog-articles', () => 
  queryCollection('blog')
    .order('published', 'DESC')
    .all()
)

const selectedCategory = ref('Tous')


// Categories
const categories = computed(() => {
  const cats = ['Tous', ...new Set(articles.value?.map(article => article.category) || [])]
  return cats
})

// Filtered articles
const filteredArticles = computed(() => {
  if (!articles.value) return []
  
  let filtered = articles.value
  
  // Exclude featured article from list
  if (selectedCategory.value === 'Tous' && featuredArticle.value) {
    filtered = filtered.filter(article => !article.featured)
  }
  
  if (selectedCategory.value !== 'Tous') {
    filtered = filtered.filter(article => article.category === selectedCategory.value)
  }
  
  return filtered
})

// Featured article
const featuredArticle = computed(() => {
  return articles.value?.find(article => article.featured) || null
})

// Total reading time
const totalReadingTime = computed(() => {
  return articles.value?.reduce((total, article) => total + (article.readingTime || 0), 0) || 0
})

// Format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO
useHead({
  title: 'Blog - Hugo Schroder',
  meta: [
    { name: 'description', content: 'Découvrez mes articles sur le développement web, Nuxt.js, Vue.js et mon parcours de freelance. Conseils, tutoriels et retours d\'expérience.' },
    { property: 'og:title', content: 'Blog - Hugo Schroder' },
    { property: 'og:description', content: 'Articles sur le développement web, Nuxt.js, Vue.js et le freelance' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
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
