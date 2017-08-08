<template>
  <div class="le-checkbox-group" :class="vertical ? 'le-checkbox-vertical' : 'le-checkbox-horizontal'">
    <Radio v-for="(option, index) in options" :label="option.label" :value="option.value" :checked="option.value === curValue" @input="changeValue" @clear="clearValue" group/>
  </div>
</template>

<script>
import Radio from './checkbox.vue'
export default {
  name: 'le-checkbox-group',

  components: {
    Radio
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },

  data () {
    return {
      curValue: this.value
    }
  },

  watch: {
    curValue (val) {
      this.$emit('change', val)
    }
  },

  methods: {
    changeValue (val) {
      this.curValue = val
    },
    clearValue () {
      this.curValue = ''
    }
  }
};
</script>
