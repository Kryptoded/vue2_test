<template>
  <div class="settings-page-card">
    <div class="btns-wrapper">
      <AppButton
        :icon="trashIcon"
        class="btn-delete"
        color="negative"
        @click.native="$emit('delete')"
      />
      <AppButton
        :icon="iconsEdit"
        class="btn-delete"
        color="primary"
        @click.native="$emit('edit')"
      />
    </div>
    <indexPageCard :text="card.text" />
  </div>
</template>

<script>
import iconsTrash from '@/ui/icons/Trash.vue';
import iconsEdit from "@/ui/icons/Edit.vue";

export default {
  props: {
    card: {
      type: Object,
      default: ()=>({})
    }
  },
  created() {
    this.trashIcon = iconsTrash;
    this.iconsEdit = iconsEdit;
  },
}
</script>

<style scoped>
.btn-delete {
  width: 30px;
  height: 30px;
  padding:  3px;
  margin-right: 10px;
}

.btns-wrapper {
  position: absolute;
  top: -10px;
  right: -10px;
  width: fit-content;
  display: flex;
}

.settings-page-card {
  position: relative;
  width: fit-content;
  height: fit-content;
}
</style>
