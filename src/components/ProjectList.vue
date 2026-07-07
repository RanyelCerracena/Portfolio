<script setup>
import { ref, computed } from 'vue'
import projectsData from '@/data/projects.js'

const activeType = ref('development')
const activeFilter = ref('all')

const filteredProjects = computed(() => {
  return projectsData.filter(project => {
    const typeMatch = project.type === activeType.value
    const categoryMatch = activeFilter.value === 'all' || project.categories.includes(activeFilter.value)
    return typeMatch && categoryMatch
  })
})

function handleTypeChange(newType) {
  activeType.value = newType
  activeFilter.value = 'all'
}

function handleFilterChange(newFilter) {
  activeFilter.value = newFilter
}
</script>

<template>
  <div class="projects-list" aria-label="projects">
    <ProjectTabs :active-tab="activeType" @change-tab="handleTypeChange" />

    <ProjectFilters :type="activeType" :active-filter="activeFilter" @change-filter="handleFilterChange" />

    <transition name="fade" mode="out-in">
      <div :key="activeType" class="projects-grid">
        <template v-if="activeType === 'development'">
          <DevelopmentCard v-for="project in filteredProjects" :key="project.id" :project="project" />
        </template>
        <template v-else>
          <DesignCard v-for="project in filteredProjects" :key="project.id" :project="project" />
        </template>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.projects-list {
  width: 100%;
  padding: 20px;
}

.projects-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  align-items: start;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .projects-list {
    width: 100%;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
