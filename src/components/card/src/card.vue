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
