<template>
  <button
    class="le-button a-i-c j-c-c"
    :class="['le-button-' + type, 'le-size-' + size, {
      'is-disabled': disabled
    }]"
    :disabled="isDisabled"
    @click="handleClick"
    >
    <div class="le-loding" v-if="loding === 'block'"
      :style="{
      'border-top-color': lodingColor,
      'border-left-color': lodingColor,
      'border-bottom-color': lodingColor,
      'height': lodingSize + 'px',
      'width': lodingSize + 'px'
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
 * @param {string} [type=normal] - 显示类型，接受 normal, border, plain, shadow
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [loding=none] - 尺寸，接受 block, none
 * @param {string} [loding-color=#fff] - 尺寸，接受 #26a2ff  rgb()  yellow 三种方式
 * @param {string} [loding-size=10] - 尺寸，接受 #26a2ff  rgb()  yellow 三种方式
 * @param {slot} - 显示文本
 *
 * @example
 * <le-button type="normal" size="normal" :loding="loding" loding-color="yellow" loding-size="11" @click="saveBtnEvent">保存</le-button>
 *                                                 loding block显示  none隐藏
 */
export default {
  name: 'le-button',
  computed: {
    isDisabled () {
      if (this.disabled === true) {
        return true
      } else if (this.loding === 'block') {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    title: String,
    disabled: Boolean,
    lodingColor: String,
    lodingSize: String,
    loding: {
      type: String,
      default: 'none',
      validator (value) {
        return [
          'none',
          'block'
        ].indexOf(value) > -1
      }
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
      default: 'normal',
      validator (value) {
        return [
          'normal',
          'border',
          'plain',
          'shadow'
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

<style lang="css">
/* button统一样式 */
.le-button{
  height:40px;
  font-size:16px;
  appearance: none;
  border-radius: 3px;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
}
/* type:normal 和 按下样式 */
.le-button-normal{
  background:#FF4E00;
  color:#fff;
}
.le-button-normal:active{
  background: #BD491F;
  color:#fff;
}
/* type:border 和 按下样式 */
.le-button-border{
  background:#fff;
  color: #FF4E00;
  border:1px #FF4E00 solid;
}
.le-button-border:active{
  background: #FF4E00;
  color: #fff;
}

/* type:plain 和 按下样式 */
.le-button-plain{
  opacity: 0.6;
  background: #fff;
  border: 1px solid #000;
}
.le-button-plain:active{
  opacity: 1;
  border: 1px solid #FF4E00;
  color: #FF4E00;
}

/* type:shadow 和 按下样式 */
.le-button-shadow{
  background: rgba(0, 0, 0, 0.05);
  color: #000;
}
.le-button-shadow:active{
  background: rgba(252, 238, 230, 1);
  color: #FF4E00;
}
/* disabled样式 */
.is-disabled{
  background: #F2F2F2;
  color:#D0D0D0;
}
.is-disabled:active{
  background: #F2F2F2;
  color:#D0D0D0;
}
/* size */
.le-size-large{
  width:100%;
}
.le-size-normal{
  padding:0 12px;
}
.le-size-small{
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}
/* loging */
.le-loding{
  animation: mint-spinner-rotate 0.8s infinite linear;
  border: 2px solid transparent;
  border-radius: 50%;
  width:10px;
  height:10px;
  margin-right:5px;
  border-top-color:#fff;
  border-left-color:#fff;
  border-bottom-color:#fff;
}

@keyframes mint-spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*竖向居中*/
.a-i-c{
  align-items:center;
  -webkit-align-items:center;
  box-align:center;
  -moz-box-align:center;
  -webkit-box-align:center;
}
/*横向居中*/
.j-c-c{
  -webkit-justify-content:center;
  justify-content:center;
  -moz-box-pack:center;
  -webkit--moz-box-pack:center;
  box-pack:center;
}
</style>
