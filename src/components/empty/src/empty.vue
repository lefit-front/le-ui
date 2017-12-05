<template>
  <div class="le-empty-box" :class="[{'le-empty-full-screen d-f a-i-c j-c-c f-d-c': full}]">
    <img class="le-empty-img" :src="src" :style="{'width': width + 'px'}">
    <slot></slot>
    <p class="le-empty-text" :style="{'font-size': size + 'px'}">{{text}}</p>
  </div>
</template>
<script>
/**
 * le-header
 * @module components/empty
 * @desc empty 空白页组件
 * @param {String} [src]          -  图片路径
 * @param {String} [text]         -  空白页文字提示
 * @param {Number} [width=100]    -  img 图片大小
 * @param {Number} [size=16]      -  提示文字字体大小
 * @param {Boolean} [full=false]  -  是否全屏
 *
 * @example
 * <Empty src="https://cdn.leoao.com/img/%E6%97%A0%E8%A1%8C%E7%A8%8B@3x.png" text="这里是text提示" :width="120" :size="22" full></Empty>
 */
export default {
  name: 'le-empty',
  props: {
    src: {
      type: String,
      default: 'https://cdn.leoao.com/m/img/M%E7%AB%99%E7%A9%BA%E5%88%97%E8%A1%A82.png'
    },
    text: {
      type: String,
      default: '没有查到相应数据'
    },
    full: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 100
    },
    size: {
      type: Number,
      default: 16
    }
  }
}
</script>
