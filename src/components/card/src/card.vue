<template>
  <div class="le-card border-1px-bottom">
    <div class="le-card-left">
      <slot name="left"></slot>
    </div>
    <div class="le-card-main">
      <p v-if="title" class="le-card-title">{{title}}</p>
      <p v-if="content" class="le-card-content" :class="{'clamp-2': showMore}">{{content}}</p>
      <slot></slot>
      <div v-if="hasMore" class="le-card-more" @click="showMore = !showMore">
        <Icon v-if="showMore" type="arrow-down-a" color="rgba(0, 0, 0, .6)"/>
        <Icon v-if="!showMore" type="arrow-up-a" color="rgba(0, 0, 0, .6)"/>
      </div>
    </div>
    <div class="le-card-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
import Icon from '../../icon';
export default {
  name: 'le-card',
  components: {
    Icon
  },
  props: {
    title: String,
    content: String,
    more: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showMore: true
    }
  },
  computed: {
    hasMore: function () {
      return this.more && this.content && this.content.length > 50
    }
  }
};
</script>
