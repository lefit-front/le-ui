<template>
  <div class="lemo-store">
    <ImgView class="lemo-store-img" :src="img" width="60" height="60" :cover="true"/>
    <div class="lemo-store-info">
      <div class="lemo-store-name">
        {{name}}
      </div>
      <div class="lemo-store-address clamp-2">
        {{address}}
      </div>
    </div>
    <div class="lemo-store-opt" @click="handleClickLocation">
      <span class="lemo-store-distance">{{distance}}km</span>
      <Icon type="icon_weizhi"/>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon';
import ImgView from '../../img-view';
export default {
  name: 'lemo-store',
  components: {
    Icon,
    ImgView
  },
  props: {
    name: String,
    address: String,
    img: {
      type: String,
      default: 'https://img.leoao.com/o_1b16hk6nh1j6c1t59qo6i4k3fk7.jpg?imageView2/2/w/550'
    },
    distance: Number
  },

  data () {
    return {
    }
  },

  methods: {
    handleClickLocation () {
      this.$emit('location')
    }
  }
};
</script>

<style lang="less">
@import "../../../styles/index.less";
@store: lemo-store;

.@{store} {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
  border-top: 1px solid @border-color-thin;
  .@{store}-img {
    border-radius: 4px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 10px;
  }
  .@{store}-info {
    flex-shrink: 1;
    flex-grow: 1;
    .@{store}-name {
      font-family: 'PingFangSC-Regular';
      font-size: 15px;
      color: rgba(0, 0, 0, 0.8);
      margin-bottom: 3px;
      font-weight: 400;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .@{store}-address {
      color: @sub-text-color;
      font-size: @font-size-small;
    }
  }
  .@{store}-opt {
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 10px;
  }
  .@{store}-distance {
    font-size: @font-size-small;
    color: rgba(0, 0, 0, 0.3)
  }
}
</style>
