<template>
  <div class="app-input">
    <label class="app-input_label" :class="{'app-input_label__focudes': isFocused || text.length}"> {{ label }} </label>
    <input
      :value="text"
      @focus="isFocused = true"
      @blur="isFocused = false"
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
    },
    label: {
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
  },
  data() {
    return {
      isFocused: false,
    }
  }
}
</script>
<style>
.app-input input {
  border: none;
  flex:1;
  padding: 10px;
}

.app-input input:focus {
  outline: none;
}

.app-input::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.app-input {
  border: 1px solid var(--primary);
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  padding: 0 10px;
  width: 100%;
  border-radius: 10px;
}

.app-input_label {
  position: absolute;
  transition: all .35s ease;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  pointer-events: none;
}
.app-input_label.app-input_label__focudes {
  top: -10px;
  transform: translateY(0);
}
</style>
