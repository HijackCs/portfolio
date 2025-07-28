<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="relative">
      <section class="py-20 overflow-hidden">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <!-- Back Button -->
          <NuxtLink 
            to="/blog"
            class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8 group"
          >
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour au blog
          </NuxtLink>

          <!-- Loading Skeleton -->
          <div class="space-y-6 animate-pulse">
            <div class="flex flex-wrap items-center gap-4">
              <div class="h-6 bg-gray-700 rounded-full w-20"></div>
              <div class="h-4 bg-gray-700 rounded w-24"></div>
              <div class="h-4 bg-gray-700 rounded w-32"></div>
            </div>
            <div class="h-16 bg-gray-700 rounded w-3/4"></div>
            <div class="h-6 bg-gray-700 rounded w-full"></div>
            <div class="h-6 bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      </section>
    </div>

    <!-- Article Content -->
    <article v-else-if="data" class="relative">
      <!-- Hero Section -->
      <section class="py-20 overflow-hidden">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <!-- Back Button -->
          <NuxtLink 
            to="/blog"
            class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8 group"
          >
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour au blog
          </NuxtLink>

          <!-- Article Header -->
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                {{ data.category }}
              </span>
              <span>{{ formatDate(data.published) }}</span>
              <span>{{ data.readingTime }} min de lecture</span>
              <span v-if="data.featured" class="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                ⭐ Featured
              </span>
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {{ data.title }}
            </h1>

            <p class="text-xl text-gray-300 leading-relaxed">
              {{ data.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in data.tags" 
                :key="tag"
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-sm border border-gray-400/30"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Author Info -->
            <div class="flex items-center gap-4 pt-6 border-t border-white/10">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white text-lg font-medium">{{ (data.author?.name || 'Hugo Schroder').charAt(0) }}</span>
              </div>
              <div>
                <div class="text-white font-medium">{{ data.author?.name || 'Hugo Schroder' }}</div>
                <div class="text-gray-400 text-sm">{{ data.author?.bio || 'Développeur web full-stack passionné par les technologies modernes' }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Article Content -->
      <section class="py-12">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div class="prose prose-lg prose-invert max-w-none article-content" v-html="data.content">
            </div>
          </div>
        </div>
      </section>

      <!-- Share Section -->
      <section class="py-12">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h3 class="text-2xl font-bold text-white mb-6">Partager cet article</h3>
            <div class="flex justify-center gap-4">
              <a 
                :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(currentUrl)}`"
                target="_blank"
                class="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-300 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </a>
              
              <a 
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                target="_blank"
                class="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              
              <button 
                @click="copyToClipboard"
                class="flex items-center gap-2 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-400/30 text-gray-300 px-6 py-3 rounded-xl transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                Copier le lien
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Articles -->
      <section v-if="relatedArticles.length > 0" class="py-12">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h3 class="text-3xl font-bold text-white mb-12 text-center">Articles similaires</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article 
              v-for="article in relatedArticles" 
              :key="article._path"
              class="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-105"
            >
              <div class="p-6 space-y-4">
                <div class="flex items-center justify-between text-sm text-gray-400">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                    {{ article.category }}
                  </span>
                  <span>{{ article.readingTime }} min</span>
                </div>
                
                <h4 class="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {{ article.title }}
                </h4>
                
                <p class="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {{ article.description }}
                </p>
                
                <NuxtLink 
                  :to="`/blog/${article._path.split('/').pop()}`"
                  class="block w-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-xl font-medium hover:from-blue-500/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-300 text-center text-sm"
                >
                  Lire l'article
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
            <h3 class="text-3xl font-bold text-white mb-6">Vous avez un projet en tête ?</h3>
            <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et voyons comment je peux vous aider à le concrétiser 
              avec les meilleures technologies du marché.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/contact"
                class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                Démarrer un projet
              </NuxtLink>
              
              <NuxtLink 
                to="/projects"
                class="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-medium hover:bg-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                Voir mes réalisations
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

// Fetch the current article via API
const { data, pending, error } = await useLazyAsyncData(`blog-${slug}`, async () => {
  try {
    return await $fetch(`/api/blog/${slug}`)
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
})

// Fetch all articles for related articles
const { data: allArticles } = await useLazyAsyncData('blog-all', async () => {
  try {
    return await $fetch('/api/blog')
  } catch (error) {
    console.error('Error fetching all articles:', error)
    return []
  }
})

const relatedArticles = computed(() => {
  if (!allArticles.value || !data.value) return []
  
  return allArticles.value
    .filter(article => 
      article._path !== data.value._path && 
      article.category === data.value.category
    )
    .slice(0, 3)
})

// Current URL for sharing
const currentUrl = computed(() => {
  if (process.client) {
    return window.location.href
  }
  return `https://hugoschroder.dev/blog/${slug}`
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

const copyToClipboard = async () => {
  if (process.client && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(currentUrl.value)
      console.log('Lien copié !')
    } catch (err) {
      console.error('Erreur lors de la copie:', err)
    }
  }
}

if (!pending.value && error.value) {
  throw createError({
    fatal: true,
    statusCode: 404,
    statusMessage: 'Article not found'
  })
}

// SEO Meta tags
useHead({
  title: computed(() => data.value ? `${data.value.title} - Hugo Schroder` : 'Hugo Schroder'),
  meta: [
    {
      name: 'description',
      content: computed(() => data.value?.description || '')
    },
    {
      name: 'keywords',
      content: computed(() => data.value?.tags?.join(', ') || '')
    },
    {
      property: 'og:title',
      content: computed(() => data.value?.title || '')
    },
    {
      property: 'og:description',
      content: computed(() => data.value?.description || '')
    },
    {
      property: 'og:image',
      content: computed(() => data.value?.ogImage || data.value?.image || '')
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'article:author',
      content: computed(() => data.value?.author?.name || '')
    },
    {
      property: 'article:published_time',
      content: computed(() => data.value?.published || '')
    },
    {
      property: 'article:tag',
      content: computed(() => data.value?.tags?.join(', ') || '')
    }
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

<style>
/* Custom styles for article content */
.article-content h1 {
  @apply text-3xl font-bold text-white mt-8 mb-4;
}

.article-content h2 {
  @apply text-2xl font-bold text-white mt-6 mb-3;
}

.article-content h3 {
  @apply text-xl font-bold text-white mt-4 mb-2;
}

.article-content p {
  @apply text-gray-300 leading-relaxed mb-4;
}

.article-content ul, .article-content ol {
  @apply text-gray-300 ml-6 mb-4;
}

.article-content li {
  @apply mb-2;
}

.article-content strong {
  @apply text-white font-semibold;
}

.article-content code {
  @apply bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm;
}

.article-content pre {
  @apply bg-gray-800 border border-gray-700 rounded-xl p-4 overflow-x-auto mb-6;
}

.article-content pre code {
  @apply bg-transparent p-0;
}

.article-content blockquote {
  @apply border-l-4 border-blue-400 pl-6 italic text-gray-400 my-6;
}

.article-content a {
  @apply text-blue-400 hover:text-blue-300 underline transition-colors;
}

.article-content hr {
  @apply border-gray-600 my-8;
}
</style>
