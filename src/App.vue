<script setup>
import Home from './components/Home.vue'
import TheHeader from './components/TheHeader.vue'
import About from './components/AboutPage.vue'

</script>

<template>
  <TheHeader class="myHeader" />
  <main>
    <Home id="home" />
    <About class="about" />

    <div class="homeBtn">
      <a href="#home"><i class="bi bi-house"></i></a>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 400dvh;
}
i {
  color: #fff;
  font-size: 2rem;
}
.homeBtn {
  position: fixed;
  bottom: 2rem;
  z-index: 1000;
  right: 2rem;
  cursor: pointer;
  background-color: #623697;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
