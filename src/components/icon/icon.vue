<template>
  <span>
    <i :class="classes" :style="styles"></i>
  </span>
</template>
<script>
const prefixCls = 'le-icon';

export default {
  name: 'le-icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String]
    },
    color: {
      type: String,
      default: ''
    },
    symbol: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return this.symbol ? `${this.symbol}` : `${prefixCls} ${prefixCls}-${this.type}`;
    },
    styles () {
      let style = {};

      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }

      if (this.color) {
        style.color = this.color;
      }

      return style;
    }
  }
};
</script>
