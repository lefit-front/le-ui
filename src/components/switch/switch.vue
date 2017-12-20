<template>
    <span :class="wrapClasses" @click="toggle">
        <span :class="innerClasses">
            <slot name="open" v-if="currentValue"></slot>
            <slot name="close" v-if="!currentValue"></slot>
        </span>
    </span>
</template>
<script>
import Emitter from '../../mixins/emitter';

const prefixCls = 'le-switch';

export default {
  name: 'le-switch',
  mixins: [ Emitter ],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'large',
      validator (value) {
        return [
          'large',
          'small'
        ].indexOf(value) > -1
      }
    }
  },
  data () {
    return {
      currentValue: this.value
    };
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]: this.currentValue,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ];
    },
    innerClasses () {
      return `${prefixCls}-inner`;
    }
  },
  methods: {
    toggle () {
      if (this.disabled) {
        return false;
      }

      const checked = !this.currentValue;
      this.currentValue = checked;
      this.$emit('input', checked);
      this.$emit('on-change', checked);
      this.dispatch('FormItem', 'on-form-change', checked);
    }
  },
  watch: {
    value (val) {
      this.currentValue = val;
    }
  }
};
</script>
