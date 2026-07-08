<script setup>
import { onMounted, ref } from 'vue'
import ServiceCard from './ServiceCard.vue'
import { services } from '@/data/services.js'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const el = sectionRef.value
  if (!el) return

  const obs = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          isVisible.value = true
          obs.disconnect()
          break
        }
      }
    },
    { threshold: 0.2 },
  )

  obs.observe(el)
})
</script>

<template>
  <section ref="sectionRef" class="services" :class="{ 'services--visible': isVisible }">

    <header class="services__header">
      <div class="services__small">SERVICES</div>

      <h2 class="services__title" style="white-space: nowrap;">
        <span class="services__title-regular">What can I build</span>
        <span class="services__title-italic"> for you?</span>
      </h2>

      <p class="services__subtitle">
        I transform ideas into premium digital products through design and development—crafted for performance,
        clarity and long-term success.
      </p>
    </header>

    <div class="services__grid">
      <Transition name="services-fade-slide">
        <div v-if="isVisible" class="services-grid-inner">
          <ServiceCard v-for="(s, idx) in services" :key="s.id" class="services__card" :accent="s.accent"
            :title="s.title" :icon="s.icon" :icon-rotation="s.iconRotation" :description="s.description"
            :services="s.services" :footer-text="s.footerText" :style="{ '--stagger': `${idx}` }" />
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 0;
}

.services__header {
  margin-bottom: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.services__small {
  font-size: 0.78rem;
  letter-spacing: 2px;
  color: var(--text-secondary-color);
}

.services__title {
  font-family: var(--title-font);
  font-weight: 400;
  font-size: clamp(2rem, 4.3vw, 3.6rem);
  line-height: 1.05;
  display: inline;
}

.services__title-italic {
  font-style: italic;
}

.services__subtitle {
  color: var(--text-secondary-color);
  font-size: 1rem;
  line-height: 1.65;
  max-width: 820px;
}

.services__grid {
  width: 100%;
}

.services-grid-inner {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.services__card {
  transform: translateY(10px);
  opacity: 0;
  animation: services-card-in 280ms ease forwards;
  animation-delay: calc(var(--stagger) * 90ms);
}

@keyframes services-card-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* Section Fade In + Slide Up (header + overall) */
.services-fade-slide-enter-active,
.services-fade-slide-leave-active {
  transition: opacity 240ms ease, transform 240ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.services-fade-slide-enter-from,
.services-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

/* Responsive grid */
@media (max-width: 900px) {
  .services-grid-inner {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .services-grid-inner {
    grid-template-columns: 1fr;
  }
}
</style>
