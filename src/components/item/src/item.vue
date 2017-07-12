<template>
  <div class="leuv-item">
    <LeuvView v-if="img" class="leuv-item-img" :src="img" width="60" height="60" :cover="true"/>
    <div class="leuv-item-info">
      <div class="leuv-item-name">
        {{name}}
      </div>
      <div class="leuv-item-content clamp-2">
        {{content}}
      </div>
    </div>
    <div class="leuv-item-opt" @click="handleClickMore">
      <span class="leuv-item-more">{{more}}</span>
      <Icon type="icon_weizhi"/>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon';
import LeuvView from '../../view';
export default {
  name: 'leuv-item',
  components: {
    Icon,
    LeuvView
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
