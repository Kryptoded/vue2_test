<template>
  <div class="add-form">
    <AppInput v-model="text" label="Добавьте текст" class="add-text-form-input" @keyup.enter.native="emitText"/>
    <AppButton @click.native="emitText" label="Добавить" class="add-text-form-btn"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    emitText() {
      this.$emit('add',this.text);
      this.text = '';
    }
  }
}
</script>

<style scoped>
.add-form {
  display: flex;
  justify-content: flex-end;
}

.add-text-form-input {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.add-text-form-btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
