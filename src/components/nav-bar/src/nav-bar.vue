<template>
  <div class="leuv-nav-bar-box d-f" :style="{'height': height + 'px'}">
    <template v-for="(data, index) in dataList">
      <div class="j-c-c d-f a-i-c" :style="{'width':length + '%'}" @click="selectedEvent(data.id, data.to)">
        <div class="leuv-nav-bar-nav" :class="[{'leuv-nav-bar-border': index !== 0, 'leuv-nav-bar-selected': selected === data.id}]">{{data.name}}</div>
      </div>
    </template>
  </div>
</template>
<script>
/**
 * leuv-header
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
  name: 'leuv-nav-bar',
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
