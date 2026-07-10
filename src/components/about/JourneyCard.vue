<script setup>
import { useI18n } from '@/composables/useI18n.js'

const { t } = useI18n()

defineProps({
  steps: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="glass about-card">
    <div class="about-card__header">
      <h3>{{ t('about.journeyTitle') }}</h3>
      <span class="about-card__hint">{{ t('about.journeyHint') }}</span>
    </div>

    <div class="about-journey">
      <div v-for="(step, i) in steps" :key="i" class="about-journey-row">
        <div class="about-journey-year">{{ step.year }}</div>
        <div class="about-journey-text">{{ step.text }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  padding: 18px;
  box-shadow: none;
  transition: transform 0.4s var(--ease-apple-spring), box-shadow 0.4s var(--ease-apple),
    border-color 0.4s var(--ease-apple);
}

.about-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.28);
}

.about-card__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.about-card__header h3 {
  font-family: var(--title-font);
  font-size: 1.05rem;
  font-weight: 400;
}

.about-card__hint {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--text-terciary-color);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.about-journey {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.about-journey-row {
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 12px;
  align-items: baseline;
}

.about-journey-year {
  font-size: 0.78rem;
  color: var(--text-secondary-color);
}

.about-journey-text {
  font-size: 0.86rem;
  color: var(--text-primary-color);
  line-height: 1.35;
}

@media (max-width: 480px) {
  .about-journey-row {
    grid-template-columns: 72px 1fr;
  }
}
</style>
