<script setup>
defineProps({
  kicker: { type: String, required: true },
  title: { type: String, required: true },
  titleItalic: { type: String, default: '' },
  description: { type: String, required: true },
})
</script>

<template>
  <div class="section-header">
    <div class="section-header__kicker">{{ kicker }}</div>

    <h2 class="section-header__title">
      <span class="section-header__title-regular">{{ title }}</span>
      <span v-if="titleItalic" class="section-header__title-italic">
        {{ titleItalic }}
      </span>
    </h2>

    <p class="section-header__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.section-header__kicker {
  font-size: 0.78rem;
  letter-spacing: 2px;
  color: var(--text-secondary-color);
}

.section-header__title {
  margin: 0;
  font-family: var(--title-font);
  font-weight: 400;
  font-size: clamp(1.9rem, 3.6vw, 3rem);
  line-height: 1.1;
  white-space: nowrap;
}

.section-header__title-italic {
  font-style: italic;
}

.section-header__description {
  color: var(--text-secondary-color);
  font-size: 1rem;
  line-height: 1.65;
  margin-top: 14px;
  max-width: 820px;
}
</style>
