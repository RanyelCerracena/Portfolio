<script setup>
import ProjectTabs from './ProjectTabs.vue'
import ProjectFilters from './ProjectFilters.vue'

defineProps({
  activeType: { type: String, required: true },
  activeFilter: { type: String, required: true },
  filters: { type: Array, required: true },
  projects: { type: Array, required: true },
  currentProject: { type: Object, default: null },
})

const emit = defineEmits(['change-type', 'change-filter', 'select-project'])
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <span class="sidebar-label">Projects</span>
      <ProjectTabs :active-tab="activeType" @change-tab="emit('change-type', $event)" />
      <Transition name="filters-slide" mode="out-in">
        <ProjectFilters
          :key="activeType"
          :filters="filters"
          :active-filter="activeFilter"
          @change-filter="emit('change-filter', $event)"
        />
      </Transition>
    </div>

    <nav class="sidebar-list">
      <TransitionGroup name="list" tag="div" class="list-inner">
        <button
          v-for="project in projects"
          :key="project.id"
          type="button"
          class="sidebar-item"
          :class="{ active: currentProject?.id === project.id }"
          @click="emit('select-project', project.id)"
        >
          <span class="item-dot" :class="project.status"></span>
          <span class="item-title">{{ project.title }}</span>
        </button>
      </TransitionGroup>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  min-width: 280px;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
}

.sidebar-header {
  padding: 20px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-label {
  font-family: var(--p-font);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-tertiary-color);
}

.sidebar-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.list-inner {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--text-secondary-color);
  font-family: var(--p-font);
  font-size: 0.8rem;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition:
    background 150ms ease,
    color 150ms ease;
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary-color);
}

.sidebar-item.active {
  background: rgba(77, 77, 255, 0.15);
  color: var(--text-primary-color);
}

.item-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--text-tertiary-color);
}

.item-dot.stable {
  background: #44dd81;
  box-shadow: 0 0 6px rgba(68, 221, 129, 0.4);
}

.item-dot.building {
  background: #f9c74f;
  box-shadow: 0 0 6px rgba(249, 199, 79, 0.4);
}

.item-dot.paused {
  background: #f983e1;
  box-shadow: 0 0 6px rgba(249, 131, 225, 0.4);
}

.item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Filters slide */
.filters-slide-enter-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.filters-slide-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.filters-slide-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

.filters-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* List transition */
.list-enter-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.list-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-8px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}

.list-move {
  transition: transform 0.25s ease;
}
</style>
