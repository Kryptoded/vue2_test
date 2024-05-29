<template>
  <div class="layout">
    <div class="page">
      <Nuxt />
    </div>
    <layoutLinks />
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.page {
  flex: 1;
}
</style>
