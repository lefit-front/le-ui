<template>
  <div :class="classes">
    <Icon :type="icon" :size="iconSize" :color="iconColor">
  </div>
</template>
<script>
import Icon from '../icon'

const prefixCls = 'le-input';
export default {
  name: 'le-input',
  props: {
    type: {

    }
    icon: {
      type: String
    },
    iconSize: {
      type: [Number, String]
    },
    iconColor: {
      type: String,
      default: ''
    }
  },
  data: {
    prefixCls: prefixCls
  }
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
