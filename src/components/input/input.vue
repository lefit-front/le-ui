<template>
  <div :class="wrapClasses">
    <template v-if="type === 'textarea'">
      <textarea
          ref="textarea"
          :class="textareaClasses"
          :placeholder="placeholder"
          :disabled="disabled"
          :rows="rows"
          :maxlength="maxlength"
          :readonly="readonly"
          :name="name"
          :value="currentValue"
          :autofocus="autofocus"
          @keyup.enter="handleEnter"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="handleInput">
      </textarea>
      <div class="le-input-limit" v-if="type === 'textarea' && maxlength">
        {{currentValue.length}}/{{maxlength}}
      </div>
    </template>
    <template v-else>
      <le-icon :class="[prefixCls + '-icon']" :type="icon" :size="iconSize" :color="iconColor" v-if="icon" @click="handleIconClick" />
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
  </div>
</template>
<script>
import leIcon from '../icon'

const prefixCls = 'le-input';
export default {
  name: 'le-input',
  props: {
    type: {
      validator (value) {
        return [
          'text',
          'textarea',
          'password',
          'number',
          'tel'
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
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    align: {
      validator (value) {
        return [
          'left',
          'center',
          'right'
        ].indexOf(value) > -1
      },
      default: 'left'
    }
  },
  data () {
    return {
      currentValue: this.value,
      prefixCls: prefixCls
    }
  },
  components: {
    leIcon
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}-wrapper`,
        {
          [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
          [`${prefixCls}-type`]: this.type,
          [`${prefixCls}-no-border`]: this.noBorder
        }
      ];
    },
    inputClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-${this.align}`]: !!this.align,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    },
    textareaClasses () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
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
