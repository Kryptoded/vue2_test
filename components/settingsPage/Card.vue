<template>
  <div class="settings-page-card">
    <AppButton
      :icon="trashIcon"
      class="btn-delete"
      color="negative"
      @click="$emit('delete', text)"
    />
    <indexPageCard :text="text" />
  </div>
</template>

<script>
import iconsTrash from '@/ui/icons/Trash.vue'
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  created() {
    this.trashIcon = iconsTrash
  },
}
</script>

<style scoped>
.btn-delete {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  padding:  3px;
}

.settings-page-card {
  position: relative;
  width: fit-content;
  height: fit-content;
}
</style>
