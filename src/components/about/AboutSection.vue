<script setup>
import { onMounted, ref, nextTick } from 'vue'
import InfoCard from './InfoCard.vue'
import JourneyCard from './JourneyCard.vue'
import TechCard from './TechCard.vue'
import StatusCard from './StatusCard.vue'

const isMounted = ref(false)

const twoCols = [
  { title: 'Product Engineering', subtitle: 'Design-led software delivery' },
  { title: 'Digital Experience', subtitle: 'Usability + visual consistency' },
  { title: 'API & Systems', subtitle: 'Reliable integrations at scale' },
  { title: 'Continuous Craft', subtitle: 'Iteration for long-term quality' },
]

const journeySteps = [
  { year: '2022', text: 'Building foundational skills' },
  { year: '2023', text: 'Shipped desktop experiences' },
  { year: '2024', text: 'Developed backend systems' },
  { year: 'Today', text: 'Delivering modern digital products' },
]

const techItems = ['Vue', 'Go', 'C#', '.NET', 'Docker', 'SQL', 'Git', 'REST']

const statusItems = [
  { text: 'Looking for internships', dot: '#44dd81' },
  { text: 'Learning Go', dot: '#9f69f8' },
  { text: 'Building Portfolio', dot: '#44d8dd' },
  { text: 'Open Source', dot: '#f983e1' },
]

function applyEntrance(el) {
  if (!el) return

  const cards = el.querySelectorAll('[data-about-stagger]')
  cards.forEach((card) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(14px)'
  })

  // Small stagger
  cards.forEach((card, i) => {
    const delay = i * 70
    card.style.transition = `opacity 420ms ease ${delay}ms, transform 480ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms`
    requestAnimationFrame(() => {
      card.style.opacity = '1'
      card.style.transform = 'translateY(0)'
    })
  })
}

onMounted(async () => {
  await nextTick()
  isMounted.value = true
  applyEntrance(document)
})
</script>

<template>
  <div class="about-section" ref="root">
    <div class="about-layout">
      <aside class="about-intro glass about-intro__card" data-about-stagger>
        <div class="about-intro__content">
          <div class="about-intro__kicker">Ranyel Cerracena</div>
          <p class="about-intro__text">I've always believed that technology is another form of creativity.
            <br>
            <br>
            My story didn't begin with programming—it began with design. As a teenager, I spent hours creating
            wallpapers, experimenting with Photoshop Touch, and exploring every tool that allowed me to transform ideas
            into something visual. I wasn't just learning software; I was discovering the excitement of creating.
            <br>
            <br>
            Years later, programming entered my life and completely changed the way I approached technology. I realized
            that code wasn't replacing creativity—it was expanding it. Every application, API or interface became
            another canvas where ideas could take shape.
            <br>
            <br>
            Today, I combine both passions. I enjoy building robust software, but I also care deeply about the
            experience people have while using it. To me, engineering and design are not opposites—they are
            complementary parts of the same process.
            <br>
            <br>
            My goal is simple: create digital products that are not only functional, but memorable.
          </p>
        </div>

      </aside>


      <div class="about-right" aria-label="About modules">

        <div class="about-grid about-grid--top">
          <div v-for="(card, i) in twoCols" :key="i" data-about-stagger class="stagger-item">
            <InfoCard :title="card.title" :subtitle="card.subtitle" />
          </div>
        </div>

        <div class="about-grid about-grid--mid">
          <div data-about-stagger class="stagger-item">
            <JourneyCard :steps="journeySteps" />
          </div>
        </div>

        <div class="about-grid about-grid--stack">
          <div data-about-stagger class="stagger-item">
            <TechCard :items="techItems" />
          </div>
        </div>

        <div class="about-grid about-grid--bottom">
          <div data-about-stagger class="stagger-item">
            <StatusCard title="Currently" :items="statusItems" badge="Now" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  padding: 24px 0 0;
}

.about-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 20px;
  align-items: stretch;
}

.about-intro {
  padding: 18px;
  height: 100%;
  display: flex;
}

.about-intro__content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.about-intro__kicker {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  color: var(--text-terciary-color);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.about-intro__text {
  font-size: 0.88rem;
  color: var(--text-secondary-color);
  line-height: 1.75;
}


.about-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-grid {
  display: grid;
  gap: 20px;
}

.about-grid--top {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.about-grid--mid,
.about-grid--stack,
.about-grid--bottom {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.stagger-item {
  will-change: opacity, transform;
}

@media (max-width: 1024px) {
  .about-layout {
    grid-template-columns: 1fr;
  }

  .about-grid--top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .about-section {
    padding-top: 6px;
  }

  .about-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
