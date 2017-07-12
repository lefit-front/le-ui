<template>
  <div class="leuv-hand-bar-box d-f" :style="{'height': height + 'px'}">
    <div class="d-f a-i-c" @click="positionEventFun">
      <Icon type="icon_didian_x"></Icon>
      <div class="leuv-hand-bar-title">{{position}}</div>
      <Icon type="xiangshangsanjiaoshouqi"></Icon>
    </div>
    <div class="d-f a-i-c leuv-hand-bar-rightBox" @click="lessonEventFun">
      <div class="leuv-hand-bar-type">{{lesson}}</div>
      <Icon type="xiangshangsanjiaoshouqi"></Icon>
    </div>
  </div>
</template>
<script>
/**
 * leuv-header
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
  name: 'leuv-hand-bar',
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
