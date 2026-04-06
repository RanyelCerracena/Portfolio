<script setup>
import SocialMedias from './Medias.vue'

defineOptions({
  name: 'HomePage',
})
</script>

<template>
  <div class="home-page">
    <div class="home-content">
      <figure class="hero-image">
        <div class="sticker-container">
          <img
            src="/RanyelSticker.png"
            alt="Ilustração estilizada de Ranyel Cerracena, desenvolvedor Full-Stack"
          />
          <div class="shine"></div>
        </div>
      </figure>

      <div class="info-row">
        <div class="intro-section">
          <p class="short-bio">
            Transformando ideias em interfaces vibrantes e sistemas robustos. Especializado em criar
            experiências fluidas e inovadoras com as melhores tecnologias do mercado.
          </p>
          <div class="home-actions">
            <a href="#projects" class="primary-btn">Ver Projetos</a>
            <a href="#about" class="secondary-btn">Sobre Mim</a>
          </div>
        </div>

        <div class="medias-wrapper">
          <SocialMedias />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100dvh;
  position: relative;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
}

.hero-image {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 5;
}

.sticker-container {
  width: 100%;
  max-width: 800px; /* Bem grande para preencher bem no desktop */
  height: auto;
  aspect-ratio: 16 / 9;
  transform: rotate(-3deg);
  animation: float 5s ease-in-out infinite;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  position: relative;
}

.sticker-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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

.info-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Alinha o texto e o medias pelo topo */
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  gap: 4rem;
  z-index: 10;
}

.intro-section {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.short-bio {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem; /* Texto maior para preencher melhor a tela */
  color: #333;
  line-height: 1.8;
  margin: 0;
  font-weight: 500;
  text-align: left;
}

.home-actions {
  display: flex;
  gap: 1.5rem;
}

.primary-btn,
.secondary-btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
}

.primary-btn {
  background-color: #623697;
  color: white;
  box-shadow: 0 8px 20px rgba(98, 54, 151, 0.3);
}

.primary-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(98, 54, 151, 0.5);
  filter: brightness(1.1);
}

.secondary-btn {
  background-color: transparent;
  color: #2c3e50;
  border: 2px solid #2c3e50;
}

.secondary-btn:hover {
  background-color: #2c3e50;
  color: white;
  transform: translateY(-5px);
}

.medias-wrapper {
  flex: 0.8;
  display: flex;
  justify-content: flex-end; /* Encosta as mídias na direita */
  margin-top: 1rem;
}

@keyframes float {
  0%,
  100% {
    transform: rotate(-3deg) translateY(0);
  }
  50% {
    transform: rotate(-3deg) translateY(-15px);
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

@media (max-width: 1024px) {
  .sticker-container {
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .info-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }

  .short-bio {
    text-align: center;
    font-size: 1.2rem;
  }

  .home-actions {
    justify-content: center;
  }

  .medias-wrapper {
    justify-content: center;
    width: 100%;
    padding-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .home-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    gap: 1rem;
  }
  .sticker-container {
    width: 95%;
  }
}
</style>
