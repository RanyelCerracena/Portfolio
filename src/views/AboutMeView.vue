<template>
  <div class="aboutMe">
    <section class="aboutMeContent">

      <div class="card meCard">
        <div class="cardHeader">
          <h4 class="cardTitle">Sobre Mim</h4>
          <BoxIconsComponents />
        </div>
        <div class="cardBody meContent">
          <p>
            Meu nome é <span class="name">RANYEL CERRACENA</span>, desenvolvedor criativo de software, apaixonado em
            transformar ideias em soluções digitais inteligentes. Comecei com a criação de softwares para desktop e, com
            o tempo,
            meu trabalho evoluiu para sistemas web, usando tecnologias como <span class="csharp">C#</span>,
            <span class="go">Golang</span>, <span class="vue">Vue.js</span>. Hoje, meu foco está em abraçar
            <span class="action">projetos</span> e <span class="action">oportunidades</span> que desafiem meus atuais
            e futuros conhecimentos, especialmente em automação fiscal e processos administrativos. Meu objetivo é
            sempre
            combinar eficiência, inovação e organização.
          </p>

          <p>
            <span class="human">Enxergo cada projeto como uma tela em branco.</span> Gosto de usar minha criatividade
            para
            dar vida a interfaces, aprimorar a experiência do usuário e arquitetar soluções que sejam ao mesmo tempo
            elegantes
            e funcionais. Para mim, a tecnologia e a arte andam de mãos dadas. Busco unir a técnica com o design,
            prestando
            atenção aos detalhes para que os sistemas não sejam apenas eficientes, mas também
            <span class="human">visualmente harmoniosos e intuitivos</span>.
          </p>

          <p>
            Sou movido pela curiosidade, estou sempre aprendendo novas <span class="action">linguagens</span>,
            <span class="action">frameworks</span> e <span class="human">metodologias</span>.
            <span class="action">Profissionalismo, inovação</span> e sensibilidade estética são os pilares que guiam
            meu trabalho. Acredito que é essa combinação que <span class="human">me permite criar soluções que realmente
              fazem a diferença.</span>
          </p>
        </div>
      </div>

      <div class="card worksCard">
        <div class="cardHeader">
          <h2 class="cardTitle">Onde trabalho</h2>
          <BoxIconsComponents />
        </div>
        <div class="cardBody workContent">
          <p>
            Atualmente, Formosa-Go
          </p>
          <p>Aberto para vagas <span class="action">remotas</span> para o Brasil <span class="fi fi-br"></span>, e vagas <span class="action">remotas</span>, <span class="action">híbridas</span> ou <span class="action">presenciais</span> para <span class="human">Brasíia</span></p>
        </div>
      </div>

      <div class="card portraitCard">
        <div class="cardHeader">
          <h4 class="cardTitle">Minha foto</h4>
          <BoxIconsComponents />
        </div>
        <div class="cardBody imageContent">
          <img src="/Ranyel.png" alt="Minha foto">
        </div>
      </div>

      <div class="card mediasCard">
        <div class="cardHeader">
          <h4 class="cardTitle">Minhas redes</h4>
          <BoxIconsComponents />
        </div>
        <div class="cardBody mediaContent">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ranyel-cerracena/" target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                LinkedIn
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ranyel.cerracena/" target="_blank">
                <i class="bi bi-box-arrow-up-right"></i>
                Instagram
                <i class="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import BoxIconsComponents from '@/components/BoxIconsComponents.vue'

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

.card {
  border-radius: 10px;
  border: 2px solid var(--color-background-soft);
  background-color: var(--color-background);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cardHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  border-bottom: 2px solid var(--color-background-soft);
}

.cardTitle {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  color: var(--color-text);
}

.cardBody {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: justify;
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-text);
}

.imageContent {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageContent img {
  width: 266px;
}

.meCard {
  position: absolute;
  top: 5%;
  left: 15%;
  width: 600px;
  height: auto;
}

.worksCard {
  position: absolute;
  top: 10%;
  left: 55.5%;
  width: 400px;
  height: auto;
}

p {
  font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
  text-align: justify;
}

.portraitCard {
  position: absolute;
  top: 55%;
  right: 41.2%;
  width: 300px;
  height: 350px;
}

.meContent,
.workContent {
  padding: 20px;
}

.mediasCard {
  position: absolute;
  bottom: 35%;
  right: 25%;
  width: 225px;
  height: 180px;
}

.mediaContent ul{
  padding: 20px;
}

.mediaContent ul li {
  list-style: none;
  width: 100%;
}

.mediaContent ul li a{
  display: block;
  text-decoration: none;
  color: var(--color-text);
  font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  width: 100%;
}

.mediaContent ul li a:hover {
  background-color: #42b8832f;
  transform: scale(1.05);
  color: #d8d8d8;
}

.csharp {
  color: #4E2ACD;
  font-weight: bold;
}

.go {
  color: #00A7D0;
  font-weight: bold;
}

.vue {
  color: #42B883;
  font-weight: bold;
}

.name {
  font-family: 'JetBrains Mono', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #7bd118;
  font-weight: bold;
}

.action {
  color: #1ABC9C;
  font-weight: bold;
}

.human {
  color: #E2725B;
  font-weight: bold;
}
.fi-br{
  width:20px;
  border-radius: 2px;
}
</style>
