<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BackgroundAnimation from './components/BackgroundAnimation.vue'
import TheHeader from './components/TheHeader.vue'
import AboutMeView from './views/AboutMeView.vue'
</script>

<template>
  <main class="mainBg">
    <TheHeader />
    <RouterView />
    <BackgroundAnimation class="bgAnimation" />
  </main>
</template>

<style scoped>
.mainBg {
  height: 100vh;
  width: 100vw;
}

.bgAnimation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
