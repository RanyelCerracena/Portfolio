<template>
  <div class="box-icons-component">
    <i class="bi bi-circle-fill"></i>
    <i class="bi bi-circle-fill colored"></i>
  </div>
</template>

<script>
export default {
  name: 'BoxIconsComponents',
}
</script>

<style scoped>
.box-icons-component {
  display: flex;
  gap: 0.5rem;
}
.bi-circle {
  font-size: 25px;
}
.colored {
  color: rgb(236, 109, 109);
}
</style>
