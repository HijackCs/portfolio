<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
      <div 
        class="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300"
        :style="{ width: `${readingProgress}%` }"
      ></div>
    </div>


    <!-- Content -->
    <article class="relative">
      <!-- Header -->
      <section class="relative py-20 overflow-hidden">
        <!-- Cover Image Background -->
        <div v-if="article?.image" class="absolute inset-0 z-0">
          <img 
            :src="article.image" 
            :alt="article.title"
            class="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <!-- Back Button -->
          <NuxtLink 
            to="/blog"
            class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour au blog
          </NuxtLink>

          <!-- Article Header -->
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-4 text-sm">
              <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30">
                {{ article?.category }}
              </span>
              <span class="text-gray-400">{{ formatDate(article?.published) }}</span>
              <span class="text-gray-400">{{ article?.readingTime }} min de lecture</span>
            </div>

            <h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              {{ article?.title }}
            </h1>

            <p class="text-xl text-gray-300 leading-relaxed">
              {{ article?.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in article?.tags" 
                :key="tag"
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-sm border border-gray-400/30"
              >
                #{{ tag }}
              </span>
            </div>

            <div class="flex items-center gap-4 pt-4 border-t border-white/10">
              <div class="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center">
                <img 
                  v-if="article?.author?.avatar" 
                  :src="article.author.avatar" 
                  :alt="article.author.name"
                  class="w-full h-full object-cover"
                />
                <span v-else class="text-white text-lg font-medium">{{ article?.author?.name?.charAt(0) || 'H' }}</span>
              </div>
              <div>
                <div class="text-white font-medium">{{ article?.author?.name || 'Hugo Schroder' }}</div>
                <div class="text-gray-400 text-sm">{{ article?.author?.bio || 'Développeur web full-stack' }}</div>
              </div>
            </div>
          </div>
          
          <!-- Main Cover Image -->
          <div v-if="article?.image" class="mt-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Article Content -->
      <section class="py-12">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <!-- Table of Contents (Desktop) -->
            <aside class="hidden lg:block lg:col-span-3">
              <div class="sticky top-24 space-y-4">
                <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Table des matières</h3>
                  <nav class="space-y-2" v-if="tableOfContents.length > 0">
                    <a 
                      v-for="(heading, index) in tableOfContents" 
                      :key="index"
                      :href="`#${heading.id}`"
                      @click.prevent="scrollToHeading(heading.id)"
                      :class="[
                        'block text-sm transition-colors duration-200',
                        heading.depth === 2 ? 'pl-0 text-gray-300 hover:text-cyan-400 font-medium' : 'pl-4 text-gray-400 hover:text-cyan-300',
                        activeHeading === heading.id ? 'text-cyan-400 font-semibold' : ''
                      ]"
                    >
                      {{ heading.text }}
                    </a>
                  </nav>
                  <p v-else class="text-sm text-gray-400">Aucun titre détecté</p>
                </div>

                <!-- Reading Stats -->
                <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Statistiques</h3>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs text-gray-400">Temps de lecture</div>
                        <div class="text-sm font-semibold text-white">{{ article?.readingTime }} min</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs text-gray-400">Catégorie</div>
                        <div class="text-sm font-semibold text-white">{{ article?.category }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <!-- Main Content -->
            <div class="lg:col-span-9">
              <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                <ContentRenderer v-if="article" :value="article" class="prose prose-lg prose-invert max-w-none article-content" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Share Section -->
      <section class="py-12">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-center">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-6">Partager cet article</h3>
            <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a 
                :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(article?.title || '')}&url=${encodeURIComponent(currentUrl)}`"
                target="_blank"
                class="flex items-center justify-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-300 px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span>Twitter</span>
              </a>
              
              <a 
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                target="_blank"
                class="flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <button 
                @click="copyToClipboard"
                class="flex items-center justify-center gap-2 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-400/30 text-gray-300 px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <span>Copier le lien</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Articles -->
      <section v-if="relatedArticles && relatedArticles.length > 0" class="py-12">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h3 class="text-3xl font-bold text-white mb-12 text-center">Articles similaires</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NuxtLink 
              v-for="related in relatedArticles" 
              :key="related.path"
              :to="related.path"
              class="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div class="space-y-4">
                <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-400/30">
                  {{ related.category }}
                </span>
                <h4 class="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {{ related.title }}
                </h4>
                <p class="text-gray-400 text-sm line-clamp-2">
                  {{ related.description }}
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span>{{ formatDate(related.published) }}</span>
                  <span>•</span>
                  <span>{{ related.readingTime }} min</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-12">
        <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div class="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-3xl p-8 md:p-12 text-center">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
              Besoin d'un développeur web ?
            </h3>
            <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
              Je suis disponible pour vos projets freelance. Discutons de votre projet !
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/contact"
                class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Me contacter
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
              <NuxtLink 
                to="/projects"
                class="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
              >
                Voir mes projets
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

// Reading progress and state
const readingProgress = ref(0)
const activeHeading = ref('')

// Fetch article with Nuxt Content v3
const { data: article } = await useAsyncData(`blog-${route.params.slug}`, () => 
  queryCollection('blog').path(route.path).first()
)

// Fetch related articles
const { data: relatedArticles } = await useAsyncData('related-articles', async () => {
  if (!article.value) return []
  
  // Nuxt Content v3 query
  const articles = await queryCollection('blog')
    .where('category', '=', article.value.category)
    .where('path', '<>', article.value.path)
    .limit(3)
    .all()
  
  return articles
})

// Current URL (Canonical for SEO and Sharing)
// Always use production URL to avoid hydration mismatches and ensure valid sharing links
const currentUrl = computed(() => `https://hugoschroder.dev${route.fullPath}`)

// OG Image URL (must be absolute)
const ogImageUrl = computed(() => {
  const imagePath = article.value?.image || '/og-image.png'
  return `https://hugoschroder.dev${imagePath}`
})

// SEO & JSON-LD
useHead({
  title: computed(() => article.value?.title || 'Article'),
  meta: [
    { name: 'description', content: computed(() => article.value?.description || '') },
    { name: 'keywords', content: computed(() => article.value?.tags?.join(', ') || '') },
    
    // Open Graph
    { property: 'og:title', content: computed(() => article.value?.title || '') },
    { property: 'og:description', content: computed(() => article.value?.description || '') },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:image', content: ogImageUrl },
    { property: 'og:image:alt', content: computed(() => article.value?.title || '') },
    
    // Article specific
    { property: 'article:published_time', content: computed(() => article.value?.published || '') },
    { property: 'article:author', content: computed(() => article.value?.author?.name || 'Hugo Schroder') },
    { property: 'article:section', content: computed(() => article.value?.category || 'Tech') },
    { property: 'article:tag', content: computed(() => article.value?.tags?.join(', ') || '') },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => article.value?.title || '') },
    { name: 'twitter:description', content: computed(() => article.value?.description || '') },
    { name: 'twitter:image', content: ogImageUrl }
  ],
  link: [
    { rel: 'canonical', href: currentUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.value?.title,
        description: article.value?.description,
        image: ogImageUrl.value,
        datePublished: article.value?.published,
        author: {
          '@type': 'Person',
          name: article.value?.author?.name || 'Hugo Schroder',
          url: 'https://hugoschroder.dev'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Hugo Schroder',
          logo: {
            '@type': 'ImageObject',
            url: 'https://hugoschroder.dev/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl.value
        }
      }))
    }
  ]
})

