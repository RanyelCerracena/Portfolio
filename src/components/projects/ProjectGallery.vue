<script setup>
import { ref } from 'vue'

defineProps({
  images: { type: Array, required: true },
})

const lightbox = ref(null)

function openLightbox(src) {
  lightbox.value = src
}

function closeLightbox() {
  lightbox.value = null
}
</script>

<template>
  <div class="gallery">
    <h3 class="section-title">Gallery</h3>
    <div class="gallery-grid">
      <button
        v-for="(img, i) in images"
        :key="i"
        type="button"
        class="gallery-item"
        @click="openLightbox(img)"
      >
        <img :src="img" :alt="`Screenshot ${i + 1}`" />
      </button>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightbox" class="lightbox" @click="closeLightbox">
          <img :src="lightbox" alt="Preview" @click.stop />
          <button class="lightbox-close" @click="closeLightbox">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery {
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.gallery-item {
  border: none;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    transform 200ms ease,
    border-color 200ms ease;
}

.gallery-item:hover {
  transform: scale(1.02);
  border-color: rgba(255, 255, 255, 0.15);
}

.gallery-item img {
  width: 100%;
  display: block;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: pointer;
}

.lightbox img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 8px;
  cursor: default;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary-color);
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
