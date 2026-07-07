<script setup>
import { computed, ref, nextTick } from 'vue'
import ProjectTabs from './ProjectTabs.vue'
import ProjectFilters from './ProjectFilters.vue'
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  activeType: { type: String, required: true },
  activeFilter: { type: String, required: true },
  filters: { type: Array, required: true },
  projects: { type: Array, required: true },
  limit: { type: Number, default: Infinity },
})

const emit = defineEmits(['change-type', 'change-filter'])

const visibleProjects = computed(() => {
  return props.projects.slice(0, props.limit)
})

function onEnter(el, done) {
  const cards = el.querySelectorAll('.stagger-item')
  if (!cards.length) {
    done()
    return
  }

  cards.forEach((card, i) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(10px)'
  })

  requestAnimationFrame(() => {
    cards.forEach((card, i) => {
      card.style.transition = `opacity 0.35s ease ${i * 50}ms, transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) ${i * 50}ms`
      card.style.opacity = '1'
      card.style.transform = 'translateY(0)'
    })
  })

  const lastDelay = (cards.length - 1) * 50 + 350
  setTimeout(done, lastDelay)
}

function onLeave(el, done) {
  el.style.transition = 'opacity 0.15s ease, transform 0.15s ease'
  el.style.opacity = '0'
  el.style.transform = 'translateY(-6px)'
  setTimeout(done, 150)
}
</script>

<template>
  <div class="project-list">
    <div class="controls">
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

    <Transition
      :css="false"
      mode="out-in"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div :key="activeType + '-' + activeFilter" class="projects-grid">
        <ProjectCard
          v-for="project in visibleProjects"
          :key="project.id"
          :project="project"
          class="stagger-item"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
}

.controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  align-items: start;
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

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
