<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="lemo-popup" :class="[position ? 'lemo-popup-' + position : '']">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
/**
 * lemo-header
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
import Vue from 'vue';
if (!Vue.prototype.$isServer) {
  require('./popup.less');
}
export default {
  name: 'lemo-popup',

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

<style lang="less">
  @msgbox: lemo-popup;
  .@{msgbox}{
    position: fixed;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    backface-visibility: hidden;
    transition: .2s ease-out;
  }
  .@{msgbox}-top{
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .@{msgbox}-right{
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    transform: translate3d(0, -50%, 0);
  }
  .@{msgbox}-bottom{
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .@{msgbox}-left{
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    transform: translate3d(0, -50%, 0);
  }

  .popup-slide-top-enter,
  .popup-slide-top-leave-active {
    transform: translate3d(-50%, -100%, 0);
  }

  .popup-slide-right-enter,
  .popup-slide-right-leave-active {
    transform: translate3d(100%, -50%, 0);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }

  .popup-slide-left-enter,
  .popup-slide-left-leave-active {
    transform: translate3d(-100%, -50%, 0);
  }

  .popup-fade-enter,
  .popup-fade-leave-active {
    opacity: 0;
  }
</style>