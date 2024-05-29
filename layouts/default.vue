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
  methods: {
    updateStore() {
      this.$store.dispatch('cards/initialize');
    }
  },
  mounted() {
    window.addEventListener('storage', this.updateStore);
  },
  beforeMount() {
    window.removeEventListener('storage', this.updateStore);
  },
  created() {
    this.updateStore();
  },
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
