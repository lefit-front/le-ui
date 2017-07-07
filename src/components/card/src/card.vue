<template>
  <div class="leuv-card">
    <div class="leuv-card-left">
      <p class="leuv-card-title">{{title}}</p>
      <p class="leuv-card-content" :class="{'clamp-2': showMore}">{{content}}</p>
      <div v-if="hasMore" class="leuv-card-more" @click="showMore = !showMore">
        <Icon v-if="showMore" type="xiangshangsanjiaoshouqi"/>
        <Icon v-if="!showMore" type="xiangxiasanjiaoxialazhankai"/>
      </div>
    </div>
    <div class="leuv-card-img">
      <LeuvView :src="img" :width="80" :height="80" shape="round" :defaultImg="defaultImg"/>
      <Icon v-if="!img" type="logo_lefit"/>
    </div>
  </div>
</template>
<script>
import Icon from '../../icon';
import LeuvView from '../../view';
export default {
  name: 'leuv-card',
  components: {
    Icon,
    LeuvView
  },
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

@card: leuv-card;
.@{card} {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid @border-color-thin;
  .@{card}-more {
    text-align: center;
    margin-top: 5px;
  }
  .@{card}-title {
    font-size: @font-size-h3;
    color: #000;
    margin-bottom: 6px;
    font-weight: bold;
  }
  .@{card}-content {
    font-size: @font-size-small;
    color: #6e6e6e;
    padding-right: 15px;
  }
  .@{card}-img {
    text-align: center;
    align-self: flex-start;
  }
}
</style>
