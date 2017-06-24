<template>
  <div class="lemo-radio-list">
    <label class="lemo-radio" slot="title" v-for="(option, index) in options">
      <input
        class="lemo-radio-input"
        type="radio"
        v-model.lazy="value"
        :disabled="option.disabled"
        :value="option.value || option">
      <span class="lemo-radio-label" v-text="option.label || option"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'lemo-radio',

  props: {
    options: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      value: ''
    }
  },

  watch: {
    value (val) {
      console.log(val)
      this.$emit('change', val)
    }
  }
};
</script>

<style lang="less">
@import "../../../styles/index.less";
@radio: lemo-radio;

.@{radio}-list {
  display: flex;
  flex-wrap: wrap;
  margin: -9px;
  .@{radio} {
    position: relative;
    display: block;
    margin: 9px;
  }
  .@{radio}-input {
    display: none;

    &:checked {
      + .@{radio}-label {
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

    &[disabled] + .@{radio}-core {
      border-color: #ccc;
    }
  }
  .@{radio}-core {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 3px;
    vertical-align: middle;
  }
  .@{radio}-label {
    position: relative;
    display: block;
    padding: 5px 10px;
    font-size: @font-size-h4;
    background-color: @background-color-gray;
  }
}
</style>
