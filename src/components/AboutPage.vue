<script setup>
defineOptions({
  name: 'AboutPage',
})
</script>

<template>
  <div class="about-page">
    <section class="about-intro">
      <h2 class="aboutme">About Me</h2>

      <figure class="profile-photo polaroid">
        <div class="tape tape-photo"></div>
        <img
          class="myPhoto"
          src="/Ranyel.png"
          alt="Foto de Ranyel Cerracena, desenvolvedor Full-Stack"
        />
        <figcaption class="polaroid-caption">Its me</figcaption>
      </figure>

      <div class="bio-stack">
        <div class="paper-layer paper-layer-3"></div>
        <div class="paper-layer paper-layer-2"></div>
        <div class="bio-paper">
          <p class="bio-text">
            Sou desenvolvedor Full-Stack e Desktop, com experiência em C#, SQL Server e .NET Core
            para criar soluções robustas. No front-end, trabalho com HTML, CSS, JavaScript e
            frameworks modernos como Vue.js. <br /><br />
            Tenho curiosidade constante por novas linguagens e tecnologias, atualmente explorando
            Golang, sempre buscando evoluir e entregar projetos completos, eficientes e inovadores.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.about-page {
  position: relative;
  width: 100%;
}

.about-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 6rem 1.5rem;
  width: 100%;
  min-height: auto;
}

.aboutme {
  font-family: 'Chat Favour', cursive;
  font-size: 4rem;
  margin: 0;
  position: relative;
  z-index: 2;
  align-self: flex-start;
  margin-left: 5%;
}

.aboutme::after {
  content: '';
  background-color: rgba(255, 225, 0, 0.5);
  width: 110%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: -5%;
  z-index: -1;
  transform: rotate(-1deg);
}

.profile-photo {
  margin: 0;
  padding: 0;
  z-index: 5;
  width: 90%;
  max-width: 450px;
}

.polaroid {
  background: white;
  padding: 15px 15px 50px 15px;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.2);
  transform: rotate(3deg);
  transition: transform 0.3s ease;
  position: relative;
}

.polaroid-caption {
  font-family: 'Chat Favour', cursive;
  font-size: 2rem;
  color: #333;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  padding-bottom: 5px;
}

.tape-photo {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 100px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(1px);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 10;
}

.myPhoto {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.bio-stack {
  position: relative;
  width: 95%;
  max-width: 700px;
  z-index: 10;
}

.paper-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.paper-layer-3 {
  transform: rotate(-1.5deg) translate(-3px, 3px);
  background-color: #f8f1c8;
}

.paper-layer-2 {
  transform: rotate(1deg) translate(2px, -1px);
  background-color: #fbf6d9;
}

.bio-paper {
  position: relative;
  background-color: #fffde8;
  padding: 2rem;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transform: rotate(-0.5deg);
}

.bio-text {
  text-align: justify;
  line-height: 1.8;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  margin: 0;
  color: #333;
  font-weight: 500;
}

@media (max-width: 768px) {
  .aboutme {
    font-size: 3rem;
  }
  .bio-text {
    font-size: 1rem;
    line-height: 1.6;
  }
  .polaroid-caption {
    font-size: 1.6rem;
  }
}
</style>
