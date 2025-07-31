<template>
  <div class="home">
    <h1 class="homeText">{{ helloText }}</h1>
    <h2 class="devText">{{ devText }}</h2>

    <section class="sectionsButtons">
      <PagesButtons />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

defineOptions({
  name: 'HomeView',
})

const helloText = 'Olá, eu sou Ranyel Cerracena!';
const devText = 'Desenvolvedor Full Stack';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 94vh;
  width: 100vw;
}

.home div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.homeText,
.devText {
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

#dynamicFonts {
  display: inline-block;
  min-width: 220px;
  min-height: 2.3rem;
  text-align: center;
  transition: font-family 0.5s ease-in-out;
  font-size-adjust: 0.5;
}

@keyframes blink {
  50% {
    background-color: transparent;
  }
}
</style>
