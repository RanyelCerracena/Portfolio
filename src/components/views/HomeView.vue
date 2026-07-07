<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import InitialText from '../InitialText.vue'
import Navbar from '../layout/NavBar.vue'
import ProjectList from '../ProjectList.vue'

const isFiltersOpen = ref(false)
const selectedFilter = ref('all')

function onGlobalPointerDown(e) {
  if (!isFiltersOpen.value) return

  const menu = document.querySelector('.filters-menu')
  const button = document.querySelector('.filters-button')

  if (!menu || !button) return

  const target = e.target

  if (menu.contains(target) || button.contains(target)) return

  isFiltersOpen.value = false
}

onMounted(() => {
  document.addEventListener('pointerdown', onGlobalPointerDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onGlobalPointerDown)
})
</script>


<template>
  <!-- Landing page sections (scroll) -->
  <div class="landing">
    <!-- navbar fixa (sempre no topo) -->
    <div class="navbar-fixed">
      <Navbar />
    </div>

    <!-- Conteúdo abaixo do vídeo (seções fazem scroll) -->
    <section id="home" class="section section-home">
      <section class="flex-wrapper">
        <aside class="informations">
          <section class="glass initialText">
            <InitialText />
          </section>
          <section class="glass academicInfo">
            <div class="localInfo">
              <i class="bi bi-geo-alt"></i>
              <p>Brasilia - Federal District, Brazil</p>
            </div>
            <div class="localInfo">
              <i class="bi bi-book"></i>
              <p>Cursing - Software Engineering - Anhanguera</p>
            </div>
          </section>
          <section class="glass buttonsInfo">
            <div class="buttons-container">
              <div class="buttons-row">
                <div class="buttons-group">
                  <a href="#" class="btn-connect">
                    <i class="bi bi-linkedin"></i>
                    <span>Connect</span>
                  </a>
                  <a href="#" class="btn-email">
                    <i class="bi bi-envelope"></i>
                    <span>Email Me</span>
                  </a>
                </div>
                <div class="separator">|</div>
                <div class="buttons-group">
                  <a href="#" class="btn-social"><i class="bi bi-github"></i><span>GitHub</span></a>
                  <a href="#" class="btn-social"><i class="bi bi-twitter"></i><span>Twitter</span></a>
                  <a href="#" class="btn-social"><i class="bi bi-code-slash"></i><span>LeetCode</span></a>
                </div>
              </div>
              <div class="buttons-row downRow">
                <div class="buttons-group">
                  <a href="#" class="btn-view-work"><i class="bi bi-arrow-down"></i><span>View Work</span></a>
                  <a href="#" class="btn-cv"><i class="bi bi-arrow-up-right"></i><span>CV</span></a>
                </div>
                <div class="separator">|</div>
                <div class="status-group">
                  <span class="status-dot"></span>
                  <span class="status-text">OPEN TO WORK</span>
                </div>
              </div>
            </div>
          </section>
        </aside>
        <aside class="glass image-wrapper">
          <section class="myImage">
            <img src="/me.jpg" alt="">
          </section>
        </aside>
      </section>
    </section>


    <section id="projects" class="section section-projects">
      <div class="container">
        <div class="projects-header">
          <h2>What I <br><span class="italic">built</span></h2>

          <div class="filters">
            <button type="button" class="filters-button" :aria-expanded="isFiltersOpen"
              @click="isFiltersOpen = !isFiltersOpen">
              Filtros
              <i class="bi" :class="isFiltersOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
            </button>

            <!-- overlay modal-like -->
            <div v-if="isFiltersOpen" class="filters-overlay" aria-hidden="true"></div>

            <div v-if="isFiltersOpen" class="filters-menu glass" role="menu">

              <button type="button" class="filters-option" data-kind="front-end"
                :class="{ active: selectedFilter === 'front-end' }"
                @click="selectedFilter = 'front-end'; isFiltersOpen = false">
                Front-end
              </button>
              <button type="button" class="filters-option" data-kind="back-end"
                :class="{ active: selectedFilter === 'back-end' }"
                @click="selectedFilter = 'back-end'; isFiltersOpen = false">
                Back-end
              </button>
              <button type="button" class="filters-option" data-kind="ui-ux"
                :class="{ active: selectedFilter === 'ui-ux' }"
                @click="selectedFilter = 'ui-ux'; isFiltersOpen = false">
                UI & UX Design
              </button>
              <button type="button" class="filters-option" data-kind="all" :class="{ active: selectedFilter === 'all' }"
                @click="selectedFilter = 'all'; isFiltersOpen = false">
                Todos
              </button>
            </div>
          </div>
        </div>

        <section class="glass projects-wrapper">
          <ProjectList :filter="selectedFilter" />
        </section>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <h2>About</h2>
      </div>
    </section>

    <section id="medias" class="section">
      <div class="container">
        <h2>Medias</h2>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing {
  min-height: 100%;
}

