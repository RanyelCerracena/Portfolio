<script setup>
import DevelopmentCard from './DevelopmentCard.vue'
import DesignCard from './DesignCard.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <DevelopmentCard v-if="project.type === 'development'" :project="project" />
  <DesignCard v-else :project="project" />
</template>
