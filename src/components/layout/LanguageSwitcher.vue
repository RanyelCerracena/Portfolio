<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { useI18n } from '@/composables/useI18n.js'
import { locales } from '@/i18n/index.js'

const { locale, setLocale } = useI18n()
const isOpen = ref(false)
let closeTimeout = null

const flagMap = { en: 'gb', pt: 'br', it: 'it' }

const flagUrl = computed(() => {
  const found = locales.find(l => l.code === locale.value)
  return found ? `https://flagcdn.com/w40/${flagMap[found.code] || found.code}.png` : ''
})

function flagSrc(code) {
  return `https://flagcdn.com/w40/${flagMap[code] || code}.png`
}

function select(code) {
  setLocale(code)
  isOpen.value = false
}

function toggle() {
  isOpen.value = !isOpen.value
}

function onEnter() {
  clearTimeout(closeTimeout)
}

function onLeave() {
  closeTimeout = setTimeout(() => {
    isOpen.value = false
  }, 150)
}

onBeforeUnmount(() => clearTimeout(closeTimeout))
</script>

<template>
  <div
    class="lang-switcher"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <button class="lang-btn glass" @click="toggle" aria-label="Change language">
      <img :src="flagUrl" alt="" class="flag-img" width="22" height="15" />
    </button>
    <Transition name="lang-dropdown">
      <div v-if="isOpen" class="lang-dropdown glass">
        <button
          v-for="l in locales"
          :key="l.code"
          class="lang-option"
          :class="{ active: locale === l.code }"
          @click="select(l.code)"
        >
          <img :src="flagSrc(l.code)" alt="" class="flag-img-sm" width="20" height="14" />
          <span class="lang-option-label">{{ l.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.lang-switcher {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.25);
}

.flag-img {
  width: 22px;
  height: 15px;
  border-radius: 2px;
  display: block;
  object-fit: cover;
}

.flag-img-sm {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  display: block;
  object-fit: cover;
  flex-shrink: 0;
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  border-radius: 10px;
  min-width: 100px;
  z-index: 10;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: var(--text-secondary-color);
  font-family: var(--p-font);
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.15s ease, color 0.15s ease;
}

.lang-option:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary-color);
}

.lang-option.active {
  background: rgba(159, 105, 248, 0.2);
  color: var(--text-primary-color);
}

/* Dropdown animation */
.lang-dropdown-enter-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.lang-dropdown-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}
.lang-dropdown-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}
.lang-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
