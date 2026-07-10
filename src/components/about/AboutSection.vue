<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { useI18n } from '@/composables/useI18n.js'
import InfoCard from './InfoCard.vue'
import JourneyCard from './JourneyCard.vue'
import TechCard from './TechCard.vue'
import StatusCard from './StatusCard.vue'

const { t } = useI18n()
const isMounted = ref(false)

const techItems = ['Vue', 'Go', 'C#', '.NET', 'Docker', 'SQL', 'Git', 'REST']
const statusColors = ['#44dd81', '#9f69f8', '#44d8dd', '#f983e1']

function applyEntrance(el) {
  if (!el) return

  const cards = el.querySelectorAll('[data-about-stagger]')
  cards.forEach((card) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(24px) scale(0.96)'
    card.style.filter = 'blur(3px)'
  })

  // Apple-style stagger with spring easing
  cards.forEach((card, i) => {
    const delay = i * 80
    card.style.transition = `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}ms, filter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
    requestAnimationFrame(() => {
      card.style.opacity = '1'
      card.style.transform = 'translateY(0) scale(1)'
      card.style.filter = 'blur(0)'
    })
  })
}

onMounted(async () => {
  await nextTick()
  isMounted.value = true
  applyEntrance(document)
})
</script>

<template>
  <div class="about-section" ref="root">
    <div class="about-layout">
      <aside class="about-intro glass about-intro__card" data-about-stagger>
        <div class="about-intro__content">
          <div class="about-intro__kicker">Ranyel Cerracena</div>
          <p class="about-intro__text" v-html="t('about.intro').replace(/\n/g, '<br>')"></p>
        </div>

      </aside>


      <div class="about-right" aria-label="About modules">

        <div class="about-grid about-grid--top">
          <div v-for="(card, i) in t('about.twoCols')" :key="i" data-about-stagger class="stagger-item">
            <InfoCard :title="card.title" :subtitle="card.subtitle" />
          </div>
        </div>

        <div class="about-grid about-grid--mid">
          <div data-about-stagger class="stagger-item">
            <JourneyCard :steps="t('about.journey')" />
          </div>
        </div>

        <div class="about-grid about-grid--stack">
          <div data-about-stagger class="stagger-item">
            <TechCard :items="techItems" />
          </div>
        </div>

        <div class="about-grid about-grid--bottom">
          <div data-about-stagger class="stagger-item">
            <StatusCard :title="t('about.currently')" :items="t('about.statusItems').map((item, i) => ({ ...item, dot: statusColors[i] }))" :badge="t('about.now')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  padding: 24px 0 0;
}

.about-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 20px;
  align-items: stretch;
}

.about-intro {
  padding: 18px;
  height: 100%;
  display: flex;
}

.about-intro__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.about-intro__kicker {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  color: var(--text-terciary-color);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.about-intro__text {
  font-size: 0.88rem;
  color: var(--text-secondary-color);
  line-height: 1.75;
}


.about-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-grid {
  display: grid;
  gap: 20px;
}

.about-grid--top {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.about-grid--mid,
.about-grid--stack,
.about-grid--bottom {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.stagger-item {
  will-change: opacity, transform;
}

@media (max-width: 1024px) {
  .about-layout {
    grid-template-columns: 1fr;
  }

  .about-grid--top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .about-section {
    padding-top: 6px;
  }

  .about-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
