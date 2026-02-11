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
  width: 100dvw;
}

ul {
  width: 100dvw;
  display: flex;
  position: relative;
  list-style: none;
}
.marker {
  background: #ccc;
  z-index: 1;
  transition: all 0.3s ease;
  cursor: pointer;
}
.about {
  background: #7a9de9;
  z-index: 4;
  width: 30%;
  margin-left: -1.2rem;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
}
.skills {
  background: #a4f79c;
  z-index: 3;
  margin-left: -1.7rem;
  width: 30%;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
}
.projects {
  background: #b37ae9;
  z-index: 2;
  margin-left: -1.5rem;
  width: 35%;
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
}
.contact {
  background: #e97a96;
  z-index: 1;
  margin-left: -1.7rem;
  width: 30%;
}
.about a,
.projects a,
.contact a,
.skills a {
  margin-left: 1rem;
}
.home:hover a,
.about:hover a,
.projects:hover a,
.contact:hover a,
.skills:hover a {
  color: #fff;
}
.marker a {
  display: flex;
  text-decoration: none;
  font-family:
    Roboto,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 17px;
  font-weight: bold;
  height: 100%;
  width: 100%;
  padding: 15px;
}
</style>