// Table of Contents from Content v3
const tableOfContents = computed(() => {
  const toc = article.value?.body?.toc?.links || []
  const flatToc = []
  
  const processLinks = (links, depth = 2) => {
    for (const link of links) {
      flatToc.push({
        id: link.id,
        text: link.text,
        depth: depth
      })
      if (link.children && link.children.length) {
        processLinks(link.children, depth + 1)
      }
    }
  }
  
  processLinks(toc)
  return flatToc
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

// Copy to clipboard
const copyToClipboard = async () => {
  if (process.client && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(currentUrl.value)
      alert('Lien copié !')
    } catch (err) {
      console.error('Erreur lors de la copie:', err)
    }
  }
}

// Scroll to heading
const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

// Update reading progress
const updateReadingProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight - windowHeight
  const scrolled = window.scrollY
  
  readingProgress.value = Math.min(100, (scrolled / documentHeight) * 100)
  
  // Update active heading
  const headings = document.querySelectorAll('h2[id], h3[id]')
  let currentHeading = ''
  
  headings.forEach((heading) => {
    const rect = heading.getBoundingClientRect()
    if (rect.top <= 150) {
      currentHeading = heading.id
    }
  })
  
  activeHeading.value = currentHeading
}

onMounted(() => {
  nextTick(() => {
    updateReadingProgress()
    window.addEventListener('scroll', updateReadingProgress)
  })
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', updateReadingProgress)
  }
})
</script>

