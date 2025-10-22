<template>
  <div class="projects-bg">
    <section class="projectsCard">
      <div class="projectsCardHeader">
        <h1>Projetos</h1>
        <BoxIconsComponents class="boxIcons"/>
      </div>
      <div class="projectsCardBody">

      </div>
    </section>
  </div>
</template>

<script setup>
import BoxIconsComponents from '@/components/BoxIconsComponents.vue';

defineOptions({
  name: 'ProjectsView',
});
</script>

<style scoped>
.projects-bg {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projectsCard{
  background-color: #ffffff17;
  backdrop-filter: blur(250px);
  border: 2px solid #ffffff0a;
  border-radius: 5px;
  box-shadow: #ffffff17 0px 0px 5px;
  width: 80%;
  height: 90%;
  margin: auto;
}

.projectsCardHeader {
  position: relative;
  text-align: center;
  padding: 20px;
  color: white;
  border-bottom: 2px solid #ffffff17;
  display: flex;
  justify-content: center;
}

.projectsCardHeader h1 {
  height: 50px;
  display: block;
  font-family: 'Archivo Black', sans-serif;
  font-size: 2.5rem;
  margin: 0;
}

.boxIcons{
  position: absolute;
  right: 20px;
  bottom: 35%;

}
</style>
