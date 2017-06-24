<template>
  <div class="lemo-tab-bar-box d-f a-i-c" :style="{'height': height + 'px'}">
    <template v-for="data in dataList">
      <div class="lemo-tab-bar-name d-f a-i-c" :style="{'height': height + 'px'}" :class="[{'lemo-is-selected': selected === data.id}]" @click="selectedEvent(data.id, data.to)">
        {{data.name}}
        <div :class="[{'lemo-is-line': selected === data.id}]" v-show=" selected === data.id "></div>
      </div>
    </template>
  </div>
</template>
<script>
/**
 * lemo-header
 * @module components/tab-bar
 * @desc tab切换
 * @param {Object} [dataList] - 展示数据
 * @数据格式
 * [
 *  { 
 *   'id': 'card',     // 内容对应id 唯一标识
 *   'name': '会员卡',  // 展示内容
 *   'to': '/button'   // 跳转路径
 *  }
 * ]
 * @param {String} [height=35] -  tab-bar高度 默认35, 接受 数字
 * @param {String} [normal]    -  默认选中tab 不设置没有默认选中 ,接受  数据中的id标识
 * 
 * @example
 * <tab-bar style="background-color:#f1f1f1;" :dataList="data" height="35" normal="card"></tab-bar>
 */
export default {
  name: 'lemo-tab-bar',
  data () {
    return {
      selected: this.normal 
    }
  },
  props: {
    title: String,
    normal: {
      type: String,
      default: ''
    },
    dataList: {},
    height:{
      default: 35
    }
  },
  methods: {
    selectedEvent (id, to) {
      this.selected = id
      if (to !== '') {
        this.$router.push({
          path: to
        })
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/index.less";
@msgbox: lemo-tab-bar;
.@{msgbox}-box{
  padding:0 15px;
  background-color: @head-bg;
  background-color:inherit;
}
.@{msgbox}-name{
  padding:0;
  font-size: @font-size-h5;
  color: @text-color;
  margin-right:30px;
  opacity: 0.3;
  position:relative;
}
.lemo-is-selected{
  opacity: 1;
  font-weight:bold;
  color: @text-color;
}
.lemo-is-line{
  position:absolute;
  bottom:0;
  width:100%;
  height:2px;
  background-color: @text-color;
  animation: mymove 1s;
  -webkit-animation: mymove 1s;
  animation-iteration-count:1;
  -webkit-animation-iteration-count:1; /* Safari 和 Chrome */
}
@keyframes mymove
{
from {width:20%; opacity:0.1; left:50%; margin-left:-10%;}
to {width:100%;; opacity:1; left:0; margin-left:0;}
}
/*flex布局 css兼容*/
.d-f{
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
}
/*竖向居中*/
.a-i-c{
  align-items:center;
  -webkit-align-items:center;
  box-align:center;
  -moz-box-align:center;
  -webkit-box-align:center;
}
</style>
