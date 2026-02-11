<script setup>
import SocialMedias from './Medias.vue'

defineOptions({
  name: 'HomePage',
})
</script>

<template>
  <div class="home-page">
    <figure class="hero-image">
      <div class="sticker-container">
        <img
          src="/RanyelSticker.png"
          alt="Ilustração estilizada de Ranyel Cerracena, desenvolvedor Full-Stack"
        />
        <div class="shine"></div>
      </div>
    </figure>
    <SocialMedias />
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100dvh;
  position: relative;
  width: 100%;
}

.hero-image {
  margin: 0;
  padding: 0;
}

.sticker-container {
  position: absolute;
  top: 7%;
  left: 5%;
  width: 90%;
  height: 300px;
  transform: rotate(-15deg);
  animation: float 4s ease-in-out infinite;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgba(0, 0, 0, 0.05);
  border-radius: 15px;
}

.sticker-container img {
  width: 100%;
  height: 100%;
}

.shine {
  position: absolute;
  top: 0;
  left: -150%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg);
  animation: shine 6s infinite;
}

@keyframes float {
  0%,
  100% {
    transform: rotate(-15deg) translateY(0);
  }
  50% {
    transform: rotate(-15deg) translateY(-20px);
  }
}

@keyframes shine {
  0% {
    left: -150%;
  }
  15%,
  100% {
    left: 250%;
  }
}
</style>
