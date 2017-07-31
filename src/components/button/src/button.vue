<template>
  <button
    class="le-button a-i-c j-c-c"
    :class="['le-button-' + type, 'le-button-size-' + size, 'le-button-shape-' + shape, {
      'is-disabled': disabled
    }]"
    :disabled="isDisabled"
    @click="handleClick"
    >
    <div class="le-button-loading" v-if="loading === true"
      :style="{
      'border-top-color': loadingColor,
      'border-left-color': loadingColor,
      'border-bottom-color': loadingColor,
      'height': loadingSize + 'px',
      'width': loadingSize + 'px'
      }"
    ></div>
    <label class="le-button-text"><slot></slot></label>
  </button>
</template>
<script>
/**
 * le-header
 * @module components/le-button
 * @desc 按钮
 * @param {string} [type=primary] - 显示类型，接受 primary, default, plain, shadow
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [loading=none] - 尺寸，接受 block, none
 * @param {string} [loading-color=#fff] - 尺寸，接受 #26a2ff  rgb()  yellow 三种方式
 * @param {Number} [loading-size=10] - 尺寸，接受 number数字
 * @param {slot} - 显示文本
 *
 * @example
 * <le-button type="primary" size="normal" :loading="loading" loading-color="yellow" :loading-size="11" @click="saveBtnEvent">保存</le-button>
 *                                                  loading block显示  none隐藏
 */
export default {
  name: 'le-button',
  computed: {
    isDisabled () {
      if (this.disabled === true) {
        return true
      } else if (this.loading === true) {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loadingColor: {
      type: String,
      default: '#fff'
    },
    loadingSize: {
      type: Number,
      default: 10
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'normal',
          'large',
          'small'
        ].indexOf(value) > -1
      }
    },
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'default',
          'plain',
          'shadow'
        ].indexOf(value) > -1
      }
    },
    shape: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'circle'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
