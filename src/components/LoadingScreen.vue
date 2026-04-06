<script setup>
import { ref, onMounted } from 'vue'

const currentPhase = ref('butterfly') // 'butterfly', 'split'
const isHidden = ref(false)

onMounted(() => {
  // Trava o scroll durante o loading
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'

  // Borboleta (0 -> 3.5s)
  setTimeout(() => {
    currentPhase.value = 'split'

    // Dividir tela e esconder (3.5s -> 4.5s)
    setTimeout(() => {
      isHidden.value = true
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }, 1000)
  }, 3500)
})
</script>

<template>
  <div
    v-if="!isHidden"
    class="loading-container"
    :class="{ 'is-splitting': currentPhase === 'split' }"
  >
    <!-- Metade Esquerda -->
    <div class="half left-half"></div>

    <!-- Linha Divisória -->
    <div class="divider-line" :class="{ 'show-line': currentPhase === 'split' }"></div>

    <!-- Metade Direita -->
    <div class="half right-half"></div>

    <!-- Conteúdo Dinâmico do Loading -->
    <Transition name="fade" mode="out-in">
      <!-- Borboleta -->
      <div v-if="currentPhase === 'butterfly'" class="loading-content sequence-phase" key="butterfly">
        <svg class="butterfly-icon" viewBox="0 0 100 100" width="80" height="80">
          <!-- Asa Superior Esquerda -->
          <path
            class="sketch-wing-left"
            d="M 50 50 C 30 20 10 30 20 50 C 30 70 50 60 50 50 Z"
            fill="none"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Asa Superior Direita -->
          <path
            class="sketch-wing-right"
            d="M 50 50 C 70 20 90 30 80 50 C 70 70 50 60 50 50 Z"
            fill="none"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Asa Inferior Esquerda -->
          <path
            class="sketch-wing-left-bot"
            d="M 50 55 C 30 65 20 85 35 90 C 50 85 50 65 50 55 Z"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Asa Inferior Direita -->
          <path
            class="sketch-wing-right-bot"
            d="M 50 55 C 70 65 80 85 65 90 C 50 85 50 65 50 55 Z"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Antenas -->
          <path
            class="sketch-antennas"
            d="M 50 45 C 45 30 40 25 40 25 M 50 45 C 55 30 60 25 60 25"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
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
  background-color: #080808;
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5); /* Sombra para profundidade */
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

/* Animação de Abertura */
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

/* Modal Content & Sequências */
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

/* Borboleta */
.butterfly-icon {
  animation: float-butterfly 3s infinite ease-in-out;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
}
.sketch-wing-left,
.sketch-wing-right,
.sketch-wing-left-bot,
.sketch-wing-right-bot,
.sketch-antennas {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: draw-wing 1.5s forwards ease-in-out;
}

/* Delay suave para parecer rascunho sendo feito aos poucos */
.sketch-wing-right {
  animation-delay: 0.2s;
}
.sketch-wing-left-bot {
  animation-delay: 0.4s;
}
.sketch-wing-right-bot {
  animation-delay: 0.6s;
}
.sketch-antennas {
  animation-delay: 0.8s;
}

@keyframes draw-wing {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes float-butterfly {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.05);
  }
}

/* Transições de Fase (Vue Transition) */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translate(-50%, -40%); /* Vem levemente de cima */
}

.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -60%); /* Sai levemente para cima */
}
</style>
