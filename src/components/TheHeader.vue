<template>
  <main>
    <aside :class="['sideBar', { expanded: mouseInside }]">
      <nav class="navBar" :style="{ height: isFullScreen ? 'calc(6vh - 2px)' : '6vh' }">
        <h1 class="rcLogo">{{ displayName }}</h1>
      </nav>

      <nav class="navLinks" @mouseenter="mouseInside = true" @mouseleave="mouseInside = false">
        <ul class="navList">
          <li v-for="item in navItems" :key="item.name" :class="{ active: activeNavItem === item.name }" @click="setActiveNavItem(item.name)">
            <router-link :class="['navItem', item.name]" :to="item.to">
              <i :class="['bi', item.icon]"></i>
              <span class="itemText">{{ item.text }}</span>
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

defineOptions({ name: 'TheHeader' })

const activeNavItem = ref('home')
const mouseInside = ref(false)
const displayName = ref('RC')

const fullName = 'Ranyel Cerracena'
const shortName = 'RC'
let typingTimout

const navItems = [
  { name: 'home', icon: 'bi-house', text: 'início', to: '/#home' },
  { name: 'about', icon: 'bi-person', text: 'sobre', to: '/#about' },
  { name: 'projects', icon: 'bi-code-slash', text: 'projetos', to: '/#projects' },
  { name: 'contact', icon: 'bi-envelope', text: 'contato', to: '/#contact' },
]

function setActiveNavItem(item) {
  activeNavItem.value = item
}

watch(mouseInside, (expanded) => {
  clearTimeout(typingTimout)
  animateTyping(expanded ? shortName : fullName, expanded ? fullName : shortName)
})

function animateTyping(from, to) {
  let index = 0
  let deleting = true
  displayName.value = from

  function step() {
    if (deleting && displayName.value.length > 0) {
      displayName.value = displayName.value.slice(0, -1)
      typingTimout = setTimeout(step, 20)
    } else if (deleting) {
      deleting = false
      step()
    } else if (index < to.length) {
      displayName.value += to.charAt(index++)
      typingTimout = setTimeout(step, 30)
    }
  }
  step()
}

const isDark = ref(false)
const isFullScreen = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  updateTheme()
}

function updateTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  updateTheme()
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
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
}

.sideBar.expanded {
  width: 250px;
}

.rcLogo {
  font-family: 'Manufacturing Consent', sans-serif;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  line-height: 58px;
  transition: all 1s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
}

.navBar {
  height: 6.5dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navLinks {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navList {
  list-style: none;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.navItem {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  color: var(--color-text);
  font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  transition: text-shadow 0.6s ease, color 0.3s ease;
  text-decoration: none;
  background-color: transparent;
  cursor: var(--hover-cursor) 14 1, pointer;
}

.navItem i,
.navItem span {
  font-size: 25px;
}

.itemText {
  padding: 0 10px;
  white-space: nowrap;
}

.additionalButtons {
  width: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.theme-toggle,
.additionalButtons .bi,
.navItem,
button,
a {
  cursor: var(--hover-cursor) 14 1, pointer;
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
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}

.bi-sun:hover,
.bi-moon:hover {
  transform: rotate(20deg);
  text-shadow: 0 0 10px var(--vt-c-circle-primary-dark);
}

.home:hover { text-shadow: 0 0 10px var(--vt-c-circle-primary-dark); }
.about:hover { text-shadow: 0 0 10px var(--about-scroll-color); }
.projects:hover { text-shadow: 0 0 10px var(--projects-scroll-color); }
.contact:hover { text-shadow: 0 0 10px var(--contact-scroll-color); }

.bi.bi-translate {
  font-size: 25px;
  color: var(--color-text);
  transition: box-shadow 0.3s ease;
  width: 100%;
  text-align: center;
}
.bi.bi-translate:hover {
  text-shadow: 0 0 10px var(--vt-c-circle-primary-dark);
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
  }
}
</style>
