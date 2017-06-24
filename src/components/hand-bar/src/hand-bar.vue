<template>
  <div class="lemo-hand-bar-box d-f" :style="{'height': height + 'px'}">
    <div class="d-f a-i-c" @click="positionEventFun">
      <Icon type="icon_didian_x"></Icon>
      <div class="lemo-hand-bar-title">{{position}}</div>
      <Icon type="xiangshangsanjiaoshouqi"></Icon>
    </div>
    <div class="d-f a-i-c lemo-hand-bar-rightBox" @click="lessonEventFun">
      <div class="lemo-hand-bar-type">{{lesson}}</div>
      <Icon type="xiangshangsanjiaoshouqi"></Icon>
    </div>
  </div>
</template>
<script>
/**
 * lemo-header
 * @module components/hand-bar
 * @desc 导航栏

 * @param {String} [position=''] -  左侧位置信息，接受string
 * @param {String} [lesson='']   -  右侧信息，接受string
 * @param {Function} [positionEvent='']   -  左侧位置信息点击事件
 * @param {Function} [lessonEvent='']     -  右侧课程点击事件
 * @param {String} [height=45]   -  hand-bar高度默认45, 接受 数字
 * 
 * @example
 * <hand-bar height="45" style="background:#f1f1f1" :position="names" :lesson="namess" :positionEvent="positionEvent" :lessonEvent="lessonEvent"></hand-bar>
 */
import Icon from '../../icon';
export default {
  name: 'lemo-hand-bar',
  data () {
    return {
      selected: this.normal 
    }
  },
  props: {
    position: String,
    lesson: String,
    positionEvent: Function,
    lessonEvent: Function,
    height:{
      default: 45
    }
  },
  methods: {
    positionEventFun (evt) {
      this.positionEvent()
    },
    lessonEventFun (evt) {
      this.lessonEvent()
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/index.less";
@msgbox: lemo-hand-bar;
.@{msgbox}-box{
  padding:0 15px;
  margin:0;
  background-color:@head-bg;
  background-color:inherit;
}
.@{msgbox}-nav{
  width:99%;
  text-align:center;
  opacity: 0.6;
  font-size: 15px;
  color: @text-color;
}
.@{msgbox}-title{
  font-size:@font-size-small;
  margin-left:5px;
}
.@{msgbox}-type{
  font-size: @font-size-h5;
  color: @text-color;
  padding-left:15px;
  border-left:1px rgba(0, 0, 0, 0.1) solid;
}
.@{msgbox}-rightBox{
  margin-left:auto;
}
/*flex布局 css兼容*/
.d-f{
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
}
/*竖向居中*/
.a-i-c{
  align-items:center;
  -webkit-align-items:center;
  box-align:center;
  -moz-box-align:center;
  -webkit-box-align:center;
}
</style>
