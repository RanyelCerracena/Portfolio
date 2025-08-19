<template>
  <div class="scroll-indicator">
      <div class="needle">
        <div class="signal"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ScrollIndicator",
};
</script>

<style scoped>
.scroll-indicator {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.needle {
  position: relative;
  width: 100%;
  height: 100%;
}

.signal {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 9px;
  background: var(--about-scroll-color);
  border-radius: 2px;
  box-shadow: 0 0 10px #974eeb, 0 0 20px #974eeb;
  animation: descendLinear 2s linear infinite;
}

@keyframes descendLinear {
  0% {
    transform: translate(-50%, -10%);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 580%);
    opacity: 0;
  }
}

</style>
