<template>
  <div class="lemo-nav-bar-box d-f" :style="{'height': height + 'px'}">
    <template v-for="(data, index) in dataList">
      <div class="j-c-c d-f a-i-c" :style="{'width':length + '%'}" @click="selectedEvent(data.id, data.to)">
        <div class="lemo-nav-bar-nav" :class="[{'lemo-nav-bar-border': index !== 0, 'lemo-nav-bar-selected': selected === data.id}]">{{data.name}}</div>
      </div>
    </template>
  </div>
</template>
<script>
/**
 * lemo-header
 * @module components/nav-bar
 * @desc 导航栏
 * @param {Object} [dataList] - 展示数据
 * @数据格式
 * [
 *  { 
 *   'id': 'card',     // 内容对应id 唯一标识
 *   'name': '会员卡',  // 展示内容
 *   'to': '/button'   // 跳转路径
 *  }
 * ]
 * @param {Number} [height=45] -  nav-bar高度 默认45, 接受 数字
 * @param {String} [select='']    -  默认选中nav 不设置没有默认选中 ,接受  数据中的id标识
 * 
 * @example
 * <nav-bar :height="45" style="background:#f1f1f1" :dataList="data" select="bl"></nav-bar>
 */
export default {
  name: 'lemo-nav-bar',
  data () {
    return {
      selected: this.select
    }
  },
  props: {
    title: String,
    select: {
      type: String,
      default: ''
    },
    dataList: {
      type: Array
    },
    height:{
      type: Number,
      default: 45
    }
  },
  computed: {
    length () {
      return 100/this.dataList.length
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

<style lang="less" scoped>
@import "../../../styles/index.less";
@msgbox: lemo-nav-bar;
.@{msgbox}-box{
  width:100%;
  padding:0;
  margin:0;
  background-color:@head-bg ;
  background-color:inherit;
}
.@{msgbox}-nav{
  width:100%;
  text-align:center;
  opacity: 0.6;
  font-size: 15px;
  color: @text-color;
}
.@{msgbox}-border{
  border-left:1px rgba(0, 0, 0, 0.1) solid;
}
.@{msgbox}-selected{
  opacity: 0.9;
  font-size: 15px;
  color: @primary-color;
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
/*横向 每个项目两侧的间隔相等*/
.j-c-s-a{
  -webkit-justify-content:space-around;
  justify-content:space-around;
  -moz-box-pack:space-around;
  -webkit--moz-box-pack:space-around;
  box-pack:space-around;
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
