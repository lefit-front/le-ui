<template>
  <div class="le-radio" :class="vertical ? 'le-radio-vertical' : 'le-radio-horizontal'">
    <label class="le-radio-item" slot="title">
      <input
        class="le-radio-input"
        type="radio"
        :disabled="disabled"
        :checked="checked"
        @change="change">
      <span class="le-radio-label"><slot>{{label}}</slot></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'le-radio',

  props: {
    checked: {
      type: Boolean,
      default: false
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
      currentValue: this.value
    }
  },

  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }
      let result = this.group ? this.currentValue : event.target.checked
      this.$emit('input', result)
    },
    updateValue () {
      this.currentValue = this.value;
    }
  },

  watch: {
    value () {
      this.updateValue()
    }
  },

  mounted () {
    this.updateValue()
  }
};
</script>
