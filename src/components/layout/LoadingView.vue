<script setup>
import { ref, onMounted } from 'vue'

const currentPhase = ref('dark') // 'dark', 'drawing', 'wireframe', 'filling', 'alive', 'exit', 'split'
const quoteText = 'Curiosity brought you here.'
const isHidden = ref(false)

onMounted(() => {
  // Evita scrollbar durante o loading
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'

  // Fase 1: Escuridão com glow sutil (0ms - 500ms)

  // Fase 2: Desenho sequencial dos traços (500ms - 1800ms)
  setTimeout(() => {
    currentPhase.value = 'drawing'
  }, 500)

  // Fase 3: Pausa com wireframe completo (1800ms - 2000ms)
  setTimeout(() => {
    currentPhase.value = 'wireframe'
  }, 1800)

  // Fase 4: Preenchimento gradativo (2000ms - 2700ms)
  setTimeout(() => {
    currentPhase.value = 'filling'
  }, 2000)

  // Fase 5: Respiração (Float) + Revelação da frase (2700ms - 3300ms)
  setTimeout(() => {
    currentPhase.value = 'alive'
  }, 2700)

  // Fase 6: Saída cinematográfica (3300ms - 3700ms)
  setTimeout(() => {
    currentPhase.value = 'exit'
  }, 3300)

  // Fase 7: Abertura das metades da tela (3700ms - 4200ms)
  setTimeout(() => {
    currentPhase.value = 'split'

    // Finaliza o loading e restaura o comportamento de scroll
    setTimeout(() => {
      isHidden.value = true
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }, 500)
  }, 3700)

})
</script>

