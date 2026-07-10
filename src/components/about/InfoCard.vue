<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  items: { type: Array, default: () => [] },
  variant: {
    type: String,
    default: 'default',
  },
})
</script>

<template>
  <div class="glass about-card" :class="{ 'about-card--wide': variant === 'wide' }">
    <div class="about-card__top">
      <div class="about-card__title">{{ title }}</div>
      <div v-if="subtitle" class="about-card__subtitle">{{ subtitle }}</div>
    </div>

    <div v-if="items.length" class="about-card__items">
      <div v-for="(item, idx) in items" :key="idx" class="about-pill">
        {{ item }}
      </div>
    </div>

    <slot />
  </div>
</template>

<style scoped>
.about-card {
  padding: 18px 18px;
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

.about-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.about-card__title {
  font-family: var(--title-font);
  font-weight: 400;
  font-size: 1.05rem;
  color: var(--text-primary-color);
}

.about-card__subtitle {
  font-size: 0.78rem;
  color: var(--text-secondary-color);
  line-height: 1.4;
}

.about-card__items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.about-pill {
  font-size: 0.72rem;
  color: var(--text-secondary-color);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  padding: 6px 10px;
  border-radius: 999px;
}

.about-card--wide {
  min-height: 124px;
}

@media (max-width: 768px) {
  .about-card {
    padding: 16px;
  }
}
</style>
