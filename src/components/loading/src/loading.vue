<template>
  <div v-if="show" class="le-loading-box d-f j-c-c a-i-c" :class="[{'le-loading-full-screen': full}]" :style="{backgroundColor: backgroundColor}" @touchstart.prevent>
    <div
      :class="['le-loading-' + type]"
      :style="{
      'border-top-color': loadingColor,
      'border-left-color': loadingColor,
      'border-bottom-color': loadingColor,
      'height': loadingSize + 'px',
      'width': loadingSize + 'px'
      }"
      v-if="type === 'rotate'"
    ></div>
    <div class="le-loading-triple" v-if="type === 'triple'">
      <div class="le-loading-triple-bounce1" :style="bounceStyle"></div>
      <div class="le-loading-triple-bounce2" :style="bounceStyle"></div>
      <div class="le-loading-triple-bounce3" :style="bounceStyle"></div>
    </div>
  </div>
</template>
<script>
/**
 * le-header
 * @module components/loading
 * @desc loading 组件
 * @param {String} [type= 'rotate']          -  loadig 类型 。接受 rotate triple
 * @param {String} [loadingColor= '#000' ]   -  颜色， 接受 #开头，yellow, rbga() 三种方式
 * @param {Number} [loadingSize= 22 ]      -  大小, 接受 数字
 * @param {Boolean} [full=false]             -  是否全屏，接受 true, false
 *
 * @example
 * <Loading type="rotate" loading-color="red" loading-size="28" full></Loading>
 */
export default {
  name: 'le-loading',
  props: {
    type: {
      type: String,
      default: 'rotate',
      validator (value) {
        return [
          'rotate',
          'triple'
        ].indexOf(value) > -1
      }
    },
    loadingColor: {
      type: String,
      default: '#000'
    },
    backgroundColor: String,
    loadingSize: {
      type: Number,
      default: 22
    },
    full: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    bounceStyle() {
      return {
        width: this.loadingSize + 'px',
        height: this.loadingSize + 'px',
        backgroundColor: this.loadingColor
      };
    }
  }
}
</script>
