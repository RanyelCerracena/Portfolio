<script setup>
import { useI18n } from '@/composables/useI18n.js'

const { t } = useI18n()

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="glass about-card">
    <div class="about-card__header">
      <h3>{{ t('about.techTitle') }}</h3>
      <span class="about-card__hint">{{ t('about.techHint') }}</span>
    </div>

    <div class="about-stack">
      <div v-for="(item, i) in items" :key="i" class="about-pill">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  padding: 18px;
  box-shadow: none;
  transition: transform 0.4s var(--ease-apple-spring), box-shadow 0.4s var(--ease-apple),
    border-color 0.4s var(--ease-apple), background 0.4s var(--ease-apple);
}

.about-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.12);
}

.about-card__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
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

.about-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.about-pill {
  font-size: 0.72rem;
  color: var(--text-secondary-color);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  padding: 7px 10px;
  border-radius: 999px;
}
</style>
