<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 mt-16">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center text-gray-600 dark:text-gray-400">
        <p>Nuxt Starter Template - {{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
