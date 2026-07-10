import { ref, computed } from 'vue'
import { messages } from '@/i18n/index.js'

const STORAGE_KEY = 'portfolio-locale'

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && messages[saved]) return saved

  const browserLang = navigator.language || navigator.userLanguage || 'en'
  const prefix = browserLang.split('-')[0].toLowerCase()
  if (messages[prefix]) return prefix
  return 'en'
}

const locale = ref(detectLocale())

export { locale }

export function useI18n() {
  function setLocale(code) {
    if (messages[code]) {
      locale.value = code
      localStorage.setItem(STORAGE_KEY, code)
    }
  }

  function t(key) {
    const keys = key.split('.')
    let result = messages[locale.value]
    for (const k of keys) {
      if (result == null) return key
      result = result[k]
    }
    return result ?? key
  }

  const currentLocale = computed(() => locale.value)

  return { t, locale: currentLocale, setLocale }
}
