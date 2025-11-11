<template>
  <div class="aboutMe" id="about">
    <section class="aboutMeContent">

      <div class="card meCard">
        <div class="cardHeader meHeader">
          <h4 class="cardTitle">Sobre Mim</h4>
          <BoxIconsComponents/>
        </div>
        <div class="cardBody mainCard">
          <div class="flexContent">
            <div class="mePortrait">
              <img src="/Ranyel.jpeg" alt="Minha foto">
              <div class="cardBody workCard">
                <div class="cardHeader workHeader">
                  <h4 class="cardTitle">Trabalho</h4>
                </div>
                <div class="card jobCard">
                  <p>
                    Atualmente, Formosa-GO
                  </p>
                  <p> Aberto para vagas remotas em todo o Brasil <span class="fi fi-br"></span> e presenciais negociáveis.</p>
                </div>
              </div>
            </div>
            <div class="textContent">
              <div class="cardHeader meTextHeader">
                <h4 class="cardTitle">Minha Trajetória</h4>
              </div>
              <div class="card meTextContent">
                <p>
                  Meu nome é <span class="action">RANYEL CERRACENA</span>, desenvolvedor criativo de
                  software,
                  apaixonado em
                  transformar ideias em soluções digitais inteligentes. Comecei com a criação de
                  softwares para
                  desktop e, com o tempo, meu trabalho evoluiu para sistemas web, usando tecnologias
                  como <span class="action">C#</span>,
                  <span class="action">Golang</span>, <span class="action">Vue.js</span>. Hoje, meu foco
                  está em abraçar
                  <span class="action">projetos</span> e <span class="action">oportunidades</span>
                  que desafiem meus
                  atuais
                  e futuros conhecimentos, especialmente em automação fiscal e processos
                  administrativos. Meu objetivo
                  é
                  sempre
                  combinar eficiência, inovação e organização.
                </p>
                <p>
                  <span class="action">Enxergo cada projeto como uma tela em branco.</span> Gosto de
                  usar minha
                  criatividade
                  para
                  dar vida a interfaces, aprimorar a experiência do usuário e arquitetar soluções
                  que sejam ao mesmo
                  tempo
                  elegantes
                  e funcionais. Para mim, a tecnologia e a arte andam de mãos dadas. Busco unir a
                  técnica com o
                  design,
                  prestando
                  atenção aos detalhes para que os sistemas não sejam apenas eficientes, mas também
                  <span class="action">visualmente harmoniosos e intuitivos</span>.
                </p>
                <p>
                  Sou movido pela curiosidade, estou sempre aprendendo novas <span class="action">linguagens</span>,
                  <span class="action">frameworks</span> e <span class="action">metodologias</span>.
                  <span class="action">Profissionalismo, inovação</span> e sensibilidade estética
                  são os pilares que
                  guiam
                  meu trabalho. Acredito que é essa combinação que <span class="action">me permite criar soluções que
                      realmente
                      fazem a diferença.</span>
                </p>
                <div class="mediaContent">
                  <div class="cardHeader mediasHeader">
                    <h4 class="cardTitle">Redes Sociais</h4>
                  </div>
                  <div class="card mediasCard">
                    <a href="https://github.com/RanyelCerracena"><i class="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/ranyel-cerracena/"><i
                      class="bi bi-linkedin"></i></a>
                    <a href="https://www.instagram.com/ranyel.cerracena/"><i
                      class="bi bi-instagram"></i></a>
                    <a href="https://www.youtube.com/@RanyelCerracena"><i
                      class="bi bi-youtube"></i></a>
                    <a href="https://www.tiktok.com/@RanyelCerracena"><i class="bi bi-tiktok"></i></a>
                    </div>
                </div>
              </div>
            </div>
          </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  border-radius: 0 0 10px 10px;
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
  border: 2px solid #ffffff0a;
}
.meHeader{
  border-left: none;
  border-right: none;
  border-top: none;
}

.cardTitle {
  font-family: "Urbanist", sans-serif;
  font-weight: 700;
  font-size: 25px;
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

.mainCard {
  width: 70dvw;
  height: 65dvh;
}

.mainCard p {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

.meCard{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffffff17;
  backdrop-filter: blur(250px);
  width: 70dvw;
}

.flexContent {
  display: flex;
  width: 70dvw;
  height: 80dvh;
  gap: 15px;
  padding: 15px;
}

.textContent {
  width: 100%;
}

.meTextHeader {
  border-radius: 5px 5px 0 0;
  width: 100%;
  border-bottom: none;
}

.workHeader {
  border-radius: 5px 5px 0 0;
}

.mePortrait {
  width: 50%;
}

.mePortrait img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.meTextContent {
  border-radius: 0 0 5px 5px;
  border-top: 0;
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 87.7%;
  background-color: transparent;
  border: 2px solid #ffffff0a;
}

.workCard {
  width: 100%;
  margin-top: 5px;
}

.jobCard {
  height: 100%;
  border-radius: 0 0 5px 5px;
  padding: 15px 15px 30px 15px;
  background-color: transparent;
  border: 2px solid #ffffff0a;
  border-top: none;
}

.mediasHeader {
  width: 100%;
  margin-top: 15px;
  border-radius: 5px 5px 0 0;
}

.mediasCard {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  border-top: 0;
  width: 100%;
  gap: 15px;
  padding: 15px;
  background-color: transparent;
  border: 2px solid #ffffff0a;
  border-top: none;
}

.mediasCard a{
  color: var(--color-text);
}

.mediasCard a:hover {
  margin: 0 15px;
  scale: 1.5;
  background-color: transparent;
  color: var(--color-text);
  text-shadow: 0 0px 8px #1ABC9C;
}

.mediaContent{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
}

.action {
  color: #1ABC9C;
  font-weight: bold;
}

.fi-br {
  width: 20px;
  border-radius: 2px;
}
</style>
