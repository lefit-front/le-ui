<template>
  <div class="le-radio">
    <label class="le-radio-item" slot="title" v-for="(option, index) in options">
      <input
        class="le-radio-input"
        type="radio"
        v-model.lazy="value"
        :disabled="option.disabled"
        :value="option.value || option">
      <span class="le-radio-label" v-text="option.label || option"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'le-radio',

  props: {
    options: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      value: ''
    }
  },

  watch: {
    value (val) {
      this.$emit('change', val)
    }
  }
};
</script>
