<template>
  <div class="lemo-loading-box d-f j-c-c a-i-c" :class="[{'lemo-loading-full-screen': full}]">
    <div
      :class="['lemo-loading-' + type]"
      :style="{
      'border-top-color': loadingColor,
      'border-left-color': loadingColor,
      'border-bottom-color': loadingColor,
      'height': loadingSize + 'px',
      'width': loadingSize + 'px'
      }"
    ></div>
  </div>
</template>
<script>
/**
 * lemo-header
 * @module components/loading
 * @desc loading 组件
 * @param {String} [type= 'rotate']          -  loadig 类型 。暂且只有rotate一种类型
 * @param {String} [loadingColor= '#000' ]   -  颜色， 接受 #开头，yellow, rbga() 三种方式
 * @param {String} [loadingSize= '22' ]      -  大小, 接受 数字
 * @param {Boolean} [full=false]             -  是否全屏，接受 true, false
 * 
 * @example
 * <Loading type="rotate" loading-color="red" loading-size="28" full></Loading>
 */
export default {
  name: 'lemo-loading',
  props: {
    type: {
      type: String,
      default: 'rotate',
      validator (value) {
        return [
          'rotate'
        ].indexOf(value) > -1
      }
    },
    loadingColor: {
      type: String,
      default: '#000'
    },
    loadingSize: {
      type: String,
      default: '22'
    },
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@msgbox: lemo-loading;
.@{msgbox}-box{
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
/* type = rotate */
.@{msgbox}-rotate{
  animation: animation-rotate 0.8s infinite linear;
  border: 3px solid transparent;
  border-radius: 50%;
}
@keyframes animation-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
</style>
