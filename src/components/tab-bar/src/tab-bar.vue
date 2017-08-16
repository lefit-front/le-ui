<template>
  <div :class="`le-tab-bar le-tab-bar-${type} d-f a-i-c`">
    <template v-for="data in dataList">
      <div class="le-tab-bar-item d-f a-i-c" :class="[{'le-tab-bar-selected': selected === data.id}]" @click="selectedEvent(data.id, data.to)" >
        <div v-if="data.slot" class="le-tab-bar-slot" v-html="data.slot"></div>
        <div v-if="data.img" class="le-tab-bar-img" :style="`backgroundImage: url(${data.img})`"></div>
        <div v-if="data.sprite" class="le-tab-bar-sprite">
          <div class="le-tab-bar-sprite-img" :class="data.sprite"></div>
        </div>
        <div class="le-tab-bar-name">
          {{data.name}}
        </div>
        <div v-if="line" :class="[{'le-tab-bar-line': selected === data.id}]" v-show=" selected === data.id "></div>
      </div>
    </template>
  </div>
</template>
<script>
/**
 * le-header
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
  name: 'le-tab-bar',
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
      this.$emit('change', id)
      this.selected = id
    }
  }
}
</script>
