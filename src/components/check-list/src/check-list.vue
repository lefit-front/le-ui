<template>
  <div class="le-check-list">
    <label class="le-check-list-title" v-text="title"></label>
    <Radio v-if="type === 'radio'" :options="options" v-on:change="handleSelectRadio"/>
    <Checkbox v-if="type === 'checkbox'" :options="options" @change="handleSelectCheckbox"/>
  </div>
</template>

<script>
import Radio from '../../radio';
import Checkbox from '../../checkbox';
export default {
  name: 'le-check-list',
  components: {
    Radio,
    Checkbox
  },
  props: {
    title: String,
    options: {
      type: Array,
      required: true
    },
    value: [String, Array],
    type: {
      type: String,
      default: 'radio'
    }
  },

  watch: {
    value(val) {
      this.curValue = val;
    },

    selVal(val) {
      this.$emit('input', val);
    }
  },

  methods: {
    handleSelectRadio (val) {
      this.curValue = val
      this.$emit('getValue', this.curValue)
    },
    handleSelectCheckbox (val) {
      this.curValue = val
      this.$emit('getValue', this.curValue)
    }
  }
};
</script>
