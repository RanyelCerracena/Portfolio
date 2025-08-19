<template>
  <div class="backgroundLayer">
    <span class="blurLayer"></span>
    <div class="homeAnimations">
      <span class="animationSpan">
        <span class="light"></span>
      </span>
      <span class="secondAnimationSpan">
        <span class="light2"></span>
      </span>
    </div>
    <div class="aboutAnimations">
      <span class="circleAbout">
        <span class=""></span>
      </span>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'backgroundAnimation',
})
</script>

<style scoped>
.backgroundLayer {
  overflow: hidden;
}

.blurLayer{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.144);
  z-index: 3;
}

.homeAnimations {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 2;
}

.light, .light2 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 60%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  filter: blur(40px);
}

.animationSpan {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: var(--vt-c-circle-primary-dark);
  animation: move-and-pulse-1 60s infinite ease-in-out;
  overflow: hidden;
  filter: blur(90px);
}

.secondAnimationSpan {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: var(--vt-c-circle-primary-dark);
  animation: move-and-pulse-2 65s infinite ease-in-out;
  overflow: hidden;
  filter: blur(90px);
  transition: all 3s ease-in-out;
}

@keyframes move-and-pulse-1 {
  0% { transform: translate(0, 0) scale(1); }
  20% { transform: translate(30vw, 10vh) scale(3); }
  40% { transform: translate(10vw, 40vh) scale(0.9); }
  60% { transform: translate(40vw, 70vh) scale(1.2); }
  80% { transform: translate(20vw, 50vh) scale(2); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes move-and-pulse-2 {
  0% { transform: translate(0, 0) scale(1); }
  20% { transform: translate(-25vw, -10vh) scale(2); }
  50% { transform: translate(-40vw, -40vh) scale(3); }
  80% { transform: translate(-10vw, -60vh) scale(1.2); }
  100% { transform: translate(0, 0) scale(1); }
}

.aboutAnimations{
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 2;
}

.circleAbout{
  position: absolute;
  top: 80%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--about-scroll-color);
  animation: aboutAnimation 60s infinite ease-in-out;
  filter: blur(40px);
}

@keyframes aboutAnimation {
  0% { transform: translate(-50%, -50%) scale(1); }
  20% { transform: translate(-250%, -250%) scale(4); }
  40% { transform: translate(250%, -320%) scale(3); }
  60% { transform: translate(-50%, 250%) scale(4); }
  80% { transform: translate(150%, -150%) scale(2); }
  100% { transform: translate(-50%, -50%) scale(1);
  }
}
</style>
