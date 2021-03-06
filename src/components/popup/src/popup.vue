<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="le-popup" :class="[position ? 'le-popup-' + position : '']">
      <slot></slot>
      <div class="le-popup-close" v-if="showClose">
        <slot name="close"></slot>
      </div>
    </div>
  </transition>
</template>
<script>
/*eslint-env node*/
/**
 * le-header
 * @module components/popup
 * @desc 弹出框
 * @param {string} [v-mode] - 控制显示 v-model绑定的值为true显示 false消失
 * @param {string} [position=''] - 控制弹出层方向，接受left, top, right, bottom, '' 代表居中
 * @param {boolean}[modal=true] - 阴影,接受 true, false
 * @param {boolean}[closeOnClickModal=true] - 标记阴影是否关闭弹窗,接受 true, false
 * @param {string} [popupTransition=popup-slide] - 	显示/隐藏时的动效，仅在省略 position 时可配置，接受 popup-fade
 * @param {slot} - 显示文本
 *
 * @example
 *   <Popup
 *     v-model="popupRight"
 *     position="right"
 *     class="popupRight"
 *     >
 *     我是内容
 *   </Popup>
 */
import Popup from '../../../utils/popup';
export default {
  name: 'le-popup',

  mixins: [Popup],

  props: {
    modal: {
      default: true
    },

    modalFade: {
      default: false
    },

    lockScroll: {
      default: false
    },

    closeOnClickModal: {
      default: true
    },

    popupTransition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    },

    showClose: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      currentValue: false,
      currentTransition: this.popupTransition
    };
  },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  beforeMount() {
    if (this.popupTransition !== 'popup-fade') {
      this.currentTransition = `popup-slide-${ this.position }`;
    }
  },

  mounted() {
    if (this.value) {
      this.rendered = true;
      this.currentValue = true;
      this.open();
    }
  }
};
</script>
