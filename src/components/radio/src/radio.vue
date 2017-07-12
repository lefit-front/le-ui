<template>
  <div class="leuv-radio">
    <label class="leuv-radio-item" slot="title" v-for="(option, index) in options">
      <input
        class="leuv-radio-input"
        type="radio"
        v-model.lazy="value"
        :disabled="option.disabled"
        :value="option.value || option">
      <span class="leuv-radio-label" v-text="option.label || option"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'leuv-radio',

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
