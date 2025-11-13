<template>
  <section class="projectContent">
    <div class="flexTitle">
      <h2 class="cardTitle">Projetos</h2>
    </div>
    <section class="projects">
      <div class="card">
        <div class="cardHeader">
          <h4 class="projectTitle">3D Printer Calculator</h4>
        </div>
        <div class="cardBody">
          <aside class="projectImg">

          </aside>
        </div>
      </div>
      <div class="card">
        <div class="cardHeader">
          <h4 class="projectTitle">Studio Ghibli Catalog</h4>
        </div>
        <div class="cardBody"></div>
      </div>
      <div class="card">
        <div class="cardHeader">
          <h4 class="projectTitle">DIO - Trilha .NET - Explorando a linguagem C#</h4>
        </div>
        <div class="cardBody"></div>
      </div>
      <div class="card">
        <div class="cardHeader">
          <h4 class="projectTitle">DIO - Trilha .NET - Fundamentos</h4>
        </div>
        <div class="cardBody"></div>
      </div>
      <div class="card">
        <div class="cardHeader">
          <h4 class="projectTitle">Validador EFD</h4>
        </div>
        <div class="cardBody"></div>
      </div>
      <div class="card">
        <div class="cardHeader">
          <h4 class="projectTitle">Aplicação CRUD</h4>
        </div>
        <div class="cardBody"></div>
      </div>
    </section>
    <button class="card showMoreButton">Mostrar Mais</button>
  </section>
</template>

<script setup>
defineOptions({
  name: 'ProjectsView',
})
</script>

<style scoped>
.projectContent {
  height: auto;
  width: 80dvw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.projects {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  gap: 20px;
  align-items: center;
  justify-items: center;
}
.card {
  border-radius: 10px;
  border: 2px solid #ffffff0a;
  background-color: #ffffff17;
  backdrop-filter: blur(250px);
  width: 95%;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
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
.cardTitle {
  font-family: 'Urbanist', sans-serif;
  font-weight: 700;
  font-size: 40px;
  margin: 0;
  color: var(--color-text);
}
.projectTitle {
  font-family: 'Urbanist', sans-serif;
  font-weight: 600;
  font-size: 25px;
  margin: 0;
  color: var(--color-text);
}
.flexTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
.cardBody {
  height: 200px;
  display: flex;
}
.showMoreButton{
  margin: 20px auto;
  width: auto;
  padding: 10px 20px;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
}
</style>
