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
            <img src="../assets/img/3DCalculator.png" alt="Calculadora de Impressão 3D" />
          </aside>
          <aside class="descriptionProject">
            <p>Desenvolvi esta API para facilitar o cálculo de custos em serviços de impressão 3D. Ela recebe os dados
              da
              impressão e retorna o valor estimado com e sem margem de lucro, considerando peso do material, valor pago
              no material, tempo de impressão, consumo energético
              da máquina, material gasto, valor do Kwh e margem de lucro.</p>

            <p>A ideia é tornar o processo de orçamento mais rápido, preciso e fácil de integrar com sites, sistemas ou
              ferramentas internas. É uma solução leve e organizada. Visando sempre manter boas práticas de programaçao,
              esta api foi desenvolvida utilizando métodos como DTO, Extension Methods, POO, com C# e .NET Minimal API,
              para o consumo desta Api, desenvolvi um front-end em Vue.js que se comunica com a API para fornecer uma
              interface amigável
              e responsiva aos usuários.
            </p>
            <ul class="CTALinks">
              <li>
                  <a href="https://nerdstecnologias.com.br/calculadora3D" target="_blank" rel="noopener noreferrer">
                    Acesse a aplicação
                  </a>
              </li>

            </ul>
          </aside>
        </div>
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
          <h4 class="projectTitle">Studio Ghibli Catalog</h4>
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
  display: flex;
  flex-direction: column;
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
  width: 50dvw;
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
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  justify-content: center;
  padding: 10px;
}

.projectImg {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}

.projectImg img {
  width: 100%;
  border-radius: 5px;
}

.descriptionProject {
  text-align: justify;
  width: 50%;
}

.CTALinks {
  list-style: none;
  padding: 0;
  margin-top: 15px;
  display: flex;
}
.CTALinks li a{
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.CTALinks li a:hover{
  background-color: transparent;
  transform: scale(1.05);
  color: var(--projects-scroll-color);
  border: 2px solid var(--projects-scroll-color);
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
</style>
