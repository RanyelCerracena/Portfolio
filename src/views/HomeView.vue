<template>
  <div class="home">
    <div>
      <h1 class="typewriterAnimation">{{ helloText }}</h1>
      <h1 class="typewriterAnimation">{{ devText }} <div class="lineBlink"></div>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'HomeView',
})

const helloText = ref('')
const devText = ref('')

const fullHelloText = 'Olá, eu sou Ranyel Cerracena'
const fullDevText = 'Desenvolvedor Full Stack'

onMounted(async () => {
  await animateTyping(helloText, fullHelloText)
  await animateTyping(devText, fullDevText)
})

function animateTyping(targetRef, fullText) {
  return new Promise((resolve) => {
    let index = 0;
    targetRef.value = '';

    function step() {
      if (index < fullText.length) {
        targetRef.value += fullText.charAt(index);
        index++;
        setTimeout(step, 50);
      } else {
        resolve();
      }
    }
    step();
  });
}

</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 94vh;
  width: 100vw;
}

.home h1 {
  font-size: 2rem;
  text-align: center;
  margin: 0;
}


.lineBlink {
  display: inline-block;
  width: 2px;
  height: 35px;
  background-color: var(--color-text);
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    background-color: transparent;
  }
}
</style>
