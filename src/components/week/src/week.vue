<template>
  <div class="lemo-week">
    <div class="lemo-week-nav" v-show="Array.isArray(data) && data.length">
      <div
        class="lemo-week-item"
        v-for="(item, index) in data"
        :class="{'is-selected': curIndex === index}"
        @click="selectDate(item, index)">
        <div class="lemo-week-item-label">
          <p class="title">{{item.name}}</p>
          <p class="content">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lemo-week',
  props: {
    data: {
      type: Array,
      required: true
    },
    active: Number
  },
  data () {
    return {
      curIndex: this.active
    }
  },
  watch: {
    active (val) {
      this.curIndex = val
    }
  },
  methods: {
    selectDate (item, index) {
      this.curIndex = index
      this.$emit('select', {item: item, index: index})
    }
  },
  mounted () {
    this.$nextTick(function () {
    })
  }
}
</script>
<style lang="less">
@import "../../../styles/index.less";
@week: lemo-week;

.@{week} {
  .@{week}-nav {
    position: relative;
    justify-content: space-around;
    padding: 0 17px;
    padding-top: 3px;
    overflow: hidden;
    display: flex;
    text-align: center;
    background-color: @head-bg;
    .@{week}-item {
      margin-right: 0;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 38px;
      .title {
        margin: 0;
      }
      .content {
        display: none;
        font-size: 10px;
      }
      .@{week}-item-label {
        display: inline-block;
        position: relative;
        color: @desc-text-color;
        font-size: @font-size-base;
        line-height: 2.3;
        text-decoration: none;
      }
    }
    .@{week}-item.is-selected {
      padding: 0;
      border-bottom: none;
      margin-bottom: 0px;
      .title {
        display: block;
        padding: 0 6px;
        line-height: 24px;
        height: 20px;
        color: @primary-color;
        margin: 0;
      }
      .content {
        position: relative;
        display: block;
        padding: 0 6px;
        margin: 0;
        line-height: 16px;
        color: @primary-color;
      }
      .preText {
        display: inline;
      }
      .@{week}-item-label {
        font-weight: bold;
        font-size: @font-size-small;
        display: inline-block;
        position: relative;
        height: 100%;
        background-color: @body-background;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        box-shadow: @shadow-up;
      }
    }
  }
}
</style>
