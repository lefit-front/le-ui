<template>
  <div class="leui-picker-new-container-content" 
    @touchstart="onTouchstart" 
    @touchmove.prevent="onTouchmove"
    @touchend="onTouchend"
    @touchcancel="onTouchend">
    <div class="leui-picker-new-container-mask" :style="maskStyle"></div>
    <div v-if="isArr(datas)" class="leui-picker-new-container-column"  :style="wrapperStyle">
      <div class="leui-picker-new-container-item" 
        :style="itemStyle" 
        v-for="(item, index) in datas" 
        :key="index" 
        v-html="getOptionText(item)" 
        @click="setIndex(index, true)"></div>
    </div>
    <div v-else class="leui-picker-new-container-string" :style="{margin: `${itemHeight*(Math.floor(visibleItemCount/2))}px 0`, height: `${itemHeight}px`, lineHeight: `${itemHeight}px`}">{{datas}}</div>
  </div>
</template>
<script>
export default{
 data(){
    return {
      startY: 0,                // 垂直方向的开始位置
      startOffset: 0,           // 开始的位移位置
      offset: 0,                // 位移
      prevY: 0,                 // 上次位置
      prevTime: null,           // 上次滚动的时间
      velocity: 0,              // 移动速度
      transition: '',           // 动画
      currentDatas: this.datas, // 待选数据
      currentIndex: '',         // 当前选中
      defaultIndex: 0           // 默认选中
    }
  },
  props: {
    datas: {                                // 用于展示的数据
      type: [Array, String],
      default: () => {
        return []
      }
    },
    currentValue: [String, Number],         // 选中的值
    showKey: {                              // 显示的对象key
      type: String,
      default: 'label'
    },
    itemHeight: Number,                     // 单位px
    visibleItemCount: {                     // 显示多少行
      type: Number,
      default: 7,
      validator: (value) => {
        return [3, 5, 7].indexOf(value) > -1
      }
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
      return this.currentDatas.length
    }
  },
  watch: {
    datas (val) {
      this.setInitialData()
    }
  },
  methods: {
    range (num, min, max) {                                                                        // 判断范围
      return Math.min(Math.max(num, min), max)
    },
    isObj (x) {
      const type = typeof x
      return x !== null && (type === 'object' || type === 'function')
    },
    isArr (a) {
      return (typeof a === 'object') && Object.prototype.toString.call(a)==='[object Array]'
    },
    getOptionText (option) {                                                                       // 返回显示的字段
      return this.isObj(option) && this.showKey in option ? option[this.showKey] : option
    },
    isDisabled (option) {                                                                          // 是否可选中
      return this.isObj(option) && option.disabled
    },
    indexToOffset (index) {                                                                        // 通过选中项转为位移位置
      const baseOffset = Math.floor(this.visibleItemCount / 2)
      return (index - baseOffset) * - this.itemHeight
    },
    offsetToIndex (offset) {                                                                       // 通过位置转为选中项
      offset = Math.round(offset /  this.itemHeight) * this.itemHeight
      return -(offset - Math.floor(this.visibleItemCount / 2) *  this.itemHeight) / this.itemHeight
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
      this.velocity = (event.touches[0].clientY - this.prevY) / (currentTime - this.prevTime)      // 计算速度
      this.prevY = currentY
      this.prevTime = currentTime
    },
    onTouchend () {
      this.transition = 'all 150ms ease'
      const endOffset = this.offset + this.velocity * 150                                          // 计算按原速度结束时的位置
      const index = this.offsetToIndex(endOffset)
      this.setIndex(index, true)
    },
    adjustIndex (index) {                                                                          // 校验调整选中项
      index = this.range(index, 0, this.count)
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.currentDatas[i])) return i
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.currentDatas[i])) return i
      }
    },
    setIndex (index, userAction = false) {                                                         // 设置选中项
      console.log('original index ', index)
      index = this.adjustIndex(index) || 0
      console.log('adjusted index ', index)
      this.offset = this.indexToOffset(index)
      if (index !== this.currentIndex) {
        this.currentIndex = index
        userAction && this.$emit('change', index)
      }
    },
    setInitialData () {                                                                            // 设置初始值
      let isFinded = false
      this.isArr(this.datas) && this.datas.map((item, index) => {
        let value = typeof item === 'string' ? item : item.value
        if (value.toString() === this.currentValue.toString()) {
          this.setIndex(index)
          this.$emit('initData', index)
          isFinded = true
        } else {
          if ((this.datas.length - 1) === index && !isFinded) {
            this.setIndex(this.defaultIndex)
            this.$emit('initData', this.defaultIndex)
          }
        }
      })
    }
  },
  created () {
    this.setInitialData()
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
.leui-picker-new-container-string{
  text-align: center;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333333;
  width: 100%;
}
</style>