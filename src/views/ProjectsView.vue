<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjects } from '@/composables/useProjects.js'
import ProjectSidebar from '@/components/projects/ProjectSidebar.vue'
import ProjectContent from '@/components/projects/ProjectContent.vue'
import ProjectTabs from '@/components/projects/ProjectTabs.vue'
import ProjectFilters from '@/components/projects/ProjectFilters.vue'

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
const pillListRef = ref(null)
const isMobile = ref(false)

// Duplicate projects for infinite loop
const loopProjects = computed(() => {
  const p = filteredProjects.value
  return [...p, ...p, ...p]
})

function handleSelectProject(id) {
  changeProject(id)
  isDrawerOpen.value = false
}

function goHome() {
  router.push('/')
}

function checkMobile() {
  isMobile.value = window.innerWidth <= 768
}

// Get current active index in the original projects list
const activeIndex = computed(() => {
  return filteredProjects.value.findIndex(p => p.id === currentProject.value?.id)
})

// Navigate to next/previous project via arrows
function goToNext() {
  const p = filteredProjects.value
  if (!p.length) return
  const nextIdx = (activeIndex.value + 1) % p.length
  handleSelectProject(p[nextIdx].id)
}

function goToPrev() {
  const p = filteredProjects.value
  if (!p.length) return
  const prevIdx = (activeIndex.value - 1 + p.length) % p.length
  handleSelectProject(p[prevIdx].id)
}

// Infinite scroll: reset position when crossing boundaries
let isResettingScroll = false

function onPillScroll() {
  if (!pillListRef.value || !isMobile.value || isResettingScroll) return
  const el = pillListRef.value
  const p = filteredProjects.value
  if (!p.length) return

  const singleSetWidth = el.scrollWidth / 3
  const scrollLeft = el.scrollLeft

  // Scrolled past second set → jump to first set
  if (scrollLeft >= singleSetWidth * 2) {
    isResettingScroll = true
    el.scrollLeft = scrollLeft - singleSetWidth
    requestAnimationFrame(() => { isResettingScroll = false })
  }
  // Scrolled before first set → jump to second set
  else if (scrollLeft <= 0) {
    isResettingScroll = true
    el.scrollLeft = singleSetWidth
    requestAnimationFrame(() => { isResettingScroll = false })
  }
}

// Scroll to center the active pill in the middle set
function scrollToActive(behavior = 'smooth') {
  nextTick(() => {
    if (!pillListRef.value || !isMobile.value) return
    const el = pillListRef.value
    const p = filteredProjects.value
    if (!p.length) return

    const activeIdx = p.findIndex(proj => proj.id === currentProject.value?.id)
    if (activeIdx === -1) return

    // Target the pill in the SECOND set (middle)
    const pills = el.querySelectorAll('.mobile-project-pill')
    const targetPill = pills[p.length + activeIdx]
    if (!targetPill) return

    const pillLeft = targetPill.offsetLeft
    const pillWidth = targetPill.offsetWidth
    const containerWidth = el.offsetWidth
    const scrollTo = pillLeft - (containerWidth / 2) + (pillWidth / 2)

    el.scrollTo({ left: scrollTo, behavior })
  })
}

watch(currentProject, () => scrollToActive('smooth'))
watch(filteredProjects, () => nextTick(() => scrollToActive('auto')))

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  nextTick(() => scrollToActive('auto'))
})
</script>

<template>
  <div class="projects-view">
    <!-- Desktop sidebar -->
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

    <!-- Mobile header -->
    <div class="mobile-header">
      <div class="mobile-header-top">
        <button class="drawer-toggle" @click="isDrawerOpen = !isDrawerOpen">
          <i class="bi" :class="isDrawerOpen ? 'bi-x-lg' : 'bi-list'"></i>
        </button>

        <div class="mobile-tabs">
          <ProjectTabs :active-tab="activeType" @change-tab="changeType" />
        </div>

        <button class="home-back" @click="goHome" aria-label="Voltar para a Home">
          <i class="bi bi-arrow-left"></i>
        </button>
      </div>

      <div class="mobile-filters">
        <Transition name="filters-slide" mode="out-in">
          <ProjectFilters
            :key="activeType"
            :filters="availableFilters"
            :active-filter="activeFilter"
            @change-filter="changeFilter"
          />
        </Transition>
      </div>

      <!-- Pill carousel with arrows -->
      <div class="pill-carousel">
        <button class="pill-arrow pill-arrow-left" @click="goToPrev">
          <i class="bi bi-chevron-left"></i>
        </button>

        <div class="pill-fade-left"></div>

        <nav
          ref="pillListRef"
          class="mobile-project-list"
          @scroll="onPillScroll"
        >
          <button
            v-for="(project, idx) in loopProjects"
            :key="project.id + '-' + idx"
            type="button"
            class="mobile-project-pill"
            :class="{ active: currentProject?.id === project.id }"
            @click="handleSelectProject(project.id)"
          >
            <span class="pill-dot" :class="project.status"></span>
            <span class="pill-title">{{ project.title }}</span>
          </button>
        </nav>

        <div class="pill-fade-right"></div>

        <button class="pill-arrow pill-arrow-right" @click="goToNext">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- Drawer overlay -->
    <Transition name="drawer-overlay">
      <div v-if="isDrawerOpen" class="drawer-overlay" @click="isDrawerOpen = false"></div>
    </Transition>

    <!-- Drawer sidebar -->
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

    <!-- Project content -->
    <div class="content-area">
      <Transition name="content" mode="out-in">
        <ProjectContent v-if="currentProject" :key="currentProject.id" :project="currentProject" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.projects-view {
  display: flex;
  height: 100dvh;
  overflow: hidden;
  overscroll-behavior: none;
  position: relative;
}

