<template>
  <section>
    <settingsPageCard
      v-for="(text, i) in cards"
      :key="i"
      :text="text"
    />
  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    cards() {
      return this.$store.state.cards.list;
    }
  }
}
</script>


<style scoped>
</style>
