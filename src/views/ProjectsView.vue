<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjects } from '@/composables/useProjects.js'
import ProjectSidebar from '@/components/projects/ProjectSidebar.vue'
import ProjectContent from '@/components/projects/ProjectContent.vue'

const route = useRoute()
const router = useRouter()

const {
  activeType,
  activeFilter,
  availableFilters,
  filteredProjects,
  currentProject,
  changeType,
  changeFilter,
  changeProject,
} = useProjects({ route, router })

const isDrawerOpen = ref(false)

function handleSelectProject(id) {
  changeProject(id)
  isDrawerOpen.value = false
}
</script>

<template>
  <div class="projects-view">
    <button class="drawer-toggle" @click="isDrawerOpen = !isDrawerOpen">
      <i class="bi" :class="isDrawerOpen ? 'bi-x-lg' : 'bi-list'"></i>
    </button>

    <Transition name="drawer-overlay">
      <div
        v-if="isDrawerOpen"
        class="drawer-overlay"
        @click="isDrawerOpen = false"
      ></div>
    </Transition>

    <Transition name="drawer">
      <ProjectSidebar
        v-show="isDrawerOpen || undefined"
        class="drawer-sidebar"
        :class="{ visible: isDrawerOpen }"
        :active-type="activeType"
        :active-filter="activeFilter"
        :filters="availableFilters"
        :projects="filteredProjects"
        :current-project="currentProject"
        @change-type="changeType"
        @change-filter="changeFilter"
        @select-project="handleSelectProject"
      />
    </Transition>

    <ProjectSidebar
      class="desktop-sidebar"
      :active-type="activeType"
      :active-filter="activeFilter"
      :filters="availableFilters"
      :projects="filteredProjects"
      :current-project="currentProject"
      @change-type="changeType"
      @change-filter="changeFilter"
      @select-project="handleSelectProject"
    />

    <Transition name="content" mode="out-in">
      <ProjectContent
        v-if="currentProject"
        :key="currentProject.id"
        :project="currentProject"
      />
    </Transition>
  </div>
</template>

<style scoped>
.projects-view {
  display: flex;
  height: 100dvh;
  overflow: hidden;
  position: relative;
}

/* Drawer toggle (mobile) */
.drawer-toggle {
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 200;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--text-primary-color);
  font-size: 1rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.drawer-overlay {
  display: none;
}

.drawer-sidebar {
  display: none;
}

/* Content transition */
.content-enter-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.content-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.content-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.content-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Tablet */
@media (max-width: 1024px) {
  .desktop-sidebar :deep(.sidebar) {
    width: 220px;
    min-width: 220px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .drawer-toggle {
    display: flex;
  }

  .drawer-overlay {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 140;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .drawer-sidebar {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 150;
    width: 280px;
    height: 100dvh;
    transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .drawer-sidebar.visible {
    transform: translateX(0);
  }

  .desktop-sidebar {
    display: none;
  }

  .drawer-enter-active,
  .drawer-leave-active {
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .drawer-enter-from,
  .drawer-leave-to {
    transform: translateX(-100%);
  }

  .drawer-overlay-enter-active,
  .drawer-overlay-leave-active {
    transition: opacity 0.3s ease;
  }

  .drawer-overlay-enter-from,
  .drawer-overlay-leave-to {
    opacity: 0;
  }
}
</style>
