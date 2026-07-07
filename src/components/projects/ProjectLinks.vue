<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <div class="links">
    <h3 class="section-title">Links</h3>
    <div class="links-row">
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener"
        class="link-btn"
      >
        <i class="bi bi-github"></i> GitHub
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener"
        class="link-btn"
      >
        <i class="bi bi-box-arrow-up-right"></i> Live Demo
      </a>
      <a
        v-if="project.behance"
        :href="project.behance"
        target="_blank"
        rel="noopener"
        class="link-btn"
      >
        <i class="bi bi-behance"></i> Behance
      </a>
      <a
        v-if="project.figma"
        :href="project.figma"
        target="_blank"
        rel="noopener"
        class="link-btn"
      >
        <i class="bi bi-figma"></i> Figma
      </a>
      <a
        v-for="link in project.externalLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener"
        class="link-btn"
      >
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-family: var(--title-font);
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-primary-color);
  margin: 0;
}

.links-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary-color);
  font-family: var(--p-font);
  font-size: 0.78rem;
  text-decoration: none;
  transition:
    background 160ms ease,
    border-color 160ms ease;
}

.link-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}
</style>
