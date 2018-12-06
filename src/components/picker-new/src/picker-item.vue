<template>
  <div class="leui-picker-new-container-content" 
    @touchstart="onTouchstart" 
    @touchmove.prevent="onTouchmove"
    @touchend="onTouchend"
    @touchcancel="onTouchend">
    <div class="leui-picker-new-container-mask" :style="maskStyle"></div>
    <div class="leui-picker-new-container-column"  :style="wrapperStyle">
      <div class="leui-picker-new-container-item" 
        :style="itemStyle" 
        v-for="(item, index) in datas" 
        :key="index" 
        v-html="getOptionText(item)" 
        @click="setIndex(index, true)"></div>
    </div>
  </div>
</template>
<script>
import { data } from '../data'
export default{
 data(){
    return {
      startY: 0,
      startOffset: 0,
      offset: 0,
      prevY: 0,
      prevTime: null,
      velocity: 0,       // 移动速度
      transition: '',
      currentOptions: this.datas,
      currentIndex: this.defaultIndex
    }
  },
  props: {
    currentItem: {       // 当前滚动栏是第几个
      type: Number,
    },
    datas: {             // 用于展示的数据
      type: Array,
      default: () => {
        return data
      }
    },
    value: String,
    valueKey: {          // 显示的对象key
      type: String,
      default: 'label'
    },
    itemHeight: Number,  // 单位px
    visibleItemCount: {  // 显示多少行
      type: Number,
      default: 7,
      validator: (value) => {
        return [3, 5, 7].indexOf(value) > -1
      }
    },
    defaultIndex: {      // 默认选中item
      type: Number,
      default: 0
    }
  },
  computed: {
    wrapperStyle () {
      return {
        transition: this.transition,
        transform: `translate3d(0, ${this.offset}px, 0)`
      }
    },
    itemStyle () {
      return {
        height: `${this.itemHeight}px`,
        lineHeight: `${this.itemHeight}px`
      }
    },
    maskStyle () {
      return {
        height: `${this.itemHeight * this.visibleItemCount}px`,
        backgroundSize: `100% ${Math.floor(this.visibleItemCount / 2) * this.itemHeight}px`
      }
    },
    highlightStyle () {
      return {
        height: `${this.itemHeight}px`,
      }
    },
    count () {
      return this.currentOptions.length
    }
  },
  methods: {
    range (num, min, max) {
      return Math.min(Math.max(num, min), max)
    },
    isObj (x) {
      const type = typeof x
      return x !== null && (type === 'object' || type === 'function')
    },
    getOptionText (option) {
      return this.isObj(option) && this.valueKey in option ? option[this.valueKey] : option
    },
    isDisabled (option) {
      return this.isObj(option) && option.disabled
    },
    indexToOffset (index) {
      const baseOffset = Math.floor(this.visibleItemCount / 2)
      return (index - baseOffset) * - this.itemHeight
    },
    offsetToIndex (offset) {
      offset = Math.round(offset /  this.itemHeight) *  this.itemHeight
      return -(offset - Math.floor(this.visibleItemCount / 2) *  this.itemHeight) /  this.itemHeight
    },
    onTouchstart (event) {
      this.startOffset = this.offset
      this.startY = event.touches[0].clientY
      this.prevY = event.touches[0].clientY
      this.prevTime = new Date()
      this.transition = ''
    },
    onTouchmove (event) {
      const currentTime = +new Date()
      const currentY = event.touches[0].clientY
      const distance = currentY - this.startY
      this.offset = this.startOffset + distance
      // compute velocity
      this.velocity = (event.touches[0].clientY - this.prevY) / (currentTime - this.prevTime)
      this.prevY = currentY
      this.prevTime = currentTime
    },
    onTouchend () {
      this.transition = 'all 150ms ease'
      const endOffset = this.offset + this.velocity * 150 // 计算按原速度结束时的位置
      const index = this.offsetToIndex(endOffset)
      this.setIndex(index, true)
    },
    adjustIndex (index) {
      index = this.range(index, 0, this.count)
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.currentOptions[i])) return i
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.currentOptions[i])) return i
      }
    },
    setIndex (index, userAction = false) {
      // TODO:
      // console.log('original index ', index)
      index = this.adjustIndex(index) || 0
      console.log('adjusted index ', index)
      this.offset = this.indexToOffset(index)
      if (index !== this.currentIndex) {
        this.currentIndex = index
        userAction && this.$emit('change', index)
      }
    },
  },
  created(){
  }
}
</script>
<style lang="less">
.leui-picker-new-container-content {
  width: 100%;
  position: relative;
}
.leui-picker-new-container-mask {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background: linear-gradient( 180deg, hsla(0, 0%, 100%, 0.99), hsla(0, 0%, 100%, 0.4) ),
    linear-gradient(0deg, hsla(0, 0%, 100%, 0.99), hsla(0, 0%, 100%, 0.4));
  background-position: top, bottom;
  background-size: 100% 108px;
  background-repeat: no-repeat;
  transform: translateZ(0);
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.leui-picker-new-container-column {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.leui-picker-new-container-item {
  text-align: center;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333333;
}
</style>