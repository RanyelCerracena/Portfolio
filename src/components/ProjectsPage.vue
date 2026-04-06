<script setup>
import { ref, watch } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'Personal Portfolio',
    description:
      'Um portfólio moderno e interativo construído com Vue.js e animações premium. O projeto foca em uma experiência fluida com transições suaves e um design inspirado em diários e scrapbooks.',
    skills: ['Vue.js', 'CSS3', 'JavaScript'],
    link: '#',
    repoLink: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'E-commerce System',
    description:
      'Sistema completo de vendas com integração de pagamentos e gestão de estoque. Desenvolvido com uma arquitetura robusta para suportar alto volume de transações.',
    skills: ['C#', '.NET Core', 'SQL Server'],
    link: '#',
    repoLink: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Task Manager API',
    description:
      'API RESTful robusta para gerenciamento de tarefas e equipes. Inclui autenticação JWT, documentação Swagger e testes unitários automatizados.',
    skills: ['Golang', 'SQL Server', 'Docker'],
    link: '#',
    repoLink: 'https://github.com/',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
  },
])

const selectedProject = ref(null)

const openDetails = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

// Bloquear scroll quando o modal estiver aberto
watch(selectedProject, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('no-scroll')
    document.body.classList.add('no-scroll')
  } else {
    document.documentElement.classList.remove('no-scroll')
    document.body.classList.remove('no-scroll')
  }
})
</script>

<template>
  <section id="projects" class="section projects-section" aria-labelledby="projects-title">
    <div class="background-decor overlay-tape"></div>
    <h2 id="projects-title" class="title">PROJECTS</h2>

    <div class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="polaroid-wrapper"
        :style="{ '--rotate': index % 2 === 0 ? '-3deg' : '3deg', '--delay': index * 0.2 + 's' }"
      >
        <figure class="project-polaroid">
          <div class="tape"></div>
          <div class="project-image">
            <img :src="project.image" :alt="project.name" />
            <div class="project-overlay">
              <div class="btn-group">
                <button @click="openDetails(project)" class="view-btn">Ver Detalhes</button>
              </div>
            </div>
          </div>

          <figcaption class="polaroid-caption">
            <h3 class="handwritten">{{ project.name }}</h3>
            <div class="project-skills">
              <span v-for="skill in project.skills" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>

    <!-- Modal de Detalhes -->
    <Transition name="zoom">
      <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-content polaroid-large">
          <button class="close-btn" @click="closeModal">×</button>

          <div class="modal-layout">
            <div class="modal-image">
              <img :src="selectedProject.image" :alt="selectedProject.name" />
              <div class="large-tape"></div>
            </div>

            <div class="modal-info">
              <h2 class="handwritten-large">{{ selectedProject.name }}</h2>
              <p class="description-text">{{ selectedProject.description }}</p>

              <div class="modal-skills">
                <span v-for="skill in selectedProject.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>

              <div class="modal-actions">
                <a :href="selectedProject.link" class="action-btn main">Acessar Projeto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 8rem 2rem;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.title {
  font-family: 'Chat Favour', cursive;
  font-size: 4.5rem;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
  color: #2c3e50;
}

.title::after {
  content: '';
  background-color: rgba(98, 54, 151, 0.2);
  width: 130%;
  height: 40%;
  position: absolute;
  top: 55%;
  left: -15%;
  z-index: -1;
  transform: rotate(-0.5deg);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem 3rem;
  width: 100%;
  max-width: 1100px;
  justify-items: center;
}

.polaroid-wrapper {
  perspective: 1000px;
  transition: all 0.4s ease;
  transform: rotate(var(--rotate));
}

.polaroid-wrapper:hover {
  transform: rotate(0deg) scale(1.05);
  z-index: 10;
}

.project-polaroid {
  background: #ffffff;
  padding: 15px 15px 50px 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  width: 320px;
  border-radius: 2px;
  transition: box-shadow 0.3s ease;
}

.project-polaroid:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.tape {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%) rotate(-1deg);
  width: 100px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 5;
}

.project-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #eee;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(0.1) contrast(1.05);
  transition: filter 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image:hover .project-overlay {
  opacity: 1;
}

.btn-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.view-btn,
.repo-btn {
  color: white;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border: 1.5px solid white;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
  width: 180px;
  text-align: center;
}

.view-btn:hover,
.repo-btn:hover {
  background: white;
  color: #2c3e50;
}

.polaroid-caption {
  margin-top: 15px;
  text-align: center;
}

.handwritten {
  font-family: 'Chat Favour', cursive;
  font-size: 2.2rem;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
}

.skill-tag {
  color: #623697;
  font-family: 'Chat Favour', cursive;
  font-size: 1.1rem;
  opacity: 0.8;
  background-color: #ab86da62;
  padding: 0 10px;
  border-radius: 50px;
  border: 2px solid #623697;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.polaroid-large {
  background: white;
  padding: 2rem 2rem 4rem 2rem;
  max-width: 900px;
  width: 95%;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: #333;
  line-height: 1;
  z-index: 10;
}

.modal-layout {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.modal-image {
  flex: 1;
  position: relative;
}

.modal-image img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.large-tape {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%) rotate(2deg);
  width: 150px;
  height: 45px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.modal-info {
  flex: 1.2;
}

.handwritten-large {
  font-family: 'Chat Favour', cursive;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.description-text {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.modal-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 3rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.3s ease;
  flex: 1;
  text-align: center;
}

.action-btn.main {
  background: #623697;
  color: white;
}

.action-btn.secondary {
  border: 2px solid #623697;
  color: #623697;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(98, 54, 151, 0.3);
}

/* Animations */
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

@media (max-width: 850px) {
  .modal-layout {
    flex-direction: column;
    align-items: center;
  }
  .modal-info {
    text-align: center;
  }
  .modal-skills {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }
  .project-polaroid {
    width: 280px;
    padding: 12px 12px 40px 12px;
  }
}

@media (max-width: 380px) {
  .project-polaroid {
    width: 240px;
  }
  .handwritten {
    font-size: 1.8rem;
  }
  .skill-tag {
    font-size: 0.9rem;
  }
}
</style>
