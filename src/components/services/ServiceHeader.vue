<script setup>
defineProps({
  titleSmall: { type: String, required: true },
  title: { type: String, required: true },
  titleMain: { type: String, default: '' },
})
</script>

<template>
  <div class="service-header">
    <div class="service-header__kicker">{{ titleSmall }}</div>
    <div class="service-header__title">{{ title }}</div>
  </div>
</template>

<style scoped>
.service-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-header__kicker {
  font-size: 0.78rem;
  letter-spacing: 2px;
  color: var(--text-secondary-color);
}

.service-header__title {
  font-family: var(--title-font);
  font-weight: 400;
  font-size: 1.35rem;
  color: var(--text-primary-color);
}
</style>
