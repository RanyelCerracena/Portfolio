<script setup>
import { ref, onMounted } from 'vue'

const currentPhase = ref('butterfly') // 'butterfly', 'split'
const quoteText = 'Curiosity brought you here.'
const isHidden = ref(false)

onMounted(() => {
  // Evita scrollbar durante o loading
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
  <div v-if="!isHidden" class="loading-container" :class="{ 'is-splitting': currentPhase === 'split' }">
    <!-- Metade Esquerda -->
    <div class="half left-half"></div>

    <!-- Linha Divisória -->
    <div class="divider-line" :class="{ 'show-line': currentPhase === 'split' }"></div>

    <!-- Metade Direita -->
    <div class="half right-half"></div>

    <!-- Conteúdo Dinâmico do Loading -->
    <div class="loading-content"
      :class="{ 'is-appearing': currentPhase === 'butterfly', 'is-exiting': currentPhase === 'split' }">
      <div class="sparrow-wrap" aria-hidden="true">
        <img class="sparrow" src="/sparrow.png" alt="" />
        <div class="sparrow-glow" aria-hidden="true" />
      </div>

      <div class="loading-quote" :class="{ 'quote-exit': currentPhase === 'split' }">
        {{ quoteText }}
      </div>
    </div>
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
  background-color: var(--color-background-loading);
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
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

/* Sparrow visuals (entrada/saída) */
.sparrow-wrap {
  position: relative;
  width: min(220px, 55vw);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(0);
}


.sparrow {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  filter: blur(18px);
  transform: translateY(10px) scale(0.92) rotate(-4deg) translateZ(0);
  will-change: transform, opacity, filter;
}


.sparrow-glow {
  position: absolute;
  inset: -18% 0 -18% 0;
  border-radius: 999px;
  background: radial-gradient(circle at 50% 50%, rgba(68, 216, 255, 0.35), rgba(68, 216, 255, 0) 60%);
  filter: blur(32px);
  opacity: 0;
  transform: scale(0.85);
  animation: sparrow-glow-enter 2100ms cubic-bezier(0.22, 1, 0.36, 1) both;
  will-change: opacity, transform, filter;
}

.loading-content.is-appearing {
  animation: sparrow-breathe 2400ms ease-in-out infinite;
}


.loading-content.is-exiting .sparrow {
  animation: sparrow-exit 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.loading-content.is-exiting .sparrow-glow {
  animation: sparrow-glow-exit 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.loading-content.is-appearing .sparrow {
  animation: sparrow-enter 2100ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.loading-content.is-appearing .sparrow-glow {
  animation: sparrow-glow-enter 2100ms cubic-bezier(0.22, 1, 0.36, 1) both;
}


.loading-quote {
  font-family: var(--p-font);
  font-size: 0.95rem;
  color: var(--text-secondary-color);
  opacity: 0;
  transform: translateY(12px);
  animation: quote-in 1200ms ease 2050ms both;
  text-align: center;
  max-width: 520px;
}

.loading-quote.quote-exit {
  animation: quote-exit 850ms ease both;
}

/* Entrada (emergindo da escuridão) */
@keyframes sparrow-enter {
  0% {
    opacity: 0;
    filter: blur(26px);
    transform: translateY(14px) scale(0.88) rotate(-10deg);
  }

  35% {
    opacity: 1;
    filter: blur(10px);
    transform: translateY(6px) scale(0.98) rotate(-4deg);
  }

  65% {
    opacity: 1;
    filter: blur(2px);
    transform: translateY(0px) scale(1) rotate(-2deg);
  }

  100% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0px) scale(1) rotate(0deg);
  }
}

@keyframes sparrow-glow-enter {
  0% {
    opacity: 0;
    transform: scale(0.75);
    filter: blur(46px);
  }

  45% {
    opacity: 0.7;
    transform: scale(1);
    filter: blur(30px);
  }

  100% {
    opacity: 0.35;
    transform: scale(1);
    filter: blur(44px);
  }
}

/* Microinterações (respiração suave) */
@keyframes sparrow-breathe {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }
}

/* Saída (levantar voo + blur) */
@keyframes sparrow-exit {
  0% {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0px) scale(1) rotate(0deg);
  }

  18% {
    opacity: 1;
    filter: blur(2px);
    transform: translateY(-6px) scale(1.03) rotate(6deg);
  }

  55% {
    opacity: 0.8;
    filter: blur(10px);
    transform: translateY(-26px) scale(1.05) rotate(9deg);
  }

  100% {
    opacity: 0;
    filter: blur(22px);
    transform: translateY(-120px) scale(1.08) rotate(10deg);
  }
}

@keyframes sparrow-glow-exit {
  0% {
    opacity: 0.35;
    filter: blur(44px);
    transform: scale(1);
  }

  40% {
    opacity: 0.25;
    filter: blur(58px);
    transform: scale(1.08);
  }

  100% {
    opacity: 0;
    filter: blur(70px);
    transform: scale(1.15);
  }
}

@keyframes quote-in {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes quote-exit {
  0% {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }

  100% {
    opacity: 0;
    transform: translateY(-8px);
    filter: blur(8px);
  }
}
</style>
