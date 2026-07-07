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
    <div class="card-top">
      <img class="folder-icon" src="/bigsur_folder.webp" alt="" />

      <div class="card-info">
        <div class="card-title-row">
          <h3 class="card-title">{{ project.title }}</h3>
          <span class="status" :style="{ '--dot': statusColor(project.status) }">
            {{ project.status }}
          </span>
        </div>

        <div class="card-stack">
          <span v-for="tech in project.stack" :key="tech" class="stack-tag">{{ tech }}</span>
        </div>
      </div>
    </div>

    <div class="card-divider"></div>

    <p class="card-description">{{ project.description }}</p>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  transition:
    transform 200ms ease,
    box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.card-top {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.folder-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  object-fit: contain;
}

.card-info {
  flex: 1;
  min-width: 0;
}

.card-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.card-title {
  font-family: var(--title-font);
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--text-primary-color);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.status {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--text-secondary-color);
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}

.status::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--dot);
  box-shadow: 0 0 6px var(--dot);
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
}

.stack-tag {
  font-size: 0.6rem;
  padding: 2px 7px;
  border-radius: 4px;
  background: rgba(159, 105, 248, 0.15);
  border: 1px solid rgba(159, 105, 248, 0.3);
  color: var(--first-color);
}

.card-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 14px 0;
}

.card-description {
  font-size: 0.78rem;
  color: var(--text-secondary-color);
  line-height: 1.5;
  margin: 0;
}
</style>