.flex-wrapper {
  display: flex;
  gap: 10px;
  padding: 30px;

  justify-content: center;
  align-items: stretch;

  width: 93dvw;
}

/* garante altura igual entre o bloco da infos e o bloco da imagem */
.flex-wrapper > .informations {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.flex-wrapper > .image-wrapper {
  display: flex;
  flex: 1;
}

.image-wrapper {
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 100%;
}

/* força a “glass” da imagem a esticar */
.image-wrapper > .myImage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
}

/* ajuda a manter o img ocupando a altura do card */
.image-wrapper > .myImage img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* mobile: só reduz largura, sem “travar” altura */
@media (max-width: 768px) {
  .flex-wrapper {
    align-items: flex-start;
  }
}



.italic {
  font-style: italic;
}

.section {
  height: 100dvh;
  width: 100dvw;
  padding: 12dvh 0;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.section-home {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}


.myImage {
  padding: 25px;
}

.myImage>img {
  border-radius: 10px;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.initialText {
  padding: 25px;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: clamp(1.5rem, 3.75rem, 3.75rem);
  color: var(--text-primary-color);
  font-weight: 300;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.buttons-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.downRow {
  justify-content: start;
}

.buttons-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.separator {
  color: var(--text-terciary-color);
  font-size: 1.2rem;
}

.btn-connect,
.btn-email,
.btn-social,
.btn-view-work,
.btn-cv {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary-color);
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
  font-size: 0.9rem;
}

.btn-connect,
.btn-email {
  background: #4d4dff;
  color: white;
}

.btn-connect:hover,
.btn-email:hover {
  background: #3a3aff;
}

.btn-social:hover,
.btn-view-work:hover,
.btn-cv:hover {
  background: rgba(255, 255, 255, 0.2);
}

.status-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 10px;
  height: 10px;
  background-color: #44dd81;
  border-radius: 50%;
  box-shadow: 0 0 10px #44dd81;
}

.status-text {
  font-size: 0.7rem;
  color: var(--text-secondary-color);
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .buttons-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .separator {
    display: none;
  }

  .buttons-group {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .buttons-group a {
    width: 100%;
    justify-content: flex-start;
  }

  .status-group {
    margin-top: 10px;
  }
}

.buttons-wrapper {
  display: grid;
  /* ocupa o máximo de espaço disponível do pai sem “sair” da glass */
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}

.CTT_button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* espaçamento consistente entre texto e ícone */
  gap: 5px;

  /* evita variações por line-height */
  line-height: 1;

  text-align: center;
  padding: 8px 10px;
  border-radius: 10px;

  /* respeita o pai / célula do grid */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  /* o grid já controla o espaçamento */
  margin: 0;
}

@media (max-width: 600px) {
  .buttons-wrapper {
    grid-template-columns: 1fr;
  }
}


.CTT_button>p {
  margin: 0;
  line-height: 1;
}

.CTT_button>i {
  /* garante que o ícone fique centralizado dentro da linha */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.informations {
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 70%;

  justify-content: space-between;
}

.academicInfo {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--text-secondary-color);
  height: 22.5%;
}

.localInfo {
  display: flex;
  text-wrap: nowrap;
}

.localInfo>p {
  font-size: 15px;
  margin-left: 15px;
}

.buttonsInfo {
  padding: 10px;
}

.projects-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 20px;
}

