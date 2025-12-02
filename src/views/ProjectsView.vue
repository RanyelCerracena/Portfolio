<template>
  <section class="projectContent">
    <div class="flexTitle">
      <h2 class="cardTitle">Projetos</h2>
    </div>
    <section class="projects card">
      <div class="project calculator3D">
        <img class="projectImg" src="../assets/img/3DCalculator.png" alt="Project 1 Image" />
        <div class="projectButtons">
          <button class="buttons">Ver Projeto</button>
          <div>
            <span>Habilidades Técnicas</span>
            <ul class="tecSkills">
              <li>C#</li>
              <li>Minimal Api's</li>
              <li>POO</li>
              <li>Vue.Js</li>
            </ul>
          </div>
        </div>
      </div>
      <button class="card showMoreButton">Mostrar Mais</button>
    </section>
  </section>
</template>

<script setup>
defineOptions({
  name: 'ProjectsView',
})
</script>

<style>
.flexTitle{
  text-align: center;
}
.projectContent {
  height: auto;
  width: 80dvw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.projects {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.project {
  width: 50%;
  padding: 20px;
}
.calculator3D{
  border: 2px solid var(--color-background-soft);
}
.projectImg {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius:10px;
}

.projectButtons {
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: space-around;
}

.showMoreButton {
  width: auto;
  margin: 20px auto;
  padding: 10px 20px;
  color: #ffffff;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
}

.buttons {
  width: auto;
  margin: 10px 10px;
  padding: 10px 20px;
  color: #ffffff;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  background-color: #ffffff17;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  backdrop-filter: none;
}
.buttons:hover {
  background-color: #ffffff0a;
  border: 2px solid var(--color-background-soft);
  cursor: pointer;
  transform: scale(1.1);
}
.tecSkills{
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
}
.tecSkills li {
  border: 2px solid var(--color-background-soft);
  padding: 5px;
  border-radius: 50px;
  }
</style>
