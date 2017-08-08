<template>
  <div class="le-checkbox" :class="vertical ? 'le-checkbox-vertical' : 'le-checkbox-horizontal'">
    <label class="le-checkbox-item" slot="title">
      <input
        class="le-checkbox-input"
        type="checkbox"
        :disabled="disabled"
        :checked="checked"
        @change="change">
      <span class="le-checkbox-label"><slot>{{label}}</slot></span>
      <div v-if="vertical" class="le-checkbox-sign"><le-icon type="success" color="#fff" size="12"/></div>
    </label>
  </div>
</template>

<script>
import leIcon from '../../icon'
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

  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }
      let result = this.group ? {value: this.currentValue, checked: event.target.checked} : event.target.checked
      this.$emit('input', result)
      console.log(result)
    },
    updateValue () {
      this.currentValue = this.value;
    }
  },

  watch: {
    value (val) {
      this.updateValue()
    }
  },

  mounted () {
    this.updateValue()
  }
};
</script>