/* Desktop sidebar */
.desktop-sidebar {
  flex-shrink: 0;
}

/* Mobile header - hidden on desktop */
.mobile-header {
  display: none;
}

.content-area {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
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

/* Tablet */
@media (max-width: 1024px) {
  .desktop-sidebar :deep(.sidebar) {
    width: 220px;
    min-width: 220px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .projects-view {
    flex-direction: column;
  }

  .desktop-sidebar {
    display: none;
  }

  /* Mobile header */
  .mobile-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 12px 8px;
    background: rgba(20, 20, 20, 0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    flex-shrink: 0;
    z-index: 10;
  }

  .mobile-header-top {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .drawer-toggle {
    display: flex;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-primary-color);
    font-size: 1rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .mobile-tabs {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .home-back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-primary-color);
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s ease;
  }

  .home-back:hover {
    background: rgba(255, 255, 255, 0.14);
  }

  .mobile-filters {
    display: flex;
    justify-content: center;
  }

  /* Pill carousel */
  .pill-carousel {
    display: flex;
    align-items: center;
    gap: 0;
    position: relative;
  }

  .pill-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.06);
    color: var(--text-secondary-color);
    font-size: 0.75rem;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
    z-index: 2;
  }

  .pill-arrow:hover {
    background: rgba(255, 255, 255, 0.12);
    color: var(--text-primary-color);
    transform: scale(1.1);
  }

  .pill-arrow:active {
    transform: scale(0.9);
  }

  .pill-fade-left,
  .pill-fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 1;
    pointer-events: none;
  }

  .pill-fade-left {
    left: 28px;
    background: linear-gradient(to right, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.8) 40%, transparent 100%);
  }

  .pill-fade-right {
    right: 28px;
    background: linear-gradient(to left, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.8) 40%, transparent 100%);
  }

  .mobile-project-list {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    flex: 1;
    min-width: 0;
    padding: 6px 36px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .mobile-project-list::-webkit-scrollbar {
    display: none;
  }

  .mobile-project-pill {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 16px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-secondary-color);
    font-family: var(--p-font);
    font-size: 0.8rem;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    scroll-snap-align: center;
    transition:
      background 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .mobile-project-pill:hover {
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-primary-color);
    transform: scale(1.04);
  }

  .mobile-project-pill.active {
    background: rgba(77, 77, 255, 0.18);
    color: var(--text-primary-color);
    border-color: rgba(77, 77, 255, 0.4);
    transform: scale(1.06);
    box-shadow:
      0 0 12px rgba(77, 77, 255, 0.25),
      0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .mobile-project-pill:active {
    transform: scale(0.97);
  }

  .pill-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--text-tertiary-color);
    transition: box-shadow 0.35s ease, transform 0.35s ease;
  }

  .pill-dot.stable {
    background: #44dd81;
    box-shadow: 0 0 6px rgba(68, 221, 129, 0.4);
  }

  .pill-dot.building {
    background: #f9c74f;
    box-shadow: 0 0 6px rgba(249, 199, 79, 0.4);
  }

  .pill-dot.paused {
    background: #f983e1;
    box-shadow: 0 0 6px rgba(249, 131, 225, 0.4);
  }

  .mobile-project-pill.active .pill-dot {
    transform: scale(1.4);
    animation: dot-pulse 2s ease-in-out infinite;
  }

  @keyframes dot-pulse {
    0%, 100% {
      box-shadow: 0 0 6px currentColor;
    }
    50% {
      box-shadow: 0 0 14px currentColor;
    }
  }

  .pill-title {
    white-space: nowrap;
  }

  /* Content area */
  .content-area {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
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
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }

  .drawer-sidebar.visible {
    transform: translateX(0);
  }

  .drawer-enter-active,
  .drawer-leave-active {
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .drawer-enter-from,
  .drawer-leave-to {
    transform: translateX(-100%);
  }

  .drawer-overlay-enter-active,
  .drawer-overlay-leave-active {
    transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .drawer-overlay-enter-from,
  .drawer-overlay-leave-to {
    opacity: 0;
  }
}
</style>
