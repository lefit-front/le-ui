<template>
  <div class="leuv-checkbox">
    <div class="leuv-checkbox-item" slot="title" v-for="(option, index) in options">
      <input
        class="leuv-checkbox-input"
        :id="option.value || option"
        type="checkbox"
        v-model.lazy="value"
        :disabled="option.disabled"
        :value="option.value || option">
      <label class="leuv-checkbox-label" v-text="option.label || option" :for="option.value || option"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leuv-checkbox',

  props: {
    options: {
      type: Array,
      required: true
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

<style lang="less">
@import "../../../styles/index.less";
@checkbox: leuv-checkbox;

.@{checkbox} {
  display: flex;
  flex-wrap: wrap;
  margin: -9px;
  .@{checkbox}-item {
    position: relative;
    display: block;
    margin: 9px;
  }
  .@{checkbox}-input {
    display: none;

    &:checked {
      + .@{checkbox}-label {
        display: block;
        background: #ffeee6;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 18px;
          height: 18px;
          background: url(//cdn.leoao.com/m/img/%E7%AD%9B%E9%80%89%E4%B8%8B%E6%A0%87.png);
          background-size: cover;
          transform: scale(1);
        }
      }
    }

    &[disabled] + .@{checkbox}-label {
      background-color: @background-color-gray;
      color: @shadow-color;
    }
  }
  .@{checkbox}-label {
    position: relative;
    display: block;
    padding: 5px 10px;
    font-size: @font-size-h4;
    background-color: @background-color-gray;
  }
}
</style>
