<template>
  <div class="le-checkbox">
    <label class="le-checkbox-item" slot="title">
      <input
        class="le-checkbox-input"
        type="checkbox"
        :disabled="disabled"
        :checked="checked"
        @change="change">
      <span class="le-checkbox-label"><slot>{{label}}</slot></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'le-checkbox',

  props: {
    checked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    },
    label: {
      type: [String, Number]
    },
    vertical: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
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
