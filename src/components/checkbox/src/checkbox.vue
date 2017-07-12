<template>
  <div class="leuv-checkbox">
    <div class="leuv-checkbox-item" slot="title" v-for="(option, index) in options">
      <input
        class="leuv-checkbox-input"
        :id="option.value || option"
        type="checkbox"
        v-model.lazy="value"
        :disabled="option.disabled"
        :value="option.value || option">
      <label class="leuv-checkbox-label" v-text="option.label || option" :for="option.value || option"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leuv-checkbox',

  props: {
    options: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      value: []
    }
  },

  watch: {
    value (val) {
      this.$emit('change', val)
    }
  }
};
</script>
