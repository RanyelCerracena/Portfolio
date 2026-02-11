<script>
import Medias from './Medias.vue'
export default {
  name: 'HomePage',
  components: {
    Medias,
  },
}
</script>
<template>
  <div class="home-page">
    <section>
      <img src="/RanyelSticker.png" alt="" srcset="" />
    </section>
    <Medias />
  </div>
</template>
<style scoped>
.home-page {
  min-height: 100dvh;
  position: relative;
  width: 100%;
}
section img {
  position: absolute;
  top: 17%;
  left: 5%;
  width: 90%;
  height: 300px;
  transform: rotate(-15deg);
}
</style>
