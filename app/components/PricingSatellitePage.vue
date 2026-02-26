<template>
  <div>
    <AnimatedHero min-height="min-h-[58vh]" container-class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <GlassPanel class="text-center space-y-6 animate-fade-in">
        <h1 class="title-hero text-white">{{ title }}</h1>
        <p class="text-description text-gray-200 max-w-3xl mx-auto">{{ description }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/simulateur-prix" class="inline-flex w-full sm:w-auto items-center justify-center text-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
            Estimer mon budget
          </NuxtLink>
          <NuxtLink to="/contact" class="inline-flex w-full sm:w-auto items-center justify-center text-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all">
            Échanger sur mon projet
          </NuxtLink>
        </div>
      </GlassPanel>
    </AnimatedHero>

    <AmbientSection
      section-class="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      container-class="max-w-6xl"
    >
      <div class="space-y-10 md:space-y-12">
        <GlassPanel subtle class="space-y-6">
          <h2 class="title-section text-white">
            Comprendre le <span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">budget</span>
          </h2>
          <p
            v-for="paragraph in introParagraphs"
            :key="paragraph"
            class="text-paragraph text-gray-300"
          >
            {{ paragraph }}
          </p>
          <p class="text-paragraph text-gray-300">
            Le prix d’un site dépend fortement du type de projet. Découvrez par exemple le
            <NuxtLink to="/prix-site-vitrine" class="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40">prix d’un site vitrine</NuxtLink>,
            le
            <NuxtLink to="/prix-site-ecommerce" class="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40">budget d’un site e-commerce</NuxtLink>,
            ou encore le
            <NuxtLink to="/prix-application-web" class="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40">coût d’une application web</NuxtLink>.
          </p>
        </GlassPanel>

        <GlassPanel
          v-for="section in sections"
          :key="section.title"
          subtle
          class="space-y-5"
        >
          <h2 class="title-card text-white">{{ section.title }}</h2>
          <p
            v-for="paragraph in section.paragraphs"
            :key="paragraph"
            class="text-paragraph text-gray-300"
          >
            {{ paragraph }}
          </p>
        </GlassPanel>
      </div>
    </AmbientSection>

    <section class="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      </div>
      <FaqAccordion
        :items="faqs"
        :title="faqTitle"
        :description="faqDescription"
      />
    </section>

    <AmbientSection
      section-class="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      container-class="max-w-6xl"
    >
      <GlassPanel subtle class="space-y-6">
        <h2 class="title-card text-white">À lire aussi</h2>
        <p class="text-paragraph text-gray-300">
          Pour affiner votre estimation, consultez aussi ces pages complémentaires liées au coût de création d’un site.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLink
            v-for="link in relatedLinks"
            :key="link.to"
            :to="link.to"
            class="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-gray-200 hover:text-cyan-200 hover:border-cyan-400/40 hover:bg-white/10 transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </GlassPanel>
    </AmbientSection>

    <AmbientSection
      section-class="pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      container-class="max-w-6xl text-center"
      :effects="false"
    >
      <GlassPanel subtle class="mx-auto max-w-3xl" :padded="false" :hover="true">
        <div class="px-6 py-5">
          <p class="text-sm text-gray-300">
            Besoin d’un chiffrage rapide ?
            <NuxtLink to="/simulateur-prix" class="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/40">
              Lancez le simulateur de prix
            </NuxtLink>
            en 2 minutes.
          </p>
        </div>
      </GlassPanel>
    </AmbientSection>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  introParagraphs: {
    type: Array,
    default: () => []
  },
  sections: {
    type: Array,
    default: () => []
  },
  faqs: {
    type: Array,
    default: () => []
  },
  faqTitle: {
    type: String,
    default: 'FAQ'
  },
  faqDescription: {
    type: String,
    default: ''
  },
  relatedLinks: {
    type: Array,
    default: () => []
  }
})
</script>
