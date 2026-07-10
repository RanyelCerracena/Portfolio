<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})

function statusColor(status) {
  const map = {
    stable: '#44dd81',
    building: '#f9c74f',
    paused: '#f983e1',
  }
  return map[status] || '#888888'
}
</script>

<template>
  <article class="card glass">
    <div class="card-image">
      <img v-if="project.logo" :src="project.logo" :alt="project.title" class="card-logo" />
      <img v-else :src="project.coverImage" :alt="project.title" />
    </div>

    <div class="card-body">
      <div class="card-header">
        <h3 class="card-title">{{ project.title }}</h3>
        <span class="status" :style="{ '--dot': statusColor(project.status) }">
          {{ project.status }}
        </span>
      </div>

      <p class="card-description">{{ project.description }}</p>

      <div class="card-links">
        <a
          v-for="link in project.externalLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="link"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  isolation: isolate;
  box-shadow: none;
  transition:
    transform 0.4s var(--ease-apple-spring),
    box-shadow 0.4s var(--ease-apple);
}

.card:hover {
  transform: translateY(-6px) scale(1.015);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.06);
}

.card:active {
  transform: translateY(-2px) scale(0.99);
  transition-duration: 0.15s;
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-logo {
  object-fit: contain !important;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
}

.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-family: var(--title-font);
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-primary-color);
  margin: 0;
}

.status {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary-color);
  display: flex;
  align-items: center;
  gap: 6px;
}

.status::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--dot);
  box-shadow: 0 0 8px var(--dot);
}

.card-description {
  font-size: 0.8rem;
  color: var(--text-secondary-color);
  line-height: 1.5;
  margin: 0;
}

.card-links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.link {
  font-size: 0.7rem;
  padding: 4px 10px;
  border-radius: 5px;
  background: rgba(68, 216, 221, 0.12);
  border: 1px solid rgba(68, 216, 221, 0.3);
  color: var(--third-color);
  text-decoration: none;
  transition:
    background 160ms ease,
    color 160ms ease;
}

.link:hover {
  background: rgba(68, 216, 221, 0.2);
  color: var(--text-primary-color);
}

@media (max-width: 768px) {
  .card {
    max-width: 400px;
    margin: 0 auto;
  }

  .card-body {
    padding: 12px;
  }

  .card-title {
    font-size: 0.9rem;
  }

  .card-description {
    font-size: 0.75rem;
  }
}
</style>
