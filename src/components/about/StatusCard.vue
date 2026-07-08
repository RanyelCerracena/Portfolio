<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  badge: {
    type: String,
    default: 'Now',
  },
})
</script>

<template>
  <div class="glass about-card status-card">
    <div class="about-card__header">
      <h3>{{ title }}</h3>
      <span class="about-card__hint">{{ badge }}</span>
    </div>

    <div class="status-list">
      <div v-for="(item, i) in items" :key="i" class="status-row">
        <span class="status-dot" :style="{ '--dot-color': item.dot }"></span>
        <span class="status-text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  padding: 18px;
}

.status-card {
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
}

.status-card:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  border-color: rgba(255, 255, 255, 0.28);
}

.about-card__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.about-card__header h3 {
  font-family: var(--title-font);
  font-size: 1.05rem;
  font-weight: 400;
}

.about-card__hint {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--text-terciary-color);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.status-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dot-color, #44dd81);
  box-shadow: 0 0 10px rgba(68, 221, 129, 0.45);
}

.status-text {
  font-size: 0.88rem;
  color: var(--text-secondary-color);
}
</style>
