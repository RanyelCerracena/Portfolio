<script setup>
import { useI18n } from '@/composables/useI18n.js'

const { t } = useI18n()

defineProps({
  filters: {
    type: Array,
    required: true,
  },
  activeFilter: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['change-filter'])

function formatLabel(value) {
  if (value === 'all') return t('projects.all')
  return value
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
</script>

<template>
  <div class="filters">
    <TransitionGroup name="filter" tag="div" class="filters-inner">
      <button
        v-for="filter in filters"
        :key="filter"
        type="button"
        class="filter-btn"
        :class="{ active: activeFilter === filter }"
        @click="emit('change-filter', filter)"
      >
        {{ formatLabel(filter) }}
      </button>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.filters {
  overflow: hidden;
}

.filters-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.filter-btn {
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-secondary-color);
  font-family: var(--p-font);
  font-size: 0.72rem;
  cursor: pointer;
  transition:
    background 200ms ease,
    border-color 200ms ease,
    color 200ms ease,
    transform 150ms ease,
    box-shadow 200ms ease;
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
  color: var(--text-primary-color);
  transform: translateY(-1px);
}

.filter-btn.active {
  background: rgba(77, 77, 255, 0.2);
  border-color: rgba(77, 77, 255, 0.45);
  color: var(--text-primary-color);
  box-shadow: 0 0 12px rgba(77, 77, 255, 0.15);
}

.filter-btn:active {
  transform: scale(0.96);
}

/* TransitionGroup animations */
.filter-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.filter-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  position: absolute;
}

.filter-enter-from {
  opacity: 0;
  transform: translateY(6px) scale(0.95);
}

.filter-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.filter-move {
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

@media (max-width: 768px) {
  .filters-inner {
    gap: 8px;
  }

  .filter-btn {
    padding: 6px 14px;
    font-size: 0.75rem;
    border-radius: 16px;
  }
}
</style>
