import { ref, computed, watch } from 'vue'
import projectsData from '@/data/projects.js'
import projectFilters from '@/data/projectFilters.js'
import { messages } from '@/i18n/index.js'
import { locale } from '@/composables/useI18n.js'

function getTranslatedProject(project) {
  const lang = locale.value
  const translations = messages[lang]?.projects?.data?.[project.id]
  if (!translations) return project
  return {
    ...project,
    title: translations.title || project.title,
    description: translations.description || project.description,
    longDescription: translations.longDescription || project.longDescription,
  }
}

export function useProjects({ route, router } = {}) {
  const internalType = ref('development')
  const internalFilter = ref('all')
  const selectedProjectId = ref(null)

  const activeType = computed({
    get() {
      if (route && route.query.type) {
        const q = route.query.type
        if (q === 'development' || q === 'design') return q
      }
      return internalType.value
    },
    set(val) {
      internalType.value = val
      if (router && route) {
        router.replace({ query: { ...route.query, type: val } })
      }
    },
  })

  const activeFilter = computed({
    get() {
      if (route && route.query.filter) {
        const allowed = projectFilters[activeType.value] || []
        if (allowed.includes(route.query.filter)) return route.query.filter
      }
      return internalFilter.value
    },
    set(val) {
      internalFilter.value = val
      if (router && route) {
        router.replace({ query: { ...route.query, filter: val } })
      }
    },
  })

  const availableFilters = computed(() => {
    return projectFilters[activeType.value] || []
  })

  const filteredProjects = computed(() => {
    return projectsData
      .filter((project) => {
        const typeMatch = project.type === activeType.value
        const categoryMatch =
          activeFilter.value === 'all' || project.categories.includes(activeFilter.value)
        return typeMatch && categoryMatch
      })
      .map(getTranslatedProject)
  })

  const currentProject = computed(() => {
    if (selectedProjectId.value) {
      const found = filteredProjects.value.find((p) => p.id === selectedProjectId.value)
      if (found) return found
    }
    // Check URL query param for project
    if (route && route.query.project) {
      const found = filteredProjects.value.find((p) => p.id === route.query.project)
      if (found) {
        selectedProjectId.value = found.id
        return found
      }
    }
    return filteredProjects.value[0] || null
  })

  watch(filteredProjects, (list) => {
    if (list.length > 0 && !list.find((p) => p.id === selectedProjectId.value)) {
      selectedProjectId.value = list[0].id
    }
  }, { immediate: true })

  function changeType(type) {
    activeType.value = type
    activeFilter.value = 'all'
    selectedProjectId.value = null
  }

  function changeFilter(filter) {
    activeFilter.value = filter
  }

  function changeProject(id) {
    selectedProjectId.value = id
    if (router && route) {
      router.replace({ query: { ...route.query, project: id } })
    }
  }

  return {
    activeType,
    activeFilter,
    availableFilters,
    filteredProjects,
    currentProject,
    changeType,
    changeFilter,
    changeProject,
  }
}
