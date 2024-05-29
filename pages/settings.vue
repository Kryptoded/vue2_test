<template>
  <section>
    <settingsPageAddTextForm @add="addText"/>
      <transition-group name="list" class="cards-wrapper" tag="div">
        <settingsPageCard
          class="cards-wrapper-item"
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @delete="deleteItem(card)"
          @edit="editItem(card)"
        />
      </transition-group>
      <AppDialog v-model="showDialog">
        <settingsPageAddTextForm
          :isEdit="true"
          :inputText="editedItem?.text"
          @add="changeText"
        />
      </AppDialog>
  </section>
</template>
<script>

export default {
  data() {
    return {
      showDialog: false,
      editedItem: null
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
    },
    editItem(cardItem) {
      this.editedItem = cardItem;
      this.showDialog = true;
    },
    changeText(value) {
      this.showDialog = false;
      this.$store.dispatch('cards/editItem', {item: this.editedItem, value});
    }
  }
}
</script>


<style scoped>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.cards-wrapper-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