<template>
  <div v-if="!isHidden" class="loading-container" :class="{ 'is-splitting': currentPhase === 'split' }">
    <!-- Metade Esquerda -->
    <div class="half left-half"></div>

    <!-- Linha Divisória -->
    <div class="divider-line" :class="{ 'show-line': currentPhase === 'split' }"></div>

    <!-- Metade Direita -->
    <div class="half right-half"></div>

    <!-- Conteúdo Dinâmico do Loading -->
    <div class="loading-content" :class="`current-${currentPhase}`">
      <div class="sparrow-wrap" aria-hidden="true">
        <!-- SVG Sparrow (HomeView original) -->
        <svg class="bird" width="144" height="98" viewBox="0 0 144 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sparrow-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#44d8dd" />
              <stop offset="100%" stop-color="#44d8ff" />
            </linearGradient>
          </defs>
          <path class="sparrow-path" fill-rule="evenodd" clip-rule="evenodd"
            d="M0.0014837 0.083323C0.0397855 0.181795 0.805606 1.90736 1.70331 3.91763L3.33549 7.5729L4.85885 8.45915C9.34539 11.0699 21.6433 18.4459 21.5071 18.4444C21.4472 18.4437 17.7992 17.3291 13.4006 15.9671C9.00176 14.6053 5.40291 13.5188 5.40291 13.5526C5.40291 13.712 9.15693 21.8514 9.2986 21.999C9.44659 22.1536 19.9667 25.8431 21.7247 26.3571C22.3817 26.5492 22.4266 26.6019 22.0512 26.7399C21.8118 26.8278 19.8275 27.0822 17.6417 27.3051C15.4558 27.5281 13.6931 27.7809 13.7244 27.8667C13.7558 27.9527 15.8084 29.6414 18.2858 31.6191L22.7904 35.2152L27.9544 34.1478C30.7946 33.5604 33.1552 33.1168 33.1998 33.1617C33.2446 33.2065 32.2479 34.1458 30.9848 35.2489C29.722 36.3519 28.6887 37.3305 28.6887 37.4233C28.6887 37.5618 37.6232 42.0273 37.9005 42.0273C37.9473 42.0273 38.4561 40.9956 39.031 39.7347C39.6058 38.4738 40.1405 37.4421 40.2191 37.4421C40.2976 37.4421 40.6791 38.8913 41.0671 40.6627C41.4552 42.4341 41.8643 43.9764 41.9766 44.0904C42.0889 44.2044 43.8214 45.4494 45.8264 46.8573L49.4718 49.4171L49.5806 47.6684L49.6894 45.9197L50.9849 48.5525L52.2804 51.1854L54.7933 53.0182C56.1755 54.0263 57.832 55.2257 58.4747 55.6835L59.6431 56.5161L59.5127 55.8765C59.4411 55.5248 59.0849 53.0263 58.7208 50.3243C58.3567 47.6223 58.0246 45.1867 57.983 44.9116C57.8936 44.3208 57.7985 44.2861 59.6446 45.5166C61.0359 46.4439 61.1371 46.5697 61.5786 47.9184C61.8348 48.7014 62.862 51.5241 63.8611 54.1914L65.6778 59.0412L63.4126 64.9993C61.2653 70.6478 56.629 82.7016 56.4131 83.1975C56.3578 83.3243 57.1726 84.2086 58.224 85.1621C60.9101 87.5986 69.2457 95.3487 70.7352 96.7945L71.9774 98L73.129 96.9384C73.7625 96.3546 75.02 95.1827 75.9231 94.3343C78.3054 92.0965 85.8925 85.0254 86.8502 84.1503L87.6676 83.4032L85.4907 77.7263C84.2936 74.604 82.973 71.1651 82.5565 70.0843C82.14 69.0035 81.0216 66.0875 80.0714 63.6045L78.3437 59.0899L80.2712 53.9484C81.3313 51.1206 82.362 48.2887 82.5617 47.6551C82.886 46.6271 83.0842 46.392 84.4067 45.4662C85.2217 44.8957 85.9393 44.4291 86.0013 44.4291C86.0633 44.4291 86.0711 44.7485 86.0185 45.1387C85.2328 50.9706 84.6181 55.7647 84.6181 56.0588C84.6181 56.3154 85.6916 55.6453 88.1281 53.8676L91.6384 51.3068L93.0247 48.4684L94.4107 45.63L94.4109 47.5485L94.4111 49.4673L95.7713 48.5498C99.1878 46.2457 102.228 43.9529 102.325 43.607C102.383 43.3987 102.698 41.9264 103.025 40.3352C103.352 38.7439 103.688 37.4421 103.77 37.4421C103.853 37.4421 104.39 38.4493 104.963 39.6801C105.536 40.9109 106.031 41.9498 106.064 41.9887C106.137 42.0769 115.521 37.5085 115.521 37.3849C115.521 37.3353 114.436 36.3722 113.111 35.2449C111.785 34.1176 110.781 33.1716 110.88 33.1427C110.979 33.1139 113.351 33.5633 116.151 34.1417L121.243 35.193L125.77 31.5685C128.26 29.5752 130.302 27.8905 130.308 27.825C130.314 27.7593 128.556 27.5292 126.402 27.3132C124.247 27.0973 122.276 26.8661 122.022 26.7995C121.484 26.6582 122.201 26.3822 129.775 23.8147L134.78 22.1178L136.681 17.8402C137.726 15.4876 138.559 13.5398 138.531 13.5118C138.503 13.4839 135.885 14.276 132.713 15.2721C123.731 18.0924 122.702 18.4059 122.702 18.323C122.702 18.23 136.963 9.69846 139.105 8.5098C140.458 7.75914 140.653 7.56285 141.137 6.45826C141.431 5.78642 142.214 4.07702 142.876 2.65954C143.537 1.24206 144.042 0.0455502 143.997 0.000571729C143.952 -0.0444068 137.649 2.57024 129.99 5.81088C112.381 13.2616 103.014 17.1863 98.8968 18.8394C95.7737 20.0931 95.5302 20.2383 92.1505 22.8549L88.6441 25.5695L85.5338 26.6381L82.4238 27.7069L81.4327 27.1704C79.6706 26.2167 79.4919 25.9361 78.3714 22.3584L77.3277 19.0254L75.8043 18.0507C74.9664 17.5147 73.7741 16.5245 73.1545 15.8507L72.0278 14.6254L70.7606 15.9577C70.0636 16.6904 68.9415 17.5998 68.2673 17.9787C67.5931 18.3575 66.9418 18.7896 66.8199 18.9389C66.698 19.0883 66.0928 20.7595 65.475 22.6527L64.3518 26.0951L63.0189 26.9455L61.6857 27.7958L59.0607 26.8602C55.0197 25.4198 54.9217 25.3647 51.6426 22.7034C48.9974 20.5564 48.2881 20.097 46.6231 19.4518C43.5785 18.2721 30.4926 12.8057 18.4604 7.68753C3.94026 1.51106 -0.0890479 -0.148775 0.0014837 0.083323Z" />
        </svg>

        <!-- Glow Azul Sutil de Fundo -->
        <div class="sparrow-glow" aria-hidden="true" />
      </div>

      <!-- Frase do Loading -->
      <div class="loading-quote">
        {{ quoteText }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ==========================================
   LAYOUT GERAL E PAINÉIS DE ABERTURA
   ========================================== */
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  display: flex;
  pointer-events: all;
  overflow: hidden;
}

