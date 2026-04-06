<script setup>
defineOptions({
  name: 'TheHeader',
})
</script>

<template>
  <header class="site-header">
    <nav aria-label="Navegação principal">
      <ul>
        <li class="marker about">
          <a href="#about" aria-label="Ir para seção Sobre Mim">About</a>
        </li>
        <li class="marker skills">
          <a href="#skills" aria-label="Ir para seção Habilidades">Skills</a>
        </li>
        <li class="marker projects">
          <a href="#projects" aria-label="Ir para seção Projetos">Projects</a>
        </li>
        <li class="marker contact">
          <a href="#contact" aria-label="Ir para seção Contato">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.site-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
}

.marker {
  background: #ccc;
  z-index: 1;
  transition: filter 0.3s ease;
  cursor: pointer;
  width: 115%; /* Faz o elemento vazar para o próximo e evitar espaços em branco */
  height: 60px;
}

.about {
  background: #7a9de9;
  z-index: 4;
  clip-path: polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%);
}

.skills {
  background: #a4f79c;
  z-index: 3;
  clip-path: polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%);
}

.projects {
  background: #b37ae9;
  z-index: 2;
  clip-path: polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%);
}

.contact {
  background: #e97a96;
  z-index: 1;
  width: 100%; /* O último não precisa vazar */
}

.marker a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #333;
  width: 85%; /* Centraliza o texto apenas na área visível antes do corte */
  height: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact a {
  width: 100%; /* O último botão usa 100% da largura original */
}

.marker:hover {
  filter: brightness(1.1);
}

.marker:hover a {
  color: #fff;
}

@media (max-width: 768px) {
  .marker a {
    font-size: 0.8rem;
    letter-spacing: 0px;
  }
}

@media (max-width: 480px) {
  .marker a {
    font-size: 0.65rem;
  }
  .marker {
    height: 50px;
  }
}
</style>
