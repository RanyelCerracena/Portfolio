<script setup>
defineProps({
  videos: { type: Array, required: true },
})
</script>

<template>
  <div class="videos" v-if="videos.length">
    <h3 class="section-title">Videos</h3>
    <div class="videos-list">
      <div v-for="(video, i) in videos" :key="i" class="video-item">
        <div class="video-placeholder">
          <i class="bi bi-play-circle"></i>
          <span>{{ video }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.videos {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-family: var(--title-font);
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-primary-color);
  margin: 0;
}

.videos-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.video-item {
  border-radius: 8px;
  overflow: hidden;
}

.video-placeholder {
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  color: var(--text-secondary-color);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.video-placeholder i {
  font-size: 1.2rem;
}
</style>
