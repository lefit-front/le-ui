<template>
  <div class="lemo-item">
    <LemoView v-if="img" class="lemo-item-img" :src="img" width="60" height="60" :cover="true"/>
    <div class="lemo-item-info">
      <div class="lemo-item-name">
        {{name}}
      </div>
      <div class="lemo-item-content clamp-2">
        {{content}}
      </div>
    </div>
    <div class="lemo-item-opt" @click="handleClickMore">
      <span class="lemo-item-more">{{more}}</span>
      <Icon type="icon_weizhi"/>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon';
import LemoView from '../../view';
export default {
  name: 'lemo-item',
  components: {
    Icon,
    LemoView
  },
  props: {
    name: String,
    content: String,
    img: String,
    icon: String,
    more: [Number, String]
  },

  data () {
    return {
    }
  },

  methods: {
    handleClickMore () {
      this.$emit('more')
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../styles/index.less";
@item: lemo-item;

.@{item} {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
  border-top: 1px solid @border-color-thin;
  .@{item}-img {
    border-radius: 4px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 10px;
  }
  .@{item}-info {
    flex-shrink: 1;
    flex-grow: 1;
    .@{item}-name {
      font-family: 'PingFangSC-Regular';
      font-size: 15px;
      color: rgba(0, 0, 0, 0.8);
      margin-bottom: 3px;
      font-weight: 400;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .@{item}-content {
      color: @sub-text-color;
      font-size: @font-size-small;
    }
  }
  .@{item}-opt {
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 10px;
  }
  .@{item}-more {
    font-size: @font-size-small;
    color: rgba(0, 0, 0, 0.3)
  }
}
</style>
