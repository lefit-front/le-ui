<template>
  <button
    class="lemo-button a-i-c j-c-c"
    :class="['lemo-button-' + type, 'lemo-size-' + size, {
      'is-disabled': disabled
    }]"
    :disabled="isDisabled"
    @click="handleClick"
    >
    <div class="lemo-loading" v-if="loading === 'block'"
      :style="{
      'border-top-color': loadingColor,
      'border-left-color': loadingColor,
      'border-bottom-color': loadingColor,
      'height': loadingSize + 'px',
      'width': loadingSize + 'px'
      }"
    ></div>
    <label class="lemo-button-text"><slot></slot></label>
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
 * @param {string} [loading=none] - 尺寸，接受 block, none
 * @param {string} [loading-color=#fff] - 尺寸，接受 #26a2ff  rgb()  yellow 三种方式
 * @param {string} [loading-size=10] - 尺寸，接受 #26a2ff  rgb()  yellow 三种方式
 * @param {slot} - 显示文本
 *
 * @example
 * <le-button type="normal" size="normal" :loading="loading" loading-color="yellow" loading-size="11" @click="saveBtnEvent">保存</le-button>
 *                                                  loading block显示  none隐藏
 */
export default {
  name: 'le-button',
  computed: {
    isDisabled () {
      if (this.disabled === true) {
        return true
      } else if (this.loading === 'block') {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    title: String,
    disabled: Boolean,
    loadingColor: {
      type: String,
      default: '#fff'
    },
    loadingSize: {
      type: String,
      default: '10'
    },
    loading: {
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

<style lang="less">
@import "../../../styles/index.less";
/* button统一样式 */
@button: lemo-button;
.@{button} {
  font-weight: @btn-font-weight;
  appearance: none;
  border-radius: @btn-border-radius;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding: @btn-padding-base;
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */

  /* loging */
  .lemo-loading{
    animation: button-loading-rotate 0.8s infinite linear;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-right:5px;
  }
}


/* size */
.lemo-size-large{
  width: 100%;
  font-size: @btn-font-size-large;
  padding: @btn-padding-large;
}
.lemo-size-normal{
  font-size: @btn-font-size;
  padding: @btn-padding-base;
}
.lemo-size-small{
  border-radius: @btn-border-radius-small;
  display: inline-block;
  font-size: @btn-font-size-small;
  padding: @btn-padding-small;
}

/* type:normal 和 按下样式 */
.@{button}-normal{
  background: @btn-primary-bg;
  color: @btn-primary-color;
  &:active {
    background: #BD491F;
    color: @btn-primary-color;
  }
}

/* type:border 和 按下样式 */
.@{button}-border{
  background: @btn-default-bg;
  color: @btn-default-color;
  border: 1px @btn-default-border solid;
  &:active {
    background: #FF4E00;
    color: #fff;
  }
}

/* type:plain 和 按下样式 */
.@{button}-plain{
  background: inherit;
  color: @btn-ghost-color;
  border: 1px solid @btn-ghost-border;
  &:active {
    border: 1px solid @btn-default-border;
    color: @btn-default-color;
  }
}

/* type:shadow 和 按下样式 */
.@{button}-shadow{
  background: @btn-shadow-bg;
  color: @btn-shadow-color;
  &:active {
    background: #ffede6;
    color: @btn-default-color;
  }
}

/* disabled样式 */
.is-disabled {
  background: @btn-disable-bg;
  color: @btn-disable-color;
}
.is-disabled:active{
  background: @btn-disable-bg;
  color: @btn-disable-color;
}

@keyframes button-loading-rotate {
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
