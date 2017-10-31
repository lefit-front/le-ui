<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <Icon :class="[prefixCls + '-icon']" :type="icon" :size="iconSize" :color="iconColor" v-if="icon" @click="handleIconClick" />
      <input
          ref="input"
          :type="type"
          :class="inputClasses"
          :placeholder="placeholder"
          :disabled="disabled"
          :maxlength="maxlength"
          :readonly="readonly"
          :name="name"
          :value="currentValue"
          :number="number"
          :autofocus="autofocus"
          @keyup.enter="handleEnter"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput"
          @change="handleChange">
    </template>
    <textarea
        v-else
        ref="textarea"
        :class="textareaClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :rows="rows"
        :maxlength="maxlength"
        :readonly="readonly"
        :name="name"
        :value="value"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput">
    </textarea>
  </div>
</template>
<script>
import Icon from '../icon'

const prefixCls = 'le-input';
export default {
  name: 'le-input',
  props: {
    type: {
      validator (value) {
        return [
          'text',
          'textarea',
          'password'
        ].indexOf(value) > -1
      },
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      validator (value) {
        return [
          'small',
          'large'
        ].indexOf(value) > -1
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    readonly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    number: {
        type: Boolean,
        default: false
    },
    autofocus: {
        type: Boolean,
        default: false
    },
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
  data () {
    return {
      currentValue: this.value,
      prefixCls: prefixCls
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type`]: this.type
        }
      ];
    },
    inputClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    },
    textareaClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    handleEnter (event) {
      this.$emit('on-enter', event);
    },
    handleIconClick (event) {
      this.$emit('on-click', event);
    },
    handleFocus (event) {
      this.$emit('on-focus', event);
    },
    handleBlur (event) {
      this.$emit('on-blur', event);
    },
    handleInput (event) {
      let value = event.target.value;
      if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit('input', value);
      this.setCurrentValue(value);
      this.$emit('on-change', event);
    },
    handleChange (event) {
        this.$emit('on-input-change', event);
    },
    setCurrentValue (value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
    },
    focus() {
        if (this.type === 'textarea') {
            this.$refs.textarea.focus();
        } else {
            this.$refs.input.focus();
        }
    }
  },
  watch: {
      value (val) {
          this.setCurrentValue(val);
      }
  },
  mounted () {
  }
};
</script>
