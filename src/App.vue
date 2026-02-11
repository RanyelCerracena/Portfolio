<script setup>
import Home from './components/Home.vue'
import TheHeader from './components/TheHeader.vue'
import About from './components/AboutPage.vue'
</script>

<template>
  <TheHeader class="myHeader" />
  <main>
    <section id="home" class="anchor-section home-section">
      <Home />
    </section>

    <section id="about" class="anchor-section about-section">
      <About class="about" />
    </section>

    <section id="projects" class="anchor-section projects-section">
      <h2>Projects</h2>
      <p>Em breve: projetos em destaque.</p>
    </section>

    <section id="contact" class="anchor-section contact-section">
      <h2>Contact</h2>
      <p>Você pode me encontrar nas minhas redes sociais.</p>
    </section>

    <div class="homeBtn">
      <a href="#home"><i class="bi bi-house"></i></a>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100dvh;
}

.anchor-section {
  min-height: 100dvh;
  background-color: red;
}

.projects-section,
.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.projects-section {
  background-color: #f1ecfd;
}

.contact-section {
  background-color: #ffe9ef;
}
i {
  color: #fff;
  font-size: 2rem;
}
.homeBtn {
  position: fixed;
  bottom: 2rem;
  z-index: 1000;
  right: 2rem;
  cursor: pointer;
  background-color: #623697;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
