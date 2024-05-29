<template>
  <section>
    <div class="cards-wrapper">
      <indexPageCard
        class="card-item"
        v-for="card in cards"
        :key="card.id"
        :text="card.text"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    cards() {
      return this.$store.state.cards.list;
    }
  },
}
</script>

<style scoped lang="scss">
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.card-item:not(:last-child) {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
