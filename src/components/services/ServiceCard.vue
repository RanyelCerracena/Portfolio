<script setup>
import { computed } from 'vue'

const props = defineProps({
  accent: {
    type: String,
    required: true,
    validator: (v) => ['blue', 'purple', 'green'].includes(v),
  },
  title: { type: String, required: true },
  icon: { type: String, required: true },
  iconRotation: { type: Number, default: 5 },
  description: { type: String, required: true },
  services: { type: Array, required: true },
  footerText: { type: String, required: true },
})

const accentColor = computed(() => {
  if (props.accent === 'blue') return 'var(--first-color)'
  if (props.accent === 'purple') return 'var(--fourth-color)'
  return 'var(--second-color)'
})

function getIconClass(icon) {
  if (icon === 'code') return 'bi bi-code-slash'
  if (icon === 'palette') return 'bi bi-palette'
  return 'bi bi-rocket-takeoff'
}
</script>

<template>
  <article class="service-card glass" :class="`service-card--${accent}`" :style="{ '--accent': accentColor }">
    <div class="service-card__top-line" />

    <div class="service-card__content">
      <div class="service-card__icon-row">
        <div class="service-card__icon-wrap">
          <i :class="getIconClass(icon)" class="service-card__icon" :style="{ '--icon-rot': iconRotation + 'deg' }" />
        </div>
        <h3 class="service-card__title">{{ title }}</h3>
      </div>

      <p class="service-card__description">{{ description }}</p>
    </div>

    <div class="service-card__divider" />

    <ul class="service-card__list">
      <li v-for="(item, idx) in services" :key="idx" class="service-card__list-item">{{ item }}</li>
    </ul>

    <div class="service-card__divider service-card__divider--bottom" />

    <footer class="service-card__footer">
      <span class="service-card__footer-text">{{ footerText }}</span>
    </footer>
  </article>
</template>

<style scoped>
.service-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: none;
  transition:
    transform 0.4s var(--ease-apple-spring),
    box-shadow 0.4s var(--ease-apple),
    border-color 0.4s var(--ease-apple),
    background 0.4s var(--ease-apple);
}

.service-card__top-line {
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, var(--accent), rgba(255, 255, 255, 0.06));
  opacity: 0.95;
  box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 60%, transparent);
  transition: filter 240ms ease, opacity 240ms ease;
}

.service-card__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-card__icon-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.service-card__icon-wrap {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
}

.service-card__icon {
  font-size: 1.35rem;
  color: var(--text-primary-color);
  transform: rotate(0deg);
  transition: transform 240ms ease;
}

.service-card__title {
  margin: 0;
  font-family: var(--title-font);
  font-weight: 400;
  font-size: 1.2rem;
}

.service-card__description {
  color: var(--text-secondary-color);
  line-height: 1.55;
  font-size: 0.95rem;
}

.service-card__divider {
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
}

.service-card__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding-left: 18px;
}

.service-card__list-item {
  position: relative;
  color: var(--text-secondary-color);
  font-size: 0.88rem;
}

.service-card__list-item::marker {
  color: rgba(255, 255, 255, 0.25);
}

.service-card__footer {
  display: flex;
  align-items: center;
  padding-top: 2px;
}

.service-card__footer-text {
  color: var(--text-primary-color);
  font-size: 0.88rem;
  opacity: 0.95;
  transition: transform 240ms ease;
}

.service-card__footer-text::after {
  content: '';
  display: inline-block;
  width: 10px;
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.service-card:hover .service-card__top-line {
  opacity: 1;
  filter: brightness(1.25);
}

.service-card:hover .service-card__icon-wrap {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow: 0 0 18px color-mix(in srgb, var(--accent) 40%, transparent);
}

.service-card:hover .service-card__icon {
  transform: rotate(var(--icon-rot));
}

.service-card:hover .service-card__footer-text {
  transform: translateX(6px);
}

@media (max-width: 768px) {
  .service-card {
    padding: 18px;
  }

  .service-card__icon-row {
    align-items: flex-start;
  }
}
</style>
