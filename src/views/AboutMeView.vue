<template>
  <div class="aboutMe">
    <section class="aboutMeContent">
      <div class="meCard">
        <h3>Ranyel Cerracena</h3>
      </div>
      <div class="mediaCard">

      </div>
      <div class="imgCard">

      </div>
    </section>

  </div>
</template>
<script setup>
defineOptions({
  name: 'AboutMeView',
});
</script>
<style scoped>
.aboutMe {
  height: 100vh;
  width: 100vw;
  background-color: transparent;
}

.aboutMeContent {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
}

.meCard {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 25%;
  left: 25%;
  width: 250px;
  border: 2px solid var(--color-background-soft);
  background-color: var(--color-background);
}
</style>
