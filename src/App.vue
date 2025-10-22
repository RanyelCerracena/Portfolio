<script setup>
import BackgroundAnimation from './components/BackgroundAnimation.vue'
import TheHeader from './components/TheHeader.vue'
import AboutMeView from './views/AboutMeView.vue'
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
</script>

<template>
  <div class="app">
    <div class="mainBg">
      <TheHeader />
      <BackgroundAnimation class="bgAnimation" />
    </div>
    <HomeView />
    <AboutMeView />
    <ProjectsView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 99vw;
  overflow-x: hidden;
}

.mainBg {
  position: absolute;
  height: 100%;
  width: 100%;
}

.bgAnimation {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 300vh;
  z-index: -1;
}
</style>
