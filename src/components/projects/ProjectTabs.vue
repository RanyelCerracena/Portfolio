<script setup>
import { useI18n } from '@/composables/useI18n.js'

const { t } = useI18n()

defineProps({
  activeTab: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['change-tab'])
</script>

<template>
  <div class="tabs-wrapper">
    <div class="segmented-control" :data-active="activeTab">
      <span class="pill"></span>

      <button type="button" class="tab" :class="{ active: activeTab === 'development' }"
        @click="emit('change-tab', 'development')">
        {{ t('projects.development') }}
      </button>
      <button type="button" class="tab" :class="{ active: activeTab === 'design' }"
        @click="emit('change-tab', 'design')">
        {{ t('projects.design') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.segmented-control {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 240px;

  padding: 3px;

  border-radius: 12px;

  background: rgba(255, 255, 255, .06);
}

.pill {
  position: absolute;

  top: 3px;
  left: 3px;

  width: calc((100% - 6px) / 2);
  height: calc(100% - 6px);

  border-radius: 9px;

  background: rgba(255, 255, 255, .12);
  border: 1px solid rgba(255, 255, 255, .18);

  transition: transform .28s cubic-bezier(.22, .61, .36, 1);
}

.segmented-control[data-active="design"] .pill {
  transform: translateX(100%);
}

.tab {
  position: relative;
  z-index: 2;

  border: none;
  background: none;

  height: 42px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--text-secondary-color);

  cursor: pointer;
}

.tab {
  width: 100%;
}

.tab.active {
  color: white;
}
</style>
