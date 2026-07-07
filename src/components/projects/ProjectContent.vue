<script setup>
import ProjectHero from './ProjectHero.vue'
import ProjectGallery from './ProjectGallery.vue'
import ProjectLinks from './ProjectLinks.vue'
import ProjectStack from './ProjectStack.vue'
import ProjectVideo from './ProjectVideo.vue'

defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <div class="content-scroll">
    <div class="content-inner">
      <ProjectHero :project="project" />

      <div class="content-divider"></div>

      <p class="long-description">{{ project.longDescription }}</p>

      <ProjectStack
        v-if="project.type === 'development'"
        :stack="project.stack"
      />

      <ProjectGallery
        v-if="project.gallery.length"
        :images="project.gallery"
      />

      <ProjectVideo
        v-if="project.videos.length"
        :videos="project.videos"
      />

      <ProjectLinks :project="project" />
    </div>
  </div>
</template>

<style scoped>
.content-scroll {
  flex: 1;
  height: 100dvh;
  overflow-y: auto;
}

.content-inner {
  max-width: 780px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.content-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
}

.long-description {
  font-size: 0.88rem;
  color: var(--text-secondary-color);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .content-inner {
    padding: 24px;
  }
}
</style>