<style>
/* Professional article typography */
.article-content {
  @apply text-gray-300;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
}

.article-content h1 {
  @apply text-4xl md:text-5xl font-bold text-white mt-12 mb-6;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.article-content h2 {
  @apply text-3xl md:text-4xl font-bold text-white mt-10 mb-5;
  line-height: 1.3;
  letter-spacing: -0.01em;
  scroll-margin-top: 100px;
  position: relative;
  padding-left: 1rem;
}

.article-content h2::before {
  content: '';
  @apply absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full;
}

.article-content h3 {
  @apply text-2xl md:text-3xl font-bold text-white mt-8 mb-4;
  line-height: 1.4;
  scroll-margin-top: 100px;
}

.article-content h4 {
  @apply text-xl md:text-2xl font-semibold text-white mt-6 mb-3;
}

.article-content p {
  @apply text-gray-300 leading-relaxed mb-6;
}

.article-content p:first-of-type {
  @apply text-xl text-gray-200 leading-relaxed;
  font-weight: 400;
}

.article-content ul, .article-content ol {
  @apply text-gray-300 ml-6 mb-6 space-y-2;
}

.article-content ul {
  @apply list-none;
}

.article-content ul li {
  @apply relative pl-6 mb-3;
}

.article-content ul li::before {
  content: '';
  @apply absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full;
}

.article-content ol {
  @apply list-decimal;
}

.article-content ol li {
  @apply mb-3 pl-2;
}

.article-content li strong {
  @apply text-white font-semibold block mb-1;
}

.article-content strong {
  @apply text-white font-semibold;
}

.article-content em {
  @apply text-gray-400 italic;
}

.article-content code {
  @apply bg-gray-800/80 text-cyan-300 px-2 py-1 rounded text-sm font-mono border border-gray-700/50;
  font-size: 0.9em;
}

.article-content pre {
  @apply bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 overflow-x-auto mb-8 shadow-xl;
  backdrop-filter: blur(10px);
}

.article-content pre code {
  @apply bg-transparent p-0 border-0 text-gray-300;
  font-size: 0.95rem;
  line-height: 1.6;
}

.article-content blockquote {
  @apply border-l-4 border-cyan-400 bg-cyan-500/5 pl-6 pr-6 py-4 italic text-gray-300 my-8 rounded-r-xl;
  backdrop-filter: blur(10px);
}

.article-content blockquote p {
  @apply mb-0;
}

.article-content a {
  @apply text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300 underline-offset-4 transition-all duration-200;
  font-weight: 500;
}

.article-content hr {
  @apply border-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-12;
}

.article-content img {
  @apply rounded-2xl shadow-2xl my-8 w-full;
}

.article-content table {
  @apply w-full border-collapse my-8;
}

.article-content th {
  @apply bg-gray-800/50 text-white font-semibold p-4 text-left border-b-2 border-cyan-400;
}

.article-content td {
  @apply p-4 border-b border-gray-700/50;
}

.article-content tr:hover {
  @apply bg-gray-800/30;
}

html {
  scroll-behavior: smooth;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
