<template>
  <div class="home">
    <h1 class="homeText">{{ helloText }}</h1>
    <h2 class="devText">{{ devText }}</h2>

    <ScrollIndicator/>
  </div>
</template>

<script setup>
import ScrollIndicator from '@/components/ScrollIndicator.vue';
import { onMounted } from 'vue'

defineOptions({
  name: 'HomeView',
})

const helloText = "Hello, i'm Ranyel Cerracena";
const devText = 'Full Stack developer';

onMounted(() => {
  const hello = document.querySelector('.homeText');
  const dev = document.querySelector('.devText');

  setTimeout(() => {
    hello.classList.add('showText');
  }, 10);

  setTimeout(() => {
    dev.classList.add('showText');
  }, 600);
})
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 100vh;
  margin: 0 auto;
  z-index: 2;
}

.home div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.homeText,
.devText {
  font-size: 2.5vw;
  text-align: center;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.showText {
  opacity: 1;
}

.lineBlink {
  display: inline-block;
  width: 2px;
  height: 35px;
  background-color: var(--color-text);
  animation: blink 1s infinite;
}

.sectionsButtons {
  margin-top: 25px;
}

@media (max-width: 834px) {
  .homeText,
  .devText {
    font-size: 4vw;
  }
}

@media (max-width: 768px) {
  .homeText,
  .devText {
    font-size: 5vw;
  }
}
</style>
