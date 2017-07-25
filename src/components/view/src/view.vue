<template>
  <div class="le-view" :class="shape ? 'le-view-' + shape : ''" :style="`width: ${realWidth}px; height: ${realHeight}px`">
    <div v-if="defaultImg && defaultShow" class="le-view-default" :class="{'le-view-hide': ready}" :style="`backgroundImage: url(${defaultImg})`"></div>
    <img v-show="ready" class="le-view-img" :class="[{'le-view-show': fade && ready}, {'le-view-cover': cover}]" :src="src" @load="handleImgReady"/>
  </div>
</template>

<script>
export default {
  name: 'le-view',

  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 200
    },
    height: {
      type: [Number, String],
      default: 200
    },
    defaultImg: String,
    fade: Boolean,
    shape: {
      type: String,
      validator (value) {
        return [
          'normal',
          'round'
        ].indexOf(value) > -1
      },
      default: 'normal'
    },
    cover: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      value: '',
      ready: false,
      defaultShow: true,
      realWidth: '',
      realHeight: ''
    }
  },

  watch: {
    value (val) {
      // console.log(val)
      this.$emit('change', val)
    }
  },

  methods: {
    handleImgReady () {
      this.ready = true
      this.defaultShow = false
    }
  },

  mounted: function () {
    this.realWidth = typeof(this.width) === number ? this.width + 'px' : this.width
    this.realHeight = typeof(this.height) === number ? this.height + 'px' : this.height
  }
};
</script>
