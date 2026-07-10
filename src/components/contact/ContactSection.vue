<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n.js'

const { t } = useI18n()

const socials = [
  {
    name: 'Email',
    icon: 'bi-envelope',
    url: 'mailto:ranyelcerracena.dev@gmail.com',
    label: 'ranyel@example.com',
    color: '#4d4dff',
  },
  {
    name: 'GitHub',
    icon: 'bi-github',
    url: 'https://github.com/RanyelCerracena',
    label: '@RanyelCerracena',
    color: '#f0f0f0',
  },
  {
    name: 'LinkedIn',
    icon: 'bi-linkedin',
    url: 'https://linkedin.com/in/ranyel-cerracena',
    label: 'Ranyel Cerracena',
    color: '#0077b5',
  },
  {
    name: 'YouTube',
    icon: 'bi-youtube',
    url: 'https://youtube.com/@ranyelcerracena',
    label: '@ranyelcerracena',
    color: '#ff0000',
  },
  {
    name: 'Behance',
    icon: 'bi-behance',
    url: 'https://www.behance.net/ranyelcerracena',
    label: '@ranyelcerracena',
    color: '#1769ff',
  },
  {
    name: 'Dribbble',
    icon: 'bi-dribbble',
    url: 'https://dribbble.com/rcerracena',
    label: '@rcerracena',
    color: '#ea4c89',
  },
]

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )

  const el = document.getElementById('contact')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-header" :class="{ visible: isVisible }">
        <span class="kicker">{{ t('sections.contact.kicker') }}</span>
        <h2 class="title">{{ t('sections.contact.title') }}<br><span class="italic">{{ t('sections.contact.titleItalic') }}</span></h2>
        <p class="subtitle">{{ t('sections.contact.description') }}</p>
      </div>

      <div class="socials-grid" :class="{ visible: isVisible }">
        <a v-for="(social, idx) in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener"
          class="social-card" :style="{ '--accent': social.color, '--i': idx }">
          <div class="social-icon-wrap">
            <i class="bi" :class="social.icon"></i>
          </div>
          <div class="social-info">
            <span class="social-name">{{ social.name }}</span>
            <span class="social-label">{{ social.label }}</span>
          </div>
          <i class="bi bi-arrow-up-right social-arrow"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 6rem 0 4rem;
}

.contact-container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

/* Header */
.contact-header {
  text-align: center;
  margin-bottom: 3rem;
}

.kicker {
  font-family: var(--p-font);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-tertiary-color);
  display: block;
  margin-bottom: 1rem;
}

.title {
  font-family: var(--title-font);
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 400;
  color: var(--text-primary-color);
  line-height: 1.2;
  margin: 0 0 1rem;
}

.italic {
  font-style: italic;
  background: linear-gradient(135deg, #44d8dd, #9f69f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 0.95rem;
  color: var(--text-secondary-color);
  margin: 0;
}

/* Socials grid */
.socials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

/* Social card */
.social-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: 14px;
  text-decoration: none;
  color: var(--text-primary-color);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    background 0.35s ease;
}

.social-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 50%, var(--accent, #4d4dff), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.social-card:hover::before {
  opacity: 0.08;
}

.social-card:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.social-card:active {
  transform: translateY(-1px) scale(0.98);
}

/* Icon */
.social-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--accent, #fff);
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.social-card:hover .social-icon-wrap {
  background: rgba(255, 255, 255, 0.1);
}

/* Info */
.social-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.social-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary-color);
}

.social-label {
  font-size: 0.72rem;
  color: var(--text-secondary-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Arrow */
.social-arrow {
  font-size: 0.8rem;
  color: var(--text-tertiary-color);
  flex-shrink: 0;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-card:hover .social-arrow {
  transform: translate(2px, -2px);
  color: var(--accent, #fff);
}

/* Entrance animation */
.contact-header,
.socials-grid {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.socials-grid {
  transition-delay: 0.15s;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger cards */
.visible .social-card {
  opacity: 0;
  transform: translateY(12px);
  animation: card-enter 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(0.2s + var(--i, 0) * 60ms);
}

@keyframes card-enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-section {
    padding: 4rem 0 3rem;
  }

  .contact-header {
    margin-bottom: 2rem;
  }

  .title {
    font-size: clamp(1.6rem, 7vw, 2.4rem);
  }

  .socials-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .social-card {
    padding: 14px 16px;
  }

  .social-icon-wrap {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .social-name {
    font-size: 0.82rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .socials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
