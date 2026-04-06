<script setup>
import { onMounted } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import Home from './components/Home.vue'
import TheHeader from './components/TheHeader.vue'
import About from './components/AboutPage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ProjectsPage from './components/ProjectsPage.vue'

onMounted(() => {
  // --- Scroll Suave ---
  const smoothScrollToSection = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (href && href.startsWith('#')) {
      event.preventDefault()
      const targetId = href.substring(1)

      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', href)
        return
      }

      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', href)
      }
    }
  }

  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener('click', smoothScrollToSection)
  })

  // --- Intersection Observer (Reveal effects) ---
  const observerOptions = {
    threshold: 0.15,
  }

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Para a seção de skills (langs)
        if (entry.target.classList.contains('langs')) {
          entry.target.classList.add('show')
        }
        // Para revelações gerais (se houver)
        entry.target.classList.add('active')
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions)

  // Observa as skills e seções
  const elementsToObserve = document.querySelectorAll('.section, .langs, .reveal')
  elementsToObserve.forEach((el) => observer.observe(el))
})
</script>

<template>
  <LoadingScreen />
  <TheHeader />

  <main id="main-content">
    <article id="home" class="section home-section" aria-labelledby="home-title">
      <h1 id="home-title" class="visually-hidden">Home</h1>
      <Home />
    </article>

    <article id="about" class="section about-section" aria-labelledby="about-title">
      <h1 id="about-title" class="visually-hidden">About Me</h1>
      <About />
    </article>

    <article id="skills" class="section skills-section" aria-labelledby="skills-title">
      <h1 id="skills-title" class="visually-hidden">Skills</h1>
      <SkillsPage />
    </article>

    <article id="projects-container">
      <ProjectsPage />
    </article>

    <article id="contact" class="section contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p>Você pode me encontrar nas minhas redes sociais.</p>
    </article>

    <nav aria-label="Voltar ao topo" class="back-to-top">
      <a href="#home" aria-label="Voltar para o início da página">
        <i class="bi bi-house" aria-hidden="true"></i>
      </a>
    </nav>
  </main>
</template>

<style scoped>
/* Acessibilidade: oculta visualmente mas mantém para leitores de tela */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

main {
  min-height: 100dvh;
}

.section {
  min-height: 100dvh;
}

.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  background-color: #ffe9ef;
}

/* Botão de voltar ao topo */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.back-to-top a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #623697;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.back-to-top a:hover {
  background-color: #7a47b3;
  transform: scale(1.1);
}

.back-to-top a:focus {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

.back-to-top i {
  color: #fff;
  font-size: 2rem;
}
</style>
