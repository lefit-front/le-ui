<template>
  <div class="leuv-empty-box" :class="[{'leuv-empty-full-screen d-f a-i-c j-c-c f-d-c': full}]">
    <img class="leuv-empty-img" :src="src" :style="{'width': width + 'px'}">
    <p class="leuv-empty-text" :style="{'font-size': size + 'px'}">{{text}}</p>
  </div>
</template>
<script>
/**
 * leuv-header
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
  name: 'leuv-empty',
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

<style lang="less">
@import "../../../styles/index.less";
@msgbox: leuv-empty;
.@{msgbox}-box{
  text-align: center;
}
.@{msgbox}-img{
  width:100px;
}
.@{msgbox}-text{
  margin:0;
  margin-top: 15px;
  opacity: 0.3;
  font-family: PingFang-SC-Semibold;
  color: @text-color;
}
.@{msgbox}-full-screen{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 90;
  background: #fff;
  text-align: center;
}
/*flex布局 css兼容*/
.d-f{
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
}
/*横向居中*/
.j-c-c{
  -webkit-justify-content:center;
  justify-content:center;
  -moz-box-pack:center;
  -webkit--moz-box-pack:center;
  box-pack:center;
}
/*竖向 居中*/
.a-i-c{
  align-items:center;
  -webkit-align-items:center;
  box-align:center;
  -moz-box-align:center;
  -webkit-box-align:center;
}
/*垂直显示*/
.f-d-c{
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -moz-box-orient:vertical;
  -moz-box-direction:normal;
  flex-direction:column;
  -webkit-flex-direction:column;
}
</style>
