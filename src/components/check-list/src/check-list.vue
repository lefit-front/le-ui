<template>
  <div class="lemo-check-list">
    <label class="lemo-check-list-title" v-text="title"></label>
    <Radio v-if="type === 'radio'" :options="options" v-on:change="handleSelectRadio"/>
    <Checkbox v-if="type === 'checkbox'" :options="options" @change="handleSelectCheckbox"/>
  </div>
</template>

<script>
import Radio from '../../radio';
export default {
  name: 'lemo-check-list',

  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: [String, Array],
    type: String
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

<style lang="less">
@import "../../../styles/index.less";
@group: lemo-check-list;
.@{group} {
  .@{group}-title {
    font-size: @font-size-h3;
    margin-bottom: 18px;
    margin-left: 0;
    display: block;
    font-weight: bold;
    color: @text-color;
  }
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
</style>
