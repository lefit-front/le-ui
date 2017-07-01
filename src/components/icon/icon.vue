<template>
  <i :class="classes" :style="styles"></i>
</template>
<script>
const prefixCls = 'lemo-icon';

export default {
  name: 'lemo-icon',
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 12
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    classes () {
      return `${prefixCls} ${prefixCls}-${this.type}`;
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
