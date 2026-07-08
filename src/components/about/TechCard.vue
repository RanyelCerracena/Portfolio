<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="glass about-card">
    <div class="about-card__header">
      <h3>Tech Stack</h3>
      <span class="about-card__hint">tools</span>
    </div>

    <div class="about-stack">
      <div v-for="(item, i) in items" :key="i" class="about-pill">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  padding: 18px;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease,
    background 220ms ease;
}

.about-card:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.12);
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

.about-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.about-pill {
  font-size: 0.72rem;
  color: var(--text-secondary-color);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  padding: 7px 10px;
  border-radius: 999px;
}
</style>
