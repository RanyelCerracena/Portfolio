<script setup>
import { useRouter } from 'vue-router'
import DevelopmentCard from './DevelopmentCard.vue'
import DesignCard from './DesignCard.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

function goToProject(id) {
  sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
  router.push({ path: '/projects', query: { project: id } })
}
</script>

<template>
  <DevelopmentCard
    v-if="project.type === 'development'"
    :project="project"
    @click="goToProject(project.id)"
  />
  <DesignCard
    v-else
    :project="project"
    @click="goToProject(project.id)"
  />
</template>
