<script setup>
import { useI18n } from '@/composables/useI18n.js'

const { t } = useI18n()

defineProps({
  stack: { type: Array, required: true },
})
</script>

<template>
  <div class="stack" v-if="stack.length">
    <h3 class="section-title">{{ t('projects.technologies') }}</h3>
    <div class="stack-list">
      <span v-for="tech in stack" :key="tech" class="stack-tag">{{ tech }}</span>
    </div>
  </div>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-family: var(--title-font);
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-primary-color);
  margin: 0;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.stack-tag {
  font-size: 0.72rem;
  padding: 4px 12px;
  border-radius: 6px;
  background: rgba(159, 105, 248, 0.12);
  border: 1px solid rgba(159, 105, 248, 0.25);
  color: var(--first-color);
}
</style>
