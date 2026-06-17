import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

/**
 * Point d'accès unique à GSAP : enregistre ScrollTrigger une seule fois
 * et expose la préférence reduced-motion.
 */
export function useGsap() {
  if (import.meta.client && !registered) {
    gsap.registerPlugin(ScrollTrigger)
    registered = true
  }

  const prefersReducedMotion = () =>
    import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return { gsap, ScrollTrigger, prefersReducedMotion }
}

/**
 * Révélation au scroll (fade + translation Y) des enfants `[data-reveal]`
 * du conteneur, ou du conteneur lui-même s'il n'en contient pas.
 * À appeler dans <script setup> ; nettoie ses triggers au démontage.
 */
export function useScrollReveal(container: Ref<HTMLElement | null>) {
  const { gsap, ScrollTrigger, prefersReducedMotion } = useGsap()
  let ctx: gsap.Context | undefined

  onMounted(() => {
    if (!container.value || prefersReducedMotion()) return

    ctx = gsap.context(() => {
      const targets = container.value!.querySelectorAll('[data-reveal]')
      const elements = targets.length ? Array.from(targets) : [container.value!]

      for (const el of elements) {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        })
      }
    }, container.value)

    ScrollTrigger.refresh()
  })

  onUnmounted(() => ctx?.revert())
}
