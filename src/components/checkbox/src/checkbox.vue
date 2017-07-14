<template>
  <div class="le-checkbox">
    <div class="le-checkbox-item" slot="title" v-for="(option, index) in options">
      <input
        class="le-checkbox-input"
        :id="option.value || option"
        type="checkbox"
        v-model.lazy="value"
        :disabled="option.disabled"
        :value="option.value || option">
      <label class="le-checkbox-label" v-text="option.label || option" :for="option.value || option"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'le-checkbox',

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
