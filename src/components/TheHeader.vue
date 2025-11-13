<template>
  <main>
    <aside :class="['sideBar', { expanded: mouseInside }]">
      <nav class="navBar" :style="{ height: isFullScreen ? 'calc(6vh - 2px)' : '6vh' }">
        <h1 class="rcLogo">{{ displayName }}</h1>
      </nav>
      <nav class="navLinks" @mouseenter="mouseInside = true" @mouseleave="mouseInside = false">
        <ul class="navList">
          <li :class="{ active: activeNavItem === 'home' }" @click="setActiveNavItem('home')">
            <router-link class="navItem home" to="/#home">
              <i class="bi bi-house"></i>
              <span class="itemText">início</span>
            </router-link>
          </li>
          <li :class="{ active: activeNavItem === 'about' }" @click="setActiveNavItem('about')">
            <router-link class="navItem about" to="/#about">
              <i class="bi bi-person"></i>
              <span class="itemText">sobre</span>
            </router-link>
          </li>
          <li
            :class="{ active: activeNavItem === 'projects' }"
            @click="setActiveNavItem('projects')"
          >
            <router-link class="navItem projects" to="/#projects">
              <i class="bi bi-code-slash"></i>
              <span class="itemText">projetos</span>
            </router-link>
          </li>
          <li :class="{ active: activeNavItem === 'contact' }" @click="setActiveNavItem('contact')">
            <router-link class="navItem contact" to="/#contact">
              <i class="bi bi-envelope"></i>
              <span class="itemText">contato</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <nav class="additionalButtons">
        <button @click="toggleTheme" class="theme-toggle">
          <i :class="['bi', isDark ? 'bi-sun' : 'bi-moon']"></i>
        </button>
        <i class="bi bi-translate"></i>
      </nav>
    </aside>
    <section class="topHeader"></section>
  </main>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'TheHeader',
})

const activeNavItem = ref('home')
const mouseInside = ref(false)
const displayName = ref('RC')

let fullName = 'Ranyel Cerracena'
let shortName = 'RC'
let typingTimout

function setActiveNavItem(item) {
  activeNavItem.value = item
}

watch(mouseInside, (expanded) => {
  clearTimeout(typingTimout)
  if (expanded) {
    animateTyping(shortName, fullName)
  } else {
    animateTyping(fullName, shortName)
  }
})

function animateTyping(from, to) {
  let index = 0
  let deleting = true
  displayName.value = from

  function step() {
    if (deleting) {
      if (displayName.value.length > 0) {
        displayName.value = displayName.value.slice(0, -1)
        typingTimout = setTimeout(step, 20)
      } else {
        deleting = false
        step()
      }
    } else {
      if (index < to.length) {
        displayName.value += to.charAt(index)
        index++
        typingTimout = setTimeout(step, 30)
      }
    }
  }

  step()
}

const isDark = ref(false)
const isFullScreen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateTheme()

  function updateActiveSlash() {
    const navItems = document.querySelectorAll('.navItem .itemText')
    navItems.forEach((item) => {
      item.textContent = item.textContent.replace(/ \/$/, '')
    })
    const active = document.querySelector('.navItem.active .itemText')
    if (active) {
      active.textContent = active.textContent.trim() + ' /'
    }
  }

  const navLinks = document.querySelectorAll('.navItem')
  navLinks.forEach((item) => {
    item.addEventListener('click', () => {
      navLinks.forEach((i) => i.classList.remove('active'))
      item.classList.add('active')
      updateActiveSlash()
    })
  })

  setTimeout(() => {
    const current = document.querySelector(`.navItem[to="${location.pathname}"]`)
    if (current) {
      navLinks.forEach((i) => i.classList.remove('active'))
      current.classList.add('active')
      updateActiveSlash()
    } else {
      if (navLinks.length > 0) {
        navLinks.forEach((i) => i.classList.remove('active'))
        navLinks[0].classList.add('active')
        updateActiveSlash()
      }
    }
  })

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
  })
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sideBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 55px;
  background-color: #ffffff17;
  backdrop-filter: blur(10px);
  transition: width 0.5s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.sideBar.expanded {
  width: 250px;
}

.sideBar h1 {
  display: inline-block;
  font-family: 'Manufacturing Consent', sans-serif;
  font-size: 1.5rem;
  position: fixed;
  width: 100%;
  text-align: center;
  line-height: 58px;
  transition: all 1s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
}

.navBar {
  height: 6.5dvh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navLinks {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navList {
  list-style: none;
  margin-top: 2rem;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.navItem {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  width: 100%;
  text-decoration: none;
  color: var(--color-text);
  font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  transition:
    text-shadow 0.6s ease,
    color 0.3s ease;
  background-color: transparent;
}

.navItem i {
  font-size: 25px;
}

.navItem i,
.navItem span {
  font-size: 25px;
}

.itemText {
  padding: 0px 10px;
  text-wrap: nowrap;
}

.bi.bi-translate {
  font-size: 25px;
  color: var(--color-text);
  transition: box-shadow 0.3s ease;
}

.bi.bi-translate:hover {
  text-shadow: 0 0 10px var(--vt-c-circle-primary-dark);
}

.sideBar.expanded + .routerContainer {
  margin-left: 250px;
}

.additionalButtons {
  display: flex;
  width: 55px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.theme-toggle:hover {
  opacity: 0.8;
}

.bi-sun,
.bi-moon {
  transition:
    transform 0.3s ease,
    text-shadow 0.3s ease;
}

.bi-sun:hover,
.bi-moon:hover {
  transform: rotate(20deg);
  text-shadow: 0 0 10px var(--vt-c-circle-primary-dark);
}

.home:hover {
  text-shadow: 0 0 10px var(--vt-c-circle-primary-dark);
}

.about:hover {
  text-shadow: 0 0 10px var(--about-scroll-color);
}

.projects:hover {
  text-shadow: 0 0 10px var(--projects-scroll-color);
}

.contact:hover {
  text-shadow: 0 0 10px var(--contact-scroll-color);
}

@media (max-width: 768px) {
  .navItem i,
  .navItem span {
    font-size: 4vw;
    margin-left: 4px;
  }

  .navBar {
    min-height: 48px;
    max-height: 64px;
    line-height: 6vh;
  }
}
</style>
