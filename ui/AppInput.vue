<template>
  <div class="app-input">
    <input
      value="text"
      @input="(event) => text = event.target.value"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
<style>
.app-input input {

}
</style>
