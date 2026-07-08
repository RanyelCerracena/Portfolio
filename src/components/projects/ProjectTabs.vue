<script setup>
defineProps({
  activeTab: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['change-tab'])

const tabs = [
  { key: 'development', label: 'Development' },
  { key: 'design', label: 'Design' },
]
</script>

<template>
  <div class="tabs-wrapper">
    <div class="segmented-control" :data-active="activeTab">
      <span class="pill"></span>

      <button v-for="tab in tabs" :key="tab.key" type="button" class="tab" :class="{ active: activeTab === tab.key }"
        @click="emit('change-tab', tab.key)">
        {{ tab.label }}
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
