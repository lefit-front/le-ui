<template>
  <div class="lemo-check-list">
    <label class="lemo-check-list-title" v-text="title"></label>
    <div class="lemo-check-list-list">
      <Radio v-for="(option, index) in options" key="index" :option="option" :value="curValue" @select="handleSelectRadio" :name="name"/>
    </div>
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
    value: String,
    type: String,
    name: String
  },

  data() {
    return {
      curValue: this.value
    };
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
      this.$emit('change', this.curValue)
    }
  }
};
</script>

<style lang="less">
@import "../../../styles/index.less";
@group: lemo-check-list;
.@{group} {
  .@{group}-list {
    display: flex;
    flex-wrap: wrap;
    margin: -9px;
  }
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
