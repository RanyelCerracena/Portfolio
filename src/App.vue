<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n.js'
import LoadingView from './components/layout/LoadingView.vue'
import MouseAnimation from './components/MouseAnimation.vue'
import Navbar from './components/layout/NavBar.vue'

const { t } = useI18n()

const isInitialLoading = ref(true)
const route = useRoute()

const showVideo = computed(() => route.name !== 'projects')

onMounted(() => {
  const TOTAL_DURATION_MS = 4200

  setTimeout(() => {
    isInitialLoading.value = false
  }, TOTAL_DURATION_MS)
})

watch(() => route.name, (name) => {
  if (name === 'projects') {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}, { immediate: true })
</script>

<template>
  <LoadingView v-if="isInitialLoading" />
  <MouseAnimation />
  <p v-if="showVideo" class="quote" :class="{ 'quote-entrance': !isInitialLoading }">
    {{ t('quote') }}
  </p>

  <div class="app-shell">
    <video v-if="showVideo" ref="backgroundVideo" @canplaythrough="videoReady = true"
      class="background-video" autoplay muted loop playsinline preload="auto">
      <source src="/videos/wake_up_neo_alpha.webm" type="video/webm" />
    </video>
    <div class="navbar-fixed">
      <Navbar />
    </div>
    <div class="routerView">
      <RouterView v-slot="{ Component, route: currentRoute }">
        <Transition :name="currentRoute.meta.transition || 'page'" mode="out-in">
          <component :is="Component" :key="currentRoute.fullPath" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.routerView {
  position: relative;
  z-index: 1;
}

.quote {
  position: absolute;

  font-family: var(--title-font);
  font-size: var(--h2-size);
  font-style: italic;
  text-align: center;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 1;
}

.background-video {
  width: 100%;
  height: 100dvh;

  object-fit: cover;
  display: block;

  z-index: 0;

  pointer-events: none;
  user-select: none;
}

/* ==========================================
   PAGE TRANSITIONS
   ========================================== */

/* Default: Home → Projects */
.page-enter-active {
  transition:
    opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.page-leave-active {
  transition:
    opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.99);
}

/* Projects → Home (reverse) */
.page-back-enter-active {
  transition:
    opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.page-back-leave-active {
  transition:
    opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.page-back-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}

.page-back-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.99);
}
</style>
