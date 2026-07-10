import { onMounted, onUnmounted, nextTick } from 'vue'

/**
 * Scroll reveal composable — triggers animations when elements enter the viewport.
 * Re-observes on route changes and uses scroll fallback for instant anchor navigation.
 */
export function useScrollReveal() {
  let observer = null

  function observeElements() {
    if (!observer) return
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    targets.forEach((target) => {
      if (!target.classList.contains('reveal-visible')) {
        observer.observe(target)
      }
    })
  }

  function checkVisible() {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    targets.forEach((target) => {
      if (target.classList.contains('reveal-visible')) return
      const rect = target.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        target.classList.add('reveal-visible')
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.02,
      rootMargin: '0px 0px -20px 0px'
    })

    observeElements()

    // Scroll fallback: check on every scroll for elements that observer might miss
    let ticking = false
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkVisible()
          ticking = false
        })
        ticking = true
      }
    }, { passive: true })

    // Re-observe after any DOM change (e.g., route transition)
    const mutationObserver = new MutationObserver(() => {
      nextTick(observeElements)
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
