<template>
  <div class="home">
    <h1 class="typewriterAnimation line1">Olá. Eu sou Ranyel Cerracena.</h1>
    <h1 class="typewriterAnimation line2">Desenvolvedor Full-Stack, e esse, é o meu portfólio.</h1>
  </div>
</template>

<script setup>
defineOptions({
  name: 'HomeView',
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

.home h1 {
  font-size: 2rem;
  text-align: center;
  margin: 0;
}

.typewriterAnimation {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #fff;
}

/* Primeira linha */
.line1 {
  width: 0;
  animation: typing1 4s steps(35, end) forwards, blink 0.75s step-end infinite;
}

/* Segunda linha (com atraso para começar após a primeira) */
.line2 {
  width: 0;
  animation: typing2 4s steps(60, end) forwards;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}

@keyframes typing1 {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes typing2 {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
