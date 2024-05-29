<template>
  <div class="index-page_card">
    <slot></slot>
    <div class="index-page_card_text">{{ text }}</div>
  </div>
</template>
<script>

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  }
}
</script>

<style scoped lang="scss">
.index-page_card {
  padding: 10px;
  border: 2px solid var(--primary);
  border-radius: 10px;
  width: 150px;
  height: 150px;
  display: flex;
  text-align: center;
  overflow: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.index-page_card_text {
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: auto;
  user-select: none;
}
</style>
