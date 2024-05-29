<template>
  <button class="app-button" :class="btnClass">
      <component :is="icon" v-if="icon" class="app-button-icon" />
      <slot>
        {{ label }}
      </slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: null
    },
    color: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    btnClass() {
      return this.color;
    }
  }
}

</script>
<style lang="scss">
.app-button {
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 5px;
  transition: all .35s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.app-button:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.app-button-icon {
  width: 20px;
  height: 20px;
}

.app-button.primary {
  background-color: var(--primary);
  color: black;
}

.app-button.primary .app-button-icon {
  fill: black;
}

.app-button.negative {
  background-color: var(--negative);
  color: white;
}

.app-button.negative .app-button-icon {
  fill: white;
}
</style>
