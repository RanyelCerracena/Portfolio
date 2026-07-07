<script setup>
defineProps({
  project: { type: Object, required: true },
})

function statusColor(status) {
  const map = { stable: '#44dd81', building: '#f9c74f', paused: '#f983e1' }
  return map[status] || '#888888'
}
</script>

<template>
  <div class="hero">
    <div class="hero-top">
      <h1 class="hero-title">{{ project.title }}</h1>
      <span class="hero-status" :style="{ '--dot': statusColor(project.status) }">
        {{ project.status }}
      </span>
    </div>

    <span class="hero-category">{{ project.categories.join(' / ') }}</span>

    <p class="hero-description">{{ project.description }}</p>

    <div class="hero-cover">
      <img :src="project.coverImage" :alt="project.title" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.hero-title {
  font-family: var(--title-font);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 400;
  color: var(--text-primary-color);
  margin: 0;
}

.hero-status {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary-color);
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-status::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--dot);
  box-shadow: 0 0 6px var(--dot);
}

.hero-category {
  font-size: 0.72rem;
  color: var(--text-tertiary-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-description {
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  line-height: 1.6;
}

.hero-cover {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.hero-cover img {
  width: 100%;
  display: block;
}
</style>