.half {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: var(--color-background-loading, #000000);
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.left-half {
  left: 0;
  transform-origin: left;
}

.right-half {
  right: 0;
  transform-origin: right;
}

.divider-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 0%;
  background-color: white;
  z-index: 10;
  transition:
    height 0.3s ease-in,
    opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow:
    0 0 15px rgba(255, 255, 255, 0.8),
    0 0 30px rgba(255, 255, 255, 0.6);
}

.divider-line.show-line {
  height: 100%;
}

.loading-container.is-splitting .left-half {
  transform: translateX(-100%);
}

.loading-container.is-splitting .right-half {
  transform: translateX(100%);
}

.loading-container.is-splitting .divider-line {
  opacity: 0;
  height: 100%;
}

/* ==========================================
   CONTEÚDO CENTRAL DO LOADING
   ========================================== */
.loading-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.sparrow-wrap {
  position: relative;
  width: min(280px, 60vw);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(0);
}

.sparrow-svg,
.bird {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 6px 16px rgba(68, 216, 255, 0.15));
  overflow: visible;
}

/* ==========================================
   ESTILOS DE FUNDAÇÃO DO SPARROW & GLOW
   ========================================== */
.sparrow-path {
  fill: none;
  stroke: #ffffff;
  stroke-width: 1.5px;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-opacity: 0;
  fill-opacity: 0;
}

.sparrow-glow {
  position: absolute;
  inset: -18% 0 -18% 0;
  border-radius: 999px;
  background: radial-gradient(circle at 50% 50%, rgba(68, 216, 255, 0.35), rgba(68, 216, 255, 0) 60%);
  filter: blur(32px);
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 1.5s cubic-bezier(0.25, 1, 0.5, 1), transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: opacity, transform, filter;
  pointer-events: none;
}

/* ==========================================
   FASE 1: ESCURIDÃO E GLOW SUBTIL
   ========================================== */
.current-dark .sparrow-glow {
  opacity: 0.15;
  transform: scale(0.65);
}

/* ==========================================
   FASE 2: DESENHO SEQUENCIAL
   ========================================== */
.current-drawing .sparrow-glow {
  opacity: 0.2;
  transform: scale(0.75);
}

.current-drawing .sparrow-path {
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  animation: draw-path-kf 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}



