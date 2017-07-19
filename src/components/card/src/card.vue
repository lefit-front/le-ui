<template>
  <div class="le-card">
    <div class="le-card-left">
      <p v-if="title" class="le-card-title">{{title}}</p>
      <p v-if="content" class="le-card-content" :class="{'clamp-2': showMore}">{{content}}</p>
      <slot></slot>
      <div v-if="hasMore" class="le-card-more" @click="showMore = !showMore">
        <Icon v-if="showMore" type="xiangshangsanjiaoshouqi"/>
        <Icon v-if="!showMore" type="xiangxiasanjiaoxialazhankai"/>
      </div>
    </div>
    <div class="le-card-img">
      <LeView :src="img" :width="imgSize" :height="imgSize" shape="round" :defaultImg="defaultImg"/>
      <Icon v-if="!img" type="logo_lefit"/>
    </div>
  </div>
</template>
<script>
import Icon from '../../icon';
import LeView from '../../view';
export default {
  name: 'le-card',
  components: {
    Icon,
    LeView
  },
  props: {
    title: String,
    content: String,
    img: String,
    imgSize: {
      type: [String, Array],
      default: 80
    },
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
