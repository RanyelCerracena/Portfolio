<template>
  <div class="scroll-downs">
    <div class="mousey">
      <div class="scroller"></div>
    </div>
  </div>
</template>

<style scoped>
.scroll-downs {
  position: absolute;
  top: 0;
  right: 0;
  bottom: -80%;
  left: 0;
  margin: auto;

  width: 34px;
  height: 55px;
}

.mousey {
  width: 3px;
  padding: 5px 10px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;

  box-shadow: 0 0 30px rgba(255, 255, 255, 0.699);
}

.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15, .41, .69, .94);
  animation-iteration-count: infinite;
}

@keyframes scroll {
  0% {
    opacity: 0;
  }

  10% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
