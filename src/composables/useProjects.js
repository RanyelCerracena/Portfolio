import { ref, computed, watch } from 'vue'
import projectsData from '@/data/projects.js'
import projectFilters from '@/data/projectFilters.js'

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
    return projectsData.filter((project) => {
      const typeMatch = project.type === activeType.value
      const categoryMatch =
        activeFilter.value === 'all' || project.categories.includes(activeFilter.value)
      return typeMatch && categoryMatch
    })
  })

  const currentProject = computed(() => {
    if (selectedProjectId.value) {
      const found = filteredProjects.value.find((p) => p.id === selectedProjectId.value)
      if (found) return found
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
