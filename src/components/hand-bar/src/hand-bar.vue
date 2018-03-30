<template>
  <div class="le-hand-bar-box d-f" :style="{'height': height + 'px'}">
    <div class="d-f a-i-c" @click="positionEventFun">
      <Icon type="location-a"></Icon>
      <div class="le-hand-bar-title">{{position}}</div>
      <Icon type="arrow-down-a"></Icon>
    </div>
    <div class="d-f a-i-c le-hand-bar-rightBox" @click="lessonEventFun">
      <div class="le-hand-bar-type border-1px-left">{{lesson}}</div>
      <Icon type="arrow-up-a"></Icon>
    </div>
  </div>
</template>
<script>
/**
 * le-header
 * @module components/hand-bar
 * @desc 导航栏

 * @param {String} [position=''] -  左侧位置信息，接受string
 * @param {String} [lesson='']   -  右侧信息，接受string
 * @param {Function} [positionEvent='']   -  左侧位置信息点击事件
 * @param {Function} [lessonEvent='']     -  右侧课程点击事件
 * @param {Number} [height=45]   -  hand-bar高度默认45, 接受 数字
 *
 * @example
 * <hand-bar :height="45" style="background:#f1f1f1" :position="names" :lesson="namess" :positionEvent="positionEvent" :lessonEvent="lessonEvent"></hand-bar>
 */
import Icon from '../../icon';
export default {
  name: 'le-hand-bar',
  components: {
    Icon
  },
  props: {
    position: String,
    lesson: String,
    positionEvent: Function,
    lessonEvent: Function,
    height:{
      type: Number,
      default: 45
    }
  },
  methods: {
    positionEventFun (evt) {
      this.positionEvent(evt)
    },
    lessonEventFun (evt) {
      this.lessonEvent(evt)
    }
  }
}
</script>
