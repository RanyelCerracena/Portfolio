<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from '@/composables/useI18n.js'
import ServiceCard from './ServiceCard.vue'

const { t } = useI18n()
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
      <div class="services__small">{{ t('sections.services.kicker') }}</div>

      <h2 class="services__title" style="white-space: nowrap;">
        <span class="services__title-regular">{{ t('sections.services.title') }}</span>
        <span class="services__title-italic">{{ t('sections.services.titleItalic') }}</span>
      </h2>

      <p class="services__subtitle">
        {{ t('sections.services.description') }}
      </p>
    </header>

    <div class="services__grid">
      <Transition name="services-fade-slide">
        <div v-if="isVisible" class="services-grid-inner">
          <ServiceCard v-for="(s, idx) in t('services.cards')" :key="idx" class="services__card" :accent="['blue', 'purple', 'green'][idx]"
            :title="s.title" :icon="['code', 'palette', 'rocket'][idx]" :icon-rotation="5" :description="s.description"
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
  background: linear-gradient(135deg, #44d8dd, #9f69f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  transform: translateY(24px) scale(0.95);
  opacity: 0;
  filter: blur(3px);
  animation: services-card-in 0.7s var(--ease-apple-spring) forwards;
  animation-delay: calc(var(--stagger) * 100ms);
}

@keyframes services-card-in {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.95);
    filter: blur(3px);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
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
