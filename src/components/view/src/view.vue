<template>
  <div class="leuv-view" :class="shape ? 'leuv-view-' + shape : ''" :style="`width: ${width}px; height: ${height}px`">
    <div v-if="defaultImg && defaultShow" class="leuv-view-default" :class="{'leuv-view-hide': ready}" :style="`backgroundImage: url(${defaultImg})`"></div>
    <img v-show="ready" class="leuv-view-img" :class="[{'leuv-view-show': fade && ready}, {'leuv-view-cover': cover}]" :src="src" @load="handleImgReady"/>
  </div>
</template>

<script>
export default {
  name: 'leuv-view',

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
      defaultShow: true
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
  }
};
</script>
