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
            <ul>
              <li>C#</li>
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

<style scoped>
.card {
  border-radius: 10px;
  border: 2px solid var(--color-background-soft);
  background-color: #ffffff17;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.cardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 2px solid #ffffff0a;
}
.flexTitle{
  text-align: center;
}
.cardTitle {
  font-family: 'Urbanist', sans-serif;
  font-weight: 700;
  font-size: 40px;
  margin: 0;
  color: var(--color-text);
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
</style>
