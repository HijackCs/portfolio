<template>
  <ClientOnly>
    <div
      v-if="enabled"
      class="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-200"
      :class="visible ? 'opacity-100' : 'opacity-0'"
      aria-hidden="true"
    >
      <!-- Halo flou, suit avec plus d'inertie -->
      <div
        ref="halo"
        class="absolute left-0 top-0 size-10 rounded-full opacity-50 blur-md will-change-transform"
        style="background: linear-gradient(135deg, #3b82f6, #7c3aed)"
      />
      <!-- Point principal -->
      <div
        ref="dot"
        class="absolute left-0 top-0 size-3 rounded-full bg-ink mix-blend-difference will-change-transform"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const dot = ref<HTMLElement | null>(null)
const halo = ref<HTMLElement | null>(null)
const enabled = ref(false)
// Invisible tant que la souris n'a pas bougé (évite le halo figé en 0,0)
const visible = ref(false)

let raf = 0
let mouseX = 0
let mouseY = 0
let dotX = 0
let dotY = 0
let haloX = 0
let haloY = 0
let hovering = false

function onMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
  if (!visible.value) {
    dotX = haloX = mouseX
    dotY = haloY = mouseY
    visible.value = true
  }
}

function onOver(e: MouseEvent) {
  hovering = !!(e.target as HTMLElement).closest('a, button, [data-cursor]')
}

function loop() {
  dotX += (mouseX - dotX) * 0.35
  dotY += (mouseY - dotY) * 0.35
  haloX += (mouseX - haloX) * 0.12
  haloY += (mouseY - haloY) * 0.12

  const scale = hovering ? 2 : 1

  if (dot.value) {
    dot.value.style.transform = `translate3d(${dotX - 6}px, ${dotY - 6}px, 0) scale(${hovering ? 0.5 : 1})`
  }
  if (halo.value) {
    halo.value.style.transform = `translate3d(${haloX - 20}px, ${haloY - 20}px, 0) scale(${scale})`
  }

  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  const finePointer = window.matchMedia('(pointer: fine)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!finePointer || reducedMotion) return

  enabled.value = true
  document.documentElement.classList.add('has-custom-cursor')
  window.addEventListener('mousemove', onMove, { passive: true })
  window.addEventListener('mouseover', onOver, { passive: true })
  raf = requestAnimationFrame(loop)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseover', onOver)
  document.documentElement.classList.remove('has-custom-cursor')
})
</script>
