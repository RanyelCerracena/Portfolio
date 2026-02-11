<script setup>
defineOptions({
  name: 'SocialMedias',
})
</script>

<template>
  <aside class="social-medias" aria-label="Redes sociais">
    <div class="tape"></div>
    <h2>My social medias</h2>
    <nav aria-label="Links para redes sociais">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ranyel-cerracena/"
            class="bi bi-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite meu perfil no LinkedIn"
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/RanyelCerracena/"
            target="_blank"
            rel="noopener noreferrer"
            class="bi bi-github"
            aria-label="Visite meu perfil no GitHub"
          ></a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            class="bi bi-youtube"
            aria-label="Visite meu canal no YouTube"
          ></a>
        </li>
      </ul>
    </nav>
    <img class="follow-decoration" src="/FollowMe.png" alt="Decoração com texto 'Follow Me'" />
  </aside>
</template>

<style scoped>
.social-medias {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 55%;
  right: 0%;
  transform: translate(-50%);
  background-color: #fcf793;
  width: 250px;
  height: 150px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  transform-origin: top center;
  animation: sway 5s ease-in-out infinite;
}

.tape {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.466);
  backdrop-filter: blur(1px);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.096);
  z-index: 10;
}

@keyframes sway {
  0%,
  100% {
    transform: translate(-50%) rotate(-2deg);
  }
  50% {
    transform: translate(-50%) rotate(2deg);
  }
}

.social-medias h2 {
  font-family:
    Mv boli,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 1.5rem;
  color: #000;
  margin: 0;
}
nav {
  width: 100%;
}
nav ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li a {
  font-size: 2rem;
  color: #000;
  transition: all 0.4s ease-in-out;
  display: inline-block;
}

nav li a:hover,
nav li a:focus {
  font-size: 50px;
  outline: none;
  transform: rotate(15deg);
}

nav li a.bi-linkedin:hover,
nav li a.bi-linkedin:focus {
  color: #0a66c2;
  filter: drop-shadow(0 0 10px rgba(10, 102, 194, 0.6));
}

nav li a.bi-github:hover,
nav li a.bi-github:focus {
  color: #210d94fc;
  filter: drop-shadow(0 0 10px rgba(33, 13, 148, 0.6));
}

nav li a.bi-youtube:hover,
nav li a.bi-youtube:focus {
  color: #ff0000;
  filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.6));
}

.follow-decoration {
  position: absolute;
  width: 300px;
  top: 80%;
  left: 25%;
}
</style>
