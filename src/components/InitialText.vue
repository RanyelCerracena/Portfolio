<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from '@/composables/useI18n.js'

const { t, locale } = useI18n()

const currentIndex = ref(0);
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % t('home.roles').length;
  }, 3000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>

<template>
  <main class="mainHome">
    <article>
      <section>
        <p class="greeting">{{ t('home.greeting') }}</p>
        <h2 class="myName">Ranyel Cerracena</h2>
        <p class="role-text">{{ t('home.iAmA') }} <Transition name="fade" mode="out-in">
            <span :key="currentIndex + '-' + locale" class="names">{{ t('home.roles')[currentIndex] }}</span>
          </Transition>
        </p>

      </section>
    </article>
  </main>
</template>

<style scoped>
.mainHome {
  display: flex;
  align-content: center;
  justify-content: left;
}

.greeting {
  font-size: var(--p-size);
}

.role-text {
  font-size: var(--p-size);
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

@media (max-width: 768px) {
  .mainHome {
    justify-content: flex-start;
    overflow: hidden;
  }

  .greeting {
    font-size: 1rem;
  }

  .myName {
    font-size: clamp(1.6rem, 9vw, 2.6rem);
    text-wrap: nowrap;
    justify-content: flex-start;
    line-height: 1.15;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .role-text {
    font-size: 1rem;
  }

  .names {
    font-size: 1.05rem;
    font-weight: 500;
  }
}
</style>
