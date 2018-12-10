<template>
  <div v-if="value">
    <div class="black-model" @click="modelClick"></div>
    <div class="leui-picker-new">
      <div class="leui-picker-new-header" v-if="showBar">
        <div class="leui-picker-new-btn" @click="cancel">{{cancelText}}</div>
        <div class="leui-picker-new-title">{{title}}</div>
        <div class="leui-picker-new-btn leui-picker-new-btn-active" @click="confirm">{{confirmText}}</div>
      </div>
      <div class="leui-picker-new-container" :style="{height: pickerContainerHeight}">
        <picker-item 
          v-for="(item, index) in datas"
          :key="index"
          :datas="item"
          :itemHeight="itemHeight"
          :visibleItemCount="visibleItemCount"
          @change="itemChange($event, item, index)"
          @initData="initData($event, item, index)"
          :currentValue="currentValue[index]"
          :showKey="showKey"></picker-item>
      </div>
    </div>
  </div>
</template>
<script>
import pickerItem from './picker-item'
export default{
  name: 'le-picker-new',
  props: {
    title: {            // 选择栏标题
      type: String,
      default: '请选择'
    },
    value: {             // 显示隐藏
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showKey: {            // 用于显示的key
      type: String,
      default: 'label'
    },
    datas: {            // 待选项
      type: Array,
      default: () => {
        return []
      }
    },
    currentValue: {            // 选中对象
      type: Array,
      default: () => {
        return []
      }
    },
    showBar: {          // 显示顶部bar
      type: Boolean,
      default: true
    },
    visibleItemCount: { // 一次展示多少行数据
      type: Number,
      default: 5
    },
    itemHeight: {       // 每行数据的高度，单位px
      type: Number,
      default: 36
    }
  },
  data () {
    return {
      selectValue: []
    }
  },
  components: {
    pickerItem
  },
  computed: {
    pickerContainerHeight () {
      return `${this.itemHeight * this.visibleItemCount}px`
    }
  },
  methods: {
    itemChange(selectIndex, item, index){
      this.selectValue[index] = item[selectIndex]
      console.log('this.selectValue', JSON.stringify(this.selectValue))
      this.$emit('change', this.selectValue)
    },
    initData(selectIndex, item, index){ // 初始化数据
      this.selectValue[index] = item[selectIndex]
    },
    cancel(){
      this.$emit('input', false)
    },
    confirm(){
      this.$emit('input', false)
      this.$emit('select', this.selectValue)
    },
    modelClick(){
      this.$emit('input', false)
      this.$emit('modelClick')
    }
  },
  mounted () {
    console.log(this.datas);
    console.log(this.currentValue)
  }
}
</script>
<style lang="less">
@import '../../../styles/custom';
@ITEM_HEIGHT: 36px;
.black-model{
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.35);
  width: 100%;
  height: 100vh;
  z-index: 1000;
}
.leui-picker-new{
  z-index: 1001;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 50%;
  margin-left: -50%;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
}
.leui-picker-new-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background: #f9f9f9;
}
.leui-picker-new-btn{
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: PingFangSC-Regular;
}
.leui-picker-new-title{
  font-size: 18px;
  font-weight: 500;
  font-family: PingFangSC-Medium;
}
.leui-picker-new-btn-active{
  color: @primary-color;
}
.leui-picker-new-container{
  background-color: #fff;
  display: flex;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 30px;
}
</style>