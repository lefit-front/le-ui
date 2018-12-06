<template>
  <div class="">
    <div class="black-model"></div>
    <div class="leui-picker-new">
      <div class="leui-picker-new-header" v-if="showbar">
        <div class="leui-picker-new-btn">取消</div>
        <div class="leui-picker-new-title">{{title}}</div>
        <div class="leui-picker-new-btn leui-picker-new-btn-active">确定</div>
      </div>
      <div class="leui-picker-new-container" :style="{height: pickerContainerHeight}">
        <picker-item :itemHeight="itemHeight" :visibleItemCount="visibleItemCount"></picker-item>
        <picker-item :itemHeight="itemHeight" :visibleItemCount="visibleItemCount"></picker-item>
        <!-- <picker-item :itemHeight="itemHeight" :visibleItemCount="visibleItemCount"></picker-item> -->
      </div>
    </div>
  </div>
</template>
<script>
import pickerItem from './picker-item'
export default{
  name: 'le-picker-new',
  props: {
    title: { // 选择栏标题
      type: String,
      default: '请选择'
    },
    show: { // 显示隐藏
      type: Boolean,
      default: false
    },
    data: { // 待选项
      type: Array,
      default: () => {
        return []
      }
    },
    value: { // 选中对象
      type: Array,
      default: () => {
        return []
      }
    },
    showbar: { // 显示顶部bar
      type: Boolean,
      default: true
    },
    visibleItemCount: { // 一次展示多少行数据
      type: Number,
      default: 5
    },
    itemHeight: {    // 每行数据的高度，单位px
      type: Number,
      default: 36
    }
  },
  components: {
    pickerItem
  },
  computed: {
    pickerContainerHeight () {
      return `${this.itemHeight * this.visibleItemCount}px`
    }
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