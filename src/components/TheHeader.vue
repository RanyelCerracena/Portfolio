<template>
    <main>
        <aside :class="['sideBar', { expanded: mouseInside }]">
            <nav class="navBar">
                <h1 class="rcLogo">{{ displayName }}</h1>
            </nav>
            <div class="navLinks" @mouseenter="mouseInside = true" @mouseleave="mouseInside = false">
                <ul class="navList">
                    <li>
                        <router-link class="navItem" to="/">
                            <i class="bi bi-house"></i>
                            <span class="itemText">Home</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="navItem" to="/about">
                            <i class="bi bi-person"></i>
                            <span class="itemText">About</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="navItem" to="/projects">
                            <i class="bi bi-code-slash"></i>
                            <span class="itemText">Projects</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="navItem" to="/contact">
                            <i class="bi bi-envelope"></i>
                            <span class="itemText">Contact</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </aside>
        <section class="topHeader">
            <button @click="toggleTheme" class="theme-toggle">
                <i :class="['bi', isDark ? 'bi-sun' : 'bi-moon']"></i>
            </button>
            <i class="bi bi-translate"></i>
        </section>
    </main>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

defineOptions({
    name: 'TheHeader',
})

const mouseInside = ref(false)
const displayName = ref('RC')

let fullName = 'Ranyel Cerracena'
let shortName = 'RC'
let typingTimout

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

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        isDark.value = savedTheme === 'dark'
    } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
});

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
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.topHeader {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    height: 6vh;
    border-bottom: 2px solid var(--color-text);
    background-color: #ffffff17;
    backdrop-filter: blur(10px);
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
    height: 58px;
    width: 100%;
    text-align: center;
    line-height: 58px;
    border-bottom: 2px solid var(--color-text);
}

.navBar {
    height: 6.5vh;
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
    font-family: sans-serif;
    font-size: 1rem;
    transition:
        text-shadow 0.6s ease,
        color 0.3s ease;
}

.navItem:hover {
    color: var(--color-text);
    text-shadow: var(--text-glow);
    background-color: transparent;
}

.navItem i {
    font-size: 25px;
}

.itemText {
    padding: 0px 10px;
}

.rcLogo {
    transition: all 1s ease-in-out;
    white-space: nowrap;
    overflow: hidden;
}

.bi.bi-translate {
    font-size: 25px;
    color: var(--color-text);
    cursor: pointer;
}

.sideBar.expanded+.routerContainer {
    margin-left: 250px;
}

.theme-toggle {
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    font-size: 1.25rem;
    margin-right: 1rem;
    padding: 0.5rem;
    transition: color 0.3s ease;
}
.theme-toggle:hover {
    opacity: 0.8;
}
.bi-sun, .bi-moon {
  transition: transform 0.3s ease;
}
.bi-sun:hover, .bi-moon:hover {
  transform: rotate(20deg);
}

</style>
