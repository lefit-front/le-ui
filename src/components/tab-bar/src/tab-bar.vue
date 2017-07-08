<template>
  <div :class="`leuv-tab-bar leuv-tab-bar-${type} d-f a-i-c`">
    <template v-for="data in dataList">
      <div class="leuv-tab-bar-item d-f a-i-c" :class="[{'leuv-is-selected': selected === data.id}]" @click="selectedEvent(data.id, data.to)" >
        <div v-if="data.slot" class="leuv-tab-bar-slot" v-html="data.slot"></div>
        <div v-if="data.img" class="leuv-tab-bar-img" :style="`backgroundImage: url(${data.img})`"></div>
        <div class="leuv-tab-bar-name">
          {{data.name}}
        </div>
        <div v-if="line" :class="[{'leuv-is-line': selected === data.id}]" v-show=" selected === data.id "></div>
      </div>
    </template>
  </div>
</template>
<script>
/**
 * leuv-header
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
 * @param {Number} [height=35] -  tab-bar高度 默认35, 接受 数字
 * @param {String} [select]    -  默认选中tab 不设置没有默认选中 ,接受  数据中的id标识
 *
 * @example
 * <tab-bar style="background-color:#f1f1f1;" :dataList="data" height="35" select="card"></tab-bar>
 */
export default {
  name: 'leuv-tab-bar',
  data () {
    return {
      selected: this.select
    }
  },
  props: {
    title: String,
    type: {
      type: String,
      default: 'box',
      validator (value) {
        return [
          'box',
          'block'
        ].indexOf(value) > -1
      }
    },
    select: {
      type: [String, Number],
      default: ''
    },
    dataList: {
      type: Array
    },
    line: {
      type: Boolean,
      default: false
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
@tab: leuv-tab-bar;
.@{tab} {
  display: flex;
  justify-content: space-between;
  .@{tab}-item {
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 2;
    flex-shrink: 2;
    color: @text-color;
  }
  .@{tab}-slot {
    font-family: "DIN-Bold";
    font-size: 24px;
    margin-bottom: 2px;
  }
  .@{tab}-img {
    width: 33px;
    height: 33px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    margin-bottom: 5px;
  }
  .@{tab}-name {
    padding:0;
    font-size: @font-size-small;
  }
  .leuv-is-line{
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
}

.@{tab}-box{
  padding: 0 15px;
  background-color: @head-bg;
  .@{tab}-item {
    padding: 6px 0;
  }
  .@{tab}-name {
    opacity: 0.3;
  }
  .leuv-is-selected{
    opacity: 1;
    color: @text-color;
  }
}

.@{tab}-block {
  background-color: @body-background;
  padding: 15px 0;
  border-bottom: 1px solid @border-color-thin;
  .@{tab}-name {
    font-size: @font-size-h6;
  }
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
