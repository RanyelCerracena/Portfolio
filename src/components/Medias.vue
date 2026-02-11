<script>
export default {
  name: 'MediasComponent',
}
</script>
<template>
  <div class="medias">
    <h1>My social medias</h1>
    <ul style="list-style: none; display: flex">
      <li>
        <a
          href="https://www.linkedin.com/in/ranyel-cerracena/"
          class="bi bi-linkedin"
          target="_blank"
        ></a>
      </li>
      <li>
        <a href="https://github.com/RanyelCerracena/" target="_blank" class="bi bi-github"></a>
      </li>
      <li><a href="" target="_blank" class="bi bi-youtube"></a></li>
    </ul>
    <img class="follow" src="/FollowMe.png" alt="" />
  </div>
</template>
<style scoped>
.medias {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 60%;
  right: 0%;
  transform: translate(-50%);
  background-color: #fcf793;
  width: 250px;
  height: 150px;
  box-shadow: 0px 5px 10px 0px #00000027;
  border-radius: 2px;
}
.medias h1 {
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
}
ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
li a {
  font-size: 2rem;
  color: #000;
  transition: all 0.4s ease-in-out;
}
li a:hover {
  font-size: 50px;
}
li a.bi-linkedin:hover {
  color: #0a66c2;
}
li a.bi-github:hover {
  color: #210d94fc;
}
li a.bi-youtube:hover {
  color: #ff0000;
}
.follow {
  position: absolute;
  width: 300px;
  top: 80%;
  left: 25%;
}
</style>
