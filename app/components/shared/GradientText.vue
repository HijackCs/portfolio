<template>
  <component
    :is="tag"
    class="text-gradient"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), { tag: 'span' })
</script>
