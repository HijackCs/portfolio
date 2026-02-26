<template>
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div v-if="title || description" class="text-center space-y-6 mb-16">
        <h2 v-if="title" class="title-section text-white">
          <span v-html="title" />
        </h2>
        <p v-if="description" class="text-paragraph text-gray-300 max-w-3xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="item in items"
          :key="item.question"
          class="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-500"
        >
          <h3 class="title-card text-white mb-3 group-hover:text-cyan-300 transition-colors">
            {{ item.question }}
          </h3>
          <p class="text-gray-300 leading-relaxed">
            <span v-if="item.answerHtml" v-html="item.answerHtml" />
            <span v-else>{{ item.answer }}</span>
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>
