<template>
  <div class="le-view" :class="shape ? 'le-view-' + shape : ''" :style="`width: ${realWidth}; height: ${realHeight}`" @click="handleClick">
    <div v-if="defaultImg && defaultShow" class="le-view-default" :class="{'le-view-hide': ready}" :style="`backgroundImage: url(${defaultImg})`"></div>
    <img v-show="ready" class="le-view-img" :class="[{'le-view-show': fade && ready}, {'le-view-cover': cover}]" :src="src || defaultImg" @load="handleImgReady" :style="imgStyle"/>
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
      default: 'auto'
    },
    height: {
      type: [Number, String],
      default: 'auto'
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
    },
    imgStyle: {
      type: Object
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
    },
    handleClick () {
      this.$emit('click')
    }
  },

  mounted: function () {
    this.realWidth = typeof(this.width) === 'number' ? this.width + 'px' : this.width
    this.realHeight = typeof(this.height) === 'number' ? this.height + 'px' : this.height
  }
};
</script>
