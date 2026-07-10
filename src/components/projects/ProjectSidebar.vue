<script setup>
import { useI18n } from '@/composables/useI18n.js'
import ProjectTabs from './ProjectTabs.vue'
import ProjectFilters from './ProjectFilters.vue'

const { t } = useI18n()

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
      <span class="sidebar-label">{{ t('projects.sidebarLabel') }}</span>
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
          v-for="(project, idx) in projects"
          :key="project.id"
          type="button"
          class="sidebar-item"
          :class="{ active: currentProject?.id === project.id }"
          :style="{ '--i': idx }"
          @click="emit('select-project', project.id)"
        >
          <!-- Development: folder icon + title + status dot -->
          <template v-if="project.type === 'development'">
            <img class="item-folder" src="/bigsur_folder.webp" alt="" />
            <span class="item-title">{{ project.title }}</span>
            <span class="item-dot" :class="project.status"></span>
          </template>

          <!-- Design: title + status dot -->
          <template v-else>
            <span class="item-title">{{ project.title }}</span>
            <span class="item-dot" :class="project.status"></span>
          </template>
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
  gap: 2px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary-color);
  font-family: var(--p-font);
  font-size: 0.8rem;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition:
    background 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.sidebar-item:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-primary-color);
  transform: translateX(3px);
}

.sidebar-item.active {
  background: rgba(77, 77, 255, 0.15);
  color: var(--text-primary-color);
  box-shadow: inset 3px 0 0 rgba(77, 77, 255, 0.6);
}

.sidebar-item:active {
  transform: scale(0.98);
}

.item-folder {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.sidebar-item:hover .item-folder,
.sidebar-item.active .item-folder {
  opacity: 1;
}

.item-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-left: auto;
  background: var(--text-tertiary-color);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
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

.sidebar-item.active .item-dot {
  transform: scale(1.3);
}

.item-title {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

/* Filters slide */
.filters-slide-enter-active {
  transition:
    opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.filters-slide-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.filters-slide-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.filters-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* List transition - fluid staggered */
.list-enter-active {
  transition:
    opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i, 0) * 40ms);
}

.list-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-12px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-12px) scale(0.95);
}

.list-move {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
