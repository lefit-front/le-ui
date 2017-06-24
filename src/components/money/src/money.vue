<template>
  <div class="lemo-money-box" :style="{'color': color}" :class="[{'lemo-money-bold': bold}]">
    <small :style="{'font-size': setMoneyIconSize}">{{moneyIcon}}</small>
    <span :style="{'font-size': setMoneySize}">{{number}}</span>
  </div>
</template>
<script>
/**
 * lemo-header
 * @module components/money
 * @desc money组件 规则 icon是数值的 2/3 大小
 * @param {String} [number=0]  -  数值大小，接受 数字
 * @param {String} [size=12]   -  数值字体大小，接受 数字
 * @param {String} [color='']  -  数字和icon颜色， 接受 #开头，yellow, rbga() 三种方式
 * @param {String} [moneyIcon='¥']     -  数值icon，默认'¥'
 * @param {Boolean} [bold=false]     -  字体加粗，接受 true false
 * 
 * @example
 * <Money :number="number" :size="20" :color="color" moneyIcon="$"></Money>
 */
export default {
  name: 'lemo-money',
  computed: {
    setMoneySize () {
      return parseInt(this.size, 10) + 'px'
    },
    setMoneyIconSize () {
      /*规则 icon是数值的 三分之二 大小*/
      return parseInt(this.size, 10)*(2/3) + 'px'
    }
  },
  props: {
    number: {
      default: 0
    },
    size: {
      default: 12
    },
    moneyIcon: {
      default: '¥'
    },
    color: String,
    bold: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/index.less";
@msgbox: lemo-money;
.@{msgbox}-box{
  padding:0;
  margin:0;
  color: @text-color;
  font-family: "DIN-Medium";
}
.@{msgbox}-bold{
  font-weight: bold;
}
</style>