@keyframes draw-path-kf {
  0% {
    stroke-dashoffset: 800;
    stroke-opacity: 0;
  }

  1% {
    stroke-opacity: 1;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
}

/* ==========================================
   FASE 3: PAUSA WIREFRAME
   ========================================== */
.current-wireframe .sparrow-path {
  stroke-dasharray: 800;
  stroke-dashoffset: 0;
  stroke-opacity: 1;
  fill-opacity: 0;
}

.current-wireframe .sparrow-glow {
  opacity: 0.2;
  transform: scale(0.75);
}

/* ==========================================
   FASE 4: PREENCHIMENTO E REVELAÇÃO DE ENERGIA
   ========================================== */
.current-filling .sparrow-glow {
  opacity: 0.45;
  transform: scale(1);
}

.current-filling .sparrow-path {
  stroke-dasharray: 800;
  stroke-dashoffset: 0;
  fill: url(#sparrow-gradient);
  animation: fill-path-kf 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}



@keyframes fill-path-kf {
  0% {
    fill-opacity: 0;
    stroke: #ffffff;
    stroke-opacity: 1;
  }

  30% {
    fill-opacity: 0.3;
    stroke: #44d8dd;
    stroke-opacity: 1;
  }

  70% {
    fill-opacity: 0.8;
    stroke: #44d8ff;
    stroke-opacity: 0.5;
  }

  100% {
    fill-opacity: 1;
    stroke: #44d8ff;
    stroke-opacity: 0;
  }
}

/* ==========================================
   FASE 5: RESPIRAÇÃO / FLOAT & QUOTE REVEAL
   ========================================== */
.current-alive .sparrow-path {
  fill: url(#sparrow-gradient);
  fill-opacity: 1;
  stroke-opacity: 0;
}

.current-alive .sparrow-glow {
  opacity: 0.35;
  transform: scale(1);
  animation: glow-pulse-kf 3s ease-in-out infinite;
}

.current-alive .sparrow-svg {
  animation: sparrow-float-kf 3.5s ease-in-out infinite;
}

.current-alive .loading-quote {
  opacity: 1;
  transform: translateY(0);
}

@keyframes sparrow-float-kf {

  0%,
  100% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-5px) scale(1.02);
  }
}

@keyframes glow-pulse-kf {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.95);
  }

  50% {
    opacity: 0.45;
    transform: scale(1.05);
  }
}

/* ==========================================
   FASE 6: SAÍDA CINEMATOGRÁFICA
   ========================================== */
.current-exit .sparrow-path {
  fill: url(#sparrow-gradient);
  fill-opacity: 1;
  stroke-opacity: 0;
}

.current-exit .sparrow-glow {
  opacity: 0.85;
  transform: scale(1.35);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.current-exit .sparrow-wrap {
  animation: sparrow-launch-kf 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
}



/* Desaparece a frase antes do pássaro */
.current-exit .loading-quote {
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

@keyframes left-wing-open-kf {
  0% {
    transform: rotate(0deg);
  }

  30%,
  100% {
    transform: rotate(-7deg);
  }
}

@keyframes right-wing-open-kf {
  0% {
    transform: rotate(0deg);
  }

  30%,
  100% {
    transform: rotate(7deg);
  }
}

@keyframes sparrow-launch-kf {
  0% {
    transform: translateY(0) scale(1);
    filter: blur(0px);
    opacity: 1;
  }

  30% {
    transform: translateY(3px) scale(1.03);
    filter: blur(1px);
    opacity: 1;
  }

  50% {
    transform: translateY(-30px) scale(1.1);
    filter: blur(4px);
    opacity: 0.85;
  }

  100% {
    transform: translateY(-320px) scale(1.25);
    filter: blur(18px);
    opacity: 0;
  }
}


/* ==========================================
   FASE 7: SPLIT DA TELA (TELA DE CARREGAMENTO CONCLUÍDA)
   ========================================== */
.current-split .loading-content {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* ==========================================
   ESTILO DA FRASCO (QUOTE)
   ========================================== */
.loading-quote {
  font-family: var(--p-font, sans-serif);
  font-size: 0.82rem;
  font-weight: 300;
  letter-spacing: 0.16em;
  color: var(--text-secondary-color, #888888);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  text-align: center;
  max-width: 520px;
  margin-top: 1.5rem;
}
</style>
