<script setup>
import { useRouter } from 'vue-router'
import InitialText from '../components/InitialText.vue'
import Navbar from '../components/layout/NavBar.vue'
import ProjectList from '../components/projects/ProjectList.vue'
import { useProjects } from '@/composables/useProjects.js'
import AboutSection from '@/components/about/AboutSection.vue'
import ServicesSection from '@/components/services/ServicesSection.vue'


const router = useRouter()

const { activeType, activeFilter, availableFilters, filteredProjects, changeType, changeFilter } =
  useProjects()
</script>

<template>
  <div class="landing">
    <div class="navbar-fixed">
      <Navbar />
    </div>

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
        </div>

        <section class="glass projects-wrapper">
          <ProjectList :active-type="activeType" :active-filter="activeFilter" :filters="availableFilters"
            :projects="filteredProjects" :limit="4" @change-type="changeType" @change-filter="changeFilter" />

          <div class="view-more-wrapper">
            <button class="view-more-btn" @click="router.push('/projects')">
              View More
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </section>
      </div>
    </section>

    <section id="about" class="section section-about">
      <div class="container">
        <div class="projects-header">
          <h2>Who I <br><span class="italic">am</span></h2>
        </div>
        <AboutSection />
      </div>
    </section>

    <section id="services" class="section section-services">
      <div class="container">
        <ServicesSection />
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

.flex-wrapper>.informations {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.flex-wrapper>.image-wrapper {
  display: flex;
  flex: 1;
}

.image-wrapper {
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 100%;
}

.image-wrapper>.myImage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
}

.image-wrapper>.myImage img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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

.section-about {
  margin-top: 196px;
}

.section-services{
  margin-top: 20rem;
  margin-bottom: 20rem;
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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}

.CTT_button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  line-height: 1;
  text-align: center;
  padding: 8px 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
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
  justify-content: flex-start;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .projects-header {
    flex-direction: column;
    align-items: stretch;
  }
}

.projects-wrapper {
  padding: 20px;
}

.view-more-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-primary-color);
  font-family: var(--p-font);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 200ms ease,
    border-color 200ms ease,
    transform 200ms ease,
    box-shadow 200ms ease;
}

.view-more-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.view-more-btn:active {
  transform: translateY(0);
}

.view-more-btn i {
  transition: transform 200ms ease;
}

.view-more-btn:hover i {
  transform: translateX(3px);
}

@media (min-width: 1920px) {
  .section-projects {
    padding-top: 14dvh;
  }

  .projects-wrapper {
    width: 100%;
  }
}
</style>
