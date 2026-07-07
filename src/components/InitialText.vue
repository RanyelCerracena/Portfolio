<template>
  <main class="mainHome">
    <article>
      <section>
        <p>Hi! I am</p>
        <h2 class="myName">Ranyel Cerracena</h2>
        <p>I am a <Transition name="fade" mode="out-in">
            <span :key="currentIndex" class="names">{{ names[currentIndex] }}</span>
          </Transition>
        </p>

      </section>
    </article>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const names = [
  'Full-Stack Developer',
  'UI & UX Designer',
  'Creative Designer'
];

const currentIndex = ref(0);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % names.length;
  }, 3000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<style scoped>
.mainHome {
  display: flex;
  align-content: center;
  justify-content: left;
}

.names {
  font-size: var(--p-size);
  font-family: var(--title-font);
  color: var(--text-primary-color);
}

.myName {
  font-style: italic;
  font-weight: 300;

  display: flex;
  justify-content: center;
  text-wrap: nowrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
