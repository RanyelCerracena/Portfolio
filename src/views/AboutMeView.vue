<template>
  <div class="aboutMe">
    <section class="aboutMeContent">
      <div class="meCard">
        <h4 class="myName">Ranyel Cerracena</h4>
        <div class="meContent">

        </div>
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
}

.aboutMeContent {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
}

.meCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 10%;
  left: 12%;
  width: 600px;
  height: 600px;
  border: 2px solid var(--color-background-soft);
  background-color: var(--color-background);
  padding: 15px 0 0 0;
}

.meContent {
  height: 93%;
  width: 100%;
  border-top: 2px solid var(--color-background-soft);
}

.myName{
  font-family: "Rock Salt", cursive;
  font-weight: bold;
}
</style>
