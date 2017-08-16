<template>
  <div class="le-radio-group" :class="vertical ? 'le-radio-group-vertical' : 'le-radio-group-horizontal'">
    <Radio v-for="(option, index) in options" :label="option.label" :value="option.value" :checked="option.value === curValue" @input="changeValue" group/>
  </div>
</template>

<script>
import Radio from './radio.vue'
export default {
  name: 'le-radio-group',

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
    }
  }
};
</script>
