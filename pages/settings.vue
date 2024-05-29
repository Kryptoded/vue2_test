<template>
  <section>
    <settingsPageAddTextForm @add="addText"/>
      <transition-group name="list" class="cards-wrapper" tag="div">
        <settingsPageCard
          class="cards-wrapper-item"
          v-for="card in cards"
          :key="card.id"
          :text="card.text"
          @delete="deleteItem(card)"
        />
      </transition-group>
  </section>
</template>
<script>

export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    cards() {
      return this.$store.state.cards.list;
    }
  },
  methods: {
    addText(text) {
      if (!text) return;
      this.$store.dispatch('cards/addItem', text);
    },
    deleteItem(cardItem) {
      this.$store.dispatch('cards/removeItem', cardItem);
    }
  }
}
</script>


<style scoped>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.cards-wrapper-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
