<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2 group">
            <div class="w-8 h-8 rounded-lg overflow-hidden">
              <img src="/images/logo.png" alt="Hugo Schroder" class="w-full h-full object-cover" />
            </div>
            <span class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              Hugo Schroder
            </span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/' }"
            >
              Accueil
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/about' }"
            >
              À propos
            </NuxtLink>
            <NuxtLink 
              to="/projects" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === '/projects' }"
            >
              Portfolio
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path.startsWith('/blog') }"
            >
              Blog
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Contact
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <div class="flex flex-col space-y-4">
            <NuxtLink 
              to="/" 
              class="nav-link-mobile"
              :class="{ 'nav-link-mobile-active': $route.path === '/' }"
              @click="mobileMenuOpen = false"
            >
              Accueil
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="nav-link-mobile"
              :class="{ 'nav-link-mobile-active': $route.path === '/about' }"
              @click="mobileMenuOpen = false"
            >
              À propos
            </NuxtLink>
            <NuxtLink 
              to="/projects" 
              class="nav-link-mobile"
              :class="{ 'nav-link-mobile-active': $route.path === '/projects' }"
              @click="mobileMenuOpen = false"
            >
              Portfolio
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              class="nav-link-mobile"
              :class="{ 'nav-link-mobile-active': $route.path.startsWith('/blog') }"
              @click="mobileMenuOpen = false"
            >
              Blog
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 w-full justify-center"
              @click="mobileMenuOpen = false"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo & Description -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-lg overflow-hidden">
                  <img src="/images/logo.png" alt="Hugo Schroder" class="w-full h-full object-cover" />
              </div>
              <span class="font-semibold text-white">Hugo Schroder</span>
            </div>
            <p class="text-gray-400 text-sm">
              Développeur web full-stack passionné par les technologies modernes. Ouvert aux opportunités CDI & Freelance.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="font-semibold text-white">Navigation</h3>
            <div class="flex flex-col space-y-2">
              <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors text-sm">Accueil</NuxtLink>
              <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors text-sm">À propos</NuxtLink>
              <NuxtLink to="/projects" class="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</NuxtLink>
              <NuxtLink to="/blog" class="text-gray-400 hover:text-white transition-colors text-sm">Blog</NuxtLink>
              <NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors text-sm">Contact</NuxtLink>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-4">
            <h3 class="font-semibold text-white">Contact</h3>
            <div class="flex flex-col space-y-2 text-sm text-gray-400">
              <a href="mailto:contact@hugoschroder.dev" class="hover:text-white transition-colors">
                contact@hugoschroder.dev
              </a>
              <div class="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/hugo-schroder/" class="text-gray-400 hover:text-white transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="https://github.com/hijackcs" class="text-gray-400 hover:text-white transition-colors">
                  <span class="sr-only">GitHub</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Hugo Schroder. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative;
}

.nav-link-active {
  @apply text-primary-600;
}

.nav-link-active::after {
  content: '';
  @apply absolute -bottom-4 left-0 right-0 h-0.5 bg-primary-600;
}

.nav-link-mobile {
  @apply text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-2;
}

.nav-link-mobile-active {
  @apply text-primary-600;
}
</style>
