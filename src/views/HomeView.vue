<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n.js'
import InitialText from '../components/InitialText.vue'
import ProjectList from '../components/projects/ProjectList.vue'
import { useProjects } from '@/composables/useProjects.js'
import AboutSection from '@/components/about/AboutSection.vue'
import ServicesSection from '@/components/services/ServicesSection.vue'
import ContactSection from '@/components/contact/ContactSection.vue'
import SectionHeader from '@/components/layout/SectionHeader.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

const router = useRouter()
const { t } = useI18n()

const { activeType, activeFilter, availableFilters, filteredProjects, changeType, changeFilter } =
  useProjects()

useScrollReveal()

onMounted(() => {
  const savedScroll = sessionStorage.getItem('homeScrollPosition')
  if (savedScroll) {
    window.scrollTo(0, parseInt(savedScroll, 10))
    sessionStorage.removeItem('homeScrollPosition')
  }
})

function goToProjects() {
  sessionStorage.setItem('homeScrollPosition', window.scrollY.toString())
  router.push('/projects')
}

function downloadCV() {
  const link = document.createElement('a')
  link.href = '/cv/Ranyel_Cerracena_Desenvolvedor.pdf'
  link.download = 'Ranyel_Cerracena_Desenvolvedor.pdf'
  link.click()
}
</script>

<template>
  <div class="landing">
    <section id="home" class="section section-home">

      <div class="container">
        <section class="flex-wrapper">
          <aside class="informations">
            <section class="glass initialText reveal-left">
              <InitialText />
            </section>
            <section class="glass academicInfo reveal-left delay-100">
              <div class="localInfo">
                <i class="bi bi-geo-alt"></i>
                <p>{{ t('home.location') }}</p>
              </div>
              <div class="localInfo">
                <i class="bi bi-book"></i>
                <p>{{ t('home.studying') }}</p>
              </div>
            </section>
            <section class="glass buttonsInfo reveal-left delay-200">
              <div class="buttons-container">
                <div class="buttons-row">
                  <div class="buttons-group">
                    <a href="https://linkedin.com/in/ranyel-cerracena" target="_blank" rel="noopener" class="btn-connect">
                      <i class="bi bi-linkedin"></i>
                      <span>{{ t('home.connect') }}</span>
                    </a>
                    <a href="mailto:ranyelcerracena.dev@gmail.com" class="btn-email">
                      <i class="bi bi-envelope"></i>
                      <span>{{ t('home.emailMe') }}</span>
                    </a>
                  </div>
                  <div class="separator">|</div>
                  <div class="buttons-group">
                    <a href="https://github.com/RanyelCerracena" target="_blank" rel="noopener" class="btn-social"><i class="bi bi-github"></i><span>{{ t('home.github') }}</span></a>
                    <a href="https://youtube.com/@ranyelcerracena" target="_blank" rel="noopener" class="btn-social"><i class="bi bi-youtube"></i><span>{{ t('home.youtube') }}</span></a>
                    <a href="https://www.behance.net/ranyelcerracena" target="_blank" rel="noopener" class="btn-social"><i class="bi bi-behance"></i><span>{{ t('home.behance') }}</span></a>
                  </div>
                </div>
                <div class="buttons-row downRow">
                  <div class="buttons-group">
                    <a href="#projects" class="btn-view-work">
                      <i class="bi bi-arrow-down"></i>
                      <span>{{ t('home.viewWork') }}</span>
                    </a>
                    <a href="#" class="btn-cv" @click.prevent="downloadCV()">
                      <i class="bi bi-arrow-up-right"></i>
                      <span>{{ t('home.cv') }}</span>
                    </a>
                  </div>
                  <div class="separator">|</div>
                  <div class="status-group">
                    <span class="status-dot"></span>
                    <span class="status-text">{{ t('home.openForProjects') }}</span>
                  </div>
                </div>
              </div>
            </section>
          </aside>
          <aside class="glass image-wrapper reveal-right">
            <section class="myImage">
              <img class="main-photo" src="/me.jpg" alt="">
            </section>
          </aside>
        </section>
      </div>
    </section>

    <section id="projects" class="section section-projects">
      <div class="container">
        <div class="projects-header reveal">
          <SectionHeader :kicker="t('sections.projects.kicker')" :title="t('sections.projects.title')" :title-italic="t('sections.projects.titleItalic')"
            :description="t('sections.projects.description')" />
        </div>

        <section class="glass projects-wrapper reveal-scale delay-100">
          <ProjectList :active-type="activeType" :active-filter="activeFilter" :filters="availableFilters"
            :projects="filteredProjects" :limit="4" @change-type="changeType" @change-filter="changeFilter" />

          <div class="view-more-wrapper">
            <button class="view-more-btn" @click="goToProjects">
              {{ t('home.viewMore') }}
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </section>
      </div>
    </section>

    <section id="about" class="section section-about">
      <div class="container">
        <div class="projects-header reveal">
          <SectionHeader :kicker="t('sections.about.kicker')" :title="t('sections.about.title')" :title-italic="t('sections.about.titleItalic')"
            :description="t('sections.about.description')" />
        </div>
        <div class="reveal delay-100">
          <AboutSection />
        </div>
      </div>
    </section>

    <section id="services" class="section section-services">
      <div class="container">
        <div class="reveal">
          <ServicesSection />
        </div>
      </div>
    </section>

    <section id="contact" class="section section-contact">
      <div class="container">
        <ContactSection />
      </div>
    </section>

  </div>
