<template>
  <div class="le-checkbox-group" :class="vertical ? 'le-checkbox-group-vertical' : 'le-checkbox-group-horizontal'">
    <Checkbox v-for="(option, index) in options" :key="index" :label="option.label" :value="option.value" :checked="hasValue(option.value)" @input="changeValue" group :vertical="vertical" />
  </div>
</template>

<script>
import Checkbox from './checkbox.vue'
export default {
  name: 'le-checkbox-group',

  components: {
    Checkbox
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
      type: [Array],
      default: []
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
    changeValue (obj) {
      let index
      if (obj.checked) {
        this.curValue.push(obj.value)
      } else {
        this.curValue.map((n, idx) => {
          if (n === obj.value) {
            index = idx
          }
        })
        this.curValue.splice(index, 1)
      }
    },
    hasValue (i) {
      return this.value.includes(i)
    }
  }
};
</script>
