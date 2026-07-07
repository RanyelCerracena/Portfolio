<script setup>
import { ref, onMounted } from 'vue'
import LoadingView from './components/layout/LoadingView.vue'
import MouseAnimation from './components/MouseAnimation.vue'

const isInitialLoading = ref(true)


onMounted(() => {
  const TOTAL_DURATION_MS = 4500

  setTimeout(() => {
    isInitialLoading.value = false
  }, TOTAL_DURATION_MS)
})
</script>

<template>
  <LoadingView v-if="isInitialLoading" />
  <MouseAnimation />
  <p class="quote" :class="{ 'quote-entrance': !isInitialLoading }">
    Where your curiosity has brought you
  </p>

  <div class="app-shell">
    <video ref="backgroundVideo" @canplaythrough="videoReady = true" class="background-video" autoplay muted loop
      playsinline preload="auto">
      <source src="/videos/wake_up_neo_alpha.webm" type="video/webm" />
    </video>
    <div class="routerView">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
}

.routerView {
  /* deixa a página rolar normalmente (landing page) */
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
  /* tira o fixed: agora o vídeo ocupa o topo e o conteúdo começa abaixo */
  width: 100%;
  height: 100dvh;

  object-fit: cover;
  display: block;

  z-index: 0;

  pointer-events: none;
  user-select: none;
}
</style>
