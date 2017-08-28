<template>
  <div class="le-checkbox" :class="vertical ? 'le-checkbox-vertical' : 'le-checkbox-horizontal'">
    <label class="le-checkbox-item" slot="title">
      <input
        class="le-checkbox-input"
        type="checkbox"
        :disabled="disabled"
        :checked="checked === 0 ? iChecked : checked"
        @change="change">
      <span class="le-checkbox-label"><slot>{{label}}</slot></span>
      <div v-if="vertical" class="le-checkbox-sign" :class="{'le-checkbox-sign-active' : checked === 0 ? iChecked : checked}"><le-icon type="success-d" color="#fff" size="12" /></div>
    </label>
  </div>
</template>

<script>
import leIcon from '../../icon'
export default {
  name: 'le-checkbox',

  props: {
    checked: {
      type: [Boolean, Number],
      default: 0
    },
    value: {
      type: [String, Number, Object, Boolean]
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
      iChecked: false
    }
  },

  components: {
    leIcon
  },

  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }
      this.iChecked = event.target.checked
      let result = {value: this.currentValue, checked: event.target.checked}
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
