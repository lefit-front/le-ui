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
      required: true
    },
    size: {
      type: [Number, String]
    },
    color: {
      type: String,
      default: ''
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
