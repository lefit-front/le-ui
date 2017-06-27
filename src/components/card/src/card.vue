<template>
  <div class="lemo-card">
    <div class="lemo-card-left">
      <p class="lemo-card-title">{{title}}</p>
      <p class="lemo-card-content" :class="{'lemo-card-clamp-2': showMore}">{{content}}</p>
      <div v-if="hasMore" class="lemo-card-more" @click="showMore = !showMore">
        <Icon v-if="showMore" type="xiangshangsanjiaoshouqi"/>
        <Icon v-if="!showMore" type="xiangxiasanjiaoxialazhankai"/>
      </div>
    </div>
    <div class="lemo-card-img">
      <ImgView :img="img" :width="80" :height="80" shape="round" :defaultImg="defaultImg"/>
      <Icon v-if="!img" type="logo_lefit"/>
    </div>
  </div>
</template>
<script>
const prefixCls = 'lemo-card';

export default {
  name: 'lemo-card',
  props: {
    title: String,
    content: String,
    img: String,
    more: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showMore: true,
      defaultImg: 'https://cdn.leoao.com/m/img/blank_class.png?imageView2/2/w/200'
    }
  },
  computed: {
    hasMore: function () {
      return this.more && this.content && this.content.length > 50
    }
  }
};
</script>
<style lang="less">
@import "../../../styles/index.less";

@card: lemo-card;
.@{card} {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  .@{card}-more {
    text-align: center;
    margin-top: 5px;
  }
  .@{card}-title {
    font-size: 18px;
    color: #000;
    margin-bottom: 6px;
    font-weight: bold;
  }
  .@{card}-content {
    font-size: 12px;
    color: #6e6e6e;
    padding-right: 15px;
  }
  .@{card}-img {
    text-align: center;
    color: rgba(0, 0, 0, .3);
    align-self: flex-start;
  }
  .@{card}-clamp-2 {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
