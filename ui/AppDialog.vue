<template>
  <Transition @enter="onEnter" name="dialog">
      <div ref="dialog" class="dialog-wrapper" @click="hideModal" v-if="showModal">
        <div class="dialog" @click.stop>
          <slot></slot>
        </div>
      </div>
  </Transition>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showModal: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
  methods: {
    hideModal() {
      this.showModal = false;
    },
    onEnter() {
      document.body.append(this.$refs.dialog);
    }
  }
}
</script>
<style>
.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
  padding: 10px;
  border-radius: 10px;
  background-color: white;
}
</style>
