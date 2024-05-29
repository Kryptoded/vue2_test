<template>
  <div class="add-form">
    <AppInput
      v-model="text"
      label="Добавьте текст"
      class="add-text-form-input"
      @keyup.enter.native="emitText"
    />
    <AppButton
      @click.native="emitText"
      :label="btnLabel"
      class="add-text-form-btn"
    />
  </div>
</template>
<script>
export default {
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    inputText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    btnLabel() {
      return this.isEdit ? 'Изменить' : 'Добавить'
    }
  },
  methods: {
    emitText() {
      this.$emit('add',this.text);
      this.text = '';
    }
  },
  created() {
    if (this.isEdit) {
      this.text = this.inputText;
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
