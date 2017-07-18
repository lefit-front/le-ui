<template>
  <div class="le-item">
    <LeView v-if="img" class="le-item-img" :src="img" width="60" height="60" :cover="true"/>
    <div class="le-item-info">
      <div class="le-item-name">
        {{name}}
      </div>
      <div class="le-item-content clamp-2">
        {{content}}
      </div>
    </div>
    <div class="le-item-opt" @click="handleClickMore">
      <span class="le-item-more">{{more}}</span>
      <Icon :type="icon"/>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon';
import LeView from '../../view';
export default {
  name: 'le-item',
  components: {
    Icon,
    LeView
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