</template>

<style scoped>
.landing {
  min-height: 100%;
}

.italic {
  font-style: italic;
}

.section {
  height: auto;
  width: 100%;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.section-home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-about {
  margin-top: 2rem;
}

.section-services {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.section-contact {
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.container {
  width: 90%;
  max-width: 1200px;
  /* Centered max-width for modular layout */
  margin: 0 auto;
}

/* ==========================================
   FLEX GRID WRAPPER (HOME)
   ========================================== */
.flex-wrapper {
  display: flex;
  gap: 20px;
  /* Lock spacing to exactly 20px */
  padding: 30px 5%;
  /* Generous horizontal margins */
  justify-content: center;
  align-items: stretch;
  width: min(100%, 1200px);
  /* Perfect horizontal alignment with the rest of the site */
  margin: 0 auto;
  height: 580px;
  /* Locked height on desktop to keep grid proportioned */
  box-sizing: border-box;
}

.flex-wrapper>.informations {
  display: flex;
  flex-direction: column;
  flex: 1.2;
}

.flex-wrapper>.image-wrapper {
  display: flex;
  flex: 1;
}

.informations {
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* Lock spacing to exactly 20px */
  width: 100%;
  height: 100%;
  justify-content: flex-start;
}

/* Force left-side cards to be the exact same height as the image wrapper on desktop */
.informations>.glass {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  isolation: isolate;
}

.initialText {
  padding: 25px;
}

/* ==========================================
   ACADEMIC & BUTTONS MODULES
   ========================================== */
.academicInfo {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--text-secondary-color);
  height: auto;
}

.localInfo {
  display: flex;
  align-items: center;
  text-wrap: nowrap;
}

.localInfo>p {
  font-size: 14px;
  margin-left: 10px;
}

.buttonsInfo {
  padding: 15px;
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

/* ==========================================
   IMAGE MODULE
   ========================================== */
.image-wrapper {
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  border-radius: 15px;
  padding: 20px;
  /* Lock padding to exactly 20px around the image */
}

.image-wrapper>.myImage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  padding: 0;
}

.image-wrapper>.myImage img.main-photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  /* Rounded corners sitting inside padded container */
}

.image-wrapper>.myImage img.sparrow {
  position: absolute;
  right: -35px;
  top: -10px;
  width: 150px;
  height: auto;
  z-index: 2;
  pointer-events: none;
}

/* ==========================================
   PROJECTS SECTION
   ========================================== */
.projects-header {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 32px;
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

/* ==========================================
   RESPONSIVIDADE (MEDIA QUERIES)
   ========================================== */
@media (max-width: 992px) {
  .flex-wrapper {
    padding: 20px 4%;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 8dvh 0;
  }

  .flex-wrapper {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    padding: 15px;
    gap: 16px;
    height: auto;
  }

  .flex-wrapper>.informations,
  .flex-wrapper>.image-wrapper {
    flex: none;
    width: 100%;
  }

  .informations {
    gap: 16px;
  }

  .informations>.glass {
    flex: none;
  }

  .initialText {
    padding: 18px;
  }

  /* Academic info - stack vertically */
  .academicInfo {
    flex-direction: column;
    gap: 10px;
    padding: 12px 15px;
  }

  .localInfo {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }

  .localInfo>p {
    font-size: 0.72rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Buttons card - tighter layout */
  .buttonsInfo {
    padding: 12px;
  }

  .buttons-container {
    padding: 6px;
    gap: 8px;
  }

  .buttons-row {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .separator {
    display: none;
  }

  .buttons-group {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  .buttons-group a {
    flex: 1;
    min-width: 0;
    justify-content: center;
    padding: 10px 12px;
    font-size: 0.8rem;
  }

  .status-group {
    margin-top: 6px;
    justify-content: center;
  }

  .image-wrapper {
    aspect-ratio: 4 / 3;
    max-height: 350px;
  }

  .projects-header {
    flex-direction: column;
    align-items: stretch;
  }

  .section-about {
    margin-top: 1rem;
  }

  .section-services {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .section-contact {
    margin-bottom: 2rem;
  }
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
