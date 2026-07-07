<script setup>

function downloadCV() {
  alert("Aiii");
}
</script>

<template>
  <header>
    <nav class="menu glass">
      <img class="signature" src="/signature.svg" alt="Ranyel Signature">
      <ul class="navbar">
        <li class="glass btn"><a href="#home"><i class="bi bi-house"></i> Home</a></li>
        <li class="glass btn"><a href="#projects"><i class="bi bi-house"></i> Projects</a></li>
        <li class="glass btn"><a href="#about"><i class="bi bi-person"></i> About</a></li>
        <li class="glass btn"><a href="#medias"><i class="bi bi-house"></i> Medias</a></li>
      </ul>

      <button v-on:click="downloadCV" class="glass btn">
        Download Resume <i class="bi bi-arrow-down"></i>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.signature {
  width: 4dvw;
}

.menu {
  width: 90%;
  max-width: 1200px;
  padding: 5px 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
}

.navbar {
  display: flex;
  gap: 10px;
  list-style: none;
}

.btn {
  padding: 15px;
  color: var(--text-primary-color);
  font-family: var(--p-font);
}

li a {
  color: var(--text-primary-color);
  text-decoration: none;
}
</style>
