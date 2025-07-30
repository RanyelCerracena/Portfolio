<template>
  <div class="backgroundLayer">
    <span class="blurLayer"></span>
    <span class="animationSpan">
      <span class="light"></span>
    </span>
    <span class="secondAnimationSpan">
      <span class="light"></span>
    </span>
  </div>
</template>

<script setup>
defineOptions({
  name: 'backgroundAnimation',
})
</script>

<style scoped>
.backgroundLayer {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
}

.animationSpan {
  background-color: var(--circle-primary);
  height: 25vw;
  width: 25vw;
  border-radius: 50%;
  position: absolute;
  bottom: 10%;
  left: 0;
  animation: CircleAnimation 20s ease-in-out infinite alternate;
  filter: blur(90px);
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: screen;
  z-index: 0;
}

.secondAnimationSpan {
  background-color: var(--circle-secondary);
  height: 25vw;
  width: 25vw;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  right: 0;
  animation: SecondCircleAnimation 20s ease-in-out infinite alternate 0.4s;
  filter: blur(90px);
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: screen;
  z-index: 0;
}

.light {
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background-color: #ffffff;
  filter: blur(70px);
}

.blurLayer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(250px);
  background-color: #0000004f;
  z-index: 1;
}

@keyframes CircleAnimation {
  0% {
    transform: translateX(0) scale(1);
    opacity: 0;
  }

  50% {
    transform: translateX(20vw) scale(1.05);
    opacity: 0.6;
  }

  100% {
    transform: translateX(40vw) scale(1);
    opacity: 0.1;
  }
}

@keyframes SecondCircleAnimation {
  0% {
    transform: translateX(0) scale(1);
    opacity: 0;
  }

  50% {
    transform: translateX(-20vw) scale(1.05);
    opacity: 0.6;
  }

  100% {
    transform: translateX(-40vw) scale(1);
    opacity: 0.1;
  }
}
</style>
