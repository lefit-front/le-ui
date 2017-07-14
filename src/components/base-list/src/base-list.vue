<template>
  <div class="le-base-list d-f a-i-c" @click="toRouter" :class="[{'boder-1px-bottom ': border === 'block'}]">
    <div class="le-base-list-title"
      :style="{
        'font-size': size+ 'px',
        'color': color
      }"
    >{{title}}</div>
    <div class="le-icon-floatRight"
      :style="{
        'font-size': size+ 'px',
        'color': color
      }"
    ><slot></slot></div>
    <Icon type="jiantou_right" class="le-icon-floatRight" v-if="isLink"
      :style="{
        'font-size': size+ 'px',
        'color': color
      }"
    ></Icon>
  </div>
</template>
<script>
/**
 * le-header
 * @module components/base-list
 * @desc 基础列表
 * @param {string} [title] - 列表title
 * @param {number} [size]  - 设置title 和 icon的大小
 * @param {string} [color]  - 设置title 和 icon的颜色
 * @param {string} [to] - 跳转路径,省略返回click事件
 * @param {string} [border=block] -  0.5px bottom border,接受 block, none
 * @param {boolean} [isLink=false] - jiantou icon, 接受 true, false
 * @param {slot} - 自定义内容
 *
 * @example
 *  <base-list title="优惠卷" to="/button">
 *    <div>这里是自定义内容</div>
 *  </base-list>
 */
import Icon from '../../icon';
export default {
  name: 'le-base-list',
  components: {
    Icon
  },
  props: {
    title: String,
    isLink: Boolean,
    to: String,
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#000'
    },
    border: {
      type: String,
      default: 'block',
      validator (value) {
        return [
          'none',
          'block'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    toRouter () {
      if (this.to) {
        this.$router.push({
          path: this.to
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
.le-base-list{
  padding:15px 0;
}
.boder-1px-bottom{
  position:relative;
}
.boder-1px-bottom:after{
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:1px;
  border-top:1px solid rgba(0, 0, 0, 0.1);
  color:#d9d9d9;
  transform-origin: 0 0;
  transform: scaleY(0.5);
}
.le-icon-floatRight{
  margin-left:auto;
}
.le-title{
  font-size: @font-size-h4;
  color: @text-color;
}
/*竖向居中*/
.a-i-c{
  align-items:center;
  -webkit-align-items:center;
  box-align:center;
  -moz-box-align:center;
  -webkit-box-align:center;
}
.d-f{
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
}
</style>
