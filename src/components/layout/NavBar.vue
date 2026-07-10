<script setup>
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n.js'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const isOpen = ref(false)
// Removido highlight por sessão para evitar ficar "preso" durante scroll.
const activeSection = ref('home')

function downloadCV() {
  const link = document.createElement('a')
  link.href = '/cv/Ranyel_Cerracena_Desenvolvedor.pdf'
  link.download = 'Ranyel_Cerracena_Desenvolvedor.pdf'
  link.click()
  isOpen.value = false
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function scrollToSection(e) {
  closeMenu()
  const li = e.currentTarget
  const href = li.dataset.href || li.querySelector('a')?.getAttribute('href')
  if (!href || !href.startsWith('#')) return
  const target = document.querySelector(href)
  if (!target) return

  const newSection = href.replace('#', '')
  if (newSection === activeSection.value) return

  activeSection.value = newSection

  target.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header>
    <nav class="menu glass">
      <img class="signature" src="/signature.svg" alt="Ranyel Signature">

      <!-- Hamburger button (mobile) -->
      <button class="hamburger" :class="{ active: isOpen }" @click="toggleMenu" aria-label="Menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Overlay -->
      <div class="menu-overlay" :class="{ open: isOpen }" @click="closeMenu"></div>

      <!-- Nav panel -->
      <div class="navbar-panel" :class="{ open: isOpen }">
        <ul class="navbar">
          <li class="glass btn btn-home" @click="scrollToSection" data-href="#home"><a href="#home"><i
                class="bi bi-house"></i> {{ t('nav.home') }}</a></li>
          <li class="glass btn btn-projects" @click="scrollToSection" data-href="#projects"><a href="#projects"><i
                class="bi bi-kanban"></i> {{ t('nav.projects') }}</a></li>
          <li class="glass btn btn-about" @click="scrollToSection" data-href="#about"><a href="#about"><i
                class="bi bi-person"></i> {{ t('nav.about') }}</a></li>
          <li class="glass btn btn-contact" @click="scrollToSection" data-href="#contact"><a href="#contact"><i
                class="bi bi-envelope"></i> {{ t('nav.contact') }}</a></li>
        </ul>

        <button v-on:click="downloadCV" class="glass btn btn-resume mobile-download">
          {{ t('nav.downloadResume') }} <i class="bi bi-arrow-down"></i>
        </button>

        <div class="lang-switcher-mobile">
          <LanguageSwitcher />
        </div>
      </div>

      <!-- Desktop actions (hidden on mobile) -->
      <div class="desktop-actions">
        <LanguageSwitcher />
        <button v-on:click="downloadCV" class="glass btn btn-resume desktop-download">
          {{ t('nav.downloadResume') }} <i class="bi bi-arrow-down"></i>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.signature {
  width: 4dvw;
}

.menu {
  width: 90%;
  max-width: 1200px;
  padding: 5px 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
}

.navbar {
  display: flex;
  gap: 10px;
  list-style: none;
}

.navbar li {
  display: flex;
}

.btn {
  padding: 15px;
  color: var(--text-primary-color);
  font-family: var(--p-font);
  cursor: pointer;
  border: 1px solid transparent;
  background: transparent;
  outline: none;
  transition-property: background, transform, box-shadow, border-color, color;
  transition-duration: 0.35s;
  transition-timing-function: var(--ease-apple-spring);
}

.btn:active {
  transform: translateY(0) scale(0.96) !important;
  transition-duration: 0.1s !important;
}

li a {
  color: var(--text-primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 100%;
  transition: color 0.25s var(--ease-apple);
}

/* Home - first-color (purple) */
.btn-home {
  border-color: rgba(159, 105, 248, 0.2);
}

.btn-home:hover,
.btn-home.is-active {
  background: rgba(159, 105, 248, 0.15);
  border-color: rgba(159, 105, 248, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(159, 105, 248, 0.25);
}

.btn-home:hover a,
.btn-home.is-active a {
  color: var(--first-color);
}

/* Projects - second-color (green) */
.btn-projects {
  border-color: rgba(68, 221, 129, 0.2);
}

.btn-projects:hover,
.btn-projects.is-active {
  background: rgba(68, 221, 129, 0.15);
  border-color: rgba(68, 221, 129, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(68, 221, 129, 0.25);
}

.btn-projects:hover a,
.btn-projects.is-active a {
  color: var(--second-color);
}

/* About - third-color (cyan) */
.btn-about {
  border-color: rgba(68, 216, 221, 0.2);
}

.btn-about:hover,
.btn-about.is-active {
  background: rgba(68, 216, 221, 0.15);
  border-color: rgba(68, 216, 221, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(68, 216, 221, 0.25);
}

.btn-about:hover a,
.btn-about.is-active a {
  color: var(--third-color);
}

/* Contact - fourth-color (pink) */
.btn-contact {
  border-color: rgba(249, 131, 225, 0.2);
}

.btn-contact:hover,
.btn-contact.is-active {
  background: rgba(249, 131, 225, 0.15);
  border-color: rgba(249, 131, 225, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(249, 131, 225, 0.25);
}

.btn-contact:hover a,
.btn-contact.is-active a {
  color: var(--fourth-color);
}

/* Resume button - first-color (purple) as primary CTA */
.btn-resume {
  background: var(--first-color);
  color: white;
  border: none;
}

.btn-resume:hover {
  background: #8a50e6;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(159, 105, 248, 0.35);
}

/* Desktop download button */
.desktop-download {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: #4d4dff;
  color: white;
  border: none;
}

.desktop-download:hover {
  background: #3a3aff;
}

/* Hamburger - hidden on desktop */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 201;
  padding: 0;
}

.hamburger .bar {
  width: 100%;
  height: 2px;
  background: var(--text-primary-color);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Overlay */
.menu-overlay {
  display: none;
}

/* Nav panel - desktop */
.navbar-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.desktop-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-download {
  display: none;
}

.lang-switcher-mobile {
  display: none;
}

/* Mobile */
@media (max-width: 768px) {
  .signature {
    width: 10dvw;
  }

  .menu {
    width: 92%;
    padding: 5px 15px;
    justify-content: space-between;
    position: relative;
  }

  .hamburger {
    display: flex;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 199;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .menu-overlay.open {
    opacity: 1;
    pointer-events: all;
  }

  .navbar-panel {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 300px;
    height: 100vh;
    flex-direction: column;
    gap: 12px;
    padding: 80px 20px 30px;
    background: rgba(20, 20, 20, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 200;
    transition: right 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    overflow-y: auto;
    justify-content: flex-start;
  }

  .navbar-panel.open {
    right: 0;
  }

  .navbar {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .navbar .btn {
    width: 100%;
    padding: 14px 18px;
    text-align: left;
    font-size: 0.95rem;
    border-radius: 10px;
  }

  .navbar .btn a {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .desktop-actions {
    display: none;
  }

  .navbar-panel .mobile-download {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 18px;
    width: 100%;
    border-radius: 10px;
    font-size: 0.95rem;
    font-family: var(--p-font);
    cursor: pointer;
    background: var(--first-color);
    color: white;
    border: none;
    justify-content: center;
    margin-top: 8px;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .navbar-panel .mobile-download:hover {
    background: #8a50e6;
    transform: translateY(-1px);
  }

  .navbar-panel .mobile-download:active {
    transform: scale(0.98);
  }

  .navbar-panel .lang-switcher-mobile {
    display: flex;
    justify-content: center;
    margin-top: 12px;
  }
}
</style>
