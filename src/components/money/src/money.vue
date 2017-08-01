<template>
  <div class="le-money-box" :style="{'color': color}" :class="[{'le-money-bold': bold}]">
    <small :style="{'font-size': setMoneyIconSize}">{{moneyIcon}}</small>
    <span :style="{'font-size': setMoneySize}">{{number}}</span>
  </div>
</template>
<script>
/**
 * le-header
 * @module components/money
 * @desc money组件 规则 icon是数值的 2/3 大小
 * @param {Number} [number=0]  -  数值大小，接受 数字
 * @param {Number} [size=12]   -  数值字体大小，接受 数字
 * @param {String} [color='']  -  数字和icon颜色， 接受 #开头，yellow, rbga() 三种方式
 * @param {String} [moneyIcon='¥']     -  数值icon，默认'¥'
 * @param {Boolean} [bold=false]     -  字体加粗，接受 true false
 *
 * @example
 * <Money :number="number" :size="20" :color="color" moneyIcon="$"></Money>
 */
export default {
  name: 'le-money',
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
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
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
