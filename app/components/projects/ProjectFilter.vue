<template>
  <div
    class="flex flex-wrap gap-2"
    role="group"
    aria-label="Filtrer les projets par catégorie"
  >
    <button
      v-for="filter in filters"
      :key="filter.value ?? 'all'"
      class="rounded-full border px-4 py-1.5 font-mono text-xs transition-colors duration-200"
      :class="modelValue === filter.value
        ? 'border-primary/60 bg-primary/10 text-ink'
        : 'border-line text-muted hover:border-primary/40 hover:text-ink'"
      :aria-pressed="modelValue === filter.value"
      @click="emit('update:modelValue', filter.value)"
    >
      {{ filter.label }}
      <span class="ml-1 text-muted/70">{{ filter.count }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { projects, categoryLabels, type ProjectCategory } from '~/data/projects'

defineProps<{ modelValue: ProjectCategory | null }>()
const emit = defineEmits<{ 'update:modelValue': [value: ProjectCategory | null] }>()

const order: ProjectCategory[] = ['mobile', 'web', 'iot', 'tools']

const filters = [
  { value: null, label: 'Tout', count: projects.length },
  ...order.map(category => ({
    value: category,
    label: categoryLabels[category],
    count: projects.filter(p => p.category === category).length
  }))
]
</script>