.filters {
  position: relative;
  margin-top: 8px;
}

.filters-button {
  /* Apple-like toggle */
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 10px 14px;
  border-radius: 14px;

  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.06);

  color: var(--text-primary-color);
  font-family: var(--p-font);
  cursor: pointer;

  user-select: none;

  /* smooth interactions */
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  box-shadow:
    0 0 0 rgba(255, 255, 255, 0),
    0 10px 30px rgba(0, 0, 0, 0);
}

.filters-button::before {
  content: '';

  position: absolute;
  inset: -1px;

  border-radius: inherit;

  opacity: 0;
  transition: opacity 200ms ease;

  pointer-events: none;
}

.filters-button:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.34);
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.25);
}

.filters-button:hover::before {
  opacity: 1;
}

.filters-button:active {
  transform: translateY(0);
}

/* animate caret icon */
.filters-button i {
  transition: transform 220ms ease;
}

.filters-button[aria-expanded='true'] i {
  transform: rotate(180deg);
}


.filters-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  min-width: 240px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 11;

  transform-origin: top right;
  animation: filters-pop 280ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.filters-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: filters-overlay-fade 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes filters-overlay-fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes filters-pop {
  from {
    opacity: 0;
    transform: translateY(-6px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}


.filters-option {
  text-align: left;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-primary-color);
  cursor: pointer;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}


.filters-option {
  transition:
    background 160ms ease,
    border-color 160ms ease,
    transform 160ms ease;
  transform: translateZ(0);
}

.filters-option:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.34);
  background: rgba(255, 255, 255, 0.09);
}

.filters-option::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(120px 80px at 0% 0%,
      rgba(159, 105, 248, 0.35),
      rgba(159, 105, 248, 0) 60%);

  opacity: 0;
  transition: opacity 200ms ease;
  pointer-events: none;
}

.filters-option:hover::before {
  opacity: 1;
}

/* gradiente de hover por tipo (equivale às cores ativas das tags) */
.filters-option[data-kind='front-end']:hover::before {
  background: radial-gradient(120px 80px at 0% 0%, rgba(68, 221, 129, 0.45), rgba(68, 221, 129, 0) 60%);
}

.filters-option[data-kind='back-end']:hover::before {
  background: radial-gradient(120px 80px at 0% 0%, rgba(159, 105, 248, 0.45), rgba(159, 105, 248, 0) 60%);
}

.filters-option[data-kind='ui-ux']:hover::before {
  background: radial-gradient(120px 80px at 0% 0%, rgba(68, 216, 221, 0.38), rgba(68, 216, 221, 0) 60%);
}

.filters-option[data-kind='all']:hover::before {
  background: radial-gradient(120px 80px at 0% 0%, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0) 60%);
}



.filters-option.active {
  background: rgba(77, 77, 255, 0.35);
  border-color: rgba(77, 77, 255, 0.6);
}

/* colors by filter kind */
.filters-option[data-kind='front-end'].filters-option.active {
  background: rgba(68, 221, 129, 0.3);
  border-color: rgba(68, 221, 129, 0.65);
}

.filters-option[data-kind='back-end'].filters-option.active {
  background: rgba(159, 105, 248, 0.3);
  border-color: rgba(159, 105, 248, 0.65);
}

.filters-option[data-kind='ui-ux'].filters-option.active {
  background: rgba(68, 216, 221, 0.25);
  border-color: rgba(68, 216, 221, 0.65);
}

.filters-option[data-kind='all'].filters-option.active {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.35);
}


@media (max-width: 768px) {
  .projects-header {
    flex-direction: column;
    align-items: stretch;
  }

  .filters {
    margin-top: 0;
  }
}

@media (min-width: 1920px) {

  /* evita a sessão de projetos “estourar” a largura em 1920+ */
  .section-projects {
    padding-top: 14dvh;
  }

  .projects-wrapper {
    width: 100%;
  }
}
</style>
